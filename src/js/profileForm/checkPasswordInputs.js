import { root } from "./root";

export function checkPasswordInputs() {
  
  const isEqually = root.OnePasswordEl.value === root.TwoPasswordEl.value;
  if (!isEqually) {
    root.TwoPasswordEl.setCustomValidity("пароль не співпадає");
  } else {
    root.TwoPasswordEl.setCustomValidity("");
  }
}
