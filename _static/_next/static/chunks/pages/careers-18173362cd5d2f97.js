(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{7843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers",function(){return n(7987)}])},7987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(5893),o=n(7294),s=n(9008),i=n.n(s),l=n(6154),r=n(4683),c=n(6151),d=n(7357),m=n(8843),h=n(9861),p=n(8619),u=n(8885),x=n(8263),g=n(8005),j=n(2623),v=n(8492),y=n(9397),f=n(3972),Z=n(7354),w=n(802),b=n(4020),N=n(2715),S=n(9308),C=n(6339),k=n(2167),_=n(4666),I=n(1894),E=n(5713),P=n(4380),T=n(7645);n(5935),n(7873);var F=n(5186),L=n(5678);n(8025);var B=n(231);function O(){let[e,t]=(0,o.useState)(null),[n,s]=(0,o.useState)(null),[O,A]=o.useState(!1),[M,J]=(0,o.useState)(),[D,R]=(0,o.useState)(!1),[H,V]=(0,o.useState)(""),[G,W]=(0,o.useState)({FirstName:"",LastName:"",Email:"",Phone:"",AvailableFrom:"",Skills:""}),U=e=>{console.log("dataJob",e),s(e),A(!0)},z=e=>{s(e),R(e=>!e)};console.log("jdHeight",D);let Y=()=>{A(!1)},X=e=>{W({...G,[e.target.name]:e.target.value})},Q=()=>{let e=[n.Id];l.Z.post("http://206.189.149.207:4001/addCandidate",{OwnerId:n.OwnerId,FirstName:G.FirstName,LastName:G.LastName,Email:G.Email,Phone:M,City:"dummy",Locality:"dummy",FullAddress:"dummy",WillingToRelocate:"0",Qualification:"dummy",Specialization:"dummy",CurrentOrganization:"dummy",Title:"dummy",TotalExperience:"dummy",RelevantExperience:"dummy",SalaryType:"dummy",CurrentSalary:"dummy",SalaryExpectation:"dummy",Billing_rate:"dummy",CurrentEmploymentStatus:"dummy",NoticePeriod:G.AvailableFrom,AvailableFrom:G.AvailableFrom,Nationality:"dummy",WorkVisa:"dummy",Skills:G.Skills,LanguageSkills:"dummy",ProficiencyLevel:"dummy",FacebookURL:"dummy",TwitterURL:"dummy",LinkedInURL:"dummy",GitHubURL:"dummy",Source:"dummy",Resume:H}).then(function(t){if(console.log("responseSubmit",t),!0==t.data.status){A(!1);let a=t.data.payload.candidateId;l.Z.post("http://206.189.149.207:4001/assignJobToCandidate",{JobId:e,candidateId:a,OwnrId:n.OwnerId}).then(function(e){console.log("assignJob___",e);let t={JobId:G.Id,CandiateName:G.FirstName+"/"+G.LastName,Skills:O.Skills,NoticePeriod:G.AvailableFrom,candidateCv:""};L.Am.success("You have Sucessfully applied for Job",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{let e=l.Z.post("https://infodrive.orbiloggiin.com/SendEmailCandidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{error:n}=e.json();n?console.log("error_email",n):console.log("Email Sent")}catch(e){console.log("error_email222",e)}}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})},q=e=>{let t=e.target.files[0],n=new FormData;n.append("file",t),console.log("formData_____",n.file),""!==n?l.Z.post("http://206.189.149.207:4001/candidateApplicationResume",n).then(e=>{console.log("file____chk__",e);let t=e.data.payload;V("http://206.189.149.207:4001/uploads/Candidate/Resume/"+t)}).catch(e=>{console.log("There was an error!",null==e?void 0:e.response),L.Am.error("Something went wrong!",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):L.Am.error("Invalid Input",{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return(0,o.useEffect)(()=>{l.Z.post("http://206.189.149.207:4001/getJobsList",{userId:1}).then(function(e){let n=e.data.payload.payload;console.log("getData",n),t(n)}).catch(function(e){console.log(e)})},[]),console.log("jobs",e),(0,a.jsxs)("div",{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,a.jsx)("meta",{name:"description",content:"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,a.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/careers.html"}),(0,a.jsx)("meta",{property:"og:title",content:" Join our team at Infodrive Solutions - Exciting Career Opportunities Available"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,a.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,a.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-MB38MVS');"}}),(0,a.jsx)("noscript",{children:(0,a.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,a.jsx)(r.Z,{}),(0,a.jsxs)("div",{className:"sliderBox",children:[(0,a.jsx)("img",{style:{width:"100%"},src:"images/25614380e49e0fd7742fc1e2e7973a1e.jpeg",alt:"Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."}),(0,a.jsx)(d.Z,{sx:{flexGrow:1},className:"sliderContent salePart",children:(0,a.jsxs)(x.ZP,{container:!0,spacing:0,children:[(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"CAREERS AT INFODRIVE"}),(0,a.jsxs)(f.Z,{gutterBottom:!0,variant:"h1",component:"div",children:["The team is growing with ",(0,a.jsx)("br",{}),"a variety of opportunities ",(0,a.jsx)("br",{}),"available"]}),(0,a.jsxs)(y.Z,{href:"/contact-us.html",className:"readmore white normalCase",variant:"text",children:["Let's Talk ",(0,a.jsx)(Z.Z,{})]}),(0,a.jsx)("nav",{className:"socical-network",children:(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(h.ZP,{children:(0,a.jsx)(p.Z,{component:"a",href:"https://www.facebook.com/InfoDrivesolutions/",children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(w.Z,{})})})}),(0,a.jsx)(h.ZP,{children:(0,a.jsx)(p.Z,{component:"a",href:"https://in.linkedin.com/company/infodrive-solutions/",children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(g.Z,{})})})}),(0,a.jsx)(h.ZP,{children:(0,a.jsx)(p.Z,{component:"a",href:"https://www.instagram.com/infodrivesolutions/",children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(b.Z,{})})})})]})})]})})]}),(0,a.jsxs)("section",{className:"sectionBox",children:[(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h1",component:"h1",children:"Explore popular jobs"}),(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"InfoDrive is always on a lookout for passionate, creative people who have the zeal to achieve the extraordinary. We welcome candidates who think they can contribute positively to our team and help us take InfoDrive to further levels of excellency. If you think, you're the perfect fit for our organization, please send your CV and cover letter to info@infodrive-solutions.com. You can find the latest openings here:"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("section",{className:"sectionBox nm jobSection",children:(0,a.jsxs)(x.ZP,{container:!0,spacing:7,justify:"center",children:[e&&e.map((e,t)=>(0,a.jsx)(a.Fragment,{children:"Open"===e.JobStatus?(0,a.jsx)(x.ZP,{item:!0,lg:6,xs:12,children:(0,a.jsx)(j.Z,{className:"cardcareer w100",children:(0,a.jsxs)(v.Z,{children:[(0,a.jsxs)(d.Z,{className:"mt30",sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h2",className:"pt0",component:"div",children:e.JobTitle}),(0,a.jsxs)(f.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"w100 ml pt5 createdat",children:["Created at:"," ",(0,k.Z)(new Date(e.created_at),"dd-MM-yyyy")]})]},e.Id),(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100 mt30 jd ".concat(D?"setShowDescription":""),children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.Jobdescription}})}),e.Jobdescription?(0,a.jsx)("span",{className:"mt15 readMoreLink",onClick:()=>z(e),children:D?"Show less":"Show more"}):"",(0,a.jsxs)(d.Z,{className:"mt30",children:[(0,a.jsxs)(d.Z,{className:"careerbox",children:[(0,a.jsx)(S.Z,{}),(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:e.Locality})]}),(0,a.jsxs)(d.Z,{style:{display:"flex"},children:[(0,a.jsx)(C.Z,{}),(0,a.jsxs)(f.Z,{gutterBottom:!0,variant:"h3",component:"div",className:"mlb pt5",children:[e.MinSalary>0?e.MinSalary+" "+e.Currency:"",e.MinSalary>0&&e.MaxSalary>0?" - ":"",e.MaxSalary>0?e.MaxSalary+" "+e.Currency:""]})]})]}),(0,a.jsx)(y.Z,{className:"mt30",onClick:()=>U(e),children:(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h3",component:"span",className:"mb0",children:"Apply now"})})]})})}):""})),!e&&(0,a.jsx)(a.Fragment,{children:"loading..."}),e&&!e.length&&(0,a.jsx)(a.Fragment,{children:"No Jobs To Display"})]})}),(0,a.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,a.jsx)(f.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Empower Your Career Growth with Infodrive Solutions"}),(0,a.jsx)(y.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,a.jsx)(B.Z,{}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(_.Z,{open:O,className:"career-dialog",onClose:Y,children:[(0,a.jsxs)(T.Z,{children:["Apply Job: ",null==n?void 0:n.JobTitle]}),(0,a.jsxs)(E.Z,{children:[(0,a.jsx)(P.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==n?void 0:n.Jobdescription}})}),(0,a.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(x.ZP,{item:!0,xs:6,children:(0,a.jsx)(N.Z,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",type:"text",fullWidth:!0,name:"FirstName",variant:"standard",onChange:X})}),(0,a.jsx)(x.ZP,{item:!0,xs:6,children:(0,a.jsx)(N.Z,{autoFocus:!0,margin:"dense",id:"lastName",label:"Last Name",type:"text",fullWidth:!0,name:"LastName",variant:"standard",onChange:X})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,children:(0,a.jsx)(N.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,name:"Email",variant:"standard",onChange:X})}),(0,a.jsx)(x.ZP,{item:!0,xs:6,children:(0,a.jsx)(F.ZP,{placeholder:"Enter phone number",value:M,defaultCountry:"SG",onChange:J})}),(0,a.jsx)(x.ZP,{item:!0,xs:6,children:(0,a.jsx)(N.Z,{id:"AvailableFrom",label:"Available From",type:"date",defaultValue:"05-24-2022",fullWidth:!0,name:"AvailableFrom",InputLabelProps:{shrink:!0},onChange:X})}),(0,a.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,a.jsx)("label",{children:"Skills"}),(0,a.jsx)("input",{className:"w100 job-skills",onChange:X,placeholder:"Please add comma after each skill"})]}),(0,a.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,a.jsx)("label",{className:"w100",style:{marginBottom:"10px",marginTop:"10px",display:"block"},children:"Upload Your CV File"}),(0,a.jsx)("input",{className:"",type:"file",onChange:q})]})]})]}),(0,a.jsxs)(I.Z,{children:[(0,a.jsx)(y.Z,{onClick:Y,children:"Cancel"}),(0,a.jsx)(y.Z,{onClick:Q,children:"Submit"})]})]}),(0,a.jsxs)(_.Z,{open:D,className:"career-dialog",onClose:Y,children:[(0,a.jsxs)(T.Z,{children:["Job: ",null==n?void 0:n.JobTitle]}),(0,a.jsx)(E.Z,{children:(0,a.jsx)(P.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==n?void 0:n.Jobdescription}})})}),(0,a.jsx)(I.Z,{children:(0,a.jsx)(y.Z,{onClick:z,children:"Close"})})]})]})}}},function(e){e.O(0,[319,238,765,968,30,447,231,774,888,179],function(){return e(e.s=7843)}),_N_E=e.O()}]);