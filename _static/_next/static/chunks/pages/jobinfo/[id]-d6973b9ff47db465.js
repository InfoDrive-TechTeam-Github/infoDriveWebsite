(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2766],{51527:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobinfo/[id]",function(){return n(25136)}])},75429:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var a=n(64529);let o=(0,a.Ue)(e=>({description:"",title:"",handleHeadStore:(t,n)=>e(e=>({description:t,title:n}))}))},25136:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return I}});var a=n(85893),o=n(67294),i=n(9008),s=n.n(i),l=n(6154);n(63592);var r=n(20091),d=n(87357),c=n(48263),m=n(69397),u=n(23972),p=n(22715),h=n(69308),g=n(72167),x=n(64666),y=n(91894),j=n(35713),v=n(4380),f=n(37645);n(25935),n(45516);var b=n(35186),w=n(55678);n(71399);var N=n(93032),S=n(65582),Z=n(53147),C=n(11163),_=n(75429);let k=e=>{let{jobInfo:t}=e;console.log("jobInfo",t);let n=(0,_.F)(),[i,k]=(0,o.useState)(),I=(0,C.useRouter)(),[E,L]=(0,o.useState)(null),[F,P]=(0,o.useState)(!1),[T,A]=(0,o.useState)(null),[J,B]=o.useState(!1),[O,M]=(0,o.useState)(),[R,D]=(0,o.useState)(!1),[H,G]=(0,o.useState)(""),[W,U]=(0,o.useState)("");console.log("info",W);let[V,z]=(0,o.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),[Y,X]=(0,o.useState)(!1),{id:q}=I.query;(0,o.useEffect)(()=>{function e(){let e=window.innerWidth;e<768?X(!0):X(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let Q=e=>{console.log("dataJob",e),A(e),B(!0)},K=e=>{A(e),D(e=>!e)};console.log("jdHeight",R);let $=()=>{B(!1)},ee=e=>{z({...V,[e.target.name]:e.target.value})},et=()=>{let e=[T.Id];l.Z.post("https://mydryve.co/Api/addCandidate",{OwnerId:T.OwnerId,FirstName:V.FirstName,LastName:V.LastName,Email:V.Email,Phone:O,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"0",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:V.AvailableFrom,AvailableFrom:V.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:V.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy",Resume:H}).then(function(t){if(console.log("responseSubmit",t),!0==t.data.status){B(!1);let n=t.data.payload.candidateId;l.Z.post("https://mydryve.co/Api/assignJobToCandidate",{JobId:e,candidateId:n,OwnrId:T.OwnerId}).then(function(e){console.log("assignJob___",e);let t={JobId:V.Id,CandiateName:V.FirstName+"/"+V.LastName,Skills:J.Skills,NoticePeriod:V.AvailableFrom,candidateCv:""};w.Am.success("You have Sucessfully applied for Job",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{let e=l.Z.post("https://infodrive.orbiloggiin.com/SendEmailCandidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{error:n}=e.json();n?console.log("error_email",n):console.log("Email Sent")}catch(e){console.log("error_email222",e)}}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})},en=e=>{let t=e.target.files[0],n=new FormData;n.append("file",t),console.log("formData_____",n.file),""!==n?l.Z.post("https://mydryve.co/Api/candidateApplicationResume",n).then(e=>{console.log("file____chk__",e);let t=e.data.payload;G("https://mydryve.co/Api/uploads/Candidate/Resume/"+t)}).catch(e=>{console.log("There was an error!",null==e?void 0:e.response),w.Am.error("Something went wrong!",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):w.Am.error("Invalid Input",{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return(0,o.useEffect)(()=>{let e=async()=>{l.Z.post("https://mydryve.co/Api/getJobById",{id:q}).then(e=>{k(e.data.payload.payload)}).catch(e=>console.log("Error: ".concat(e)))};q&&e()},[q]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(s(),{children:[(0,a.jsxs)("title",{children:["Join our team at Infodrive Solutions -",i?i[0].JobTitle:"Jobs at Infodrive"]}),(0,a.jsx)("meta",{name:"description",content:i?" Discover exciting career opportunitie ".concat(n.title,"  at Infodrive Solutions"):"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,a.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/jobinfo/".concat(q,".html")}),(0,a.jsx)("meta",{property:"og:title",content:"Join our team at Infodrive Solutions for - ".concat(n.title)}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,a.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,a.jsx)("meta",{property:"og:description",content:"Discover exciting career opportunities at Infodrive Solutions - ".concat(n.title,' : ""}')}),(0,a.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}}),(0,a.jsx)("noscript",{children:(0,a.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),i&&(0,a.jsx)(S.Z,{maxWidth:"xl",className:"flex gap-3 items-center mb-10 mx-auto mt-10 ",children:(0,a.jsxs)("div",{className:"JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox   transition-all ease-in-out w-full ",children:[(0,a.jsxs)("div",{className:"flex justify-between  w-full ",children:[(0,a.jsx)(u.Z,{gutterBottom:!0,variant:"h2",className:"pt0 cursor-pointer",component:"div",onClick:()=>handleJobClick(job.Id),children:i[0].JobTitle}),(0,a.jsxs)("div",{className:"CreatedBox flex gap-1 text-[#dd3952]",children:[(0,a.jsx)(Z.Z,{}),(0,a.jsxs)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"",children:["Created at:"," ",(0,g.Z)(new Date(i[0].created_at),"dd-MM-yyyy")]})]})]}),(0,a.jsx)(u.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i[0].Jobdescription},className:"Poppins"})}),(0,a.jsxs)(d.Z,{className:"mt30 ",children:[(0,a.jsxs)(d.Z,{className:"careerbox gap-1",children:[(0,a.jsx)(h.Z,{className:"h-[2rem] w-[2rem] "}),(0,a.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:i[0].Locality})]}),(0,a.jsxs)(d.Z,{style:{display:"flex",alignItems:"center text-slate-500",gap:"4px"},children:[(0,a.jsx)("div",{className:"Currency border-2 border-black p-3 rounded-full h-[2rem] w-[2rem] flex justify-center items-center",children:(0,a.jsx)("p",{className:"Poppins font-semibold",children:i[0].Currency})}),(0,a.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:i[0].MinSalary+" - "+i[0].MaxSalary})]})]}),(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsx)("button",{className:"mt30 Poppins  rounded-md p-2  shadow-md  hover:text-[#dd3952] hover:bg-white transition-all ease-in-out font-semibold uppercase\n                ".concat(F?"bg-white text-[#dd3952]":"bg-[#dd3952] text-white"),onClick:()=>Q(i[0]),children:"Apply now"})})]})}),(0,a.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,a.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with InfoDrive Solutions"}),(0,a.jsx)(m.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,a.jsx)(N.Z,{}),(0,a.jsx)(r.Z,{}),(0,a.jsxs)(x.Z,{open:J,className:"career-dialog",onClose:$,children:[(0,a.jsxs)(f.Z,{children:["Apply Job: ",null==T?void 0:T.JobTitle]}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(v.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==T?void 0:T.Jobdescription}})}),(0,a.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsx)(p.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:ee})}),(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsx)(p.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:ee})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,children:(0,a.jsx)(p.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:ee})}),(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsx)(b.ZP,{placeholder:"Enter phone number",value:O,defaultCountry:"SG",onChange:M})}),(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsx)(p.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:ee})}),(0,a.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,a.jsx)("label",{children:"Skills"}),(0,a.jsx)("input",{className:"w100 job-skills",onChange:ee,placeholder:"Please add comma after each skill"})]}),(0,a.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,a.jsx)("label",{className:"w100",style:{marginBottom:"10px",marginTop:"10px",display:"block"},children:"Upload Your CV File"}),(0,a.jsx)("input",{className:"",type:"file",onChange:en})]})]})]}),(0,a.jsxs)(y.Z,{children:[(0,a.jsx)(m.Z,{onClick:$,children:"Cancel"}),(0,a.jsx)(m.Z,{onClick:et,children:"Submit"})]})]}),(0,a.jsxs)(x.Z,{open:R,className:"career-dialog",onClose:$,children:[(0,a.jsxs)(f.Z,{children:["Job: ",null==T?void 0:T.JobTitle]}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(v.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==T?void 0:T.Jobdescription}})})}),(0,a.jsx)(y.Z,{className:"px-10",children:(0,a.jsx)(m.Z,{onClick:K,children:"Close"})})]})]})};var I=!0;t.default=k}},function(e){e.O(0,[6700,9582,288,4992,4827,2510,5947,3032,9774,2888,179],function(){return e(e.s=51527)}),_N_E=e.O()}]);