(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{9852:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job-manage/add",function(){return r(5976)}])},185:function(e,t,r){"use strict";r.d(t,{rU:function(){return c.r}});var n=r(5893),s=r(7294),a=r(1163),u=r(5697),i=r.n(u),l=r(7268);function o(e){let{id:t,fade:r}=e,u=(0,a.useRouter)(),[i,o]=(0,s.useState)([]);function c(e){if(r){let t={...e,fade:!0};o(r=>r.map(r=>r===e?t:r)),setTimeout(()=>{o(e=>e.filter(e=>e!==t))},250)}else o(t=>t.filter(t=>t!==e))}return((0,s.useEffect)(()=>{let e=l.Ak.onAlert(t).subscribe(e=>{e.message?(o(t=>[...t,e]),e.autoClose&&setTimeout(()=>c(e),3e3)):o(e=>{let t=e.filter(e=>e.keepAfterRouteChange);return t.forEach(e=>delete e.keepAfterRouteChange),t})}),r=()=>l.Ak.clear(t);return u.events.on("routeChangeStart",r),()=>{e.unsubscribe(),u.events.off("routeChangeStart",r)}},[]),i.length)?(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"m-3",children:i.map((e,t)=>(0,n.jsxs)("div",{className:function(e){if(!e)return;let t=["alert","alert-dismissable"],r={[l.NK.Success]:"alert-success",[l.NK.Error]:"alert-danger",[l.NK.Info]:"alert-info",[l.NK.Warning]:"alert-warning"};return t.push(r[e.type]),e.fade&&t.push("fade"),t.join(" ")}(e),children:[(0,n.jsx)("a",{className:"close",onClick:()=>c(e),children:"\xd7"}),(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.message}})]},t))})}):null}o.propTypes={id:i().string,fade:i().bool},o.defaultProps={id:"default-alert",fade:!0};var c=r(2815);function f(e){let{children:t,href:r,exact:s,...u}=e,{pathname:i}=(0,a.useRouter)(),l=s?i===r:i.startsWith(r);return l&&(u.className+=" active"),(0,n.jsx)(c.r,{href:r,...u,children:t})}f.propTypes={href:i().string.isRequired,exact:i().bool},f.defaultProps={exact:!1}},5976:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294),r(185),r(7268),r(8492),r(6675),r(9008),r(6708);var s=r(986);t.default=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.A,{})})}}},function(e){e.O(0,[319,76,877,968,762,506,159,708,986,774,888,179],function(){return e(e.s=9852)}),_N_E=e.O()}]);