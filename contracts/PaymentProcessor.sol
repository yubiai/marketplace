// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PaymentProcessor {
    address public admin;
    IERC20 public ubi;

    uint256 public DIVISOR = 10000; // constant
    uint256 public adminFee;
    uint256 public burnFee;

    constructor(
        address adminAddress, 
        IERC20 ubiAddress, 
        uint256 _adminFee, 
        uint256 _burnFee
    ) {
        admin = adminAddress;
        ubi = ubiAddress;
        adminFee = _adminFee;
        burnFee = _burnFee;
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
        uint256 burnAmount = amount * burnFee / DIVISOR ; // use kleros cappedMath library for this.
        uint256 adminAmount = amount * adminFee / DIVISOR ; // use kleros cappedMath library for this.
        uint256 receiverAmount = amount - burnAmount - adminAmount;
        
        ubi.transferFrom ( msg . sender , address(this), amount); // msg.sender is the escrow.
        ubi.transfer(admin, adminAmount);
        ubi.transfer(receiver, receiverAmount);
        ubi.burn(burnAmount);

          // emit an event.
    }
}
