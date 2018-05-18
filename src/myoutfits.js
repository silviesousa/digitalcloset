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

        this.props.outfit.filter(item => {
            this.props.tops.map(obj => {
                //console.log("test for tops array", top.id, obj);
                if (obj.id == item.top_id) {
                    topsArr.push(obj);
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

        this.props.outfit.filter(item => {
            this.props.bottoms.map(obj => {
                console.log("log for bottoms", item, obj);
                if (obj.id == item.bottom_id) {
                    bottomsArr.push(obj);
                }
            });
        });
        console.log("log for this.props.bottoms", this.props.bottoms);
        console.log("log for bottoms arr", bottomsArr);

        let listOfBottoms = bottomsArr.map(bottom => {
            return (
                <div>
                    <img key={bottom.id} src={bottom.imagegar} />
                </div>
            );
        });

        this.props.outfit.filter(item => {
            this.props.footwear.map(obj => {
                if (obj.id == item.footwear_id) {
                    footwearArr.push(obj);
                }
            });
        });
        console.log(
            "array filter in my outf comp",
            topsArr,
            bottomsArr,
            footwearArr
        );
        let listOfFootwear = footwearArr.map(footw => {
            return (
                <div>
                    <img key={footw.id} src={footw.imagegar} />
                </div>
            );
        });

        return (
            <div>
                <div className="myOutfits">
                    <div className="gridTops">{listOfTops}</div>
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
