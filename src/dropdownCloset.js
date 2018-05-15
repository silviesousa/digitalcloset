import React, { Component } from "React";
import { Link } from "react-router-dom";
import Upload from "./upload";
import axios from "./axios";
import CarouselTops from "./tops";
import CarouselBottoms from "./bottoms";
import CarouselFootwear from "./footwear";
import { getCloset } from "./actions";

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
            <div className="closet">
                <img
                    className="icons"
                    src="/150-outlined-icons/SVG/upload_folder.svg"
                    onClick={this.showMenu}
                />
                {this.state.showMenu ? (
                    <div
                        className="menu"
                        ref={element => {
                            this.dropdownMenu = element;
                        }}
                    >
                        <Link to="/tops">Tops</Link>
                        <Link to="/bottoms">Bottoms</Link>
                        <Link to="footwear">Footwear</Link>
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
        );
    }
}
