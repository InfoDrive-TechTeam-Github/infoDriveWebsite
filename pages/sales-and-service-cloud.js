import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import Box from "@mui/material/Box";

//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Head from "next/head";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { Chrono } from "react-chrono";
import Sale from "../public/saleandservice.json";

import LeadForm from "../components/leadForm";
// import Lottie from "lottie-react";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

import Sale2 from "../public/Sale2.json";

import SaleforceCient from "components/SaleforceCient";
import dynamic from "next/dynamic";
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

export default function SalesForceDevelopment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileBreakpoint = 768;
  const items = [
    {
      title: width <= mobileBreakpoint ? "" : "IN-DEPTH KNOWLEDGE",
      card: "IN-DEPTH KNOWLEDGE",

      cardDetailedText:
        "From planning to security review assistance, and to final deployment, we are well-versed in all.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "INDUSTRY EXPERIENCE",
      card: "INDUSTRY EXPERIENCE",
      cardDetailedText:
        "InfoDrive have a team of highly experienced Salesforce professionals with 13+ years of industry experience in the Salesforce domain",
    },
    {
      title: width <= mobileBreakpoint ? "" : "SCALABLE SOLUTIONS",
      card: "SCALABLE SOLUTIONS",

      cardDetailedText:
        "InfoDrive profoundly delivers scalable Sales/Service cloud development services that augments the business growth.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "FASTER TURNAROUND TIME",
      card: "FASTER TURNAROUND TIME",

      cardDetailedText:
        "Our Sales/Service cloud implementation services are rapid, and help you keep your business run faster and smoother",
    },
  ];

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts
  }, []);

  return (
    <div>
      <Head>
        <title>
          Salesforce Sales Cloud and Service Cloud Services | InfoDrive
          Solutions
        </title>
        <meta
          name="description"
          content="Maximize efficiency and service quality with our Salesforce Sales Cloud and Service Cloud solutions. Elevate your business performance today."
        />
        <meta
          name="keywords"
          content="Salesforce Sales Cloud, Service Cloud Services, Salesforce Consulting, Salesforce Development, CRM Solutions, Customer Service Optimization, Cloud-Based Sales Solutions, Business Efficiency, InfoDrive Solutions"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/sales-and-service-cloud.html"
        />
        <meta
          property="og:title"
          content="Salesforce Sales Cloud and Service Cloud Services | InfoDrive
          Solutions"
        />
        <meta
          property="og:image"
          content="https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"
        />
        <meta
          name="google-site-verification"
          content="JcRwQCIELBAZJX2iIdAkVHip-fPEjV_icDXuaLBIXfE"
        />
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPS8R594');`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PPS8R594"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Header />
      <ScheduleCallButton text="Schedule a Call" onClick={handleOpen} />
      <CallScheduleModal open={open} handleClose={handleClose} setOpen={setOpen} />
      <section className="newsectionbox  text-white relative  ocean pb-0  ">
        <img
          src="./SandS.jpg"
          className="w-full h-[225px] md:h-full object-fit"
        />

        {/* <Lottie
          animationData={cloufLottie}
          loop={true}
          className="absolute bottom-0 mt-40"
        /> */}
        <div className="container max-w-5xl mx-auto    h-full w-full  p5 absolute top-20 md:top-64 md:left-10">
          <div className=" flex md:flex-row flex-col md:items-center md:justify-between gap-10 ">
            <h1
              className="text-justify w-1/2 "
              style={{ zIndex: 5, color: "white" }}
            >
              Elevate Your Sales Process Unleash the Power of Sales Cloud &
              Service Cloud - A Cutting-Edge Business Solution offering a
              unified platform to simplify and manage your sales activities.
            </h1>
            {/* <div className="md:w-1/2" style={{ zIndex: 10 }}>
              <img src="./saleforcess-removebg-preview.png" />
            </div> */}
          </div>
          <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            className=" w-max "
          >
            <Button
              href="/contact-us.html"
              className="buttOnread   normalCase mt-5"
              variant="text"
              style={{ zIndex: 5 }}
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
          </motion.div>
        </div>

        {/* <div className="md:top-0 bottom-0 absolute md:-mt-72">
          <Lottie animationData={cloufLottie} loop={true} className="" />
        </div> */}
      </section>

      <section className={`newsectionbox relative p5  h-full salesandservice `}>
        <div className="container max-w-5xl mx-auto    h-full w-full ">
          <h2 className="mb-20 text-center">
            Salesforce Sales Cloud and Service Cloud Services
          </h2>
          <div className="flex md:flex-row flex-col gap-14 items-start justify-between md:gap-10 w-full h-full">
            <div
              className="left shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 h-full "
              style={{ zIndex: 10 }}
            >
              <img
                className="md:h-64 h-[156px] w-[80%] border mx-auto -mt-14 shadow-lg rounded-md"
                src="./businessman-with-cloud-icons.jpg"
                alt="businessman-with-cloud"
              />
              <Typography
                gutterBottom
                variant="h2"
                component="h2"
                className="text-center mx-auto mt-5"
              >
                Salesforce Sales Cloud Services
              </Typography>
              <div>
                <h5 className="text-justify">
                  Salesforce Sales Cloud stands as a potent tool for effectively
                  managing customer interactions and data across the entire
                  customer lifecycle – from lead inception through conversion to
                  retention. Boasting a customizable interface and a robust
                  feature set, Salesforce Sales Cloud can be finely tuned to
                  align with the specific needs of your business. Our service
                  offerings extend to Salesforce Sales Cloud implementation and
                  consulting in Singapore, Malaysia, and India.
                </h5>
              </div>
            </div>
            {/* right */}
            <div
              className="right shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 "
              style={{ zIndex: 10 }}
            >
              <img
                className="md:h-64 w-[80%]  border mx-auto -mt-14 shadow-lg rounded-md object-contain"
                src="./service.jpg"
                alt="service cloud"
              />
              <div>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  className="text-center mx-auto mt-5"
                >
                  Salesforce Service Cloud Services
                </Typography>
                <h5 className="text-justify">
                  Salesforce Service Cloud, a robust customer service platform,
                  empowers businesses to efficiently manage customer
                  interactions and support inquiries across diverse channels
                  such as phone, email, chat, and social media. Its rich set of
                  tools and features, including case management, knowledge
                  management, and community engagement, equips businesses to
                  deliver personalized, efficient, and consistently exceptional
                  support to their customers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* advantage */}
      <section className={`newsectionbox relative p5  h-full -mt-10 space-y-5`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-5 md:top-0 left-0 right-0 overflow-x-hidden md:h-screen z-10"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,0L26.7,21.3C53.3,43,107,85,160,90.7C213.3,96,267,64,320,58.7C373.3,53,427,75,480,112C533.3,149,587,203,640,234.7C693.3,267,747,277,800,277.3C853.3,277,907,267,960,234.7C1013.3,203,1067,149,1120,122.7C1173.3,96,1227,96,1280,106.7C1333.3,117,1387,139,1413,149.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <motion.h2
            // style={{ zIndex: 5 }}
            className="text-center  "
            animate={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",

              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            Features of Sales Cloud
          </motion.h2>
          {/* <Lottie animationData={Cloud} loop={true} className="w-[420px]" /> */}

          <div className="flex justify-center w-full " style={{ zIndex: 10 }}>
            <img
              alt="advantage sale and service "
              src="./sales13.png"
              className="w-[70%] md:ml-10"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-col-1 gap-3 mt-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center ">
                Get to Know Your Customers
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify ">
                Salesforce Sales Cloud consolidates customer information,
                interactions, and transactions, offering your sales team a
                comprehensive view. This insight helps tailor approaches to
                better meet customer needs.
              </p>
            </motion.div>
            {/* second */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Effortless Lead Management
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify ">
                Excelling in lead management, the platform aids in tracking and
                prioritizing leads. With features like lead scoring and
                automated workflows, your team can focus on promising
                opportunities, boosting conversion rates.
              </p>
            </motion.div>
            {/* third */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Tailored to Your Needs
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                The highly customizable interface of Salesforce Sales Cloud
                allows businesses to adapt the platform to specific
                requirements. This flexibility ensures seamless alignment with
                unique sales processes.
              </p>
            </motion.div>
            {/* 4 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Time-Saving Workflow Automation:
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Standout features include automating repetitive tasks, saving
                time, and reducing errors. This empowers your sales team to
                concentrate on high-value activities.
              </p>
            </motion.div>
            {/* 5 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Stay Agile with Mobile Accessibility:
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Robust mobile capabilities enable your sales team to access
                crucial information on the go, fostering agility and
                responsiveness in todays fast-paced business environment.
              </p>
            </motion.div>
            {/* 6 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Real-time Insights with Analytics
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Salesforce Sales Cloud provides powerful analytics and reporting
                tools, offering real- time insights into sales performance. This
                data-driven approach facilitates informed decision-making and
                strategy refinement.
              </p>
            </motion.div>
            {/* 7 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Seamless Integration for Efficiency:
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                The platform seamlessly integrates with third-party
                applications, ensuring a unified ecosystem that connects sales
                with other business functions, enhancing collaboration and
                efficiency.
              </p>
            </motion.div>
            {/* 8 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Versatile Communication Channels:
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Supporting communication across various channels, including
                email, chat, and social media, the platform allows your sales
                team to engage with leads and clients in preferred channels,
                building stronger relationships.
              </p>
            </motion.div>
            {/* 9*/}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Grow at Your Pace with Scalability:
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Whether your business is small or enterprise-level, Salesforce
                Sales Cloud scales to accommodate growth, adapting to evolving
                business needs and expanding sales operations.
              </p>
            </motion.div>
            {/* 10*/}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Stay Current with Updates:
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                As a leading CRM platform, Salesforce regularly introduces
                updates and innovations, staying ahead of industry trends. This
                ensures your business benefits from the latest technologies and
                features.
              </p>
            </motion.div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 right-0 overflow-x-hidden md:h-screen"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,64L30,101.3C60,139,120,213,180,224C240,235,300,181,360,176C420,171,480,213,540,224C600,235,660,213,720,192C780,171,840,149,900,117.3C960,85,1020,43,1080,32C1140,21,1200,43,1260,80C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>{" "}
      </section>

      {/* feature of service cloud */}
      {/* advantage */}
      <section className={`newsectionbox relative p5  h-full -mt-10 space-y-5`}>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <motion.h2
            className="text-center"
            animate={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",

              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            Features of Service Cloud
          </motion.h2>

          <div className="flex justify-center w-full ">
            <img
              alt="advantage sale and service cloud"
              src="./sale14.png"
              className="advantage sale and service"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-col-1 gap-3 mt-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Comprehensive Customer Insights
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Service Cloud offers a unified platform to consolidate customer
                information, interactions, and service history. This 360-degree
                view empowers your support team to provide personalized and
                efficient assistance.
              </p>
            </motion.div>
            {/* second */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Streamlined Case Resolution
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Excel in case management with automated workflows and ticketing
                systems. Service Cloud enables your team to seamlessly track and
                resolve customer issues, enhancing the resolution process.
              </p>
            </motion.div>
            {/* third */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Efficient Knowledge Sharing
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Equip your support agents with robust knowledge management
                tools. Service Cloud facilitates easy access and sharing of
                information, ensuring consistent and accurate responses to
                customer inquiries.
              </p>
            </motion.div>
            {/* 4 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Versatile Multi-Channel Support
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Communicate across phone, email, chat, and social media. Service
                Cloud enables your team to offer assistance where customers feel
                most comfortable.
              </p>
            </motion.div>
            {/* 5 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Empower Customers with Self-Service
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Service Cloud provides self-service options like knowledge bases
                and online portals. Empower customers to find answers
                independently, reducing the workload on your support team.
              </p>
            </motion.div>
            {/* 6 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Responsive Mobile Support
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Address customer issues on-the-go with Service Cloud robust
                mobile capabilities. Enhance responsiveness and ensure timely
                resolution of service requests.
              </p>
            </motion.div>
            {/* 7 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Automation for Streamlined Processes
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Service Clouds automation tools handle repetitive tasks
                efficiently. This frees up time for support agents to focus on
                resolving complex issues.
              </p>
            </motion.div>
            {/* 8 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Insights through Analytics
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Gain powerful insights into support performance with Service
                Cloud analytics and reporting tools. This data-driven approach
                facilitates continuous improvement in service delivery.
              </p>
            </motion.div>
            {/* 9 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5 "
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Unified Ecosystem through Integration
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Seamlessly integrate with other Salesforce Clouds and
                third-party applications. Service Cloud ensures a cohesive
                ecosystem, enhancing collaboration across departments and
                providing a holistic view of customer interactions.
              </p>
            </motion.div>
            {/* 10 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Scalable Support Operations
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Whether small or enterprise-level, Service Cloud scales to
                accommodate growing customer support operations. It adapts to
                evolving business needs and increasing service demands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* timeline  */}
      <div
        style={{ width: "100vw" }}
        className="flex relative items-center justify-center md:flex-row flex-col "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-5 md:top-0 left-0 right-0 overflow-x-hidden md:h-screen"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,0L26.7,21.3C53.3,43,107,85,160,90.7C213.3,96,267,64,320,58.7C373.3,53,427,75,480,112C533.3,149,587,203,640,234.7C693.3,267,747,277,800,277.3C853.3,277,907,267,960,234.7C1013.3,203,1067,149,1120,122.7C1173.3,96,1227,96,1280,106.7C1333.3,117,1387,139,1413,149.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 right-0 overflow-x-hidden md:h-screen"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,64L30,101.3C60,139,120,213,180,224C240,235,300,181,360,176C420,171,480,213,540,224C600,235,660,213,720,192C780,171,840,149,900,117.3C960,85,1020,43,1080,32C1140,21,1200,43,1260,80C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>{" "}
        <div className="newsectionbox relative self-start ml-10 md:w-1/2 ">
          <h2>
            <span className="text-red-600 text-3xl font-black">Why</span> Choose
            <span className="text-red-600  font-black"> InfoDrive’s</span>{" "}
            Salesforce Sales and Service Cloud Implementation Services?
          </h2>
          {isClient && (
            <DynamicLottie
              animationData={Sale2}
              loop={true}
              className="mt-20"
            />
          )}
        </div>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          hideControls="fasle"
          theme={{
            primary: "#0b2653",
            secondary: "",
            cardBgColor: "white",
            titleColor: "Red",
            titleColorActive: "Red",
            cardTitleColor: "#0b2653",
          }}
          allowDynamicUpdate="true"
        >
          {items.map((obj) => (
            <div className="newsectionbox" style={{ padding: "10px 5px" }}>
              <h2 className="text-center">{obj.card}</h2>
              <p className="text-justify">{obj.cardDetailedText}</p>
            </div>
          ))}
        </Chrono>
      </div>

      <section
        className={`sectionBox aboutUsBox3 salesCloudService p5 -mt-10 pt-10`}
      >
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          className="text-center"
        >
          Empowering Growth, Optimizing Sales: Your Journey with Salesforce
          Excellence
        </Typography>

        <h3 className="text-[#dd3952]  font-bold text-center">
          InfoDrive Solutions, Your Trusted Partner for Salesforce Sales Cloud &
          Service Cloud Implementation and Consulting
        </h3>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className="pr30">
              <Card>
                <CardContent>
                  {/* <Typography gutterBottom variant="h2" component="h2">
                    Maximize Your Potential with Salesforce Sales Cloud
                    Consulting Services
                  </Typography> */}
                  <br />
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    className="text-justify"
                  >
                    <span className="font-bold text-black">InfoDrive</span> team
                    of
                    <a
                      className="font-bold text-blue-600 mx-1"
                      href="https://infodrive-solutions.com/salesforce-professional-services.html"
                    >
                      certified Salesforce consultants
                    </a>
                    brings substantial experience to the table, aiding
                    businesses in these regions to streamline their sales
                    processes and foster growth through the utilization of
                    Salesforce Sales Cloud Salesforce Service Cloud.
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    className="text-justify"
                  >
                    <span className="font-bold text-black">
                      At InfoDrive Solutions,
                    </span>{" "}
                    our core focus revolves around the implementation and
                    consulting of{" "}
                    <span className="font-bold text-black mr-1">
                      Salesforce Sales Cloud & Service Cloud,
                    </span>
                    recognized globally as the premier customer relationship
                    management (CRM) platform. Trust our{" "}
                    <span className="font-bold text-black mr-2">
                      certified Salesforce
                    </span>
                    consultants to guide your business in optimizing sales
                    processes and unlocking growth potential through Salesforce
                    Sales Cloud.
                  </Typography>
                  <div className="flex items-center justify-between gap-2 mt-5">
                    <motion.div className="w-20 mt-5">
                      <motion.img
                        src="./Associate.webp"
                        alt="sale certificate1"
                        className="h-full w-full"
                      />
                    </motion.div>
                    <div className="w-20 mt-5">
                      <img
                        src="./Administrator-1.webp"
                        alt="sale certificate5"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="w-20 mt-5">
                      <img
                        src="./Advanced-Administrator-1.webp"
                        alt="sale certificate4"
                        className="h-full w-full"
                      />
                    </div>

                    <div className="w-20 mt-5">
                      {" "}
                      <img
                        src="./Sales-Cloud-Consultant.webp"
                        alt="sale certificate2"
                        className="h-full w-full"
                      />
                    </div>

                    <div className="w-20 mt-5">
                      <img
                        src="./servicecloudCons.webp"
                        alt="sale certificate3"
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                {isClient && <DynamicLottie animationData={Sale} loop={true} />}
              </Card>
            </Grid>
          </Grid>
        </Box>
        <SaleforceCient />
        <motion.div className="flex justify-center ">
          <motion.div
            whileHover={{ scale: 1.2, originX: 0, originY: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-max"
          >
            <Button
              href="/contact-us.html"
              className="bgRed white  poppin upperCase"
            >
              Connect with Our Expert
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <div className="md:-mt-20 -mt-10">
        <LeadForm />
      </div>

      <Footer />
    </div>
  );
}
