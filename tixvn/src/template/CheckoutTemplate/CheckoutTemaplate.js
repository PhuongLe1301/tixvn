import { Fragment } from 'react'
import { Redirect, Route } from 'react-router'
import { USER_LOGIN } from '../../ultil/setting'
export default function CheckoutTemaplate(props) {

    const { Component, ...restProps } = props

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }} />
}
