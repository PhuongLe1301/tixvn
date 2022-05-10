import React from 'react';
import { useSelector } from 'react-redux';
import "./Footer.css";
import _ from 'lodash';

export default function Footer(props) {

    const { heThongRapChieu } = useSelector(state => state.TheaterReducer);
    const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
        _.pick(heThongRap, ['maHeThongRap', 'tenHeThongRap', 'logo'])
    );
    return (
        <div className="bg-dark text-white">
            <div className="container footer">
                <div className="row py-3">
                    <div className="col-4 footerInfo">
                        <p>TIX</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="#">FAQ</a>
                                <a href="#" className="d-block">Brand Guidelines</a>
                            </div>
                            <div className="col-6">
                                <a href="#">Thỏa thuận sử dụng</a>
                                <a href="#" className="d-block">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 doitac_footer">
                        <p>ĐỐI TÁC</p>
                        <div className="col-12 p-0">
                            <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                                {/* <img src="https://tix.vn/app/assets/img/icons/cgv.png" alt="https://tix.vn/app/assets/img/icons/cgv.png" /> */}
                                <img src='../img/cgvlogo.jpg'/>
                            </a>
                            <a target="_blank" href="http://bhdstar.vn/" title="BHD">
                                {/* <img src="https://tix.vn/app/assets/img/icons/bhd.png" alt="https://tix.vn/app/assets/img/icons/bhd.png" /> */}
                                <img src='../img/bhdlogo.png'/>
                            </a>
                            <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                                {/* <img src="https://tix.vn/app/assets/img/icons/galaxycine.png" alt="https://tix.vn/app/assets/img/icons/galaxycine.png" /> */}
                                <img src='../img/galaxylogo.png'/>
                            </a>
                            <a target="_blank" href="http://cinestar.com.vn" title="Cinestar">
                                {/* <img src="https://tix.vn/app/assets/img/icons/cinestar.png" alt="https://tix.vn/app/assets/img/icons/cinestar.png" /> */}
                                <img src='../img/cinestar.png'/>
                            </a>
                        </div>
                        <div className="col-12 p-0">
                            <a target="_blank" href="https://www.megagscinemas.vn" title="MegaGS">
                                {/* <img src="https://tix.vn/app/assets/img/icons/megags.png" alt="https://tix.vn/app/assets/img/icons/megags.png" /> */}
                                <img src='../img/megagslogo.jpg'/>
                            </a>
                            <a target="_blank" href="https://www.betacineplex.vn/" title="Beta">
                                {/* <img src="https://tix.vn/app/assets/img/icons/bt.jpg" alt="https://tix.vn/app/assets/img/icons/bt.jpg" /> */}
                                <img src='../img/beta.jpg'/>
                            </a>
                            <a target="_blank" href="https://www.betacineplex.vn/" title="Dong Da Cinema">
                                {/* <img src="https://tix.vn/app/assets/img/icons/dongdacinema.png" alt="https://tix.vn/app/assets/img/icons/dongdacinema.png" /> */}
                                <img src='../img/dongdalogo.png'/>
                            </a>
                            <a target="_blank" href="https://touchcinema.com/" title="Touch Cinema">
                                {/* <img src="https://tix.vn/app/assets/img/icons/TOUCH.png" alt="https://tix.vn/app/assets/img/icons/TOUCH.png" /> */}
                                <img src='../img/touchlogo.png'/>
                            </a>
                            {/* <a target="_blank" href="https://cinemaxvn.com/" title="Cinemax">
                                <img src="https://tix.vn/app/assets/img/icons/cnx.jpg" alt="https://tix.vn/app/assets/img/icons/cnx.jpg" />
                            </a> */}
                            <a target="_blank" href="http://lottecinemavn.com" title="Lotte Cinema">
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" alt="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" />
                            </a>
                        </div>
                        <div className="col-12 p-0">
                            {/* <a target="_blank" href="http://starlight.vn/" title="Starlight">
                                <img src="https://tix.vn/app/assets/img/icons/STARLIGHT.png" alt="https://tix.vn/app/assets/img/icons/STARLIGHT.png" />
                            </a> */}
                            {/* <a target="_blank" href="https://www.dcine.vn/" title="Dcine">
                                <img src="https://tix.vn/app/assets/img/icons/dcine.png" alt="https://tix.vn/app/assets/img/icons/dcine.png" />
                            </a> */}
                            <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
                                {/* <img src="https://tix.vn/app/assets/img/icons/zalopay_icon.png" alt="https://tix.vn/app/assets/img/icons/zalopay_icon.png" /> */}
                                <img src='../img/zalopaylogo.png'/>
                                
                            </a>
                            <a target="_blank" href="https://www.payoo.vn/" title="Payoo">
                                {/* <img src="https://tix.vn/app/assets/img/icons/payoo.jpg" alt="https://tix.vn/app/assets/img/icons/payoo.jpg" /> */}
                                <img src='../img/payoologo.png'/>
                            </a>
                            <a target="_blank" href="https://www.vietcombank.com.vn/" title="Vietcombank">
                                {/* <img src="https://tix.vn/app/assets/img/icons/VCB.png" alt="https://tix.vn/app/assets/img/icons/VCB.png" /> */}
                                <img src='../img/vcblogo.png'/>
                            </a>
                        </div>
                        <div className="col-12 p-0">
                            <a target="_blank" href="http://www.agribank.com.vn/" title="Agribank">
                                {/* <img src="https://tix.vn/app/assets/img/icons/AGRIBANK.png" alt="https://tix.vn/app/assets/img/icons/AGRIBANK.png" /> */}
                                <img src='../img/agblogo.png'/>
                            </a>
                            <a target="_blank" href="https://www.vietinbank.vn/" title="Vietinbank">
                                {/* <img src="https://tix.vn/app/assets/img/icons/VIETTINBANK.png" alt="https://tix.vn/app/assets/img/icons/VIETTINBANK.png" /> */}
                                <img src='../img/vietinbanklogo.png'/>
                            </a>
                            {/* <a target="_blank" href="https://www.indovinabank.com.vn/" title="IVB">
                                <img src="https://tix.vn/app/assets/img/icons/IVB.png" alt="https://tix.vn/app/assets/img/icons/IVB.png" />
                            </a> */}
                            {/* <a target="_blank" href="http://123go.vn" title="123Go">
                                <img src="https://tix.vn/app/assets/img/icons/123go.png" alt="https://tix.vn/app/assets/img/icons/123go.png" />
                            </a> */}
                            {/* <a target="_blank" href="http://laban.vn" title="La Bàn">
                                <img src="https://tix.vn/app/assets/img/icons/laban.png" alt="https://tix.vn/app/assets/img/icons/laban.png" />
                            </a> */}
                        </div>
                    </div>
                    <div className="col-4 appRecomend">
                        <div className="row">
                            <div className="col-6">
                                <p>MOBILE APP</p>
                                <div className="d-flex">
                                    <a>
                                        {/* <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="https://tix.vn/app/assets/img/icons/apple-logo.png" /> */}
                                        <i className="fab fa-apple"></i>
                                    </a>
                                    <a>
                                        {/* <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="https://tix.vn/app/assets/img/icons/android-logo.png" /> */}
                                        <i className="fab fa-android"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6">
                                <p>SOCIAL</p>
                                <div className="d-flex">
                                    <a target="_blank" href="https://www.facebook.com/">
                                        {/* <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="https://tix.vn/app/assets/img/icons/facebook-logo.png" /> */}
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a target="_blank" href="https://www.zalo.me/pc">
                                        {/* <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="https://tix.vn/app/assets/img/icons/zalo-logo.png" /> */}
                                        <img style={{borderRadius:'1rem'}} src='../img/iconzalo.png' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_responsive768">
                    <div className="row">
                        <div className="col-6" style={{ width: '155px' }}>
                            <div className="mb-3">
                                <a href="#">Thỏa thuận sử dụng</a>
                            </div>
                            <div>
                                <a href="#" className="d-block">Chính sách bảo mật</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <a target="_blank" href="https://www.facebook.com/">
                                    <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="https://tix.vn/app/assets/img/icons/facebook-logo.png" />
                                </a>
                                <a target="_blank" href="https://www.zalo.me/pc">
                                    <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="https://tix.vn/app/assets/img/icons/zalo-logo.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pb-5">@2021 All rights reserved</div>
            </div>
        </div>
    )
}
