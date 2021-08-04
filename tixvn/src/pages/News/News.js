import React, { useState } from 'react'

export default function News(props) {

    const [selected, setSelected] = useState(null)
    const [spselect, setSpselect] = useState(null)
    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    const xemChiTiet = (sanPhamClick) => {
        if (spselect == sanPhamClick) {
            return setSpselect(null)
        }
        setSpselect(state.sanPhamChiTiet=sanPhamClick)
    }
    return (
        <div className="wrapper">
            <div className="d-flex">
                {data.map((item, index) => {
                    return <div key={index}>
                        <div className="mr-3">
                            <button onClick={() => toggle(index)}>{item.question}</button>
                        </div>
                        {selected === index ? (
                            <div>
                                <h6>{item.answer}</h6>
                            </div>
                        ) : null}

                    </div>
                })}
            </div>
            <div className="container">
                <h3 className="text-center">Danh Sách Sản Phảm</h3>
                <div className="row">
                    {dataProduct.map((item, index) => {
                        return <div className="col-4" key={index}>
                            <img className="card-img-top" src={item.hinhAnh} />
                            <div className="card-body">
                                <h4 className="card-title">{item.tenSP}</h4>
                                <button type="button" className="btn btn-success" onClick={() => { xemChiTiet(item) }}>Xem Chi Tiet</button>
                                <button className="btn btn-primary ml-4" >Thêm Giỏ Hàng</button>
                            </div>
                        </div>
                    })}
                    <div className="row mt-5">
                        <div className="col-4">
                            <h3 className="text-center">
                                Iphone
                            </h3>
                            <img src={state.sanPhamChiTiet.hinhAnh} style={{ width: '100%' }}></img>
                        </div>
                        <div className="col-8">
                            <h3 className="text-center">Thông tin sản phẩm</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>{state.sanPhamChiTiet.tenSP}</th>
                                    </tr>
                                    <tr>
                                        <th>Màn Hình</th>
                                        <th>{state.sanPhamChiTiet.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{state.sanPhamChiTiet.cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{state.sanPhamChiTiet.cameraSau}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        question: 'Question1',
        answer: 'Answer1'
    },
    {
        question: 'Question2',
        answer: 'Answer2'
    },
    {
        question: 'Question3',
        answer: 'Answer3'
    }
]
const dataProduct = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "https://picsum.photos/200"
    },

    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "https://picsum.photos/201"
    },

    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "https://picsum.photos/202"
    }
];
const state = {
    sanPhamChiTiet: {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "https://picsum.photos/200"
    },
}