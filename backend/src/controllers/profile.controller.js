const { checkProfileOnPOH, signData } = require("../utils/utils")

/**
 * 
 * Endpoint methods
 */

// TODO: Implement secure request with token
async function getProfile(req, res, _) {
    const { walletAddress } = req;
    try {
        const profile = Profile.findOne({ "walletAddress": walletAddress });
        res.status(200).json(profile);
    } catch (error) {
        res.status(404);
    }
}

async function login(req, res, next) {
    // FIXME: Replace to { ...req.body }; on const { walletAddress }
    const walletAddress = '0x245Bd6B5D8f494df8256Ae44737A1e5D59769aB4'
    try {
        const response = await checkProfileOnPOH(walletAddress);
        if (response) {
            const token = signData({
                walletAddress
            });
            res.status(200).json({
                token: token,
                ...response
            });
            next();
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