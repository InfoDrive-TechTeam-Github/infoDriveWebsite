(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(23735)}])},97542:function(e,t,s){"use strict";var n=s(85893),o=s(67294),a=s(5121),r=s(55678),i=s(59643),l=s(53043);t.Z=e=>{let{open:t,handleClose:s,setOpen:c}=e,[d,m]=(0,o.useState)(!1),[h,p]=(0,o.useState)({full_name:"",email_address:"",contact_number:"",industry:"",message:""}),u=e=>{p(t=>({...t,[e.target.name]:e.target.value}))},x=async e=>{e.preventDefault(),m(!0),console.log("value",h);try{let e=await a.Z.post("https://mydryve.co/Api/sendMail",h);console.log(e.data.message),m(!1),e.data.message?r.Am.success(e.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):r.Am.warning("Please Try Again",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(e){r.Am.error("Something went wrong",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log(e,"error")}c(!1)};return(0,n.jsx)(i.Z,{open:t,onClose:s,children:(0,n.jsxs)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90%",maxWidth:450,overflowY:"auto",bgcolor:"background.paper",border:"none",boxShadow:24,p:4,borderRadius:"16px"},className:"no-scrollbar",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("h2",{className:"font-bold mb-4 text-lg md:text-2xl",children:"Request a call back"}),(0,n.jsx)("button",{onClick:s,className:"text-gray-700 hover:text-red-500 -mt-4",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,n.jsxs)("form",{onSubmit:x,children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"full_name",className:"block text-gray-700 text-sm font-bold mb-2",children:"Full Name"}),(0,n.jsx)("input",{type:"text",id:"full_name",name:"full_name",value:h.full_name,onChange:u,className:"w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"email_address",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email Address"}),(0,n.jsx)("input",{type:"email",id:"email_address",name:"email_address",value:h.email_address,onChange:u,className:"w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"contact_number",className:"block text-gray-700 text-sm font-bold mb-2",children:"Contact Number"}),(0,n.jsx)("input",{type:"text",id:"contact_number",name:"contact_number",value:h.contact_number,onChange:u,className:"w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"message",className:"block text-gray-700 text-sm font-bold mb-2",children:"Message"}),(0,n.jsx)("textarea",{id:"message",name:"message",value:h.message,onChange:u,className:"w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"})]}),(0,n.jsx)("button",{type:"submit",className:"w-full p-2 text-white shadow-md bg-red-600 rounded-md hover:bg-red-900",disabled:d,children:d?"Sending...":"Submit"})]})]})})}},32323:function(e,t,s){"use strict";var n=s(85893);s(67294);var o=s(45697),a=s.n(o),r=s(26963),i=s(63993),l=s.n(i);let c=e=>{let{text:t,onClick:s}=e;return(0,n.jsx)("div",{children:(0,n.jsxs)("button",{className:l().fab,onClick:s,children:[(0,n.jsx)(r.DNl,{style:{marginRight:"8px"}}),t]})})};c.propTypes={text:a().string.isRequired,onClick:a().func},t.Z=c},23735:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return R}});var n=s(85893),o=s(67294),a=s(9008),r=s.n(a),i=s(95292),l=s(63194);s(11081),s(29994);var c=s(53043),d=s(99514),m=s(24726),h=s(44282),p=s(73173),u=s(58046),x=s(10382),g=s(39980),f=s(37007),v=s(59090),j=s(26963),b=s(13056),w=s.n(b),y=s(88142),Z=s(15411),N=s(29411),S=s(81151),k=s(35238),D=s(86347);s(22130);var C=s(71750);s(58449);var O=s(10615);s(28711);var I=s(49645),P=s(1242),B=s(65981),T=s(49520),M=s(6621),E=s(29838),A=s(36105);let L=[{url:"/1.png",alt:"Trusted Software Development & Salesforce Partner Company"},{url:"./images/odoop.jpg",alt:"IT Technology Service Company"},{url:"/5.png",alt:"IT Technology Service Company"}];var W=function(){return(0,n.jsx)("div",{className:"Home ",children:(0,n.jsx)(O.lr,{autoPlay:!0,infiniteLoop:!0,showArrows:!1,showStatus:!1,showThumbs:!1,stopOnHover:!1,children:L.map(e=>(0,n.jsxs)("div",{className:"sliderBox bg-black",children:[(0,n.jsx)("img",{style:{width:"100vw"},src:e.url,className:"  md:h-full md:object-cover pt-10 ",alt:e.alt}),(0,n.jsx)(c.Z,{sx:{flexGrow:1},className:"sliderContent",children:(0,n.jsxs)(d.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h1",component:"div",className:"mb-24 md:mb-0"}),(0,n.jsxs)(p.Z,{href:"/contact-us.html",className:"letsTalkmin  normalCase bg-white text-black hover:bg-pink-600 hover:text-white mt-5",variant:"text",children:["Let's Talk ",(0,n.jsx)(f.Z,{})]}),(0,n.jsx)("nav",{className:"socical-network",children:(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(B.ZP,{children:(0,n.jsx)(T.Z,{component:"a",href:"https://www.facebook.com/InfoDrivesolutions/",children:(0,n.jsx)(M.Z,{children:(0,n.jsx)(E.Z,{className:"smallIcon",sx:{fontSize:35}})})})}),(0,n.jsx)(B.ZP,{children:(0,n.jsx)(T.Z,{component:"a",href:"https://in.linkedin.com/company/infodrive-solutions/",children:(0,n.jsx)(M.Z,{children:(0,n.jsx)(I.Z,{className:"smallIcon",sx:{fontSize:35}})})})}),(0,n.jsx)(B.ZP,{children:(0,n.jsx)(T.Z,{component:"a",href:"https://www.instagram.com/infodrivesolutions/",children:(0,n.jsx)(M.Z,{children:(0,n.jsx)(A.Z,{className:"smallIcon",sx:{fontSize:35}})})})})]})})]})})]}))})})},_=s(32323),q=s(97542);function R(){let[e,t]=o.useState(!1),[s,a]=o.useState("1"),[b,O]=(0,o.useState)("none"),[I,P]=(0,o.useState)({full_name:"",email_address:"",contact_number:"",industry:"",message:""}),[B,T]=(0,o.useState)(!0),M={open:{opacity:1,scale:1},closed:{opacity:0,scale:.5}},E={open:{opacity:1,y:20},closed:{opacity:1,y:0}};return console.log("items",[{item0:[{name:"Aidin Mahmoodi",role:"Product Lead at ServiceRocket",description:"We reached out to InfoDrive to help us build a few technical POC (Proof of Concept) as our internal development teams were extremely busy with other products/projects. InfoDrive was very particularly quick and responsive, they quickly jumped on a call together requirements from us and provided their estimate and proposal in a short time.\n After a lengthy onboarding process from our side, InfoDrive assigned one of their remarkably capable, knowledgeable Salesforce certified engineers as our main technical person.\n I’d also like to point out that the entire team at Info Drive is resourceful, responsive, and flexible. Our assigned engineer easily adopted our internal agile practices and was able to provide feedback on our sprint review and planning, similar to our internal development teams."},{name:"Kester Poh",role:"CEO at AiChat",description:"Infodrive team has provided support in a POC setup and configured a Email-to-Case demo.   The team has also provided professional consultation on the approach for the project.    Thanks Pradeep and team for the support, looking forward to working on the next project together!"}]},{item0:[{name:"Mark Durante",role:"Vice President of Product and Engineering at Jabmo",description:"After a rigorous vendor selection process undertaken by my team, we settled on InfoDrive for our SFDC app implementation project. InfoDrive's relevant experience, prompt communication, and positive attitude won us over. And I'm happy to say we made the right decision. Interactions with the team were fluid and pleasant, and they delivered a quality work product on time.  We look forward to future engagements with InfoDrive as our needs require."},{name:"Sivachanthiran Belasamy",role:"Founder & CEO at Falaina",description:"Info Drive Team had provided constant support to our Organisation by helping us in building the Custom tables and related API in Salesforce.   The team has always been reachable on the approach for the project. Further, the team has been more than happy to clarify any doubts that we may have had, and done several knowledge transfers for us to better understand Salesforce and its functionalities.   Thanks, Pradeep and team for the support, looking forward to working on the upcoming projects!"}]}]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Software Development & Digital Transformation Solutions Company in Singapore, Malaysia & India - InfoDrive Solutions"}),(0,n.jsx)("meta",{name:"description",content:"InfoDrive Solutions is a Software Development and Digital Transformation Solutions company, we are headquartered in Singapore with regional offices in Malaysia (KL) & India (Bangalore)."}),(0,n.jsx)("meta",{name:"keywords",content:"Software Development Company in Singapore, Software Development Company in Malaysia, Software Development Company in India, Digital Transformation Solutions Company in Malaysia, Digital Transformation Solutions Company in Singapore, IT Solutions Company in Singapore, IT Services in Malaysia, Top Software Company in Singapore, Top Software Company in Malaysia, Software Development Agency Singapore, Custom Software Malaysia, Software Development Company in Kuala Lumpur"}),(0,n.jsx)("meta",{property:"og:title",content:"Software Development & Digital Transformation Solutions Company in Singapore, Malaysia & India - InfoDrive Solutions"}),(0,n.jsx)("meta",{property:"og:image",content:"https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("link",{rel:"canonical",href:"https://infodrive-solutions.com/"}),(0,n.jsx)("meta",{name:"google-site-verification",content:"7KEHJFp_iwMtPaWCOZumSwuNlb8Xjnd87er5I4VD71E"}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n      (function(w,d,s,l,i){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),\n            dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;\n        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','GTM-PPS8R594');\n    "}}),(0,n.jsx)("script",{type:"application/ld+json",children:'\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "InfoDrive Solutions",\n        "url": "https://infodrive-solutions.com/",\n        "logo": "https://infodrive-solutions.com/logo.html",\n        "sameAs": [\n          "https://www.facebook.com/InfoDrivesolutions/",\n          "https://twitter.com/infodrives",\n          "https://www.instagram.com/infodrivesolutions/",\n          "https://www.youtube.com/@infodrivesolutions9178",\n          "https://in.linkedin.com/company/infodrive-solutions/"\n        ]\n      }\n    '})]}),(0,n.jsx)("noscript",{children:(0,n.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-PPS8R594",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,n.jsx)(i.Z,{}),(0,n.jsx)(q.Z,{open:e,handleClose:()=>t(!1),setOpen:t}),(0,n.jsx)(W,{}),(0,n.jsxs)("section",{className:" sectionBox p5",children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"h3",children:"WHO IS INFODRIVE SOLUTIONS"}),(0,n.jsx)(u.Z,{className:"w100",gutterBottom:!0,variant:"h1",component:"h1",children:"Expert Software Consulting and Development Services for Digital Transformation"}),(0,n.jsx)(u.Z,{className:"w100",gutterBottom:!0,variant:"h5",component:"div",children:"InfoDrive Solutions is a Software Development and Digital Transformation Solutions company, we are headquartered in Singapore with regional offices in Malaysia (KL) & India (Bangalore). We deliver cutting-edge Digital Transformation Solutions to many of our prestigious customers in South East Asia. Our expertise lies in providing cutting edge IT Development, Digital Transformation, Salesforce Consulting Services & Outsourcing Engineering Services."}),(0,n.jsx)(u.Z,{className:"w100",gutterBottom:!0,variant:"h5",component:"div",children:"We specialize in creating custom software solutions that drive digital transformation for businesses of all sizes. Our team of experienced developers uses the latest technologies to build and implement solutions that streamline processes, improve efficiency, and enhance the user experience."}),(0,n.jsxs)(u.Z,{className:"w100",gutterBottom:!0,variant:"h5",component:"div",children:["Our services include web and mobile application development, cloud migration, API development, Digital Marketing, Salesforce Services and more. We work closely with our clients to understand their unique needs and goals, and we deliver solutions that are tailored to their specific requirements.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"In addition to our technical expertise, we also offer strategic consulting to help our clients navigate the constantly-evolving world of digital transformation. Our team can help you assess your current technology stack, identify areas for improvement, and create a roadmap for success. With a strong track record of delivering successful projects for clients across a range of industries, InfoDrive Solutions is a trusted partner for businesses seeking to drive innovation and growth through the power of technology."]})]}),(0,n.jsx)("section",{className:"sectionBox solutionBox  px-2 backdrop-blur-md md:backdrop-blur-none  p5 m-5 md:m-0",children:(0,n.jsx)("p",{className:" md:w-1/2 ",children:"InfoDrive Solutions is a preferred partner in Business process improvement for many small & medium size corporations and built with the commitment, promise & passion to provide outstanding services in Software Consulting. A lot of times businesses struggle to generate the desired outcome of their current business processes and applications."})}),(0,n.jsxs)("section",{className:"container max-w-5xl Offerbox  mx-auto mt-20 flex flex-col gap-10 p5",children:[(0,n.jsx)("h2",{className:"text-[#0b2653] font-bold text-xl",children:"What We Offer"}),(0,n.jsxs)("div",{className:"heading flex  items-center w-full gap-2 ",children:[(0,n.jsxs)("div",{className:"conditionbox2 bg-white w-full hover:text-red-600",children:[(0,n.jsx)("h3",{className:"".concat(B?"text-red-600":"text-gray-500"," text-center mx-auto uppercase tracking-widest md:text-xl text-sm font-normal cursor-pointer mb-2"),onClick:()=>T(!0),children:"Services"}),(0,n.jsx)("hr",{className:"border ".concat(B?"border-red-600":"border-gray-500"," w-full")})]}),(0,n.jsxs)("div",{className:"conditionbox bg-white w-full text-black ",children:[(0,n.jsx)("h3",{className:"".concat(B?"text-gray-500":"text-red-600"," text-center mx-auto uppercase tracking-widest font-normal md:text-xl text-sm cursor-pointer mb-2"),onClick:()=>T(!1),children:"Development"}),(0,n.jsx)("hr",{className:"border ".concat(B?"border-gray-500":"border-red-600"," w-full")})]})]}),(0,n.jsxs)(v.E.article,{animate:B?"open":"closed",variants:M,transition:{duration:.5},className:"".concat(B?"grid md:grid-cols-3 grid-cols-1 gap-10":"hidden"," transition-all duration-1000 ease-in-out  "),children:[(0,n.jsx)(v.E.div,{animate:"sf"==b?"open":"closed",variants:E,transition:{duration:.5},className:"card   ",onMouseOver:()=>O("sf"),onMouseLeave:()=>O("none"),children:(0,n.jsxs)(g.Z,{href:"/salesforce-development.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md   cursor-pointer h-full ",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(j.ZlY,{size:60}),(0,n.jsx)("span",{children:"Salesforce"})]}),(0,n.jsx)("p",{className:"leading-6 text-sm text-[#00000099]",children:"Our company specializes in providing Salesforce services, helping businesses harness the power of the Salesforce platform to streamline operations, enhance customer engagement, and drive growth."})]})}),(0,n.jsx)(v.E.div,{href:"/custom-software-development.html",animate:"crm"==b?"open":"closed",variants:E,transition:{duration:.5},className:"card p-10  shadow-md rounded-md   ",onMouseOver:()=>O("crm"),onMouseLeave:()=>O("none"),children:(0,n.jsxs)(g.Z,{href:"/custom-software-development.html",className:"card  flex flex-col gap-5   text-[#00000099] cursor-pointer h-full no-underline ",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(k.a2m,{size:60}),(0,n.jsx)("span",{children:" CRM "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Our company understands the importance of customer relationships in driving business success. That's why we offer a range of CRM software solutions to help our clients manage and optimize their customer interactions and relationships."})]})}),(0,n.jsx)(v.E.div,{animate:"sa"==b?"open":"closed",variants:E,transition:{duration:.5},onMouseOver:()=>O("sa"),onMouseLeave:()=>O("none"),className:"h-full card ",children:(0,n.jsxs)(g.Z,{href:"/staff-augmentation.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer h-full no-underline",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold ",children:[(0,n.jsx)(j.THo,{size:60}),(0,n.jsx)("span",{children:" Staff Augmentation "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"We carefully match the right professionals to your project or assignment. Our staff augmentation services are flexible and scalable, allowing you to add or remove resources as needed."})]})}),(0,n.jsx)(v.E.div,{onMouseOver:()=>O("bc"),onMouseLeave:()=>O("none"),animate:"bc"==b?"open":"closed",variants:E,transition:{duration:.5},children:(0,n.jsxs)(g.Z,{href:"/odoo-development-company.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer no-underline h-full",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(D.Zvw,{size:60}),(0,n.jsx)("span",{children:" Odoo Development"})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Odoo Marketing Cloud effortlessly integrates with the Odoo ERP system, providing a complete view of customers enabling real-time data-driven marketing efforts."})]})}),(0,n.jsx)(v.E.div,{animate:"se"==b?"open":"closed",variants:E,transition:{duration:.5},onMouseOver:()=>O("se"),onMouseLeave:()=>O("none"),children:(0,n.jsxs)(g.Z,{href:"/application-development.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer h-full no-underline ",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(j.r2Q,{size:60}),(0,n.jsx)("span",{children:" App Development"})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Our application development process begins with a thorough understanding of your business needs and goals.We believe that every business is unique, which is why we take a customized approach to application development."})]})}),(0,n.jsx)(v.E.div,{onMouseOver:()=>O("dm"),onMouseLeave:()=>O("none"),animate:"dm"==b?"open":"closed",variants:E,transition:{duration:.5},children:(0,n.jsxs)(g.Z,{href:"/digital-marketing-services.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer h-full no-underline",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(D.hXl,{size:60}),(0,n.jsx)("span",{children:"Digital Marketing"})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"InfoDrive Solutions is a leading digital marketing company offering marketing services. As a top digital marketing consultant, we provide customized strategies to help businesses succeed online."})]})})]}),(0,n.jsxs)(v.E.article,{animate:B?"closed":"open",variants:M,transition:{duration:.5},className:"".concat(B?"hidden":"grid md:grid-cols-3 grid-cols-1 gap-10"," transition-all duration-1000 ease-in-out"),children:[(0,n.jsx)(v.E.div,{animate:"sf"==b?"open":"closed",variants:E,transition:{duration:.5},className:"card p-10  shadow-md rounded-md   cursor-pointer  ",onMouseOver:()=>O("sf"),onMouseLeave:()=>O("none"),children:(0,n.jsxs)(g.Z,{href:"/saas-application-development.html",className:"no-underline text-[#00000099] flex flex-col gap-5",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(Z.YkZ,{size:60}),(0,n.jsx)("span",{children:"SaaS Application Development "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"We have extensive experience in developing SaaS applications for a range of industries. Our team of skilled developers is proficient in a variety of programming languages."})]})}),(0,n.jsx)(v.E.div,{animate:"crm"==b?"open":"closed",variants:E,transition:{duration:.5},className:"card p-10  shadow-md rounded-md   ",onMouseOver:()=>O("crm"),onMouseLeave:()=>O("none"),children:(0,n.jsxs)(g.Z,{href:"/custom-software-development.html",className:"text-[#00000099] cursor-pointer no-underline flex flex-col gap-5",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(Z.w48,{size:60}),(0,n.jsx)("span",{children:" Custom Software "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Our team of experienced software developers is dedicated to delivering high-quality custom solutions that are tailored to your business."})]})}),(0,n.jsx)(v.E.div,{animate:"sa"==b?"open":"closed",variants:E,transition:{duration:.5},onMouseOver:()=>O("sa"),onMouseLeave:()=>O("none"),className:"h-full card ",children:(0,n.jsxs)(g.Z,{href:"/ios-app-development.html",className:"p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer h-full no-underline",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold ",children:[(0,n.jsx)(Z.fGt,{size:60}),(0,n.jsx)("span",{children:"IOS APP Development "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"We are a full-stack iOS app development company that has released hundreds of native iOS apps with high App Store ratings and success rates."})]})}),(0,n.jsx)(v.E.div,{onMouseOver:()=>O("bc"),onMouseLeave:()=>O("none"),animate:"bc"==b?"open":"closed",variants:E,transition:{duration:.5},children:(0,n.jsxs)(g.Z,{href:"/android-app-development.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer h-full no-underline ",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(Z.URM,{size:60}),(0,n.jsx)("span",{children:" Android app Development "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Our developers have extensive experience in android app development and a track record of delivering high-quality apps for a wide range of clients."})]})}),(0,n.jsx)(v.E.div,{animate:"se"==b?"open":"closed",variants:E,transition:{duration:.5},onMouseOver:()=>O("se"),onMouseLeave:()=>O("none"),children:(0,n.jsxs)(g.Z,{href:"/full-stack-development.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer no-underline h-full",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(N.$Wy,{size:60}),(0,n.jsx)("span",{children:" Full stack Development "})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Our full stack development process is designed to be efficient, agile, and transparent. We begin by understanding your business requirements and objectives."})]})}),(0,n.jsx)(v.E.div,{onMouseOver:()=>O("dm"),onMouseLeave:()=>O("none"),animate:"dm"==b?"open":"closed",variants:E,transition:{duration:.5},children:(0,n.jsxs)(g.Z,{href:"/salesforce-app-exchange.html",className:"card p-10 flex flex-col gap-5 shadow-md rounded-md  text-[#00000099] cursor-pointer no-underline h-full ",style:{textDecoration:"none",color:"gray"},children:[(0,n.jsxs)("div",{className:"top flex gap-2 items-center text-red-600 font-semibold",children:[(0,n.jsx)(S.wOA,{size:60}),(0,n.jsx)("span",{children:"Salesforce App Exchange"})]}),(0,n.jsx)("p",{className:"leading-6 text-sm",children:"Our team of Salesforce developers, designers, and project managers have years of experience in developing custom applications for businesses across a range of industries."})]})})]})]}),(0,n.jsxs)("section",{className:"sectionBox whyUsBox p5",children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h2",component:"div",children:"Why Infodrive solutions?"}),(0,n.jsx)(c.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(d.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(d.ZP,{item:!0,xs:4,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Software Development",src:"images/knowledgable-team.png",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 pb15",component:"div",children:"Knowledgeable team"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"We have the professional team with hands-on experience in their respective fields, which is the icing on the cake. We have adequate and sources to accomplish and acquire the superior technology platform required to run the business."})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:4,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Digital Transformation Solutions Company",src:"images/love-for-work.png",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 pb15",component:"div",children:"Love for work"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"We have a passionate team striving to make a space where access to knowledge and technology is for everyone equally. To manage the quality level and give the best performance, we regulate our services according to our clients’ expectations."})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:4,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Software Development Company in   Singapore",src:"images/profitable-solutions.png",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 pb15",component:"div",children:"Profitable solutions"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"Our dedicated team keeps working to provide a cost-efficient result from scanning to the solution’s execution. We comprehend that approachability is one of the various goals that strive for growth sources."})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:4,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Software Development Company in   Malaysia",src:"images/clinet-satisfaction.png",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 pb15",component:"div",children:"Assured client satisfaction"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"We consider our clients’ needs and respond to deliver excellent outcomes by becoming flexible according to work. Our clients relish the high-quality work we provide and the outstanding client assistance we render. We aim to surpass your expectation."})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:4,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Software Development Solutions Company in India",src:"images/in-house-staff.png",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 pb15",component:"div",children:"In-house staff"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"Our team interacts with our clients directly to solve their queries on their projects. We don’t strive for assistance that we cannot meet ourselves. At the end of every week, we meet and discuss each client’s tasks, review the progress, and provide improvement-related suggestions if needed."})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:4,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"InfoDrive Solutions",src:"images/ROI.png",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 pb15",component:"div",children:"Excellent ROI"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"We always think about the growth and profitability of our associates; hence our prices are defined. All our assistance and methods are modernized, focusing on accurate performance and Return on investment. Thus it meets the principle aim of offshore collaboration."})]})]})})]})})]}),(0,n.jsx)("section",{className:"aboutUsBox aboutUsBoxHome -mt-5 w-full",children:(0,n.jsx)(c.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(d.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(d.ZP,{item:!0,xs:5,children:(0,n.jsx)(m.Z,{children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"ABOUT US"}),(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"Delivering our very best in all we do, holding ourselves accountable for results with a commitment to integrity, fairness and responsibility."}),(0,n.jsxs)(p.Z,{className:"readmore white ",href:"/about-us.html",variant:"text",children:["LEARN MORE ABOUT US ",(0,n.jsx)(f.Z,{})]})]})})}),(0,n.jsx)(d.ZP,{item:!0,xs:7,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)("img",{alt:"Digital Transformation Solutions Company in   Singapore",src:"images/pexels-ketut-subiyanto-4350210.jpg"})})})]})})}),(0,n.jsx)("br",{}),(0,n.jsx)("section",{className:"sectionBox aboutUsBox aboutUsBox2",children:(0,n.jsx)(c.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(d.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(d.ZP,{item:!0,xs:5,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)("img",{alt:"Remy Sharp",src:"images/aboutus2.png"})})}),(0,n.jsx)(d.ZP,{item:!0,xs:7,children:(0,n.jsx)(m.Z,{children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"Delivering our very best in all we do, holding ourselves accountable for results with a commitment to integrity, fairness and responsibility."}),(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h2",component:"div",children:"130+"}),(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"SUCCESSFUL PROJECTS"}),(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h2",component:"div",children:"65+"}),(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"YEARS OF EXPERIENCE"}),(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h2",component:"div",children:"110+"}),(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",component:"div",children:"HAPPY CLIENTS"})]})})})]})})}),(0,n.jsxs)("section",{className:"sectionBox locationBox   testmonial p5",children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h2",component:"div",children:"What do clients say about us?"}),(0,n.jsx)("br",{}),(0,n.jsxs)(w(),{NavButton:e=>{let{onClick:t,className:s,style:o,next:a,prev:r}=e;return(0,n.jsx)("div",{className:"navCarouselBox",children:(0,n.jsxs)(p.Z,{onClick:t,className:"navCarouselNext ",children:[a&&"Next",r&&"Previous"]})})},children:[(0,n.jsx)(c.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(d.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(d.ZP,{item:!0,xs:6,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Digital Transformation Solutions Company in   Malaysia",src:"images/user-icon.jpeg",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)("div",{className:"testmonialStar",children:[(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{})]}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 mb0",component:"div",children:"Mark Durante"}),(0,n.jsx)(u.Z,{className:"mt0 pt0 pb15",gutterBottom:!0,variant:"h5",component:"div",children:"Vice President of Product and Engineering at Jabmo"}),(0,n.jsxs)(u.Z,{variant:"body2",color:"text.secondary",children:["After a rigorous vendor selection process undertaken by my team, we settled on InfoDrive for our SFDC app implementation project. InfoDrive's relevant experience, prompt communication, and positive attitude won us over. And I'm happy to say we made the right decision. ",(0,n.jsx)("br",{}),"Interactions with the team were fluid and pleasant, and they delivered a quality work product on time. ",(0,n.jsx)("br",{}),"We look forward to future engagements with InfoDrive as our needs require."]})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:6,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Digital Transformation Solutions Company in   India",src:"images/user-icon.jpeg",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)("div",{className:"testmonialStar",children:[(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{})]}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 mb0",component:"div",children:"Sivachanthiran Belasamy"}),(0,n.jsx)(u.Z,{className:"mt0 pt0 pb15",gutterBottom:!0,variant:"h5",component:"div",children:"(Founder & CEO at Falaina)"}),(0,n.jsxs)(u.Z,{variant:"body2",color:"text.secondary",children:["Info Drive Team had provided constant support to our Organisation by helping us in building the Custom tables and related API in Salesforce. ",(0,n.jsx)("br",{}),"The team has always been reachable on the approach for the project. Further, the team has been more than happy to clarify any doubts that we may have had, and done several knowledge transfers for us to better understand Salesforce and its functionalities. ",(0,n.jsx)("br",{}),'Thanks, Pradeep and team for the support, looking forward to working on the upcoming projects!"']})]})]})})]})}),(0,n.jsx)(c.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(d.ZP,{container:!0,spacing:0,children:[(0,n.jsx)(d.ZP,{item:!0,xs:6,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"We are headquartered in Singapore",src:"images/user-icon.jpeg",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)("div",{className:"testmonialStar",children:[(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{})]}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 mb0",component:"div",children:"Aidin Mahmoodi"}),(0,n.jsx)(u.Z,{className:"mt0 w100 pt0 pb15",gutterBottom:!0,variant:"h5",component:"div",children:"Product Lead at ServiceRocket"}),(0,n.jsxs)(u.Z,{variant:"body2",color:"text.secondary",children:["We reached out to InfoDrive to help us build a few technical POC (Proof of Concept) as our internal development teams were extremely busy with other products/projects. InfoDrive was very particularly quick and responsive, they quickly jumped on a call together requirements from us and provided their estimate and proposal in a short time. ",(0,n.jsx)("br",{}),"After a lengthy onboarding process from our side, InfoDrive assigned one of their remarkably capable, knowledgeable Salesforce certified engineers as our main technical person. ",(0,n.jsx)("br",{}),"I’d also like to point out that the entire team at Info Drive is resourceful, responsive, and flexible. Our assigned engineer easily adopted our internal agile practices and was able to provide feedback on our sprint review and planning, similar to our internal development teams."]})]})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:6,children:(0,n.jsxs)(m.Z,{sx:{maxWidth:345},children:[(0,n.jsx)(x.Z,{alt:"Providing cutting edge IT Development",src:"images/user-icon.jpeg",sx:{width:65,height:65,marginLeft:2}}),(0,n.jsxs)("div",{className:"testmonialStar",children:[(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(y.Z,{})]}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{gutterBottom:!0,variant:"h3",className:"pt15 mb0",component:"div",children:"Kester Poh"}),(0,n.jsx)(u.Z,{className:"mt0 pt0 pb15",gutterBottom:!0,variant:"h5",component:"div",children:"(CEO at AiChat)"}),(0,n.jsxs)(u.Z,{variant:"body2",color:"text.secondary",children:["Infodrive team has provided support in a POC setup and configured a Email-to-Case demo. ",(0,n.jsx)("br",{}),"The team has also provided professional consultation on the approach for the project. ",(0,n.jsx)("br",{}),"Thanks Pradeep and team for the support, looking forward to working on the next project together! ",(0,n.jsx)("br",{})]})]})]})})]})})]})]}),(0,n.jsx)(C.Z,{}),(0,n.jsx)(_.Z,{text:"Schedule a Call",onClick:()=>t(!0)}),(0,n.jsx)(l.Z,{})]})}},63993:function(e){e.exports={fab:"ScheduleCallButton_fab__2pdGR"}}},function(e){e.O(0,[6700,5445,4617,3415,1228,4980,955,5121,7513,3145,9807,326,2888,9774,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);