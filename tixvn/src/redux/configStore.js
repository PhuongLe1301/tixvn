
import {applyMiddleware, combineReducers, createStore} from 'redux'

import reduxThunk from 'redux-thunk'
import { AdminReducer } from './reducers/AdminReducer'
import { CarouselReducer } from './reducers/CarouselReducer'
import { FilmReducer } from './reducers/FilmReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import { TheaterReducer } from './reducers/TheaterReducer'
import { UserReducer } from './reducers/UserReducer';

const rootReducer =  combineReducers({
    FilmReducer,
    UserReducer,
    LoadingReducer,
    AdminReducer,
    TheaterReducer,
    CarouselReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))