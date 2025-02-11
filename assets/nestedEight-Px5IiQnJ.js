import{d as u,c as p,r as d,s as g}from"./bodyLock-CXhmA4vK.js";/* empty css              */import{c as _}from"./changePage-BhxG9jDn.js";import{c as w,s as h}from"./setToken-BKHZUtKH.js";import{r as F,s as y}from"./requestLoader-CtRPdB7y.js";import{r as E}from"./mainLoader-Bq2P0Tnw.js";const t={profileForm:document.querySelector(".profileForm-form"),fieldList:document.querySelector(".profileForm-form-fields"),profilePhoto:document.querySelector(".profileForm-form__img-input")};function b(){t.OnePasswordEl=document.querySelector(".profileForm-form-fields__input_origin"),t.TwoPasswordEl=document.querySelector(".profileForm-form-fields__input_check")}function L(){t.OnePasswordEl.value===t.TwoPasswordEl.value?t.TwoPasswordEl.setCustomValidity(""):t.TwoPasswordEl.setCustomValidity("пароль не співпадає")}function P(e){return new URL(window.location.href).searchParams.get(e)}function c(){return P("redact")==="true"}function q(){t.fieldList.insertAdjacentHTML("beforeend",v()),document.querySelectorAll(".profileForm-form-fields__input").forEach(o=>{o.setAttribute("required","")})}function v(){return`<li class="profileForm-form-fields__item">
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
        </li>`}function S(e){const o=new Date(e);let r=String(o.getDate());r[1]||(r="0"+r);let i=String(o.getMonth()+1);i[1]||(i="0"+i);const s=o.getFullYear();return`${r}/${i}/${s}`}async function T(){const e=await u();Object.entries(e).forEach(([i,s])=>{const l=t.profileForm.querySelector(`input[name="${i}"]`);l&&(l.value=s)});const o=t.profileForm.querySelector('input[name="birthDay"]');o.value=S(e.birthDay),r();function r(){const{photo:i}=e;if(i){const s=t.profileForm.querySelector(".profileForm-form__img");s.src=e.photo,s.classList.add("big-photo")}}}async function n(e){e.preventDefault(),k();try{const o=e.currentTarget,r=w(o);console.log(r),c()?await D(r):await R(r),_("profile")}catch(o){A(),console.log(o)}finally{F()}}async function D(e){await p();const o=await d(e);console.log(o)}async function R(e){const o=await g(e);h(o.accessToken)}function k(){M(),y()}function A(){t.profileForm.addEventListener("submit",n)}function M(){t.profileForm.removeEventListener("submit",n)}function U(e){const o=e.currentTarget,i=o.closest("label").querySelector(".img-wrapp"),s=i.querySelector("img"),l=o.files[0],a=new FileReader;a.addEventListener("load",f,!1),l&&a.readAsDataURL(l),s.classList.contains("big-photo")||s.classList.add("big-photo");function f(){s.src=a.result;const m=s.outerHTML;i.innerHTML=m}}c()?T():(q(),b(),t.TwoPasswordEl.addEventListener("input",L));t.profilePhoto.addEventListener("change",U);t.profileForm.addEventListener("submit",n);E();
