pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Ubi is ERC20 {
    constructor() ERC20('Ubi', 'UBI') public {}

    function faucet(address to, uint amount) external {
        _mint(to, amount);
    }
}