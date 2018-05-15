import React, { Component } from "React";
import { BrowserRouter, Route, Link } from "react-router-dom";

export class DropdownProfile extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div>
                <div className="profile">
                    <img
                        className="icons"
                        src="/150-outlined-icons/SVG/setting_2.svg"
                        onClick={this.showMenu}
                    />
                    {this.state.showMenu ? (
                        <div
                            className="menu"
                            ref={element => {
                                this.dropdownMenu = element;
                            }}
                        >
                            <a>Update Profile</a>
                            <Link to="/logout">Log out</Link>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}
