import React, { useState, useEffect } from "react";
import axios from "axios";
import { setupEthState } from "../../ethereum";

const API_URL = "http://localhost:4000";

const Login = () => {
  const [token, setToken] = useState("");

  async function handleLogin() {
    if (!token) {
      const setup = await setupEthState();
      const login = await axios.post(`${API_URL}/api/profiles/login`, {
        walletAddress: setup.signerAddress,
      });

      setToken(login.data?.token);
    }
    // setupEthState().then((r) => {
    //   const { signerAddress } = r;
    //   axios
    //     .post(`${API_URL}/api/profiles/login`, {
    //       walletAddress: signerAddress,
    //     })
    //     .then((rx) => console.log("Result.. ", rx));
    // });
  }

  return (
    <div className="login">
      <h3>Login</h3>
      <button onClick={handleLogin}>
        {" "}
        {token ? "Hola Usuario " : "Click login"}
      </button>
    </div>
  );
};

export default Login;
