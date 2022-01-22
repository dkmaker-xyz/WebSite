"use strict";(self.webpackChunkdkmaker=self.webpackChunkdkmaker||[]).push([[7428],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},625:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},o="Filament Calliper / Skydel\xe6re",p={unversionedId:"helpers/filamentesteps",id:"helpers/filamentesteps",title:"Filament Calliper / Skydel\xe6re",description:"Du kan bruge denne lille holder til at m\xe5le distancen p\xe5 dit filament til kalibrering af E-Steps / rotation distance p\xe5 din extruder.",source:"@site/designs/02-helpers/01-filamentesteps.md",sourceDirName:"02-helpers",slug:"/helpers/filamentesteps",permalink:"/designs/helpers/filamentesteps",tags:[],version:"current",lastUpdatedBy:"Christian Pedersen",lastUpdatedAt:1642842841,formattedLastUpdatedAt:"1/22/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hj\xe6lpere",permalink:"/designs/helpers/"},next:{title:"Dremel guide",permalink:"/designs/helpers/dremelguide"}},c=[{value:"Samlet l\xf8sning",id:"samlet-l\xf8sning",children:[],level:2},{value:"Clamp",id:"clamp",children:[],level:2},{value:"Knob (<strong>Valgfri</strong>)",id:"knob-valgfri",children:[],level:2},{value:"Base (<strong>Valgfri</strong>)",id:"base-valgfri",children:[],level:2}],u={toc:c};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filament-calliper--skydel\xe6re"},"Filament Calliper / Skydel\xe6re"),(0,l.kt)("p",null,"Du kan bruge denne lille holder til at m\xe5le distancen p\xe5 dit filament til kalibrering af E-Steps / rotation distance p\xe5 din extruder."),(0,l.kt)("p",null,"Den lille base kan bruges hvis man har en ikke flad extruder eller et punkt der er fast du kan refere til kan man bruge ",(0,l.kt)("a",{target:"_blank",href:n(9485).Z},"Base.stl")),(0,l.kt)("p",null,"Man kan enten bruge ",(0,l.kt)("a",{target:"_blank",href:n(8941).Z},"Knob.stl")," med en M3 bolt, eller en M3 Cap Head screw og en umbraco n\xf8gle eller ligende. dvs. har man ikke en M3 bolt med HEX hoved skal man ikke printe Knob.stl"),(0,l.kt)("h1",{id:"kalibring-guides"},"Kalibring guides"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://teachingtechyt.github.io/calibration.html#esteps"},"Marlin")," - Link til teaching tech"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.klipper3d.org/Rotation_Distance.html"},"Klipper")," - Officiel klipper dokumentation")),(0,l.kt)("h2",{id:"samlet-l\xf8sning"},"Samlet l\xf8sning"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Samlet",src:n(3680).Z})),(0,l.kt)("h2",{id:"clamp"},"Clamp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(254).Z},"Clamp.stl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(6940).Z},"Clamp.step"),(0,l.kt)("img",{alt:"Clamp",src:n(322).Z}))),(0,l.kt)("h2",{id:"knob-valgfri"},"Knob (",(0,l.kt)("strong",{parentName:"h2"},"Valgfri"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(8941).Z},"Knob.stl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(5239).Z},"Knob.step"),(0,l.kt)("img",{alt:"Knob",src:n(3025).Z}))),(0,l.kt)("h2",{id:"base-valgfri"},"Base (",(0,l.kt)("strong",{parentName:"h2"},"Valgfri"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(9485).Z},"Base.stl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(9934).Z},"Base.step"),(0,l.kt)("img",{alt:"Base",src:n(4821).Z}))))}f.isMDXComponent=!0},9934:function(e,t,n){t.Z=n.p+"assets/files/Base-b26f83afc1eb11600889bac5d256c0a1.step"},6940:function(e,t,n){t.Z=n.p+"assets/files/Clamp-4aa382efe2f52ef7be1636e43159ac31.step"},5239:function(e,t,n){t.Z=n.p+"assets/files/Knob-8a9f229c4f82ed56467193d69ad0862e.step"},9485:function(e,t,n){t.Z=n.p+"assets/files/Base-1760951c277438480e3f2d9f1d87094f.stl"},254:function(e,t,n){t.Z=n.p+"assets/files/Clamp-e4cb9e44ee86053b537e72c8361799c4.stl"},8941:function(e,t,n){t.Z=n.p+"assets/files/Knob-67016592a4cfd85e99b3b28007840374.stl"},3680:function(e,t,n){t.Z=n.p+"assets/images/Howto-27a607018be2907706bd556006e6d3ea.jpg"},4821:function(e,t,n){t.Z=n.p+"assets/images/Base-8536b15a74e78efad900f79cb5db6fd8.png"},322:function(e,t,n){t.Z=n.p+"assets/images/Clamp-5b4a8901d4c60b4dc1b6976721d6e7a5.png"},3025:function(e,t,n){t.Z=n.p+"assets/images/Knob-198828d61e5dd3e20c54c6cb3416eafc.png"}}]);