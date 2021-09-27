import React, { useState, useEffect } from 'react';
import { ethers, Contract } from 'ethers';
import { checkWalletForUBIs, doSwap } from './swap-checkout';
import Order from "../../artifacts/contracts/Order.sol/Order.json";

import KlerosEscrow from '../transactions/kleros-escrow';
import Web3 from 'web3';
import crypto from 'crypto';
import bs58 from 'bs58';

const ENABLE_SWAP_ON_CHECKOUT = false;
const AFTER_DUE = 14;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const order = new Contract(
    '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    Order.abi,
    signer
);

/**
 * IPFS uses the SHA256 algorithm. Use Sum with the byte content of given file.
 * IPFS uses the Base58btc encoding for human readable hashes.
 */
// Check: https://stackoverflow.com/questions/40998621/how-to-create-an-ipfs-compatible-multihash
function hashData (rawData) {
    const hashFunction = Buffer.from('12', 'hex');

    const digest = crypto.createHash('sha256').update(rawData).digest()
    const digestSize = Buffer.from(digest.byteLength.toString(16), 'hex')

    const combined = Buffer.concat([hashFunction, digestSize, digest])

    const multihash = bs58.encode(combined)
    return multihash;
}

async function setupEscrow() {
    let web3;
    if (process.env.REACT_APP_ENV === 'local') {
        web3 = new Web3(
            new Web3.providers.HttpProvider('http://localhost:8545')
        );
    } else {
        web3 = new Web3(process.env.REACT_APP_NEXT_PUBLIC_INFURA_ENDPOINT);
    }

    const klerosEscrow = new KlerosEscrow(web3);
    await klerosEscrow.setCourtAndCurrency();
    return klerosEscrow;
}

async function getDummyDataForTransaction() {
    const signerAddress = await signer.getAddress();
    const sampleCheckoutInfo = {
        products: [
            {
                id: 11241,
                name: 'AAA',
                unitPrice: {
                    value: 100,
                    currency: 'UBI'
                },
                quantity: 3
            },
            {
                id: 3345,
                name: 'fSCd',
                unitPrice: {
                    value: 40,
                    currency: 'UBI'
                },
                quantity: 1
            },
            {
                id: 49920,
                name: 'EEAA',
                unitPrice: {
                    value: 500,
                    currency: 'UBI'
                },
                quantity: 1
            }
        ],
        walletOrigin: signerAddress || '0x2546BcD3c84621e976D8185a91A922aE77ECEc30',
        walletDestination: '0x38017ec5de3f81d8b29b9260a3b64fa7f78c039c'
    };
    const amount = 100;
    const recipient = sampleCheckoutInfo.walletDestination;
    const timeout = 30 * 60;
    const metaEvidence = {
        "fileTypeExtension": "json",
        "category": "Escrow",
        "title": "Payment for order checkout 1122 - Yubiai Marketplace",
        "description": "Payment for order number 1122",
        "aliases": {
            [sampleCheckoutInfo.walletOrigin]: "Buyer",
            [sampleCheckoutInfo.walletDestination]: "Seller",
        },
        "question": "Does the seller attach a shipping invoice for the order?",
        "rulingOptions": {
            "type": "single-select",
            "titles": ["Yes", "No"],
            "descriptions": [
                "The website is compliant. This will release the funds to Alice.",
                "The website is not compliant. This will refund Bob."
            ]
        }
    };
    return { sampleCheckoutInfo, amount, recipient, timeout, metaEvidence };
}

/**
 * Escrow steps:
 * 1. [Frontend] Create transaction: createTransaction => Send to backend
 * - Modelate transaction (Backend), Order (Backend and Smart contract)
 * [ transactionId, myWallet, walletDestination]
 * 2. [Backend] From seller: If attach order shipping evidence:
 *      Finish transaction: executeTransaction
 * 3. [Frontend] Buyer didn't receive any update => Start dispute
 *      [Backend] => startDispute(transactionId, walletOrigin)
 *                   startDispute(transactionId, walletDestination) // This will be executed on backend
 */
export default function DummyCheckout() {
    const [transactionId, setTransactionId] = useState('');
    const [escrowInstance, setEscrowInstance] = useState(null);
    const [fixtureData, setFixtureData] = useState({});

    useEffect(() => {
        async function init() {
            const escrow = await setupEscrow();
            setEscrowInstance(escrow);
            const fData = await getDummyDataForTransaction();
            setFixtureData({...fData});
        }
        init();
    }, []);

    const startCheckout = async (_amount, _recipient, _timeout, _metaEvidence) => {
        if (ENABLE_SWAP_ON_CHECKOUT && !checkWalletForUBIs()) {
            doSwap();
        }
        const hash = hashData(_metaEvidence);
        escrowInstance.createTransaction(
            _amount, _recipient, _timeout, {
               ..._metaEvidence,
               fileHash: hash
            }
        ).then(async (response) => {
            let args = (response || {}).arguments;
            const _transactionIdResult = (args && args.length && args[1]) ? args[1]: '';
            if (_transactionIdResult) {
                setTransactionId(_transactionIdResult);
                const today = new Date();
                const products = [
                    ...fixtureData.sampleCheckoutInfo.products.map(product => ({
                        product: {
                            name: product.name,
                            price: {
                                value: product.unitPrice.value,
                                currency: product.unitPrice.currency
                            }
                        },
                        quantity: product.quantity
                    }))
                ];
                
                products.forEach(
                    product => order.addProduct(product));
                order.setOrderInfo(
                    1234,
                    today.getTime(),
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate() + AFTER_DUE).getTime(),
                    _transactionIdResult,
                    products.length
                );
            }
        });
    }

    /**
     * From backend/smart contract
     */
    const finishTransaction = () => {
        if (transactionId) {
            escrowInstance.executeTransaction(transactionId);
        }
    };

    /**
     * From backend/smart contract
     */
    const startDispute = () => {
        if (transactionId) {
            escrowInstance.payArbitrationFee(transactionId);
        }
    };

    return (
        <div>
            <h3>Dummy checkout</h3>
            <div>
                <p>These are the products you will order</p>
                <div style={{display: 'flex'}}>
                    {
                        fixtureData.sampleCheckoutInfo && 
                        fixtureData.sampleCheckoutInfo.products.map((product, index) => {
                            return <div style={{marginRight: '1rem'}}
                                        key={`product-${index}`}>
                                <p>Product: {product.name}</p>
                                <p>Price: {product.unitPrice.value * product.quantity} {product.unitPrice.currency}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <button onClick={_ => startCheckout(
                    fixtureData.amount, fixtureData.recipient, fixtureData.timeout, fixtureData.metaEvidence)}>
                    Do Checkout
                </button>
            </div>
            {
                transactionId && (
                    <div>
                        <div>Transaction linked: { transactionId }</div>
                        <div style={{marginTop: '3rem'}}>
                            <p style={{fontWeight: '500', fontSize: '1.5rem'}}>Emulate scenarios</p>
                            <div style={{display: 'flex'}}>
                                <div style={{marginRight: '1rem'}}>
                                    <div>
                                        <p>Finish transaction</p>
                                        <button onClick={finishTransaction}>Execute</button>
                                    </div>
                                </div>
                                <div style={{marginRight: '1rem'}}>
                                    <div>
                                        <p>Start dispute</p>
                                        <button onClick={startDispute}>Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}