import React, { useEffect, useState } from "react";
import WeenusTokenABI from "./contract/WeenusTokenABI.json";
import getWeb3 from "./getWeb3";
import Home from "./pages/Home";

import "./App.css";
const contractAddress = "0x101848d5c5bbca18e6b4431eedf6b95e9adf82fa";

const App = () => {
  const [accounts, setAccounts] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    setupWeb3();
  }, []);

  const setupWeb3 = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = await new web3.eth.Contract(
        WeenusTokenABI,
        contractAddress
      );
      setWeb3(web3);
      setAccounts(accounts);
      setContract(instance);
      web3.eth.defaultAccount = accounts[0];
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  return contract === null || web3 === null ? (
    <div>Loading Web3, accounts, and contract...</div>
  ) : (
    <div className="App">
      <Home web3={web3} contract={contract} accounts={accounts} />
    </div>
  );
};

export default App;
