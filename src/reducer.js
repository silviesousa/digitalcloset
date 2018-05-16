import axios from "./axios";

export default function reducer(state = {}, action) {
    console.log("reducer", action);

    if (action.type == "GET_CLOSET") {
        state = {
            ...state,
            tops: action.closet.filter(item => item.category == "tops"),
            bottoms: action.closet.filter(item => item.category == "bottoms"),
            footwear: action.closet.filter(item => item.category == "footwear")
        };
    }

    if (action.type == "GARMENT_IDX") {
        if (action.category == "tops") {
            state = {
                ...state,
                topsIdx: action.idx
            };
        } else if (action.category == "bottoms") {
            state = {
                ...state,
                bottomsIdx: action.idx
            };
        } else if (action.category == "footwear") {
            state = {
                ...state,
                footwearIdx: action.idx
            };
        }
    }

    if (action.type == "SAVE_OUTFIT") {
        state = {
            ...state,
            outfit: action.outfit
        };
    }

    return state;
}
