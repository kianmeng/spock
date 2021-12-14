"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[486],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return t?i.createElement(m,o(o({ref:n},l),{},{components:t})):i.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3118:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],c={},s="Saving",p={unversionedId:"basics/Saving",id:"basics/Saving",isDocsHomePage:!1,title:"Saving",description:"The current configuration of running python code can be saved to file by chaining the save() method before",source:"@site/docs/basics/Saving.md",sourceDirName:"basics",slug:"/basics/Saving",permalink:"/spock/basics/Saving",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/basics/Saving.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuration Files",permalink:"/spock/basics/Configuration-Files"},next:{title:"Run",permalink:"/spock/basics/Run"}},l=[{value:"What Does spock Save?",id:"what-does-spock-save",children:[]},{value:"Specify spock Special Parameter Type",id:"specify-spock-special-parameter-type",children:[]},{value:"Specify Path In-Line",id:"specify-path-in-line",children:[]},{value:"Does the Directory Exit",id:"does-the-directory-exit",children:[]},{value:"Override UUID Filename",id:"override-uuid-filename",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"saving"},"Saving"),(0,r.kt)("p",null,"The current configuration of running python code can be saved to file by chaining the ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," method before\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"generate()")," call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigArgBuilder")," class. ",(0,r.kt)("inlineCode",{parentName:"p"},"spock")," supports two different ways to specify the write path\nand supports multiple output formats (YAML, TOML, or JSON -- via the ",(0,r.kt)("inlineCode",{parentName:"p"},"file_extension")," keyword argument). Most\nimportantly, the saved markdown file can be used as the configuration input to reproduce prior runtime configurations."),(0,r.kt)("h3",{id:"what-does-spock-save"},"What Does spock Save?"),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"spock")," will append extra information (via the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra_info")," kwarg) as well as the entire state of the\nconfiguration object. Extra info includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git Info: Branch, Commit ID (SHA-1), Commit Date, Status (e.g. dirty), Origin"),(0,r.kt)("li",{parentName:"ul"},"Python Info: Executable Path, Version, Script Entrypoint"),(0,r.kt)("li",{parentName:"ul"},"Run Information: Date, Time"),(0,r.kt)("li",{parentName:"ul"},"Env Information: Machine FQDN, Run w/ Docker, Run w/ Kubernetes "),(0,r.kt)("li",{parentName:"ul"},"Spock Version")),(0,r.kt)("p",null,"For instance, here is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial.py")," saved ",(0,r.kt)("inlineCode",{parentName:"p"},".toml")," output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Spock Version: v2.1.5+0.gf9bf3bc.dirty\n# Machine FQDN: XXXXX.yyy.com\n# Python Executable: /Users/XXXXX/.virtualenvs/spock/bin/python\n# Python Version: 3.8.5\n# Python Script: /XXXX/open_source/spock/examples/tutorial/basic/tutorial.py\n# Run Date: 2021-05-24\n# Run Time: 13:33:41\n# Run w/ Docker: False\n# Run w/ Kubernetes: False\n# Git Branch: master\n# Git Commit: f9bf3bca0098a98b994eaa2aeb257f0023704e32\n# Git Date: 2021-05-10 10:33:56-04:00\n# Git Status: DIRTY\n# Git Origin: https://github.com/fidelity/spock.git\n\n[ModelConfig]\nsave_path = "/tmp"\nn_features = 64\ndropout = [ 0.2, 0.1,]\nhidden_sizes = [ 32, 32, 16,]\nactivation = "relu"\n')),(0,r.kt)("h3",{id:"specify-spock-special-parameter-type"},"Specify spock Special Parameter Type"),(0,r.kt)("p",null,"We simply specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"SavePath")," in a spock config, which is a special argument type that is used to set the\nsave path from a configuration file."),(0,r.kt)("p",null,"Adding to: ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Activation(Enum):\n    relu = 'relu'\n    gelu = 'gelu'\n    tanh = 'tanh'\n\n\n@spock\nclass ModelConfig:\n    save_path: SavePath\n    n_features: int\n    dropout: List[float]\n    hidden_sizes: Tuple[int, int, int]\n    activation: Activation\n")),(0,r.kt)("p",null,"And adding in the chained ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," call..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def main():\n    # A simple description\n    description = 'spock Tutorial'\n    # Build out the parser by passing in Spock config objects as *args after description\n    config = ConfigArgBuilder(ModelConfig, desc=description).save(file_extension='.toml').generate()\n    # One can now access the Spock config object by class name with the returned namespace\n    # For instance...\n    print(config.ModelConfig)\n")),(0,r.kt)("p",null,"Adding the output path to our configuration file: ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# tutorial.yaml\n################\n# Special Key\nsave_path: /tmp\n# ModelConfig\nn_features: 64\ndropout: [0.2, 0.1]\nhidden_sizes: [32, 32, 16]\nactivation: relu\n")),(0,r.kt)("h3",{id:"specify-path-in-line"},"Specify Path In-Line"),(0,r.kt)("p",null,"Here we simply specify the path when calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," method. In: ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def main():\n    # A simple description\n    description = 'spock Tutorial'\n    # Build out the parser by passing in Spock config objects as *args after description\n    config = ConfigArgBuilder(ModelConfig, desc=description).save(user_specified_path='/tmp').generate()\n    # One can now access the Spock config object by class name with the returned namespace\n    # For instance...\n    print(config.ModelConfig)\n")),(0,r.kt)("h3",{id:"does-the-directory-exit"},"Does the Directory Exit"),(0,r.kt)("p",null,"In either case, if the save path does not exist, it will not be created by default. To change this behavior,\nset ",(0,r.kt)("inlineCode",{parentName:"p"},"create_save_path")," when creating the builder."),(0,r.kt)("p",null,"In: ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def main():\n    # A simple description\n    description = 'spock Tutorial'\n    # Build out the parser by passing in Spock config objects as *args after description\n    config = ConfigArgBuilder(ModelConfig, desc=description).save(create_save_path=True).generate()\n    # One can now access the Spock config object by class name with the returned namespace\n    # For instance...\n    print(config.ModelConfig)\n")),(0,r.kt)("h3",{id:"override-uuid-filename"},"Override UUID Filename"),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"spock")," uses an automatically generated UUID as the filename when saving. This can be overridden with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"file_name")," keyword argument. The specified filename will be appended with .spock.cfg.file_extension (e.g. .yaml,\n.toml or. json)."),(0,r.kt)("p",null,"In: ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def main():\n    # A simple description\n    description = 'spock Tutorial'\n    # Build out the parser by passing in Spock config objects as *args after description\n    config = ConfigArgBuilder(ModelConfig, desc=description).save(file_name='cool_name_here').generate()\n    # One can now access the Spock config object by class name with the returned namespace\n    # For instance...\n    print(config.ModelConfig)\n")))}d.isMDXComponent=!0}}]);