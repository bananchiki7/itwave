import { createReviewCard } from "../review/createReviewCard";
import { getReviews } from "../service/api";
import { root } from "./root";

export async  function reviewsList() {
    const reviewsList = await getReviews();
    root.reviewsList.innerHTML = reviewsList.map(data => createReviewCard(data)).join("");
}