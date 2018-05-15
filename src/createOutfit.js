import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import Swipeable from "react-swipeable";
import CarouselTops from "./tops";
import CarouselBottoms from "./bottoms";
import CarouselFootwear from "./footwear";

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>create outfit</h1>
                <div id="CarouselTops">
                    <CarouselTops width={"1000px"} height={"700px"} />
                </div>
                <div id="CarouselBottoms">
                    <CarouselBottoms width={"1000px"} height={"700px"} />
                </div>
                <div id="CarouselFootwear">
                    <CarouselFootwear width={"1000px"} height={"700px"} />
                </div>
            </div>
        );
    }
}
