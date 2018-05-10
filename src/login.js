import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export class Login extends React.Component {
    constructor(props) {
        console.log("something");
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
            .post(
                "/login",
                {
                    email: this.email,
                    password: this.password
                },
                {
                    xsrfCookieName: "mytoken",
                    xsrfHeaderName: "csrf-token"
                }
            )
            .then(resp => {
                if (resp.data.success) {
                    console.log("location replace is working");
                    location.replace("/");
                } else {
                    this.setState({
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="loginContainer">
                    {this.state.error && (
                        <div className="errorMessage">
                            Oops! Try to log in again!
                        </div>
                    )}
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
                    <button onClick={this.submit}>Login</button>
                    <br />
                    <br />
                    <Link to="/" className="member">
                        Not a member yet? Click here to register.
                    </Link>
                </div>
            </div>
        );
    }
}
