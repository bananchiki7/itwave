import { getUser } from "../service/api";
import { getBirthData } from "../universal/getBirthData";
import { root } from "./root";

export async function setUserInfo() {
  const data = await getUser();
  Object.entries(data).forEach(([key, value]) => {
    const el = root.profileForm.querySelector(`input[name="${key}"]`);
    if (el) {
      el.value = value;
    }
  });
  const birthDayEl = root.profileForm.querySelector(`input[name="birthDay"]`);
  birthDayEl.value = getBirthData(data.birthDay);
  setPhoto();

  function setPhoto() {
    const { photo } = data;
    if (photo) {
      const imgEl = root.profileForm.querySelector(`.profileForm-form__img`);
      imgEl.src = data.photo;
      imgEl.classList.add("big-photo");
    }
  }
}
