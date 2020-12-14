import React from "react";
import { Typography } from "antd";
const { Text } = Typography;

const UserInfo = ({ accounts, balance }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "20px",
        lineHeight: "2rem",
      }}
    >
      <Text style={{ fontSize: "16px", color: "#1C90FF" }}>
        Eth Address: {accounts[0]}
      </Text>
      <Text style={{ fontSize: "16px", color: "#1C90FF" }}>
        Balance: {balance} WEENUS
      </Text>
    </div>
  );
};

export default UserInfo;
