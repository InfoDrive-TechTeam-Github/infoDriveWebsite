(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2766],{51527:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobinfo/[id]",function(){return o(57874)}])},49713:function(e,t,o){"use strict";o.d(t,{F:function(){return n}});let n=(0,o(64529).Ue)(e=>({description:"",title:"",handleHeadStore:(t,o)=>e(e=>({description:t,title:o}))}))},57874:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return J}});var n=o(85893),i=o(67294),a=o(9008),s=o.n(a),l=o(5121);o(95292);var r=o(63194),c=o(60434),d=o(64713),m=o(53043),u=o(99514),p=o(49645),h=o(73173),x=o(58046),g=o(29838),j=o(51642),v=o(19145),y=o(68178),f=o(15733),b=o(8875),w=o(80940),N=o(45914),_=o(49346);o(25935),o(61369);var S=o(35186),Z=o(55678);o(22130);var C=o(71750),I=o(59979),k=o(96838),L=o(11163),E=o(49713),T=o(16573),P=o(46616),F=o(21818),J=!0;t.default=e=>{let{jobInfo:t}=e;console.log("jobInfo",t),(0,E.F)();let[o,a]=(0,i.useState)(),J=(0,L.useRouter)(),[A,O]=(0,i.useState)(null),[B,R]=(0,i.useState)(!1),[D,H]=(0,i.useState)(null),[M,G]=i.useState(!1),[V,W]=(0,i.useState)(),[U,X]=(0,i.useState)(!1),[z,Y]=(0,i.useState)(""),[q,Q]=(0,i.useState)("");console.log("info",q);let[K,$]=(0,i.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),[ee,et]=(0,i.useState)(!1),{id:eo}=J.query;(0,i.useEffect)(()=>{function e(){window.innerWidth<768?et(!0):et(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let en=e=>{console.log("dataJob",e),H(e),G(!0)};console.log("jdHeight",U);let ei=()=>{G(!1)},ea=e=>{$({...K,[e.target.name]:e.target.value})};return(0,i.useEffect)(()=>{let e=async()=>{l.Z.post("https://mydryve.co/Api/getJobById",{id:eo}).then(e=>{a(e.data.payload.payload)}).catch(e=>console.log("Error: ".concat(e)))};eo&&e()},[eo]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{property:"description",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{property:"og:title",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{property:"og:description",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/jobinfo/".concat(eo,".html")}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:t?"Discover_exciting_career_opportunities_".concat(t[0].JobTitle,"_at_Infodrive_Solutions"):""}),(0,n.jsx)("meta",{name:"twitter:title",content:t?"Discover_exciting_career_opportunities_".concat(t[0].JobTitle,"_at_Infodrive_Solutions"):""}),(0,n.jsx)("meta",{name:"twitter:description",content:"Discover exciting career opportunitie at Infodrive Solutions"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("meta",{name:"google-site-verification",content:"JcRwQCIELBAZJX2iIdAkVHip-fPEjV_icDXuaLBIXfE"}),(0,n.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-PPS8R594');"}})]}),(0,n.jsx)("noscript",{children:(0,n.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-PPS8R594",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),o&&(0,n.jsx)(I.Z,{maxWidth:"xl",className:"flex gap-3 items-center mb-10 mx-auto mt-10 ",children:(0,n.jsxs)("div",{className:"JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox   transition-all ease-in-out w-full ",children:[(0,n.jsxs)("div",{className:"flex justify-between  w-full ",children:[(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h2",className:"pt0 cursor-pointer",component:"div",onClick:()=>handleJobClick(job.Id),children:o[0].JobTitle}),(0,n.jsxs)("div",{className:"CreatedBox flex gap-1 text-[#dd3952]",children:[(0,n.jsx)(k.Z,{}),(0,n.jsxs)(x.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"",children:["Created at:"," ",(0,y.Z)(new Date(o[0].created_at),"dd-MM-yyyy")]})]})]}),(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:o[0].Jobdescription},className:"Poppins"})}),(0,n.jsxs)(m.Z,{className:"mt30 ",children:[(0,n.jsxs)(m.Z,{className:"careerbox gap-1",children:[(0,n.jsx)(v.Z,{className:"h-[2rem] w-[2rem] "}),(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:o[0].Locality})]}),(0,n.jsxs)(m.Z,{style:{display:"flex",alignItems:"center text-slate-500",gap:"4px"},children:[(0,n.jsx)("div",{className:"Currency border-2 border-black p-3 rounded-full h-[2rem] w-[2rem] flex justify-center items-center",children:(0,n.jsx)("p",{className:"Poppins font-semibold",children:o[0].Currency})}),(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:o[0].MinSalary+" - "+o[0].MaxSalary})]})]}),(0,n.jsxs)("div",{className:"md:flex flex-col md:flex-row  items-center justify-between",children:[" ",(0,n.jsx)("button",{className:"mt30 Poppins  rounded-md p-2  shadow-md  hover:text-[#dd3952] hover:bg-white transition-all ease-in-out font-semibold uppercase\n                ".concat(B?"bg-white text-[#dd3952]":"bg-[#dd3952] text-white"),onClick:()=>en(job),children:"Apply now"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-sm text-black font-bold ml-2 mt-5 md:mt-0",children:"Share Job"}),(0,n.jsxs)("div",{className:" p-4 rounded-xl flex items-baseline gap-2 ",children:[(0,n.jsx)(F.r2,{url:"https://infodrive-solutions.com/jobinfo/".concat(o[0].Id,".html"),className:"bg-red-600 h-8 w-8",blankTarget:!0,children:(0,n.jsx)(p.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)(T.Z,{quote:"Discover exciting career opportunitie ".concat(o[0].JobTitle,"  at Infodrive Solutions"),url:"https://infodrive-solutions.com/jobinfo/".concat(o[0].Id,".html"),className:"bg-red-600 h-8 w-8",children:(0,n.jsx)(g.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)(P.Z,{title:"Discover exciting opportunitie ".concat(o[0].JobTitle,"  at Infodrive Solutions"),via:"Infodrive Solutions",url:"https://infodrive-solutions.com/jobinfo/".concat(o[0].Id,".html"),className:"bg-red-600 h-8 w-8",children:(0,n.jsx)(c.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText("".concat(window.location.origin,"/jobinfo/").concat(o[0].Id,".html")),Z.Am.success("Link copied successfully")},children:(0,n.jsx)(d.Z,{className:"h-6 w-6"})})]})]})]})]})}),(0,n.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with InfoDrive Solutions"}),(0,n.jsx)(h.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,n.jsx)(C.Z,{}),(0,n.jsx)(r.Z,{}),(0,n.jsxs)(f.Z,{open:M,className:"career-dialog",onClose:ei,children:[(0,n.jsxs)(_.Z,{children:["Apply Job: ",null==D?void 0:D.JobTitle]}),(0,n.jsxs)(w.Z,{children:[(0,n.jsx)(N.Z,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==D?void 0:D.Jobdescription}})}),(0,n.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(j.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:ea})}),(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(j.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:ea})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(j.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:ea})}),(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(S.ZP,{placeholder:"Enter phone number",value:V,defaultCountry:"SG",onChange:W})}),(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(j.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:ea})}),(0,n.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,n.jsx)("label",{children:"Skills"}),(0,n.jsx)("input",{className:"w100 job-skills",onChange:ea,placeholder:"Please add comma after each skill"})]}),(0,n.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,n.jsx)("label",{className:"w100",style:{marginBottom:"10px",marginTop:"10px",display:"block"},children:"Upload Your CV File"}),(0,n.jsx)("input",{className:"",type:"file",onChange:e=>{let t=e.target.files[0],o=new FormData;o.append("file",t),console.log("formData_____",o.file),""!==o?l.Z.post("https://mydryve.co/Api/candidateApplicationResume",o).then(e=>{console.log("file____chk__",e),Y("https://mydryve.co/Api/uploads/Candidate/Resume/"+e.data.payload)}).catch(e=>{console.log("There was an error!",null==e?void 0:e.response),Z.Am.error("Something went wrong!",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):Z.Am.error("Invalid Input",{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}})]})]})]}),(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(h.Z,{onClick:ei,children:"Cancel"}),(0,n.jsx)(h.Z,{onClick:()=>{let e=[D.Id];l.Z.post("https://mydryve.co/Api/addCandidate",{OwnerId:D.OwnerId,FirstName:K.FirstName,LastName:K.LastName,Email:K.Email,Phone:V,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"0",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:K.AvailableFrom,AvailableFrom:K.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:K.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy",Resume:z}).then(function(t){if(console.log("responseSubmit",t),!0==t.data.status){G(!1);let o=t.data.payload.candidateId;l.Z.post("https://mydryve.co/Api/assignJobToCandidate",{JobId:e,candidateId:o,OwnrId:D.OwnerId}).then(function(e){console.log("assignJob___",e);let t={JobId:K.Id,CandiateName:K.FirstName+"/"+K.LastName,Skills:M.Skills,NoticePeriod:K.AvailableFrom,candidateCv:""};Z.Am.success("You have Sucessfully applied for Job",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{let{error:e}=l.Z.post("https://infodrive.orbiloggiin.com/SendEmailCandidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).json();e?console.log("error_email",e):console.log("Email Sent")}catch(e){console.log("error_email222",e)}}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})},children:"Submit"})]})]}),(0,n.jsxs)(f.Z,{open:U,className:"career-dialog",onClose:ei,children:[(0,n.jsxs)(_.Z,{children:["Job: ",null==D?void 0:D.JobTitle]}),(0,n.jsx)(w.Z,{children:(0,n.jsx)(N.Z,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==D?void 0:D.Jobdescription}})})}),(0,n.jsx)(b.Z,{className:"px-10",children:(0,n.jsx)(h.Z,{onClick:e=>{H(e),X(e=>!e)},children:"Close"})})]})]})}}},function(e){e.O(0,[5445,6700,5121,8189,3654,1818,326,2888,9774,179],function(){return e(e.s=51527)}),_N_E=e.O()}]);