import { addChallenge, getChallengeListDone } from "../service/api";

export async function challengeUpdate(event) {
    event.preventDefault()

    const dataId = event.target.dataset.id;
    const status = true;
    addChallenge(dataId, {status});
    getChallengeListDone()
}