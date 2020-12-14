import React from "react";
import { Typography } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;

const UserInfo = ({ accounts, balance }) => {
  return (
    <div
      style={{
        paddingLeft: "20px",
        lineHeight: "2rem",
      }}
    >
      <Avatar.Group style={{ flexDirection: "column", alignItems: "center" }}>
        <Avatar
          shape="square"
          size="large"
          icon={<UserOutlined color="#001628" />}
        />
        <Text style={{ fontSize: "16px" }}>
          Eth Address: <strong>{accounts[0]}</strong>{" "}
        </Text>
        <Text style={{ fontSize: "16px", color: "#001628" }}>
          BALANCE: <b>{balance}</b> WEENUS Tokens
        </Text>
      </Avatar.Group>
    </div>
  );
};

export default UserInfo;
