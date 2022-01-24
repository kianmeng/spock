"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8040],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Run",l={unversionedId:"basics/Run",id:"basics/Run",isDocsHomePage:!1,title:"Run",description:"In summary, we have constructed the four basic pieces of spock.",source:"@site/docs/basics/Run.md",sourceDirName:"basics",slug:"/basics/Run",permalink:"/spock/basics/Run",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/basics/Run.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Saving",permalink:"/spock/basics/Saving"},next:{title:"Advanced Features",permalink:"/spock/advanced_features/About"}},p=[{value:"Running Our Code",id:"running-our-code",children:[]},{value:"Help",id:"help",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run"},"Run"),(0,o.kt)("p",null,"In summary, we have constructed the four basic pieces of ",(0,o.kt)("inlineCode",{parentName:"p"},"spock"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"spock")," class that defines our parameters (Basics)"),(0,o.kt)("li",{parentName:"ol"},"Generated the ",(0,o.kt)("inlineCode",{parentName:"li"},"spock")," namespace object (Building)"),(0,o.kt)("li",{parentName:"ol"},"Referenced ",(0,o.kt)("inlineCode",{parentName:"li"},"spock")," parameters in other code (Building)"),(0,o.kt)("li",{parentName:"ol"},"Created a configuration file (Configuration Files)")),(0,o.kt)("p",null,"Now we can run our basic neural network example."),(0,o.kt)("h3",{id:"running-our-code"},"Running Our Code"),(0,o.kt)("p",null,"To run ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.py")," we pass the path to the configuration file as a command line argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python tutorial.py --config tutorial.yaml\n")),(0,o.kt)("h3",{id:"help"},"Help"),(0,o.kt)("p",null,"To get help for parameters need to run our ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.py")," script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python tutorial.py --help\n")),(0,o.kt)("p",null,"The complete basic example can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fidelity/spock/blob/master/examples"},"here"),"."))}m.isMDXComponent=!0}}]);