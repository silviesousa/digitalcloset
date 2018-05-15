import React from "react";
import Swipeable from "react-swipeable";
import { connect } from "react-redux";

/*
const IMG_1 = `https://unsplash.it/342/249`;
const IMG_2 = `https://unsplash.it/342/250`;
const IMG_3 = `https://unsplash.it/342/251`;
const IMG_4 = `https://unsplash.it/342/252`;
const IMG_5 = `https://unsplash.it/342/253`;
const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];
*/

const RIGHT = "-1";
const LEFT = "+1";

class CarouselTops extends React.Component {
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
        let imageStyles = {
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
        items: state.tops
    };
};

export default connect(mapStateToProps)(CarouselTops);

/*
not necessary
function preload(...images) {
    return images.reduce((acc, img) => {
        let newImage = new Image();
        newImage.src = img;
        acc.push(newImage);
        return acc;
    }, []);
}
preload.apply(null, IMAGES);
*/
