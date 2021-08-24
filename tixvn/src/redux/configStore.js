
import {applyMiddleware, combineReducers, createStore} from 'redux'

import reduxThunk from 'redux-thunk'
import { FilmReducer } from './reducers/FilmReducer'
import { UserReducer } from './reducers/UserReducer'

const rootReducer =  combineReducers({
    FilmReducer:FilmReducer,
    UserReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))