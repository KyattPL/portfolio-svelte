var Fe=Object.defineProperty;var Je=(n,e,t)=>e in n?Fe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>(Je(n,typeof e!="symbol"?e+"":e,t),t);import{S as He,i as We,s as xe,a as Ge,e as q,c as Me,b as W,g as ne,t as z,d as re,f as B,h as K,j as Xe,o as he,k as Ye,l as Qe,m as Ze,n as ue,p as C,q as et,r as tt,u as nt,v as G,w as we,x as M,y as X,z as Ue}from"./chunks/index-90ff4a63.js";import{g as Ie,f as De,s as J,a as me,i as rt}from"./chunks/singletons-d8b4bc4f.js";import{s as at}from"./chunks/paths-6cd3a76e.js";const st=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ot=function(n,e){return new URL(n,e).href},Te={},H=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=ot(s,o),s in Te)return;Te[s]=!0;const u=s.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":st,u||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),u)return new Promise((w,p)=>{l.addEventListener("load",w),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};class te{constructor(e,t){fe(this,"name","HttpError");fe(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Ce{constructor(e,t){this.status=e,this.location=t}}function it(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function lt(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(n,e){const t=new URL(n);for(const o of ct){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,u)=>u(n,s),ut(t),t}function ut(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}const Be=window.fetch;function pt(n,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;e&&typeof e.body=="string"&&(o+=`[data-hash="${dt(e.body)}"]`);const s=document.querySelector(o);if(s&&s.textContent){const{body:u,...r}=JSON.parse(s.textContent);return Promise.resolve(new Response(u,r))}return Be(n,e)}const ht=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function mt(n){const e=[],t=[];let o=!0;if(/\]\[/.test(n))throw new Error(`Invalid route ${n} \u2014 parameters must be separated`);if(Ne("[",n)!==Ne("]",n))throw new Error(`Invalid route ${n} \u2014 brackets are unbalanced`);return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(_t).map((u,r,l)=>{const w=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const b=r===l.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((R,S)=>{if(S%2){const F=ht.exec(R);if(!F)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,T,N]=F;return e.push(T),t.push(N),O?"(.*?)":"([^/]+?)"}return b&&R.includes(".")&&(o=!1),R.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function _t(n){return!/^\([^)]+\)$/.test(n)}function gt(n,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const r=e[u],l=t[u],w=n[u+1]||"";if(l){const p=o[l];if(!p)throw new Error(`Missing "${l}" param matcher`);if(!p(w))return}s[r]=w}return s}function Ne(n,e){let t=0;for(let o=0;o<e.length;o+=1)e[o]===n&&(t+=1);return t}function wt(n,e,t,o){const s=new Set(e);return Object.entries(t).map(([l,[w,p,b]])=>{const{pattern:R,names:S,types:F}=mt(l),O={id:l,exec:T=>{const N=R.exec(T);if(N)return gt(N,S,F,o)},errors:[1,...b||[]].map(T=>n[T]),layouts:[0,...p||[]].map(r),leaf:u(w)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function u(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function r(l){return l===void 0?l:[s.has(l),n[l]]}}function yt(n,e){return new te(n,e)}function bt(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[1],errors:r[3]}}}return s&&(e=new s(u(n))),{c(){e&&G(e.$$.fragment),t=q()},l(r){e&&we(e.$$.fragment,r),t=q()},m(r,l){e&&M(e,r,l),W(r,t,l),o=!0},p(r,l){const w={};if(l&2&&(w.data=r[1]),l&8&&(w.errors=r[3]),s!==(s=r[0][0])){if(e){ne();const p=e;z(p.$$.fragment,1,0,()=>{X(p,1)}),re()}s?(e=new s(u(r)),G(e.$$.fragment),B(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(r){o||(e&&B(e.$$.fragment,r),o=!0)},o(r){e&&z(e.$$.fragment,r),o=!1},d(r){r&&K(t),e&&X(e,r)}}}function vt(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[1],errors:r[3],$$slots:{default:[kt]},$$scope:{ctx:r}}}}return s&&(e=new s(u(n))),{c(){e&&G(e.$$.fragment),t=q()},l(r){e&&we(e.$$.fragment,r),t=q()},m(r,l){e&&M(e,r,l),W(r,t,l),o=!0},p(r,l){const w={};if(l&2&&(w.data=r[1]),l&8&&(w.errors=r[3]),l&525&&(w.$$scope={dirty:l,ctx:r}),s!==(s=r[0][0])){if(e){ne();const p=e;z(p.$$.fragment,1,0,()=>{X(p,1)}),re()}s?(e=new s(u(r)),G(e.$$.fragment),B(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(r){o||(e&&B(e.$$.fragment,r),o=!0)},o(r){e&&z(e.$$.fragment,r),o=!1},d(r){r&&K(t),e&&X(e,r)}}}function kt(n){let e,t,o;var s=n[0][1];function u(r){return{props:{data:r[2],errors:r[3]}}}return s&&(e=new s(u(n))),{c(){e&&G(e.$$.fragment),t=q()},l(r){e&&we(e.$$.fragment,r),t=q()},m(r,l){e&&M(e,r,l),W(r,t,l),o=!0},p(r,l){const w={};if(l&4&&(w.data=r[2]),l&8&&(w.errors=r[3]),s!==(s=r[0][1])){if(e){ne();const p=e;z(p.$$.fragment,1,0,()=>{X(p,1)}),re()}s?(e=new s(u(r)),G(e.$$.fragment),B(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(r){o||(e&&B(e.$$.fragment,r),o=!0)},o(r){e&&z(e.$$.fragment,r),o=!1},d(r){r&&K(t),e&&X(e,r)}}}function Ve(n){let e,t=n[5]&&qe(n);return{c(){e=Ye("div"),t&&t.c(),this.h()},l(o){e=Qe(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Ze(e);t&&t.l(s),s.forEach(K),this.h()},h(){ue(e,"id","svelte-announcer"),ue(e,"aria-live","assertive"),ue(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(o,s){W(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=qe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&K(e),t&&t.d()}}}function qe(n){let e;return{c(){e=et(n[6])},l(t){e=tt(t,n[6])},m(t,o){W(t,e,o)},p(t,o){o&64&&nt(e,t[6])},d(t){t&&K(e)}}}function Et(n){let e,t,o,s,u;const r=[vt,bt],l=[];function w(b,R){return b[0][1]?0:1}e=w(n),t=l[e]=r[e](n);let p=n[4]&&Ve(n);return{c(){t.c(),o=Ge(),p&&p.c(),s=q()},l(b){t.l(b),o=Me(b),p&&p.l(b),s=q()},m(b,R){l[e].m(b,R),W(b,o,R),p&&p.m(b,R),W(b,s,R),u=!0},p(b,[R]){let S=e;e=w(b),e===S?l[e].p(b,R):(ne(),z(l[S],1,1,()=>{l[S]=null}),re(),t=l[e],t?t.p(b,R):(t=l[e]=r[e](b),t.c()),B(t,1),t.m(o.parentNode,o)),b[4]?p?p.p(b,R):(p=Ve(b),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(b){u||(B(t),u=!0)},o(b){z(t),u=!1},d(b){l[e].d(b),b&&K(o),p&&p.d(b),b&&K(s)}}}function St(n,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{data_0:r=null}=e,{data_1:l=null}=e,{errors:w}=e;Xe(o.page.notify);let p=!1,b=!1,R=null;return he(()=>{const S=o.page.subscribe(()=>{p&&(t(5,b=!0),t(6,R=document.title||"untitled page"))});return t(4,p=!0),S}),n.$$set=S=>{"stores"in S&&t(7,o=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,u=S.components),"data_0"in S&&t(1,r=S.data_0),"data_1"in S&&t(2,l=S.data_1),"errors"in S&&t(3,w=S.errors)},n.$$.update=()=>{n.$$.dirty&384&&o.page.set(s)},[u,r,l,w,p,b,R,o,s]}class Rt extends He{constructor(e){super(),We(this,e,St,Et,xe,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const Lt={},ae=[()=>H(()=>import("./chunks/0-9a1160c6.js"),["chunks\\0-9a1160c6.js","chunks\\_layout-8d2a742b.js","components\\pages\\_layout.svelte-3f84b6c2.js","assets\\_layout-7abaa15d.css","chunks\\index-90ff4a63.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>H(()=>import("./chunks/1-0b1df035.js"),["chunks\\1-0b1df035.js","components\\error.svelte-d74e6f34.js","chunks\\index-90ff4a63.js","chunks\\singletons-d8b4bc4f.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>H(()=>import("./chunks/2-af48475a.js"),["chunks\\2-af48475a.js","components\\pages\\_page.svelte-4854698a.js","chunks\\index-90ff4a63.js"],import.meta.url),()=>H(()=>import("./chunks/3-755a09e5.js"),["chunks\\3-755a09e5.js","components\\pages\\about\\_page.svelte-d37fbe01.js","chunks\\index-90ff4a63.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>H(()=>import("./chunks/4-7766af50.js"),["chunks\\4-7766af50.js","components\\pages\\github\\_page.svelte-f2fcb239.js","chunks\\index-90ff4a63.js"],import.meta.url),()=>H(()=>import("./chunks/5-2611afaf.js"),["chunks\\5-2611afaf.js","components\\pages\\projects\\_page.svelte-91c28695.js","chunks\\index-90ff4a63.js"],import.meta.url)],$t=[],Pt={"":[2],about:[3],github:[4],projects:[5]},Ot="/__data.js",Ke="sveltekit:scroll",V="sveltekit:index",de=wt(ae,$t,Pt,Lt),_e=ae[0],ge=ae[1];_e();ge();let Q={};try{Q=JSON.parse(sessionStorage[Ke])}catch{}function pe(n){Q[n]=me()}function jt({target:n,base:e,trailing_slash:t}){var Pe;const o=[],s={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,session_id:0,url:null},l=!1,w=!0,p=!1,b=1,R=null,S=!1,F,O=(Pe=history.state)==null?void 0:Pe[V];O||(O=Date.now(),history.replaceState({...history.state,[V]:O},"",location.href));const T=Q[O];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let N=!1,x,ye;function be(){return R||(R=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),R=null,S=!1})),R}async function ve(a,{noscroll:c=!1,replaceState:d=!1,keepfocus:i=!1,state:f={}},v){return typeof a=="string"&&(a=new URL(a,Ie(document))),ie({url:a,scroll:c?me():null,keepfocus:i,redirect_chain:v,details:{state:f,replaceState:d},accepted:()=>{},blocked:()=>{}})}async function ke(a){const c=$e(a);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Le(c),s.id=c.id,s.promise}async function Ee(a,c,d,i){var E,k;const f=$e(a),v=ye={};let g=f&&await Le(f);if(!g&&a.origin===location.origin&&a.pathname===location.pathname&&(g=await ee({status:404,error:new Error(`Not found: ${a.pathname}`),url:a,routeId:null})),!g)return await Y(a),!1;if(a=(f==null?void 0:f.url)||a,ye!==v)return!1;if(o.length=0,g.type==="redirect")if(c.length>10||c.includes(a.pathname))g=await ee({status:500,error:new Error("Redirect loop"),url:a,routeId:null});else return ve(new URL(g.location,a).href,{},[...c,a.pathname]),!1;else((k=(E=g.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await J.updated.check()&&await Y(a);if(p=!0,d&&d.details){const{details:m}=d,y=m.replaceState?0:1;m.state[V]=O+=y,history[m.replaceState?"replaceState":"pushState"](m.state,"",a)}if(l?(r=g.state,g.props.page&&(g.props.page.url=a),F.$set(g.props)):Se(g),d){const{scroll:m,keepfocus:y}=d;if(!y){const P=document.body,U=P.getAttribute("tabindex");P.tabIndex=-1,P.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),U!==null?P.setAttribute("tabindex",U):P.removeAttribute("tabindex")}if(await Ue(),w){const P=a.hash&&document.getElementById(a.hash.slice(1));m?scrollTo(m.x,m.y):P?P.scrollIntoView():scrollTo(0,0)}}else await Ue();s.promise=null,s.id=null,w=!0,g.props.page&&(x=g.props.page),i&&i(),p=!1}function Se(a){r=a.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),x=a.props.page,F=new Rt({target:n,props:{...a.props,stores:J},hydrate:!0});const d={from:null,to:new URL(location.href)};u.after_navigate.forEach(i=>i(d)),l=!0}async function Z({url:a,params:c,branch:d,status:i,error:f,routeId:v,validation_errors:g}){var U;const E=d.filter(Boolean),k={type:"loaded",state:{url:a,params:c,branch:d,error:f,session_id:b},props:{components:E.map($=>$.node.component),errors:g}};let m={},y=!x;for(let $=0;$<E.length;$+=1){const j=E[$];m={...m,...j.data},(y||!r.branch.some(h=>h===j))&&(k.props[`data_${$}`]=m,y=y||Object.keys((U=j.data)!=null?U:{}).length>0)}if(y||(y=Object.keys(x.data).length!==Object.keys(m).length),!r.url||a.href!==r.url.href||r.error!==f||y){k.props.page={error:f,params:c,routeId:v,status:i,url:a,data:y?m:x.data};const $=(j,h)=>{Object.defineProperty(k.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${h}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return k}async function se({loader:a,parent:c,url:d,params:i,routeId:f,server_data_node:v}){var m,y,P,U,$;let g=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((m=k.shared)!=null&&m.load){let j=function(..._){for(const L of _){const{href:I}=new URL(L,d);E.dependencies.add(I)}};const h={};for(const _ in i)Object.defineProperty(h,_,{get(){return E.params.add(_),i[_]},enumerable:!0});const A={routeId:f,params:h,data:(y=v==null?void 0:v.data)!=null?y:null,url:ft(d,()=>{E.url=!0}),async fetch(_,L){let I;typeof _=="string"?I=_:(I=_.url,L={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...L});const D=new URL(I,d).href;return j(D),l?Be(D,L):pt(I,L)},setHeaders:()=>{},depends:j,parent(){return E.parent=!0,c()}};Object.defineProperties(A,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(P=await k.shared.load.call(null,A))!=null?P:null}return{node:k,loader:a,server:v,shared:(U=k.shared)!=null&&U.load?{type:"data",data:g,uses:E}:null,data:($=g!=null?g:v==null?void 0:v.data)!=null?$:null}}function Re(a,c,d){if(S)return!0;if(!d)return!1;if(d.parent&&c||a.url&&d.url)return!0;for(const i of a.params)if(d.params.has(i))return!0;for(const i of d.dependencies)if(o.some(f=>f(new URL(i))))return!0;return!1}function oe(a,c){var d,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&c!=null?c:null}async function Le({id:a,url:c,params:d,route:i}){if(s.id===a&&s.promise)return s.promise;const{errors:f,layouts:v,leaf:g}=i,E=r.url&&{url:a!==r.url.pathname+r.url.search,params:Object.keys(d).filter(h=>r.params[h]!==d[h])},k=[...v,g];f.forEach(h=>h==null?void 0:h().catch(()=>{})),k.forEach(h=>h==null?void 0:h[1]().catch(()=>{}));let m=null;const y=k.reduce((h,A,_)=>{var D;const L=r.branch[_],I=!!(A!=null&&A[0])&&((L==null?void 0:L.loader)!==A[1]||Re(E,h.some(Boolean),(D=L.server)==null?void 0:D.uses));return h.push(I),h},[]);if(y.some(Boolean)){try{m=await ze(c,y)}catch(h){return ee({status:500,error:h,url:c,routeId:i.id})}if(m.type==="redirect")return m}const P=m==null?void 0:m.nodes;let U=!1;const $=k.map(async(h,A)=>{var le,Oe;if(!h)return;const _=r.branch[A],L=(le=P==null?void 0:P[A])!=null?le:null;if((!L||L.type==="skip")&&h[1]===(_==null?void 0:_.loader)&&!Re(E,U,(Oe=_.shared)==null?void 0:Oe.uses))return _;if(U=!0,(L==null?void 0:L.type)==="error")throw L.httperror?yt(L.httperror.status,L.httperror.message):L.error;return se({loader:h[1],url:c,params:d,routeId:i.id,parent:async()=>{var Ae;const je={};for(let ce=0;ce<A;ce+=1)Object.assign(je,(Ae=await $[ce])==null?void 0:Ae.data);return je},server_data_node:oe(L,_==null?void 0:_.server)})});for(const h of $)h.catch(()=>{});const j=[];for(let h=0;h<k.length;h+=1)if(k[h])try{j.push(await $[h])}catch(A){const _=A;if(_ instanceof Ce)return{type:"redirect",location:_.location};const L=A instanceof te?A.status:500;for(;h--;)if(f[h]){let I,D=h;for(;!j[D];)D-=1;try{return I={node:await f[h](),loader:f[h],data:{},server:null,shared:null},await Z({url:c,params:d,branch:j.slice(0,D+1).concat(I),status:L,error:_,routeId:i.id})}catch{continue}}await Y(c);return}else j.push(void 0);return await Z({url:c,params:d,branch:j,status:200,error:null,routeId:i.id})}async function ee({status:a,error:c,url:d,routeId:i}){var m;const f={},v=await _e();let g=null;if(v.server)try{const y=await ze(d,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;g=(m=y.nodes[0])!=null?m:null}catch{await Y(d);return}const E=await se({loader:_e,url:d,params:f,routeId:i,parent:()=>Promise.resolve({}),server_data_node:oe(g)}),k={node:await ge(),loader:ge,shared:null,server:null,data:null};return await Z({url:d,params:f,branch:[E,k],status:a,error:c,routeId:i})}function $e(a){if(a.origin!==location.origin||!a.pathname.startsWith(e))return;const c=decodeURI(a.pathname.slice(e.length)||"/");for(const d of de){const i=d.exec(c);if(i){const f=new URL(a.origin+it(a.pathname,t)+a.search+a.hash);return{id:f.pathname+f.search,route:d,params:lt(i),url:f}}}}async function ie({url:a,scroll:c,keepfocus:d,redirect_chain:i,details:f,accepted:v,blocked:g}){const E=r.url;let k=!1;const m={from:E,to:a,cancel:()=>k=!0};if(u.before_navigate.forEach(y=>y(m)),k){g();return}pe(O),v(),l&&J.navigating.set({from:r.url,to:a}),await Ee(a,i,{scroll:c,keepfocus:d,details:f},()=>{const y={from:E,to:a};u.after_navigate.forEach(P=>P(y)),J.navigating.set(null)})}function Y(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{he(()=>(u.after_navigate.push(a),()=>{const c=u.after_navigate.indexOf(a);u.after_navigate.splice(c,1)}))},before_navigate:a=>{he(()=>(u.before_navigate.push(a),()=>{const c=u.before_navigate.indexOf(a);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(p||!l)&&(w=!1)},goto:(a,c={})=>ve(a,c,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:c}=new URL(a,location.href);o.push(d=>d.href===c)}return be()},invalidateAll:()=>(S=!0,be()),prefetch:async a=>{const c=new URL(a,Ie(document));await ke(c)},prefetch_routes:async a=>{const d=(a?de.filter(i=>a.some(f=>i.exec(f))):de).map(i=>Promise.all([...i.layouts,i.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let f=!1;const v={from:r.url,to:null,cancel:()=>f=!0};u.before_navigate.forEach(g=>g(v)),f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){pe(O);try{sessionStorage[Ke]=JSON.stringify(Q)}catch{}}});const a=i=>{const{url:f,options:v}=De(i);f&&v.prefetch===""&&ke(f)};let c;const d=i=>{clearTimeout(c),c=setTimeout(()=>{var f;(f=i.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:f,url:v,options:g}=De(i);if(!f||!v)return;const E=f instanceof SVGAElement;if(!E&&!(v.protocol==="https:"||v.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||g.reload===""||(E?f.target.baseVal:f.target))return;const[m,y]=v.href.split("#");if(y!==void 0&&m===location.href.split("#")[0]){N=!0,pe(O),J.page.set({...x,url:v}),J.page.notify();return}ie({url:v,scroll:g.noscroll===""?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:v.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault()})}),addEventListener("popstate",i=>{if(i.state){if(i.state[V]===O)return;ie({url:new URL(location.href),scroll:Q[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[V]},blocked:()=>{const f=O-i.state[V];history.go(f)}})}}),addEventListener("hashchange",()=>{N&&(N=!1,history.replaceState({...history.state,[V]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:a,error:c,node_ids:d,params:i,routeId:f,data:v,errors:g})=>{const E=new URL(location.href);let k;try{const m=d.map(async(y,P)=>{const U=v[P];return se({loader:ae[y],url:E,params:i,routeId:f,parent:async()=>{const $={};for(let j=0;j<P;j+=1)Object.assign($,(await m[j]).data);return $},server_data_node:oe(U)})});k=await Z({url:E,params:i,branch:await Promise.all(m),status:a,error:c!=null&&c.__is_http_error?new te(c.status,c.message):c,validation_errors:g,routeId:f})}catch(m){const y=m;if(y instanceof Ce){await Y(new URL(m.location,location.href));return}k=await ee({status:y instanceof te?y.status:500,error:y,url:E,routeId:f})}Se(k)}}}let At=1;async function ze(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Ot,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(At++)),await H(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}async function Ct({env:n,hydrate:e,paths:t,target:o,trailing_slash:s}){at(t);const u=jt({target:o,base:t.base,trailing_slash:s});rt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Ct as start};
