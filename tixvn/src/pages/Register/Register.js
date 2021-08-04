import React, { useState } from 'react'
import './Register.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default function Register() {
    const [selectedDate, setSelectedDate] = useState(null)
    console.log('time',selectedDate)
    return (
        <div className="registerBG">
            <div className="circleTop"></div>
            <div className="circleBot"></div>
            <div className="registerGlass">
                <form className="container flex-column">
                    <h3 className="text-center">Đăng ký</h3>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="far fa-user p-2" />
                        <input type="text" placeholder="Username" required className="form-control text-white" /> </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="far fa-user p-2" />
                        <input type="text" placeholder="Name" required className="form-control text-white" /> </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="fas fa-lock p-2"></span>
                        <input type="password" placeholder="Password" required className="form-control text-white" /> </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="fa fa-envelope p-2"></span>
                        <input type="text" placeholder="Email" required className="form-control text-white" /> </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="fa fa-phone p-2"></span>
                        <input type="text" placeholder="Phone Number" required className="form-control text-white" /> </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="fa fa-users-cog p-2"></span>
                        <select name="maNhom" className="form-control" >
                            <option value="GP01">Group 1</option>
                            <option value="GP02">Group 2</option>
                            <option value="GP03">Group 3</option>
                            <option value="GP04">Group 4</option>
                        </select>
                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark text-light mt-3 ml-5">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
