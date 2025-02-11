import { getChallengeListOther } from "../service/api";
import { removeRequestLoader, setRequestLoader } from "../universal/loaders/requestLoader";
import { createChallengeCard } from "./createChallengeCard";
import { closeForm } from "./openForm";
import { root } from "./root";

export async function getChallengeOther() {
    setRequestLoader()
    closeForm()

    const challengesListOther = await getChallengeListOther();
    console.log(challengesListOther);

    root.challengeList.innerHTML = challengesListOther.map(challengesListOther => createChallengeCard(data)).join("");
    removeRequestLoader()
}