# Marketplacepohubi
 

An attempt to a MarketPlace Store for every Human registered on the ProofOfHumanity registry!

## Preface (Why MarketPlace ?) 

The barter was the first means of payment in the history of mankind, dating back to the Neolithic. Barter was based on the consensus between the two parties to give value
to things. Cows, salt, pepper and feathers were some "coin-objects" with a consensual value, then came the coins and little bit short after the bills used in MarketPlaces 
such as Amazon, MercadoLibre, Alibaba, etc that now are the reason that give main value to this payment method.

As ProofOfHumanity mints 1 $UBI token per hour for every human registered in the blockchain, with this MarketPlace working on the Profile of each registered human we can give 
value so they can exchange for goods and service(also later NFTs).

## How will work ? 

Every Human registered on ProofOfHumanity registry will have access with his address to the store and will be able to use UBI(and other ERC20/criptos) to buy and sell goods and services, using oracles to keep products price stable, later also NFTs. To maintain this MP, a small amount UBI will we charged for every transaction, half to maintain and half to burn. 

👍 Likes / Support (Or how to come up with excuses to burn UBI)🔥🔥🔥

## Notice 
This is a work in progress to learn about building a fully functioning Decentralized app. PRs will be accepted to help improving the architecture.

## How to run it: 
1_Install node.js (for backend https://nodejs.org/en/)
2_Install truffle (for smart contracts, contains solidity and ganache, open a terminal command `npm install -g truffle`, after being installed type `truffle init`, then `npm init -y`)
3_Install react & bootstrap. (in the root of the project while in a terminal run `npm install bootstrap ethers axios`, you can remove setupTest.js, logo.svg, App.test.js , App.css
index.css) 

_You will need 3 terminals, 1 for server.js opened in the backend folder(running "node server.js", 1 for the frontend located in the main folder(command npm start), and another for truffle ganache in main folder (command `truffle develop`, then `migrate --reset`) 

_You will have to enter mongodb add your ip in security Network and in marketplacepohubi/backend/db.js change the url with your username and password.

## How can I help?
This is still a Work in Progress so any kind of improvement is valid (architecture, protocol, contracts, frontend app, suggestions, ideas, etc).

If you have a question, suggestion or idea, please, submit an Issue
If you have a code improvement, fork the repository and sned a PR so that we can review it, discuss it, and potentially merge it.

##Possible errors while try to test locally
_ inpage.js:1 MetaMask - RPC Error: Error: [ethjs-query] while formatting outputs from RPC '{"value":{"code":-32603,"data":{"message":"the tx doesn't have the correct nonce. account has nonce of: 0 tx has nonce of: 10","code":-32000,"data":{"stack":"TXRejectedError: the tx doesn't have the correct nonce. account has nonce of: 0 tx has nonce of: 10\n    at validateNonce. 
{code: -32603, message: "Error: [ethjs-query] while formatting outputs from…k_queues.js:72:11)\",\"name\":\"TXRejectedError\"}}}}'"}
This is due to a metamask issue, the way to solve is by situating on the acc 2 while in metamask, go to settings > advance > reset account. Then try again to Buy.

Another possible error is the Server running on port 4000

https://user-images.githubusercontent.com/55702500/125140180-4e8f9800-e0e8-11eb-969c-1cc1e3a77bb3.png

To fix this, You have to Add to metamask ganache localhost network with the private key and password that is shown when You do migrate .. on the terminal of the Main roto source folder, if You don't know how to Add check the link of the vídeo on how to do it.


(node:28083) UnhandledPromiseRejectionWarning: MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/

Well the error is clear, here You just have to Add your IP to a whitelist in mongodb, going to security then network access

Credits to Julien
https://www.youtube.com/watch?v=f5npM1PvoyE&t=816s



