import React, { Component } from 'react';
import { GROUPID } from '../../ultil/setting';
import {baseService} from './baseService';

export class MangageMovieService extends baseService {
    constructor() {
        super();
    }
    
    getMovieList = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }
}

export const manageMovieService = new MangageMovieService();


