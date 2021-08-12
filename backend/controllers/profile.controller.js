const { Profile } = require("../models/Profile");

async function getProfile(req, res, _) {
    const { walletAddress } = req;
    try {
        const profile = Profile.findOne({ "walletAddress": walletAddress });
        res.status(200).json(profile);
    } catch (error) {
        res.status(404);
    }
}

module.exports = {
    getProfile
};