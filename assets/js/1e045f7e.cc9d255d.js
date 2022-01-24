"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5601],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4315:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l="Lazy Evaluation",c={unversionedId:"advanced_features/Lazy-Features",id:"advanced_features/Lazy-Features",isDocsHomePage:!1,title:"Lazy Evaluation",description:"spock supports lazy evaluation for both dependencies between classes and class inheritance.",source:"@site/docs/advanced_features/Lazy-Features.md",sourceDirName:"advanced_features",slug:"/advanced_features/Lazy-Features",permalink:"/spock/advanced_features/Lazy-Features",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/advanced_features/Lazy-Features.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Types",permalink:"/spock/advanced_features/Advanced-Types"},next:{title:"Local Definitions",permalink:"/spock/advanced_features/Local-Definitions"}},p=[{value:"Lazy Class Dependencies",id:"lazy-class-dependencies",children:[]},{value:"Lazy Class Inheritance",id:"lazy-class-inheritance",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lazy-evaluation"},"Lazy Evaluation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spock")," supports lazy evaluation for both dependencies between classes and class inheritance."),(0,o.kt)("h3",{id:"lazy-class-dependencies"},"Lazy Class Dependencies"),(0,o.kt)("p",null,"When we create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," class that depends on another ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," class we can be 'lazy' and pass only the top-level\nclass(es) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder")," instead of all the dependent classes. This tends to make your code much less verbose\nwhen there are many ",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorated classes. We do this by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"\nwithin the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder"),". This will tell spock to look for any missing references to ",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorated classes\nwithin ",(0,o.kt)("inlineCode",{parentName:"p"},'sys.modules["spock"].backend.config')," and add them to the underlying list of classes within graph construction.\nFor instance, "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from spock import spock\nfrom spock import SpockBuilder\n\n@spock\nclass NestedStuffDefault:\n    away: str = \"arsenal\"\n    goals: int = 0\n\n\n@spock\nclass Maybe:\n    r: int = 4\n    t: float = 1.9\n    nested_no_conf_def: NestedStuffDefault = NestedStuffDefault\n\n\n# Set lazy to True to make sure spock lazily finds @spock decorated classes \n# Not we only pass the Maybe class here instead of both Maybe and NestedStuffDefault\nconfig = SpockBuilder(Maybe, desc='Lazy Example', lazy=True).generate()\n")),(0,o.kt)("p",null,"The above is equivalent to passing both ",(0,o.kt)("inlineCode",{parentName:"p"},"Maybe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NestedStuffDefault")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder"),"."),(0,o.kt)("h3",{id:"lazy-class-inheritance"},"Lazy Class Inheritance"),(0,o.kt)("p",null,"When we create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," class that inherits from another ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," class we can be 'lazy' and leave off the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorator for any parent classes. We do this by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic")," flag within the ",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorator to\n",(0,o.kt)("inlineCode",{parentName:"p"},"True"),". With this flag, ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," will traverse the MRO and automatically cast parent classes to the equivalent of a\n",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorated class. With lazy inheritance you only need to pass the child class to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder")," instead of\nall parents and children. Additionally, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder")," to lazily find and\nreturn the parent classes to the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"Spockspace"),". For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from spock import spock\nfrom spock import SpockBuilder\nfrom typing import Optional\n\nclass OptimizerConfig:\n    lr: float = 0.01\n    n_epochs: int = 2\n    grad_clip: Optional[float]\n\n\nclass DataConfig:\n    batch_size: int = 2\n\n\n# Set dynamic=True to allow for lazy inheritance\n@spock(dynamic=True)\nclass SGDConfig(OptimizerConfig, DataConfig):\n    weight_decay: float\n    momentum: float\n    nesterov: bool\n\n# Set lazy to True to make sure the parent classes are returned from the generate call\nconfig = SpockBuilder(SGDConfig, desc='Lazy Example', lazy=True).generate()\n")),(0,o.kt)("p",null,"The above is equivalent to decorating each class with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorator and additionally passing ",(0,o.kt)("inlineCode",{parentName:"p"},"DataConfig")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"OptimizerConfig")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder"),"."))}u.isMDXComponent=!0}}]);