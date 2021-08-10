import React, { useEffect } from 'react';
import './PopupShowtime.css';
import { Form, Button, Input, DatePicker } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import Aos from 'aos';

function AddMovie(props) {

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
                <h2 className="text-center text-white">Thêm phim</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Mã phim">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Tên phim">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Đánh giá">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Mô tả">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item className="text-center">
                        <Button className="createTime-btn">Thêm phim</Button>
                    </Form.Item>
                </Form>
                {/* {props.children} */}
            </div>
        </div>
    ) : "";
}

export default AddMovie
