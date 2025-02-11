import { createChallengeCard } from "../challenge/createChallengeCard";
import { getChallengeListOther } from "../service/api";
import { root } from "./root";

export async function challengeList() {
    const challengeList = await getChallengeListOther();
    root.challengeList.innerHTML = challengeList.map(data => createChallengeCard(data)).join("");
}