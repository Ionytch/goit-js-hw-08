!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o);var a=o("1WSnx"),n=document.querySelector(".feedback-form"),l=JSON.parse(localStorage.getItem("feedback-form-state")),f=document.querySelector(".feedback-form input"),i=document.querySelector(".feedback-form textarea");l&&(f.value=l.email,i.value=l.message);var c=a.throttle((function(){var e=n.elements,t=e.email,r=e.message,o={email:t.value,message:r.value};console.log(o),localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500);n.addEventListener("input",c),n.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c56414b3.js.map
