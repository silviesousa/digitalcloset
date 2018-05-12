import React, { Component } from "React";

export class DropdownCloset extends Component {
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
                            <a>Upload</a>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}