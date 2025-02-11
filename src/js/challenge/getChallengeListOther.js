import { getChallengeListOther } from "../service/api";
import { removeRequestLoader, setRequestLoader } from "../universal/loaders/requestLoader";
import { createChallengeCard } from "./createChallengeCard";
import { root } from "./root";

export async function getChallengeListOther() {
    setRequestLoader()

    const challengesListOther = await getChallengeListOther();
    console.log(challengesListOther);

    root.challengeList.innerHTML = challengesList.map(challengesListOther => createChallengeCard(data)).join("");
    removeRequestLoader()
}