import { checkPasswordInputs } from "./profileForm/checkPasswordInputs";
import { isRedactPage } from "./profileForm/isRedactPage";
import { root, setPasswordField } from "./profileForm/root";
import { setRegistrationPage } from "./profileForm/setRegistrationPage";
import { setUserInfo } from "./profileForm/setUserInfo";
import { submitProfileForm } from "./profileForm/submitProfileForm";
import { removeMainLoader } from "./universal/loaders/mainLoader";
import { showPhoto } from "./universal/showPhoto";

if (!isRedactPage()) {
  setRegistrationPage();
  setPasswordField();
  root.TwoPasswordEl.addEventListener("input", checkPasswordInputs);
} else {
  setUserInfo();
}

root.profilePhoto.addEventListener("change", showPhoto);
root.profileForm.addEventListener("submit", submitProfileForm);

removeMainLoader();
