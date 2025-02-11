import { buttonCreate } from "./challenge/buttonCreate";
import { getChallengeList } from "./challenge/getChallengeList";
import { getChallengeOther } from "./challenge/getChallengeOther";
import { toggleForm } from "./challenge/openForm";
import { root } from "./challenge/root";
import { removeMainLoader } from "./universal/loaders/mainLoader";

getChallengeOther()

root.createBtn.addEventListener("click", toggleForm)

root.formCreate.addEventListener("submit", buttonCreate)

root.privateBtn.addEventListener("click", getChallengeList)

root.publicBtn.addEventListener("click", getChallengeOther)
removeMainLoader();