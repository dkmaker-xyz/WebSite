"use strict";(self.webpackChunkdkmaker=self.webpackChunkdkmaker||[]).push([[2494],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=i,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||a;return t?n.createElement(f,p(p({ref:r},d),{},{components:t})):n.createElement(f,p({ref:r},d))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=s;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8484:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),p=["components"],o={},l="3D Printere",u={unversionedId:"03-3dprintere/index",id:"03-3dprintere/index",title:"3D Printere",description:"Lidt om 3d printere generelt.. FDM / Resin",source:"@site/mig/03-3dprintere/index.md",sourceDirName:"03-3dprintere",slug:"/03-3dprintere/",permalink:"/mig/03-3dprintere/",tags:[],version:"current",lastUpdatedBy:"Christian Pedersen",lastUpdatedAt:1642842841,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mit udstyr",permalink:"/mig/udstyr"},next:{title:"Ratrig V-Core 3",permalink:"/mig/03-3dprintere/vcore3"}},d=[{value:"Firmware - Klipper",id:"firmware---klipper",children:[],level:2}],c={toc:d};function s(e){var r=e.components,t=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3d-printere"},"3D Printere"),(0,a.kt)("p",null,"Lidt om 3d printere generelt.. FDM / Resin"),(0,a.kt)("h2",{id:"firmware---klipper"},"Firmware - Klipper"),(0,a.kt)("p",null,"P\xe5 alle mine 3D printere k\xf8re jeg ",(0,a.kt)("a",{parentName:"p",href:"https://www.klipper3d.org"},"Klipper")," som er en firmware skrevet i b\xe5de C++ og Python."),(0,a.kt)("p",null,"Hele logikken / beregningen foreg\xe5r i en ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org"},"Raspberry Pi"),", og printerens controller board har kun ansvaret for at bruge IO porte, samt styre stepper drivere."),(0,a.kt)("p",null,"Dette er anderledes end f.eks. ",(0,a.kt)("a",{parentName:"p",href:"https://marlinfw.org"},"Marlin Firmware")," hvor alle beregninger laves direkte p\xe5 controller boardet."),(0,a.kt)("p",null,"Af andre foredele ved Klipper kan n\xe6vnes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hastighed, ved man bruger en Raspberry f\xe5r man markant bedre performance"),(0,a.kt)("li",{parentName:"ul"},"Controller er mindre v\xe6sentlig da Raspberry agere CPU, s\xe5 selv de gamle 8bit boards vil virke fint med et st\xf8rre performance l\xf8fte"),(0,a.kt)("li",{parentName:"ul"},"Tuning / Calibering er rigtig nemt med f.eks.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.klipper3d.org/Pressure_Advance.html"},"Preasure Advance")," - S\xf8rger for at man ikke overextruder/under ved hj\xf8rner"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.klipper3d.org/Resonance_Compensation.html"},"Input Shaper")," - Forebygger Ringing/Ghosting ved h\xf8jere hastigheder"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.klipper3d.org/Bed_Level.html"},"Bed Level")," - Sikre dig et godt 1. lag")))),(0,a.kt)("p",null,"Jeg har lavet en hel dedikeret ",(0,a.kt)("a",{parentName:"p",href:"/mig/03-3dprintere/klipperconfig"},"Klipper Config")," sektion til min konfiguration"))}s.isMDXComponent=!0}}]);