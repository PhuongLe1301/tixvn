import React from 'react';
import './PopupShowtime.css';
import { Form, Button, Select, DatePicker, InputNumber } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

function PopupShowtime(props) {

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }

    return (props.trigger) ? (
        <div className="popupShowtime">
            <div className="popupShowtime-inner text-white">
                <CloseCircleOutlined
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                    style={{ fontSize: '30px' }} />
                <h2 className="text-center text-white">Tạo lịch chiếu</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Hệ thống rạp">
                        <Select placeholder="Chọn hệ thống rạp">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Cụm rạp">
                        <Select placeholder="Chọn cụm rạp">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Ngày chiếu giờ chiếu">
                        <DatePicker showTime onChange={onChange} onOk={onOk} />
                    </Form.Item>
                    <Form.Item label="Giá vé">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item className="text-center">
                        <Button className="createTime-btn">Tạo lịch chiếu</Button>
                    </Form.Item>
                </Form>
                {/* {props.children} */}
            </div>
        </div>
    ) : "";
}

export default PopupShowtime
