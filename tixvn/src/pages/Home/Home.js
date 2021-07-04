import React from 'react'
import { Carousel } from 'antd';
export default function Home() {

    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const contentStyle = {
        height: '100%',
        textAlign: 'center',
        width: '100%',
    };
    return (

        <div className="container_fluid">

            <Carousel afterChange={onChange}>
                <div className="mt-5">
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" style={contentStyle} />
                </div>
                <div>
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" style={contentStyle} />
                </div>
                <div>
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" style={contentStyle} />
                    
                </div>

            </Carousel>,

        </div>

    )
}
