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
