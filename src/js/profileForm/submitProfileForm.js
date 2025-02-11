import { checkToken, redactUser, signup } from "../service/api";
import { changePage } from "../universal/changePage";
import { createFormData } from "../universal/createFormData";
import {
  removeRequestLoader,
  setRequestLoader,
} from "../universal/loaders/requestLoader";
import { setToken } from "../universal/token/setToken";
import { isRedactPage } from "./isRedactPage";
import { root } from "./root";

export async function submitProfileForm(event) {
  event.preventDefault();
  startAction();

  try {
    const formEl = event.currentTarget;
    const formData = createFormData(formEl);
    console.log(formData);
    
    if (isRedactPage()) {
      await setRedact(formData);
    } else {
      await setRegistration(formData);
    }
    changePage("profile");
  } catch (error) {
    setEventListener();
    console.log(error);
  } finally {
    removeRequestLoader();
  }
}

async function setRedact(formData) {
  await checkToken();
  const answer = await redactUser(formData);
  console.log(answer);
}
async function setRegistration(formData) {
  const answer = await signup(formData);
  setToken(answer.accessToken);
}

function startAction() {
  removeEventListener();
  setRequestLoader();
}

function setEventListener() {
  root.profileForm.addEventListener("submit", submitProfileForm);
}
function removeEventListener() {
  root.profileForm.removeEventListener("submit", submitProfileForm);
}
