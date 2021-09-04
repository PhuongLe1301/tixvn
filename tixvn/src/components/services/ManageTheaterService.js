import React, { Component } from 'react'
import { baseService } from './baseService';
import {GROUPID} from '../../ultil/setting';

export class ManageTheaterService extends baseService {
    constructor() {
        super();
    }

    getListTheaterSystem = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }

    getInfoTheaterSystem = () => {
        return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
    }

    getInfoCinemaComplex = (maHeThongRap) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
}

export const manageTheaterService = new ManageTheaterService();
