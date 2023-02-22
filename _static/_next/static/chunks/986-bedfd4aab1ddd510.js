(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{7484:function(e){var t,n,i,r,a,s,o,l,c,d,u,h,f,m,p,g,v,x,y,$,b;e.exports=(t="millisecond",n="second",i="minute",r="hour",a="week",s="month",o="quarter",l="year",c="date",d="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},g=function(e){return e instanceof $},v=function e(t,n,i){var r;if(!t)return m;if("string"==typeof t){var a=t.toLowerCase();p[a]&&(r=a),n&&(p[a]=n,r=a);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var o=t.name;p[o]=t,r=o}return!i&&r&&(m=r),r||!i&&m},x=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},(y={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,s),a=n-r<0,o=t.clone().add(i+(a?-1:1),s);return+(-(i+(n-r)/(a?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:l,w:a,d:"day",D:c,h:r,m:i,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,y.i=g,y.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},b=($=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e)}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var o=this,d=!!y.u(t)||t,u=y.p(e),h=function(e,t){var n=y.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return d?n:n.endOf("day")},f=function(e,t){return y.w(o.toDate()[e].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},m=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case l:return d?h(1,0):h(31,11);case s:return d?h(1,p):h(0,p+1);case a:var x=this.$locale().weekStart||0,$=(m<x?m+7:m)-x;return h(d?g-$:g+(6-$),p);case"day":case c:return f(v+"Hours",0);case r:return f(v+"Minutes",1);case i:return f(v+"Seconds",2);case n:return f(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,a){var o,d=y.p(e),u="set"+(this.$u?"UTC":""),h=((o={}).day=u+"Date",o[c]=u+"Date",o[s]=u+"Month",o[l]=u+"FullYear",o[r]=u+"Hours",o[i]=u+"Minutes",o[n]=u+"Seconds",o[t]=u+"Milliseconds",o)[d],f="day"===d?this.$D+(a-this.$W):a;if(d===s||d===l){var m=this.clone().set(c,1);m.$d[h](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[y.p(e)]()},f.add=function(e,t){var o,c=this;e=Number(e);var d=y.p(t),u=function(t){var n=x(c);return y.w(n.date(n.date()+Math.round(t*e)),c)};if(d===s)return this.set(s,this.$M+e);if(d===l)return this.set(l,this.$y+e);if("day"===d)return u(1);if(d===a)return u(7);var h=((o={})[i]=6e4,o[r]=36e5,o[n]=1e3,o)[d]||1,f=this.$d.getTime()+e*h;return y.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$H,s=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,r,a){return e&&(e[n]||e(t,i))||r[n].slice(0,a)},f=function(e){return y.s(a%12||12,e,"0")},m=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:y.s(a,2,"0"),h:f(1),hh:f(2),a:m(a,s,!0),A:m(a,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return i.replace(h,function(e,t){return t||p[e]||r.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var d,u=y.p(t),h=x(e),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,p=y.m(this,h);return p=((d={})[l]=p/12,d[s]=p,d[o]=p/3,d[a]=(m-f)/6048e5,d.day=(m-f)/864e5,d[r]=m/36e5,d[i]=m/6e4,d[n]=m/1e3,d)[u]||m,c?p:y.a(p)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=v(e,t,!0);return i&&(n.$L=i),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=b,[["$ms",t],["$s",n],["$m",i],["$H",r],["$W","day"],["$M",s],["$y",l],["$D",c]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,$,x),e.$i=!0),x},x.locale=v,x.isDayjs=g,x.unix=function(e){return x(1e3*e)},x.en=p[m],x.Ls=p,x.p={},x)},2815:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var i=n(5893),r=n(1664),a=n.n(r);function s(e){let{href:t,children:n,...r}=e;return(0,i.jsx)(a(),{href:t,children:(0,i.jsx)("a",{...r,children:n})})}},986:function(e,t,n){"use strict";n.d(t,{A:function(){return S}});var i=n(5893),r=n(1163),a=n(7294),s=n(7536),o=n(7533),l=n(6310);n(2815);var c=n(7268),d=n(8492),u=n(6675),h=n(7357),f=n(8263),m=n(9397),p=n(2715),g=n(9008),v=n.n(g),x=n(7484),y=n.n(x),$=n(76),b=n(3931),j=n(3640),w=n(9587);function S(e){var t,n,g,x,S,M,D;let Z=null==e?void 0:e.job,N=!Z;(0,r.useRouter)();let[T,_]=a.useState(y()("2014-08-18T21:11:54")),k=l.Ry().shape({title:l.Z_(),desc:l.Z_(),creationtime:l.Z_(),location:l.Z_(),salarayrange:l.Z_(),status:l.Z_()}),O={resolver:(0,o.X)(k)};if(!N){let{...e}=Z;O.defaultValues=e}let{register:C,handleSubmit:A,reset:I,formState:E}=(0,s.cI)(O),{errors:W}=E;return console.log("props",e),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(v(),{children:[(0,i.jsx)("title",{children:"Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,i.jsx)("meta",{name:"description",content:"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,i.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/careers.html"}),(0,i.jsx)("meta",{property:"og:title",content:" Join our team at Infodrive Solutions - Exciting Career Opportunities Available"})]}),(0,i.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,i.jsx)("link",{rel:"icon",href:"../favicon.png"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}}),(0,i.jsx)("noscript",{children:(0,i.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,i.jsx)(d.Z,{}),(0,i.jsx)("section",{className:"sectionBox",children:(0,i.jsx)(h.Z,{component:"div",style:{width:"800px",margin:"0 auto"},noValidate:!0,autoComplete:"off",children:(0,i.jsxs)("form",{onSubmit:A(function(e){var t;return console.log("onSubmit",e),console.log("isAddMode",N),N?(console.log("data",e),c.gQ.create(e).then(()=>{c.Ak.success("Job added",{keepAfterRouteChange:!0}),window.location.href="/job-manage"}).catch(c.Ak.error)):(t=Z.id,c.gQ.update(t,e).then(()=>{c.Ak.success("Job updated",{keepAfterRouteChange:!0}),window.location.href="/job-manage"}).catch(c.Ak.error))}),className:"addEditNewJob",children:[(0,i.jsx)("h1",{children:N?"Add new job":"Edit job"}),(0,i.jsx)("div",{className:"form-row",children:(0,i.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(f.ZP,{xs:12,children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)(p.Z,{id:"standard-multiline-flexible",label:"Title",multiline:!0,maxRows:4,variant:"standard",name:"title",fullWidth:!0,...C("title"),className:"form-control ".concat(W.title?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:null===(t=W.title)||void 0===t?void 0:t.message})]})}),(0,i.jsx)(f.ZP,{xs:12,children:(0,i.jsxs)("div",{className:"form-group col-5",children:[(0,i.jsx)(p.Z,{id:"standard-multiline-flexible",label:"Description",multiline:!0,rows:3,maxRows:5,variant:"standard",name:"desc",...C("desc"),className:"form-control ".concat(W.desc?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:null===(n=W.desc)||void 0===n?void 0:n.message})]})}),(0,i.jsx)(f.ZP,{xs:12,children:(0,i.jsxs)("div",{className:"form-group col-5",children:[(0,i.jsx)(p.Z,{id:"standard-multiline-flexible",label:"Location",multiline:!0,maxRows:4,variant:"standard",name:"location",...C("location"),className:"form-control ".concat(W.desc?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:null===(g=W.location)||void 0===g?void 0:g.message})]})}),(0,i.jsx)(f.ZP,{xs:4,children:(0,i.jsxs)("div",{className:"form-group mt30",children:[(0,i.jsx)("div",{className:"invalid-feedback",children:null===(x=W.creationtime)||void 0===x?void 0:x.message}),(0,i.jsx)(p.Z,{id:"date",label:"Creation time",type:"date",defaultValue:"05-24-2022",fullWidth:!0,style:{width:"220px",marginTop:"0px"},...C("creationtime"),name:"creationtime",InputLabelProps:{shrink:!0}})]})}),(0,i.jsx)(f.ZP,{xs:4,children:(0,i.jsxs)("div",{className:"form-group mt30",children:[(0,i.jsx)(h.Z,{sx:{width:"220px"},children:(0,i.jsxs)(j.Z,{style:{width:"220px"},children:[(0,i.jsx)($.Z,{id:"demo-simple-select-label",children:"Status"}),(0,i.jsxs)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",...C("status"),name:"status",label:"Status",defaultValue:null===(S=e.job)||void 0===S?void 0:S.status,children:[(0,i.jsx)(b.Z,{value:"enable",children:"Enable"}),(0,i.jsx)(b.Z,{value:"disable",children:"Disable"})]})]})}),(0,i.jsx)("div",{className:"invalid-feedback",children:null===(M=W.status)||void 0===M?void 0:M.message})]})}),(0,i.jsx)(f.ZP,{xs:4,children:(0,i.jsxs)("div",{className:"form-group mt30",children:[(0,i.jsx)(p.Z,{id:"standard-multiline-flexible",label:"Salaray range",multiline:!0,maxRows:4,variant:"standard",name:"salarayrange",...C("salarayrange"),className:"form-control ".concat(W.desc?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:null===(D=W.salarayrange)||void 0===D?void 0:D.message})]})})]})}),(0,i.jsx)(f.ZP,{xs:12,children:(0,i.jsxs)("div",{className:"form-group mt30",children:[(0,i.jsxs)(m.Z,{variant:"contained",color:"success",type:"submit",disabled:E.isSubmitting,className:"mr15",children:[E.isSubmitting&&(0,i.jsx)("span",{className:"spinner-border spinner-border-sm mr-1"}),"Save"]}),(0,i.jsx)(m.Z,{variant:"contained",onClick:()=>I(O.defaultValues),disabled:E.isSubmitting,className:"mr15",children:"Reset"}),(0,i.jsx)(m.Z,{variant:"contained",color:"warning",href:"/job-manage",className:"mr15",children:"Cancel"})]})})]})})}),(0,i.jsx)(u.Z,{})]})}n(6708)},7268:function(e,t,n){"use strict";n.d(t,{NK:function(){return s},Ak:function(){return a},gQ:function(){return h}});var i=n(1358),r=n(4922);let a={onAlert:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return o.asObservable().pipe((0,r.h)(t=>t&&t.id===e))},success:function(e,t){c({...t,type:s.Success,message:e})},error:function(e,t){c({...t,type:s.Error,message:e})},info:function(e,t){c({...t,type:s.Info,message:e})},warn:function(e,t){c({...t,type:s.Warning,message:e})},alert:c,clear:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;o.next({id:e})}},s={Success:"Success",Error:"Error",Info:"Info",Warning:"Warning"},o=new i.x,l="default-alert";function c(e){e.id=e.id||l,e.autoClose=void 0===e.autoClose||e.autoClose,o.next(e)}let d={get:function(e){return fetch(e,{method:"GET"}).then(u)},post:function(e,t){let n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(e,n).then(u)},put:function(e,t){let n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(e,n).then(u)},delete:function(e){return fetch(e,{method:"DELETE"}).then(u)}};function u(e){return e.text().then(t=>{console.log(t);let n=t&&JSON.parse(t);if(!e.ok){let t=n&&n.message||e.statusText;return Promise.reject(t)}return n})}n(1393),n(7511);let h={getAll:function(){return d.get(f)},getById:function(e){return d.get("".concat(f,"/").concat(e))},create:function(e){return console.log("params",e),d.post(f,e)},update:function(e,t){return console.log("id",e),console.log("params",t),d.put("".concat(f,"/").concat(e),t)},delete:function(e){return d.delete("".concat(f,"/").concat(e))}},f="".concat("http://infodrive.web3dapps.world/api","/jobs")},1393:function(){},7511:function(e){"use strict";e.exports=JSON.parse('[{"title":"Talent  Acquisition Specialist","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!","creationtime":"2023-02-01","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"enable","id":11,"dateCreated":"2023-02-20T02:07:23.762Z","dateUpdated":"2023-02-20T02:07:23.763Z"},{"title":"Talent Acquisition Specialist_1","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!\\n","creationtime":"2022-05-24","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"disable","id":12,"dateCreated":"2023-02-20T02:18:54.217Z","dateUpdated":"2023-02-20T02:18:54.217Z"},{"title":"Talent Acquisition Specialist_2","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!","creationtime":"2022-05-24","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"enable","id":13,"dateCreated":"2023-02-20T02:19:43.739Z","dateUpdated":"2023-02-20T02:19:43.739Z"},{"title":"Talent Acquisition Specialist_3","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!\\n","creationtime":"2022-05-24","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"enable","id":14,"dateCreated":"2023-02-20T02:20:30.214Z","dateUpdated":"2023-02-20T02:20:30.214Z"}]')}}]);