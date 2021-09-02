
import {applyMiddleware, combineReducers, createStore} from 'redux'

import reduxThunk from 'redux-thunk'
import { AdminReducer } from './reducers/AdminReducer'
import { FilmReducer } from './reducers/FilmReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import { UserReducer } from './reducers/UserReducer'

const rootReducer =  combineReducers({
    FilmReducer,
    UserReducer,
    LoadingReducer,
    AdminReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))