import React from "react";
import axios from "./axios";
import { HashRouter } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { getCloset } from "./actions";
import { connect } from "react-redux";
import Logo from "./logo";
import { Login } from "./login";
import { DropdownProfile } from "./dropdownProfile";
import { DropdownCloset } from "./dropdownCloset";
import { DropdownOutfits } from "./dropdownOutfits";
import Upload from "./upload";
import CarouselTops from "./tops";
import CarouselBottoms from "./bottoms";
import { Create } from "./createoutfits";
//import CarouselFootwear from "./footwear";

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
                        <div className="routes">
                            <Route
                                exact
                                path="/tops"
                                component={CarouselTops}
                            />
                            <Route
                                exact
                                path="/bottoms"
                                component={CarouselBottoms}
                            />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {};

export default connect(null)(App);
