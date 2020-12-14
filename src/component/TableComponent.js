import { Table } from "antd";

const { Column } = Table;

const TableComponent = ({ txHash, amount, status, address }) => {
  const data = [
    {
      key: "1",
      txHash: txHash,
      status: status,
      amount: amount,
      address: address,
    },
  ];
  return (
    status && (
      <Table dataSource={data} pagination={false} tableLayout="fixed">
        <Column title="To Address" dataIndex="address" key="adddress" />
        <Column title="Tx Hash" dataIndex="txHash" key="txHash" />
        <Column title="Amount (Weenus)" dataIndex="amount" key="amount" />
        <Column title="Status" dataIndex="status" key="status" />
      </Table>
    )
  );
};

export default TableComponent;
