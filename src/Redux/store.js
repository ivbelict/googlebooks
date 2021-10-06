import {applyMiddleware, combineReducers, createStore} from "redux";
import booksReducer from "./booksReducer";
import thunk from "redux-thunk";
import bookProfileReducer from "./bookProfileReducer";


let redusersApp = combineReducers({
    booksPage: booksReducer,
    bookProfile: bookProfileReducer

})

let store = createStore(redusersApp,applyMiddleware(thunk));

window.store = store


export default store;