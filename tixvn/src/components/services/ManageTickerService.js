import React, { Component } from 'react';
import { GROUPID } from '../../ultil/setting';
import {baseService} from './baseService';

export class MangageTicketService extends baseService {
    constructor() {
        super();
    }

    createShowtime = (thongTinLichChieu) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }
}

export const manageTicketService = new MangageTicketService();


