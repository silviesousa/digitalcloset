import React from "react";

const styles = {
    transition: 'all 1s ease-in';
}

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
            scale: 1
        }
    }


    onScale() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1:3
        })
    }
}

<div className="">
    style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}
