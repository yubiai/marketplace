import React from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import ubiicon from './images/logoubi.png';

const API_URL = 'http://localhost:4000';

const ITEMS = [
  {
      id: 1,
      price: ethers.utils.parseEther('100')
  },
  {
      id: 2,
      price: ethers.utils.parseEther('200')
  },  
];

function Store({ paymentProcessor, ubi })  {
    const buy = async item => {
      const response1 = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`);
      const tx1 = await ubi.approve(paymentProcessor.address, item.price);
      await tx1.wait();

      const tx2 = await paymentProcessor.pay(item.price, response1.data.paymentId);
      await tx2.wait();
        
      await new Promise(resolve => setTimeout(resolve, 5000));
      const response2 = await axios.get(`${API_URL}/api/getItemUrl/${response1.data.paymentId}`);
      console.log(response2)
    };
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <img src="https://http2.mlstatic.com/D_NQ_NP_826049-MLU45726655519_042021-O.webp" alt="Shoes" width="180" height="180"></img><span className='font-weight-bold'>200 <img src={ubiicon}  alt="Ubi" /></span>
          <button 
            type="button" 
            className="btn btn-primary float-right"
            onClick={() => buy(ITEMS[0])}
          >
            Buy
          </button>
        </li>
        <li className="list-group-item">
          <img src="https://http2.mlstatic.com/D_NQ_NP_898702-MLU46688314706_072021-O.webp" alt="Shoes" width="180" height="180"></img><span className='font-weight-bold'>140 <img src={ubiicon}  alt="Ubi" /> </span>
          <button 
            type="button" 
            className="btn btn-primary float-right"
            onClick={() => buy(ITEMS[1])}
          >
            Buy
          </button>
        </li>
      </ul>
    );
  }

export default Store;