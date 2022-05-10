import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Input, Button, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './ManageMovie.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
import { deleteUserAction, getApiUserAction, loadDataUserAction, searchUserAction } from '../../redux/action/AdminAction';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';


const { Search } = Input;

export default function ManageUser(props) {
  const dispatch = useDispatch()
  const danhSachNguoiDung = useSelector(state => state.AdminReducer.danhSachNguoiDung)
  const [visible, setVisible] = useState(false)
  const [buttonPopupAdd, setButtonPopupAdd] = useState(false);
  const [buttonPopupEdit, setButtonPopupEdit] = useState(false);
  useEffect(() => {
    const action = getApiUserAction()
    dispatch(action)
  }, [])

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  const onSearch = value => {
    dispatch(searchUserAction(value))
    if (value == '') {
      dispatch(getApiUserAction())
    }
  }
  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
      render: (text, user) => <span>{user.taiKhoan}</span>
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      key: 'hoTen',
      render: (text, user) => <span>{user.hoTen}</span>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text, user) => <span>{user.email}</span>
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDt',
      key: 'soDt',
      render: (text, user) => <span>{user.soDt}</span>
    },
    {
      title: 'Mã nhóm',
      dataIndex: 'maNhom',
      key: 'maNhom',
      render: (text, user) => <span>GP00</span>
    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
      render: (text, user) => <span>{user.maLoaiNguoiDung}</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, nguoiDung, index) => (
        <Space size="middle">
          <Button className="btnManageMovie action-btn"
            onClick={() => {
              setButtonPopupEdit(true)
              dispatch(loadDataUserAction(nguoiDung.taiKhoan))
            }}
          >Sửa</Button>
          <EditUser trigger={buttonPopupEdit} setTrigger={setButtonPopupEdit}></EditUser>
          <Button className="btnManageMovie action-btn" onClick={() => {
            if (window.confirm('Bạn có chắc muốn xóa tài khoản' + nguoiDung.taiKhoan)) {
              dispatch(deleteUserAction(nguoiDung.taiKhoan))
            }
          }}>Xóa</Button>
          <Button onClick={() => {setVisible(!visible)}}>Test</Button>
          
        </Space>
      ),
    },
  ];
  const data = danhSachNguoiDung

  return (
    <div className="manageMovie">
      <button type="submit" className="btn btn-success ml-3 btnManageMovie addMovie-btn" onClick={() => setButtonPopupAdd(true)}>Thêm User</button>
      <AddUser trigger={buttonPopupAdd} setTrigger={setButtonPopupAdd}></AddUser>
      <div className="col-12 my-2 manageMovie-search">
        <Space direction="vertical">
          <Search placeholder="Nhập tên tài khoản" allowClear onSearch={onSearch} style={{ width: 500 }} />
        </Space>,
      </div>
      <Table className="ml-3 manageMovie-table" columns={columns} dataSource={data} rowKey={"taiKhoan"} />
      <Modal visible={visible} title="Hello" />
    </div>
  )
}
