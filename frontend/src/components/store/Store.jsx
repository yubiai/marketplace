import React from "react";
import { ethers } from "ethers";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItem from "../list-item/ListItem";
import Container from "@material-ui/core/Container";
import Carrousel from "../carrousel/Carrousel";
import ItemCard from "../item-card/ItemCard";

const API_URL = "https://yubiai-backend.herokuapp.com";
const SLIDE_VISIBLE_DEFAULT = 6;

const ITEMS = [
  {
    id: 1,
    name: "Item 1",
    price: ethers.utils.parseEther("100") / 1000000000000000000,
  },
  {
    id: 2,
    name: "Item 2",
    price: ethers.utils.parseEther("200") / 1000000000000000000,
  },
];

const useStyles = makeStyles((theme) => ({
  root:{
    [theme.breakpoints.down('md')]: {
      marginTop: '0.5rem',
      position: 'relative',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.5rem',
      position: 'relative',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '0rem',
      right: '0',
      margin: 'auto',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
  },

  },
  gridTitle: {
    padding: "30px 0 5px 0",
    color: "#727272",
    fontFamily: "Open Sans",
    fontWeight: "300",
    fontSize: "19px",
    marginTop: "-20px",
    // marginBottom: "-10px",
    marginLeft: "1.5rem",

    "&:first-child": {
      marginTop: 0
    },
},
}));

const Store = ({ paymentProcessor, ubi, signerAddress }) => {
  const classes = useStyles();

  const buy = async (item) => {
    const response1 = await axios.get(
      `${API_URL}/api/items/getPaymentId/${item.id}`
    );

    const tx1 = await ubi.approve(paymentProcessor.address, item.price);
    await tx1.wait();

    const tx2 = await paymentProcessor.pay(
      item.price,
      response1.data.paymentId
    );
    await tx2.wait();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response2 = await axios.get(
      `${API_URL}/api/items/getItemUrl/${response1.data.paymentId}`
    );
    console.log(response2);
  };

  const newList = ITEMS.map((item) => {
    return (
      <ListItem
        key={item?.id}
        item={item}
        onClick={(e) => {
          e.preventDefault();
          buy(item);
        }}
      />
    );
  });

  return (
    <Container maxWidth="lg">
      <div className="row" style={{marginBottom: '100px'}}>
        {/* <h4>Tu dirección de cuenta es: {signerAddress} </h4> */}
        <span className={classes.gridTitle}>
          Last items posted on the marketplace.{" "}
        </span>
        <Grid container style={{width: '100%'}} className={classes.root} spacing={2}>
          {/* This is for the grid spacing */}
          {/* <Grid item xs={12} sm={1}>
        <IconButton className={classes.carrouselButton} aria-label="Forward">
         <ArrowBackIosIcon  />
         </IconButton>
        </Grid> */}

          <div style={{width: '100%', margin: '1rem 0 2rem', position: 'relative'}}>
            <Carrousel style={{ width: '100%' }} slideVisibleDefault={SLIDE_VISIBLE_DEFAULT}>
              <ItemCard title={"Producto 1"} price={"5000"} />
              <ItemCard title={"Producto 2"} price={"2300"} />
              <ItemCard title={"Producto 3"} price={"235"} />
              <ItemCard title={"Producto 4"} price={"1400"} />
              <ItemCard title={"Producto 5"} price={"65789"} />
              <ItemCard title={"Producto 6"} price={"5"} />
            </Carrousel>
          </div>
        </Grid>

        <span className={classes.gridTitle} style={{marginTop: '-50px'}}>Items on your watch list </span>
        <Grid container spacing={2} style={{width: '100%'}} className={classes.root}>
          <div style={{width: '100%', margin: '1rem 0 2rem', position: 'relative'}}>
            <Carrousel style={{ width: '100%' }} slideVisibleDefault={SLIDE_VISIBLE_DEFAULT}>
              <ItemCard title={"Producto 1"} price={"5000"} />
              <ItemCard title={"Producto 2"} price={"2300"} />
              <ItemCard title={"Producto 3"} price={"235"} />
              <ItemCard title={"Producto 4"} price={"1400"} />
              <ItemCard title={"Producto 5"} price={"65789"} />
              <ItemCard title={"Producto 6"} price={"5"} />
            </Carrousel>
          </div>
        </Grid>

        <span className={classes.gridTitle} style={{marginTop: '-50px'}}>
          Last items you've watched on Health and household.{" "}
        </span>
        <Grid container spacing={2} style={{marginBottom: '-50px', width: '100%'}}className={classes.root}>
          <div style={{width: '100%', margin: '1rem 0 2rem', position: 'relative'}}>
            <Carrousel style={{ width: '100%' }} slideVisibleDefault={SLIDE_VISIBLE_DEFAULT}>
              <ItemCard title={"Producto 1"} price={"5000"} />
              <ItemCard title={"Producto 2"} price={"2300"} />
              <ItemCard title={"Producto 3"} price={"235"} />
              <ItemCard title={"Producto 4"} price={"1400"} />
              <ItemCard title={"Producto 5"} price={"65789"} />
              <ItemCard title={"Producto 6"} price={"5"} />
            </Carrousel>
          </div>
        </Grid>
        {/* <ul className="list-group">{newList}</ul> */}
      </div>
    </Container>
  );
};

export default Store;
