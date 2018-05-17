import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swipeable from "react-swipeable";
import CarouselTops from "./tops";
import CarouselBottoms from "./bottoms";
import CarouselFootwear from "./footwear";
import { garmentIdx } from "./actions";
import { saveOutfit } from "./actions";

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.save = this.save.bind(this);
    }
    save() {
        console.log("click for save outfit", this.props);
        let outfit = {
            topsIdx: this.props.tops[this.props.topsIdx].id,
            bottomsIdx: this.props.bottoms[this.props.bottomsIdx].id,
            footwearIdx: this.props.footwear[this.props.footwearIdx].id
        };
        this.props.dispatch(saveOutfit(outfit));
    }
    render() {
        return (
            <div>
                <div>
                    <img
                        className="iconsOutfit"
                        src="/dripicons/SVG/star.svg"
                        onClick={this.save}
                    />
                </div>
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

const mapStateToProps = state => {
    return {
        topsIdx: state.topsIdx,
        bottomsIdx: state.bottomsIdx,
        footwearIdx: state.footwearIdx,
        //list props for tops, bottoms, footwear
        tops: state.tops,
        bottoms: state.bottoms,
        footwear: state.footwear
    };
};

export default connect(mapStateToProps)(Create);
