"use strict";(self.webpackChunkkiwi_design_system=self.webpackChunkkiwi_design_system||[]).push([[753],{"./src/stories/components/organisms/BusinessCard/BusinessCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BusinessCard_stories});var react=__webpack_require__("./node_modules/react/index.js");let card_image_namespaceObject=__webpack_require__.p+"static/media/card-image.ecbcedf3.jpg";var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),business_card=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/organisms/BusinessCard/business-card.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(business_card.A,options),business_card.A&&business_card.A.locals&&business_card.A.locals,__webpack_require__("./src/styles/index.scss");var Tag=__webpack_require__("./src/stories/components/atoms/tag/Tag.jsx"),BusinessCard=function(param){var image=param.image,title=param.title,address=param.address,openTime=param.openTime,isOpen=param.isOpen,categories=param.categories;return react.createElement("div",{className:"kiwi-business-card"},react.createElement("img",{className:"kiwi-business-card__image",src:image,alt:title}),react.createElement("div",{className:"kiwi-business-card__content"},react.createElement("div",null,react.createElement("div",{className:"pb--12"},react.createElement("h4",null,title),react.createElement("p",{className:"kiwi-subtitle"},address)),react.createElement("div",{className:"kiwi-business-card__categories"},categories.map(function(category,i){return react.createElement(Tag.v,{title:category,key:"kiwi-tag-".concat(i),size:"small"})}))),react.createElement("div",{className:"kiwi-business-card__footer"},react.createElement("p",{className:"kiwi-subtitle"},openTime),react.createElement("p",{className:"kiwi-subtitle kiwi-subtitle--alert"},isOpen&&"NOW OPEN"))))};BusinessCard.propTypes={image:prop_types_default().string.isRequired,title:prop_types_default().string.isRequired,address:prop_types_default().string.isRequired,openTime:prop_types_default().string.isRequired,isOpen:prop_types_default().bool,categories:prop_types_default().arrayOf(prop_types_default().string).isRequired},BusinessCard.defaultProps={title:"Green restaurant",address:"Lettuce Street, 8, Zaragoza",openTime:"mon - sun: 13:00h - 16:00h",isOpen:!0,categories:["Vegan","Vegetarian"]},BusinessCard.__docgenInfo={description:"",methods:[],displayName:"BusinessCard",props:{title:{defaultValue:{value:'"Green restaurant"',computed:!1},description:"",type:{name:"string"},required:!1},address:{defaultValue:{value:'"Lettuce Street, 8, Zaragoza"',computed:!1},description:"",type:{name:"string"},required:!1},openTime:{defaultValue:{value:'"mon - sun: 13:00h - 16:00h"',computed:!1},description:"",type:{name:"string"},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},categories:{defaultValue:{value:"['Vegan', 'Vegetarian']",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},image:{description:"",type:{name:"string"},required:!0}}};let BusinessCard_stories={title:"Components/Organisms/BusinessCard",component:BusinessCard};var Vertical=(function(args){return react.createElement(BusinessCard,args)}).bind({});Vertical.args={image:card_image_namespaceObject,title:"Green restaurant"},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"args => <BusinessCard {...args} />",...Vertical.parameters?.docs?.source}}};let __namedExportsOrder=["Vertical"]},"./src/stories/components/atoms/tag/Tag.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tag=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/atoms/tag/tag.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(tag.A,options),tag.A&&tag.A.locals&&tag.A.locals,__webpack_require__("./src/styles/index.scss");var Tag=function(param){var title=param.title,size=param.size,link=param.link;return react.createElement("a",{href:link,target:"_blank",rel:"noreferrer"},react.createElement("div",{className:"kiwi-tag kiwi-tag--".concat(size," ").concat(link&&"kiwi-tag--link")},title))};Tag.propTypes={title:prop_types_default().string.isRequired,size:prop_types_default().oneOf("small","medium")},Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{title:{description:"",type:{name:"string"},required:!0},size:{description:"",type:{name:"enum",computed:!0,value:'"small"'},required:!1}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/atoms/tag/tag.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--kiwi-core-black: #000000;--kiwi-core-green-100: #f6f2cf;--kiwi-core-green-200: #e8f1bc;--kiwi-core-green-300: #ceecab;--kiwi-core-green-400: #ade69a;--kiwi-core-green-500: #89df8b;--kiwi-core-green-600: #77c489;--kiwi-core-green-700: #65aa83;--kiwi-core-green-800: #538e7a;--kiwi-core-green-900: #42736c;--kiwi-core-neutral-100: #f5f5f5;--kiwi-core-neutral-200: #d0cfce;--kiwi-core-neutral-300: #b7b7b7;--kiwi-core-neutral-400: #585858;--kiwi-core-neutral-500: #313131;--kiwi-core-neutral-600: #171717;--kiwi-core-warm-100: #ffe9a4;--kiwi-core-warm-200: #ffd584;--kiwi-core-warm-300: #febc67;--kiwi-core-warm-400: #f6a04e;--kiwi-core-warm-500: #ea8237;--kiwi-core-warm-600: #d96b30;--kiwi-core-warm-700: #c75629;--kiwi-core-warm-800: #b54222;--kiwi-core-warm-900: #a3311c;--kiwi-core-white: #ffffff}:root{--kiwi-semantic-danger: var(--kiwi-core-warm-500);--kiwi-semantic-primary: var(--kiwi-core-green-400);--kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);--kiwi-semantic-secondary: var(--kiwi-core-warm-600)}:root{--kiwi-core-fs-64: 64px;--kiwi-core-fs-48: 48px;--kiwi-core-fs-40: 40px;--kiwi-core-fs-36: 36px;--kiwi-core-fs-32: 32px;--kiwi-core-fs-24: 24px;--kiwi-core-fs-20: 20px;--kiwi-core-fs-16: 16px;--kiwi-core-fs-14: 14px;--kiwi-core-fs-12: 12px;--kiwi-core-ff-primary: "Baloo 2", sans-serif;--kiwi-core-ff-secondary: "Poppins", sans-serif;--kiwi-core-fw-500: 500;--kiwi-core-fw-600: 600;--kiwi-core-fw-700: 700;--kiwi-core-fw-800: 800;--kiwi-core-lh-64: 64px;--kiwi-core-lh-56: 56px;--kiwi-core-lh-48: 48px;--kiwi-core-lh-40: 40px;--kiwi-core-lh-36: 36px;--kiwi-core-lh-32: 32px;--kiwi-core-lh-24: 24px;--kiwi-core-lh-20: 20px;--kiwi-core-lh-16: 16px;--kiwi-core-lh-14: 14px}:root{--kiwi-core-spacing-4: 4px;--kiwi-core-spacing-8: 8px;--kiwi-core-spacing-12: 12px;--kiwi-core-spacing-16: 16px;--kiwi-core-spacing-24: 24px;--kiwi-core-spacing-32: 32px;--kiwi-core-spacing-40: 40px;--kiwi-core-spacing-48: 48px;--kiwi-core-spacing-56: 56px;--kiwi-core-spacing-64: 64px}:root{--kiwi-core-br-4: 4px;--kiwi-core-br-8: 8px;--kiwi-core-br-12: 12px;--kiwi-core-br-16: 16px;--kiwi-core-br-24: 24px;--kiwi-core-br-32: 32px;--kiwi-core-br-40: 40px;--kiwi-core-br-48: 48px;--kiwi-core-br-56: 56px;--kiwi-core-br-64: 64px}:root{--kiwi-core-fast-transition: 0.3s;--kiwi-core-medium-transition: 0.5s;--kiwi-core-slow-transition: 0.8s}:root{--kiwi-tag-active-br: var(--kiwi-core-br-16);--kiwi-tag-active-bg-color: var(--kiwi-core-green-500);--kiwi-tag-active-color: var(--kiwi-core-green-900);--kiwi-tag-active-padding-vertical: 4px;--kiwi-tag-active-padding-horizontal: 12px;--kiwi-tag-active-ff: var(--kiwi-core-ff-primary);--kiwi-tag-active-fw: var(--kiwi-core-fw-600);--kiwi-tag-transition: var(--kiwi-core-medium-transition);--kiwi-tag-hover-bg-color: var(--kiwi-core-white);--kiwi-tag-hover-color: var(--kiwi-core-green-900);--kiwi-tag-hover-border-color: var(--kiwi-core-green-900);--kiwi-tag-focus-bg-contrast: var(--kiwi-core-green-900);--kiwi-tag-small-fs: var(--kiwi-core-fs-14);--kiwi-tag-small-min-width: 62px;--kiwi-tag-medium-fs: var(--kiwi-core-fs-16);--kiwi-tag-medium-min-width: 80px}.kiwi-tag{border-radius:var(--kiwi-tag-active-br);background-color:var(--kiwi-tag-active-bg-color);color:var(--kiwi-tag-active-color);text-align:center;padding:var(--kiwi-tag-active-padding-vertical) var(--kiwi-tag-active-padding-horizontal);font-family:var(--kiwi-tag-active-ff);font-weight:var(--kiwi-tag-active-fw);transition:var(--kiwi-tag-transition);width:fit-content}.kiwi-tag:focus{box-shadow:0 0 0 4px var(--kiwi-tag-focus-bg-contrast)}.kiwi-tag--small{font-size:var(--kiwi-tag-small-fs);min-width:var(--kiwi-tag-small-min-width)}.kiwi-tag--medium{font-size:var(--kiwi-tag-medium-fs);min-width:var(--kiwi-tag-medium-min-width)}.kiwi-tag--link{cursor:pointer}.kiwi-tag--link:hover{transition:var(--kiwi-tag-transition);box-shadow:0 0 0 1px var(--kiwi-tag-hover-border-color);background-color:var(--kiwi-tag-hover-bg-color);color:var(--kiwi-tag-hover-color)}',"",{version:3,sources:["webpack://./src/tokens/colors/core.scss","webpack://./src/tokens/colors/semantic.scss","webpack://./src/tokens/typography.scss","webpack://./src/tokens/spacings.scss","webpack://./src/tokens/border-radius.scss","webpack://./src/tokens/motion.scss","webpack://./src/stories/components/atoms/tag/tag.tokens.scss","webpack://./src/stories/components/atoms/tag/tag.scss"],names:[],mappings:"AAAA,MACE,0BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,0BAAA,CC1BF,MACI,iDAAA,CACA,mDAAA,CACA,4DAAA,CACA,oDAAA,CCJJ,MAEI,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,6CAAA,CACA,+CAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCjCJ,MACI,0BAAA,CACA,0BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CCVJ,MACI,qBAAA,CACA,qBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCVJ,MACI,iCAAA,CACA,mCAAA,CACA,iCAAA,CCHJ,MAEE,4CAAA,CACA,sDAAA,CACA,mDAAA,CACA,uCAAA,CACA,0CAAA,CACA,iDAAA,CACA,6CAAA,CACA,yDAAA,CAGA,iDAAA,CACA,kDAAA,CACA,yDAAA,CAGA,wDAAA,CAGA,2CAAA,CACA,gCAAA,CAGA,4CAAA,CACA,iCAAA,CCtBF,UACE,uCAAA,CACA,gDAAA,CACA,kCAAA,CACA,iBAAA,CACA,yFAAA,CACA,qCAAA,CACA,qCAAA,CACA,qCAAA,CACA,iBAAA,CAEA,gBACE,sDAAA,CAGF,iBACE,kCAAA,CACA,yCAAA,CAGF,kBACE,mCAAA,CACA,0CAAA,CAGF,gBACE,cAAA,CAEA,sBACE,qCAAA,CACA,uDAAA,CACA,+CAAA,CACA,iCAAA",sourcesContent:[":root {\n  --kiwi-core-black: #000000;\n  --kiwi-core-green-100: #f6f2cf;\n  --kiwi-core-green-200: #e8f1bc;\n  --kiwi-core-green-300: #ceecab;\n  --kiwi-core-green-400: #ade69a;\n  --kiwi-core-green-500: #89df8b;\n  --kiwi-core-green-600: #77c489;\n  --kiwi-core-green-700: #65aa83;\n  --kiwi-core-green-800: #538e7a;\n  --kiwi-core-green-900: #42736c;\n  --kiwi-core-neutral-100: #f5f5f5;\n  --kiwi-core-neutral-200: #d0cfce;\n  --kiwi-core-neutral-300: #b7b7b7;\n  --kiwi-core-neutral-400: #585858;\n  --kiwi-core-neutral-500: #313131;\n  --kiwi-core-neutral-600: #171717;\n  --kiwi-core-warm-100: #ffe9a4;\n  --kiwi-core-warm-200: #ffd584;\n  --kiwi-core-warm-300: #febc67;\n  --kiwi-core-warm-400: #f6a04e;\n  --kiwi-core-warm-500: #ea8237;\n  --kiwi-core-warm-600: #d96b30;\n  --kiwi-core-warm-700: #c75629;\n  --kiwi-core-warm-800: #b54222;\n  --kiwi-core-warm-900: #a3311c;\n  --kiwi-core-white: #ffffff;\n}\n",":root {\n    --kiwi-semantic-danger: var(--kiwi-core-warm-500);\n    --kiwi-semantic-primary: var(--kiwi-core-green-400);\n    --kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);\n    --kiwi-semantic-secondary: var(--kiwi-core-warm-600);\n}",':root {\n    /* Font size */\n    --kiwi-core-fs-64: 64px;\n    --kiwi-core-fs-48: 48px;\n    --kiwi-core-fs-40: 40px;\n    --kiwi-core-fs-36: 36px;\n    --kiwi-core-fs-32: 32px;\n    --kiwi-core-fs-24: 24px;\n    --kiwi-core-fs-20: 20px;\n    --kiwi-core-fs-16: 16px;\n    --kiwi-core-fs-14: 14px;\n    --kiwi-core-fs-12: 12px;\n\n    /* Font family */\n    --kiwi-core-ff-primary: "Baloo 2", sans-serif;\n    --kiwi-core-ff-secondary: "Poppins", sans-serif;\n\n    /* Font weight */\n    --kiwi-core-fw-500: 500;\n    --kiwi-core-fw-600: 600;\n    --kiwi-core-fw-700: 700;\n    --kiwi-core-fw-800: 800;\n\n    /* Line height */\n    --kiwi-core-lh-64: 64px;\n    --kiwi-core-lh-56: 56px;\n    --kiwi-core-lh-48: 48px;\n    --kiwi-core-lh-40: 40px;\n    --kiwi-core-lh-36: 36px;\n    --kiwi-core-lh-32: 32px;\n    --kiwi-core-lh-24: 24px;\n    --kiwi-core-lh-20: 20px;\n    --kiwi-core-lh-16: 16px;\n    --kiwi-core-lh-14: 14px;\n}',":root {\n    --kiwi-core-spacing-4: 4px;\n    --kiwi-core-spacing-8: 8px;\n    --kiwi-core-spacing-12: 12px;\n    --kiwi-core-spacing-16: 16px;\n    --kiwi-core-spacing-24: 24px;\n    --kiwi-core-spacing-32: 32px;\n    --kiwi-core-spacing-40: 40px;\n    --kiwi-core-spacing-48: 48px;\n    --kiwi-core-spacing-56: 56px;\n    --kiwi-core-spacing-64: 64px;\n}",":root {\n    --kiwi-core-br-4: 4px;\n    --kiwi-core-br-8: 8px;\n    --kiwi-core-br-12: 12px;\n    --kiwi-core-br-16: 16px;\n    --kiwi-core-br-24: 24px;\n    --kiwi-core-br-32: 32px;\n    --kiwi-core-br-40: 40px;\n    --kiwi-core-br-48: 48px;\n    --kiwi-core-br-56: 56px;\n    --kiwi-core-br-64: 64px;\n}",":root {\n    --kiwi-core-fast-transition: 0.3s;\n    --kiwi-core-medium-transition: 0.5s;\n    --kiwi-core-slow-transition: 0.8s;\n}",":root {\n  /* Default */\n  --kiwi-tag-active-br: var(--kiwi-core-br-16);\n  --kiwi-tag-active-bg-color: var(--kiwi-core-green-500);\n  --kiwi-tag-active-color: var(--kiwi-core-green-900);\n  --kiwi-tag-active-padding-vertical: 4px;\n  --kiwi-tag-active-padding-horizontal: 12px;\n  --kiwi-tag-active-ff: var(--kiwi-core-ff-primary);\n  --kiwi-tag-active-fw: var(--kiwi-core-fw-600);\n  --kiwi-tag-transition: var(--kiwi-core-medium-transition);\n\n  /* Hover */\n  --kiwi-tag-hover-bg-color: var(--kiwi-core-white);\n  --kiwi-tag-hover-color: var(--kiwi-core-green-900);\n  --kiwi-tag-hover-border-color: var(--kiwi-core-green-900);\n\n  /* Focus */\n  --kiwi-tag-focus-bg-contrast: var(--kiwi-core-green-900);\n\n  /* Small */\n  --kiwi-tag-small-fs: var(--kiwi-core-fs-14);\n  --kiwi-tag-small-min-width: 62px;\n\n  /* Medium */\n  --kiwi-tag-medium-fs: var(--kiwi-core-fs-16);\n  --kiwi-tag-medium-min-width: 80px;\n}\n",'@import "../../../../tokens/index.scss";\n@import "./tag.tokens.scss";\n\n.kiwi-tag {\n  border-radius: var(--kiwi-tag-active-br);\n  background-color: var(--kiwi-tag-active-bg-color);\n  color: var(--kiwi-tag-active-color);\n  text-align: center;\n  padding: var(--kiwi-tag-active-padding-vertical) var(--kiwi-tag-active-padding-horizontal);\n  font-family: var(--kiwi-tag-active-ff);\n  font-weight: var(--kiwi-tag-active-fw);\n  transition: var(--kiwi-tag-transition);\n  width: fit-content;\n\n  &:focus {\n    box-shadow: 0 0 0 4px var(--kiwi-tag-focus-bg-contrast);\n  }\n\n  &--small {\n    font-size: var(--kiwi-tag-small-fs);\n    min-width: var(--kiwi-tag-small-min-width);\n  }\n\n  &--medium {\n    font-size: var(--kiwi-tag-medium-fs);\n    min-width: var(--kiwi-tag-medium-min-width);\n  }\n\n  &--link {\n    cursor: pointer;\n\n    &:hover {\n      transition: var(--kiwi-tag-transition);\n      box-shadow: 0 0 0 1px var(--kiwi-tag-hover-border-color);\n      background-color: var(--kiwi-tag-hover-bg-color);\n      color: var(--kiwi-tag-hover-color);\n    }\n  }\n}'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/components/organisms/BusinessCard/business-card.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--kiwi-core-black: #000000;--kiwi-core-green-100: #f6f2cf;--kiwi-core-green-200: #e8f1bc;--kiwi-core-green-300: #ceecab;--kiwi-core-green-400: #ade69a;--kiwi-core-green-500: #89df8b;--kiwi-core-green-600: #77c489;--kiwi-core-green-700: #65aa83;--kiwi-core-green-800: #538e7a;--kiwi-core-green-900: #42736c;--kiwi-core-neutral-100: #f5f5f5;--kiwi-core-neutral-200: #d0cfce;--kiwi-core-neutral-300: #b7b7b7;--kiwi-core-neutral-400: #585858;--kiwi-core-neutral-500: #313131;--kiwi-core-neutral-600: #171717;--kiwi-core-warm-100: #ffe9a4;--kiwi-core-warm-200: #ffd584;--kiwi-core-warm-300: #febc67;--kiwi-core-warm-400: #f6a04e;--kiwi-core-warm-500: #ea8237;--kiwi-core-warm-600: #d96b30;--kiwi-core-warm-700: #c75629;--kiwi-core-warm-800: #b54222;--kiwi-core-warm-900: #a3311c;--kiwi-core-white: #ffffff}:root{--kiwi-semantic-danger: var(--kiwi-core-warm-500);--kiwi-semantic-primary: var(--kiwi-core-green-400);--kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);--kiwi-semantic-secondary: var(--kiwi-core-warm-600)}:root{--kiwi-core-fs-64: 64px;--kiwi-core-fs-48: 48px;--kiwi-core-fs-40: 40px;--kiwi-core-fs-36: 36px;--kiwi-core-fs-32: 32px;--kiwi-core-fs-24: 24px;--kiwi-core-fs-20: 20px;--kiwi-core-fs-16: 16px;--kiwi-core-fs-14: 14px;--kiwi-core-fs-12: 12px;--kiwi-core-ff-primary: "Baloo 2", sans-serif;--kiwi-core-ff-secondary: "Poppins", sans-serif;--kiwi-core-fw-500: 500;--kiwi-core-fw-600: 600;--kiwi-core-fw-700: 700;--kiwi-core-fw-800: 800;--kiwi-core-lh-64: 64px;--kiwi-core-lh-56: 56px;--kiwi-core-lh-48: 48px;--kiwi-core-lh-40: 40px;--kiwi-core-lh-36: 36px;--kiwi-core-lh-32: 32px;--kiwi-core-lh-24: 24px;--kiwi-core-lh-20: 20px;--kiwi-core-lh-16: 16px;--kiwi-core-lh-14: 14px}:root{--kiwi-core-spacing-4: 4px;--kiwi-core-spacing-8: 8px;--kiwi-core-spacing-12: 12px;--kiwi-core-spacing-16: 16px;--kiwi-core-spacing-24: 24px;--kiwi-core-spacing-32: 32px;--kiwi-core-spacing-40: 40px;--kiwi-core-spacing-48: 48px;--kiwi-core-spacing-56: 56px;--kiwi-core-spacing-64: 64px}:root{--kiwi-core-br-4: 4px;--kiwi-core-br-8: 8px;--kiwi-core-br-12: 12px;--kiwi-core-br-16: 16px;--kiwi-core-br-24: 24px;--kiwi-core-br-32: 32px;--kiwi-core-br-40: 40px;--kiwi-core-br-48: 48px;--kiwi-core-br-56: 56px;--kiwi-core-br-64: 64px}:root{--kiwi-core-fast-transition: 0.3s;--kiwi-core-medium-transition: 0.5s;--kiwi-core-slow-transition: 0.8s}:root{--kiwi-business-card-bg: var(--kiwi-core-white);--kiwi-business-card-border-color: var(--kiwi-core-green-800);--kiwi-business-card-border-radius: var(--kiwi-core-br-16);--kiwi-business-card-min-height: 400px;--kiwi-business-card-max-width: 300px;--kiwi-business-card-image-max-height: 166px;--kiwi-business-card-content-padding: var(--kiwi-core-spacing-16);--kiwi-business-card-categories-gap: 8px}.kiwi-business-card{--kiwi-tag-active-bg-color: var(--kiwi-core-green-900);--kiwi-tag-active-color: var(--kiwi-core-white);display:flex;flex-direction:column;background-color:var(--kiwi-business-card-bg);border:1px solid var(--kiwi-business-card-border-color);border-radius:var(--kiwi-business-card-border-radius);min-height:var(--kiwi-business-card-min-height);max-width:var(--kiwi-business-card-max-width)}.kiwi-business-card__image{width:100%;max-height:var(--kiwi-business-card-image-max-height);border-radius:var(--kiwi-business-card-border-radius) var(--kiwi-business-card-border-radius) 0 0}.kiwi-business-card__content{height:calc(234px - var(--kiwi-business-card-content-padding)*2);padding:var(--kiwi-business-card-content-padding);display:flex;flex-direction:column;justify-content:space-between}.kiwi-business-card__categories{display:flex;gap:var(--kiwi-business-card-categories-gap)}',"",{version:3,sources:["webpack://./src/tokens/colors/core.scss","webpack://./src/tokens/colors/semantic.scss","webpack://./src/tokens/typography.scss","webpack://./src/tokens/spacings.scss","webpack://./src/tokens/border-radius.scss","webpack://./src/tokens/motion.scss","webpack://./src/stories/components/organisms/BusinessCard/business-card.tokens.scss","webpack://./src/stories/components/organisms/BusinessCard/business-card.scss"],names:[],mappings:"AAAA,MACE,0BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,0BAAA,CC1BF,MACI,iDAAA,CACA,mDAAA,CACA,4DAAA,CACA,oDAAA,CCJJ,MAEI,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,6CAAA,CACA,+CAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CAGA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCjCJ,MACI,0BAAA,CACA,0BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CCVJ,MACI,qBAAA,CACA,qBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CACA,uBAAA,CCVJ,MACI,iCAAA,CACA,mCAAA,CACA,iCAAA,CCHJ,MAEI,+CAAA,CACA,6DAAA,CACA,0DAAA,CACA,sCAAA,CACA,qCAAA,CACA,4CAAA,CACA,iEAAA,CACA,wCAAA,CCNJ,oBACI,sDAAA,CACA,+CAAA,CAEA,YAAA,CACA,qBAAA,CACA,6CAAA,CACA,uDAAA,CACA,qDAAA,CACA,+CAAA,CACA,6CAAA,CAEA,2BACI,UAAA,CACA,qDAAA,CACA,iGAAA,CAGJ,6BACI,gEAAA,CACA,iDAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAGJ,gCACI,YAAA,CACA,4CAAA",sourcesContent:[":root {\n  --kiwi-core-black: #000000;\n  --kiwi-core-green-100: #f6f2cf;\n  --kiwi-core-green-200: #e8f1bc;\n  --kiwi-core-green-300: #ceecab;\n  --kiwi-core-green-400: #ade69a;\n  --kiwi-core-green-500: #89df8b;\n  --kiwi-core-green-600: #77c489;\n  --kiwi-core-green-700: #65aa83;\n  --kiwi-core-green-800: #538e7a;\n  --kiwi-core-green-900: #42736c;\n  --kiwi-core-neutral-100: #f5f5f5;\n  --kiwi-core-neutral-200: #d0cfce;\n  --kiwi-core-neutral-300: #b7b7b7;\n  --kiwi-core-neutral-400: #585858;\n  --kiwi-core-neutral-500: #313131;\n  --kiwi-core-neutral-600: #171717;\n  --kiwi-core-warm-100: #ffe9a4;\n  --kiwi-core-warm-200: #ffd584;\n  --kiwi-core-warm-300: #febc67;\n  --kiwi-core-warm-400: #f6a04e;\n  --kiwi-core-warm-500: #ea8237;\n  --kiwi-core-warm-600: #d96b30;\n  --kiwi-core-warm-700: #c75629;\n  --kiwi-core-warm-800: #b54222;\n  --kiwi-core-warm-900: #a3311c;\n  --kiwi-core-white: #ffffff;\n}\n",":root {\n    --kiwi-semantic-danger: var(--kiwi-core-warm-500);\n    --kiwi-semantic-primary: var(--kiwi-core-green-400);\n    --kiwi-semantic-primary-contrast: var(--kiwi-core-green-900);\n    --kiwi-semantic-secondary: var(--kiwi-core-warm-600);\n}",':root {\n    /* Font size */\n    --kiwi-core-fs-64: 64px;\n    --kiwi-core-fs-48: 48px;\n    --kiwi-core-fs-40: 40px;\n    --kiwi-core-fs-36: 36px;\n    --kiwi-core-fs-32: 32px;\n    --kiwi-core-fs-24: 24px;\n    --kiwi-core-fs-20: 20px;\n    --kiwi-core-fs-16: 16px;\n    --kiwi-core-fs-14: 14px;\n    --kiwi-core-fs-12: 12px;\n\n    /* Font family */\n    --kiwi-core-ff-primary: "Baloo 2", sans-serif;\n    --kiwi-core-ff-secondary: "Poppins", sans-serif;\n\n    /* Font weight */\n    --kiwi-core-fw-500: 500;\n    --kiwi-core-fw-600: 600;\n    --kiwi-core-fw-700: 700;\n    --kiwi-core-fw-800: 800;\n\n    /* Line height */\n    --kiwi-core-lh-64: 64px;\n    --kiwi-core-lh-56: 56px;\n    --kiwi-core-lh-48: 48px;\n    --kiwi-core-lh-40: 40px;\n    --kiwi-core-lh-36: 36px;\n    --kiwi-core-lh-32: 32px;\n    --kiwi-core-lh-24: 24px;\n    --kiwi-core-lh-20: 20px;\n    --kiwi-core-lh-16: 16px;\n    --kiwi-core-lh-14: 14px;\n}',":root {\n    --kiwi-core-spacing-4: 4px;\n    --kiwi-core-spacing-8: 8px;\n    --kiwi-core-spacing-12: 12px;\n    --kiwi-core-spacing-16: 16px;\n    --kiwi-core-spacing-24: 24px;\n    --kiwi-core-spacing-32: 32px;\n    --kiwi-core-spacing-40: 40px;\n    --kiwi-core-spacing-48: 48px;\n    --kiwi-core-spacing-56: 56px;\n    --kiwi-core-spacing-64: 64px;\n}",":root {\n    --kiwi-core-br-4: 4px;\n    --kiwi-core-br-8: 8px;\n    --kiwi-core-br-12: 12px;\n    --kiwi-core-br-16: 16px;\n    --kiwi-core-br-24: 24px;\n    --kiwi-core-br-32: 32px;\n    --kiwi-core-br-40: 40px;\n    --kiwi-core-br-48: 48px;\n    --kiwi-core-br-56: 56px;\n    --kiwi-core-br-64: 64px;\n}",":root {\n    --kiwi-core-fast-transition: 0.3s;\n    --kiwi-core-medium-transition: 0.5s;\n    --kiwi-core-slow-transition: 0.8s;\n}",":root {\n    /* Global */\n    --kiwi-business-card-bg: var(--kiwi-core-white);\n    --kiwi-business-card-border-color: var(--kiwi-core-green-800);\n    --kiwi-business-card-border-radius: var(--kiwi-core-br-16);\n    --kiwi-business-card-min-height: 400px;\n    --kiwi-business-card-max-width: 300px;\n    --kiwi-business-card-image-max-height: 166px;\n    --kiwi-business-card-content-padding: var(--kiwi-core-spacing-16);\n    --kiwi-business-card-categories-gap: 8px;\n}",'@import "../../../../../src/tokens/index.scss";\n@import "./business-card.tokens.scss";\n\n.kiwi-business-card {\n    --kiwi-tag-active-bg-color: var(--kiwi-core-green-900);\n    --kiwi-tag-active-color: var(--kiwi-core-white);\n\n    display: flex;\n    flex-direction: column;\n    background-color: var(--kiwi-business-card-bg);\n    border: 1px solid var(--kiwi-business-card-border-color);\n    border-radius: var(--kiwi-business-card-border-radius);\n    min-height: var(--kiwi-business-card-min-height);\n    max-width: var(--kiwi-business-card-max-width);\n\n    &__image {\n        width: 100%;\n        max-height: var(--kiwi-business-card-image-max-height);\n        border-radius: var(--kiwi-business-card-border-radius) var(--kiwi-business-card-border-radius) 0 0;\n    }\n\n    &__content {\n        height: calc(234px - (var(--kiwi-business-card-content-padding) * 2));\n        padding: var(--kiwi-business-card-content-padding);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n\n    &__categories {\n        display: flex;\n        gap: var(--kiwi-business-card-categories-gap);\n    }\n}'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);