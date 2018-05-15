import React from "react";
import axios from "./axios";
import Logo from "./logo";
import { HashRouter } from "react-router-dom";
import { Login } from "./login";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { DropdownProfile } from "./dropdownProfile";
import { DropdownCloset } from "./dropdownCloset";
import { DropdownOutfits } from "./dropdownOutfits";
import { getCloset } from "./actions";
import { connect } from "react-redux";
import CarouselTops from "./tops";
import CarouselBottoms from "./bottoms";
//import Upload from "./upload";

import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

class App extends React.Component {
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
                image: resp.data.image
            });
        });
        this.props.dispatch(getCloset());
    }
    render() {
        if (!this.state.id) {
            return null;
        }
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <div className="header">
                            <DropdownProfile />
                            <DropdownCloset />
                            <DropdownOutfits />
                        </div>
                        <div>
                            <CarouselBottoms />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {};

export default connect(null)(App);
