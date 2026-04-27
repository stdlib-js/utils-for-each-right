"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=g(function(q,i){
var h=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e,s){var t,a;if(!h(r))throw new TypeError(u('1TvAh',r));if(!m(e))throw new TypeError(u('1Tv2H',e));for(t=r.length,a=t-1;a>=0;a--)e.call(s,r[a],a,r),t!==r.length&&(a+=r.length-t,t=r.length);return r}i.exports=v
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
