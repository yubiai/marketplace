import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';

import Store from './components/store/Store';
import Message from './components/message/Message';
import  NavBar  from './components/navbar/NavBar';
import  Footer  from './components/footer/Footer';
import  Carousel  from './components/carousel/Carousel';
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
        <Carousel/>
      </body> 

      <Footer />
    </div>
     
  );
}

export default App;
