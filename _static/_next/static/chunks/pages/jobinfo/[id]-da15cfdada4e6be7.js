(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2766],{51527:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobinfo/[id]",function(){return o(25136)}])},75429:function(e,t,o){"use strict";o.d(t,{F:function(){return a}});var n=o(64529);let a=(0,n.Ue)(e=>({description:"",title:"",handleHeadStore:(t,o)=>e(e=>({description:t,title:o}))}))},25136:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return A}});var n=o(85893),a=o(67294),i=o(9008),s=o.n(i),l=o(6154);o(63592);var r=o(20091),c=o(25084),d=o(41899),m=o(87357),u=o(48263),p=o(68005),h=o(69397),x=o(23972),g=o(60802),j=o(22715),v=o(69308),y=o(72167),b=o(64666),f=o(91894),w=o(35713),N=o(4380),S=o(37645);o(25935),o(45516);var Z=o(35186),C=o(55678);o(71399);var I=o(93032),_=o(65582),k=o(53147),T=o(11163),L=o(75429),E=o(16573),F=o(46616),J=o(21818);let O=e=>{let{jobInfo:t}=e;console.log("jobInfo",t),(0,L.F)();let[o,i]=(0,a.useState)(),O=(0,T.useRouter)(),[A,P]=(0,a.useState)(null),[B,D]=(0,a.useState)(!1),[M,R]=(0,a.useState)(null),[G,H]=a.useState(!1),[V,W]=(0,a.useState)(),[U,z]=(0,a.useState)(!1),[Y,q]=(0,a.useState)(""),[X,Q]=(0,a.useState)("");console.log("info",X);let[K,$]=(0,a.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),[ee,et]=(0,a.useState)(!1),{id:eo}=O.query;(0,a.useEffect)(()=>{function e(){let e=window.innerWidth;e<768?et(!0):et(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let en=e=>{console.log("dataJob",e),R(e),H(!0)},ea=e=>{R(e),z(e=>!e)};console.log("jdHeight",U);let ei=()=>{H(!1)},es=e=>{$({...K,[e.target.name]:e.target.value})},el=()=>{let e=[M.Id];l.Z.post("https://mydryve.co/Api/addCandidate",{OwnerId:M.OwnerId,FirstName:K.FirstName,LastName:K.LastName,Email:K.Email,Phone:V,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"0",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:K.AvailableFrom,AvailableFrom:K.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:K.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy",Resume:Y}).then(function(t){if(console.log("responseSubmit",t),!0==t.data.status){H(!1);let o=t.data.payload.candidateId;l.Z.post("https://mydryve.co/Api/assignJobToCandidate",{JobId:e,candidateId:o,OwnrId:M.OwnerId}).then(function(e){console.log("assignJob___",e);let t={JobId:K.Id,CandiateName:K.FirstName+"/"+K.LastName,Skills:G.Skills,NoticePeriod:K.AvailableFrom,candidateCv:""};C.Am.success("You have Sucessfully applied for Job",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{let e=l.Z.post("https://infodrive.orbiloggiin.com/SendEmailCandidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{error:o}=e.json();o?console.log("error_email",o):console.log("Email Sent")}catch(e){console.log("error_email222",e)}}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})},er=e=>{let t=e.target.files[0],o=new FormData;o.append("file",t),console.log("formData_____",o.file),""!==o?l.Z.post("https://mydryve.co/Api/candidateApplicationResume",o).then(e=>{console.log("file____chk__",e);let t=e.data.payload;q("https://mydryve.co/Api/uploads/Candidate/Resume/"+t)}).catch(e=>{console.log("There was an error!",null==e?void 0:e.response),C.Am.error("Something went wrong!",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):C.Am.error("Invalid Input",{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return(0,a.useEffect)(()=>{let e=async()=>{l.Z.post("https://mydryve.co/Api/getJobById",{id:eo}).then(e=>{i(e.data.payload.payload)}).catch(e=>console.log("Error: ".concat(e)))};eo&&e()},[eo]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{property:"description",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{property:"og:title",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{property:"og:description",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/jobinfo/".concat(eo,".html")}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{name:"twitter:title",content:t?"Discover exciting career opportunitie ".concat(t[0].JobTitle,"  at Infodrive Solutions"):""}),(0,n.jsx)("meta",{name:"twitter:description",content:"Discover exciting career opportunitie at Infodrive Solutions"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}})]}),(0,n.jsx)("noscript",{children:(0,n.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),o&&(0,n.jsx)(_.Z,{maxWidth:"xl",className:"flex gap-3 items-center mb-10 mx-auto mt-10 ",children:(0,n.jsxs)("div",{className:"JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox   transition-all ease-in-out w-full ",children:[(0,n.jsxs)("div",{className:"flex justify-between  w-full ",children:[(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h2",className:"pt0 cursor-pointer",component:"div",onClick:()=>handleJobClick(job.Id),children:o[0].JobTitle}),(0,n.jsxs)("div",{className:"CreatedBox flex gap-1 text-[#dd3952]",children:[(0,n.jsx)(k.Z,{}),(0,n.jsxs)(x.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"",children:["Created at:"," ",(0,y.Z)(new Date(o[0].created_at),"dd-MM-yyyy")]})]})]}),(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:o[0].Jobdescription},className:"Poppins"})}),(0,n.jsxs)(m.Z,{className:"mt30 ",children:[(0,n.jsxs)(m.Z,{className:"careerbox gap-1",children:[(0,n.jsx)(v.Z,{className:"h-[2rem] w-[2rem] "}),(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:o[0].Locality})]}),(0,n.jsxs)(m.Z,{style:{display:"flex",alignItems:"center text-slate-500",gap:"4px"},children:[(0,n.jsx)("div",{className:"Currency border-2 border-black p-3 rounded-full h-[2rem] w-[2rem] flex justify-center items-center",children:(0,n.jsx)("p",{className:"Poppins font-semibold",children:o[0].Currency})}),(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:o[0].MinSalary+" - "+o[0].MaxSalary})]})]}),(0,n.jsxs)("div",{className:"md:flex flex-col md:flex-row  items-center justify-between",children:[" ",(0,n.jsx)("button",{className:"mt30 Poppins  rounded-md p-2  shadow-md  hover:text-[#dd3952] hover:bg-white transition-all ease-in-out font-semibold uppercase\n                ".concat(B?"bg-white text-[#dd3952]":"bg-[#dd3952] text-white"),onClick:()=>en(job),children:"Apply now"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-sm text-black font-bold ml-2 mt-5 md:mt-0",children:"Share Job"}),(0,n.jsxs)("div",{className:" p-4 rounded-xl flex items-baseline gap-2 ",children:[(0,n.jsx)(J.r2,{url:"https://infodrive-solutions.com/jobinfo/".concat(o[0].Id,".html"),className:"bg-red-600 h-8 w-8",blankTarget:!0,children:(0,n.jsx)(p.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)(E.Z,{quote:"Discover exciting career opportunitie ".concat(o[0].JobTitle,"  at Infodrive Solutions"),url:"https://infodrive-solutions.com/jobinfo/".concat(o[0].Id,".html"),className:"bg-red-600 h-8 w-8",children:(0,n.jsx)(g.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)(F.Z,{title:o[0].JobTitle,via:"Infodrive Solutions",url:"https://infodrive-solutions.com/jobinfo/".concat(o[0].Id,".html"),className:"bg-red-600 h-8 w-8",children:(0,n.jsx)(c.Z,{color:"primary",className:"h-6 w-6"})}),(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText("".concat(window.location.origin,"/jobinfo/").concat(o[0].Id,".html")),C.Am.success("Link copied successfully")},children:(0,n.jsx)(d.Z,{className:"h-6 w-6"})})]})]})]})]})}),(0,n.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,n.jsx)(x.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with InfoDrive Solutions"}),(0,n.jsx)(h.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,n.jsx)(I.Z,{}),(0,n.jsx)(r.Z,{}),(0,n.jsxs)(b.Z,{open:G,className:"career-dialog",onClose:ei,children:[(0,n.jsxs)(S.Z,{children:["Apply Job: ",null==M?void 0:M.JobTitle]}),(0,n.jsxs)(w.Z,{children:[(0,n.jsx)(N.Z,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==M?void 0:M.Jobdescription}})}),(0,n.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(j.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:es})}),(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(j.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:es})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(j.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:es})}),(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(Z.ZP,{placeholder:"Enter phone number",value:V,defaultCountry:"SG",onChange:W})}),(0,n.jsx)(u.ZP,{item:!0,xs:6,children:(0,n.jsx)(j.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:es})}),(0,n.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,n.jsx)("label",{children:"Skills"}),(0,n.jsx)("input",{className:"w100 job-skills",onChange:es,placeholder:"Please add comma after each skill"})]}),(0,n.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,n.jsx)("label",{className:"w100",style:{marginBottom:"10px",marginTop:"10px",display:"block"},children:"Upload Your CV File"}),(0,n.jsx)("input",{className:"",type:"file",onChange:er})]})]})]}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(h.Z,{onClick:ei,children:"Cancel"}),(0,n.jsx)(h.Z,{onClick:el,children:"Submit"})]})]}),(0,n.jsxs)(b.Z,{open:U,className:"career-dialog",onClose:ei,children:[(0,n.jsxs)(S.Z,{children:["Job: ",null==M?void 0:M.JobTitle]}),(0,n.jsx)(w.Z,{children:(0,n.jsx)(N.Z,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==M?void 0:M.Jobdescription}})})}),(0,n.jsx)(f.Z,{className:"px-10",children:(0,n.jsx)(h.Z,{onClick:ea,children:"Close"})})]})]})};var A=!0;t.default=O}},function(e){e.O(0,[6700,9582,288,4992,4827,2356,1818,5947,3032,9774,2888,179],function(){return e(e.s=51527)}),_N_E=e.O()}]);