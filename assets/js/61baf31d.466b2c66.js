"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4043],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5397:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_label:"config",title:"addons.tune.config"},l=void 0,p={unversionedId:"reference/addons/tune/config",id:"reference/addons/tune/config",isDocsHomePage:!1,title:"addons.tune.config",description:"Creates the spock config interface that wraps attr -- tune version for hyper-parameters",source:"@site/docs/reference/addons/tune/config.md",sourceDirName:"reference/addons/tune",slug:"/reference/addons/tune/config",permalink:"/spock/reference/addons/tune/config",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/reference/addons/tune/config.md",tags:[],version:"current",frontMatter:{sidebar_label:"config",title:"addons.tune.config"},sidebar:"api",previous:{title:"builder",permalink:"/spock/reference/addons/tune/builder"},next:{title:"interface",permalink:"/spock/reference/addons/tune/interface"}},s=[{value:"RangeHyperParameter Objects",id:"rangehyperparameter-objects",children:[]},{value:"ChoiceHyperParameter Objects",id:"choicehyperparameter-objects",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates the spock config interface that wraps attr -- tune version for hyper-parameters"),(0,o.kt)("h4",{id:"_spock_tune"},"_","spock","_","tune"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def _spock_tune(cls)\n")),(0,o.kt)("p",null,"Ovverides basic spock_attr decorator with another name"),(0,o.kt)("p",null,"Using a different name allows spock to easily determine which parameters are normal and which are\nmeant to be used in a hyper-parameter tuning backend"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Args"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cls: basic class def\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Returns"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cls: slotted attrs class that is frozen and kw only\n")),(0,o.kt)("h2",{id:"rangehyperparameter-objects"},"RangeHyperParameter Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@attr.s\nclass RangeHyperParameter()\n")),(0,o.kt)("p",null,"Range based hyper-parameter that is sampled uniformly"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," - type of the hyper-parameter (note: spock will attempt to autocast into this type)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bounds")," - min and max of the hyper-parameter range"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log_scale")," - log scale the values before sampling")),(0,o.kt)("h2",{id:"choicehyperparameter-objects"},"ChoiceHyperParameter Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@attr.s\nclass ChoiceHyperParameter()\n")),(0,o.kt)("p",null,"Choice based hyper-parameter that is sampled uniformly"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," - type of the hyper-parameter -- (note: spock will attempt to autocast into this type)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"choices")," - list of variable length that contains all the possible choices to select from")))}m.isMDXComponent=!0}}]);