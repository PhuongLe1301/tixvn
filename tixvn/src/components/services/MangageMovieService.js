import React, { Component } from 'react';
import { GROUPID } from '../../ultil/setting';
import {baseService} from './baseService';

export class MangageMovieService extends baseService {
    constructor() {
        super();
    }
    
    getMovieList = (tenPhim='') => {
        if(tenPhim.trim()!= ''){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`);
        }
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }

    addMovieUploadImage = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
    }

    getInfoMovie = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    }

    updateMovieUpload = (formData) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
    }

    deleteMovie = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    }

    getListCarousel = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
}

export const manageMovieService = new MangageMovieService();


