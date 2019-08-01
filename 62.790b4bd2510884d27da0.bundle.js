(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{627:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_back_button",function(){return BackButton});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(697),BackButton=function(){function BackButton(hostRef){var _this=this;Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.mode=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),this.disabled=!1,this.type="button",this.onClick=function(ev){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(_this,void 0,void 0,function(){var nav,_a;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_b){switch(_b.label){case 0:return nav=this.el.closest("ion-nav"),ev.preventDefault(),(_a=nav)?[4,nav.canGoBack()]:[3,2];case 1:_a=_b.sent(),_b.label=2;case 2:return _a?[2,nav.pop({skipIfBusy:!0})]:[2,Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.defaultHref,ev,"back")]}})})}}return Object.defineProperty(BackButton.prototype,"backButtonIcon",{get:function(){return null!=this.icon?this.icon:_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_2__.b.get("backButtonIcon","arrow-back")},enumerable:!0,configurable:!0}),Object.defineProperty(BackButton.prototype,"backButtonText",{get:function(){var defaultBackButtonText="ios"===this.mode?"Back":null;return null!=this.text?this.text:_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_2__.b.get("backButtonText",defaultBackButtonText)},enumerable:!0,configurable:!0}),Object.defineProperty(BackButton.prototype,"hasIconOnly",{get:function(){return this.backButtonIcon&&!this.backButtonText},enumerable:!0,configurable:!0}),Object.defineProperty(BackButton.prototype,"rippleType",{get:function(){return this.hasIconOnly?"unbounded":"bounded"},enumerable:!0,configurable:!0}),BackButton.prototype.render=function(){var _a,_b=this,color=_b.color,defaultHref=_b.defaultHref,disabled=_b.disabled,type=_b.type,mode=_b.mode,hasIconOnly=_b.hasIconOnly,backButtonIcon=_b.backButtonIcon,backButtonText=_b.backButtonText,showBackButton=void 0!==defaultHref;return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:this.onClick,class:Object.assign({},Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__.a)(color),(_a={},_a[mode]=!0,_a.button=!0,_a["back-button-disabled"]=disabled,_a["back-button-has-icon-only"]=hasIconOnly,_a["ion-activatable"]=!0,_a["ion-focusable"]=!0,_a["show-back-button"]=showBackButton,_a))},Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("button",{type:type,disabled:disabled,class:"button-native"},Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("span",{class:"button-inner"},backButtonIcon&&Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("ion-icon",{icon:backButtonIcon,lazy:!1}),backButtonText&&Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("span",{class:"button-text"},backButtonText)),"md"===mode&&Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("ion-ripple-effect",{type:this.rippleType})))},Object.defineProperty(BackButton.prototype,"el",{get:function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(BackButton,"style",{get:function(){return".sc-ion-back-button-ios-h{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header .sc-ion-back-button-ios-h{display:block}.back-button-disabled.sc-ion-back-button-ios-h{cursor:default;opacity:.5;pointer-events:none}.button-native.sc-ion-back-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-ios{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}@media (any-hover:hover){.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{background:var(--background-hover);color:var(--color-hover)}}.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:var(--background-focused);color:var(--color-focused)}@media (any-hover:hover){.ion-color.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}ion-toolbar.sc-ion-back-button-ios-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-ios-h:not(.ion-color){color:var(--ion-toolbar-color,var(--color))}.sc-ion-back-button-ios-h{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native.sc-ion-back-button-ios{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}.activated.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{opacity:.4}@media (any-hover:hover){.sc-ion-back-button-ios-h:hover{--opacity:.6}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:rgba(var(--ion-color-base-rgb),.1)}"},enumerable:!0,configurable:!0}),BackButton}()},697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createColorClasses}),__webpack_require__.d(__webpack_exports__,"b",function(){return getClassMap}),__webpack_require__.d(__webpack_exports__,"c",function(){return hostContext}),__webpack_require__.d(__webpack_exports__,"d",function(){return openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter(function(c){return null!=c}).map(function(c){return c.trim()}).filter(function(c){return""!==c}):[]}(classes).forEach(function(c){return map[c]=!0}),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(void 0,void 0,void 0,function(){var router;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return null==url||"#"===url[0]||SCHEME.test(url)?[3,2]:(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[4,router.componentOnReady()]):[3,2];case 1:return _a.sent(),[2,router.push(url,direction)];case 2:return[2,!1]}})})}}}]);
//# sourceMappingURL=62.790b4bd2510884d27da0.bundle.js.map