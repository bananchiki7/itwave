import { removeBodyLock } from "../bodyLock";

const loaderEl = document.querySelector(".main-loader-wrapper");

export function removeMainLoader() {
  setTimeout(() => {
    loaderEl.classList.add("is-hidden");
    removeBodyLock();
  }, 1000);
}
