const { Profile } = require("../models/Profile");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const got = require("got");

const POH_API_URL = 'https://api.poh.dev';
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || '';

/**
 * Util functions
 */
async function checkProfileOnPOH(walletAddress) {
    return await got(`${POH_API_URL}/profiles/${walletAddress}`).json();
}

function signData(rawData={}) {
    return jwt.sign({ ...rawData, currentDate: new Date() }, JWT_PRIVATE_KEY);
}


/**
 * 
 * Endpoint methods
 */

async function getProfile(req, res, _) {
    const { walletAddress } = req;
    try {
        const profile = Profile.findOne({ "walletAddress": walletAddress });
        res.status(200).json(profile);
    } catch (error) {
        res.status(404);
    }
}

async function login(_, res, next) {
    const { walletAddress } = { ...req.body };
    try {
        const response = await checkProfileOnPOH(walletAddress);
        if (response) {
            let profileResp;
            Profile.findOne({ "walletAddress": walletAddress }).exec(async (_, profile) => {
                if (!profile) {
                    profileResp = await new Profile({
                        id: mongoose.Types.ObjectId(),
                        walletAddress: walletAddress,
                        avatar: response.photo
                    });
                    profileResp.save();
                } else {
                    profileResp = profile;
                }

                const token = signData({
                    walletAddress
                });
                res.status(200).json({
                    token: token,
                    profileResp
                });
                next();
            });            
        }
    } catch (error) {
        console.log('ERROR: ', error);
        res.status(401).json({error: 'Unauthorized'});
        next();
    }
}

module.exports = {
    getProfile,
    login
};