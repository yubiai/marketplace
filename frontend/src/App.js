import React, { useState, useEffect } from 'react';
import { getBlockchain } from './ethereum.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Store from './components/store/Store';
import Message from './components/message/Message';
import NavBar  from './components/navbar/NavBar';
import Footer  from './components/footer/Footer';
import ProfileView from './components/profile/Profile';

import Login from './components/login/login';
import SideBar from './components/sidebar/Sidebar';
import OrdersView from './components/orders/Orders';
import Grid from '@material-ui/core/Grid';
import SalesActive from './components/sales/SalesActive';
import SalesComplete from './components/sales/SalesComplete';
import CheckOrders from './components/orders/CheckOrders'; 
import SalesCompleteDetails from './components/sales/SalesCompleteDetails';

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
          <Route path="/login">
              <Login />
            </Route>
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
          <Route path="/checkorders">
          <Grid container spacing={3}>
              <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10}>
              <CheckOrders />
            </Grid>
          </Grid>
          </Route>
          <Route path="/salesactive">
          <Grid container spacing={3}>
              <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10}>
              <SalesActive  />
            </Grid>
          </Grid>
          </Route>
          <Route path="/salescomplete">
          <Grid container spacing={3}>
              <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10}>
              <SalesComplete />
            </Grid>
          </Grid>
          </Route>
          <Route path="/salescompletedetails">
          <Grid container spacing={3}>
              <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10}>
              <SalesCompleteDetails />
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
          </Route>
        </Switch>
      </body> 

      <Footer />
    </div>
    </Router>
  );
}

export default App;
