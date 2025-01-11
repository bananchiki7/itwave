import { root } from "./root";

export function openComment() {
    console.log(1);
    
    root.buttonWrite.classList.toggle("is-hidden");
    root.form.classList.toggle("is-hidden");
}