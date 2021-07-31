import React, { useState, useEffect } from 'react';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from './Store.js';
import getBlockchain from './ethereum.js';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from "./components"; 
import Categories from "./pages/Categories/Categories";
import Sell from "./pages/Sell/Sell";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [ubi, setUbi] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, ubi } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setUbi(ubi);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(typeof window.ethereum === 'undefined') {
    return (
      <div className='container'>
        <div className='col-sm-1'>
          <h1>Proof Of Humanity MarketPlace</h1>
          <p>You need to install the latest version of Metamask to use this app. Metamask is an Ethereum wallet, available as a Google chrome extension.</p>
          <ul>
            <li>Go to the <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'>Metamask page</a> on the chrome webstore and install it</li>  
            <li>If you already have it installed, uninstall and re-install it</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='col-sm-12'>
        <Router>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/"  />
            <Route path="/categories" exact component={Categories} />
            <Route path="/sell" exact component={Sell} />
          </Switch>
          {/* <Link to={'/profile'}>View profile</Link> esto fue cambiado en el navbar */} 
          <Store paymentProcessor={paymentProcessor} ubi={ubi} />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
