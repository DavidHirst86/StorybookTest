(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{673:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_route",function(){return Route}),__webpack_require__.d(__webpack_exports__,"ion_route_redirect",function(){return RouteRedirect}),__webpack_require__.d(__webpack_exports__,"ion_router",function(){return Router}),__webpack_require__.d(__webpack_exports__,"ion_router_link",function(){return RouterLink});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(13),__webpack_require__(697)),_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(698),Route=function(){function Route(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.url="",this.ionRouteDataChanged=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionRouteDataChanged",7)}return Route.prototype.onUpdate=function(newValue){this.ionRouteDataChanged.emit(newValue)},Route.prototype.onComponentProps=function(newValue,oldValue){if(newValue!==oldValue){var keys1=newValue?Object.keys(newValue):[],keys2=oldValue?Object.keys(oldValue):[];if(keys1.length===keys2.length)for(var _i=0,keys1_1=keys1;_i<keys1_1.length;_i++){var key=keys1_1[_i];if(newValue[key]!==oldValue[key])return void this.onUpdate(newValue)}else this.onUpdate(newValue)}},Route.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},Route.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(Route,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!0,configurable:!0}),Route}(),RouteRedirect=function(){function RouteRedirect(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.ionRouteRedirectChanged=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionRouteRedirectChanged",7)}return RouteRedirect.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},RouteRedirect.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},RouteRedirect.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(RouteRedirect,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!0,configurable:!0}),RouteRedirect}(),generatePath=function(segments){return"/"+segments.filter(function(s){return s.length>0}).join("/")},parsePath=function(path){if(null==path)return[""];var segments=path.split("/").map(function(s){return s.trim()}).filter(function(s){return s.length>0});return 0===segments.length?[""]:segments},writeNavState=function(root,chain,direction,index,changed){return void 0===changed&&(changed=!1),tslib__WEBPACK_IMPORTED_MODULE_0__.b(void 0,void 0,void 0,function(){var outlet,route,result,e_1;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return _a.trys.push([0,6,,7]),outlet=searchNavNode(root),index>=chain.length||!outlet?[2,changed]:[4,outlet.componentOnReady()];case 1:return _a.sent(),route=chain[index],[4,outlet.setRouteId(route.id,route.params,direction)];case 2:return(result=_a.sent()).changed&&(direction="root",changed=!0),[4,writeNavState(result.element,chain,direction,index+1,changed)];case 3:return changed=_a.sent(),result.markVisible?[4,result.markVisible()]:[3,5];case 4:_a.sent(),_a.label=5;case 5:return[2,changed];case 6:return e_1=_a.sent(),console.error(e_1),[2,!1];case 7:return[2]}})})},QUERY=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=function(root){if(root){if(root.matches(QUERY))return root;var outlet=root.querySelector(QUERY);return outlet||void 0}},routeRedirect=function(path,routes){return routes.find(function(route){return function(input,route){var from=route.from;if(void 0===route.to)return!1;if(from.length>input.length)return!1;for(var i=0;i<from.length;i++){var expected=from[i];if("*"===expected)return!0;if(expected!==input[i])return!1}return from.length===input.length}(path,route)})},matchesIDs=function(ids,chain){for(var len=Math.min(ids.length,chain.length),i=0;i<len&&ids[i].toLowerCase()===chain[i].id;i++);return i},matchesPath=function(inputPath,chain){for(var allparams,segments=new RouterSegments(inputPath),matchesDefault=!1,i=0;i<chain.length;i++){var path=chain[i].path;if(""===path[0])matchesDefault=!0;else{for(var _i=0,path_1=path;_i<path_1.length;_i++){var segment=path_1[_i],data=segments.next();if(":"===segment[0]){if(""===data)return null;((allparams=allparams||[])[i]||(allparams[i]={}))[segment.slice(1)]=data}else if(data!==segment)return null}matchesDefault=!1}}return!matchesDefault||matchesDefault===(""===segments.next())?allparams?chain.map(function(route,i){return{id:route.id,path:route.path,params:mergeParams(route.params,allparams[i])}}):chain:null},mergeParams=function(a,b){return!a&&b?b:a&&!b?a:a&&b?Object.assign({},a,b):void 0},computePriority=function(chain){for(var score=1,level=1,_i=0,chain_2=chain;_i<chain_2.length;_i++)for(var _a=0,_b=chain_2[_i].path;_a<_b.length;_a++){var path=_b[_a];":"===path[0]?score+=Math.pow(1,level):""!==path&&(score+=Math.pow(2,level)),level++}return score},RouterSegments=function(){function RouterSegments(path){this.path=path.slice()}return RouterSegments.prototype.next=function(){return this.path.length>0?this.path.shift():""},RouterSegments}(),readRedirects=function(root){return Array.from(root.children).filter(function(el){return"ION-ROUTE-REDIRECT"===el.tagName}).map(function(el){var to=readProp(el,"to");return{from:parsePath(readProp(el,"from")),to:null==to?void 0:parsePath(to)}})},readRoutes=function(root){return flattenRouterTree(readRouteNodes(root))},readRouteNodes=function(root,node){return void 0===node&&(node=root),Array.from(node.children).filter(function(el){return"ION-ROUTE"===el.tagName&&el.component}).map(function(el){var component=readProp(el,"component");if(null==component)throw new Error("component missing in ion-route");return{path:parsePath(readProp(el,"url")),id:component.toLowerCase(),params:el.componentProps,children:readRouteNodes(root,el)}})},readProp=function(el,prop){return prop in el?el[prop]:el.hasAttribute(prop)?el.getAttribute(prop):null},flattenRouterTree=function(nodes){for(var routes=[],_i=0,nodes_1=nodes;_i<nodes_1.length;_i++){var node=nodes_1[_i];flattenNode([],routes,node)}return routes},flattenNode=function(chain,routes,node){var s=chain.slice();if(s.push({id:node.id,path:node.path,params:node.params}),0!==node.children.length)for(var _i=0,_a=node.children;_i<_a.length;_i++){var sub=_a[_i];flattenNode(s,routes,sub)}else routes.push(s)},Router=function(){function Router(hostRef){Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionRouteDidChange",7)}return Router.prototype.componentWillLoad=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return console.debug("[ion-router] router will load"),[4,searchNavNode(document.body)?Promise.resolve():new Promise(function(resolve){window.addEventListener("ionNavWillLoad",resolve,{once:!0})})];case 1:return _a.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return _a.sent(),[2]}})})},Router.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__.e)(this.onRoutesChanged.bind(this),100))},Router.prototype.onPopState=function(){var direction=this.historyDirection(),path=this.getPath();return console.debug("[ion-router] URL changed -> update nav",path,direction),this.writeNavStateRoot(path,direction)},Router.prototype.onBackButton=function(ev){var _this=this;ev.detail.register(0,function(){return _this.back()})},Router.prototype.push=function(url,direction){void 0===direction&&(direction="forward"),url.startsWith(".")&&(url=new URL(url,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",url,direction);var path=parsePath(url);return this.setPath(path,direction),this.writeNavStateRoot(path,direction)},Router.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},Router.prototype.printDebug=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(routes){console.group("[ion-core] ROUTES["+routes.length+"]");for(var _loop_1=function(chain){var path=[];chain.forEach(function(r){return path.push.apply(path,r.path)});var ids=chain.map(function(r){return r.id});console.debug("%c "+generatePath(path),"font-weight: bold; padding-left: 20px","=>\t","("+ids.join(", ")+")")},_i=0,routes_1=routes;_i<routes_1.length;_i++)_loop_1(routes_1[_i]);console.groupEnd()}(readRoutes(this.el)),function(redirects){console.group("[ion-core] REDIRECTS["+redirects.length+"]");for(var _i=0,redirects_1=redirects;_i<redirects_1.length;_i++){var redirect=redirects_1[_i];redirect.to&&console.debug("FROM: ","$c "+generatePath(redirect.from),"font-weight: bold"," TO: ","$c "+generatePath(redirect.to),"font-weight: bold")}console.groupEnd()}(readRedirects(this.el)),[2]})})},Router.prototype.navChanged=function(direction){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var _a,ids,outlet,routes,chain,path;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_b){switch(_b.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,(root=window.document.body,tslib__WEBPACK_IMPORTED_MODULE_0__.b(void 0,void 0,void 0,function(){var ids,outlet,node,id;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:ids=[],node=root,_a.label=1;case 1:return(outlet=searchNavNode(node))?[4,outlet.getRouteId()]:[3,3];case 2:return(id=_a.sent())?(node=id.element,id.element=void 0,ids.push(id),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:ids,outlet:outlet}]}})}))];case 1:return _a=_b.sent(),ids=_a.ids,outlet=_a.outlet,routes=readRoutes(this.el),(chain=function(ids,chains){for(var match=null,maxMatches=0,plainIDs=ids.map(function(i){return i.id}),_i=0,chains_1=chains;_i<chains_1.length;_i++){var chain=chains_1[_i],score=matchesIDs(plainIDs,chain);score>maxMatches&&(match=chain,maxMatches=score)}return match?match.map(function(route,i){return{id:route.id,path:route.path,params:mergeParams(route.params,ids[i]&&ids[i].params)}}):null}(ids,routes))?(path=function(chain){for(var path=[],_i=0,chain_1=chain;_i<chain_1.length;_i++)for(var route=chain_1[_i],_a=0,_b=route.path;_a<_b.length;_a++){var segment=_b[_a];if(":"===segment[0]){var param=route.params&&route.params[segment.slice(1)];if(!param)return null;path.push(param)}else""!==segment&&path.push(segment)}return path}(chain))?(console.debug("[ion-router] nav changed -> update URL",ids,path),this.setPath(path,direction),[4,this.safeWriteNavState(outlet,chain,"root",path,null,ids.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",ids.map(function(i){return i.id})),[2,!1]);case 2:return _b.sent(),[2,!0]}var root})})},Router.prototype.onRedirectChanged=function(){var path=this.getPath();path&&routeRedirect(path,readRedirects(this.el))&&this.writeNavStateRoot(path,"root")},Router.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},Router.prototype.historyDirection=function(){var win=window;null===win.history.state&&(this.state++,win.history.replaceState(this.state,win.document.title,win.document.location&&win.document.location.href));var state=win.history.state,lastState=this.lastState;return this.lastState=state,state>lastState?"forward":state<lastState?"back":"root"},Router.prototype.writeNavStateRoot=function(path,direction){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var redirects,redirect,redirectFrom,routes,chain;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){return path?(redirects=readRedirects(this.el),redirect=routeRedirect(path,redirects),redirectFrom=null,redirect&&(this.setPath(redirect.to,direction),redirectFrom=redirect.from,path=redirect.to),routes=readRoutes(this.el),(chain=function(path,chains){for(var match=null,matches=0,_i=0,chains_2=chains;_i<chains_2.length;_i++){var chain=chains_2[_i],matchedChain=matchesPath(path,chain);if(null!==matchedChain){var score=computePriority(matchedChain);score>matches&&(matches=score,match=matchedChain)}}return match}(path,routes))?[2,this.safeWriteNavState(document.body,chain,direction,path,redirectFrom)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},Router.prototype.safeWriteNavState=function(node,chain,direction,path,redirectFrom,index){return void 0===index&&(index=0),tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var unlock,changed,e_2;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return[4,this.lock()];case 1:unlock=_a.sent(),changed=!1,_a.label=2;case 2:return _a.trys.push([2,4,,5]),[4,this.writeNavState(node,chain,direction,path,redirectFrom,index)];case 3:return changed=_a.sent(),[3,5];case 4:return e_2=_a.sent(),console.error(e_2),[3,5];case 5:return unlock(),[2,changed]}})})},Router.prototype.lock=function(){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var p,resolve;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return p=this.waitPromise,this.waitPromise=new Promise(function(r){return resolve=r}),void 0===p?[3,2]:[4,p];case 1:_a.sent(),_a.label=2;case 2:return[2,resolve]}})})},Router.prototype.writeNavState=function(node,chain,direction,path,redirectFrom,index){return void 0===index&&(index=0),tslib__WEBPACK_IMPORTED_MODULE_0__.b(this,void 0,void 0,function(){var routeEvent,changed;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(routeEvent=this.routeChangeEvent(path,redirectFrom))&&this.ionRouteWillChange.emit(routeEvent),[4,writeNavState(node,chain,direction,index)]);case 1:return changed=_a.sent(),this.busy=!1,changed&&console.debug("[ion-router] route changed",path),routeEvent&&this.ionRouteDidChange.emit(routeEvent),[2,changed]}})})},Router.prototype.setPath=function(path,direction){this.state++,function(history,root,useHash,path,direction,state){var url=generatePath(parsePath(root).concat(path));useHash&&(url="#"+url),"forward"===direction?history.pushState(state,"",url):history.replaceState(state,"",url)}(window.history,this.root,this.useHash,path,direction,this.state)},Router.prototype.getPath=function(){return function(loc,root,useHash){var pathname=loc.pathname;if(useHash){var hash=loc.hash;pathname="#"===hash[0]?hash.slice(1):""}return function(prefix,path){if(prefix.length>path.length)return null;if(prefix.length<=1&&""===prefix[0])return path;for(var i=0;i<prefix.length;i++)if(prefix[i].length>0&&prefix[i]!==path[i])return null;return path.length===prefix.length?[""]:path.slice(prefix.length)}(parsePath(root),parsePath(pathname))}(window.location,this.root,this.useHash)},Router.prototype.routeChangeEvent=function(path,redirectFromPath){var from=this.previousPath,to=generatePath(path);return this.previousPath=to,to===from?null:{from:from,redirectedFrom:redirectFromPath?generatePath(redirectFromPath):null,to:to}},Object.defineProperty(Router.prototype,"el",{get:function(){return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),Router}(),RouterLink=function(){function RouterLink(hostRef){var _this=this;Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.routerDirection="forward",this.onClick=function(ev){Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__.d)(_this.href,ev,_this.routerDirection)}}return RouterLink.prototype.render=function(){var _a,mode=Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),attrs={href:this.href,rel:this.rel,target:this.target};return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:this.onClick,class:Object.assign({},Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.color),(_a={},_a[mode]=!0,_a["ion-activatable"]=!0,_a))},Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("a",Object.assign({},attrs),Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null)))},Object.defineProperty(RouterLink,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),RouterLink}()},697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createColorClasses}),__webpack_require__.d(__webpack_exports__,"b",function(){return getClassMap}),__webpack_require__.d(__webpack_exports__,"c",function(){return hostContext}),__webpack_require__.d(__webpack_exports__,"d",function(){return openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter(function(c){return null!=c}).map(function(c){return c.trim()}).filter(function(c){return""!==c}):[]}(classes).forEach(function(c){return map[c]=!0}),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return tslib__WEBPACK_IMPORTED_MODULE_0__.b(void 0,void 0,void 0,function(){var router;return tslib__WEBPACK_IMPORTED_MODULE_0__.e(this,function(_a){switch(_a.label){case 0:return null==url||"#"===url[0]||SCHEME.test(url)?[3,2]:(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[4,router.componentOnReady()]):[3,2];case 1:return _a.sent(),[2,router.push(url,direction)];case 2:return[2,!1]}})})}},698:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return rIC}),__webpack_require__.d(__webpack_exports__,"b",function(){return assert}),__webpack_require__.d(__webpack_exports__,"c",function(){return clamp}),__webpack_require__.d(__webpack_exports__,"d",function(){return debounceEvent}),__webpack_require__.d(__webpack_exports__,"e",function(){return debounce}),__webpack_require__.d(__webpack_exports__,"f",function(){return findItemLabel}),__webpack_require__.d(__webpack_exports__,"g",function(){return hasShadowDom}),__webpack_require__.d(__webpack_exports__,"h",function(){return isEndSide}),__webpack_require__.d(__webpack_exports__,"i",function(){return now}),__webpack_require__.d(__webpack_exports__,"j",function(){return pointerCoord}),__webpack_require__.d(__webpack_exports__,"k",function(){return renderHiddenInput});var rIC=function(callback){"requestIdleCallback"in window?window.requestIdleCallback(callback):setTimeout(callback,32)},hasShadowDom=function(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},renderHiddenInput=function(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function(min,n,max){return Math.max(min,Math.min(n,max))},assert=function(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function(ev){return ev.timeStamp||Date.now()},pointerCoord=function(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function(func,wait){var timer;return void 0===wait&&(wait=0),function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];clearTimeout(timer),timer=setTimeout.apply(void 0,[func,wait].concat(args))}}}}]);
//# sourceMappingURL=41.790b4bd2510884d27da0.bundle.js.map