import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const layout = ({ children }) => (
  <Layout
    className="layout"
    style={{
      width: "100%",
    }}
  >
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Weenus Token</Menu.Item>
      </Menu>
    </Header>
    <Content
      style={{
        padding: "20px 50px",
        justifyContent: "center",
      }}
    >
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      ©2020 Created by Devesh Rawat
    </Footer>
  </Layout>
);

export default layout;
