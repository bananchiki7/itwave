import{h as o,i as s}from"./mainLoader-jdqN2vow.js";const t=`
    <div class="request-loader-wrapper loader-wrapper">
        <div class="request-loader loader"></div>
    </div>`;let e=null;function a(){o();const r=document.querySelector(".request-loader-wrapper");if(r){e=r,e.classList.remove("is-hidden");return}document.body.insertAdjacentHTML("afterbegin",t),e=document.querySelector(".request-loader-wrapper")}function i(){setTimeout(()=>{e.classList.add("is-hidden"),s()},900)}export{i as r,a as s};
