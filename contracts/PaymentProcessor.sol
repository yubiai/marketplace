// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract PaymentProcessor {
    address public admin;
    IERC20 public ubi;

    event PaymentDone(
        address payer,
        uint amount,
        uint paymentId,
        uint date
    );

    constructor(address adminAddress, address ubiAddress) {
        admin = adminAddress;
        ubi = IERC20(ubiAddress);
    }

    function pay(uint amount, uint paymentId) external {
        ubi.transferFrom(msg.sender, admin, amount);
        emit PaymentDone(msg.sender, amount, paymentId, block.timestamp);
    }
}