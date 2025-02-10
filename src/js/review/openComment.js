import { root } from "./root";

export function openComment() {
    root.buttonWrite.classList.toggle("is-hidden");
    root.form.classList.toggle("is-hidden");
}