import { hobbyList } from "./hobby/hobbyList";
import { challengeList } from "./main/challengeList";
import { changeProfile } from "./main/changeProfile";
import { reviewsList } from "./main/reviewsList";
import { root } from "./main/root";
import { removeMainLoader } from "./universal/loaders/mainLoader";

const listHobbies = document.querySelector(".hobbies__list")
listHobbies.addEventListener("click", hobbyList)

challengeList()

reviewsList()

root.avatarButton.addEventListener("click", changeProfile)

removeMainLoader();