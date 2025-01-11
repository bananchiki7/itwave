import { openComment } from "./review/openComment";
import { root } from "./review/root";

root.buttonWrite.addEventListener("click", openComment);

root.formCross.addEventListener("click", openComment);

root.formButton.addEventListener("submit", openComment)