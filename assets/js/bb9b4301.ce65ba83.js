"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2016:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_label:"builder",title:"builder"},o=void 0,p={unversionedId:"reference/builder",id:"reference/builder",isDocsHomePage:!1,title:"builder",description:"Handles the building/saving of the configurations from the Spock config classes",source:"@site/docs/reference/builder.md",sourceDirName:"reference",slug:"/reference/builder",permalink:"/spock/reference/builder",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/reference/builder.md",tags:[],version:"current",frontMatter:{sidebar_label:"builder",title:"builder"},sidebar:"api",previous:{title:"wrappers",permalink:"/spock/reference/backend/wrappers"},next:{title:"exceptions",permalink:"/spock/reference/exceptions"}},u=[{value:"ConfigArgBuilder Objects",id:"configargbuilder-objects",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Handles the building/saving of the configurations from the Spock config classes"),(0,r.kt)("h2",{id:"configargbuilder-objects"},"ConfigArgBuilder Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ConfigArgBuilder()\n")),(0,r.kt)("p",null,"Automatically generates dataclass instances from config file(s)"),(0,r.kt)("p",null,"This class builds out necessary arguments from *args classes, reads\nthe arguments from specified config file(s), and subsequently (via chained\ncall to generate) generates each class instance based on the necessary\nfield values for each backend class instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_args")," - all command line args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_arg_namespace")," - generated argument namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_builder_obj")," - instance of a BaseBuilder class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_dict_args")," - dictionary args from the command line"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_payload_obj")," - instance of a BasePayload class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_saver_obj")," - instance of a BaseSaver class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_tune_payload_obj")," - payload for tuner related objects -- instance of TunerPayload class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_tune_obj")," - instance of TunerBuilder class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_tuner_interface")," - interface that handles the underlying library for sampling -- instance of TunerInterface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_tuner_state")," - current state of the hyper-parameter sampler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_tune_namespace")," - namespace that hold the generated tuner related parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_sample_count")," - current call to the sample function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_fixed_uuid")," - fixed uuid to write the best file to the same path\n_configs = configs if configs is None else ","[Path(c) for c in configs]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_lazy")," - flag to lazily find @spock decorated classes registered within sys.modules",'["',"spock",'"]',".backend.config\nthus alleviating the need to pass all @spock decorated classes to *args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_no_cmd_line")," - turn off cmd line args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_desc")," - description for help")),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(*args, *, configs: typing.Optional[typing.List] = None, desc: str = "", lazy: bool = False, no_cmd_line: bool = False, s3_config=None, **kwargs, ,)\n')),(0,r.kt)("p",null,"Init call for ConfigArgBuilder"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*args")," - tuple of spock decorated classes to process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configs")," - list of config paths"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"desc")," - description for help"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lazy")," - attempts to lazily find @spock decorated classes registered within sys.modules",'["',"spock",'"]',".backend.config\nas well as the parents of any lazily inherited @spock class\nthus alleviating the need to pass all @spock decorated classes to *args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no_cmd_line")," - turn off cmd line args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3_config")," - s3Config object for S3 support"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," - keyword args")),(0,r.kt)("h4",{id:"__call__"},"_","_","call","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __call__(*args, **kwargs)\n")),(0,r.kt)("p",null,"Call to self to allow chaining"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*args")," - non-keyword args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," - keyword args")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConfigArgBuilder")," - self instance")),(0,r.kt)("h4",{id:"generate"},"generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def generate()\n")),(0,r.kt)("p",null,"Generate method that returns the actual argument namespace"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  argument namespace consisting of all config classes"),(0,r.kt)("h4",{id:"tuner_status"},"tuner","_","status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef tuner_status()\n")),(0,r.kt)("p",null,"Returns a dictionary of all the necessary underlying tuner internals to report the result"),(0,r.kt)("h4",{id:"best"},"best"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef best()\n")),(0,r.kt)("p",null,"Returns a Spockspace of the best hyper-parameter config and the associated metric value"),(0,r.kt)("h4",{id:"sample"},"sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def sample()\n")),(0,r.kt)("p",null,"Sample method that constructs a namespace from the fixed parameters and samples from the tuner space to\ngenerate a Spockspace derived from both"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  argument namespace(s) -- fixed + drawn sample from tuner backend"),(0,r.kt)("h4",{id:"tuner"},"tuner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def tuner(tuner_config)\n")),(0,r.kt)("p",null,"Chained call that builds the tuner interface for either optuna or ax depending upon the type of the tuner_obj"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuner_config")," - a class of type optuna.study.Study or AX****")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  self so that functions can be chained"),(0,r.kt)("h4",{id:"_print_usage_and_exit"},"_","print","_","usage","_","and","_","exit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _print_usage_and_exit(msg=None, sys_exit=True, exit_code=1)\n")),(0,r.kt)("p",null,"Prints the help message and exits"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg")," - message to print pre exit")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  None"),(0,r.kt)("h4",{id:"_handle_tuner_objects"},"_","handle","_","tuner","_","objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _handle_tuner_objects(tune_args, s3_config, kwargs)\n")),(0,r.kt)("p",null,"Handles creating the tuner builder object if @spockTuner classes were passed in"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tune_args")," - list of tuner classes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3_config")," - s3Config object for S3 support"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kwargs")," - optional keyword args")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  tuner builder object or None"),(0,r.kt)("h4",{id:"_verify_attr"},"_","verify","_","attr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _verify_attr(args: typing.Tuple)\n")),(0,r.kt)("p",null,"Verifies that all the input classes are attr based"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - tuple of classes passed to the builder")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  None"),(0,r.kt)("h4",{id:"_strip_tune_parameters"},"_","strip","_","tune","_","parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _strip_tune_parameters(args: typing.Tuple)\n")),(0,r.kt)("p",null,"Separates the fixed arguments from any hyper-parameter arguments"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - tuple of classes passed to the builder")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed_args")," - list of fixed args"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tune_args")," - list of args destined for a tuner backend")),(0,r.kt)("h4",{id:"_handle_cmd_line"},"_","handle","_","cmd","_","line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _handle_cmd_line()\n")),(0,r.kt)("p",null,"Handle all cmd line related tasks"),(0,r.kt)("p",null,"Config paths can enter from either the command line or be added in the class init call\nas a kwarg (configs=[]) -- also trigger the building of the cmd line overrides for each fixed and\ntunable objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - namespace of args")),(0,r.kt)("h4",{id:"_build_override_parsers"},"_","build","_","override","_","parsers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _build_override_parsers(desc)\n")),(0,r.kt)("p",null,"Creates parsers for command-line overrides"),(0,r.kt)("p",null,"Builds the basic command line parser for configs and help then iterates through each attr instance to make\nnamespace specific cmd line override parsers -- handles calling both the fixed and tunable objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"desc")," - argparser description")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - argument namespace")),(0,r.kt)("h4",{id:"_get_from_kwargs"},"_","get","_","from","_","kwargs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _get_from_kwargs(args, configs)\n")),(0,r.kt)("p",null,"Get configs from the configs kwarg"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - argument namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configs")," - config kwarg")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - arg namespace")),(0,r.kt)("h4",{id:"_get_payload"},"_","get","_","payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _get_payload(payload_obj, input_classes, ignore_args: typing.List)\n")),(0,r.kt)("p",null,"Get the parameter payload from the config file(s)"),(0,r.kt)("p",null,"Calls the various ways to get configs and then parses to retrieve the parameter payload - make sure to call\ndeep update so as to not lose some parameters when only partially updating the payload"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload_obj")," - current payload object to call"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input_classes")," - classes to use to get payload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignore_args")," - args that were decorated for hyper-parameter tuning")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")," - dictionary of parameter values")),(0,r.kt)("h4",{id:"_save"},"_","save"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def _save(payload, file_name: str = None, user_specified_path: Path = None, create_save_path: bool = True, extra_info: bool = True, file_extension: str = ".yaml", tuner_payload=None, fixed_uuid=None)\n')),(0,r.kt)("p",null,"Private interface -- saves the current config setup to file with a UUID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")," - Spockspace to save"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_name")," - name of file (will be appended with .spock.cfg.file_extension) -- falls back to just uuid if None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user_specified_path")," - if user provides a path it will be used as the path to write"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_save_path")," - bool to create the path to save if called"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extra_info")," - additional info to write to saved config (run date and git info)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_extension")," - file type to write (default: yaml)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuner_payload")," - tuner level payload (unsampled)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed_uuid")," - fixed uuid to allow for file overwrite")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  self so that functions can be chained"),(0,r.kt)("h4",{id:"save"},"save"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def save(file_name: str = None, user_specified_path: typing.Union[Path, str] = None, create_save_path: bool = True, extra_info: bool = True, file_extension: str = ".yaml", add_tuner_sample: bool = False)\n')),(0,r.kt)("p",null,"Saves the current config setup to file with a UUID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_name")," - name of file (will be appended with .spock.cfg.file_extension) -- falls back to just uuid if None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user_specified_path")," - if user provides a path it will be used as the path to write"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_save_path")," - bool to create the path to save if called"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extra_info")," - additional info to write to saved config (run date and git info)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_extension")," - file type to write (default: yaml)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"append_tuner_state")," - save the current tuner sample to the payload")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  self so that functions can be chained"),(0,r.kt)("h4",{id:"save_best"},"save","_","best"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def save_best(file_name: str = None, user_specified_path: Path = None, create_save_path: bool = True, extra_info: bool = True, file_extension: str = ".yaml")\n')),(0,r.kt)("p",null,"Saves the current best config setup to file"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_name")," - name of file (will be appended with .spock.cfg.file_extension) -- falls back to just uuid if None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user_specified_path")," - if user provides a path it will be used as the path to write"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_save_path")," - bool to create the path to save if called"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extra_info")," - additional info to write to saved config (run date and git info)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_extension")," - file type to write (default: yaml)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  self so that functions can be chained"),(0,r.kt)("h4",{id:"config_2_dict"},"config","_","2","_","dict"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef config_2_dict()\n")),(0,r.kt)("p",null,"Dictionary representation of the arg payload"))}c.isMDXComponent=!0}}]);