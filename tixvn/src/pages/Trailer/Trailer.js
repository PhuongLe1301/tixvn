import React from 'react'
import './Trailer.css'
export default function Trailer(props) {
    return (props.trigger) ? (
        <div className="container popup">
            <div className="close-btn">
            <i className="fa fa-times-circle" onClick={()=>props.setTrigger(false)}></i>
            </div>
            {props.children}
        </div>
    ) : "";
}