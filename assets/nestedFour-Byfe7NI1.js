import{a,b as r}from"./bodyLock-CXhmA4vK.js";/* empty css              */import{s as c,r as o}from"./requestLoader-CtRPdB7y.js";function i(t){return` <li class="challenge-form__item">
                    ${t.creator.name}
                    <label class="challenge-form__label">
                        <input class="challenge-form__input" type="checkbox">
                        <span class="challenge-form__input-decor"></span>
                        ${t.text}</label>
                        <div class="challenge-form__line"></div>
                </li>`}const e={privateBtn:document.querySelector(".challenge-navigation__button-private"),publicBtn:document.querySelector(".challenge-navigation__button-public"),createBtn:document.querySelector(".challenge-navigation__button-create"),formCreate:document.querySelector(".challenge__card"),formBtn:document.querySelector(".challenge-card__button"),formTextArea:document.querySelector(".challenge-card__input"),challengeList:document.querySelector(".challenge-form__list")};async function l(){c();const t=await a();console.log(t),e.challengeList.innerHTML=t.map(n=>i(n)).join(""),o()}function s(){e.formCreate.classList.add("is-hidden")}function u(){e.formCreate.classList.toggle("is-hidden")}function m(t){t.preventDefault(),e.formTextArea.value!==""&&(e.formCreate.reset(),l()),s()}e.createBtn.addEventListener("click",u);e.formCreate.addEventListener("submit",m);e.privateBtn.addEventListener("click",l);e.publicBtn.addEventListener("click",r);
