import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Store from './components/store/Store';
import Message from './components/message/Message';
import NavBar  from './components/navbar/NavBar';
import Footer  from './components/footer/Footer';
import Carousel  from './components/carousel/Carousel';
import ProfileView from './components/profile/Profile';
import SideBar from './components/sidebar/Sidebar';
import OrdersView from './components/orders/Orders';
import Grid from '@material-ui/core/Grid';


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
    <Router>
    <div className='App'>
      <header className="App-header">
        <NavBar />
       

        
      </header>
      <body>         

        <Switch>
          <Route path="/orders">
          <Grid container spacing={3}>
              <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10}>
              <OrdersView />
            </Grid>
          </Grid>
          </Route>

          <Route path="/profile">
          <Grid container spacing={3}>
              <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10}>
              <ProfileView />
            </Grid>
          </Grid>
          </Route>

          <Route path="/">
          <Store paymentProcessor={paymentProcessor} ubi={ubi} signerAddress={signerAddress} />
          <Carousel/>
          </Route>
        </Switch>
      </body> 

      <Footer />
    </div>
    </Router>
  );
}

export default App;
