import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './AdminTemplate.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlaySquareOutlined,
  CaretDownFilled,
  RightOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function AdminTemplate(props) {

  const [state, setState] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setState({
      ...state,
      collapsed: !state.collapsed,
    });
  };

  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };

  const { current } = state;

  return (
    <Route path={props.path} exact render={(propsRoute) => {
      return <div className="adminTemplate">
        <div className="adminTemplate-bg"></div>
        <div className="adminTemplate-bg"></div>
        <div className="adminTemplate-bg"></div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={state.collapsed}>
            <div className="logo">
              <img src="https:tix.vn/app/assets/img/icons/web-logo.png" style={{ width: 50, height: 50 }} alt="https:tix.vn/app/assets/img/icons/web-logo.png" />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<PlaySquareOutlined />}>
                Quản lý phim
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Quản lý người dùng
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background position-relative" style={{ padding: 0 }}>
              {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
              <div className="userFunction position-absolute d-flex">
                <h4 className="text-white">
                  Chào!,
                  <span> Hảo</span>
                </h4>
                <img className="rounded-circle ml-3" src="https:tix.vn/app/assets/img/icons/web-logo.png" alt="https:tix.vn/app/assets/img/icons/web-logo.png" />
                <Menu className="text-white" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                  <SubMenu key="SubMenu" icon={<CaretDownFilled style={{ fontSize: '20px' }} />}>
                    <Menu.ItemGroup>
                      <Menu.Item icon={<RightOutlined />} key="setting:1">Cập nhật thông tin</Menu.Item>
                      <Menu.Item icon={<RightOutlined />} key="setting:2">Đăng xuất</Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <props.component {...propsRoute} />
            </Content>
          </Layout>
        </Layout>
      </div>

    }} />
  )
}
