import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Tag, Space, Input, Button } from 'antd';
import './ManageMovie.css';
import PopupShowtime from './PopupShowtime';
import AddMovie from './AddMovie/AddMovie';
import EditMovie from './EditMovie/EditMovie';
import { deteleteMovieAction, getApiMovieAction, getInfoMovieAction } from '../../redux/action/FilmAction';


const { Search } = Input;

export default function ManageMovie() {

  const { arrFilmDefault } = useSelector(state => state.FilmReducer);
  // console.log('arrFilmDefault', arrFilmDefault);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiMovieAction());
  }, [])

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopupAdd, setButtonPopupAdd] = useState(false);
  const [buttonPopupEdit, setButtonPopupEdit] = useState(false);

  const onSearch = value => console.log(value);

  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.maPhim - b.maPhim,
      width: '8%',
      align: 'center'
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();

        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
      width: '15%',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, movie, index) => {
        return <Fragment>
          <img src={movie.hinhAnh} alt={movie.tenPhim} width={80} height={95} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/80/95` }} />
        </Fragment>
      },
      width: '10%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      render: (text, movie) => {
        return <Fragment>
          {movie.moTa.length > 50 ? movie.moTa.substr(0, 50) + '...' : movie.moTa}
        </Fragment>
      },
      width: '20%',
    },
    {
      title: 'Mã nhóm',
      dataIndex: 'maNhom',
      width: '7%',
      align: 'center'
    },
    {
      title: 'Ngày khởi chiếu',
      dataIndex: 'ngayKhoiChieu',
      width: '15%',
    },
    {
      title: 'Hành động',
      render: (text, movie) => {
        return <Space size="middle">
          <Button className="btnManageMovie action-btn" onClick={() => setButtonPopup(true)}>Tạo lịch chiếu</Button>
          <PopupShowtime trigger={buttonPopup} setTrigger={setButtonPopup}>
            {/* <h3>My popup</h3>
            <p>This is my button triggered popup</p> */}
          </PopupShowtime>

          <Button key={1} className="btnManageMovie action-btn" onClick={() => {
            setButtonPopupEdit(true);
            dispatch(getInfoMovieAction(movie.maPhim));
          }}>Sửa</Button>
          <EditMovie trigger={buttonPopupEdit} setTrigger={setButtonPopupEdit}></EditMovie>

          <Button key={2} className="btnManageMovie action-btn" onClick={()=>{
            if(window.confirm('Bạn có chắc chắn muốn xóa phim ' + movie.tenPhim)){
              dispatch(deteleteMovieAction(movie.maPhim));
            }
          }}>Xóa</Button>
        </Space>
      },
      width: '30%',
    },
  ];

  const data = arrFilmDefault;

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div className="manageMovie">
      <button type="submit" className="btn btn-success ml-3 btnManageMovie addMovie-btn" onClick={() => setButtonPopupAdd(true)}>Thêm phim</button>
      <AddMovie trigger={buttonPopupAdd} setTrigger={setButtonPopupAdd}></AddMovie>
      <div className="col-12 my-2 manageMovie-search">
        <Space direction="vertical">
          <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: '45vw' }} />
        </Space>,
      </div>
      <Table className="ml-3 manageMovie-table" columns={columns} dataSource={data} onChange={onChange} rowKey={'maPhim'}/>

    </div>
  )
}
