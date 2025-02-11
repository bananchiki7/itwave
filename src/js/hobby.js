import { hobbyList } from "./hobby/hobbyList";
import { root } from "./hobby/root";
import { removeMainLoader } from "./universal/loaders/mainLoader";

root.listHobbies.addEventListener("click", hobbyList)
removeMainLoader()