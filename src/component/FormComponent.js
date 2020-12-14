import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { TransactionOutlined } from "@ant-design/icons";

const FormComponent = ({ transfer, status }) => {
  const [componentSize, setComponentSize] = useState("medium");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log(values);
    transfer(values.address, values.amount);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="verticel"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          initialValue=""
          label="Eth Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input reciever's ETH address!",
            },
          ]}
        >
          <Input
            type="text"
            required
            placeholder="0x0000000000000000000000000000000000000000"
          />
        </Form.Item>
        <Form.Item
          initialValue=""
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input amount you want to send!",
            },
          ]}
        >
          <Input type="number" required placeholder="0" />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            shape="round"
            icon={<TransactionOutlined spin />}
            size="large"
            disabled={status === "PENDING" ? true : false}
          >
            {status === "PENDING" ? "Transfering Funds" : "Transfer Tokens"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormComponent;
