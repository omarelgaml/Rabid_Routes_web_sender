import { FileOutlined, UserOutlined, FileAddOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import ContentArea from "../../components/ContentArea";
const { Content, Footer, Sider } = Layout;
import { StyledTitle } from "./styles";
const Landing = () => {
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "User",
      action: () => console.log("Clicked Item 1"),
    },
    {
      key: "2",
      icon: <FileAddOutlined />,
      label: "Create Parcel",
      action: () => console.log("Clicked Item 2"),
    },
    {
      key: "3",
      icon: <FileOutlined />,
      label: "View Parcels",
      action: () => console.log("Clicked Item 3"),
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Logout",
      //  action: (dispatch) => dispatch(logout()),
    },
  ];

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <StyledTitle style={{ color: "white" }} level={4}>
          Rapid Routes
        </StyledTitle>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map(({ key, icon, label, action }) => (
            <Menu.Item key={key} icon={icon} onClick={() => action()}>
              {label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <ContentArea selectedTab={1} />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Rapid routes ©2023 Created by Omar Elgaml
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Landing;
