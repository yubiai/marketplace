const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const ethers = require("ethers");
const PaymentProcessor = require("./../frontend/src/artifacts/contracts/PaymentProcessor.sol/PaymentProcessor.json");
const Order = require("./../frontend/src/artifacts/contracts/Order.sol/Order.json");

const { Payment } = require("./models/Payment");
const { saveOrder } = require("./services/transaction.service");

const app = express();
const item = require("./routes/item/item");
const profile = require("./routes/profile/profile");
const config = require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/items", item);
app.use("/api/profiles", profile);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

const listenToEvents = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  
  const orderAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
  const ppAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

  const paymentProcessor = new ethers.Contract(
    ppAddress,
    PaymentProcessor.abi,
    provider
  );
  const order = new ethers.Contract(
    orderAddress,
    Order.abi,
    provider
  );

  order.on("OrderCreated", async (id, orderDate, deliveryDate, transactionId, products) => {
    await saveOrder({
      id, orderDate, deliveryDate, transactionId, products
    });
  });

  paymentProcessor.on("PaymentDone", async (payer, amount, paymentId, date) => {
    console.log(`
          from ${payer}
          amount ${amount}
          paymentId ${paymentId}
          date ${new Date(date.toNumber() * 1000).toLocaleString()}
        `);
    const payment = await Payment.findOne({ id: paymentId });
    if (payment) {
      payment.paid = true;
      await payment.save();
    }
  });
};

listenToEvents();
