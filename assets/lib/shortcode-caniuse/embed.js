(function(){let u=(e,n)=>(n||document).querySelector(e),f=e=>document.querySelectorAll(e),[a,y,h,v,i,E]=["feature","past","future","theme","meta","observer"],[w,l,M,I]=['script[src*="caniuse"][src*="/embed.js"]',"caniuse-embed.vercel.app","caniuse.pengzhanbo.cn","https://"],[m,d]=[".ciu-embed","ciu-embed-iframe"],L=["style","display:block;width:100%;height:330px;border:none;border-radius:0;"],p=u(w),b="";if(p){let e=s(p,"src");b=`${I}${e.includes(l)?l:M}`}let S=1,T=f(m);for(let e of T){let n=g(e);if(n){let t=x(e,n);s(e,E)==="true"&&q(e,t)}}window.addEventListener("message",k);function k(e){let n=A(e.data),{type:t,payload:o={}}=n;if(t==="ciu_embed"){let r=f(m);for(let c of r)if(o[a]===s(c,a)&&o[i]===s(c,i)){let $=u(`.${d}`,c);$&&($.style.height=`${Math.ceil(o.height)}px`)}}}function q(e,n){if(typeof window.MutationObserver>"u")return;new MutationObserver(o=>{for(let r of o)if(r.type==="attributes"){let c=g(e);c&&(n.src=c)}}).observe(e,{attributes:!0})}function g(e){let n=s(e,a);if(!n)return"";let t=s(e,i);t||s(e,i,t=`${Date.now()}-${S++}`);let o=[y,h,v].map(r=>[r,s(e,r)]).filter(([,r])=>r).map(([r,c])=>`${r}=${c}`).join("&");return`${b}/${n}#${i}=${t}${o?`&${o}`:""}`}function x(e,n){let t=document.createElement("iframe");return t.src=n,t.className=d,t.style.cssText=L[1],t.allow="fullscreen",e.appendChild(t),t}function s(e,...n){let t=`data-${n[0]}`;if(n.length===1)return e.getAttribute(t)||"";e.setAttribute(t,n[1])}function A(e){try{return typeof e=="string"?JSON.parse(e):e}catch{}return{}}})();