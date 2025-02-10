export function showPhoto(event) {
  const fileEl = event.currentTarget;
  const labelEl = fileEl.closest("label");
  const imgWrappEL = labelEl.querySelector(".img-wrapp");
  const imgEl = imgWrappEL.querySelector("img");

  const file = fileEl.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", setImgInPage, false);

  if (file) {
    reader.readAsDataURL(file);
  }

  if (!imgEl.classList.contains("big-photo")) {
    imgEl.classList.add("big-photo");
  }

  function setImgInPage() {
    imgEl.src = reader.result;
    const imgOuter = imgEl.outerHTML;
    imgWrappEL.innerHTML = imgOuter;
  }
}
