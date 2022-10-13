import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons"
import { Avatar, Badge, Breadcrumb, Dropdown, Layout, Menu } from "antd"
import React, { useState } from "react"
import "./Secondary.css"
const { Header, Content, Footer, Sider } = Layout
const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label
  }
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5")
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8")
  ]),
  getItem("Files", "9", <FileOutlined />),
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5")
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8")
  ]),
  getItem("Files", "9", <FileOutlined />)
]

const menu = (
  <Menu
    className="mt-2 w-50"
    items={[
      {
        label: "Your Profile",
        key: "0"
      },
      {
        label: "logout",
        key: "1"
      },
      {
        type: "divider"
      },
      {
        label: "Edit Profile (disabled)",
        key: "3",
        disabled: true
      }
    ]}
  />
)

const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="min-h-screen  " >
      <Sider
        className="z-10 fixed inset-0"
        id="components-layout-demo-side"
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="logo"> </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{
        // marginLeft: 200,
      }}>
        <Header className="site-layout-background fixed p-0 z-[1] w-full">
          <div className="flex justify-between">
            <div className="logo w-full "> </div>
            <div className="self-center mr-2  ">
              <Dropdown overlay={menu}>
                <Badge dot>
                  <Avatar size={32} icon={<UserOutlined />} />
                </Badge>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content style={{
          padding: `78px 16px 0px ${collapsed === true ? "100px" : "220px"}`,
          overflow: 'initial',
        }}>
          <Breadcrumb className="my-4">
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background min-h-full p-2"
          >
            {children}
          </div>
        </Content>
        {/* <Footer className="text-center">E-Commerce App ©2022</Footer> */}
      </Layout>
    </Layout>
  )
}

export default App
