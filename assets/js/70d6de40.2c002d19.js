"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={},s="Quick Start",l={unversionedId:"Quick-Start",id:"Quick-Start",isDocsHomePage:!1,title:"Quick Start",description:"This is a quick and dirty guide to getting up and running with spock. Read the",source:"@site/docs/Quick-Start.md",sourceDirName:".",slug:"/Quick-Start",permalink:"/spock/Quick-Start",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/Quick-Start.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/spock/Installation"},next:{title:"Drop In Replacement For Argparser",permalink:"/spock/ArgParser-Replacement"}},c=[{value:"TL;DR",id:"tldr",children:[]},{value:"Simple Example",id:"simple-example",children:[]},{value:"Spock As a Drop In Replacement For Argparser",id:"spock-as-a-drop-in-replacement-for-argparser",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"This is a quick and dirty guide to getting up and running with ",(0,o.kt)("inlineCode",{parentName:"p"},"spock"),". Read the\n",(0,o.kt)("a",{parentName:"p",href:"/spock/basics/About"},"Basic Tutorial")," as a simple guide and then explore more\n",(0,o.kt)("a",{parentName:"p",href:"/spock/advanced_features/About"},"Advanced Features")," for in-depth usage."),(0,o.kt)("p",null,"All examples can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fidelity/spock/blob/master/examples"},"here"),"."),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import the necessary components from ",(0,o.kt)("inlineCode",{parentName:"li"},"spock")),(0,o.kt)("li",{parentName:"ol"},"Create a basic Python class, decorate it with ",(0,o.kt)("inlineCode",{parentName:"li"},"@spock")),(0,o.kt)("li",{parentName:"ol"},"Define your parameters in the class (using the typing module if needed)"),(0,o.kt)("li",{parentName:"ol"},"Use the defined parameters in your code "),(0,o.kt)("li",{parentName:"ol"},"Create a configuration file"),(0,o.kt)("li",{parentName:"ol"},"Run your code with --config /path/to/config")),(0,o.kt)("h3",{id:"simple-example"},"Simple Example"),(0,o.kt)("p",null,"A basic python script, ",(0,o.kt)("inlineCode",{parentName:"p"},"simple.py"),"."),(0,o.kt)("p",null,"First we import the necessary functionality from ",(0,o.kt)("inlineCode",{parentName:"p"},"spock"),". We define our class using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@spock")," decorator and our\nparameters with supported argument types from the ",(0,o.kt)("inlineCode",{parentName:"p"},"typing")," library. Lastly, we write simple Google style\ndocstrings to provide command line ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from spock import SpockBuilder\nfrom spock import spock\nfrom typing import List\n\n@spock\nclass BasicConfig:\n    """Basic spock configuration for example purposes\n\n    Attributes:\n        parameter: simple boolean that flags rounding\n        fancy_parameter: parameter that multiplies a value\n        fancier_parameter: parameter that gets added to product of val and fancy_parameter\n        most_fancy_parameter: values to apply basic algebra to\n\n    """\n    parameter: bool\n    fancy_parameter: float\n    fancier_parameter: float\n    most_fancy_parameter: List[int]\n')),(0,o.kt)("p",null,"Next let's add a simple function to our script. The function takes as an argument a ",(0,o.kt)("inlineCode",{parentName:"p"},"Spockspace")," (in this case we type\nhint within Python so IDEs can autocomplete), thus we access our defined parameters from the class definition above via\ndot notation (just like ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespaces")," as the output from argparsers)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def add_values(config: BasicConfig):\n    # Lets just do some basic algebra here\n    val_sum = sum([(config.fancy_parameter * val) + config.fancier_parameter for val in config.most_fancy_parameter])\n    # If the boolean is true let's round\n    if config.parameter:\n        val_sum = round(val_sum)\n    return val_sum\n")),(0,o.kt)("p",null,"Now, we build out the parameter objects by passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," objects (as ",(0,o.kt)("inlineCode",{parentName:"p"},"*args"),") to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpockBuilder"),"\nand chain call the ",(0,o.kt)("inlineCode",{parentName:"p"},"generate")," method. The returned object contains the defined classes named with the given\n",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," class name which we call a ",(0,o.kt)("inlineCode",{parentName:"p"},"Spockspace"),". We then simply pass ",(0,o.kt)("inlineCode",{parentName:"p"},"config.BasicConfig")," to our function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def main():\n    # Chain the generate function to the class call\n    config = SpockBuilder(BasicConfig, desc='Quick start example').generate()\n    # One can now access the Spock config object by class name with the returned namespace\n    print(config.BasicConfig.parameter)\n    # And pass the namespace to our first function\n    val_sum_namespace = add_values(config.BasicConfig)\n    print(val_sum_namespace)\n\n\nif __name__ == '__main__':\n    main()\n")),(0,o.kt)("p",null,"Next let's create a simple configuration file that sets the values of our parameters. Let's make a YAML file (you can\nalso use TOML or JSON), ",(0,o.kt)("inlineCode",{parentName:"p"},"simple.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Parameters\nparameter: true\nfancy_parameter: 8.8\nfancier_parameter: 64.64\nmost_fancy_parameter: [768, 768, 512, 128]\n")),(0,o.kt)("p",null,"Finally, we would run our script and pass the path to the configuration file to the command line (",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--config"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python simple.py -c simple.yaml\n")),(0,o.kt)("p",null,"To get help for our ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," class and defined parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python simple.py --help\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"usage: /Users/a635179/Documents/git_repos/open_source/spock/examples/quick-start/simple.py -c [--config] config1 [config2, config3, ...]\n\nQuick start example\n\nconfiguration(s):\n\n  BasicConfig (Basic spock configuration for example purposes)\n    parameter               bool         simple boolean that flags rounding (default: False)\n    fancy_parameter         float        parameter that multiplies a value \n    fancier_parameter       float        parameter that gets added to product of val and fancy_parameter \n    most_fancy_parameter    List[int]    values to apply basic algebra to \n")),(0,o.kt)("h3",{id:"spock-as-a-drop-in-replacement-for-argparser"},"Spock As a Drop In Replacement For Argparser"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spock")," can easily be used as a drop in replacement for argparser.\nSee the docs/example ",(0,o.kt)("a",{parentName:"p",href:"https://fidelity.github.io/spock/docs/ArgParser-Replacement/"},"here"),"."))}u.isMDXComponent=!0}}]);