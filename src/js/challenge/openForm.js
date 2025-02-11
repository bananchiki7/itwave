import { root } from "./root";

export function openForm() {
    root.formCreate.classList.remove("is-hidden");
}

export function closeForm() {
    root.formCreate.classList.add("is-hidden");
}

export function toggleForm() {
    root.formCreate.classList.toggle("is-hidden");
}