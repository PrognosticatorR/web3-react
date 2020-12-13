import { Table } from "antd";

const { Column } = Table;

const TableComponent = ({ txHash, amount, status }) => {
  const data = [
    {
      key: "1",
      txHash: txHash,
      status: status,
      amount: amount,
    },
  ];
  return (
    status && (
      <Table dataSource={data}>
        <Column title="Tx Hash" dataIndex="txHash" key="txHash" />
        <Column title="Amount" dataIndex="amount" key="amount" />
        <Column title="Status" dataIndex="status" key="status" />
      </Table>
    )
  );
};

export default TableComponent;
