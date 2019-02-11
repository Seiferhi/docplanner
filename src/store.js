import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { rootReducers } from "./reducres";


const thunkmidleware = [thunk]
	
const Store = createStore(rootReducers, compose(
    applyMiddleware(...thunkmidleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default Store