import axios from "./axios";

export default function reducer(state = {}, action) {
    console.log("reducer", action);

    if (action.type == "GET_CLOSET") {
        state = {
            ...state,
            tops: action.closet.filter(item => item.category == "tops"),
            bottoms: action.closet.filter(item => item.category == "bottoms"),
            footwear: action.closet.filter(item => item.category == "footwear"),
            outfit: action.outfit
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
        if (state.outfit) {
            console.log("reducer for save outfit");
            state = {
                ...state,
                outfit: state.outfit.concat(action.outfit)
            };
        } else {
            console.log("2nd reducer for save outfit");
            state = {
                ...state,
                outfit: [action.outfit]
            };
        }
    }
    return state;
}
