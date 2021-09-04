import React, { Fragment } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { useDispatch, useSelector } from 'react-redux'


export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <Fragment>
            {isLoading ? <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background:'linear-gradient( 135deg, #fc00ff, #00dbde)', backgroundImage:'inear-gradient( 150deg, #5a00ff 0%, #ff1ff7 100%, #ff1ff7 100%)',
                display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99
            }}>
                <HashLoader />
            </div> : ''}

        </Fragment>

    )
}
