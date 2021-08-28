import React from "react";
import { ethers } from "ethers";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import ListItem from "../list-item/ListItem";
import Container from "@material-ui/core/Container";
import Carrousel from "../carrousel/Carrousel";
import ItemCard from "../item-card/ItemCard";

const API_URL = "http://localhost:4000";

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

const Store = ({ paymentProcessor, ubi, signerAddress }) => {
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
      <div className="row">
        {/* <h4>Tu dirección de cuenta es: {signerAddress} </h4> */}
        <h4>Last items posted on the marketplace </h4>
        <Grid container spacing={2}>
          {/* Esta es para el spacing */}
          {/* <Grid item xs={12} sm={1}>
        <IconButton className={classes.carrouselButton} aria-label="Forward">
         <ArrowBackIosIcon  />
         </IconButton>
        </Grid> */}

          <Carrousel>
            <ItemCard title={"Producto 1"} price={"5000"} />
            <ItemCard title={"Producto 2"} price={"2300"} />
            <ItemCard title={"Producto 3"} price={"235"} />
            <ItemCard title={"Producto 4"} price={"1400"} />
            <ItemCard title={"Producto 5"} price={"65789"} />
            <ItemCard title={"Producto 6"} price={"5"} />
          </Carrousel>
        </Grid>

        <h4>Items on your watch list </h4>
        <Grid container spacing={2}>
          
            <ItemCard title={"Producto 1"} price={"5000"} />
            <ItemCard title={"Producto 2"} price={"2300"} />
            <ItemCard title={"Producto 3"} price={"235"} />
            <ItemCard title={"Producto 4"} price={"1400"} />
            <ItemCard title={"Producto 5"} price={"65789"} />
            <ItemCard title={"Producto 6"} price={"5"} />
          
        </Grid>

        {/* <ul className="list-group">{newList}</ul> */}
      </div>
    </Container>
  );
};

export default Store;
