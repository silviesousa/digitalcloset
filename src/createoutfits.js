import React from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <h1>create outfits</h1>
                        <Route exact path="/createoutfit" component={Create} />
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}
