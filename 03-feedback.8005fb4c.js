var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequire4c75=r);var a=r("kEUo3");const l=document.querySelector(".feedback-form"),n=JSON.parse(localStorage.getItem("feedback-form-state")),s=document.querySelector(".feedback-form input"),c=document.querySelector(".feedback-form textarea");n&&(s.value=n.email,c.value=n.message);const f=a.throttle((()=>{const{email:e,message:t}=l.elements,o={email:e.value,message:t.value};console.log(o),localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500);l.addEventListener("input",f),l.addEventListener("submit",(e=>{console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.8005fb4c.js.map
