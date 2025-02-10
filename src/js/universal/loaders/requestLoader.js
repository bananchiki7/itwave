import { removeBodyLock, setBodyLock } from "../bodyLock";

const markup = `
    <div class="request-loader-wrapper loader-wrapper">
        <div class="request-loader loader"></div>
    </div>`;

let loaderEl = null;

export function setRequestLoader() {
  setBodyLock();
  const element = document.querySelector(".request-loader-wrapper");
  if (element) {
    loaderEl = element;
    loaderEl.classList.remove("is-hidden");
    return;
  }
  document.body.insertAdjacentHTML("afterbegin", markup);
  loaderEl = document.querySelector(".request-loader-wrapper");
}

export function removeRequestLoader() {
  setTimeout(() => {
    loaderEl.classList.add("is-hidden");
    removeBodyLock();
  }, 900);
}
