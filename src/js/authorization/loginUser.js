import { login } from "../service/api";
import { changePage } from "../universal/changePage";
import { createFormData } from "../universal/createFormData";
import {
  removeRequestLoader,
  setRequestLoader,
} from "../universal/loaders/requestLoader";
import { setToken } from "../universal/token/setToken";
import { root } from "./root";

export async function loginUser(event) {
  event.preventDefault();
  startAction();

  try {
    const data = createFormData(root.form);
    const answer = await login(data);
    setToken(answer.accessToken);
    changePage("index");
  } catch (error) {
    setEventListener();
    console.log(error);
  } finally {
    removeRequestLoader();
  }
}

function startAction() {
  removeEventListener();
  setRequestLoader();
}

function removeEventListener() {
  root.form.removeEventListener("submit", loginUser);
}

function setEventListener() {
  root.form.addEventListener("submit", loginUser);
}
