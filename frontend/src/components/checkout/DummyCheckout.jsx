import React, { useState, useEffect } from 'react';
// import { checkWalletForUBIs, doSwap } from './swap-checkout';
import KlerosEscrow from '../transactions/kleros-escrow';
import Web3 from 'web3';
import crypto from 'crypto';
import bs58 from 'bs58';


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
    const web3 = new Web3(
        process.env.NEXT_PUBLIC_INFURA_ENDPOINT ||
        new Web3.providers.HttpProvider('http://localhost:8545')
    );

    const klerosEscrow = new KlerosEscrow(web3);
    await klerosEscrow.setCourtAndCurrency();
    return klerosEscrow;
}

function getDummyDataForTransaction() {
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
        date: '2021-11-19T14:02:11Z',
        walletOrigin: '0x2546BcD3c84621e976D8185a91A922aE77ECEc30',
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
export default function DummyCheckout(props) {
    const [transactionId, setTransactionId] = useState('');
    const [escrowInstance, setEscrowInstance] = useState(null);
    const [fixtureData, setFixtureData] = useState({});

    useEffect(async () => {
        const escrow = await setupEscrow();
        setEscrowInstance(escrow);
        setFixtureData({...getDummyDataForTransaction()});
    }, []);

    const startCheckout = async (_amount, _recipient, _timeout, _metaEvidence) => {
        /*
            if (!checkWalletForUBIs()) {
                doSwap();
            }
            createEscrowTransaction();
        */

        const hash = hashData(_metaEvidence);
        // Check: https://stackoverflow.com/questions/66236701/multihash-must-be-a-buffer-error-while-trying-to-upload-files-to-ipfs-using-ip
        // To send file to createTransaction, check contract methods and where to find it
        const _transactionId = escrowInstance.createTransaction(
            _amount, _recipient, _timeout, {
               ..._metaEvidence,
               fileHash: hash
            }
        ).then(async (response) => {
            setTransactionId(response._transactionId);
            if (response._transactionId) {
                await fetch.post('/api/transactions/create', {
                    body: {
                        transactionId: _transactionId,
                        walletOrigin: fixtureData.sampleCheckoutInfo.walletOrigin,
                        walletDestination: fixtureData.sampleCheckoutInfo.walletDestination
                    }
                });
                await fetch.post('/api/orders/create', {
                    body: {
                        transactionId: _transactionId,
                        products: [
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
                        ]
                    }
                });
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