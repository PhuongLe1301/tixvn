import React, { useEffect } from 'react';
import './PopupShowtime.css';
import { Form, Button, Input, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import Aos from 'aos';

function EditMovie(props) {

    useEffect(()=>{
        Aos.init({duration:2000});
    }, []);

    return (props.trigger) ? (
        <div className="popupShowtime">
            <div data-aos="zoom-in" className="popupShowtime-inner text-white">
                <CloseCircleOutlined
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                    style={{ fontSize: '30px' }} />
                <h2 className="text-center text-white">Chỉnh sửa phim</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Tài Khoản">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Họ Tên">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Loại Người dùng">
                        <Select placeholder="Chọn Loại Người dùng">
                            <Select.Option value="QuanTri">QuanTri</Select.Option>
                            <Select.Option value="KhachHang">KhachHang</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className="text-center">
                        <Button className="createTime-btn">Chỉnh Sửa User</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    ) : "";
}

export default EditMovie
