import{a as u,c as p,r as d,s as g}from"./bodyLock-TBEK7aDm.js";/* empty css              */import{c as _}from"./changePage-BhxG9jDn.js";import{c as w,s as h}from"./setToken-BKHZUtKH.js";import{r as F,s as y}from"./requestLoader-t4EXknx9.js";import{r as E}from"./mainLoader-Ce_p5TC4.js";const o={profileForm:document.querySelector(".profileForm-form"),fieldList:document.querySelector(".profileForm-form-fields"),profilePhoto:document.querySelector(".profileForm-form__img-input")};function b(){o.OnePasswordEl=document.querySelector(".profileForm-form-fields__input_origin"),o.TwoPasswordEl=document.querySelector(".profileForm-form-fields__input_check")}function L(){o.OnePasswordEl.value===o.TwoPasswordEl.value?o.TwoPasswordEl.setCustomValidity(""):o.TwoPasswordEl.setCustomValidity("пароль не співпадає")}function P(e){return new URL(window.location.href).searchParams.get(e)}function c(){return P("redact")==="true"}function q(){o.fieldList.insertAdjacentHTML("beforeend",v()),document.querySelectorAll(".profileForm-form-fields__input").forEach(t=>{t.setAttribute("required","")})}function v(){return`<li class="profileForm-form-fields__item">
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
        </li>`}function S(e){const t=new Date(e);let s=String(t.getDate());s[1]||(s="0"+s);let r=String(t.getMonth()+1);r[1]||(r="0"+r);const i=t.getFullYear();return`${s}/${r}/${i}`}async function T(){const e=await u();Object.entries(e).forEach(([r,i])=>{const l=o.profileForm.querySelector(`input[name="${r}"]`);l&&(l.value=i)});const t=o.profileForm.querySelector('input[name="birthDay"]');t.value=S(e.birthDay),s();function s(){const{photo:r}=e;if(r){const i=o.profileForm.querySelector(".profileForm-form__img");i.src=e.photo,i.classList.add("big-photo")}}}async function n(e){e.preventDefault(),k();try{const t=e.currentTarget,s=w(t);c()?await D(s):await R(s),_("profile")}catch(t){A(),console.log(t)}finally{F()}}async function D(e){await p();const t=await d(e);console.log(t)}async function R(e){const t=await g(e);h(t.accessToken)}function k(){M(),y()}function A(){o.profileForm.addEventListener("submit",n)}function M(){o.profileForm.removeEventListener("submit",n)}function U(e){const t=e.currentTarget,r=t.closest("label").querySelector(".img-wrapp"),i=r.querySelector("img"),l=t.files[0],a=new FileReader;a.addEventListener("load",f,!1),l&&a.readAsDataURL(l),i.classList.contains("big-photo")||i.classList.add("big-photo");function f(){i.src=a.result;const m=i.outerHTML;r.innerHTML=m}}c()?T():(q(),b(),o.TwoPasswordEl.addEventListener("input",L));o.profilePhoto.addEventListener("change",U);o.profileForm.addEventListener("submit",n);E();
