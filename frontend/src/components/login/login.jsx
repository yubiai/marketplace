import React from 'react';
import axios from 'axios';
import { setupEthState } from '../../ethereum';

const API_URL = 'http://localhost:4000';


export default class Login extends React.Component {
    /**
     * Check if Metamask is connected, otherwise connect
     */
    state = {
        token: ''
    };

    x = () => {
        if (!this.state.token) {
            setupEthState().then(r => {
                const { signerAddress } = r;
                axios.post(
                    `${API_URL}/api/profiles/login`,
                    {
                        walletAddress: signerAddress
                    }
                ).then(rx => console.log('Result.. ', rx));
            });
        }
    }

    render() {
        return (
            <div className="login">
                <h3>Login</h3>
                <button onClick={this.x}>Click login</button>
            </div>
        );
    }
}