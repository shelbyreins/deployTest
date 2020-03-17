import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './reducers/reducers.js'
import App from "./App";

const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>
    , document.getElementById('root')
)