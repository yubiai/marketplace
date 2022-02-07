// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract PaymentProcessor {
    address public admin;
    IERC20 public ubi;

    uint256 public DIVISOR = 10000; // constant
    uint256 public adminFee;
    uint256 public burnFee;
    address public burnAddress;
    
      event PaymentDone(
        address payer,
        uint amount,
        uint paymentId,
        uint date
    );

    constructor(
        address adminAddress, 
        IERC20 ubiAddress, 
        uint256 _adminFee, 
        uint256 _burnFee,
        address _burnAddress
    ) {
        admin = adminAddress;
        ubi = ubiAddress;
        adminFee = _adminFee;
        burnFee = _burnFee;
        burnAddress = _burnAddress;
    }

    function changeAdminFee(uint256 newAdminFee) external {
        require(msg.sender == admin, "Unauthorized");
        require(burnFee + newAdminFee < DIVISOR, "Fee too big");
        adminFee = newAdminFee;
    }

    function changeBurnFee(uint256 newBurnFee) external {
        require(msg.sender == admin, "Unauthorized");
        require(newBurnFee + adminFee < DIVISOR, "Fee too big");
        burnFee = newBurnFee;
    }

    function managePayment(uint amount, uint paymentId, address receiver) external {
        uint256 burnAmount = amount  / DIVISOR * burnFee ; // use kleros cappedMath library for this, not necesary with the current version of the compiler.
        uint256 adminAmount = amount / DIVISOR * adminFee  ; // use kleros cappedMath library for this, not necesary with the current version of the compiler.
        uint256 receiverAmount = amount - burnAmount - adminAmount;
        
        ubi.transferFrom ( msg.sender , address(this), amount); // msg.sender is the escrow.
        ubi.transfer(admin, adminAmount);
        ubi.transfer(receiver, receiverAmount);
        ubi.transfer(burnAddress, burnAmount);

           emit PaymentDone(msg.sender, receiverAmount, paymentId, block.timestamp);
    }
}
