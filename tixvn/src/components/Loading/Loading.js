import React, { Fragment } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { useDispatch, useSelector } from 'react-redux'


export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <Fragment>
            {isLoading ? <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(230, 54, 180, 1)',
                display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99
            }}>
                <HashLoader />
            </div> : ''}

        </Fragment>

    )
}
