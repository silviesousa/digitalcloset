//my saved outfits

import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swipeable from "react-swipeable";

export class MyOutfits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1> My favourite outfits </h1>
            </div>
        );
    }
}
