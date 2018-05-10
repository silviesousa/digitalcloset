import React from "react";
import axios from "./axios";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import { Login } from "./login";

export default function Welcome() {
    return (
        <div>
            <HashRouter>
                <div className="welcomeContainer">
                    <img src="/hanger_logo.png" />
                    <h1> Digital Closet </h1>
                    <Route exact path="/" component={Register} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e) {
        this[e.target.name] = e.target.value;
    }
    submit() {
        axios
            .post("/register", {
                first: this.first,
                last: this.last,
                email: this.email,
                password: this.password
            })
            .then(resp => {
                if (resp.data.success) {
                    location.replace("/");
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }
    render() {
        return (
            <div>
                <div className="welcomeContainer">
                    {this.state.error && (
                        <div className="errorMessage">
                            Something went wrong. Please try again.
                        </div>
                    )}
                    <br />
                    <input
                        className="inputFields"
                        name="first"
                        placeholder="First name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input
                        className="inputFields"
                        name="last"
                        placeholder="Last name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input
                        className="inputFields"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input
                        className="inputFields"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <button onClick={this.submit}>Submit</button>
                    <br />
                    <br />
                    <Link to="/login" className="member">
                        Already a member? Please log in.
                    </Link>
                </div>
            </div>
        );
    }
}
