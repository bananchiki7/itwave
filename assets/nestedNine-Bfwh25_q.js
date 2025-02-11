import{h as a,m as n,r as l}from"./mainLoader-DACqXSaj.js";/* empty css              */import{s as o,r as t}from"./requestLoader-B4C3fQYz.js";function r(e){return`
        <li class="history-challenges__item">
                <a class="history-challenges__link" href="#">${e.text}</a>
            </li>
    `}const i={listHobbies:document.querySelector(".history__hobbies"),listChallenges:document.querySelector(".history__challenges")};async function c(){o();const e=await a();console.log(e),i.listChallenges.innerHTML=e.map(s=>r(s)).join(""),t()}function h(e){return`
        <li class="history-hobbies__item">
                <a class="history-hobbies__link" href="#">${e.name}</a>
            </li>
    `}async function b(){o();const e=await n();console.log(e),i.listHobbies.innerHTML=e.map(s=>h(s)).join(""),t()}b();c();l();
