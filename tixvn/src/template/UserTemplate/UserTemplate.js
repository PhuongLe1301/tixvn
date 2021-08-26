import React from 'react';
import { Route } from 'react-router-dom';
import './UserTemplate.css';

export default function UserTemplate(props) {
    return (
        <Route path={props.path} exact render={(propsRoute) => {
            return <div className="registerBG">
                <div className="circleTop"></div>
                <div className="circleBot"></div>
                <props.component {...propsRoute} />
            </div>
        }} />
    )
}
