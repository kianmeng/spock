"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6486],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3096:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={},c="Local Definitions",p={unversionedId:"advanced_features/Local-Definitions",id:"advanced_features/Local-Definitions",isDocsHomePage:!1,title:"Local Definitions",description:"The class based solution within spock provides the ability to change a global parameter value within a local",source:"@site/docs/advanced_features/Local-Definitions.md",sourceDirName:"advanced_features",slug:"/advanced_features/Local-Definitions",permalink:"/spock/advanced_features/Local-Definitions",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/advanced_features/Local-Definitions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Types",permalink:"/spock/advanced_features/Advanced-Types"},next:{title:"Keyword Configs",permalink:"/spock/advanced_features/Keyword-Configs"}},s=[{value:"Overriding a Global Value",id:"overriding-a-global-value",children:[]}],u={toc:s};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-definitions"},"Local Definitions"),(0,o.kt)("p",null,"The class based solution within ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," provides the ability to change a global parameter value within a local\nclass context."),(0,o.kt)("h3",{id:"overriding-a-global-value"},"Overriding a Global Value"),(0,o.kt)("p",null,"Let's define two new parameters with the same name but in two different classes that represent where some stuff is\ngoing to be cached. One for the model and one for some data."),(0,o.kt)("p",null,"Editing our definition in: ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from enum import Enum\nfrom spock.args import SavePath\nfrom spock.config import spock\nfrom typing import List\nfrom typing import Optional\nfrom typing import Tuple\n\n\nclass Activation(Enum):\n    relu = 'relu'\n    gelu = 'gelu'\n    tanh = 'tanh'\n\n\nclass Optimizer(Enum):\n    sgd = 'SGD'\n    adam = 'Adam'\n\n\n@spock\nclass ModelConfig:\n    save_path: SavePath\n    n_features: int\n    dropout: Optional[List[float]]\n    hidden_sizes: Tuple[int, int, int] = (32, 32, 32)\n    activation: Activation = 'relu'\n    optimizer: Optimizer\n    cache_path: Optional[str]\n\n\n@spock\nclass DataConfig:\n    batch_size: int = 2\n    n_samples: int = 8\n    cache_path: Optional[str]\n\n\n@spock\nclass OptimizerConfig:\n    lr: float = 0.01\n    n_epochs: int = 2\n    grad_clip: Optional[float]\n\n\n@spock\nclass SGDConfig(OptimizerConfig):\n    weight_decay: float\n    momentum: float\n    nesterov: bool\n\n")),(0,o.kt)("p",null,"Now, if we edit our configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# tutorial.yaml\n################\n# Global\ncache_path: /tmp/cache/\n# Special Key\nsave_path: /tmp\n# ModelConfig\nn_features: 64\ndropout: [0.2, 0.1]\nhidden_sizes: [32, 32, 16]\nactivation: relu\noptimizer: SGD\n# DataConfig\nbatch_size: 2\nn_samples: 8\n# OptimizerConfig\nlr: 0.01\nn_epochs: 2\ngrad_clip: 5.0\n# SGD Config\nweight_decay: 1E-5\nmomentum: 0.9\nnesterov: true\n")),(0,o.kt)("p",null,"This configuration file would set both parameters to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/cache/")," value (i.e. it would set the parameter value\nglobally). But what if we want to the data cache to be a different path? We can override the global parameter value with\na local parameter value."),(0,o.kt)("p",null,"Editing our configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# tutorial.yaml\n################\n# Global\ncache_path: /tmp/cache/\n# Special Key\nsave_path: /tmp\n# ModelConfig\nn_features: 64\ndropout: [0.2, 0.1]\nn_hidden: [32, 32, 16]\nactivation: relu\noptimizer: SGD\n# DataConfig\nbatch_size: 2\nn_samples: 8\nDataConfig:\n  cache_path: /home/user/cache/\n# OptimizerConfig\nlr: 0.01\nn_epochs: 2\ngrad_clip: 5.0\n# SGD Config\nweight_decay: 1E-5\nmomentum: 0.9\nnesterov: true\n")))}f.isMDXComponent=!0}}]);