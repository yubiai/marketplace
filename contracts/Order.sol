// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Order {
    uint id;
    uint256 orderDate;
    uint256 deliveryDate;
    string transactionId;

    struct Product {
        uint id;
        string name;
        uint priceUnit;
        uint amount;
    }

    Product[] public products;

    event OrderCreated(
        uint orderId,
        uint256 orderDateStart,
        uint256 orderDeliveryDate,
        string orderTransactionId,
        Product[] orderProducts
    );

    function setOrderInfo(
        uint _id,
        uint256 _orderDate,
        uint256 _deliveryDate,
        string memory _transactionId,
        uint productLength
    ) public {
        require(productLength == products.length);
        id = _id;
        orderDate = _orderDate;
        deliveryDate = _deliveryDate;
        transactionId = _transactionId;
        emit OrderCreated(id, orderDate, deliveryDate, transactionId, products);
    }

    function addProduct(Product memory _product) public {
        products.push(_product);
    }
}