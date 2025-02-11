import { getUser } from "../service/api";
import { root } from "./root"

export async function setUserInfo() {
    const { name, email, photo} = await getUser();
    root.text.innerHTML = name; 
    root.email.innerHTML = email; 
    root.avatar.src = photo ? photo : "./img/svg/avatar.svg";
}