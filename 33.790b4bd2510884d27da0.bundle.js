(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{649:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_item_option",function(){return ItemOption}),__webpack_require__.d(__webpack_exports__,"ion_item_options",function(){return ItemOptions}),__webpack_require__.d(__webpack_exports__,"ion_item_sliding",function(){return ItemSliding});var openSlidingItem,tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(13),__webpack_require__(697)),_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(698),ItemOption=function(){function ItemOption(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=function(ev){ev.target.closest("ion-item-option")&&ev.preventDefault()}}return ItemOption.prototype.render=function(){var _a,disabled=this.disabled,expandable=this.expandable,TagType=void 0===this.href?"button":"a",mode=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),attrs="button"===TagType?{type:this.type}:{download:this.download,href:this.href,target:this.target};return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:this.onClick,class:Object.assign({},Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.color),(_a={},_a[mode]=!0,_a["item-option-disabled"]=disabled,_a["item-option-expandable"]=expandable,_a["ion-activatable"]=!0,_a))},Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)(TagType,Object.assign({},attrs,{class:"button-native",disabled:disabled}),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("span",{class:"button-inner"},Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",{name:"top"}),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"horizontal-wrapper"},Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",{name:"start"}),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",{name:"icon-only"}),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",{name:"end"})),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",{name:"bottom"})),"md"===mode&&Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("ion-ripple-effect",null)))},Object.defineProperty(ItemOption.prototype,"el",{get:function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(ItemOption,"style",{get:function(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:16px}:host(.activated){background:var(--ion-color-primary-shade,#3171e0)}:host(.ion-color.activated){background:var(--ion-color-shade)}"},enumerable:!0,configurable:!0}),ItemOption}(),ItemOptions=function(){function ItemOptions(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.side="end",this.ionSwipe=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionSwipe",7)}return ItemOptions.prototype.fireSwipeEvent=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){return this.ionSwipe.emit({side:this.side}),[2]})})},ItemOptions.prototype.hostData=function(){var _a,mode=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),isEnd=Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.side);return{class:(_a={},_a[mode]=!0,_a["item-options-"+mode]=!0,_a["item-options-start"]=!isEnd,_a["item-options-end"]=isEnd,_a)}},Object.defineProperty(ItemOptions.prototype,"el",{get:function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),ItemOptions.prototype.render=function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.a,this.hostData())},Object.defineProperty(ItemOptions,"style",{get:function(){return"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"},enumerable:!0,configurable:!0}),ItemOptions}(),ItemSliding=function(){function ItemSliding(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1,this.ionDrag=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionDrag",7)}return ItemSliding.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},ItemSliding.prototype.componentDidLoad=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var _a,_this=this;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_b){switch(_b.label){case 0:return this.item=this.el.querySelector("ion-item"),[4,this.updateOptions()];case 1:return _b.sent(),_a=this,[4,__webpack_require__.e(0).then(__webpack_require__.bind(null,699))];case 2:return _a.gesture=_b.sent().createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(){return _this.canStart()},onStart:function(){return _this.onStart()},onMove:function(ev){return _this.onMove(ev)},onEnd:function(ev){return _this.onEnd(ev)}}),this.disabledChanged(),[2]}})})},ItemSliding.prototype.componentDidUnload=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,openSlidingItem===this.el&&(openSlidingItem=void 0)},ItemSliding.prototype.getOpenAmount=function(){return Promise.resolve(this.openAmount)},ItemSliding.prototype.getSlidingRatio=function(){return Promise.resolve(this.getSlidingRatioSync())},ItemSliding.prototype.open=function(side){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var optionsToOpen,isStartOpen,isEndOpen,_this=this;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){return null===this.item?[2]:(optionsToOpen=this.getOptions(side))?(void 0===side&&(side=optionsToOpen===this.leftOptions?"start":"end"),side=Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__.h)(side)?"end":"start",isStartOpen=this.openAmount<0,isEndOpen=this.openAmount>0,isStartOpen&&optionsToOpen===this.leftOptions?[2]:isEndOpen&&optionsToOpen===this.rightOptions?[2]:(this.closeOpened(),this.state=4,requestAnimationFrame(function(){_this.calculateOptsWidth();var width="end"===side?_this.optsWidthRightSide:-_this.optsWidthLeftSide;openSlidingItem=_this.el,_this.setOpenAmount(width,!1),_this.state="end"===side?8:16}),[2])):[2]})})},ItemSliding.prototype.close=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){return this.setOpenAmount(0,!0),[2]})})},ItemSliding.prototype.closeOpened=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){return void 0!==openSlidingItem?(openSlidingItem.close(),openSlidingItem=void 0,[2,!0]):[2,!1]})})},ItemSliding.prototype.getOptions=function(side){return void 0===side?this.leftOptions||this.rightOptions:"start"===side?this.leftOptions:this.rightOptions},ItemSliding.prototype.updateOptions=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var options,sides,i,option;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:options=this.el.querySelectorAll("ion-item-options"),sides=0,this.leftOptions=this.rightOptions=void 0,i=0,_a.label=1;case 1:return i<options.length?[4,options.item(i).componentOnReady()]:[3,4];case 2:option=_a.sent(),"start"===(Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__.h)(option.side)?"end":"start")?(this.leftOptions=option,sides|=1):(this.rightOptions=option,sides|=2),_a.label=3;case 3:return i++,[3,1];case 4:return this.optsDirty=!0,this.sides=sides,[2]}})})},ItemSliding.prototype.canStart=function(){return openSlidingItem&&openSlidingItem!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)},ItemSliding.prototype.onStart=function(){openSlidingItem=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},ItemSliding.prototype.onMove=function(gesture){this.optsDirty&&this.calculateOptsWidth();var optsWidth,openAmount=this.initialOpenAmount-gesture.deltaX;switch(this.sides){case 2:openAmount=Math.max(0,openAmount);break;case 1:openAmount=Math.min(0,openAmount);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}openAmount>this.optsWidthRightSide?openAmount=(optsWidth=this.optsWidthRightSide)+.55*(openAmount-optsWidth):openAmount<-this.optsWidthLeftSide&&(openAmount=(optsWidth=-this.optsWidthLeftSide)+.55*(openAmount-optsWidth)),this.setOpenAmount(openAmount,!1)},ItemSliding.prototype.onEnd=function(gesture){var velocity=gesture.velocityX,restingPoint=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide,isResetDirection=this.openAmount>0==!(velocity<0),isMovingFast=Math.abs(velocity)>.3,isOnCloseZone=Math.abs(this.openAmount)<Math.abs(restingPoint/2);swipeShouldReset(isResetDirection,isMovingFast,isOnCloseZone)&&(restingPoint=0);var state=this.state;this.setOpenAmount(restingPoint,!0),0!=(32&state)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&state)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},ItemSliding.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1},ItemSliding.prototype.setOpenAmount=function(openAmount,isFinal){var _this=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var style=this.item.style;if(this.openAmount=openAmount,isFinal&&(style.transition=""),openAmount>0)this.state=openAmount>=this.optsWidthRightSide+30?40:8;else{if(!(openAmount<0))return this.tmr=setTimeout(function(){_this.state=2,_this.tmr=void 0},600),openSlidingItem=void 0,void(style.transform="");this.state=openAmount<=-this.optsWidthLeftSide-30?80:16}style.transform="translate3d("+-openAmount+"px,0,0)",this.ionDrag.emit({amount:openAmount,ratio:this.getSlidingRatioSync()})}},ItemSliding.prototype.getSlidingRatioSync=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},ItemSliding.prototype.hostData=function(){var _a;return{class:(_a={},_a[Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.e)(this)]=!0,_a["item-sliding-active-slide"]=2!==this.state,_a["item-sliding-active-options-end"]=0!=(8&this.state),_a["item-sliding-active-options-start"]=0!=(16&this.state),_a["item-sliding-active-swipe-end"]=0!=(32&this.state),_a["item-sliding-active-swipe-start"]=0!=(64&this.state),_a)}},Object.defineProperty(ItemSliding.prototype,"el",{get:function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(ItemSliding,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),ItemSliding.prototype.render=function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.a,this.hostData())},Object.defineProperty(ItemSliding,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"},enumerable:!0,configurable:!0}),ItemSliding}(),swipeShouldReset=function(isResetDirection,isMovingFast,isOnResetZone){return!isMovingFast&&isOnResetZone||isResetDirection&&isMovingFast}},697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createColorClasses}),__webpack_require__.d(__webpack_exports__,"b",function(){return getClassMap}),__webpack_require__.d(__webpack_exports__,"c",function(){return hostContext}),__webpack_require__.d(__webpack_exports__,"d",function(){return openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter(function(c){return null!=c}).map(function(c){return c.trim()}).filter(function(c){return""!==c}):[]}(classes).forEach(function(c){return map[c]=!0}),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(void 0,void 0,void 0,function(){var router;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return null==url||"#"===url[0]||SCHEME.test(url)?[3,2]:(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[4,router.componentOnReady()]):[3,2];case 1:return _a.sent(),[2,router.push(url,direction)];case 2:return[2,!1]}})})}},698:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return rIC}),__webpack_require__.d(__webpack_exports__,"b",function(){return assert}),__webpack_require__.d(__webpack_exports__,"c",function(){return clamp}),__webpack_require__.d(__webpack_exports__,"d",function(){return debounceEvent}),__webpack_require__.d(__webpack_exports__,"e",function(){return debounce}),__webpack_require__.d(__webpack_exports__,"f",function(){return findItemLabel}),__webpack_require__.d(__webpack_exports__,"g",function(){return hasShadowDom}),__webpack_require__.d(__webpack_exports__,"h",function(){return isEndSide}),__webpack_require__.d(__webpack_exports__,"i",function(){return now}),__webpack_require__.d(__webpack_exports__,"j",function(){return pointerCoord}),__webpack_require__.d(__webpack_exports__,"k",function(){return renderHiddenInput});var rIC=function(callback){"requestIdleCallback"in window?window.requestIdleCallback(callback):setTimeout(callback,32)},hasShadowDom=function(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},renderHiddenInput=function(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function(min,n,max){return Math.max(min,Math.min(n,max))},assert=function(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function(ev){return ev.timeStamp||Date.now()},pointerCoord=function(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function(func,wait){var timer;return void 0===wait&&(wait=0),function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];clearTimeout(timer),timer=setTimeout.apply(void 0,[func,wait].concat(args))}}}}]);
//# sourceMappingURL=33.790b4bd2510884d27da0.bundle.js.map