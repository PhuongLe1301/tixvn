import React, { useEffect } from 'react'
import "./Detail.css"
import { StarFilled } from '@ant-design/icons';
export default function Detail() {
    return (
        <div className="detailB">
            <div>
                <img src="https://s3img.vcdn.vn/123phim/2021/03/godzilla-vs-kong-16150059793097.jpg" className="detailBg" />
                <div className="container-fluid">
                    <div className="infoDetail">
                        <div className="d-flex">
                            <img src="https://picsum.photos/id/1/200/200" className="mr-3" />
                            <div className="d-block">
                                <span className="dateTimes">26.03.2021</span>
                                <br />
                                <h6 className="ageType">C13</h6>
                                <span className="filmName">Godzilla vs. Kong</span>
                                <br />
                                <span className="detailFilmInfo">100 phút - 6.4 IMDb - 2D/Digital</span>
                                <br />
                                <button className="btnBuyTicketDetail">Mua vé</button>
                            </div>
                        </div>
                        <div>
                            <div className="circleStar">
                                <div className="circlePercent">
                                    <span>8.8</span>

                                </div>
                            </div>
                            <div className="ml-4">
                                <StarFilled className="starFilled" />
                                <StarFilled className="starFilled" />
                                <StarFilled className="starFilled" />
                                <StarFilled className="starFilled" />
                            </div>
                            <div className="humanRate">
                                <span>43 người đánh giá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bgBottom">
            </div>
            <div className="infoBottom">
                <h1 className="infoTitle">Lịch Chiếu</h1>
                <h1 className="infoTitle">Lịch Chiếu</h1>
                <h1 className="infoTitle">Lịch Chiếu</h1>
            </div>
        </div>
    )
}
