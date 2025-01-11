import axios from "axios";

axios.defaults.baseURL = "https://hoby-api.onrender.com";

export async function postReview(info) {
    const answer = await axios.post("/review/create", info, {
        headers: {
            // Authorization: token,
        },
    });
    return answer.data;
}

export async function getReviews() {
    const answer = await axios.get("/review/list", info, {
        headers: {
            // Authorization: token,
        },
    });
    return answer.data;
}

export async function deleteReview(id) {
    try {
        const answer = await axios.delete(`/review/delete/${id}`, {
            headers: {
                // Authorization: token,
            },
        })
        return answer.data;
    } catch (error) {
        console.log(error);
    }
}