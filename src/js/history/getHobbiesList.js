import { getUserHobbies } from "../service/api";
import { removeRequestLoader, setRequestLoader } from "../universal/loaders/requestLoader";
import { createHobbiesCard } from "./createHobbiesCard";
import { root } from "./root";

export async function getHobbiesList() {
     setRequestLoader()

     const hobbiesList = await getUserHobbies();
     console.log(hobbiesList);

     root.listHobbies.innerHTML = hobbiesList.map(data => createHobbiesCard(data)).join("");

     removeRequestLoader()
}