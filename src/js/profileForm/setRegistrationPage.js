import { root } from "./root";

export function setRegistrationPage() {
  root.fieldList.insertAdjacentHTML("beforeend", getRegistrationField());

  const inputList = document.querySelectorAll(
    ".profileForm-form-fields__input"
  );
  inputList.forEach((input) => {
    input.setAttribute("required", "");
  });
}

function getRegistrationField() {
  return `<li class="profileForm-form-fields__item">
          <label class="profileForm-form-fields__label">
            <span>електронна почта</span>
            <input
              class="profileForm-form-fields__input"
              type="email"
              autocomplete="email"
              title="Невірний запис. Почта має містити домен"
              placeholder="введіть електронну пошту"
              name="email"
            />
          </label>
        </li>
        <li class="profileForm-form-fields__item">
          <label class="profileForm-form-fields__label">
            <span>пароль</span>
            <input
              class="profileForm-form-fields__input profileForm-form-fields__input_origin"
              type="password"
              autocomplete="current-password"
              pattern=".{8,}"
              title="Введіть не менше 8 символів"
              placeholder="введіть пароль"
              name="password"
            />
          </label>
        </li>
        <li class="profileForm-form-fields__item">
          <label class="profileForm-form-fields__label">
            <span>підтвердіть пароль</span>
            <input
              class="profileForm-form-fields__input profileForm-form-fields__input_check"
              type="password"
              autocomplete="current-password"
              pattern=".{8,}"
              title="Пароль не співпадає"
              placeholder="введіть пароль ще раз"
            />
          </label>
        </li>`;
}
