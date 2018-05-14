import React from "react";
import Swipeable from "react-swipeable";

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
                <div>Image: {imageIdx + 1}</div>
                <Swipeable
                    className="swipe"
                    trackMouse
                    style={{ touchAction: "none" }}
                    preventDefaultTouchmoveEvent
                    onSwipedLeft={() => this.onSwiped(LEFT)}
                    onSwipedRight={() => this.onSwiped(RIGHT)}
                >
                    <div style={imageStyles}>
                        <button
                            onClick={() => this.onSwiped(RIGHT)}
                            className="hollow float-left"
                            style={buttonStyles}
                        >
                            ⇦
                        </button>
                        <button
                            onClick={() => this.onSwiped(LEFT)}
                            className="hollow float-right"
                            style={buttonStyles}
                        >
                            ⇨
                        </button>
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
