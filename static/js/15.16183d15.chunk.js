(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[15],{240:function(n,e,t){"use strict";t.r(e);var r,a,c,i=t(11),o=t(0),u=t(65),l=t(218),d=t(30),s=t(31),b=t(8),f=t(59),m=t(5),p=t(28),x=m.default.h1(r||(r=Object(b.a)(["\n  font-size: 2rem;\n  font-weight: var(--unnamed-font-weight-bold);\n  line-height: 47px;\n  color: var(--unnamed-color-3578eb);\n  text-align: center;\n  @media (min-width: 600px) {\n    font-size: 2.19rem;\n  }\n  @media (min-width: ","px) and (orientation: landscape) {\n    margin: 70px 70px 25px 70px;\n    text-align: left;\n  }\n  @media (min-width: ","px) and (orientation: landscape) {\n    margin: 100px 151px 25px 154px;\n  }\n"])),f.a.large,f.a.biglarge),h=m.default.section(a||(a=Object(b.a)(["\n  ","\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n  border-radius: 20px;\n  @media (min-width: ","px) and (orientation: landscape) {\n    width: 400px;\n  }\n  @media (min-width: ","px) and (orientation: landscape) {\n    width: 600px;\n  }\n"])),p.c,f.a.large,f.a.biglarge),g=m.default.form(c||(c=Object(b.a)(["\n  ","\n  align-self: center;\n  align-items: center;\n  width: 80%;\n  @media (min-width: ","px) and (orientation: landscape) {\n    width: 400px;\n  }\n"])),p.c,f.a.large),j=t(217),O=j.b().shape({amount:j.a().positive().required(),fromCurrency:j.c(),toCurrency:j.c()}),w=t(1),v=Object(o.lazy)((function(){return t.e(9).then(t.bind(null,244))})),y=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,237))})),C=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,239))}));e.default=function(){var n=Object(o.useContext)(d.a),e=Object(o.useContext)(s.a),t=n||{},r=t.exchangeRate,a=t.allCurrencies,c=t.amount,b=t.getCurrencies,f=t.getExchangeRate,m=null===a||void 0===a?void 0:a.find((function(n,e,t){return t[0]})),p=(e||{}).setHistoryMemory,j=Object(o.useState)(""),S=Object(i.a)(j,2),z=S[0],N=S[1],E=Object(o.useState)(""),k=Object(i.a)(E,2),F=k[0],D=k[1];Object(o.useEffect)((function(){b&&b()}),[]),Object(o.useEffect)((function(){r&&p&&c&&p(function(){var n=new Date,e=n.getDate().toString(),t=(n.getMonth()+1).toString(),r=n.getFullYear().toString();return Number(e)<10&&(e="0".concat(e)),Number(t)<10&&(t="0".concat(t)),"".concat(e,".").concat(t,".").concat(r)}(),c,r,z,F)}),[r]),Object(o.useEffect)((function(){m&&(N(m),D(m))}),[m]);var J=Object(u.e)({resolver:Object(l.a)(O)}),M=J.control,P=J.handleSubmit,R=(J.formState.errors||{}).amount;return Object(w.jsxs)(h,{children:[Object(w.jsx)(x,{children:"Konwerter walut"}),Object(w.jsxs)(g,{onSubmit:P((function(n){var e=n.amount;f&&f(z,F,Number(e))})),children:[Object(w.jsx)(C,{currency:m,control:M,newToCurrency:F,newFromCurrency:z,amount:R}),Object(w.jsx)(y,{control:M,setNewFromCurrency:N,setNewToCurrency:D}),Object(w.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=15.16183d15.chunk.js.map