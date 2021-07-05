const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const ethers = require('ethers');
const PaymentProcessor = require('../frontend/src/contracts/PaymentProcessor.json');
const { Payment } = require('./db.js');

const app = new Koa();
const router = new Router();

const items = {
  '1': {id: 1, url: 'http://UrlToDownloadItem1'},
  '2': {id: 2, url: 'http://UrlToDownloadItem2'}  
};


//generate a paymentId for purchase
router.get('/api/getPaymentId/:itemId', async (ctx, next) => {
    //1. generate paymentId randomly
    const paymentId = (Math.random() * 10000).toFixed(0);
    //2. save paymentId + itemId in mongo
    await Payment.create({
      id: paymentId,
      itemId: ctx.params.itemId,
      paid: false
    });
    //3. return paymentId to sender
    ctx.body = {
      paymentId
    };
});

router.get('/api/getItemUrl/:paymentId', async (ctx, next) => {
    const payment = await Payment.findOne({id: ctx.params.paymentId});
    if(payment && payment.paid === true) {
        ctx.body = {
            url: items[payment.itemId].url
        };
    } else {
        ctx.body = {
            url: ''
        };
    }
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

  app.listen(4000, () => {
      console.log('Server running on port 4000');
  });
// when i want to run this on public ill have to change "http://localhost:9545" for the mainnet url
const listenToEvents = () => {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:9545');
    const networkId = '5777';
    //when connecting to mainnet or public testnets, use this instead
  //const provider = ethers.providers.getDefaultProvider('mainnet | kovan | etc..');
  //const networkId = '1'; //mainnet 
  //const networkId = '42'; //kovan 

    const paymentProcessor = new ethers.Contract(
        PaymentProcessor.networks[networkId].address,
        PaymentProcessor.abi,
        provider
    );

    paymentProcessor.on('PaymentDone', async (payer, amount, paymentId, date) => {
      console.log(`New payment received:
        from ${payer} 
        amount ${amount.toString()} 
        paymentId ${paymentId} 
        date ${(new Date(date.toNumber() * 1000)).toLocaleString()}
      `);
        const payment = await Payment.findOne({id: paymentId.toString()});
        if(payment) {
          payment.paid = true;
          await payment.save();
        }
    });
};
listenToEvents();