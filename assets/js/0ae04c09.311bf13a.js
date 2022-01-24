"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1462],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4955:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},l="Saving Hyper-Parameter Configs -- Base, Samples, and Best",p={unversionedId:"addons/tuner/Saving",id:"addons/tuner/Saving",isDocsHomePage:!1,title:"Saving Hyper-Parameter Configs -- Base, Samples, and Best",description:"spock provides the capability to save the configuration for each stage of hyper-parameter tuning.",source:"@site/docs/addons/tuner/Saving.md",sourceDirName:"addons/tuner",slug:"/addons/tuner/Saving",permalink:"/spock/addons/tuner/Saving",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/addons/tuner/Saving.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Optuna Support",permalink:"/spock/addons/tuner/Optuna"},next:{title:"Contributing",permalink:"/spock/contributing"}},c=[{value:"Saving Base Hyper-Parameter Definitions",id:"saving-base-hyper-parameter-definitions",children:[]},{value:"Saving Individual Hyper-Parameter Samples",id:"saving-individual-hyper-parameter-samples",children:[]},{value:"Saving the Best Hyper-Parameter Samples",id:"saving-the-best-hyper-parameter-samples",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"saving-hyper-parameter-configs----base-samples-and-best"},"Saving Hyper-Parameter Configs -- Base, Samples, and Best"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spock")," provides the capability to save the configuration for each stage of hyper-parameter tuning."),(0,i.kt)("h3",{id:"saving-base-hyper-parameter-definitions"},"Saving Base Hyper-Parameter Definitions"),(0,i.kt)("p",null,"First, if we wanted to save the configuration state of the defined hyper-parameter ranges (i.e. the definitions of the\nparameters that are not sampled) we simply chain the ",(0,i.kt)("inlineCode",{parentName:"p"},"save()")," call post ",(0,i.kt)("inlineCode",{parentName:"p"},"tuner()")," call just like we did with basic\n",(0,i.kt)("inlineCode",{parentName:"p"},"spock")," usage. If there are defined hyper-parameters from ",(0,i.kt)("inlineCode",{parentName:"p"},"@spockTuner")," these will automatically get written into the\nmarkdown file along with the fixed parameters."),(0,i.kt)("p",null,"For instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"tune.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\n# Chain the .save call which will dump the hyper-parameter definitions to the configuration file\nattrs_obj = SpockBuilder(\n        LogisticRegressionHP,\n        BasicParams,\n        desc=\"Example Logistic Regression Hyper-Parameter Tuning\",\n).tuner(tuner_config=optuna_config).save(user_specified_path='/tmp')\n")),(0,i.kt)("p",null,"Would result in the following YAML file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"}," BasicParams:\n   max_iter: 150\n   n_trials: 10\n LogisticRegressionHP:\n   c:\n     bounds:\n     - 0.01\n     - 10.0\n     log_scale: true\n     type: float\n   solver:\n     choices:\n     - lbfgs\n     - saga\n     type: str\n")),(0,i.kt)("h3",{id:"saving-individual-hyper-parameter-samples"},"Saving Individual Hyper-Parameter Samples"),(0,i.kt)("p",null,"If we want to save each individual hyper-parameter sample we again use the ",(0,i.kt)("inlineCode",{parentName:"p"},"save()")," call with the addition of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"add_tuner_sample=True")," keyword arg and chain it before the",(0,i.kt)("inlineCode",{parentName:"p"},"sample()")," call. The order might be slightly confusing\nbut this is to allow all methods to return the builder object except for hte ",(0,i.kt)("inlineCode",{parentName:"p"},"sample()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"generate()")," calls\nwhich returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spockspace"),". The saver will append ",(0,i.kt)("inlineCode",{parentName:"p"},"hp.sample.[0-9+]")," to the filename to identify each sample\nconfiguration."),(0,i.kt)("p",null,"For instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"tune.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\n# Now we iterate through a bunch of optuna trials\nfor _ in range(fixed_params.BasicParams.n_trials):\n    hp_attrs = attrs_obj.save(\n        add_tuner_sample=True, user_specified_path="/tmp"\n    ).sample()\n')),(0,i.kt)("p",null,"Would result in ",(0,i.kt)("inlineCode",{parentName:"p"},"n_trials")," files named ",(0,i.kt)("inlineCode",{parentName:"p"},"hp.sample.[0-9]+.{uuid}.spock.cfg"),". For instance opening a file named\n",(0,i.kt)("inlineCode",{parentName:"p"},"hp.sample.1.d1cc7a30-10f0-4d2c-b076-513fe3494566.spock.cfg.yaml")," we would see the first sample set of the\nhyper-parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"}," BasicParams:\n   max_iter: 150\n   n_trials: 10\n LogisticRegressionHP:\n   c: 0.21495978453310358\n   solver: lbfgs\n")),(0,i.kt)("h3",{id:"saving-the-best-hyper-parameter-samples"},"Saving the Best Hyper-Parameter Samples"),(0,i.kt)("p",null,"If we want to keep track of the current/final best hyper-parameter set based on the optimization metric we use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"save_best()")," call on the builder object. This function takes all the same arguments as the ",(0,i.kt)("inlineCode",{parentName:"p"},"save()")," method but\nmaintains only a single configuration file that is the current/final best hyper-parameter configuration. The saver will\nappend ",(0,i.kt)("inlineCode",{parentName:"p"},"hp.best.")," to the filename to identify the best configuration. Note: Make sure this function is only called post\nall backend handling (in the case of Optuna -- the 'tell' call) for the sample or else an exception will be raised as\nthe best configuration will not yet be registered."),(0,i.kt)("p",null,"For instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"tune.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Now we iterate through a bunch of optuna trials\nfor _ in range(fixed_params.BasicParams.n_trials):\n    hp_attrs = attrs_obj.sample()\n    # Use the currently sampled parameters in a simple LogisticRegression from sklearn\n    clf = LogisticRegression(\n        C=hp_attrs.LogisticRegressionHP.c,\n        solver=hp_attrs.LogisticRegressionHP.solver,\n        max_iter=hp_attrs.BasicParams.max_iter\n    )\n    clf.fit(X_train, y_train)\n    val_acc = clf.score(X_valid, y_valid)\n    # Get the status of the tuner -- this dict will contain all the objects needed to update\n    tuner_status = attrs_obj.tuner_status\n    # Pull the study and trials object out of the return dictionary and pass it to the tell call using the study\n    # object\n    tuner_status["study"].tell(tuner_status["trial"], val_acc)\n    # Always save the current best set of hyper-parameters\n    attrs_obj.save_best(user_specified_path=\'/tmp\')\n')))}d.isMDXComponent=!0}}]);