(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9572:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(4938)),l=n(5893),s=(0,o.default)((0,l.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=s},6215:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(4938)),l=n(5893),s=(0,o.default)((0,l.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=s},9937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(4238)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),s=n(1003),a=n(7795),i=n(4465),c=n(2692),u=n(8245),d=n(9246),f=n(227),p=n(3468);let m=new Set;function h(e,t,n,r){if(s.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:a.formatUrl(e)}let x=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:m,children:x,prefetch:v,passHref:j,replace:y,shallow:b,scroll:S,locale:w,onClick:_,onMouseEnter:E,onTouchStart:C,legacyBehavior:M=!1}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,M&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==v,P=l.default.useContext(c.RouterContext),Z=l.default.useContext(u.AppRouterContext),I=null!=P?P:Z,L=!P,{href:k,as:T}=l.default.useMemo(()=>{if(!P){let e=g(a);return{href:e,as:m?g(m):e}}let[t,n]=s.resolveHref(P,a,!0);return{href:t,as:m?s.resolveHref(P,m):n||t}},[P,a,m]),B=l.default.useRef(k),R=l.default.useRef(T);M&&(r=l.default.Children.only(n));let D=M?r&&"object"==typeof r&&r.ref:t,[z,U,A]=d.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(R.current!==T||B.current!==k)&&(A(),R.current=T,B.current=k),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,k,A,z]);l.default.useEffect(()=>{I&&U&&O&&h(I,k,T,{locale:w})},[T,k,U,w,O,null==P?void 0:P.locale,I]);let H={ref:F,onClick(e){M||"function"!=typeof _||_(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,a,i,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?l.default.startTransition(m):m()}(e,I,k,T,y,b,S,w,L,O)},onMouseEnter(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(O||!L)&&h(I,k,T,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof C||C(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(O||!L)&&h(I,k,T,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||j||"a"===r.type&&!("href"in r.props)){let K=void 0!==w?w:null==P?void 0:P.locale,G=(null==P?void 0:P.isLocaleDomain)&&f.getDomainLocale(T,K,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);H.href=G||p.addBasePath(i.addLocale(T,K,null==P?void 0:P.defaultLocale))}return M?l.default.cloneElement(r,H):l.default.createElement("a",Object.assign({},N,H),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[u,d]=r.useState(!1),[f,p]=r.useState(null);r.useEffect(()=>{if(l){if(!c&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),s.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),s.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(r)}},[f,c,n,t,u]);let m=r.useCallback(()=>{d(!1)},[]);return[p,u,m]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,s=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4238:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return _}});var r=n(5893),o=n(9008),l=n.n(o),s=n(7294),a=n(8492),i=n(6675),c=n(7357),u=n(8263),d=n(2623),f=n(363),p=n(3972),m=n(9397),h=n(6708),g=n(9572),x=n(6720),v=n(5582),j=n(6215),y=n(7952),b=n(1664),S=n.n(b),w=!0;function _(e){let{data:t,datafull:n}=e,[o,b]=(0,s.useState)(0);return console.log("dataIndex",o),console.log("datafull",n[o]),console.log("data",t),n.length,(0,s.useEffect)(()=>{let e=n.findIndex(e=>e.id===t[0].id);console.log("dataIndex",e),b(e)},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"SEO Service Provider & Company in Singapore, Malaysia, and India"}),(0,r.jsx)("meta",{name:"description",content:"InfoDrive Solutions is a leading search engine optimization company offering expert SEO services in Singapore, Malaysia, and India. As a top SEO consultant, we provide customized strategies for small businesses and startups to improve their online visibility."}),(0,r.jsx)("meta",{name:"keywords",content:"Search Engine Optimization Company, SEO Service Provider in Singapore, SEO Consultant in Singapore, SEO Company Near Me, SEO Strategy Provider in Singapore, SEO Company in Malaysia, SEO Company in Kuala Lumpur, SEO Services in Singapore, SEO Consultant in Malaysia, SEO Service Provider in Malaysia"}),(0,r.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/search-engine-optimization.html"}),(0,r.jsx)("meta",{property:"og:title",content:"SEO Service Provider & Company in Singapore, Malaysia, and India"}),(0,r.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}})]}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("section",{className:"sectionBox whyUsBox salesForceServices2 blog news my-[50px] ",children:(0,r.jsx)(c.Z,{children:t.map((e,t)=>(new Date(e.date).toLocaleDateString(),(0,r.jsxs)("div",{children:[(0,r.jsxs)("section",{className:"sectionBox pt10 pb10 textAlignCenter blog bg-white",children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(p.Z,{gutterBottom:!0,variant:"h1",component:"h2",className:"w-fit pl10 border rounded-2xl flex items-center justify-center p-5 hover:bg-[#f50057] hover:text-white transition-all ease-in ",children:e.title.rendered})}),(0,r.jsx)("br",{})]}),(0,r.jsx)(u.ZP,{container:!0,spacing:0,children:(0,r.jsx)(u.ZP,{item:!0,xs:12,className:"mb1 blg",children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)("div",{className:"flex justify-center items-center py-3 ",children:(0,r.jsx)("div",{className:" w-[34rem]",children:(0,r.jsx)("img",{className:"h-full rounded-xl w-fit",src:e._embedded["wp:featuredmedia"][0].source_url})})}),(0,r.jsxs)("div",{className:"Content max-w-7xl px-10 mt-10",children:[(0,r.jsxs)("div",{className:"md:flex justify-between items-baseline ",children:[(0,r.jsxs)("div",{className:"text-gray-400 flex gap-2",children:[(0,r.jsx)(y.Z,{src:"/broken-image.jpg",className:"h-6 w-6"}),(0,r.jsx)("p",{children:e._embedded.author[0].name})]}),(0,r.jsx)(m.Z,{href:"/blog/".concat(e.slug,".html"),className:"bgRed white poppin normalCase font-semibold min-h-7 w-auto text-center md:mr-5",children:e._embedded["wp:term"][0][0].name})]}),(0,r.jsx)(p.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100 text-3xl",children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}})})]})]})})})})]})))})}),(0,r.jsxs)("section",{className:"pagination",children:[(0,r.jsx)(x.ZP,{}),(0,r.jsx)(v.Z,{maxWidth:"sm",component:"Box",sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[(0,r.jsxs)(S(),{href:"/blog/".concat(n[o-1>=0?o-1:0].slug,".html"),className:"no-underline cursor-pointer flex border rounded-lg justify-center items-center p-1 hover:bg-slate-950/5 ",children:[(0,r.jsx)(g.Z,{style:{cursor:"pointer"}}),(0,r.jsx)("p",{className:"Poppins font-semibold no-underline",children:"Pre"})]}),(0,r.jsxs)(S(),{href:"/blog/".concat(n[(o+1)%n.length].slug,".html"),className:"flex border rounded-lg justify-center items-center p-1 hover:bg-slate-950/5",children:[(0,r.jsx)("p",{className:"Poppins font-semibold ",children:"Next"}),(0,r.jsx)(j.Z,{style:{cursor:"pointer"}})]})]})})]}),(0,r.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,r.jsx)(p.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Sign Up For a Free Consultation With Our Experts\xa0Today!"}),(0,r.jsx)(m.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,r.jsx)(h.Z,{}),(0,r.jsx)(i.Z,{})]})}},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[319,582,877,968,159,708,774,888,179],function(){return e(e.s=9937)}),_N_E=e.O()}]);