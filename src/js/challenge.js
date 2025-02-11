import { buttonCreate } from "./challenge/buttonCreate";
import { getChallengeList } from "./challenge/getChallengeList";
import { toggleForm } from "./challenge/openForm";
import { root } from "./challenge/root";
import { getChallengeListOther } from "./service/api";

root.createBtn.addEventListener("click", toggleForm)

root.formCreate.addEventListener("submit", buttonCreate)

root.privateBtn.addEventListener("click", getChallengeList)

root.publicBtn.addEventListener("click", getChallengeListOther)