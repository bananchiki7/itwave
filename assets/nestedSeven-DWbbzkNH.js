import{d as a}from"./bodyLock-CXhmA4vK.js";/* empty css              */import{r as i}from"./mainLoader-Bq2P0Tnw.js";import{s as m,r as n}from"./requestLoader-CtRPdB7y.js";const e={text:document.querySelector(".profile-info__text"),email:document.querySelector(".profile-info__email"),avatar:document.querySelector(".profile-info__picture")};async function s(){const{name:o,email:t,photo:r}=await a();e.text.innerHTML=o,e.email.innerHTML=t,e.avatar.src=r||"./img/svg/avatar.svg"}m();s();n();i();
