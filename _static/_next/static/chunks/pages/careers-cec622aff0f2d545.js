(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{7843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers",function(){return n(7365)}])},7365:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var a=n(5893),o=n(7294),i=n(9008),s=n.n(i),r=n(6154),l=n(8492),c=n(6675),d=n(7357),u=n(8843),m=n(9861),p=n(8619),h=n(8885),g=n(8263),x=n(8005),f=n(2623),y=n(363),j=n(9397),v=n(3972),b=n(7354),w=n(802),Z=n(4020),S=n(2715),N=n(9308),C=n(6339),T=n(2167),k=n(4666),E=n(1894),I=n(5713),P=n(4380),B=n(7645);n(5935),n(473);var O=n(5186),A=n(6708);function L(){let[e,t]=(0,o.useState)(null),[n,i]=(0,o.useState)(null),[L,F]=o.useState(!1),[_,J]=(0,o.useState)(),[M,W]=(0,o.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),D=e=>{console.log("data",e),i(e),F(!0)},R=()=>{F(!1)},G=e=>{W({...M,[e.target.name]:e.target.value})};console.log("applyValues",M),console.log("valuePhone",_);let U=()=>{console.log("submit",M),r.Z.post("http://206.189.149.207:4001/addCandiate",{OwnerId:M.OwnerId,FirstName:M.FirstName,LastName:M.LastName,Email:M.Email,Phone:_,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"dummy",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:M.AvailableFrom,AvailableFrom:M.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:M.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy"}).then(function(e){console.log("responseSubmit",e);let t={JobId:M.Id,CandiateName:M.FirstName+"/"+M.LastName,Skills:L.Skills,NoticePeriod:M.AvailableFrom,candidateCv:""};try{let e=r.Z.post("https://infodrive.orbiloggiin.com/GetEmailQuery",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{error:n}=e.json();n?toast.warning("Please Try Again",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):toast.success("Thank you for your message. We will Response in 2 business days",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(e){toast.error("Something went wrong",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}).catch(function(e){console.log(e)})};return(0,o.useEffect)(()=>{r.Z.post("http://206.189.149.207:4001/getJobsList",{userId:1}).then(function(e){let n=e.data.payload.payload;console.log("getData",n),t(n)}).catch(function(e){console.log(e)})},[]),console.log("jobs",e),(0,a.jsxs)("div",{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,a.jsx)("meta",{name:"description",content:"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,a.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/careers.html"}),(0,a.jsx)("meta",{property:"og:title",content:" Join our team at Infodrive Solutions - Exciting Career Opportunities Available"})]}),(0,a.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,a.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}}),(0,a.jsx)("noscript",{children:(0,a.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,a.jsx)(l.Z,{}),(0,a.jsxs)("div",{className:"sliderBox",children:[(0,a.jsx)("img",{style:{width:"100%"},src:"images/25614380e49e0fd7742fc1e2e7973a1e.jpeg",alt:"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,a.jsx)(d.Z,{sx:{flexGrow:1},className:"sliderContent salePart",children:(0,a.jsxs)(g.ZP,{container:!0,spacing:0,children:[(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"CAREERS AT INFODRIVE"}),(0,a.jsxs)(v.Z,{gutterBottom:!0,variant:"h1",component:"div",children:["The team is growing with ",(0,a.jsx)("br",{}),"a variety of opportunities ",(0,a.jsx)("br",{}),"available"]}),(0,a.jsxs)(j.Z,{href:"/contact-us.html",className:"readmore white normalCase",variant:"text",children:["Let's Talk ",(0,a.jsx)(b.Z,{})]}),(0,a.jsx)("nav",{className:"socical-network",children:(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(m.ZP,{children:(0,a.jsx)(p.Z,{component:"a",href:"https://www.facebook.com/InfoDrivesolutions/",children:(0,a.jsx)(h.Z,{children:(0,a.jsx)(w.Z,{})})})}),(0,a.jsx)(m.ZP,{children:(0,a.jsx)(p.Z,{component:"a",href:"https://in.linkedin.com/company/infodrive-solutions/",children:(0,a.jsx)(h.Z,{children:(0,a.jsx)(x.Z,{})})})}),(0,a.jsx)(m.ZP,{children:(0,a.jsx)(p.Z,{component:"a",href:"https://www.instagram.com/infodrivesolutions/",children:(0,a.jsx)(h.Z,{children:(0,a.jsx)(Z.Z,{})})})})]})})]})})]}),(0,a.jsxs)("section",{className:"sectionBox",children:[(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h1",component:"h1",children:"Explore popular jobs"}),(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"InfoDrive is always on a lookout for passionate, creative people who have the zeal to achieve the extraordinary. We welcome candidates who think they can contribute positively to our team and help us take InfoDrive to further levels of excellency. If you think, you're the perfect fit for our organization, please send your CV and cover letter to info@infodrive-solutions.com. You can find the latest openings here:"})]}),(0,a.jsx)("section",{className:"sectionBox nm jobSection",children:(0,a.jsxs)(g.ZP,{container:!0,spacing:7,justify:"center",children:[e&&e.map((e,t)=>(0,a.jsx)(a.Fragment,{children:"Open"===e.JobStatus?(0,a.jsx)(g.ZP,{item:!0,lg:6,xs:12,children:(0,a.jsx)(f.Z,{className:"cardcareer w100",children:(0,a.jsxs)(y.Z,{children:[(0,a.jsxs)(d.Z,{className:"mt30",sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h2",className:"pt0",component:"div",children:e.JobTitle}),(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"w100 ml pt5",children:(0,T.Z)(new Date(e.created_at),"dd-MM-yyyy")})]},e.Id),(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100 mt30",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.Jobdescription}})}),(0,a.jsxs)(d.Z,{className:"mt30",children:[(0,a.jsxs)(d.Z,{className:"careerbox",children:[(0,a.jsx)(N.Z,{}),(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:e.Locality})]}),(0,a.jsxs)(d.Z,{style:{display:"flex"},children:[(0,a.jsx)(C.Z,{}),(0,a.jsxs)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:[e.MinSalary>0?e.MinSalary+" "+e.Currency:"",e.MinSalary>0&&e.MaxSalary>0?" - ":"",e.MaxSalary>0?e.MaxSalary+" "+e.Currency:""]})]})]}),(0,a.jsx)(j.Z,{className:"mt30",onClick:()=>D(e),children:(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"span",className:"mb0",children:"Apply now"})})]})})}):""})),!e&&(0,a.jsx)(a.Fragment,{children:"loading..."}),e&&!e.length&&(0,a.jsx)(a.Fragment,{children:"No Jobs To Display"})]})}),(0,a.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,a.jsx)(v.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with Infodrive Solutions"}),(0,a.jsx)(j.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,a.jsx)(A.Z,{}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(k.Z,{open:L,className:"career-dialog",onClose:R,children:[(0,a.jsxs)(B.Z,{children:["Apply Job: ",null==n?void 0:n.JobTitle]}),(0,a.jsxs)(I.Z,{children:[(0,a.jsx)(P.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==n?void 0:n.Jobdescription}})}),(0,a.jsxs)(g.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(g.ZP,{item:!0,xs:6,children:(0,a.jsx)(S.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:G})}),(0,a.jsx)(g.ZP,{item:!0,xs:6,children:(0,a.jsx)(S.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:G})}),(0,a.jsx)(g.ZP,{item:!0,xs:12,children:(0,a.jsx)(S.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:G})}),(0,a.jsx)(g.ZP,{item:!0,xs:6,children:(0,a.jsx)(O.ZP,{placeholder:"Enter phone number",value:_,defaultCountry:"SG",onChange:J})}),(0,a.jsx)(g.ZP,{item:!0,xs:6,children:(0,a.jsx)(S.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:G})}),(0,a.jsxs)(g.ZP,{item:!0,xs:12,children:[(0,a.jsx)("label",{children:"Skills"}),(0,a.jsx)("input",{className:"w100 job-skills",onChange:G,placeholder:"Please add comma after each skill"})]})]})]}),(0,a.jsxs)(E.Z,{children:[(0,a.jsx)(j.Z,{onClick:R,children:"Cancel"}),(0,a.jsx)(j.Z,{onClick:U,children:"Submit"})]})]})]})}n(7268)},7268:function(e,t,n){"use strict";n.d(t,{NK:function(){return s},Ak:function(){return i},gQ:function(){return m}});var a=n(1358),o=n(4922);let i={onAlert:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return r.asObservable().pipe((0,o.h)(t=>t&&t.id===e))},success:function(e,t){c({...t,type:s.Success,message:e})},error:function(e,t){c({...t,type:s.Error,message:e})},info:function(e,t){c({...t,type:s.Info,message:e})},warn:function(e,t){c({...t,type:s.Warning,message:e})},alert:c,clear:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;r.next({id:e})}},s={Success:"Success",Error:"Error",Info:"Info",Warning:"Warning"},r=new a.x,l="default-alert";function c(e){e.id=e.id||l,e.autoClose=void 0===e.autoClose||e.autoClose,r.next(e)}let d={get:function(e){return fetch(e,{method:"GET"}).then(u)},post:function(e,t){let n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(e,n).then(u)},put:function(e,t){let n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(e,n).then(u)},delete:function(e){return fetch(e,{method:"DELETE"}).then(u)}};function u(e){return e.text().then(t=>{console.log(t);let n=t&&JSON.parse(t);if(!e.ok){let t=n&&n.message||e.statusText;return Promise.reject(t)}return n})}n(1393),n(7511);let m={getAll:function(){return d.get(p)},getById:function(e){return d.get("".concat(p,"/").concat(e))},create:function(e){return console.log("params",e),d.post(p,e)},update:function(e,t){return console.log("id",e),console.log("params",t),d.put("".concat(p,"/").concat(e),t)},delete:function(e){return d.delete("".concat(p,"/").concat(e))}},p="".concat("http://localhost:3000/api","/jobs")},1393:function(){},7511:function(e){"use strict";e.exports=JSON.parse('[{"title":"Talent  Acquisition Specialist","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!","creationtime":"2023-02-01","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"disable","id":11,"dateCreated":"2023-02-20T02:07:23.762Z","dateUpdated":"2023-02-22T04:29:01.947Z"},{"title":"Talent Acquisition Specialist_1","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!\\n","creationtime":"2022-05-24","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"disable","id":12,"dateCreated":"2023-02-20T02:18:54.217Z","dateUpdated":"2023-02-22T04:29:01.115Z"},{"title":"Talent Acquisition Specialist_2","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!","creationtime":"2022-05-24","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"disable","id":13,"dateCreated":"2023-02-20T02:19:43.739Z","dateUpdated":"2023-02-22T04:29:03.963Z"},{"title":"Talent Acquisition Specialist_3","desc":"We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!\\n","creationtime":"2022-05-24","location":"Sydney CBD, Inner West & Eastern Suburbs","salarayrange":"$80,000 - $99,999 + Super","status":"enable","id":14,"dateCreated":"2023-02-20T02:20:30.214Z","dateUpdated":"2023-02-20T02:20:30.214Z"}]')}},function(e){e.O(0,[319,238,877,968,762,154,816,747,159,708,774,888,179],function(){return e(e.s=7843)}),_N_E=e.O()}]);