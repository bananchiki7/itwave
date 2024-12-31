import axios from "axios";

axios.defaults.baseURL = "https://hoby-api.onrender.com";

export async function signUp(user) {
    const answer = await axios.post("auth/signup", user, {
        headers: { "Content-Type": "multipart/form-data" },
    })
    return answer.data;
}

