//my saved outfits

import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import Swipeable from "react-swipeable";

export class MyOutfits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (!this.props.tops && !this.props.bottoms && !this.props.footwear) {
            return null;
        }
        console.log(
            "my outfits component",
            "tops",
            this.props.tops,
            "bottoms",
            this.props.bottoms,
            "shoes",
            this.props.footwear,
            "outfit",
            this.props.outfit
        );

        var topsArr = [];
        var bottomsArr = [];
        var footwearArr = [];

        this.props.tops.filter(top => {
            this.props.outfit.map(obj => {
                if (obj.topsIdx == top.id) {
                    topsArr.push(top);
                }
            });
        });

        console.log(topsArr);

        let listOfTops = topsArr.map(top => {
            return (
                <div>
                    <img key={top.id} src={top.imagegar} />
                </div>
            );
        });

        this.props.bottoms.filter(bottom => {
            this.props.outfit.map(obj => {
                if (obj.bottomsIdx == bottom.id) {
                    bottomsArr.push(bottom);
                }
            });
        });

        let listOfBottoms = bottomsArr.map(bottom => {
            return (
                <div>
                    <img key={bottom.id} src={bottom.imagegar} />
                </div>
            );
        });

        this.props.footwear.filter(footw => {
            this.props.outfit.map(obj => {
                if (obj.footwearIdx == footw.id) {
                    footwearArr.push(footw);
                }
            });
        });

        let listOfFootwear = footwearArr.map(footw => {
            return (
                <div>
                    <img key={footw.id} src={footw.imagegar} />
                </div>
            );
        });

        return (
            <div>
                <img className="iconsOutfit" src="/dripicons/SVG/trash.svg" />
                <div className="myOutfits">
                    <div className="gridTops"> {listOfTops}</div>
                    <div className="gridBottoms"> {listOfBottoms}</div>
                    <div className="gridFootwear"> {listOfFootwear}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        outfit: state.outfit,
        tops: state.tops,
        bottoms: state.bottoms,
        footwear: state.footwear
    };
};

export default connect(mapStateToProps)(MyOutfits);
