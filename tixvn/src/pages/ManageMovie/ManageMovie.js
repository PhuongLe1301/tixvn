import React, {useState} from 'react';
import { Table, Tag, Space, Input, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './ManageMovie.css';
import PopupShowtime from './PopupShowtime';


const { Search } = Input;

export default function ManageMovie() {

  const [buttonPopup, setButtonPopup] = useState(false);

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
      title: 'Mã phim',
      dataIndex: 'maphim',
      key: 'maphim',
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenphim',
      key: 'tenphim',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhanh',
      key: 'hinhanh',
      render: text => <img src={text} alt={text} width={80} height={95}/>,
    },
    {
      title: 'Mô tả',
      dataIndex: 'mota',
      key: 'mota',
    },
    {
      title: 'Mã nhóm',
      dataIndex: 'manhom',
      key: 'manhom',
    },
    {
      title: 'Ngày khởi chiếu',
      key: 'ngaykhoichieu',
      dataIndex: 'ngaykhoichieu',
      render: ngaykhoichieu => (
        <>
          {ngaykhoichieu.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button onClick={()=> setButtonPopup(true)}>Tạo lịch chiếu</Button>
          <PopupShowtime trigger={buttonPopup} setTrigger={setButtonPopup}>
            {/* <h3>My popup</h3>
            <p>This is my button triggered popup</p> */}
          </PopupShowtime>
          <a>Sửa</a>
          <a>Xóa</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      maphim:'1',
      tenphim: 'The Flash',
      hinhanh: 'https://picsum.photos/100/100',
      mota: '..................................',
      manhom: 'GP01',
      ngaykhoichieu: ['1-1-2019'],
    },
    {
      key: '2',
      maphim:'2',
      tenphim: 'Captain Marvel',
      hinhanh: 'https://picsum.photos/100/100',
      mota: '..................................',
      manhom: 'GP01',
      ngaykhoichieu: ['1-1-2019'],
    }
  ];

  return (
    <div className="manageMovie">
      <button type="submit" className="btn btn-success ml-3 btn-add">Thêm phim</button>
      <div className="col-12 my-2 manageMovie-search">
        <Space direction="vertical">
          <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 500 }} />
        </Space>,
      </div>
      <Table className="ml-3 manageMovie-table" columns={columns} dataSource={data} />
      
    </div>
  )
}
