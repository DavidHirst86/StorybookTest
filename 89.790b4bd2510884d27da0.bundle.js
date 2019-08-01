(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{683:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_split_pane",function(){return SplitPane});var _chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(115),QUERY=(__webpack_require__(13),{xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""}),SplitPane=function(){function SplitPane(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__.m)(this,hostRef),this.visible=!1,this.disabled=!1,this.when=QUERY.lg,this.ionSplitPaneVisible=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionSplitPaneVisible",7)}return SplitPane.prototype.visibleChanged=function(visible){var detail={visible:visible,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(detail)},SplitPane.prototype.componentDidLoad=function(){this.styleChildren(),this.updateState()},SplitPane.prototype.componentDidUnload=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},SplitPane.prototype.updateState=function(){var _this=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var query=this.when;if("boolean"!=typeof query){var mediaQuery=QUERY[query]||query;if(0!==mediaQuery.length){if(window.matchMedia){var callback_1=function(q){_this.visible=q.matches},mediaList_1=window.matchMedia(mediaQuery);mediaList_1.addListener(callback_1),this.rmL=function(){return mediaList_1.removeListener(callback_1)},this.visible=mediaList_1.matches}}else this.visible=!1}else this.visible=query}},SplitPane.prototype.isPane=function(element){return!!this.visible&&(element.parentElement===this.el&&element.classList.contains("split-pane-side"))},SplitPane.prototype.styleChildren=function(){for(var contentId=this.contentId,children=this.el.children,nu=this.el.childElementCount,foundMain=!1,i=0;i<nu;i++){var child=children[i],isMain=void 0!==contentId?child.id===contentId:child.hasAttribute("main");if(isMain){if(foundMain)return void console.warn("split pane cannot have more than one main node");foundMain=!0}setPaneClass(child,isMain)}foundMain||console.warn("split pane does not have a specified main node")},SplitPane.prototype.hostData=function(){var _a,mode=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__.e)(this);return{class:(_a={},_a[mode]=!0,_a["split-pane-"+mode]=!0,_a["split-pane-visible"]=this.visible,_a)}},Object.defineProperty(SplitPane.prototype,"el",{get:function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(SplitPane,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:!0,configurable:!0}),SplitPane.prototype.render=function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__.i)(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__.a,this.hostData())},Object.defineProperty(SplitPane,"style",{get:function(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),SplitPane}(),setPaneClass=function(el,isMain){var toAdd,toRemove;isMain?(toAdd="split-pane-main",toRemove="split-pane-side"):(toAdd="split-pane-side",toRemove="split-pane-main");var classList=el.classList;classList.add(toAdd),classList.remove(toRemove)}}}]);
//# sourceMappingURL=89.790b4bd2510884d27da0.bundle.js.map