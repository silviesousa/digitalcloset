import React, { Component } from "React";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Upload from "./upload";
import axios from "./axios";

export class DropdownCloset extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.makeUploaderVisible = this.makeUploaderVisible.bind(this);
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

    makeUploaderVisible() {
        this.setState({
            uploaderShouldBeVisible: true
        });
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="profile">
                        <h2 onClick={this.showMenu}>Closet</h2>

                        {this.state.showMenu ? (
                            <div
                                className="menu"
                                ref={element => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <a>Tops</a>
                                <a>Bottoms</a>
                                <a>Footwear</a>
                                <a onClick={this.makeUploaderVisible}>Upload</a>
                                {this.state.uploaderShouldBeVisible && (
                                    <Upload
                                        changeImage={img =>
                                            this.setState({
                                                imageGar: img,
                                                uploaderShouldBeVisible: false
                                            })
                                        }
                                    />
                                )}
                            </div>
                        ) : null}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
