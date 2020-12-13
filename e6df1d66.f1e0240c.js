(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(101)),c={title:"React Leaflet Core"},i={unversionedId:"core-introduction",id:"core-introduction",isDocsHomePage:!1,title:"React Leaflet Core",description:"Introduction",source:"@site/docs/core-introduction.md",slug:"/core-introduction",permalink:"/docs/core-introduction",version:"current",sidebar:"docs",previous:{title:"Child components",permalink:"/docs/api-components"},next:{title:"Core architecture",permalink:"/docs/core-architecture"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Audience",id:"audience",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"React Leaflet's core APIs are implemented in the ",Object(a.b)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package to provide a separation from the public APIs.\nThe goal of this package is to make most of React Leaflet's internal logic available to developers to easily implement custom behaviors, such as third-party Leaflet plugins."),Object(a.b)("h2",{id:"audience"},"Audience"),Object(a.b)("p",null,"You might want to learn about the core APIs if you want to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Customize how public components work, by creating an alternative implementation matching your needs"),Object(a.b)("li",{parentName:"ul"},"Implement new components not provided by React Leaflet"),Object(a.b)("li",{parentName:"ul"},"Simply learn more about how React Leaflet works")),Object(a.b)("p",null,"If you're only interested in using the public APIs of React Leaflet, their usage is covered in the previous sections of this documentation, notably the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/start-introduction"}),"getting started")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-map"}),"public API")," pages."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package is a dependency of the ",Object(a.b)("inlineCode",{parentName:"p"},"react-leaflet")," one. The main ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/start-installation"}),"installation steps")," from the getting started documentation should be followed to use the core APIs."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"All the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api"}),"core APIs")," can be imported from the ",Object(a.b)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package, such as"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createControlComponent } from '@react-leaflet/core'\nimport { Control } from 'leaflet'\n\nexport const ZoomControl = createControlComponent(\n  (props) => new Control.Zoom(props),\n)\n")),Object(a.b)("p",null,"The following page presents the architecture and usage in more details."))}u.isMDXComponent=!0}}]);