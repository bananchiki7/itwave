import { getReviews } from "../service/api";
import { createReviewCard } from "./createReviewCard";
import { setRequestLoader, removeRequestLoader } from "../universal/loaders/requestLoader"
import { root } from "./root";

export async function getReviewsList() {
     setRequestLoader()

     const reviewsList = await getReviews();
     console.log(reviewsList);

     root.reviewList.innerHTML = reviewsList.map(data => createReviewCard(data)).join("");

     removeRequestLoader()
}