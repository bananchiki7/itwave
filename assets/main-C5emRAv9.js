import{s as r,g as o,c as s,a as n,r as c}from"./mainLoader-DACqXSaj.js";/* empty css              */import{h as l}from"./hobbyList-QLlKo8xR.js";import{c as m}from"./createChallengeCard-7a2C_XTl.js";import{c as i}from"./changePage-BhxG9jDn.js";import{c as h}from"./createReviewCard-Gxzgn367.js";const a={avatarButton:document.querySelector(".header-avatar"),reviewsList:document.querySelector(".reviews__list"),challengeList:document.querySelector(".challenges-form__list")};async function u(){if(r()){const e=await o();a.challengeList.innerHTML=e.map(t=>m(t)).join("")}}async function L(){try{await s(),i("profile")}catch{i("authorization")}}async function d(){const e=await n();a.reviewsList.innerHTML=e.map(t=>h(t)).join("")}const g=document.querySelector(".hobbies__list");g.addEventListener("click",l);u();d();a.avatarButton.addEventListener("click",L);c();
