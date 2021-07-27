
import {applyMiddleware, combineReducers, createStore} from 'redux'

import reduxThunk from 'redux-thunk'
import { FilmReducer } from './reducers/FilmReducer'

const rootReducer =  combineReducers({
    FilmReducer:FilmReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))