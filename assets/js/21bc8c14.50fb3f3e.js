"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2747],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?t.createElement(b,c(c({ref:n},p),{},{components:r})):t.createElement(b,c({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6329:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],l={sidebar_label:"handler",title:"backend.handler"},i=void 0,s={unversionedId:"reference/backend/handler",id:"reference/backend/handler",isDocsHomePage:!1,title:"backend.handler",description:"Base handler Spock class",source:"@site/docs/reference/backend/handler.md",sourceDirName:"reference/backend",slug:"/reference/backend/handler",permalink:"/spock/reference/backend/handler",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/reference/backend/handler.md",tags:[],version:"current",frontMatter:{sidebar_label:"handler",title:"backend.handler"},sidebar:"api",previous:{title:"field_handlers",permalink:"/spock/reference/backend/field_handlers"},next:{title:"help",permalink:"/spock/reference/backend/help"}},p=[{value:"BaseHandler Objects",id:"basehandler-objects",children:[]}],u={toc:p};function d(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Base handler Spock class"),(0,o.kt)("h2",{id:"basehandler-objects"},"BaseHandler Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class BaseHandler(ABC)\n")),(0,o.kt)("p",null,"Base class for saver and payload"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_writers")," - maps file extension to the correct i/o handler"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_s3_config")," - optional S3Config object to handle s3 access")))}d.isMDXComponent=!0}}]);