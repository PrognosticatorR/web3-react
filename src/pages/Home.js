import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "antd";

import Layout from "../component/Layout";
import FormComponent from "../component/FormComponent";
import UserInfo from "../component/UserInfo";
import TableComponent from "../component/TableComponent";

const Home = ({ web3, accounts, contract }) => {
  const [txHash, setTxHash] = useState("");
  const [amount, setAmount] = useState(null);
  const [status, setStatus] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    contract.methods
      .balanceOf(accounts[0])
      .call()
      .then((res) => setBalance(res));
  }, [contract, accounts, status]);

  const transfer = async (address, amount) => {
    setAmount(amount);
    const result = await contract.methods
      .transfer(address, amount)
      .send({ from: accounts[0] })
      .on("transactionHash", (hash) => {
        setTxHash(hash);
        setStatus("pending");
      });
    if (Object.keys(result.events).length > 0) {
      setBalance(balance - amount);
      setStatus("success");
    }
    setStatus("failed");
  };
  return (
    <Layout>
      <Row>
        <Col span={16}>
          <UserInfo balance={balance} accounts={accounts} />
          <FormComponent
            web3={web3}
            accounts={accounts}
            contract={contract}
            transfer={transfer}
          />
        </Col>
      </Row>
      <Row>
        <Col span={20}>
          <TableComponent txHash={txHash} amount={amount} status={status} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
