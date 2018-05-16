import React from "react";
import Swipeable from "react-swipeable";
import { connect } from "react-redux";
import { garmentIdx } from "./actions";

/*
const IMG_WIDTH = "1000px";
const IMG_HEIGHT = "700px";
*/

const RIGHT = "-1";
const LEFT = "+1";

class CarouselBottoms extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { imageIdx: 0 };
    }

    onSwiped(direction) {
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.imageIdx + Number(change);
        let newIdx;
        if (adjustedIdx >= this.props.items.length) {
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            newIdx = this.props.items.length - 1;
        } else {
            newIdx = adjustedIdx;
        }
        this.props.dispatch(garmentIdx(newIdx, "bottoms"));
        this.setState({ imageIdx: newIdx });
    }

    render() {
        if (!this.props.items) {
            return null;
        }

        console.log("console log for this.props", this.props);
        const { imageIdx = 0 } = this.state;
        const imageStyles = {
            width: this.props.width,
            height: this.props.height,
            backgroundImage: `url(${this.props.items[imageIdx].imagegar})`
        };
        //centers arrows horizontally
        const buttonStyles = {
            height: this.props.height
        };
        return (
            <div className="swipeContainer">
                <Swipeable
                    className="swipe"
                    trackMouse
                    style={{ touchAction: "none" }}
                    preventDefaultTouchmoveEvent
                    onSwipedLeft={() => this.onSwiped(LEFT)}
                    onSwipedRight={() => this.onSwiped(RIGHT)}
                >
                    <div className="style" style={imageStyles}>
                        <img
                            onClick={() => this.onSwiped(RIGHT)}
                            className="hollow float-left"
                            style={buttonStyles}
                            src="/dripicons/SVG/arrow-thin-left.svg"
                        />
                        <img
                            onClick={() => this.onSwiped(LEFT)}
                            className="hollow float-right"
                            style={buttonStyles}
                            src="/dripicons/SVG/arrow-thin-right.svg"
                        />
                    </div>
                </Swipeable>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.bottoms
    };
};

export default connect(mapStateToProps)(CarouselBottoms);
