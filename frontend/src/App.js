import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import GlobalStyle from "./globalStyles";
import Store from './components/store/Store';
import Message from './components/message/Message';
import  NavBar  from './components/navbar/NavBar';
import ProfileView from './components/profile/Profile';


function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined); 
  const [ubi, setUbi] = useState(undefined); 
  const [signerAddress, setSignerAddress] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, ubi, signerAddress } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setUbi(ubi);
      setSignerAddress(signerAddress)
    }
    init();
  }, []);

  if(typeof window.ethereum === 'undefined') {
    return (
      <Message />
    );
  }

  return (
    <div className='App'>
      <header className="App-header">
        <NavBar />
        {/* <ProfileView /> */}

        
      </header>
      <body>  
        <Store paymentProcessor={paymentProcessor} ubi={ubi} signerAddress={signerAddress} />
        
      </body>  
      
    </div>
  );
}

export default App;
