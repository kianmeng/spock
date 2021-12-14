"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||l;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2016:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],p={sidebar_label:"builder",title:"builder"},o=void 0,i={unversionedId:"reference/builder",id:"reference/builder",isDocsHomePage:!1,title:"builder",description:"Handles the building/saving of the configurations from the Spock config classes",source:"@site/docs/reference/builder.md",sourceDirName:"reference",slug:"/reference/builder",permalink:"/spock/reference/builder",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/reference/builder.md",tags:[],version:"current",frontMatter:{sidebar_label:"builder",title:"builder"},sidebar:"api",previous:{title:"wrappers",permalink:"/spock/reference/backend/wrappers"},next:{title:"graph",permalink:"/spock/reference/graph"}},u=[{value:"ConfigArgBuilder Objects",id:"configargbuilder-objects",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Handles the building/saving of the configurations from the Spock config classes"),(0,l.kt)("h2",{id:"configargbuilder-objects"},"ConfigArgBuilder Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ConfigArgBuilder()\n")),(0,l.kt)("p",null,"Automatically generates dataclass instances from config file(s)"),(0,l.kt)("p",null,"This class builds out necessary arguments from *args classes, reads\nthe arguments from specified config file(s), and subsequently (via chained\ncall to generate) generates each class instance based on the necessary\nfield values for each backend class instance"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Attributes"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"_args: all command line args\n_arg_namespace: generated argument namespace\n_builder_obj: instance of a BaseBuilder class\n_dict_args: dictionary args from the command line\n_payload_obj: instance of a BasePayload class\n_saver_obj: instance of a BaseSaver class\n_tune_payload_obj: payload for tuner related objects -- instance of TunerPayload class\n_tune_obj: instance of TunerBuilder class\n_tuner_interface: interface that handles the underlying library for sampling -- instance of TunerInterface\n_tuner_state: current state of the hyper-parameter sampler\n_tune_namespace: namespace that hold the generated tuner related parameters\n_sample_count: current call to the sample function\n_fixed_uuid: fixed uuid to write the best file to the same path\n")),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(*args, *, configs: typing.Optional[typing.List] = None, desc: str = "", no_cmd_line: bool = False, s3_config=None, **kwargs, ,)\n')),(0,l.kt)("p",null,"Init call for ConfigArgBuilder"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*args: tuple of spock decorated classes to process\nconfigs: list of config paths\ndesc: description for help\nno_cmd_line: turn off cmd line args\ns3_config: s3Config object for S3 support\n**kwargs: keyword args\n")),(0,l.kt)("h4",{id:"__call__"},"_","_","call","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __call__(*args, **kwargs)\n")),(0,l.kt)("p",null,"Call to self to allow chaining"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*args: non-keyword args\n**kwargs: keyword args\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ConfigArgBuilder: self instance\n")),(0,l.kt)("h4",{id:"generate"},"generate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate()\n")),(0,l.kt)("p",null,"Generate method that returns the actual argument namespace"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"argument namespace consisting of all config classes\n")),(0,l.kt)("h4",{id:"tuner_status"},"tuner","_","status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef tuner_status()\n")),(0,l.kt)("p",null,"Returns a dictionary of all the necessary underlying tuner internals to report the result"),(0,l.kt)("h4",{id:"best"},"best"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef best()\n")),(0,l.kt)("p",null,"Returns a Spockspace of the best hyper-parameter config and the associated metric value"),(0,l.kt)("h4",{id:"sample"},"sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sample()\n")),(0,l.kt)("p",null,"Sample method that constructs a namespace from the fixed parameters and samples from the tuner space to\ngenerate a Spockspace derived from both"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"argument namespace(s) -- fixed + drawn sample from tuner backend\n")),(0,l.kt)("h4",{id:"tuner"},"tuner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def tuner(tuner_config)\n")),(0,l.kt)("p",null,"Chained call that builds the tuner interface for either optuna or ax depending upon the type of the tuner_obj"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tuner_config: a class of type optuna.study.Study or AX****\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"self so that functions can be chained\n")),(0,l.kt)("h4",{id:"_print_usage_and_exit"},"_","print","_","usage","_","and","_","exit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def _print_usage_and_exit(msg=None, sys_exit=True, exit_code=1)\n")),(0,l.kt)("p",null,"Prints the help message and exits"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"msg: message to print pre exit\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"None\n")),(0,l.kt)("h4",{id:"_handle_tuner_objects"},"_","handle","_","tuner","_","objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _handle_tuner_objects(tune_args, s3_config, kwargs)\n")),(0,l.kt)("p",null,"Handles creating the tuner builder object if @spockTuner classes were passed in"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tune_args: list of tuner classes\ns3_config: s3Config object for S3 support\nkwargs: optional keyword args\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tuner builder object or None\n")),(0,l.kt)("h4",{id:"_verify_attr"},"_","verify","_","attr"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _verify_attr(args: typing.Tuple)\n")),(0,l.kt)("p",null,"Verifies that all the input classes are attr based"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"args: tuple of classes passed to the builder\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"None\n")),(0,l.kt)("h4",{id:"_strip_tune_parameters"},"_","strip","_","tune","_","parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _strip_tune_parameters(args: typing.Tuple)\n")),(0,l.kt)("p",null,"Separates the fixed arguments from any hyper-parameter arguments"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"args: tuple of classes passed to the builder\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fixed_args: list of fixed args\ntune_args: list of args destined for a tuner backend\n")),(0,l.kt)("h4",{id:"_handle_cmd_line"},"_","handle","_","cmd","_","line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def _handle_cmd_line()\n")),(0,l.kt)("p",null,"Handle all cmd line related tasks"),(0,l.kt)("p",null,"Config paths can enter from either the command line or be added in the class init call\nas a kwarg (configs=[]) -- also trigger the building of the cmd line overrides for each fixed and\ntunable objects"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"args: namespace of args\n")),(0,l.kt)("h4",{id:"_build_override_parsers"},"_","build","_","override","_","parsers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def _build_override_parsers(desc)\n")),(0,l.kt)("p",null,"Creates parsers for command-line overrides"),(0,l.kt)("p",null,"Builds the basic command line parser for configs and help then iterates through each attr instance to make\nnamespace specific cmd line override parsers -- handles calling both the fixed and tunable objects"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"desc: argparser description\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"args: argument namespace\n")),(0,l.kt)("h4",{id:"_get_from_kwargs"},"_","get","_","from","_","kwargs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef _get_from_kwargs(args, configs)\n")),(0,l.kt)("p",null,"Get configs from the configs kwarg"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"args: argument namespace\nconfigs: config kwarg\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"args: arg namespace\n")),(0,l.kt)("h4",{id:"_get_payload"},"_","get","_","payload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def _get_payload(payload_obj, input_classes, ignore_args: typing.List)\n")),(0,l.kt)("p",null,"Get the parameter payload from the config file(s)"),(0,l.kt)("p",null,"Calls the various ways to get configs and then parses to retrieve the parameter payload - make sure to call\ndeep update so as to not lose some parameters when only partially updating the payload"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"payload_obj: current payload object to call\ninput_classes: classes to use to get payload\nignore_args: args that were decorated for hyper-parameter tuning\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"payload: dictionary of parameter values\n")),(0,l.kt)("h4",{id:"_save"},"_","save"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def _save(payload, file_name: str = None, user_specified_path: Path = None, create_save_path: bool = True, extra_info: bool = True, file_extension: str = ".yaml", tuner_payload=None, fixed_uuid=None)\n')),(0,l.kt)("p",null,"Private interface -- saves the current config setup to file with a UUID"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"payload: Spockspace to save\nfile_name: name of file (will be appended with .spock.cfg.file_extension) -- falls back to just uuid if None\nuser_specified_path: if user provides a path it will be used as the path to write\ncreate_save_path: bool to create the path to save if called\nextra_info: additional info to write to saved config (run date and git info)\nfile_extension: file type to write (default: yaml)\ntuner_payload: tuner level payload (unsampled)\nfixed_uuid: fixed uuid to allow for file overwrite\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"self so that functions can be chained\n")),(0,l.kt)("h4",{id:"save"},"save"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def save(file_name: str = None, user_specified_path: typing.Union[Path, str] = None, create_save_path: bool = True, extra_info: bool = True, file_extension: str = ".yaml", add_tuner_sample: bool = False)\n')),(0,l.kt)("p",null,"Saves the current config setup to file with a UUID"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"file_name: name of file (will be appended with .spock.cfg.file_extension) -- falls back to just uuid if None\nuser_specified_path: if user provides a path it will be used as the path to write\ncreate_save_path: bool to create the path to save if called\nextra_info: additional info to write to saved config (run date and git info)\nfile_extension: file type to write (default: yaml)\nappend_tuner_state: save the current tuner sample to the payload\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"self so that functions can be chained\n")),(0,l.kt)("h4",{id:"save_best"},"save","_","best"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def save_best(file_name: str = None, user_specified_path: Path = None, create_save_path: bool = True, extra_info: bool = True, file_extension: str = ".yaml")\n')),(0,l.kt)("p",null,"Saves the current best config setup to file"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"file_name: name of file (will be appended with .spock.cfg.file_extension) -- falls back to just uuid if None\nuser_specified_path: if user provides a path it will be used as the path to write\ncreate_save_path: bool to create the path to save if called\nextra_info: additional info to write to saved config (run date and git info)\nfile_extension: file type to write (default: yaml)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"self so that functions can be chained\n")),(0,l.kt)("h4",{id:"config_2_dict"},"config","_","2","_","dict"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef config_2_dict()\n")),(0,l.kt)("p",null,"Dictionary representation of the arg payload"))}d.isMDXComponent=!0}}]);