import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
//import ProfilePic from "./profilepic";

//import { connect } from "react-redux";
//import Swipeable from "react-swipeable";

export class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        console.log("on click for update profile");
    }
    render() {
        return (
            <div className="update">
                <div className="updateProfilePic">
                    <img
                        className="iconsProfile"
                        src="/150-outlined-icons/svg/profile.svg"
                        onClick={this.handleChange}
                    />
                </div>
                <div className="updateProfile">
                    <input
                        className="inputFields"
                        name="first"
                        placeholder="first"
                        onChange={this.handleChange}
                    />
                    <input
                        className="inputFields"
                        name="last"
                        placeholder="last"
                        onChange={this.handleChange}
                    />
                    <input
                        className="inputFields"
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                    />
                    <input
                        className="inputFields"
                        name="password"
                        placeholder="email"
                        type="password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}

/*
export function Profile(props) {
    console.log(props);

    return (
        <div>
            <div>
                <h3>
                    Hi, {props.first} {props.last}! Welcome to your profile
                    page.
                </h3>
                <h3> About me </h3>
                <p>{props.bio}</p>
                <Bio bio={props.bio} setBio={props.setBio} />
            </div>
            <div>
                {props.profilePic && (
                    <img
                        className="bigProfilePic"
                        src={props.profilePic}
                        alt={props.first}
                    />
                )}
                {!props.profilePic && (
                    <img
                        className="bigProfilePic"
                        src="/default-user.gif"
                        alt={props.first}
                    />
                )}
            </div>
        </div>
    );
}
*/
