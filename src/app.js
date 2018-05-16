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
import CarouselFootwear from "./footwear";
import Create from "./createOutfit";
import { MyOutfits } from "./myOutfits";
import { UpdateProfile } from "./updateProfile";

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
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="header">
                            <DropdownProfile />
                            <DropdownCloset />
                            <DropdownOutfits />
                        </div>
                        <div className="routes">
                            <Route
                                exact
                                path="/tops"
                                render={() => (
                                    <CarouselTops
                                        width={"1000px"}
                                        height={"700px"}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/bottoms"
                                render={() => (
                                    <CarouselBottoms
                                        width={"1000px"}
                                        height={"700px"}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/footwear"
                                render={() => (
                                    <CarouselFootwear
                                        width={"1000px"}
                                        height={"700px"}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/createoutfit"
                                component={Create}
                            />
                            <Route
                                exact
                                path="/myoutfits"
                                component={MyOutfits}
                            />
                            <Route
                                exact
                                path="/updateprofile"
                                component={UpdateProfile}
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
