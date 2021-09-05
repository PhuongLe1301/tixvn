import React, { useEffect, useState } from 'react'
import DienAnh24h from './DienAnh24h'
import Review from './Review'
import KhuyenMai from './KhuyenMai'
export default function News(props) {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return <div className="bG">
        <div className="titleIF">
            <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Điện Ảnh 24h</h2>
            <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Review</h2>
            <h2 className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Khuyến Mãi</h2>
        </div>
        <div className={toggleState === 1 ? "detailBottom activeDetail" : "detailBottom"}>
            <DienAnh24h/>
        </div>
        <div className={toggleState === 2 ? "detailBottom activeDetail" : "detailBottom"}>
            <Review/>
        </div>
        <div className={toggleState === 3 ? "detailBottom activeDetail" : "detailBottom"}>
            <KhuyenMai/>
        </div>
    </div>
}