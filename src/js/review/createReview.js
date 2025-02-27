import { postReview } from "../service/api";
import { getReviewsList } from "./getReviewsList";
import { root } from "./root";
import { openComment } from "./openComment"

export function createReview(event) {
    event.preventDefault();

    const description = root.formTextArea.value;
    
    if(description !== ""){
        postReview({description})
        getReviewsList()
    }
    openComment()
}