import { loginUser } from "./authorization/loginUser";
import { root } from "./authorization/root";
import { changePage } from "./universal/changePage";
import { removeMainLoader } from "./universal/loaders/mainLoader";

root.form.addEventListener("submit", loginUser);

root.buttonRegister.addEventListener("click", changePage.bind(null, "profileForm"))

removeMainLoader();
