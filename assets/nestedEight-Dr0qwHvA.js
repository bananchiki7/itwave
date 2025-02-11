import{e as u,c as p,f as d,s as g,r as _}from"./mainLoader-jdqN2vow.js";/* empty css              */import{c as w}from"./changePage-BhxG9jDn.js";import{c as h,s as F}from"./setToken-BKHZUtKH.js";import{r as y,s as E}from"./requestLoader-mizqiesN.js";const o={profileForm:document.querySelector(".profileForm-form"),fieldList:document.querySelector(".profileForm-form-fields"),profilePhoto:document.querySelector(".profileForm-form__img-input")};function b(){o.OnePasswordEl=document.querySelector(".profileForm-form-fields__input_origin"),o.TwoPasswordEl=document.querySelector(".profileForm-form-fields__input_check")}function L(){o.OnePasswordEl.value===o.TwoPasswordEl.value?o.TwoPasswordEl.setCustomValidity(""):o.TwoPasswordEl.setCustomValidity("пароль не співпадає")}function P(e){return new URL(window.location.href).searchParams.get(e)}function c(){return P("redact")==="true"}function q(){o.fieldList.insertAdjacentHTML("beforeend",v()),document.querySelectorAll(".profileForm-form-fields__input").forEach(t=>{t.setAttribute("required","")})}function v(){return`<li class="profileForm-form-fields__item">
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
        </li>`}function S(e){const t=new Date(e);let r=String(t.getDate());r[1]||(r="0"+r);let s=String(t.getMonth()+1);s[1]||(s="0"+s);const i=t.getFullYear();return`${r}/${s}/${i}`}async function T(){const e=await u();Object.entries(e).forEach(([s,i])=>{const l=o.profileForm.querySelector(`input[name="${s}"]`);l&&(l.value=i)});const t=o.profileForm.querySelector('input[name="birthDay"]');t.value=S(e.birthDay),r();function r(){const{photo:s}=e;if(s){const i=o.profileForm.querySelector(".profileForm-form__img");i.src=e.photo,i.classList.add("big-photo")}}}async function n(e){e.preventDefault(),k();try{const t=e.currentTarget,r=h(t);console.log(r),c()?await D(r):await R(r),w("profile")}catch(t){A(),console.log(t)}finally{y()}}async function D(e){await p();const t=await d(e);console.log(t)}async function R(e){const t=await g(e);F(t.accessToken)}function k(){M(),E()}function A(){o.profileForm.addEventListener("submit",n)}function M(){o.profileForm.removeEventListener("submit",n)}function U(e){const t=e.currentTarget,s=t.closest("label").querySelector(".img-wrapp"),i=s.querySelector("img"),l=t.files[0],a=new FileReader;a.addEventListener("load",f,!1),l&&a.readAsDataURL(l),i.classList.contains("big-photo")||i.classList.add("big-photo");function f(){i.src=a.result;const m=i.outerHTML;s.innerHTML=m}}c()?T():(q(),b(),o.TwoPasswordEl.addEventListener("input",L));o.profilePhoto.addEventListener("change",U);o.profileForm.addEventListener("submit",n);_();
