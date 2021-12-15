"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7419],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9603:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_label:"ax",title:"addons.tune.ax"},c=void 0,u={unversionedId:"reference/addons/tune/ax",id:"reference/addons/tune/ax",isDocsHomePage:!1,title:"addons.tune.ax",description:"Handles the ax backend",source:"@site/docs/reference/addons/tune/ax.md",sourceDirName:"reference/addons/tune",slug:"/reference/addons/tune/ax",permalink:"/spock/reference/addons/tune/ax",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/reference/addons/tune/ax.md",tags:[],version:"current",frontMatter:{sidebar_label:"ax",title:"addons.tune.ax"},sidebar:"api",previous:{title:"utils",permalink:"/spock/reference/addons/s3/utils"},next:{title:"builder",permalink:"/spock/reference/addons/tune/builder"}},s=[{value:"AxTunerStatus Objects",id:"axtunerstatus-objects",children:[]},{value:"AxInterface Objects",id:"axinterface-objects",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Handles the ax backend"),(0,l.kt)("h2",{id:"axtunerstatus-objects"},"AxTunerStatus Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class AxTunerStatus(TypedDict)\n")),(0,l.kt)("p",null,"Tuner status return object for Ax -- supports the service style API from Ax"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client")," - current AxClient instance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trial_index")," - current trial index")),(0,l.kt)("h2",{id:"axinterface-objects"},"AxInterface Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class AxInterface(BaseInterface)\n")),(0,l.kt)("p",null,"Specific override to support the Ax backend -- supports the service style API from Ax"),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(tuner_config: AxTunerConfig, tuner_namespace)\n")),(0,l.kt)("p",null,"AxInterface init call that maps variables, creates a map to fnc calls, and constructs the necessary\nunderlying objects"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuner_config")," - configuration object for the ax backend"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuner_namespace")," - tuner namespace that has attr classes that maps to an underlying library types")),(0,l.kt)("h4",{id:"_ax_range"},"_","ax","_","range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def _ax_range(name, val)\n")),(0,l.kt)("p",null,"Assemble the dictionary for ax range parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - parameter name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val")," - current attr val")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  dictionary that can be added to a parameter list"),(0,l.kt)("h4",{id:"_ax_choice"},"_","ax","_","choice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def _ax_choice(name, val)\n")),(0,l.kt)("p",null,"Assemble the dictionary for ax choice parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - parameter name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val")," - current attr val")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  dictionary that can be added to a parameter list"))}d.isMDXComponent=!0}}]);