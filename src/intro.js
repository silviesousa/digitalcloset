import React from "react";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="intro">
                <h1>Welcome to your Digital Closet!</h1>
                <br />
                <br />
                <br />
                <h1>
                    Here's how to use the app:
                    <br />
                    <br />
                    Use the{" "}
                    <img
                        className="icons"
                        src="/150-outlined-icons/SVG/upload_folder.svg"
                    />{" "}
                    to upload your clothing to the closet.
                    <br />
                    <br />
                    To create an outfit click the{" "}
                    <img
                        className="icons"
                        src="/150-outlined-icons/SVG/tshirt.svg"
                    />{" "}
                    and choose "Create Outfit".
                    <br />
                    When you are happy with the outfit you created, simply click
                    the <img
                        className="icons"
                        src="/dripicons/SVG/star.svg"
                    />{" "}
                    to save it. You can check all your saved outfits in "My
                    Outfits".
                    <br />
                    <br />
                    Use the{" "}
                    <img
                        className="icons"
                        src="/150-outlined-icons/SVG/setting_2.svg"
                    />{" "}
                    to edit your profile.
                    <br />
                    <br />
                    And most importantly, have fun!
                </h1>
            </div>
        );
    }
}
