import axios from "axios";

export const profileService = {
    getProfile
}


async function getProfile(signerAddress) {
    return await axios.post(`http://localhost:4000/api/profiles/}`, {
        walletAddress: signerAddress,
      });
}

