const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  id: String,
  walletAddress: String,
  photoUrl: String,
  displayName: String,
  bio: String,
  profilePOH: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = {
    Profile,
};
