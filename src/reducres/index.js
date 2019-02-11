import {combineReducers} from 'redux'
import {addPostRed} from './addPostRed'



export const rootReducers = combineReducers({
    posts : addPostRed
}) 


