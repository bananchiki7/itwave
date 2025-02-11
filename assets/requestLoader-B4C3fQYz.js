import{n as o,o as s}from"./mainLoader-DACqXSaj.js";const t=`
    <div class="request-loader-wrapper loader-wrapper">
        <div class="request-loader loader"></div>
    </div>`;let e=null;function a(){o();const r=document.querySelector(".request-loader-wrapper");if(r){e=r,e.classList.remove("is-hidden");return}document.body.insertAdjacentHTML("afterbegin",t),e=document.querySelector(".request-loader-wrapper")}function l(){setTimeout(()=>{e.classList.add("is-hidden"),s()},900)}export{l as r,a as s};
