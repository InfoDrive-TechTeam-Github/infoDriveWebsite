(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{7843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers",function(){return n(7365)}])},7365:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var o=n(5893),a=n(7294),s=n(9008),i=n.n(s),l=n(6154),r=n(8492),c=n(6675),d=n(7357),m=n(8843),h=n(9861),p=n(8619),u=n(8885),x=n(8263),g=n(8005),j=n(9397),v=n(3972),y=n(7952),f=n(7354),w=n(802),b=n(4020),Z=n(2715),N=n(9308),S=n(6339),C=n(2167),k=n(4666),_=n(1894),I=n(5713),E=n(4380),B=n(7645);n(5935),n(473);var L=n(5186),P=n(5678);n(7134);var A=n(6708),T=n(4745),M=n(6720),F=n(5582),O=n(9572),J=n(6215),D=n(3147);function R(){let[e,t]=(0,a.useState)(null),[n,s]=(0,a.useState)(null),[R,W]=(0,a.useState)(null),[H,V]=a.useState(!1),[G,z]=(0,a.useState)(),[U,Y]=(0,a.useState)(!1),[X,Q]=(0,a.useState)(""),[q,K]=(0,a.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),[$,ee]=(0,a.useState)(!1);(0,a.useEffect)(()=>{function e(){let e=window.innerWidth;e<768?ee(!0):ee(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let et=e=>{console.log("dataJob",e),W(e),V(!0)},en=e=>{W(e),Y(e=>!e)};console.log("jdHeight",U);let eo=()=>{V(!1)},ea=e=>{K({...q,[e.target.name]:e.target.value})},es=()=>{let e=[R.Id];l.Z.post("https://mydryve.co/Api/addCandidate",{OwnerId:R.OwnerId,FirstName:q.FirstName,LastName:q.LastName,Email:q.Email,Phone:G,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"0",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:q.AvailableFrom,AvailableFrom:q.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:q.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy",Resume:X}).then(function(t){if(console.log("responseSubmit",t),!0==t.data.status){V(!1);let n=t.data.payload.candidateId;l.Z.post("https://mydryve.co/Api/assignJobToCandidate",{JobId:e,candidateId:n,OwnrId:R.OwnerId}).then(function(e){console.log("assignJob___",e);let t={JobId:q.Id,CandiateName:q.FirstName+"/"+q.LastName,Skills:H.Skills,NoticePeriod:q.AvailableFrom,candidateCv:""};P.Am.success("You have Sucessfully applied for Job",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{let n=l.Z.post("https://infodrive.orbiloggiin.com/SendEmailCandidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{error:o}=n.json();o?console.log("error_email",o):console.log("Email Sent")}catch(a){console.log("error_email222",a)}}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})},ei=e=>{let t=e.target.files[0],n=new FormData;n.append("file",t),console.log("formData_____",n.file),""!==n?l.Z.post("https://mydryve.co/Api/candidateApplicationResume",n).then(e=>{console.log("file____chk__",e);let t=e.data.payload;Q("https://mydryve.co/Api/uploads/Candidate/Resume/"+t)}).catch(e=>{console.log("There was an error!",null==e?void 0:e.response),P.Am.error("Something went wrong!",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):P.Am.error("Invalid Input",{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};(0,a.useEffect)(()=>{l.Z.post("https://mydryve.co/Api/getJobsList",{userId:1}).then(function(e){let n=e.data.payload.payload;console.log("getData",n),t(n)}).catch(function(e){console.log(e)})},[]),console.log("jobs",e);let[el,er]=(0,a.useState)(1),ec=(el-1)*4,ed=Math.ceil((null==e?void 0:e.length)/4),em=e=>{e<=ed&&e>0&&(er(e),window.scrollTo(0,0))};return(0,o.jsxs)("div",{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,o.jsx)("meta",{name:"description",content:"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,o.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/careers.html"}),(0,o.jsx)("meta",{property:"og:title",content:" Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,o.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,o.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}}),(0,o.jsx)("noscript",{children:(0,o.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,o.jsx)(r.Z,{}),(0,o.jsxs)("div",{className:"sliderBox",children:[(0,o.jsx)("img",{style:{width:"100%"},src:"images/25614380e49e0fd7742fc1e2e7973a1e.jpeg",alt:"Discover exciting career opportunities at Infodrive Solutions,"}),(0,o.jsx)(d.Z,{sx:{flexGrow:1},className:"sliderContent salePart",children:(0,o.jsxs)(x.ZP,{container:!0,spacing:0,children:[(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"CAREERS AT INFODRIVE"}),(0,o.jsxs)(v.Z,{gutterBottom:!0,variant:"h1",component:"div",children:["The team is growing with ",(0,o.jsx)("br",{}),"a variety of opportunities ",(0,o.jsx)("br",{}),"available"]}),(0,o.jsxs)(j.Z,{href:"/contact-us.html",className:"readmore white normalCase",variant:"text",children:["Let's Talk ",(0,o.jsx)(f.Z,{})]}),(0,o.jsx)("nav",{className:"socical-network",children:(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(h.ZP,{children:(0,o.jsx)(p.Z,{component:"a",href:"https://www.facebook.com/InfoDrivesolutions/",children:(0,o.jsx)(u.Z,{children:(0,o.jsx)(w.Z,{})})})}),(0,o.jsx)(h.ZP,{children:(0,o.jsx)(p.Z,{component:"a",href:"https://in.linkedin.com/company/infodrive-solutions/",children:(0,o.jsx)(u.Z,{children:(0,o.jsx)(g.Z,{})})})}),(0,o.jsx)(h.ZP,{children:(0,o.jsx)(p.Z,{component:"a",href:"https://www.instagram.com/infodrivesolutions/",children:(0,o.jsx)(u.Z,{children:(0,o.jsx)(b.Z,{})})})})]})})]})})]}),(0,o.jsxs)("section",{className:"sectionBox",children:[(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h1",component:"h1",children:"Explore popular jobs"}),(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"InfoDrive is always on a lookout for passionate, creative people who have the zeal to achieve the extraordinary. We welcome candidates who think they can contribute positively to our team and help us take InfoDrive to further levels of excellency. If you think, you're the perfect fit for our organization, please send your CV and cover letter to info@infodrive-solutions.com. You can find the latest openings here:"})]}),(0,o.jsx)("br",{}),e&&e.slice(ec,ec+4).map((e,t)=>(0,o.jsxs)(F.Z,{maxWidth:"xl",className:"flex gap-5 items-center mb-10 mx-auto ",children:[!$&&(0,o.jsxs)("div",{className:"shadow-2xl border-white border rounded-full transition-all ease-in-out duration-1000 text-white h-[42px] w-[42px] text-center py-2 ".concat(n==t?"bg-[#99B898]":"bg-[#eb6841]"),children:[console.log("start",t),t+ec+1]}),(0,o.jsxs)("div",{className:"JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox transition-all ease-in-out w-full",onMouseEnter:()=>s(t),onMouseLeave:()=>s(!t),children:[(0,o.jsxs)("div",{className:"flex justify-between w-full ",children:[(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h2",className:"pt0",component:"div",children:e.JobTitle}),(0,o.jsxs)("div",{className:"CreatedBox flex gap-1 text-[#dd3952]",children:[(0,o.jsx)(D.Z,{}),(0,o.jsxs)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"",children:["Created at: ",(0,C.Z)(new Date(e.created_at),"dd-MM-yyyy")]})]})]}),(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100  jd ".concat(U?"setShowDescription":""),sx:{height:"125px",overflow:"hidden"},children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.Jobdescription},className:"Poppins"})}),e.Jobdescription?(0,o.jsx)("span",{className:"mt15 readMoreLink   rounded-lg p-2  transition-all ease-out shadow-lg \n                   \n                     hover:bg-[#0047AB] hover:border hover:text-white Poppins\n                      \n                  ",onClick:()=>en(e),children:U?"Show less":"Show more"}):"",(0,o.jsxs)(d.Z,{className:"mt30",children:[(0,o.jsxs)(d.Z,{className:"careerbox",children:[(0,o.jsx)(N.Z,{}),(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:e.Locality})]}),(0,o.jsxs)(d.Z,{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(S.Z,{}),(0,o.jsxs)(v.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:[e.MinSalary>0?e.MinSalary:"",e.MinSalary>0&&e.MaxSalary>0?" - ":"",e.MaxSalary>0?e.MaxSalary:""]})]})]}),(0,o.jsx)(j.Z,{className:"mt30",onClick:()=>et(e),children:(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h3",component:"span",className:"mb0",children:"Apply now"})})]})]})),(0,o.jsxs)("section",{className:"pagination",children:[(0,o.jsx)(M.ZP,{}),(0,o.jsx)(F.Z,{maxWidth:"sm",component:"Box",sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[(0,o.jsx)(O.Z,{style:{cursor:"pointer"},onClick:()=>em(el-1)}),(0,o.jsx)(y.Z,{sx:{bgcolor:T.Z[500]},children:el}),(0,o.jsx)(J.Z,{onClick:()=>em(el+1),style:{cursor:"pointer"}})]})})]}),(0,o.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,o.jsx)(v.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with InfoDrive Solutions"}),(0,o.jsx)(j.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,o.jsx)(A.Z,{}),(0,o.jsx)(c.Z,{}),(0,o.jsxs)(k.Z,{open:H,className:"career-dialog",onClose:eo,children:[(0,o.jsxs)(B.Z,{children:["Apply Job: ",null==R?void 0:R.JobTitle]}),(0,o.jsxs)(I.Z,{children:[(0,o.jsx)(E.Z,{children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:null==R?void 0:R.Jobdescription}})}),(0,o.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(x.ZP,{item:!0,xs:6,children:(0,o.jsx)(Z.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:ea})}),(0,o.jsx)(x.ZP,{item:!0,xs:6,children:(0,o.jsx)(Z.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:ea})}),(0,o.jsx)(x.ZP,{item:!0,xs:12,children:(0,o.jsx)(Z.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:ea})}),(0,o.jsx)(x.ZP,{item:!0,xs:6,children:(0,o.jsx)(L.ZP,{placeholder:"Enter phone number",value:G,defaultCountry:"SG",onChange:z})}),(0,o.jsx)(x.ZP,{item:!0,xs:6,children:(0,o.jsx)(Z.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:ea})}),(0,o.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,o.jsx)("label",{children:"Skills"}),(0,o.jsx)("input",{className:"w100 job-skills",onChange:ea,placeholder:"Please add comma after each skill"})]}),(0,o.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,o.jsx)("label",{className:"w100",style:{marginBottom:"10px",marginTop:"10px",display:"block"},children:"Upload Your CV File"}),(0,o.jsx)("input",{className:"",type:"file",onChange:ei})]})]})]}),(0,o.jsxs)(_.Z,{children:[(0,o.jsx)(j.Z,{onClick:eo,children:"Cancel"}),(0,o.jsx)(j.Z,{onClick:es,children:"Submit"})]})]}),(0,o.jsxs)(k.Z,{open:U,className:"career-dialog",onClose:eo,children:[(0,o.jsxs)(B.Z,{children:["Job: ",null==R?void 0:R.JobTitle]}),(0,o.jsx)(I.Z,{children:(0,o.jsx)(E.Z,{children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:null==R?void 0:R.Jobdescription}})})}),(0,o.jsx)(_.Z,{className:"px-10",children:(0,o.jsx)(j.Z,{onClick:en,children:"Close"})})]})]})}}},function(e){e.O(0,[319,582,877,968,362,159,708,774,888,179],function(){return e(e.s=7843)}),_N_E=e.O()}]);