import { challengeList } from "./main/challengeList";
import { changeProfile } from "./main/changeProfile";
import { reviewsList } from "./main/reviewsList";
import { root } from "./main/root";
import { removeMainLoader } from "./universal/loaders/mainLoader";

challengeList()
reviewsList()

root.avatarButton.addEventListener("click", changeProfile)

removeMainLoader();