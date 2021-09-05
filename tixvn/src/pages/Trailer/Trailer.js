import React, { useEffect, useRef } from 'react'
import './Trailer.css'
import Aos from 'aos';
export default function Trailer(props) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setTrigger(false)
        }
    }
    return (props.trigger) ? (
        <div className="bg-popup" ref={modalRef} onClick={closeModal}>
            <div className="container popup">
                <div className="close-btn">
                <i className="fa fa-times-circle" onClick={()=>props.setTrigger(false)}></i>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}