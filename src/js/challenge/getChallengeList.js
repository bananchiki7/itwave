import { getChallengeListAll } from "../service/api";
import { removeRequestLoader, setRequestLoader } from "../universal/loaders/requestLoader";
import { createChallengeCard } from "./createChallengeCard";
import { root } from "./root";

export async function getChallengeList() {
     setRequestLoader()

     const challengesList = await getChallengeListAll();
     console.log(challengesList);

     root.challengeList.innerHTML = challengesList.map(data => createChallengeCard(data)).join("");

     removeRequestLoader()
}