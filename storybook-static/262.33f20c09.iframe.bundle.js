(self.webpackChunkkiwi_design_system=self.webpackChunkkiwi_design_system||[]).push([[262],{"./src/stories/components/atoms/button/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/atoms/button/button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(button_button.A,options),button_button.A&&button_button.A.locals&&button_button.A.locals,__webpack_require__("./src/styles/index.scss");var Button=function(param){var state=param.state,size=param.size,label=param.label,isDisabled=param.isDisabled,isDanger=param.isDanger,onClick=param.onClick,btnClass=classnames_default()({"kiwi-button--disabled":isDisabled,"kiwi-button--danger":isDanger});return react.createElement("button",{type:"button",className:"kiwi-button kiwi-button--".concat(state," kiwi-button--").concat(size," ").concat(btnClass),onClick:onClick},react.createElement("span",{className:"kiwi-text-button--".concat(size)},label))};Button.propTypes={state:prop_types_default().oneOf(["primary","secondary"]),size:prop_types_default().oneOf(["large","medium","small"]),label:prop_types_default().string.isRequired,isDisabled:prop_types_default().bool,isDanger:prop_types_default().bool,onClick:prop_types_default().func},Button.defaultProps={state:"primary",size:"large",label:"Click here",isDisabled:!1,isDanger:!1,onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{state:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},size:{defaultValue:{value:'"large"',computed:!1},description:"",type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"medium"',computed:!1},{value:'"small"',computed:!1}]},required:!1},label:{defaultValue:{value:'"Click here"',computed:!1},description:"",type:{name:"string"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isDanger:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/atoms/button/button.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--kiwi-core-black: #000000;--kiwi-core-green-100: #f6f2cf;--kiwi-core-green-200: #e8f1bc;--kiwi-core-green-300: #ceecab;--kiwi-core-green-400: #ade69a;--kiwi-core-green-500: #89df8b;--kiwi-core-green-600: #77c489;--kiwi-core-green-700: #65aa83;--kiwi-core-green-800: #538e7a;--kiwi-core-green-900: #42736c;--kiwi-core-neutral-100: #f5f5f5;--kiwi-core-neutral-200: #d0cfce;--kiwi-core-neutral-300: #b7b7b7;--kiwi-core-neutral-400: #585858;--kiwi-core-neutral-500: #313131;--kiwi-core-neutral-600: #171717;--kiwi-core-warm-100: #ffe9a4;--kiwi-core-warm-200: #ffd584;--kiwi-core-warm-300: #febc67;--kiwi-core-warm-400: #f6a04e;--kiwi-core-warm-500: #ea8237;--kiwi-core-warm-600: #d96b30;--kiwi-core-warm-700: #c75629;--kiwi-core-warm-800: #b54222;--kiwi-core-warm-900: #a3311c;--kiwi-core-white: #ffffff}:root{--kiwi-semantic-danger: var(--kiwi-core-warm-500);--kiwi-semantic-primary: var(--kiwi-core-green-400);--kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);--kiwi-semantic-secondary: var(--kiwi-core-warm-600)}:root{--kiwi-core-fs-64: 64px;--kiwi-core-fs-48: 48px;--kiwi-core-fs-40: 40px;--kiwi-core-fs-36: 36px;--kiwi-core-fs-32: 32px;--kiwi-core-fs-24: 24px;--kiwi-core-fs-20: 20px;--kiwi-core-fs-16: 16px;--kiwi-core-fs-14: 14px;--kiwi-core-fs-12: 12px;--kiwi-core-ff-primary: "Baloo 2", sans-serif;--kiwi-core-ff-secondary: "Poppins", sans-serif;--kiwi-core-fw-500: 500;--kiwi-core-fw-600: 600;--kiwi-core-fw-700: 700;--kiwi-core-fw-800: 800;--kiwi-core-lh-64: 64px;--kiwi-core-lh-56: 56px;--kiwi-core-lh-48: 48px;--kiwi-core-lh-40: 40px;--kiwi-core-lh-36: 36px;--kiwi-core-lh-32: 32px;--kiwi-core-lh-24: 24px;--kiwi-core-lh-20: 20px;--kiwi-core-lh-16: 16px;--kiwi-core-lh-14: 14px}:root{--kiwi-core-spacing-4: 4px;--kiwi-core-spacing-8: 8px;--kiwi-core-spacing-12: 12px;--kiwi-core-spacing-16: 16px;--kiwi-core-spacing-24: 24px;--kiwi-core-spacing-32: 32px;--kiwi-core-spacing-40: 40px;--kiwi-core-spacing-48: 48px;--kiwi-core-spacing-56: 56px;--kiwi-core-spacing-64: 64px}:root{--kiwi-core-br-4: 4px;--kiwi-core-br-8: 8px;--kiwi-core-br-12: 12px;--kiwi-core-br-16: 16px;--kiwi-core-br-24: 24px;--kiwi-core-br-32: 32px;--kiwi-core-br-40: 40px;--kiwi-core-br-48: 48px;--kiwi-core-br-56: 56px;--kiwi-core-br-64: 64px}:root{--kiwi-core-fast-transition: 0.3s;--kiwi-core-medium-transition: 0.5s;--kiwi-core-slow-transition: 0.8s}:root{--kiwi-button-transition: var(--kiwi-core-medium-transition);--kiwi-button-ff: var(--kiwi-core-ff-primary);--kiwi-button-br: var(--kiwi-core-br-32);--kiwi-button-primary-bg: var(--kiwi-semantic-primary);--kiwi-button-primary-bg-contrast: var(--kiwi-semantic-primary-contrast);--kiwi-button-primary-bg-hover: var(--kiwi-core-white);--kiwi-button-primary-text-color: var(--kiwi-semantic-primary-contrast);--kiwi-button-secondary-bg: var(--kiwi-core-white);--kiwi-button-secondary-bg-hover: var(--kiwi-semantic-primary-contrast);--kiwi-button-secondary-border: var(--kiwi-semantic-primary-contrast);--kiwi-button-secondary-text-color: var(--kiwi-semantic-primary-contrast);--kiwi-button-disabled-bg: var(--kiwi-core-neutral-300);--kiwi-button-disabled-bg-contrast: var(--kiwi-core-neutral-400);--kiwi-button-danger-bg: var(--kiwi-semantic-danger);--kiwi-button-danger-bg-contrast: var(--kiwi-core-white);--kiwi-button-danger-bg-hover: var(--kiwi-core-warm-900);--kiwi-button-danger-border-focus: var(--kiwi-core-warm-900);--kiwi-button-large-ph: var(--kiwi-core-spacing-24);--kiwi-button-large-pv: var(--kiwi-core-spacing-16);--kiwi-button-medium-ph: var(--kiwi-core-spacing-16);--kiwi-button-medium-pv: var(--kiwi-core-spacing-12);--kiwi-button-small-ph: var(--kiwi-core-spacing-12);--kiwi-button-small-pv: var(--kiwi-core-spacing-8)}.kiwi-button{cursor:pointer;display:inline-block;position:relative;border:0;font-family:var(--kiwi-button-ff);border-radius:var(--kiwi-button-br)}.kiwi-button--primary{color:var(--kiwi-button-primary-text-color);background-color:var(--kiwi-button-primary-bg);transition:var(--kiwi-button-transition)}.kiwi-button--primary:hover{box-shadow:0 0 0 1px var(--kiwi-button-primary-bg-contrast);background-color:var(--kiwi-button-primary-bg-hover);transition:var(--kiwi-button-transition)}.kiwi-button--primary:focus{box-shadow:0 0 0 4px var(--kiwi-button-primary-bg-contrast);background-color:var(--kiwi-button-primary-bg)}.kiwi-button--secondary{color:var(--kiwi-button-secondary-text-color);background-color:var(--kiwi-button-secondary-bg);box-shadow:0px 0px 0px 1px inset var(--kiwi-button-secondary-border)}.kiwi-button--secondary:hover:after{content:"";background-color:var(--kiwi-button-secondary-bg-hover);border-radius:var(--kiwi-button-br);position:absolute;right:-5px;left:4px;bottom:-4px;top:4px;width:-webkit-fill-available;height:-webkit-fill-available;z-index:-1}.kiwi-button--secondary:focus{box-shadow:0 0 0 4px var(--kiwi-button-primary-bg-contrast);background-color:var(--kiwi-button-secondary-bg)}.kiwi-button--secondary:focus:after{content:none}.kiwi-button--small{padding:var(--kiwi-button-small-pv) var(--kiwi-button-small-ph)}.kiwi-button--medium{padding:var(--kiwi-button-medium-pv) var(--kiwi-button-medium-ph)}.kiwi-button--large{padding:var(--kiwi-button-large-pv) var(--kiwi-button-large-ph)}.kiwi-button--disabled{pointer-events:none;background-color:var(--kiwi-button-disabled-bg);color:var(--kiwi-button-disabled-bg-contrast);box-shadow:none}.kiwi-button--danger{color:var(--kiwi-button-danger-bg-contrast);background-color:var(--kiwi-button-danger-bg);transition:var(--kiwi-button-transition)}.kiwi-button--danger:hover{background-color:var(--kiwi-button-danger-bg-hover);transition:var(--kiwi-button-transition);box-shadow:none}.kiwi-button--danger:focus{color:var(--kiwi-button-danger-bg-contrast);background-color:var(--kiwi-button-danger-bg);box-shadow:0 0 0 4px var(--kiwi-button-danger-border-focus)}',"",{version:3,sources:["webpack://./src/tokens/colors/core.scss","webpack://./src/tokens/colors/semantic.scss","webpack://./src/tokens/typography.scss","webpack://./src/tokens/spacings.scss","webpack://./src/tokens/border-radius.scss","webpack://./src/tokens/motion.scss","webpack://./src/stories/components/atoms/button/button.tokens.scss","webpack://./src/stories/components/atoms/button/button.scss"],names:[],mappings:"AAAA,MACE,0BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,0BAAA,CC1BF,MACI,iDAAA,CACA,mDAAA,CACA,4DAAA,CACA,oDAAA,CCJJ,MAEI,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,6CAAA,CACA,+CAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCjCJ,MACI,0BAAA,CACA,0BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CCVJ,MACI,qBAAA,CACA,qBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCVJ,MACI,iCAAA,CACA,mCAAA,CACA,iCAAA,CCHJ,MAEI,4DAAA,CACA,6CAAA,CACA,wCAAA,CAGA,sDAAA,CACA,wEAAA,CACA,sDAAA,CACA,uEAAA,CAGA,kDAAA,CACA,uEAAA,CACA,qEAAA,CACA,yEAAA,CAGA,uDAAA,CACA,gEAAA,CAGA,oDAAA,CACA,wDAAA,CACA,wDAAA,CACA,4DAAA,CAGA,mDAAA,CACA,mDAAA,CAGA,oDAAA,CACA,oDAAA,CAGA,mDAAA,CACA,kDAAA,CCnCJ,aACE,cAAA,CACA,oBAAA,CACA,iBAAA,CACA,QAAA,CACA,iCAAA,CACA,mCAAA,CAEA,sBACE,2CAAA,CACA,8CAAA,CACA,wCAAA,CAEA,4BACE,2DAAA,CACA,oDAAA,CACA,wCAAA,CAGF,4BACE,2DAAA,CACA,8CAAA,CAIJ,wBACE,6CAAA,CACA,gDAAA,CACA,oEAAA,CAGE,oCACE,UAAA,CACA,sDAAA,CACA,mCAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,WAAA,CACA,OAAA,CACA,4BAAA,CACA,6BAAA,CACA,UAAA,CAIJ,8BACE,2DAAA,CACA,gDAAA,CACA,oCACE,YAAA,CAKN,oBACE,+DAAA,CAGF,qBACE,iEAAA,CAGF,oBACE,+DAAA,CAGF,uBACE,mBAAA,CACA,+CAAA,CACA,6CAAA,CACA,eAAA,CAGF,qBACE,2CAAA,CACA,6CAAA,CACA,wCAAA,CAEA,2BACE,mDAAA,CACA,wCAAA,CACA,eAAA,CAGF,2BACE,2CAAA,CACA,6CAAA,CACA,2DAAA",sourcesContent:[":root {\n  --kiwi-core-black: #000000;\n  --kiwi-core-green-100: #f6f2cf;\n  --kiwi-core-green-200: #e8f1bc;\n  --kiwi-core-green-300: #ceecab;\n  --kiwi-core-green-400: #ade69a;\n  --kiwi-core-green-500: #89df8b;\n  --kiwi-core-green-600: #77c489;\n  --kiwi-core-green-700: #65aa83;\n  --kiwi-core-green-800: #538e7a;\n  --kiwi-core-green-900: #42736c;\n  --kiwi-core-neutral-100: #f5f5f5;\n  --kiwi-core-neutral-200: #d0cfce;\n  --kiwi-core-neutral-300: #b7b7b7;\n  --kiwi-core-neutral-400: #585858;\n  --kiwi-core-neutral-500: #313131;\n  --kiwi-core-neutral-600: #171717;\n  --kiwi-core-warm-100: #ffe9a4;\n  --kiwi-core-warm-200: #ffd584;\n  --kiwi-core-warm-300: #febc67;\n  --kiwi-core-warm-400: #f6a04e;\n  --kiwi-core-warm-500: #ea8237;\n  --kiwi-core-warm-600: #d96b30;\n  --kiwi-core-warm-700: #c75629;\n  --kiwi-core-warm-800: #b54222;\n  --kiwi-core-warm-900: #a3311c;\n  --kiwi-core-white: #ffffff;\n}\n",":root {\n    --kiwi-semantic-danger: var(--kiwi-core-warm-500);\n    --kiwi-semantic-primary: var(--kiwi-core-green-400);\n    --kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);\n    --kiwi-semantic-secondary: var(--kiwi-core-warm-600);\n}",':root {\n    /* Font size */\n    --kiwi-core-fs-64: 64px;\n    --kiwi-core-fs-48: 48px;\n    --kiwi-core-fs-40: 40px;\n    --kiwi-core-fs-36: 36px;\n    --kiwi-core-fs-32: 32px;\n    --kiwi-core-fs-24: 24px;\n    --kiwi-core-fs-20: 20px;\n    --kiwi-core-fs-16: 16px;\n    --kiwi-core-fs-14: 14px;\n    --kiwi-core-fs-12: 12px;\n\n    /* Font family */\n    --kiwi-core-ff-primary: "Baloo 2", sans-serif;\n    --kiwi-core-ff-secondary: "Poppins", sans-serif;\n\n    /* Font weight */\n    --kiwi-core-fw-500: 500;\n    --kiwi-core-fw-600: 600;\n    --kiwi-core-fw-700: 700;\n    --kiwi-core-fw-800: 800;\n\n    /* Line height */\n    --kiwi-core-lh-64: 64px;\n    --kiwi-core-lh-56: 56px;\n    --kiwi-core-lh-48: 48px;\n    --kiwi-core-lh-40: 40px;\n    --kiwi-core-lh-36: 36px;\n    --kiwi-core-lh-32: 32px;\n    --kiwi-core-lh-24: 24px;\n    --kiwi-core-lh-20: 20px;\n    --kiwi-core-lh-16: 16px;\n    --kiwi-core-lh-14: 14px;\n}',":root {\n    --kiwi-core-spacing-4: 4px;\n    --kiwi-core-spacing-8: 8px;\n    --kiwi-core-spacing-12: 12px;\n    --kiwi-core-spacing-16: 16px;\n    --kiwi-core-spacing-24: 24px;\n    --kiwi-core-spacing-32: 32px;\n    --kiwi-core-spacing-40: 40px;\n    --kiwi-core-spacing-48: 48px;\n    --kiwi-core-spacing-56: 56px;\n    --kiwi-core-spacing-64: 64px;\n}",":root {\n    --kiwi-core-br-4: 4px;\n    --kiwi-core-br-8: 8px;\n    --kiwi-core-br-12: 12px;\n    --kiwi-core-br-16: 16px;\n    --kiwi-core-br-24: 24px;\n    --kiwi-core-br-32: 32px;\n    --kiwi-core-br-40: 40px;\n    --kiwi-core-br-48: 48px;\n    --kiwi-core-br-56: 56px;\n    --kiwi-core-br-64: 64px;\n}",":root {\n    --kiwi-core-fast-transition: 0.3s;\n    --kiwi-core-medium-transition: 0.5s;\n    --kiwi-core-slow-transition: 0.8s;\n}",":root {\n    /* Global */\n    --kiwi-button-transition: var(--kiwi-core-medium-transition);\n    --kiwi-button-ff: var(--kiwi-core-ff-primary);\n    --kiwi-button-br: var(--kiwi-core-br-32);\n\n    /* State -- Primary */\n    --kiwi-button-primary-bg: var(--kiwi-semantic-primary);\n    --kiwi-button-primary-bg-contrast: var(--kiwi-semantic-primary-contrast);\n    --kiwi-button-primary-bg-hover: var(--kiwi-core-white);\n    --kiwi-button-primary-text-color: var(--kiwi-semantic-primary-contrast);\n\n    /* State -- Secondary */\n    --kiwi-button-secondary-bg: var(--kiwi-core-white);\n    --kiwi-button-secondary-bg-hover: var(--kiwi-semantic-primary-contrast);\n    --kiwi-button-secondary-border: var(--kiwi-semantic-primary-contrast);\n    --kiwi-button-secondary-text-color: var(--kiwi-semantic-primary-contrast);\n\n    /* State -- Disabled */\n    --kiwi-button-disabled-bg: var(--kiwi-core-neutral-300);\n    --kiwi-button-disabled-bg-contrast: var(--kiwi-core-neutral-400);\n\n    /* State -- Danger */\n    --kiwi-button-danger-bg: var(--kiwi-semantic-danger);\n    --kiwi-button-danger-bg-contrast: var(--kiwi-core-white);\n    --kiwi-button-danger-bg-hover: var(--kiwi-core-warm-900);\n    --kiwi-button-danger-border-focus: var(--kiwi-core-warm-900);\n\n    /* Size -- Large */\n    --kiwi-button-large-ph: var(--kiwi-core-spacing-24);\n    --kiwi-button-large-pv: var(--kiwi-core-spacing-16);\n\n    /* Size -- Medium */\n    --kiwi-button-medium-ph: var(--kiwi-core-spacing-16);\n    --kiwi-button-medium-pv: var(--kiwi-core-spacing-12);\n\n    /* Size -- Small */\n    --kiwi-button-small-ph: var(--kiwi-core-spacing-12);\n    --kiwi-button-small-pv: var(--kiwi-core-spacing-8);\n}",'@import "../../../../tokens/index.scss";\n@import "./button.tokens.scss";\n\n.kiwi-button {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  border: 0;\n  font-family: var(--kiwi-button-ff);\n  border-radius: var(--kiwi-button-br);\n\n  &--primary {\n    color: var(--kiwi-button-primary-text-color);\n    background-color: var(--kiwi-button-primary-bg);\n    transition: var(--kiwi-button-transition);\n\n    &:hover {\n      box-shadow: 0 0 0 1px var(--kiwi-button-primary-bg-contrast);\n      background-color: var(--kiwi-button-primary-bg-hover);\n      transition: var(--kiwi-button-transition);\n    }\n\n    &:focus {\n      box-shadow: 0 0 0 4px var(--kiwi-button-primary-bg-contrast);\n      background-color: var(--kiwi-button-primary-bg);\n    }\n  }\n\n  &--secondary {\n    color: var(--kiwi-button-secondary-text-color);\n    background-color: var(--kiwi-button-secondary-bg);\n    box-shadow: 0px 0px 0px 1px inset var(--kiwi-button-secondary-border);\n\n    &:hover {\n      &:after {\n        content: "";\n        background-color: var(--kiwi-button-secondary-bg-hover);\n        border-radius: var(--kiwi-button-br);\n        position: absolute;\n        right: -5px;\n        left: 4px;\n        bottom: -4px;\n        top: 4px;\n        width: -webkit-fill-available;\n        height: -webkit-fill-available;\n        z-index: -1;\n      }\n    }\n\n    &:focus {\n      box-shadow: 0 0 0 4px var(--kiwi-button-primary-bg-contrast);\n      background-color: var(--kiwi-button-secondary-bg);\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  &--small {\n    padding: var(--kiwi-button-small-pv) var(--kiwi-button-small-ph);\n  }\n\n  &--medium {\n    padding: var(--kiwi-button-medium-pv) var(--kiwi-button-medium-ph);\n  }\n\n  &--large {\n    padding: var(--kiwi-button-large-pv) var(--kiwi-button-large-ph);\n  }\n\n  &--disabled {\n    pointer-events: none;\n    background-color: var(--kiwi-button-disabled-bg);\n    color: var(--kiwi-button-disabled-bg-contrast);\n    box-shadow: none;\n  }\n\n  &--danger {\n    color: var(--kiwi-button-danger-bg-contrast);\n    background-color: var(--kiwi-button-danger-bg);\n    transition: var(--kiwi-button-transition);\n\n    &:hover {\n      background-color: var(--kiwi-button-danger-bg-hover);\n      transition: var(--kiwi-button-transition);\n      box-shadow: none;\n    }\n\n    &:focus {\n      color: var(--kiwi-button-danger-bg-contrast);\n      background-color: var(--kiwi-button-danger-bg);\n      box-shadow: 0 0 0 4px var(--kiwi-button-danger-border-focus);\n    }\n  }\n}\n'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=262.33f20c09.iframe.bundle.js.map