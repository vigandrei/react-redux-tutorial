import React from "react";
import {render} from "react-dom";
import  store from "./store";
import { Provider } from "react-redux";
import MainApp from './containers/MainApp'



render( <Provider store = {store}>
            <MainApp />
        </Provider>,
         window.document.getElementById('app'))

