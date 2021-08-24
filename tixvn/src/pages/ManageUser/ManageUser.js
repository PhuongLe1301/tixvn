import React, {useState} from 'react';
import { Table, Tag, Space, Input, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './ManageMovie.css';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';


const { Search } = Input;

export default function ManageUser(props) {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopupAdd, setButtonPopupAdd] = useState(false);
  const [buttonPopupEdit, setButtonPopupEdit] = useState(false);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = value => console.log(value);

  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDt',
      key: 'soDt',
    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button className="btnManageMovie action-btn" onClick={()=> setButtonPopupEdit(true)}>Sửa</Button>
          <EditMovie trigger={buttonPopupEdit} setTrigger={setButtonPopupEdit}></EditMovie>
          <Button className="btnManageMovie action-btn" onClick="">Xóa</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      taiKhoan:'123@admin',
      hoTen: 'Nguyễn Tân Testt',
      email: 'ffstring@gmail.com',
      soDt:'535435',
      maLoaiNguoiDung: 'QuanTri',
    },
    {
      key: '2',
      taiKhoan:'123@admin12',
      hoTen: 'Vinhadsa',
      email: 'admin123345@gmail.com',
      soDt:'4654644',
      maLoaiNguoiDung: 'QuanTri',
    }
  ];

  return (
    <div className="manageMovie">
      <button type="submit" className="btn btn-success ml-3 btnManageMovie addMovie-btn" onClick={()=> setButtonPopupAdd(true)}>Thêm User</button>
      <AddMovie trigger={buttonPopupAdd} setTrigger={setButtonPopupAdd}></AddMovie>
      <div className="col-12 my-2 manageMovie-search">
        <Space direction="vertical">
          <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 500 }} />
        </Space>,
      </div>
      <Table className="ml-3 manageMovie-table" columns={columns} dataSource={data} />
      
    </div>
  )
}
