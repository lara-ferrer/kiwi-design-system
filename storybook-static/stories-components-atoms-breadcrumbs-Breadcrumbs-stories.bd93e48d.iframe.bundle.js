"use strict";(self.webpackChunkkiwi_design_system=self.webpackChunkkiwi_design_system||[]).push([[162],{"./src/stories/components/atoms/breadcrumbs/Breadcrumbs.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/components/atoms/breadcrumbs/Breadcrumbs.jsx");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Atoms/Breadcrumbs",component:_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.B};var Default=(function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.B,args)}).bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Breadcrumbs {...args} />",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/stories/components/atoms/breadcrumbs/Breadcrumbs.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Breadcrumbs});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),breadcrumbs=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/atoms/breadcrumbs/breadcrumbs.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(breadcrumbs.A,options),breadcrumbs.A&&breadcrumbs.A.locals&&breadcrumbs.A.locals,__webpack_require__("./src/styles/index.scss");var Breadcrumbs=function(param){var links=param.links;return react.createElement("div",{className:"kiwi-breadcrumbs"},links.map(function(link,i){return react.createElement(react.Fragment,null,react.createElement("a",{href:link.url,className:"kiwi-breadcrumbs__item ".concat(link.isActive?"kiwi-breadcrumbs--active":"")},link.title),i!==links.length-1&&react.createElement("span",null," / "))}))};Breadcrumbs.propTypes={links:prop_types_default().array.isRequired},Breadcrumbs.defaultProps={links:[{title:"Inicio",url:"https://www.greenspot.com/"},{title:"Zaragoza",url:"https://www.greenspot.com/ciudades/zaragoza"},{title:"Restaurantes",url:"https://www.greenspot.com/ciudades/zaragoza/restaurantes",isActive:!0}]},Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{links:{defaultValue:{value:"[\n  {\n    title: 'Inicio',\n    url: 'https://www.greenspot.com/',\n  },\n  {\n    title: 'Zaragoza',\n    url: 'https://www.greenspot.com/ciudades/zaragoza'\n  },\n  {\n    title: 'Restaurantes',\n    url: 'https://www.greenspot.com/ciudades/zaragoza/restaurantes',\n    isActive: true\n  }\n]",computed:!1},description:"",type:{name:"array"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/atoms/breadcrumbs/breadcrumbs.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--kiwi-core-black: #000000;--kiwi-core-green-100: #f6f2cf;--kiwi-core-green-200: #e8f1bc;--kiwi-core-green-300: #ceecab;--kiwi-core-green-400: #ade69a;--kiwi-core-green-500: #89df8b;--kiwi-core-green-600: #77c489;--kiwi-core-green-700: #65aa83;--kiwi-core-green-800: #538e7a;--kiwi-core-green-900: #42736c;--kiwi-core-neutral-100: #f5f5f5;--kiwi-core-neutral-200: #d0cfce;--kiwi-core-neutral-300: #b7b7b7;--kiwi-core-neutral-400: #585858;--kiwi-core-neutral-500: #313131;--kiwi-core-neutral-600: #171717;--kiwi-core-warm-100: #ffe9a4;--kiwi-core-warm-200: #ffd584;--kiwi-core-warm-300: #febc67;--kiwi-core-warm-400: #f6a04e;--kiwi-core-warm-500: #ea8237;--kiwi-core-warm-600: #d96b30;--kiwi-core-warm-700: #c75629;--kiwi-core-warm-800: #b54222;--kiwi-core-warm-900: #a3311c;--kiwi-core-white: #ffffff}:root{--kiwi-semantic-danger: var(--kiwi-core-warm-500);--kiwi-semantic-primary: var(--kiwi-core-green-400);--kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);--kiwi-semantic-secondary: var(--kiwi-core-warm-600)}:root{--kiwi-core-fs-64: 64px;--kiwi-core-fs-48: 48px;--kiwi-core-fs-40: 40px;--kiwi-core-fs-36: 36px;--kiwi-core-fs-32: 32px;--kiwi-core-fs-24: 24px;--kiwi-core-fs-20: 20px;--kiwi-core-fs-16: 16px;--kiwi-core-fs-14: 14px;--kiwi-core-fs-12: 12px;--kiwi-core-ff-primary: "Baloo 2", sans-serif;--kiwi-core-ff-secondary: "Poppins", sans-serif;--kiwi-core-fw-500: 500;--kiwi-core-fw-600: 600;--kiwi-core-fw-700: 700;--kiwi-core-fw-800: 800;--kiwi-core-lh-64: 64px;--kiwi-core-lh-56: 56px;--kiwi-core-lh-48: 48px;--kiwi-core-lh-40: 40px;--kiwi-core-lh-36: 36px;--kiwi-core-lh-32: 32px;--kiwi-core-lh-24: 24px;--kiwi-core-lh-20: 20px;--kiwi-core-lh-16: 16px;--kiwi-core-lh-14: 14px}:root{--kiwi-core-spacing-4: 4px;--kiwi-core-spacing-8: 8px;--kiwi-core-spacing-12: 12px;--kiwi-core-spacing-16: 16px;--kiwi-core-spacing-24: 24px;--kiwi-core-spacing-32: 32px;--kiwi-core-spacing-40: 40px;--kiwi-core-spacing-48: 48px;--kiwi-core-spacing-56: 56px;--kiwi-core-spacing-64: 64px}:root{--kiwi-core-br-4: 4px;--kiwi-core-br-8: 8px;--kiwi-core-br-12: 12px;--kiwi-core-br-16: 16px;--kiwi-core-br-24: 24px;--kiwi-core-br-32: 32px;--kiwi-core-br-40: 40px;--kiwi-core-br-48: 48px;--kiwi-core-br-56: 56px;--kiwi-core-br-64: 64px}:root{--kiwi-core-fast-transition: 0.3s;--kiwi-core-medium-transition: 0.5s;--kiwi-core-slow-transition: 0.8s}:root{--kiwi-breadcrumbs-color: var(--kiwi-core-neutral-400);--kiwi-breadcrumbs-active-color: var(--kiwi-core-green-800);--kiwi-breadcrumbs-hover-transition: var(--kiwi-core-fast-transition)}.kiwi-breadcrumbs{color:var(--kiwi-breadcrumbs-color)}.kiwi-breadcrumbs__item:first-letter{text-transform:uppercase}.kiwi-breadcrumbs__item:hover{opacity:.7;transition:var(--kiwi-breadcrumbs-hover-transition)}.kiwi-breadcrumbs--active{color:var(--kiwi-breadcrumbs-active-color)}',"",{version:3,sources:["webpack://./src/tokens/colors/core.scss","webpack://./src/tokens/colors/semantic.scss","webpack://./src/tokens/typography.scss","webpack://./src/tokens/spacings.scss","webpack://./src/tokens/border-radius.scss","webpack://./src/tokens/motion.scss","webpack://./src/stories/components/atoms/breadcrumbs/breadcrumbs.tokens.scss","webpack://./src/stories/components/atoms/breadcrumbs/breadcrumbs.scss"],names:[],mappings:"AAAA,MACE,0BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,0BAAA,CC1BF,MACI,iDAAA,CACA,mDAAA,CACA,4DAAA,CACA,oDAAA,CCJJ,MAEI,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,6CAAA,CACA,+CAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCjCJ,MACI,0BAAA,CACA,0BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CCVJ,MACI,qBAAA,CACA,qBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCVJ,MACI,iCAAA,CACA,mCAAA,CACA,iCAAA,CCHJ,MACI,sDAAA,CACA,2DAAA,CACA,qEAAA,CAAA,kBCCF,mCAAA,CAGE,qCACE,wBAAA,CAIJ,8BACE,UAAA,CACA,mDAAA,CAGF,0BACE,0CAAA",sourcesContent:[":root {\n  --kiwi-core-black: #000000;\n  --kiwi-core-green-100: #f6f2cf;\n  --kiwi-core-green-200: #e8f1bc;\n  --kiwi-core-green-300: #ceecab;\n  --kiwi-core-green-400: #ade69a;\n  --kiwi-core-green-500: #89df8b;\n  --kiwi-core-green-600: #77c489;\n  --kiwi-core-green-700: #65aa83;\n  --kiwi-core-green-800: #538e7a;\n  --kiwi-core-green-900: #42736c;\n  --kiwi-core-neutral-100: #f5f5f5;\n  --kiwi-core-neutral-200: #d0cfce;\n  --kiwi-core-neutral-300: #b7b7b7;\n  --kiwi-core-neutral-400: #585858;\n  --kiwi-core-neutral-500: #313131;\n  --kiwi-core-neutral-600: #171717;\n  --kiwi-core-warm-100: #ffe9a4;\n  --kiwi-core-warm-200: #ffd584;\n  --kiwi-core-warm-300: #febc67;\n  --kiwi-core-warm-400: #f6a04e;\n  --kiwi-core-warm-500: #ea8237;\n  --kiwi-core-warm-600: #d96b30;\n  --kiwi-core-warm-700: #c75629;\n  --kiwi-core-warm-800: #b54222;\n  --kiwi-core-warm-900: #a3311c;\n  --kiwi-core-white: #ffffff;\n}\n",":root {\n    --kiwi-semantic-danger: var(--kiwi-core-warm-500);\n    --kiwi-semantic-primary: var(--kiwi-core-green-400);\n    --kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);\n    --kiwi-semantic-secondary: var(--kiwi-core-warm-600);\n}",':root {\n    /* Font size */\n    --kiwi-core-fs-64: 64px;\n    --kiwi-core-fs-48: 48px;\n    --kiwi-core-fs-40: 40px;\n    --kiwi-core-fs-36: 36px;\n    --kiwi-core-fs-32: 32px;\n    --kiwi-core-fs-24: 24px;\n    --kiwi-core-fs-20: 20px;\n    --kiwi-core-fs-16: 16px;\n    --kiwi-core-fs-14: 14px;\n    --kiwi-core-fs-12: 12px;\n\n    /* Font family */\n    --kiwi-core-ff-primary: "Baloo 2", sans-serif;\n    --kiwi-core-ff-secondary: "Poppins", sans-serif;\n\n    /* Font weight */\n    --kiwi-core-fw-500: 500;\n    --kiwi-core-fw-600: 600;\n    --kiwi-core-fw-700: 700;\n    --kiwi-core-fw-800: 800;\n\n    /* Line height */\n    --kiwi-core-lh-64: 64px;\n    --kiwi-core-lh-56: 56px;\n    --kiwi-core-lh-48: 48px;\n    --kiwi-core-lh-40: 40px;\n    --kiwi-core-lh-36: 36px;\n    --kiwi-core-lh-32: 32px;\n    --kiwi-core-lh-24: 24px;\n    --kiwi-core-lh-20: 20px;\n    --kiwi-core-lh-16: 16px;\n    --kiwi-core-lh-14: 14px;\n}',":root {\n    --kiwi-core-spacing-4: 4px;\n    --kiwi-core-spacing-8: 8px;\n    --kiwi-core-spacing-12: 12px;\n    --kiwi-core-spacing-16: 16px;\n    --kiwi-core-spacing-24: 24px;\n    --kiwi-core-spacing-32: 32px;\n    --kiwi-core-spacing-40: 40px;\n    --kiwi-core-spacing-48: 48px;\n    --kiwi-core-spacing-56: 56px;\n    --kiwi-core-spacing-64: 64px;\n}",":root {\n    --kiwi-core-br-4: 4px;\n    --kiwi-core-br-8: 8px;\n    --kiwi-core-br-12: 12px;\n    --kiwi-core-br-16: 16px;\n    --kiwi-core-br-24: 24px;\n    --kiwi-core-br-32: 32px;\n    --kiwi-core-br-40: 40px;\n    --kiwi-core-br-48: 48px;\n    --kiwi-core-br-56: 56px;\n    --kiwi-core-br-64: 64px;\n}",":root {\n    --kiwi-core-fast-transition: 0.3s;\n    --kiwi-core-medium-transition: 0.5s;\n    --kiwi-core-slow-transition: 0.8s;\n}",":root {\n    --kiwi-breadcrumbs-color: var(--kiwi-core-neutral-400);\n    --kiwi-breadcrumbs-active-color: var(--kiwi-core-green-800);\n    --kiwi-breadcrumbs-hover-transition: var(--kiwi-core-fast-transition);\n}",'@import "../../../../tokens/index.scss";\n@import "./breadcrumbs.tokens.scss";\n\n.kiwi-breadcrumbs {\n  color: var(--kiwi-breadcrumbs-color);\n\n  &__item {\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n\n  &__item:hover {\n    opacity: 0.7;\n    transition: var(--kiwi-breadcrumbs-hover-transition);\n  }\n\n  &--active {\n    color: var(--kiwi-breadcrumbs-active-color);\n  }\n}\n'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);