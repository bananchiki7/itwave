import { createChallengeCard } from "../challenge/createChallengeCard";
import { getChallengeListOther, setAuthHeader } from "../service/api";
import { root } from "./root";

export async function challengeList() {
    if(setAuthHeader()) {
        const challengeList = await getChallengeListOther();
        root.challengeList.innerHTML = challengeList.map(data => createChallengeCard(data)).join("");
    }
}