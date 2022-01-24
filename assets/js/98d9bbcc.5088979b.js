"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6098],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},342:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],s={},l="Utilizing Command Line Overrides",p={unversionedId:"advanced_features/Command-Line-Overrides",id:"advanced_features/Command-Line-Overrides",isDocsHomePage:!1,title:"Utilizing Command Line Overrides",description:"spock supports overriding parameter values set from configuration files via the command line. This can be useful for",source:"@site/docs/advanced_features/Command-Line-Overrides.md",sourceDirName:"advanced_features",slug:"/advanced_features/Command-Line-Overrides",permalink:"/spock/advanced_features/Command-Line-Overrides",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/advanced_features/Command-Line-Overrides.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Keyword Configs",permalink:"/spock/advanced_features/Keyword-Configs"},next:{title:"S3 Support",permalink:"/spock/addons/S3"}},c=[{value:"Automatic Command-Line Argument Generation",id:"automatic-command-line-argument-generation",children:[]},{value:"Overriding Configuration File Values",id:"overriding-configuration-file-values",children:[]},{value:"Overriding Nested <code>@spock</code> Classes",id:"overriding-nested-spock-classes",children:[]},{value:"Overriding List/Tuple of Repeated <code>@spock</code> Classes",id:"overriding-listtuple-of-repeated-spock-classes",children:[]},{value:"Spock As a Drop In Replacement For Argparser",id:"spock-as-a-drop-in-replacement-for-argparser",children:[]}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utilizing-command-line-overrides"},"Utilizing Command Line Overrides"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spock")," supports overriding parameter values set from configuration files via the command line. This can be useful for\nexploration of parameter values, quick-and-dirty value overrides, or to parse other command-line arguments that would\nnormally require use of another argparser."),(0,i.kt)("h3",{id:"automatic-command-line-argument-generation"},"Automatic Command-Line Argument Generation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spock")," will automatically generate command line arguments for each parameter, unless the ",(0,i.kt)("inlineCode",{parentName:"p"},"no_cmd_line=True")," flag is\npassed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SpockBuilder"),". Let's look at two of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," decorated classes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial.py")," file to\nillustrate how this works in practice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from enum import Enum\nfrom spock import spock\nfrom typing import List\nfrom typing import Optional\nfrom typing import Tuple\n\n@spock\nclass DataConfig:\n    batch_size: int = 2\n    n_samples: int = 8\n    cache_path: Optional[str]\n    \n@spock\nclass OptimizerConfig:\n    lr: float = 0.01\n    n_epochs: int = 2\n    grad_clip: Optional[float]\n")),(0,i.kt)("p",null,"Given these definitions, ",(0,i.kt)("inlineCode",{parentName:"p"},"spock")," will automatically generate a command-line argument (via an internally maintained\nargparser) for each parameter within each ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," decorated class. The syntax follows simple dot notation\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"--classname.parameter"),". Thus, for our sample classes above, ",(0,i.kt)("inlineCode",{parentName:"p"},"spock")," will automatically generate the following\nvalid command-line arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"--DataConfig.batch_size *value*\n--DataConfig.n_samples *value*\n--DataConfig.cache_path *value*\n--OptimizerConfig.lr *value*\n--OptimizerConfig.n_epochs *value*\n--OptimizerConfig.grad_clip *value*\n")),(0,i.kt)("p",null,"None of these command-line arguments are required (i.e. sets ",(0,i.kt)("inlineCode",{parentName:"p"},"required=False")," within the argparser), but a value must\nbe set via one of the three core mechanisms: (1) a default value (set withing the ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," decorated class), (2) the\nconfiguration file (passed in with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," argument), or (3) the command-line argument (this takes precedence\nover all other methods)."),(0,i.kt)("h3",{id:"overriding-configuration-file-values"},"Overriding Configuration File Values"),(0,i.kt)("p",null,"Using the automatically generated command-line arguments, let's override a few values from our example in ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from enum import Enum\nfrom spock import spock\nfrom typing import List\nfrom typing import Optional\nfrom typing import Tuple\n\n\nclass Activation(Enum):\n    relu = 'relu'\n    gelu = 'gelu'\n    tanh = 'tanh'\n\n\nclass Optimizer(Enum):\n    sgd = 'SGD'\n    adam = 'Adam'\n\n\n@spock\nclass ModelConfig:\n    n_features: int\n    dropout: Optional[List[float]]\n    hidden_sizes: Tuple[int, int, int] = (32, 32, 32)\n    activation: Activation = 'relu'\n    optimizer: Optimizer\n    cache_path: Optional[str]\n\n\n@spock\nclass DataConfig:\n    batch_size: int = 2\n    n_samples: int = 8\n    cache_path: Optional[str]\n\n\n@spock\nclass OptimizerConfig:\n    lr: float = 0.01\n    n_epochs: int = 2\n    grad_clip: Optional[float]\n\n\n@spock\nclass SGDConfig(OptimizerConfig):\n    weight_decay: float\n    momentum: float\n    nesterov: bool\n\n")),(0,i.kt)("p",null,"To run ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial.py")," we would normally pass just the path to the configuration file as a command line argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ python tutorial.py --config tutorial.yaml\n")),(0,i.kt)("p",null,"But with command line overrides we can also pass parameter arguments to override their value within the configuration\nfile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ python tutorial.py --config tutorial.yaml --DataConfig.cache_path /tmp/trash\n")),(0,i.kt)("p",null,"Each parameter can be overridden ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," at the class specific level with the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"--classname.parameter"),". For\ninstance, our previous example would only override the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataConfig.cache_path")," and not the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelConfig.cache_path")," even\nthough they have the same parameter name (due to the different class names)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ python tutorial.py --config tutorial.yaml --DataConfig.cache_path /tmp/trash\n")),(0,i.kt)("h3",{id:"overriding-nested-spock-classes"},"Overriding Nested ",(0,i.kt)("inlineCode",{parentName:"h3"},"@spock")," Classes"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," decorated classes are nested within other ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," classes they can be overridden still ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," at the\nclass specific level. ",(0,i.kt)("inlineCode",{parentName:"p"},"spock")," will internally handle mapping of definitions within a class to nested classes."),(0,i.kt)("p",null,"For instance, let's create a complex set of nested classes and Enums:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@spock\nclass BaseDoubleNestedConfig:\n    param_base: int = 1\n\n\n@spock\nclass FirstDoubleNestedConfig(BaseDoubleNestedConfig):\n    h_factor: float = 0.95\n    v_factor: float = 0.95\n\n\n@spock\nclass SecondDoubleNestedConfig(BaseDoubleNestedConfig):\n    morph_param: float = 0.1\n\n\nclass DoubleNestedEnum(Enum):\n    first = FirstDoubleNestedConfig\n    second = SecondDoubleNestedConfig\n\n\n@spock\nclass SingleNestedConfig:\n    double_nested_config: DoubleNestedEnum = SecondDoubleNestedConfig()\n\n")),(0,i.kt)("p",null,"To override the ",(0,i.kt)("inlineCode",{parentName:"p"},"morph_param")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SecondDoubleNestedConfig")," class we would use the following argument at the\ncommand line, ",(0,i.kt)("inlineCode",{parentName:"p"},"--SecondDoubleNestedConfig.morph_param MY_VALUE"),", even though the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SecondDoubleNestedConfig"),"\nclass is nested within another ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," decorated class, ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleNestedConfig"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"spock")," knows how to map these nested\nclasses and handles all of that internally. Another example, we want to change ",(0,i.kt)("inlineCode",{parentName:"p"},"double_nested_config")," within the\n",(0,i.kt)("inlineCode",{parentName:"p"},"SingleNestedConfig")," class and then override the ",(0,i.kt)("inlineCode",{parentName:"p"},"h_factor")," parameter within the ",(0,i.kt)("inlineCode",{parentName:"p"},"FirstDoubleNestedConfig")," class. Here,\nwe would use ",(0,i.kt)("inlineCode",{parentName:"p"},"--SingleNestedConfig.double_nested_config FirstDoubleNestedConfig")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"FirstDoubleNestedConfig.h_factor MY_VALUE"),". Notice how you don't need to reference the nesting of the classes, as this\ncould get very verbose, but simply reference the value within the class only."),(0,i.kt)("h3",{id:"overriding-listtuple-of-repeated-spock-classes"},"Overriding List/Tuple of Repeated ",(0,i.kt)("inlineCode",{parentName:"h3"},"@spock")," Classes"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of Repeated ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," Classes the syntax is slightly different to allow for the repeated nature of the type.\nGiven the below example code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from spock import spock\nfrom typing import List\n\n\n@spock\nclass NestedListStuff:\n    one: int\n    two: str\n\n@spock\nclass TypeConfig:\n    nested_list: List[NestedListStuff] # To Set Default Value append '= NestedListStuff'\n")),(0,i.kt)("p",null,"With YAML definitions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Nested List configuration\nnested_list: NestedListStuff\nNestedListStuff:\n    - one: 10\n      two: hello\n    - one: 20\n      two: bye\n")),(0,i.kt)("p",null,"We could override the parameters like so (note that the len must match the defined length from the YAML):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ python tutorial.py --config tutorial.yaml --TypeConfig.nested_list.NestedListStuff.one [1,2] \\\n--TypeConfig.nested_list.NestedListStuff.two ['ciao','ciao']\n")),(0,i.kt)("h3",{id:"spock-as-a-drop-in-replacement-for-argparser"},"Spock As a Drop In Replacement For Argparser"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spock")," can easily be used as a drop in replacement for argparser. This means that all parameter definitions as\nrequired to come in from the command line or from setting defaults within the ",(0,i.kt)("inlineCode",{parentName:"p"},"@spock")," decorated classes. Simply do not\npass a ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," or",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," argument at the command line and instead pass in values to all of the automatically generated\ncmd-line arguments. See more information ",(0,i.kt)("a",{parentName:"p",href:"https://fidelity.github.io/spock/docs/ArgParser-Replacement/"},"here"),"."))}m.isMDXComponent=!0}}]);