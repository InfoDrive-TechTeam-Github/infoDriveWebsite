(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1698],{46447:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers",function(){return o(91243)}])},49713:function(e,t,o){"use strict";o.d(t,{F:function(){return n}});let n=(0,o(64529).Ue)(e=>({description:"",title:"",handleHeadStore:(t,o)=>e(e=>({description:t,title:o}))}))},37007:function(e,t,o){"use strict";var n=o(64836);t.Z=void 0;var i=n(o(47955)),s=o(85893),a=(0,i.default)((0,s.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");t.Z=a},1955:function(e,t,o){"use strict";var n=o(64836);t.Z=void 0;var i=n(o(47955)),s=o(85893),a=(0,i.default)((0,s.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=a},36477:function(e,t,o){"use strict";var n=o(64836);t.Z=void 0;var i=n(o(47955)),s=o(85893),a=(0,i.default)((0,s.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=a},91243:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return K}});var n=o(85893),i=o(67294),s=o(9008),a=o.n(s),l=o(5121),r=o(95292),c=o(63194);o(29994);var d=o(53043),m=o(1242),u=o(65981),h=o(49520),p=o(6621),x=o(99514),g=o(73173),j=o(58046),v=o(10382),f=o(39980),y=o(37007),b=o(29838),w=o(60434),Z=o(36105),N=o(51642),C=o(19145),S=o(68178),k=o(15733),I=o(8875),E=o(80940),_=o(45914),L=o(49346);o(25935),o(61369);var P=o(35186),T=o(55678);o(22130);var A=o(71750),J=o(24164),B=o(28962),F=o(59979),O=o(1955),R=o(36477),D=o(96838),M=o(11163),H=o(64713),W=o(25456),z=o(86459),V=(0,o(79075).Z)("linkedin",function(e,t){var o=t.title,n=t.summary,i=t.source;return(0,W.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,z.Z)({url:e,mini:"true",title:o,summary:n,source:i})},function(e){return{title:e.title,summary:e.summary,source:e.source}},{windowWidth:750,windowHeight:600}),G=o(16573),U=o(46616),X=o(49645),Y=o(49713),Q=o(32323),q=o(97542);function K(){let[e,t]=i.useState(!1);console.log("head",(0,Y.F)());let[o,s]=(0,i.useState)(null),[W,z]=(0,i.useState)(null),[K,$]=(0,i.useState)(!1),[ee,et]=(0,i.useState)(null),[eo,en]=i.useState(!1),[ei,es]=(0,i.useState)(),[ea,el]=(0,i.useState)(!1),[er,ec]=(0,i.useState)(""),[ed,em]=(0,i.useState)(""),[eu,eh]=(0,i.useState)("");console.log(eu,"Jobtitle");let[ep,ex]=(0,i.useState)("");console.log("info",ed);let[eg,ej]=(0,i.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),[ev,ef]=(0,i.useState)(!1),ey=(0,M.useRouter)();(0,i.useEffect)(()=>{function e(){window.innerWidth<768?ef(!0):ef(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let eb=e=>{console.log("dataJob",e),et(e),en(!0)},ew=e=>{et(e),el(e=>!e)};console.log("jdHeight",ea);let eZ=()=>{en(!1)},eN=e=>{ej({...eg,[e.target.name]:e.target.value})};(0,i.useEffect)(()=>{l.Z.post("https://mydryve.co/Api/getJobsList",{userId:1}).then(function(e){console.log(e,"success"),s(e.data.payload.payload)}).catch(function(e){console.log(e)})},[]),(0,i.useEffect)(()=>{l.Z.post("https://mydryve.co/Api/getJobById",{id:45}).then(e=>{em(e.data.payload.payload["0"])}).catch(e=>console.log("Error: ".concat(e)))},[]),console.log("jobs",ed);let[eC,eS]=(0,i.useState)(1),ek=(eC-1)*4,eI=Math.ceil((null==o?void 0:o.length)/4),eE=e=>{e<=eI&&e>0&&(eS(e),window.scrollTo(0,0))},e_=e=>{ey.push("/jobinfo/".concat(e))};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,n.jsx)("meta",{name:"description",content:eu?" Discover exciting career opportunitie ".concat(eu,"  at Infodrive Solutions"):"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,n.jsx)("link",{rel:"canonical",href:ep?"".concat(window.location.origin,"/jobinfo/").concat(ep,".html"):"https://infodrive-solutions.com/careers.html"}),(0,n.jsx)("meta",{property:"og:title",content:eu?"Join our team at Infodrive Solutions - ".concat(eu):" Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,n.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("meta",{name:"google-site-verification",content:"JcRwQCIELBAZJX2iIdAkVHip-fPEjV_icDXuaLBIXfE"}),(0,n.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PPS8R594');"}}),(0,n.jsx)("noscript",{children:(0,n.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-PPS8R594",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,n.jsx)(r.Z,{}),(0,n.jsx)(q.Z,{open:e,handleClose:()=>t(!1),setOpen:t}),(0,n.jsxs)("div",{className:"sliderBox",children:[(0,n.jsx)("img",{style:{width:"100%"},src:"images/25614380e49e0fd7742fc1e2e7973a1e.jpeg",alt:"Discover exciting career opportunities at Infodrive Solutions,"}),(0,n.jsx)(d.Z,{sx:{flexGrow:1},className:"sliderContent salePart",children:(0,n.jsxs)(x.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"CAREERS AT INFODRIVE"}),(0,n.jsxs)(j.Z,{gutterBottom:!0,variant:"h1",component:"div",children:["The team is growing with ",(0,n.jsx)("br",{}),"a variety of opportunities ",(0,n.jsx)("br",{}),"available"]}),(0,n.jsxs)(g.Z,{href:"/contact-us.html",className:"readmore  normalCase",variant:"text",children:["Let's Talk ",(0,n.jsx)(y.Z,{})]}),(0,n.jsx)("nav",{className:"socical-network",children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(u.ZP,{children:(0,n.jsx)(h.Z,{component:"a",href:"https://www.facebook.com/InfoDrivesolutions/",children:(0,n.jsx)(p.Z,{children:(0,n.jsx)(b.Z,{})})})}),(0,n.jsx)(u.ZP,{children:(0,n.jsx)(h.Z,{component:"a",href:"https://in.linkedin.com/company/infodrive-solutions/",children:(0,n.jsx)(p.Z,{children:(0,n.jsx)(X.Z,{})})})}),(0,n.jsx)(u.ZP,{children:(0,n.jsx)(h.Z,{component:"a",href:"https://www.instagram.com/infodrivesolutions/",children:(0,n.jsx)(p.Z,{children:(0,n.jsx)(Z.Z,{})})})})]})})]})})]}),(0,n.jsxs)("section",{className:"sectionBox",children:[(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h1",component:"h1",children:"Explore popular jobs"}),(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"InfoDrive is always on a lookout for passionate, creative people who have the zeal to achieve the extraordinary. We welcome candidates who think they can contribute positively to our team and help us take InfoDrive to further levels of excellency. If you think, you're the perfect fit for our organization, please send your CV and cover letter to jobs@infodrive-solutions.com. You can find the latest openings here:"})]}),(0,n.jsx)("br",{}),o&&o.slice(ek,ek+4).map((e,t)=>(0,n.jsxs)(F.Z,{maxWidth:"xl",className:"flex gap-3 items-center mb-10 mx-auto ",children:[!ev&&(0,n.jsx)("div",{className:"shadow-2xl border-4    border-slate-950/5  rounded-full transition-all ease-in-out duration-1000 text-white h-[2rem] w-[2rem]  flex justify-center items-center p-4 ".concat(W==t?"bg-[#99B898]":"bg-[#eb6841]"),children:(0,n.jsxs)("p",{className:"Poppins font-semibold",children:[console.log("start",t),t+ek+1]})}),(0,n.jsxs)("div",{className:"JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox   transition-all ease-in-out w-full",onMouseEnter:()=>z(t),onMouseLeave:()=>z(!t),children:[(0,n.jsxs)("div",{className:"flex justify-between  w-full ",children:[(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h2",className:"pt0 cursor-pointer",component:"div",onClick:()=>e_(e.Id),children:e.JobTitle}),(0,n.jsxs)("div",{className:"CreatedBox flex gap-1 text-[#dd3952]",children:[(0,n.jsx)(D.Z,{}),(0,n.jsxs)(j.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"",children:["Created at: ",(0,S.Z)(new Date(e.created_at),"dd-MM-yyyy")]})]})]}),(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100  jd ".concat(ea?"setShowDescription":""),sx:{height:"125px",overflow:"hidden"},children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.Jobdescription},className:"Poppins"})}),e.Jobdescription?(0,n.jsx)(f.Z,{style:{textDecoration:"none"},className:"mt15 readMoreLink   rounded-lg p-2  transition-all ease-out shadow-lg \n                   \n                     hover:bg-[#dd3952] hover:border hover:text-white Poppins text-black\n                      \n                  ",onClick:()=>ew(e),onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:ea?"Show less":"Show more"}):"",(0,n.jsxs)(d.Z,{className:"mt30 ",children:[(0,n.jsxs)(d.Z,{className:"careerbox gap-1",children:[(0,n.jsx)(C.Z,{className:"h-[2rem] w-[2rem] "}),(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:e.Locality})]}),(0,n.jsxs)(d.Z,{style:{display:"flex",alignItems:"center text-slate-500",gap:"4px"},children:[(0,n.jsx)("div",{className:"Currency border-2 border-black p-3 rounded-full h-[2rem] w-[2rem] flex justify-center items-center",children:(0,n.jsx)("p",{className:"Poppins font-semibold",children:e.Currency})}),(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:e.MinSalary+" - "+e.MaxSalary})]})]}),(0,n.jsxs)("div",{className:"md:flex flex-col md:flex-row  items-center justify-between",children:[" ",(0,n.jsx)("button",{className:"mt30 Poppins  rounded-md p-2  shadow-md  hover:text-[#dd3952] hover:bg-white transition-all ease-in-out font-semibold uppercase\n                ".concat(K?"bg-white text-[#dd3952]":"bg-[#dd3952] text-white"),onClick:()=>eb(e),children:"Apply now"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-sm text-black font-bold ml-2 mt-5 md:mt-0",children:"Share Job"}),(0,n.jsxs)("div",{className:" p-4 rounded-xl flex items-baseline gap-2 ",children:[(0,n.jsx)(V,{title:e.JobTitle,description:"This is a description of the image.",image:"images/25614380e49e0fd7742fc1e2e7973a1e.jpeg",url:"https://infodrive-solutions.com/jobinfo/".concat(e.Id,".html"),className:"bg-red-600 h-8 w-8",onClick:()=>eh(e.JobTitle),children:(0,n.jsx)(X.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)(G.Z,{quote:"Discover exciting career opportunitie ".concat(e.JobTitle,"  at Infodrive Solutions"),url:"https://infodrive-solutions.com/jobinfo/".concat(e.Id,".html"),className:"bg-red-600 h-8 w-8",onClick:()=>eh(e.JobTitle),children:(0,n.jsx)(b.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)(U.Z,{title:"Discover exciting opportunitie ".concat(o[0].JobTitle,"  at Infodrive Solutions"),via:"Infodrive Solutions",url:"https://infodrive-solutions.com/jobinfo/".concat(e.Id,".html"),className:"bg-red-600 h-8 w-8",onClick:()=>eh(e.JobTitle),children:(0,n.jsx)(w.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText("".concat(window.location.origin,"/jobinfo/").concat(e.Id,".html")),T.Am.success("Link copied successfully"),eh(e.JobTitle),ex(e.Id)},children:(0,n.jsx)(H.Z,{className:"h-6 w-6"})})]})]})]})]})]})),(0,n.jsxs)("section",{className:"pagination",children:[(0,n.jsx)(B.ZP,{}),(0,n.jsx)(F.Z,{maxWidth:"sm",component:"Box",sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[(0,n.jsx)(O.Z,{style:{cursor:"pointer"},onClick:()=>eE(eC-1)}),(0,n.jsx)(v.Z,{sx:{bgcolor:J.Z[500]},children:eC}),(0,n.jsx)(R.Z,{onClick:()=>eE(eC+1),style:{cursor:"pointer"}})]})})]}),(0,n.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with InfoDrive Solutions"}),(0,n.jsx)(g.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,n.jsx)(A.Z,{}),(0,n.jsx)(c.Z,{}),(0,n.jsxs)(k.Z,{open:eo,className:"career-dialog",onClose:eZ,children:[(0,n.jsxs)(L.Z,{children:["Apply Job: ",null==ee?void 0:ee.JobTitle]}),(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(_.Z,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==ee?void 0:ee.Jobdescription}})}),(0,n.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(x.ZP,{item:!0,xs:6,children:(0,n.jsx)(N.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:eN})}),(0,n.jsx)(x.ZP,{item:!0,xs:6,children:(0,n.jsx)(N.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:eN})}),(0,n.jsx)(x.ZP,{item:!0,xs:12,children:(0,n.jsx)(N.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:eN})}),(0,n.jsx)(x.ZP,{item:!0,xs:6,children:(0,n.jsx)(P.ZP,{placeholder:"Enter phone number",value:ei,defaultCountry:"SG",onChange:es})}),(0,n.jsx)(x.ZP,{item:!0,xs:6,children:(0,n.jsx)(N.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:eN})}),(0,n.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,n.jsx)("label",{children:"Skills"}),(0,n.jsx)("input",{className:"w100 job-skills",onChange:eN,placeholder:"Please add comma after each skill"})]}),(0,n.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,n.jsx)("label",{className:"w100",style:{marginBottom:"10px",marginTop:"10px",display:"block"},children:"Upload Your CV File"}),(0,n.jsx)("input",{className:"",type:"file",onChange:e=>{let t=e.target.files[0],o=new FormData;o.append("file",t),console.log("formData_____",o.file),""!==o?l.Z.post("https://mydryve.co/Api/candidateApplicationResume",o).then(e=>{console.log("file____chk__",e),ec("https://mydryve.co/Api/uploads/Candidate/Resume/"+e.data.payload)}).catch(e=>{console.log("There was an error!",null==e?void 0:e.response),T.Am.error("Something went wrong!",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):T.Am.error("Invalid Input",{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}})]})]})]}),(0,n.jsxs)(I.Z,{children:[(0,n.jsx)(g.Z,{onClick:eZ,children:"Cancel"}),(0,n.jsx)(g.Z,{onClick:()=>{let e=[ee.Id];l.Z.post("https://mydryve.co/Api/addCandidate",{OwnerId:ee.OwnerId,FirstName:eg.FirstName,LastName:eg.LastName,Email:eg.Email,Phone:ei,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"0",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:eg.AvailableFrom,AvailableFrom:eg.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:eg.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy",Resume:er}).then(function(t){if(console.log("responseSubmit",t),!0==t.data.status){en(!1);let o=t.data.payload.candidateId;l.Z.post("https://mydryve.co/Api/assignJobToCandidate",{JobId:e,candidateId:o,OwnrId:ee.OwnerId}).then(function(e){console.log("assignJob___",e);let t={JobId:eg.Id,CandiateName:eg.FirstName+"/"+eg.LastName,Skills:eo.Skills,NoticePeriod:eg.AvailableFrom,candidateCv:""};T.Am.success("You have Sucessfully applied for Job",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{let{error:e}=l.Z.post("https://infodrive.orbiloggiin.com/SendEmailCandidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).json();e?console.log("error_email",e):console.log("Email Sent")}catch(e){console.log("error_email222",e)}}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})},children:"Submit"})]})]}),(0,n.jsxs)(k.Z,{open:ea,className:"career-dialog",onClose:eZ,children:[(0,n.jsxs)(L.Z,{children:["Job: ",null==ee?void 0:ee.JobTitle]}),(0,n.jsx)(E.Z,{children:(0,n.jsx)(_.Z,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==ee?void 0:ee.Jobdescription}})})}),(0,n.jsx)(I.Z,{className:"px-10",children:(0,n.jsx)(g.Z,{onClick:ew,children:"Close"})})]}),(0,n.jsx)(Q.Z,{text:"Schedule a Call",onClick:()=>t(!0)})]})}}},function(e){e.O(0,[5445,6700,5121,8189,3654,326,2888,9774,179],function(){return e(e.s=46447)}),_N_E=e.O()}]);