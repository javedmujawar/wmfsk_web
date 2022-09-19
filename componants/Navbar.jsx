import React, { useState } from "react";
import { Layout, Menu, Button, Slider } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import menus from "../public/menu.json";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    { label: "Banks", key: "item-1" }, // remember to pass the key prop
    { label: "Vehicals", key: "item-2", disabled: true }, // which is required
    {
      label: "Insurance",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }],
    },
  ];

  return (
    
    <div
      style={{
        width: 256,
      }}
    > 
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
     
    </div>
    
  );
}
