import { getChallengeListAll } from "../service/api";
import { removeRequestLoader, setRequestLoader } from "../universal/loaders/requestLoader";
import { createChallengeCard } from "./createChallengeCard";
import { closeForm } from "./openForm";
import { root } from "./root";

export async function getChallengeList() {
     setRequestLoader()

     closeForm()

     const challengesList = await getChallengeListAll();
     console.log(challengesList);

     root.challengeList.innerHTML = challengesList.map(data => createChallengeCard(data)).join("");

     removeRequestLoader()
}