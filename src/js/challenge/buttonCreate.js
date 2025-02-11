import { postChallenge } from "../service/api";
import { getChallengeList } from "./getChallengeList";
import { closeForm } from "./openForm";
import { root } from "./root";

export function buttonCreate(event) {
    event.preventDefault();

    const text = root.formTextArea.value;

    if (text !== "") {
        // postChallenge({ text })
        root.formCreate.reset()
        getChallengeList()
    }
    closeForm()
}