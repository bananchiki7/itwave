/* empty css              */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c=async()=>{const i={email:"xample@example.com",password:"yourpassword123",phone:123456789,name:"John Doe"};try{const r=await fetch("https://hoby-api.onrender.com/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!r.ok){const t=await r.json();console.error("Помилка при реєстрації:",t);return}const s=await r.json();console.log("Успішна реєстрація:",s)}catch(r){console.error("Помилка мережі:",r)}};c();
