// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,o,n){var i,l;if(!t(s))throw new TypeError(e("0joBO",s));if(!r(o))throw new TypeError(e("0jo2S",o));for(l=(i=s.length)-1;l>=0;l--)o.call(n,s[l],l,s),i!==s.length&&(l+=s.length-i,i=s.length);return s}export{s as default};
//# sourceMappingURL=index.mjs.map
