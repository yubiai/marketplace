const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  id: String,
  walletAddress: String,
  avatar: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = {
    Profile,
};
