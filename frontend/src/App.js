import React, { useState, useEffect } from "react";
import { getBlockchain } from "./ethereum.js";
import { HashRouter, useLocation } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./components/layout/Layout";
import Store from "./components/store/Store";
import Message from "./components/message/Message";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import MessagesBox from "./components/MessageBox/MessagesBox";
import Chat from "./components/MessageBox/Chat";
import Mailbox from "./components/mailbox/Mailbox";
import OrdersView from "./components/orders/OrdersActive";
import OrdersComplete from "./components/orders/OrdersComplete";
import OrdersCompleteDetails from "./components/orders/CheckOrdersComplete";
import GlobalStyle from "./globalStyles";
import SalesActive from "./components/sales/SalesActive";
import SalesInReview from "./components/sales/SalesInReview";
import SalesComplete from "./components/sales/SalesComplete";
import CheckOrders from "./components/orders/CheckOrders";
import SalesCompleteDetails from "./components/sales/SalesCompleteDetails";
import MyInfo from "./components/myinfo/MyInfo";
import AddItem from "./components/add-item/addItem";
import ItemActive from "./components/publisheditem/itemActive";
import Checkout from "./components/checkout/checkout";
import MngShipEsc from "./components/checkout/mngShipEsc";
import mbDispResol from "./components/mailbox/disputeResolution";
import axios from "axios";
import { useDispatchGlobal, useGlobal } from "./providers/globalProvider.js";
import { priceService } from "./services/priceService.js.js";

//to run locally comment second line and uncomment first line
// axios.defaults.baseURL = 'http://localhost:4000/api';
// FIXME: Mover esto a una variable de entorno.
axios.defaults.baseURL = 'https://yubiai-api.herokuapp.com/api';

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100000,
  },
  body: {
    marginTop: "118px",
    [theme.breakpoints.down(900)]: {
      marginTop: "74px",
    },
  },
}));

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [ubi, setUbi] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);
  const classes = useStyles();

  const global = useGlobal();
  const dispatch = useDispatchGlobal();

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, ubi, signerAddress } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setUbi(ubi);
      setSignerAddress(signerAddress);
    };
    init();
  }, []);

  const refreshPrices = async() => {
    console.log("Arranco ESTO MAQUINA")
    await priceService
    .getPrices()
    .then((res) => {
      console.log(res.data)
      let data = res.data;
      let newPrices = {
        ubi: data[0].price,
        arg: data[1].price
      }
      dispatch({
        type: 'REFRESHPRICES',
        payload: newPrices
      })      

    })
    .catch((err) => {
      console.log(err);
    });
    setTimeout(refreshPrices, 5 * 60 * 1000)
  }

  useEffect(() => {
    refreshPrices();
  },[])

  if (typeof window.ethereum === "undefined") {
    return <Message />;
  }

  const location = useLocation();
  const isAddItemView = location.pathname.indexOf('addItem') !== -1;

  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <div
        style={{
          fontFamily: "Open Sans",
          height: "100%",
        }}
        className={isAddItemView ? "App App-addItemView" : "App"}
      >
        <header className={classes.header}>
          <NavBar />
        </header>
        <div className={classes.body}>
          <Switch>
            <Route path="/ordersactive">
              <Layout>
                <OrdersView />
              </Layout>
            </Route>
            <Route path="/orderscomplete">
              <Layout>
                <OrdersComplete />
              </Layout>
            </Route>
            <Route path="/checkorderscomplete">
              <Layout>
                <OrdersCompleteDetails />
              </Layout>
            </Route>
            <Route
              path="/checkorders/messagesbox"
              render={(props) => (
                <Layout>
                  <MessagesBox {...props} />
                </Layout>
              )}
            />
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
            <Route path="/salesinreview">
              <Layout>
                <SalesInReview />
              </Layout>
            </Route>
            <Route exact path="/additem">
              <Layout>
                <AddItem />
              </Layout>
            </Route>
            <Route path="/salescomplete">
              <Layout>
                <SalesComplete />
              </Layout>
            </Route>
            <Route
              path="/salescompletedetails/messagesbox"
              render={(props) => (
                <Layout>
                  <MessagesBox {...props} />
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
            <Route path="/mbdispuresol">
              <Layout>
                <mbDispResol />
              </Layout>
            </Route>
            <Route path="/myinfo">
              <Layout>
                <MyInfo />
              </Layout>
            </Route>
            <Route path="/checkout">
                <Checkout />
            </Route>
            <Route path="/mngshipesc">
              <Layout>
                <MngShipEsc />
              </Layout>
            </Route>  
            <Route path="/itemactive">
                <ItemActive />
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
    </HashRouter>
  );
}

export default App;
