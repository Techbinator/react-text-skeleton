(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),s=n.n(l),o=n(1),i=n(4),u=n.n(i);var d={gradient:"styles_gradient__3n0Ae",pulse:"styles_pulse__I5_Lv",blurred:"styles_blurred__Hw8m8",blur:"styles_blur__19vMK"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".styles_gradient__3n0Ae,\n.styles_gradient__3n0Ae * {\n  height: 100%;\n  width: 100%;\n  background: -webkit-gradient(linear, right top, left top, from(#f0f0f0), color-stop(50%, #f8f8f8), to(#f0f0f0));\n  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);\n  background-size: 400% 400%;\n  -webkit-animation: styles_pulse__I5_Lv 1.2s ease-in-out infinite;\n          animation: styles_pulse__I5_Lv 1.2s ease-in-out infinite;\n  padding: 0 1px;\n  border-radius: 4px;\n  color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.styles_blurred__Hw8m8,\n.styles_blurred__Hw8m8 * {\n  color: transparent !important;\n  text-shadow: 0 0 5px rgba(0, 0, 255, 0.4) !important;\n  -webkit-animation: styles_blur__19vMK 2s ease-out infinite;\n          animation: styles_blur__19vMK 2s ease-out infinite;\n}\n\n@-webkit-keyframes styles_blur__19vMK {\n  0% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n  }\n  25% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n  }\n  75% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  }\n  100% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n  }\n}\n\n@keyframes styles_blur__19vMK {\n  0% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n  }\n  25% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n  }\n  75% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  }\n  100% {\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n  }\n}\n\n@-webkit-keyframes styles_pulse__I5_Lv {\n  0% {\n    background-position: 0% 0%;\n  }\n  100% {\n    background-position: -135% 0%;\n  }\n}\n\n@keyframes styles_pulse__I5_Lv {\n  0% {\n    background-position: 0% 0%;\n  }\n  100% {\n    background-position: -135% 0%;\n  }\n}\n");var c=function(e){var t=e.dummyText,n=e.className,a=e.children,r=e.skeletonType,l=""+(a?"":d[void 0===r?"blurred":r])+(n?" "+n:"");return u.a.createElement("span",{className:l},a||t)},m=function(){var e=Object(a.useState)("Dummy text"),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),u=i[0],d=i[1],m=Object(a.useState)(4),p=Object(o.a)(m,2),b=p[0],_=p[1],f=Object(a.useState)("blurred"),h=Object(o.a)(f,2),y=h[0],g=h[1];return Object(a.useEffect)((function(){setTimeout((function(){d(u?"":"Final text")}),1e3*b)}),[u,b]),r.a.createElement("div",{className:"App"},r.a.createElement("h3",null,"Configure"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"dummy-text"},"Dummy text: "),r.a.createElement("input",{id:"dummy-text",type:"text",value:n,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"text-after"},"Final text after: "),r.a.createElement("input",{type:"number",name:"text-after",min:1,max:10,value:b,onChange:function(e){return _(parseInt(e.target.value))}}),"second(s)"),r.a.createElement("div",null,r.a.createElement("span",null,"Skeleton Type: "),r.a.createElement("label",{htmlFor:"blurred-skeleton-type"},"Blurred",r.a.createElement("input",{checked:"blurred"===y,type:"radio",id:"blurred-skeleton-type",value:y,name:"skeleton-type",onChange:function(e){return g("blurred")}})),r.a.createElement("label",{htmlFor:"gradient-skeleton-type"},"Gradient",r.a.createElement("input",{checked:"gradient"===y,type:"radio",id:"gradient-skeleton-type",value:y,name:"skeleton-type",onChange:function(e){return g("gradient")}}))),r.a.createElement("hr",null),r.a.createElement("h2",null,"Products demo: "),r.a.createElement("hr",null),r.a.createElement(c,{dummyText:n,skeletonType:y},u))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.f0eb477d.chunk.js.map