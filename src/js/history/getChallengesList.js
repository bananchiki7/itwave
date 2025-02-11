import { getChallengeListDone } from "../service/api";
import { removeRequestLoader, setRequestLoader } from "../universal/loaders/requestLoader";
import { createChallengesCard } from "./createChallengesCard";
import { root } from "./root";

export async function getChallengesList() {
     setRequestLoader()

     const challengesList = await getChallengeListDone();
     console.log(challengesList);

     root.listChallenges.innerHTML = challengesList.map(data => createChallengesCard(data)).join("");

     removeRequestLoader()
}