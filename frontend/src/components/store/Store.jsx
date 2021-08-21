import React from "react";
import { ethers } from "ethers";
import axios from "axios";

import ListItem from "../list-item/ListItem";

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
    const response1 = await axios.get(`${API_URL}/api/items/getPaymentId/${item.id}`);
    
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
    <div>
      <h4>Tu dirección de cuenta es: {signerAddress} </h4>
      <ul className="list-group">{newList}</ul>
    </div>
  );
};

export default Store;
