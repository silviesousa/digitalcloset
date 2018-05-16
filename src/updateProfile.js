import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swipeable from "react-swipeable";

export class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1> Update your profile here </h1>
                <p> username, password, email, profile pic </p>
                <img
                    className="icons"
                    src="/150-outlined-icons/svg/profile.svg"
                />
            </div>
        );
    }
}
