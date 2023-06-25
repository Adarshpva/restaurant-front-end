import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { allrestaurantReducer } from "./reducers/allrestaurantReducer"

const reducers = combineReducers({
    allrestaurantReducer

})
const middleware =[thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store


