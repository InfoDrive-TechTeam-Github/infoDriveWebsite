(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{9572:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=s},6215:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=s},7286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(8609)}])},8609:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return O}});var r=n(5893),a=n(7294),i=n(8492),s=n(6675),o=n(7357),l=n(8263),c=n(2623),d=n(363),u=n(9397),m=n(3972),h=n(9008),p=n.n(h),f=n(9572),y=n(6720),g=n(5582),x=n(6215),v=n(7952),j=n(6708),M=n(4745),w=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,b=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,S=/[^-+\dA-Z]/g,N={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},D={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},Z=function(e){var t=e.y,n=e.m,r=e.d,a=e._,i=e.dayName,s=e.short,o=void 0!==s&&s,l=new Date,c=new Date;c.setDate(c[a+"Date"]()-1);var d=new Date;return(d.setDate(d[a+"Date"]()+1),l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r)?o?"Tdy":"Today":c[a+"FullYear"]()===t&&c[a+"Month"]()===n&&c[a+"Date"]()===r?o?"Ysd":"Yesterday":d[a+"FullYear"]()===t&&d[a+"Month"]()===n&&d[a+"Date"]()===r?o?"Tmw":"Tomorrow":i},C=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();return t.setHours(t.getHours()-r),1+Math.floor((t-n)/(864e5*7))},_=function(e){var t=e.getDay();return 0===t&&(t=7),t},E=!0;function O(e){let{data:t}=e;console.log("data0000__",t);let[n,h]=(0,a.useState)(1),E=(n-1)*6,[O,A]=(0,a.useState)("All Category"),[H,P]=(0,a.useState)(t),B=Math.ceil(H.length/6),k=e=>{e<=B&&e>0&&(h(e),window.scrollTo(0,0))},F=e=>{if(A(e),h(1),"All Category"==e)P(t);else{let n=t.filter(t=>t._embedded["wp:term"][0][0].name===e);P(n)}};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:"SEO Service Provider & Company in Singapore, Malaysia, and India"}),(0,r.jsx)("meta",{name:"description",content:"InfoDrive Solutions is a leading search engine optimization company offering expert SEO services in Singapore, Malaysia, and India. As a top SEO consultant, we provide customized strategies for small businesses and startups to improve their online visibility."}),(0,r.jsx)("meta",{name:"keywords",content:"Search Engine Optimization Company, SEO Service Provider in Singapore, SEO Consultant in Singapore, SEO Company Near Me, SEO Strategy Provider in Singapore, SEO Company in Malaysia, SEO Company in Kuala Lumpur, SEO Services in Singapore, SEO Consultant in Malaysia, SEO Service Provider in Malaysia"}),(0,r.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/search-engine-optimization.html"}),(0,r.jsx)("meta",{property:"og:title",content:"SEO Service Provider & Company in Singapore, Malaysia, and India"}),(0,r.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}})]}),(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,r.jsx)(i.Z,{}),(0,r.jsxs)("section",{className:"sectionBox pt30 pb30 textAlignCenter blog upperCase",children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h1",component:"h1",className:"w100 ",children:"All Posts"}),(0,r.jsxs)("div",{className:"category flex flex-wrap gap-2 mt-10 mx-auto",children:[(0,r.jsx)("div",{className:"button poppin hover:bg-[#f50057] lg:h-10 h-fit w-fit p-2  poppin min-w-[150px] text-center border cursor-pointer transition-all ease-out  hover:text-white hover:border-white rounded-lg ".concat("All Category"===O?"bg-[#f50057] text-white border-white":"text-gray-500 border-gray-500"),onClick:()=>F("All Category"),children:"All Category"}),["Web and APP Development","IT Solutions","Salesforce","App Development","CRM","SAP Emarys","Staff Augmentation","Business","Digital Marketing","Blockchain"].map((e,t)=>(0,r.jsx)("div",{className:"button poppin hover:bg-[#f50057] md:h-10 h-fit w-fit p-2  poppin min-w-[150px] cursor-pointer text-center border transition-all ease-out  hover:text-white hover:border-white rounded-lg ".concat(O===e?"bg-[#f50057] text-white border-white":"text-gray-500 border-gray-500"),onClick:()=>F(e),children:e}))]}),(0,r.jsx)("br",{})]}),(0,r.jsx)("section",{className:"sectionBox whyUsBox salesForceServices2 blog news ",children:(0,r.jsx)(o.Z,{sx:{flexGrow:1},children:H.slice(E,E+6).map((e,t)=>(0,r.jsxs)("div",{children:[(void 0===e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"],(0,r.jsx)("div",{})),(0,r.jsxs)(l.ZP,{container:!0,spacing:0,className:"mb30 items-center",children:[(0,r.jsx)(l.ZP,{item:!0,xs:6,className:"mb1",children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(d.Z,{children:(0,r.jsx)("div",{className:"flex items-center object-cover",children:(0,r.jsx)("a",{href:"/blog/".concat(e.slug,".html"),children:(0,r.jsx)("img",{className:"h-full rounded-xl",style:{width:"100%"},src:e._embedded["wp:featuredmedia"][0].source_url})})})})})}),(0,r.jsxs)(l.ZP,{item:!0,xs:6,children:[(0,r.jsxs)("div",{className:"imgHeader flex flex-wrap grid-col-1 items-baseline justify-between pl-[30px] py-3 ",children:[(0,r.jsxs)("div",{className:"text-gray-400 flex gap-2",children:[(0,r.jsx)(v.Z,{src:"/broken-image.jpg",className:"h-6 w-6"}),(0,r.jsx)("p",{children:e._embedded.author[0].name})]}),(0,r.jsx)(u.Z,{href:"/blog/".concat(e.slug,".html"),className:"bgRed white poppin ml30 normalCase min-h-7 w-auto text-center",children:e._embedded["wp:term"][0][0].name})]}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h3",component:"h2",className:"w100 pl30 ",children:(0,r.jsx)("div",{children:(0,r.jsxs)("a",{href:"/blog/".concat(e.slug,".html"),children:[(0,r.jsx)("h3",{children:e.title.rendered})," "]})})}),(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100 pl30 text-start",children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}})}),(0,r.jsx)("div",{className:"flex ",children:(0,r.jsxs)("h3",{className:"pr15 poppin ml30 font-semibold",children:["Publish Date: ",function(e,t,n,r){if(1!=arguments.length||"string"!=typeof e||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var a=(t=String(N[t]||t||N.default)).slice(0,4);("UTC:"===a||"GMT:"===a)&&(t=t.slice(4),n=!0,"GMT:"===a&&(r=!0));var i=function(){return n?"getUTC":"get"},s=function(){return e[i()+"Date"]()},o=function(){return e[i()+"Day"]()},l=function(){return e[i()+"Month"]()},c=function(){return e[i()+"FullYear"]()},d=function(){return e[i()+"Hours"]()},u=function(){return e[i()+"Minutes"]()},m=function(){return e[i()+"Seconds"]()},h=function(){return e[i()+"Milliseconds"]()},p=function(){return n?0:e.getTimezoneOffset()},f=function(){return C(e)},y={d:function(){return s()},dd:function(){return T(s())},ddd:function(){return D.dayNames[o()]},DDD:function(){return Z({y:c(),m:l(),d:s(),_:i(),dayName:D.dayNames[o()],short:!0})},dddd:function(){return D.dayNames[o()+7]},DDDD:function(){return Z({y:c(),m:l(),d:s(),_:i(),dayName:D.dayNames[o()+7]})},m:function(){return l()+1},mm:function(){return T(l()+1)},mmm:function(){return D.monthNames[l()]},mmmm:function(){return D.monthNames[l()+12]},yy:function(){return String(c()).slice(2)},yyyy:function(){return T(c(),4)},h:function(){return d()%12||12},hh:function(){return T(d()%12||12)},H:function(){return d()},HH:function(){return T(d())},M:function(){return u()},MM:function(){return T(u())},s:function(){return m()},ss:function(){return T(m())},l:function(){return T(h(),3)},L:function(){return T(Math.floor(h()/10))},t:function(){return 12>d()?D.timeNames[0]:D.timeNames[1]},tt:function(){return 12>d()?D.timeNames[2]:D.timeNames[3]},T:function(){return 12>d()?D.timeNames[4]:D.timeNames[5]},TT:function(){return 12>d()?D.timeNames[6]:D.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(e).match(b)||[""]).pop().replace(S,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(p()>0?"-":"+")+T(100*Math.floor(Math.abs(p())/60)+Math.abs(p())%60,4)},p:function(){return(p()>0?"-":"+")+T(Math.floor(Math.abs(p())/60),2)+":"+T(Math.floor(Math.abs(p())%60),2)},S:function(){return["th","st","nd","rd"][s()%10>3?0:(s()%100-s()%10!=10)*s()%10]},W:function(){return f()},WW:function(){return T(f())},N:function(){return _(e)}};return t.replace(w,function(e){return e in y?y[e]():e.slice(1,e.length-1)})}(e.date,"fullDate")]})})]})})]})]})]}))})}),(0,r.jsxs)("section",{className:"pagination",children:[(0,r.jsx)(y.ZP,{}),(0,r.jsx)(g.Z,{maxWidth:"sm",component:"Box",sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[(0,r.jsx)(f.Z,{style:{cursor:"pointer"},onClick:()=>k(n-1)}),(0,r.jsx)(v.Z,{sx:{bgcolor:M.Z[500]},children:n}),(0,r.jsx)(x.Z,{onClick:()=>k(n+1),style:{cursor:"pointer"}})]})})]}),(0,r.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Transforming Your Website Into a Search Egine Powerhouse"}),(0,r.jsx)(u.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,r.jsx)(j.Z,{}),(0,r.jsx)(s.Z,{})]})}}},function(e){e.O(0,[319,582,877,968,159,708,774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);