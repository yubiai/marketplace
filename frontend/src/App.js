import React, { useState, useEffect } from "react";
import { getBlockchain } from "./ethereum.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Layout from "./components/layout/Layout.jsx";
import Store from "./components/store/Store";
import Message from "./components/message/Message";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProfileView from "./components/profile/Profile";
import MessagesBox from './components/MessageBox/MessagesBox';
import Chat from './components/MessageBox/Chat.jsx'
import Mailbox from './components/mailbox/Mailbox';
import OrdersView from "./components/orders/Orders";
import GlobalStyle from "./globalStyles";
import SalesActive from "./components/sales/SalesActive";
import SalesComplete from "./components/sales/SalesComplete";
import CheckOrders from "./components/orders/CheckOrders";
import SalesCompleteDetails from "./components/sales/SalesCompleteDetails";
import MyInfo from "./components/myinfo/MyInfo";
import AddItem from "./components/add-item/addItem";
// import Chat from "./components/mailbox/Chat";

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 10
  },
  body: {
    marginTop: '118px',
    height: '100%',
    overflowY: 'auto',
    [theme.breakpoints.down(900)]: {
      marginTop: '74px',
    },
  },
}));

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [ubi, setUbi] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);
  const classes = useStyles();

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, ubi, signerAddress } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setUbi(ubi);
      setSignerAddress(signerAddress);
    };
    init();
  }, []);

  if (typeof window.ethereum === "undefined") {
    return <Message />;
  }

  return (
    <Router>
      <GlobalStyle />
      <div style={{
        fontFamily: 'Open Sans',
        height: '100%',
        overflow: 'hidden'
      }} className="App">
        <header className={classes.header}>
          <NavBar />
        </header>
        <div className={classes.body}>
          <Switch>
            <Route path="/orders">
              <Layout>
                <OrdersView />
              </Layout>
            </Route>
            <Route path="/checkorders/messagesbox"
                   render={(props) => (
                    <Layout>
                      <MessagesBox {...props}/>
                    </Layout>
                   )}/>
            <Route path="/checkorders">
              <Layout>
                <CheckOrders />
              </Layout>
            </Route>
            <Route path="/messagesbox">
            <Layout>
              <MessagesBox />
            </Layout>
            </Route>
            <Route path="/salesactive">
              <Layout>
                <SalesActive />
              </Layout>
            </Route>
            <Route path="/additem">
              <Layout>
                <AddItem />
              </Layout>
            </Route>
            <Route path="/salescomplete">
              <Layout>
                <SalesComplete />
              </Layout>
            </Route>
            <Route path="/salescompletedetails/messagesbox"
                   render={(props) => (
                    <Layout>
                      <MessagesBox {...props}/>
                    </Layout>
                   )}
                   />
            <Route path="/salescompletedetails">
              <Layout>
                <SalesCompleteDetails />
              </Layout>
            </Route>
            <Route path="/chat">
              <Layout>
                <Chat />
              </Layout>
            </Route>
            <Route path="/mailbox">
            <Layout>
              <Mailbox />
            </Layout>
            </Route>
            <Route path="/myinfo">
            <Layout>
              <MyInfo />
            </Layout>
            </Route>
            {/* <Route path="chat">
            <Layout>
              <Chat />
            </Layout>
            </Route> */}
            {/* <Route path="/profile">
              <Layout>
                <ProfileView />
              </Layout>
            </Route> */}
            <Route path="/">
              <Store
                paymentProcessor={paymentProcessor}
                ubi={ubi}
                signerAddress={signerAddress}
              />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
