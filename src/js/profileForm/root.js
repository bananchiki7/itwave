export const root = {
  profileForm: document.querySelector(".profileForm-form"),
  fieldList: document.querySelector(".profileForm-form-fields"),

  profilePhoto: document.querySelector(".profileForm-form__img-input"),
};

export function setPasswordField() {
  root.OnePasswordEl = document.querySelector(
    ".profileForm-form-fields__input_origin"
  );
  root.TwoPasswordEl = document.querySelector(
    ".profileForm-form-fields__input_check"
  );
}
