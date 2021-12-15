"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2910],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,y=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2665:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_label:"payload",title:"addons.tune.payload"},u=void 0,c={unversionedId:"reference/addons/tune/payload",id:"reference/addons/tune/payload",isDocsHomePage:!1,title:"addons.tune.payload",description:"Handles the tuner payload backend",source:"@site/docs/reference/addons/tune/payload.md",sourceDirName:"reference/addons/tune",slug:"/reference/addons/tune/payload",permalink:"/spock/reference/addons/tune/payload",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/reference/addons/tune/payload.md",tags:[],version:"current",frontMatter:{sidebar_label:"payload",title:"addons.tune.payload"},sidebar:"api",previous:{title:"optuna",permalink:"/spock/reference/addons/tune/optuna"},next:{title:"tuner",permalink:"/spock/reference/addons/tune/tuner"}},p=[{value:"TunerPayload Objects",id:"tunerpayload-objects",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Handles the tuner payload backend"),(0,o.kt)("h2",{id:"tunerpayload-objects"},"TunerPayload Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class TunerPayload(BasePayload)\n")),(0,o.kt)("p",null,"Handles building the payload for tuners"),(0,o.kt)("p",null,"This class builds out the payload from config files of multiple types. It handles various\nfile types and also composition of config files via a recursive calls"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_loaders")," - maps of each file extension to the loader class")),(0,o.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(s3_config=None)\n")),(0,o.kt)("p",null,"Init for TunerPayload"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s3_config")," - optional S3 config object")),(0,o.kt)("h4",{id:"__call__"},"_","_","call","_","_"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __call__(*args, **kwargs)\n")),(0,o.kt)("p",null,"Call to allow self chaining"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("p",null,"  *args:\n**kwArgs:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Payload")," - instance of self")))}d.isMDXComponent=!0}}]);