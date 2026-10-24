"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var s=g(function(q,n){
var h=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e,u){var t,a;if(!h(r))throw new TypeError(i('1TvAh',r));if(!m(e))throw new TypeError(i('1Tv2H',e));for(t=r.length,a=t-1;a>=0;a--)e.call(u,r[a],a,r),t!==r.length&&(a+=r.length-t,t=r.length);return r}n.exports=v
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
