import axios from "./axios";
/*
export async function getCloset() {
    const { data } = await axios.get("/closet");
    return {
        type: "CLOSET",
        closet: data.getCloset
    };
}
*/

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
    return state;
}
