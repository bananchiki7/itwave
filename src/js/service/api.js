import axios from "axios";
import { getToken } from "../universal/token/getToken";

// axios.defaults.baseURL = "https://hoby-api.onrender.com";
axios.defaults.baseURL = "https://hoby-api-iv12.onrender.com";

export async function signup(data) {
    const answer = await axios.post(`/auth/signup`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return answer.data;
}

export async function login(data) {
    const answer = await axios.post(`/auth/login`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return answer.data;
}

export function setAuthHeader() {
    const token = getToken();
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export async function checkToken(data) {
    setAuthHeader();
    const answer = await axios.get(`/auth/token`, data);
    console.log(answer);
    return answer.data;
}

export async function redactUser(data) {
    setAuthHeader();
    const answer = await axios.patch(`/user/update`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return answer.data;
}

export async function getUser() {
    setAuthHeader();
    const answer = await axios.get(`/user`);
    return answer.data;
}

export async function postReview(data) {
    setAuthHeader();
    try {
        const answer = await axios.post("/review/create", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return answer.data;
    } catch (error) {
        console.error("Axios Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function getReviews() {
    const answer = await axios.get("/review/list");
    return answer.data;
}

export async function deleteReview(id) {
    try {
        setAuthHeader();
        const answer = await axios.delete(`/review/delete/${id}`);
        return answer.data;
    } catch (error) {
        console.log(error);
    }
}

export async function postChallenge(data) {
    setAuthHeader();
    try {
        const answer = await axios.post("/challange/create", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return answer.data;
    } catch (error) {
        console.error("Axios Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function getChallengeListAll() {
    setAuthHeader();
    const answer = await axios.get("/challange/list/all");
    return answer.data;
}

export async function getChallengeListOther() {
    try {
        setAuthHeader();
        const answer = await axios.get("/challange/list/other");
        return answer.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getChallengeListDone() {
    setAuthHeader();
    const answer = await axios.get("/challange/list");
    console.log(answer);
    
    return answer.data;
}

export async function deleteChallenge(id) {
    try {
        setAuthHeader();
        const answer = await axios.delete(`/challange/delete/${id}`);
        return answer.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserHobbies() {
    setAuthHeader();
    const answer = await axios.get("/hobby/user/list");
    return answer.data;
}

export async function addChallenge(id, data) {
    setAuthHeader();
    const answer = await axios.patch(`/challange/update/status/${id}`, data,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    console.log(answer);
    
    return answer.data;
}

export async function getHobbies(id) {
    console.log(id);
    const answer = await axios.get(`hobby/list?type=${id}`);
    
    return answer.data;
}