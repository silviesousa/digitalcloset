import axios from "./axios";

export async function getCloset(items) {
    console.log("get closet function");
    const { data } = await axios.get("/closet");
    console.log("data action", data);
    return {
        type: "GET_CLOSET",
        closet: data.getcloset
    };
}

/*
export function tops(item) {
    return {
        type: "TOPS",
        tops: item
    };
}

export function bottoms(item) {
    return {
        type: "BOTTOMS",
        bottoms: item
    };
}

export function footwear(item) {
    return {
        type: "FOOTWEAR",
        footwear: item
    };
}
*/
