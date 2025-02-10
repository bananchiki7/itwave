import { changeProfile } from "./main/changeProfile";
import { reviewsList } from "./main/reviewsList";
import { root } from "./main/root";
import { removeMainLoader } from "./universal/loaders/mainLoader";

reviewsList()

removeMainLoader();
root.avatarButton.addEventListener("click", changeProfile)