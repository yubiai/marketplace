import axios from "axios";

export const profileService = {
    getProfile
}

async function getProfile(signerAddress) {
    return await axios.post(`/profiles/`, {
        walletAddress: signerAddress,
      });
}

