const { checkProfileOnPOH, signData } = require("../utils/utils")

/**
 *
 * Endpoint methods
 */

// TODO: Implement secure request with token
async function getProfile(req, res, _) {
  const { walletAddress } = req.params;
  try {
    const profile = await Profile.findOne({ eth_address: walletAddress });
    res.status(200).json(profile);
  } catch (error) {
    res.status(404);
  }
}

// Update Profile
async function updateProfile(req, res) {
  const { userID } = req.params;

  let verify = await Profile.exists({
    _id: userID,
  });

  if (!verify) {
    return res.status(404).json({ error: "User id not exists" });
  }

  try {
    await Profile.findByIdAndUpdate(userID, req.body);
    return res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    return res.status(404).json(error);
  }
}

// Delete Profile
async function deleteProfile(req, res) {
  const { userID } = req.params;

  let verify = await Profile.exists({
    _id: userID
  });

  if (!verify) {
    return res.status(404).json({ error: "User id not exists" });
  }

  try {
    await Profile.findByIdAndRemove(userID);
    return res.status(200).json({ message: "Successfully removed" });
  } catch (error) {
    return res.status(404).json(error);
  }
}

// Login
async function login(req, res, next) {
  const { walletAddress } = { ...req.body };
  //const walletAddress = '0x245Bd6B5D8f494df8256Ae44737A1e5D59769aB4';

  try {
    const response = await checkProfileOnPOH(walletAddress);
    if (response) {
      // If it is not validated in Poh
      if (!response.registered) {
        res.status(404).json({ error: "User not validated in Poh" });
        next();
      }

      let userExists = await Profile.findOne({
        eth_address: response.eth_address,
      });

      // If the registration time is different in poh update the data
      if (
        userExists &&
        userExists.registered_time &&
        userExists.registered_time != response.registered_time
      ) {
        await Profile.findByIdAndUpdate(userExists._id, response);
      }

      // If it does not exist, save it as a new user
      if (!userExists) {
        let newUser = new Profile(response);
        await newUser.save();
      }

      const token = signData({
        walletAddress,
      });
      res.status(200).json({
        token: token,
        ...response,
      });
      next();
    }
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(401).json({ error: "Unauthorized" });
    next();
  }
}

module.exports = {
  getProfile,
  login,
  updateProfile,
  deleteProfile,
};
