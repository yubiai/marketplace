const { Profile } = require("../models/Profile");
const { SignJWT } = require("jose/jwt/sign");

const POH_API_URL = 'https://api.poh.dev/';
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || '';

/**
 * Util functions
 */
async function checkProfileOnPOH(walletAddress) {
    return await fetch(`${POH_API_URL}/profiles/${walletAddress}`);
}

async function signData(rawData={}) {
    return await new SignJWT({ ...rawData, currentDate: new Date() })
        .setProtectedHeader({ alg: 'ES256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(JWT_PRIVATE_KEY);
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

async function login(req, res, _) {
    const { walletAddress } = req;
    const checkPOHRequest = await checkProfileOnPOH(walletAddress);
    if (checkPOHRequest.status === 200) {
        const token = await signData({
            walletAddress
        });
        res.status(200).json({
            token: token
        });
    } else {
        res.status(401);
    }
}

module.exports = {
    getProfile,
    login
};