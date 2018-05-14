import React from "react";
import Swipeable from "react-swipeable";

const IMG_1 = `https://unsplash.it/342/249`;
const IMG_2 = `https://unsplash.it/342/250`;
const IMG_3 = `https://unsplash.it/342/251`;
const IMG_4 = `https://unsplash.it/342/252`;
const IMG_5 = `https://unsplash.it/342/253`;
const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];
const IMG_WIDTH = "686px";
const IMG_HEIGHT = "500px";

const RIGHT = "-1";
const LEFT = "+1";

//centers arrows horizontally
const buttonStyles = {
    height: IMG_HEIGHT
};

export class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { imageIdx: 0 };
    }

    onSwiped(direction) {
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.imageIdx + Number(change);
        let newIdx;
        if (adjustedIdx >= IMAGES.length) {
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            newIdx = IMAGES.length - 1;
        } else {
            newIdx = adjustedIdx;
        }
        this.setState({ imageIdx: newIdx });
    }

    render() {
        const { imageIdx = 0 } = this.state;
        const imageStyles = {
            width: IMG_WIDTH,
            height: IMG_HEIGHT,
            backgroundImage: `url(${IMAGES[imageIdx]})`
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

function preload(...images) {
    return images.reduce((acc, img) => {
        let newImage = new Image();
        newImage.src = img;
        acc.push(newImage);
        return acc;
    }, []);
}
preload.apply(null, IMAGES);
