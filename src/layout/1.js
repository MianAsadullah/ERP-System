import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import './SiderPrimary.less'
import { CodepenCircleFilled } from '@ant-design/icons'

const { Sider } = Layout

const SiderPrimary = props => {
  const [collapsed, setCollapsed] = useState(false)



  const onCollapse = collapsed => {
    console.log(collapsed)
    setCollapsed({ collapsed })
  }
  const getSelectedMenuKeys = () => {
    const { pathname } = window.location
    if (
      pathname === '/crm' ||
      pathname === '/engagement' ||
      pathname === '/leads' ||
      pathname === '/opportunities' ||
      pathname === '/contacts' ||
      pathname === '/accounts' ||
      pathname === '/quotes' ||
      pathname === '/invoice'
    ) {
      return 'crm'
    } else if (pathname === '/plan') {
      return 'plan'
    } else if (pathname === '/') {
      return null
    } else {
      return pathname.slice(1)
    }
  }
  const onMenuClick = () => {
    const { pathname } = window.location
    const { getSelectedItem } = props
    setTimeout(() => {
      getSelectedItem(pathname)
    })
  }

  return (
    <Sider
      collapsible
      onCollapse={onCollapse}
      collapsedWidth={60}
      width={145}
      className="sider-primary"
    >
      <div className="logo">
        <CodepenCircleFilled />
      </div>
      <Menu
        onClick={onMenuClick}
        theme="dark"
        defaultSelectedKeys={[getSelectedMenuKeys()]}
        mode="inline"
      >
        <Menu.ItemGroup>
          <Menu.Item
            key="dashboard"
            icon={
              <span>
                <span className="material-icons ">dashboard</span>
              </span>
            }
          >
            <Link to="/dashboard"> Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            key="plan"
            icon={
              <span>
                <span className="material-icons ">trending_up</span>
              </span>
            }
          >
            <Link to="/plan"> Plan</Link>
          </Menu.Item>
          <Menu.Item
            key="crm"
            icon={
              <span>
                <span className="material-icons ">supervisor_account</span>
              </span>
            }
          >
            <Link to="/crm"> CRM</Link>
          </Menu.Item>
          <Menu.Item
            key="sales"
            icon={
              <span>
                <span className="material-icons ">signal_cellular_alt</span>
              </span>
            }
          >
            <Link to="/sales"> Sales</Link>
          </Menu.Item>

          <Menu.Item
            key="desk"
            icon={
              <span>
                <span className="material-icons ">laptop</span>
              </span>
            }
          >
            <Link to="/desk"> Desk</Link>
          </Menu.Item>

          <Menu.Item
            key="projects"
            icon={
              <span>
                <span className="material-icons ">folder_open</span>
              </span>
            }
          >
            <Link to="/projects"> Projects</Link>
          </Menu.Item>
          <Menu.Item
            key="campaign"
            icon={
              <span>
                <span className="material-icons ">campaign</span>
              </span>
            }
          >
            <Link to="/campaigns"> Campaigns</Link>
          </Menu.Item>
          <Menu.Item
            key="social"
            icon={
              <span>
                <span className="material-icons ">favorite_border</span>
              </span>
            }
          >
            <Link to="/social"> Social</Link>
          </Menu.Item>
        </Menu.ItemGroup>{' '}
        {/* settings and other */}
        <Menu.ItemGroup>
          <Menu.Item
            key="settings"
            icon={
              <span>
                <span className="material-icons ">settings</span>
              </span>
            }
          >
            <Link to="/settings"> Settings</Link>
          </Menu.Item>

          <Menu.Item
            key="logout"
            icon={
              <span>
                <span className="material-icons ">logout</span>
              </span>
            }
          >
            <Link to="/signin"> Log Out</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  )
}

export default SiderPrimary
