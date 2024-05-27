import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Head from "next/head";
import { FcComboChart, FcEnteringHeavenAlive } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcSynchronize } from "react-icons/fc";
import LeadForm from "../components/leadForm";
import { FcCollaboration } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcDataRecovery } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { motion } from "framer-motion";
import { FcSalesPerformance } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

export default function SalesForceDevelopment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [count100, setCount100] = React.useState(1);
  const numberRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count < 100) {
          const interval = setInterval(() => {
            setCount100((prevCount) => {
              if (prevCount < 100) {
                return prevCount + 1;
              }
              clearInterval(interval);
              return prevCount;
            });
          }, 100);

          return () => clearInterval(interval);
        }
      });
    });

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [count100]);
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count < 8) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 5); // Change the interval time if you want a different speed
    return () => clearInterval(interval);
  }, [count]);
  const [count30, setCount30] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count30 < 25) {
        setCount30((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 5); // Change the interval time if you want a different speed
    return () => clearInterval(interval);
  }, [count30]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsiveTest = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const logos = [
    "2.png",
    "3.png",
    "4.png",
    "5.jpg",
    "6.png",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.png",
    "11.jpg",
    "12.png",
    "14.png",

    "16.png",
    "17.png",
    "18.png",
  ];
  return (
    <div>
      <Head>
        <title>
          Salesforce Consulting Service & Development Partner Company in
          Singapore, Malaysia, and India - InfoDrive Solutions
        </title>
        <meta
          name="description"
          content="InfoDrive Solutions is a leading Salesforce consulting and development partner company offering expert services in Singapore, Malaysia, and India. Partner with us for customized Salesforce solutions."
        />
        <meta
          name="keywords"
          content="Salesforce Consulting Company, Salesforce Development Partner Company, Salesforce Service Provider in Singapore, Salesforce Consulting Company in Singapore, Salesforce Consulting Company in Malaysia, Salesforce Service Provider in Malaysia, Salesforce Consulting Partner in Singapore, Salesforce Consulting Partner in Malaysia, Salesforce Partner Company in Singapore, Salesforce Partner Company in Malaysia, Salesforce Partner Company in India, Professional Salesforce Development services, Salesforce certified consultant"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-development.html"
        />
        <meta
          property="og:title"
          content="Salesforce Consulting Service & Development Partner Company in
          Singapore, Malaysia, and India - InfoDrive Solutions"
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
      <section className="headSaleforce container max-w-7xl md:h-screen text-black relative md:p-5 md:min-h-screen p5">
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
        <div className="container  mx-auto py-20 h-full font-Poppins text-sm text-gray-700 md:space-y-10 space-y-5 md:flex items-stretch justify-between gap-20">
          <div className="left md:space-y-7 space-y-3">
            <span className="whitespace-nowrap text-xs md:text-base text-center md:text-justify">
              Dynamic Salesforce Professional Services with
            </span>
            <h2 className="font-semibold md:text-4xl text:2xl md:leading-10 text-center md:text-justify">
              Salesforce Consulting Partner
            </h2>
            <div className="grid grid-cols-3 gap-5 ">
              <div>
                <p className="text-[#E13D4B] md:text-4xl text:2xl text-center md:text-left  font-bold">
                  8+{" "}
                </p>
                <p className="text-[#565758] md:text-lg text-xs text-center md:text-left">
                  Salesforce Certified Architect
                </p>
              </div>

              <div>
                <p className="text-[#E13D4B] md:text-4xl text:2xl text-center md:text-left  font-bold">
                  15+
                </p>
                <p className="text-[#565758] md:text-lg text-center text-xs md:text-left">
                  Salesforce Administrators
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] md:text-4xl text:2xl text-center md:text-left  font-bold">
                  {count30}+{" "}
                </p>
                <p className="text-[#565758] md:text-lg text-center text-xs md:text-left">
                  Salesforce Certified Developers
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] md:text-4xl text:2xl text-center md:text-left  font-bold">
                  {count}+{" "}
                </p>
                <p className="text-[#565758] md:text-lg text-center text-xs md:text-left">
                  Salesforce Commerce Cloud Developers
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] md:text-4xl text:2xl text-center md:text-left  font-bold">
                  10+
                </p>
                <p className="text-[#565758] md:text-lg text-xs text-center md:text-left">
                  Salesforce Marketing Cloud & Pardot Developers
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] md:text-4xl text:2xl text-center md:text-left  font-bold">
                  7+
                </p>
                <p className="text-[#565758] md:text-lg text-center md:text-left text-xs">
                  Salesforce CPQ Developers
                </p>
              </div>
            </div>
            <Button
              href="/contact-us.html"
              className="readmore white normalCase"
              style={{ zIndex: 20 }}
              variant="text"
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
          </div>

          <motion.img
            src="./Salesforce-Service-Cloud.png"
            alt="saleforce"
            className=" object-cover md:h-[450px] md:w-[500px] "
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              rotate: -360,
              transition: {
                duration: 1,
              },
            }}
          />
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
        </svg>
      </section>
      <section className={`sectionBox p5 py-14 space-y-5 pb-0 `}>
        <h2 className="text-[#0b2653]  font-bold md:text-[22px] text-center md:text-justify text-xs md:leading-8  mb-20 md:mb-1 ">
          Empower Your Business Evolution through Our Salesforce Development
          Collaboration
        </h2>
        <div className="container md:flex items-center justify-between gap-10">
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="w100 md:text-justify"
              sx={{ mt: -10 }}
            >
              Salesforce stands as a pinnacle in customer relationship
              management (CRM), offering a robust platform that empowers
              businesses to refine and enhance their sales, customer service,
              and marketing endeavors. It centralizes customer data, enabling
              streamlined processes and communication automation. As a
              Salesforce Development Services partner at InfoDrive Solutions, we
              take pride in our proven proficiency in delivering Salesforce
              Development Services partner
            </Typography>
          </div>
          <img src="./empower.jpg" alt="empowe" className="md:w-1/2" />
        </div>
      </section>

      <section className="saleforcPatner  w-full p5 relative ">
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
        <div className="container mx-auto md:py-16 py-20 md:space-y-7 space-y-4">
          <p className="text-center text-sm text-[#E13D4B] font-semibold text[18px]">
            InfoDrive Solutions is home to 100+ Salesforce Certified Experts!
          </p>
          <h2 className="text-center md:text-3xl   font-semibold text-[16px] text-[#565758] md:pb-10 ">
            Benefits Of Hiring A Salesforce Consulting Partner
          </h2>

          <div className="md:flex items-center justify-between md:px-32 p5 gap-10 ">
            <img
              src="./saforcePatner.png"
              alt="saleforce patner"
              className="md:w-1/3  mx-auto md:mx-0"
              style={{ zIndex: 100 }}
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10 md:mt-0 ">
              <div className="flex gap-3 items-center">
                <FcComboChart size={52} />
                <p className="text-[#565758] font-normal md:whitespace-nowrap">
                  Accelerated Implementation
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcSettings size={42} />
                <p className="text-[#565758] font-normal">Custom Solutions</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcAssistant size={42} />
                <p className="text-[#565758] font-normal">Ongoing Support</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcCollaboration size={42} />
                <p className="text-[#565758] font-normal">Strategic Guidance</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcInspection size={42} />
                <p className="text-[#565758] font-normal">
                  Data Migration Expertise
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcOvertime size={42} />
                <p className="text-[#565758] font-normal">
                  Seamless Integration
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcDebt size={42} />
                <p className="text-[#565758] font-normal">User Training</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcDataRecovery size={42} />
                <p className="text-[#565758] font-normal">Scalability</p>
              </div>
              <div className="flex gap-1 items-center">
                <FcEnteringHeavenAlive size={62} />
                <p className="text-[#565758] font-normal md:whitespace-nowrap">
                  Troubleshoot and Optimization
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcCurrencyExchange size={42} />
                <p className="text-[#565758] font-normal">Cost-Efficiency</p>
              </div>
            </div>
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
        </svg>
      </section>
      <section className="certificate container max-w-7xl  p5">
        <div className="container mx-auto md:flex items-center justify-between  p5 gap-20 h-full py-14 md:pl-20">
          <motion.div
            className="left"
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
            <img src="./salesforce-certifications.jpg" alt="saleforce" />
          </motion.div>
          <div className="right md:space-y-7 space-y-4 mt-10 md:mt-0">
            <div className="">
              <p
                className="text-[#0694CB] md:text-4xl text-xl font-semibold text-center md:text-justify"
                ref={numberRef}
              >
                {count100}+
              </p>
              <p className="text-[#565758] text-center md:text-justify">
                Certifications
              </p>
            </div>
            <div>
              <p className="text-[#0694CB] md:text-4xl text-xl font-semibold text-center md:text-justify">
                4.7/5 Rating
              </p>
              <p className="text-[#565758] text-center md:text-justify">
                On All Salesforce Development Services
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* saleForcesDevelopmentBox */}
      <section className={`sectionBox  relative  p5  h-max  py-0`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 md:top-0 left-0 right-0 overflow-x-hidden md:h-screen"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,0L26.7,21.3C53.3,43,107,85,160,90.7C213.3,96,267,64,320,58.7C373.3,53,427,75,480,112C533.3,149,587,203,640,234.7C693.3,267,747,277,800,277.3C853.3,277,907,267,960,234.7C1013.3,203,1067,149,1120,122.7C1173.3,96,1227,96,1280,106.7C1333.3,117,1387,139,1413,149.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>

        <div className="flex flex-col gap-2 container  mx-auto ">
          <div className="md:flex items-center justify-between h-full md:-mt-10">
            <img src="./s1.jpg" alt="sale1" className="w-[550px] mt-32 mr-20" />
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
              transition={{ duration: 1 }}
              className=" shadow-md rounded-lg   md:mt-32 md:max-w-max p-5 md:-ml-48"
            >
              <h2 className="text-center md:text-justify">
                Salesforce Development Partnership Advantages
              </h2>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="px-3"
              >
                <ul style={{ listStyleType: "circle" }}>
                  <li className="md:text-justify mx-3">
                    <span className="font-bold">Comprehensive Support</span> -
                    <span className="">
                      Access a diverse array of resources and support from
                      Salesforce, encompassing training, marketing, and
                      technical assistance.
                    </span>
                  </li>

                  <li className="md:text-justify mx-3">
                    <span className="font-bold">Cutting-Edge Expertise</span> -
                    <span className="">
                      Stay abreast of the latest Salesforce products and
                      technologies, ensuring our clients benefit from the most
                      advanced solutions.
                    </span>
                  </li>

                  <li className="md:text-justify mx-3">
                    <span className="font-bold">Client-Centric Solutions</span>{" "}
                    <span className="">
                      - Leverage our partnership to deliver optimal solutions
                      tailored to meet the specific needs of our clients.
                    </span>
                  </li>
                </ul>
              </Typography>
            </motion.div>
          </div>
          <div className="md:flex items-center justify-between h-full">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1 }}
              className=" shadow-md rounded-lg  md:mr-auto  md:max-w-max p-5 "
            >
              <h2 className="text-center md:text-justify">
                Cutting-Edge Expertise
              </h2>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="px-3 text-center mx-auto"
              >
                <ul style={{ listStyleType: "circle" }}>
                  <li className="md:text-justify text-left mx-3">
                    <span className="font-bold"> Strategic Alliances</span>{" "}
                    <span>
                      - Cultivate robust relationships with other leading
                      technology companies, broadening our spectrum of solutions
                      and integrations.
                    </span>
                  </li>
                  <li className="md:text-justify text-left mx-3">
                    <span className="font-bold"> Holistic Support </span>
                    <span>
                      - Ensure our clients have access to a comprehensive suite
                      of tools and technologies, fostering their success.
                    </span>
                  </li>
                </ul>
              </Typography>
            </motion.div>
            <img
              src="./s2.jpg"
              alt="sale1"
              className="h-96 w-96  bg-white object-contain"
            />
          </div>
          <div className="md:flex items-center justify-between h-full -mt-10 ">
            <img
              src="./s3.jpg"
              alt="sale1"
              className="  w-[80%] md:w-1/3 mx-auto md:mx-0  md:ml-0 "
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
              transition={{ duration: 1 }}
              className=" shadow-md rounded-lg md:max-w-max  md:ml-auto p-5  "
            >
              <h2 className="text-center md:text-justify">
                Client-Centric Solutions{" "}
              </h2>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="px-2"
              >
                <ul style={{ listStyleType: "circle" }}>
                  <li className="md:text-justify mx-3">
                    <span className="font-bold"> Global Presence</span> - Extend
                    our Salesforce development services across Singapore,
                    Malaysia, and India.
                  </li>
                  <li className="md:text-justify mx-3">
                    <span className="font-bold">Certified Developers </span>-
                    Boast a team of experienced and certified Salesforce
                    developers with an in-depth understanding of the platform.
                  </li>
                  <li className="md:text-justify mx-3">
                    <span className="font-bold">Tailored Solutions</span>:
                    Deliver customized Salesforce applications, integrate
                    seamlessly with third-party systems, and implement
                    Salesforce CRM solutions for businesses of all sizes.
                  </li>
                </ul>
              </Typography>
            </motion.div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0  left-0 right-0 overflow-x-hidden md:h-screen"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,64L30,101.3C60,139,120,213,180,224C240,235,300,181,360,176C420,171,480,213,540,224C600,235,660,213,720,192C780,171,840,149,900,117.3C960,85,1020,43,1080,32C1140,21,1200,43,1260,80C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className={`sectionBox saleForcesDevelopmentBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className="androidDevelopment">
            <Grid item xs={6} className="saleForcesDevelopment">
              <Typography gutterBottom variant="h5" component="div">
                As a Salesforce Development Services partner, we have access to
                a wide range of resources and support from Salesforce, including
                training, marketing, and technical support. This allows us to
                stay up-to-date on the latest Salesforce products and
                technologies and provide our clients with the best possible
                solutions. In addition to our partnership with Salesforce, we
                also have strong relationships with other leading technology
                companies. These partnerships allow us to offer our clients a
                wide range of solutions and integrations, ensuring that they
                have everything they need to succeed.
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Our company provides Salesforce development services in
                Singapore, Malaysia, and India. We have a team of experienced
                and certified Salesforce developers who have a deep
                understanding of the Salesforce platform and can deliver custom
                solutions that meet the unique needs of our clients. Our
                services include the development of custom Salesforce
                applications, integration with third-party systems, and the
                implementation of Salesforce CRM for businesses of all sizes.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section
        className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices p5`}
      >
        <Typography className="mb0" gutterBottom variant="h2" component="div">
          We have a proven track record of <br />
          delivering successful projects for our <br />
          clients and are committed to delivering <br />
          exceptional service and support <br />
          throughout the entire development process.
        </Typography>
        <Typography
          className="white mb30"
          gutterBottom
          variant="h5"
          component="div"
        >
          Our team of experienced Salesforce developers is dedicated to helping
          you get the most out of the platform. We offer a range of Salesforce
          services, including:
        </Typography>
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Salesforce consulting
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce consulting services can include helping
                    organizations choose the right Salesforce solution for their
                    needs, configuring and setting up Salesforce, customizing
                    Salesforce to fit the specific needs of the organization,
                    training users on how to use Salesforce effectively, and
                    integrating Salesforce with other business systems and
                    platforms. Our team will work with you to understand your
                    business needs and objectives, and help you choose the best
                    Salesforce solution for your organization.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Salesforce implementation
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Salesforce implementation is the process of setting up and
                    configuring the Salesforce platform to meet the specific
                    needs of an organization. This includes installing the
                    necessary software and hardware, customizing the platform to
                    fit the organization's unique business processes and
                    requirements, and training users on how to use Salesforce
                    effectively. Our team of experienced Salesforce developers
                    will work with you to understand your business needs and
                    objectives, and help you plan and execute a successful
                    Salesforce implementation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Salesforce integration
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce integration can be especially helpful for
                    organizations that use multiple systems and platforms, as it
                    allows them to consolidate their data and create a single
                    source of truth for their customer and business information.
                    We offer Salesforce integration services to help our clients
                    connect Salesforce with their other business systems and
                    platforms. Our team of experienced Salesforce developers can
                    help you plan and execute a successful integration, ensuring
                    that your systems are working together seamlessly and
                    efficiently.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Salesforce customization
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Salesforce customization is the process of modifying the
                    Salesforce platform to fit the specific needs and
                    requirements of an organization. This can include creating
                    custom objects, fields, and reports, as well as modifying
                    the platform's user interface and workflow. we offer
                    Salesforce customization services to help our clients get
                    the most out of the platform. Our team of experienced
                    Salesforce developers can help you plan and execute a
                    successful customization project, ensuring that your
                    Salesforce solution is tailored to your specific business
                    needs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Salesforce support and maintenance
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce support and maintenance is the ongoing process of
                    ensuring that a Salesforce solution is running smoothly and
                    efficiently. This can include troubleshooting issues,
                    applying updates and patches, and providing user support. At
                    InfoDrive Solutions, we offer Salesforce support and
                    maintenance services to help our clients keep their
                    Salesforce solutions running smoothly. Our team of
                    experienced Salesforce professionals is available to help
                    troubleshoot issues, apply updates and patches, and provide
                    user support as needed. We also offer ongoing training and
                    support to help our clients get the most out of the
                    platform.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5`}>
        <Typography gutterBottom variant="h2" className="mb0" component="div">
          We specialize in a wide range of Salesforce products, including:
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Sales Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A CRM solution for sales teams, including tools for lead and
                    opportunity management, forecasting, and account management.
                    Our Salesforce consultants help you automate your sales
                    process resulting in improved sales and an optimized sales
                    pipeline.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Service Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A CRM solution for customer service teams, including tools
                    for case management, knowledge management, and live chat. We
                    help you overcome customer service challenges with our
                    Service Cloud solutions while offering personalized support
                    across multiple channels and devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Marketing Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A marketing automation platform, including tools for email
                    marketing, social media marketing, and marketing analytics.
                    Our team helps you connect with your consumers across
                    multiple channels such as social media, email marketing, and
                    to generate and track leads.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Commerce Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A cloud-based e-commerce platform, including tools for
                    building and managing online stores, processing orders, and
                    handling customer service.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Community Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A platform for creating and managing online communities,
                    including tools for creating custom portals, forums, and
                    blogs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    AppExchange
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A marketplace for finding and installing third-party
                    Salesforce apps and integrations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className="client pb-20 space-y-10 mt-16">
        <h2 className="text-[22px] font-Poppins font-bold mx-auto text-center text-[#0b2653]">
          Trusted by Industry Leaders
        </h2>
        <Carousel
          autoPlay={true}
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-50-px"
          className="h-full w-full p-2"
          showArrows={false}
        >
          {logos.map((item) => (
            <div className="h-20 w-60 shadow-md shadow-gray-600 p-5 rounded-md ml-16 md:ml-0">
              <img
                src={`./logos/${item}`}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </Carousel>
      </section>
      <LeadForm />
      <Footer />
    </div>
  );
}
