import axios from "axios";

type GetProfileResponse = {
  token: string;
  photo: string;
  display_name: string;
  eth_address: string;
};

export const getProfile = async (
  signerAddress: string
): Promise<GetProfileResponse> => {
  try {
    const response = await axios.post<GetProfileResponse>(
      `http://localhost:4000/api/profiles/`,
      {
        walletAddress: signerAddress,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
