import{g as i,c as n,a as o,r as c}from"./mainLoader-jdqN2vow.js";/* empty css              */import{c as s}from"./createChallengeCard-Bd-O0JPJ.js";import{c as r}from"./changePage-BhxG9jDn.js";import{c as l}from"./createReviewCard-Gxzgn367.js";const a={avatarButton:document.querySelector(".header-avatar"),reviewsList:document.querySelector(".reviews__list"),challengeList:document.querySelector(".challenges-form__list")};async function m(){const e=await i();a.challengeList.innerHTML=e.map(t=>s(t)).join("")}async function h(){try{await n(),r("profile")}catch{r("authorization")}}async function g(){const e=await o();a.reviewsList.innerHTML=e.map(t=>l(t)).join("")}m();g();a.avatarButton.addEventListener("click",h);c();
