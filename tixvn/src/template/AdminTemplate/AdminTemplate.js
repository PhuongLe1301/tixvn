import React, { useState } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import './AdminTemplate.css';
import { Layout, Menu } from 'antd';
import { history } from '../../App';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlaySquareOutlined,
  CaretDownFilled,
  RightOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { ACCESSTOKEN, USER_LOGIN } from '../../ultil/setting';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function AdminTemplate(props) {

  const {userLogin} = useSelector( state => state.UserReducer);
  // console.log('userLogin', userLogin);

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

  if(!localStorage.getItem(USER_LOGIN)){
    alert('Bạn không có quyền truy cập vào trang này !');
    return <Redirect to = '/' />
  }

  if(userLogin.maLoaiNguoiDung !== 'QuanTri') {
    alert('Bạn không có quyền truy cập vào trang này !');
    return <Redirect to = '/' />
  }

  return (
    <Route path={props.path} exact render={(propsRoute) => {
      return <div className="adminTemplate">
        <div className="adminTemplate-bg"></div>
        <div className="adminTemplate-bg"></div>
        <div className="adminTemplate-bg"></div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={state.collapsed}>
            <div className="logo">
                <NavLink to='/'>
                  <img src="https:tix.vn/app/assets/img/icons/web-logo.png" style={{ width: 50, height: 50 }} alt="https:tix.vn/app/assets/img/icons/web-logo.png" />
                </NavLink>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<PlaySquareOutlined />}>
                <NavLink to="/admin/quanlyphim">Quản lý phim</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
              <NavLink to="/admin/quanlynguoidung">Quản lý người dùng</NavLink>
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
                  <span> {userLogin.hoTen}</span>
                </h4>
                <img className="rounded-circle ml-3" src="https:tix.vn/app/assets/img/icons/web-logo.png" alt="https:tix.vn/app/assets/img/icons/web-logo.png" />
                <Menu className="text-white" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                  <SubMenu key="SubMenu" icon={<CaretDownFilled style={{ fontSize: '20px' }} />}>
                    <Menu.ItemGroup>
                      <Menu.Item icon={<RightOutlined />} key="setting:1">Cập nhật thông tin</Menu.Item>
                      <Menu.Item icon={<RightOutlined />} key="setting:2"><a onClick={()=>{
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(ACCESSTOKEN);
                    history.push('/');
                    window.location.reload();
                }}>
                    Đăng Xuất</a></Menu.Item>
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
