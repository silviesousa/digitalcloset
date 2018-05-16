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

export function garmentIdx(idx, category) {
    return {
        type: "GARMENT_IDX",
        idx,
        category
    };
}

export async function saveOutfit(outfit) {
    console.log("save outfit function actions.js", outfit); //should be an object
    await axios.post("/createoutfit", outfit);
    return {
        type: "SAVE_OUTFIT",
        outfit
    };
}
