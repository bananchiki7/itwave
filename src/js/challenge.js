import { buttonCreate } from "./challenge/buttonCreate";
import { challengeUpdate } from "./challenge/challengeUpdate";
import { getChallengeList } from "./challenge/getChallengeList";
import { getChallengeOther } from "./challenge/getChallengeOther";
import { toggleForm } from "./challenge/openForm";
import { root } from "./challenge/root";
import { checkToken } from "./service/api";
import { changePage } from "./universal/changePage";
import { removeMainLoader } from "./universal/loaders/mainLoader";

try {
    await checkToken()

    getChallengeOther()

    root.createBtn.addEventListener("click", toggleForm)

    root.formCreate.addEventListener("submit", buttonCreate)

    root.privateBtn.addEventListener("click", getChallengeList)

    root.publicBtn.addEventListener("click", getChallengeOther)

    root.formList.addEventListener("change", challengeUpdate)
} catch (error) {
    changePage("index")
} finally {
    removeMainLoader();
}