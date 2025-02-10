import { createReview } from "./review/createReview";
import { getReviewsList } from "./review/getReviewsList";
import { openComment } from "./review/openComment";
import { root } from "./review/root";

getReviewsList()

root.buttonWrite.addEventListener("click", openComment);

root.form.addEventListener("submit", createReview)