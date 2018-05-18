import React from "react";
import axios from "./axios";
import { HashRouter, Route } from "react-router-dom";

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.submit = this.submit.bind(this);
        this.fileToUpload = {};
    }
    handleChange(e) {
        console.log(e.target.value);
        this.fileToUpload.file = e.target.files[0];
    }
    handleChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    submit() {
        var formData = new FormData();
        formData.append("file", this.fileToUpload.file);
        formData.append("category", this.state.category);
        axios.post("/upload", formData).then(resp => {
            if (resp.data.success) {
                console.log("post route upload", resp.data.imageGar);
                this.props.changeImage(resp.data.imageGar);
                this.fileToUpload = {};
            } else {
                this.setState({
                    error: true
                });
            }
        });
    }
    render() {
        return (
            <div className="upload">
                <input type="file" onChange={this.handleChange} />
                <select name="category" onChange={this.handleChangeCategory}>
                    <option value="SELECT">SELECT</option>
                    <option value="tops">Tops</option>
                    <option value="bottoms">Bottoms</option>
                    <option value="footwear">Footwear</option>
                </select>
                <br />
                <button onClick={this.submit}>Upload</button>
            </div>
        );
    }
}
