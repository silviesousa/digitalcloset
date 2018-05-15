import React from "react";
import Swipeable from "react-swipeable";
import { connect } from "react-redux";

const IMG_WIDTH = "1000px";
const IMG_HEIGHT = "700px";

const RIGHT = "-1";
const LEFT = "+1";

//centers arrows horizontally
const buttonStyles = {
    height: IMG_HEIGHT
};

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
        this.setState({ imageIdx: newIdx });
    }

    render() {
        if (!this.props.items) {
            return null;
        }

        console.log(this.props);
        const { imageIdx = 0 } = this.state;
        const imageStyles = {
            width: IMG_WIDTH,
            height: IMG_HEIGHT,
            backgroundImage: `url(${this.props.items[imageIdx].imagegar})`
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
                    <div style={imageStyles}>
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
