import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Logo from "./logo";
import App from "./app";

import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
//import * as io from "socket.io-client";

//import { init as initSocket } from "./socket";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

if (location.pathname == "/welcome") {
    ReactDOM.render(<Welcome />, document.querySelector("main"));
} else {
    const elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
    ReactDOM.render(elem, document.querySelector("main"));
}
