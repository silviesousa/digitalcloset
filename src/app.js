import React from "react";
import axios from "./axios";
import Logo from "./logo";
import { HashRouter } from "react-router-dom";
import { Login } from "./login";
import { BrowserRouter, Route, Link } from "react-router-dom";
//import reducer from "./reducer";
//import { createStore, applyMiddleware } from "redux";
//import reduxPromise from "redux-promise";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        axios.get("/user").then(resp => {
            this.setState({
                id: resp.data.id,
                first: resp.data.first,
                last: resp.data.last,
                bio: resp.data.bio,
                imageUrl: resp.data.imageUrl
            });
        });
    }
    render() {
        if (!this.state.id) {
            return null;
        }
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Logo />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
