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

export default function SalesForceDevelopment() {
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
  const Testimonial = [
    {
      image: "20.jpg",
      text: "The InfoDrive Solutions team played a pivotal role in constructing custom tables within Salesforce for ourorganization. They consistently provided valuable support throughout the process of building custom tables and their associated API in Salesforce. Team maintained open lines of communication, making themselves readily available for project-related discussions. Additionally, they demonstrated a willingness to address any queries, facilitating multiple knowledge transfer sessions to enhance our understanding of Salesforce and its functionalities. I extend my gratitude to Pradeep and the team for their support and eagerly anticipate collaborating on future projects",
    },
    {
      image: "22.jpg",
      text: "Following a meticulous vendor selection process conducted by our team, InfoDrive emerged as the preferred choice for our SFDC app implementation project. The decision was influenced by InfoDrive's pertinent experience, timely communication, and positive demeanor. Subsequently, our engagement with InfoDrive proved to be fruitful. The interactions with their team were smooth and agreeable,culminating in the delivery of a high-quality work product within the stipulated timeframe. We anticipate further collaborations with InfoDrive to meet our evolving needs in the future.",
    },
    {
      image: "21.jpg",
      text: "Proof of Concept for Case Management The Infodrive team has offered valuable assistance in setting up a Proof of Concept (POC) and configuring a demonstration of Email-to-Case functionality. Furthermore, the team has provided expert consultation on the project's approach. I express gratitude to Pradeep and the team for their support, and I eagerly anticipate our collaboration on the next project.",
    },
    {
      image: "23.jpg",
      text: "InfoDrive Solutions swiftly assisted us in building MVPs.Facing resource constraints in our internal development teams, we turned to InfoDrive for help in creating technical Proof of Concepts (POCs). Impressivelyquick and responsive, the InfoDrive team promptly engaged with us to gather requirements, providing estimates and proposals in a short timeframe.After a thorough onboarding process, InfoDrive assigned a highly capable,Salesforce-certified engineer as our key technical contact. Their deep understanding of the Salesforce platform allowed them to rapidly bring our envisioned solutions to life. Although the project initially aimed for a technicalPOC, InfoDrive exceeded expectations by delivering a fully functional Alpha version within days.",
    },
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
          href="https://infodrive-solutions.com/salesforce-professional-services.html"
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
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MB38MVS');`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Header />
      {/* <div className="sliderBox">
        <img
          style={{ width: "100%" }}
          src="images/cc13ff8a13c84325124d7b7989be19e8-min.jpeg"
          alt="Salesforce Consulting Service"
        />
        <Box sx={{ flexGrow: 1 }} className="sliderContent salePart md:p-0 p-2">
          <Grid container spacing={0}>
            <Typography gutterBottom variant="h3" component="h1">
              Empower Your Business with Salesforce Professional Services
            </Typography>

            <Typography gutterBottom variant="h1" component="div">
              Our team of certified Salesforce experts has
              <br />
              extensive experience in implementing and
              <br /> customizing Salesforce to meet the specific <br />
              needs of each business.
            </Typography>
            <Button
              href="/contact-us.html"
              className="readmore white normalCase"
              variant="text"
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className="socical-network">
              <List>
                <ListItem>
                  <ListItemButton
                    component="a"
                    href="https://www.facebook.com/InfoDrivesolutions/"
                  >
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component="a"
                    href="https://in.linkedin.com/company/infodrive-solutions/"
                  >
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component="a"
                    href="https://www.instagram.com/infodrivesolutions/"
                  >
                    <ListItemIcon>
                      <InstagramIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Box>
      </div> */}

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
              className="readmore white normalCase ="
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
              scale: 1,
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

      <section
        className={`sectionBox whyUsBox  pb0  p5 text-black polygon h-max relative  pb-0 md:py-10`}
        style={
          {
            // background: "linear-gradient(315deg, #5ca0f2 0%, #f5f7f6 74%)",
          }
        }
      >
        <Typography
          className="mb0  text-center  mx-auto md:mx-0 w-full"
          gutterBottom
          variant="h2"
          component="div"
          style={{ width: "auto" }}
        >
          Optimizing Success through InfoDrive Solutions Salesforce Managed
          Services: Demonstrating a Proven Record of Excellence in Salesforce
          Project Delivery and Support
        </Typography>
        <Typography
          className=" text-center w-full md:whitespace-nowrap mx-auto md:mx-0   "
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "#4e4e50" }}
        >
          Our seasoned team of Salesforce developers is committed to maximizing
          your platform benefits. Our array of Salesforce services encompasses:
        </Typography>
        <br />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-10 mt-5 md:mt-0">
          <div className="h-full w-full rounded-md shadow-md object-cover p-5">
            <Card className="bg-transparent">
              <CardContent>
                <Typography
                  variant="h3"
                  className="mb-2 md:text-center"
                  component="div"
                >
                  Salesforce Consulting
                </Typography>

                <Typography
                  className=" md:text-justify  tracking-tighter "
                  variant="body2"
                  style={{ color: "#4e4e50" }}
                >
                  It's the art of fine-tuning the deployment, customization, and
                  everyday use of Salesforce, a powerful CRM platform. Our
                  consultants work hand-in-hand with your team, crafting
                  solutions to boost efficiency, productivity, and customer
                  happiness. From configuring modules to implementing automation
                  and integrating third-party apps, we've got it covered.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="h-full w-full rounded-md shadow-md object-cover p-5">
            <Card className="bg-transparent">
              <CardContent>
                <Typography
                  variant="h3"
                  className="bg-transparent md:text-center mb-2"
                  component="div"
                >
                  Salesforce Implementation
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="md:text-justify tracking-tighter"
                  style={{ color: "#4e4e50" }}
                >
                  Setting up and customizing Salesforce for your organization is
                  what we call Salesforce implementation. It involves installing
                  software, tailoring the platform to your unique processes, and
                  training your team. Our skilled Salesforce developers
                  collaborate with you to ensure a successful implementation,
                  aligned with your business goals.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className=" h-full w-full rounded-md shadow-md object-cover p-5">
            <Card className="bg-transparent">
              <CardContent>
                <Typography
                  variant="h3"
                  className="mb-2 md:text-center"
                  component="div"
                >
                  Salesforce Customization
                </Typography>

                <Typography
                  className="  md:text-justify tracking-tighter mx-auto"
                  variant="body2"
                  style={{ color: "#4e4e50" }}
                >
                  Tailoring Salesforce to your unique needs is what we do best.
                  Salesforce customization is about making the platform work
                  just right for your organization. From creating custom objects
                  and fields to tweaking the user interface and workflow, we've
                  got you covered. Our Salesforce customization services are
                  here to ensure you get the most out of the platform.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="  z-10 rounded-lg object-cover  overflow-hidden flex items-center justify-center">
          <img src="./sale6.jpg" className="h-full w-[700px] rounded-lg" />
        </div>

        {/* second grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5  mb-10 mt-5 md:mt-0">
          <div className="h-full w-full rounded-md shadow-md object-cover p-5">
            <Card className="bg-transparent">
              <CardContent>
                <Typography
                  variant="h3"
                  className="bg-transparent md:text-center mb-2"
                  component="div"
                >
                  Salesforce Optimization
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  className=" md:text-justify tracking-tighter"
                  style={{ color: "#4e4e50" }}
                >
                  Boosting your Salesforce experience is what Optimization is
                  all about. We strategically fine-tune and enhance your
                  Salesforce setup, making it more efficient and user-friendly.
                  This involves streamlining workflows, adopting the latest
                  features, and ensuring Salesforce aligns seamlessly with your
                  evolving needs. Optimization may cover performance tuning,
                  data cleansing, and integrating new functionalities for a
                  better user experience.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className=" h-full w-full rounded-md shadow-md object-cover p-5">
            <Card className="bg-transparent">
              <CardContent>
                <Typography
                  variant="h3"
                  className="mb-2 md:text-center"
                  component="div"
                >
                  Salesforce AppExchange
                </Typography>

                <Typography
                  className="mx-auto md:text-justify tracking-tighter"
                  variant="body2"
                  style={{ color: "#4e4e50" }}
                >
                  Creating apps for Salesforce AppExchange is about crafting
                  solutions that meet unique business needs. These apps,
                  designed, developed, and shared by developers, enhance
                  specific functionalities within the Salesforce ecosystem.
                  They're not just tools; they're a way for businesses to expand
                  Salesforce capabilities.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="h-full w-full rounded-md shadow-md object-cover p-5  ">
            <Card className="bg-transparent">
              <CardContent>
                <Typography
                  variant="h3"
                  className="mb-2 md:text-center"
                  component="div"
                >
                  Support and Maintenance
                </Typography>

                <Typography
                  className="  md:text-justify tracking-tighter"
                  variant="body2"
                  style={{ color: "#4e4e50" }}
                >
                  It's all about ensuring everything runs smoothly and adapts to
                  your changing business needs. From solving issues to regular
                  updates, we keep your platform in sync with the latest from
                  Salesforce. Our support involves proactive steps, like keeping
                  an eye on performance, ensuring data is spot-on, and offering
                  timely help to users.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5  mt-10 mb-0`}
      >
        <Typography
          gutterBottom
          variant="h2"
          className="mb-1 md:text-center mx-auto"
          component="div"
        >
          We specialize in a wide range of Salesforce products, including
        </Typography>

        <Box sx={{ flexGrow: 1 }} className="md:-mt-10 -mt-7">
          <Grid container spacing={2} className="space-y-1">
            <Grid item xs={4} className="">
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 md:justify-center">
                    <FcSalesPerformance size={52} />
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      className=""
                    >
                      Sales Cloud
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="md:text-justify  mx-auto"
                    style={{ color: "#4e4e50" }}
                  >
                    Comprehensive CRM solution tailored for sales teams. It
                    encompasses tools for effective lead and opportunity
                    management, precise forecasting, and streamlined account
                    management. Our team of Salesforce consultants is dedicated
                    to automating your sales process, leading to enhanced sales
                    performance and an optimized sales pipeline.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <div className="flex items-center md:justify-center gap-2">
                    <FcServices size={52} />
                    <Typography gutterBottom variant="h3" component="div">
                      Service Cloud
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="md:text-justify"
                    style={{ color: "#4e4e50" }}
                  >
                    CRM Solution designed for customer service teams, featuring
                    tools for case management, knowledge management, and live
                    chat. Our Service Cloud solutions address customer service
                    challenges by providing personalized support across various
                    channels and devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <div className="flex items-center md:justify-center gap-2">
                    <FcBullish size={52} />
                    <Typography gutterBottom variant="h3" component="div">
                      Marketing Cloud
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="md:text-justify"
                    style={{ color: "#4e4e50" }}
                  >
                    Versatile Marketing Automation Platform with tools for email
                    marketing, social media marketing, and marketing analytics.
                    We assist you in connecting with consumers across diverse
                    channels like social media and email marketing, facilitating
                    lead generation and tracking.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <div className="flex items-center md:justify-center gap-2">
                    <FcInTransit size={52} />
                    <Typography gutterBottom variant="h3" component="div">
                      Commerce Cloud
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="md:text-justify"
                    style={{ color: "#4e4e50" }}
                  >
                    Powerful cloud-based e-commerce platform that empowers
                    businesses to efficiently build and manage online stores.
                    Offers comprehensive tools for seamless order processing and
                    effective customer service management. It enhances online
                    presence, elevate customer experiences, and achieve success
                    in the dynamic world of e-commerce.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <div className="flex items-center md:justify-center gap-2">
                    <FcConferenceCall size={52} />
                    <Typography gutterBottom variant="h3" component="div">
                      Community Cloud
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="md:text-justify"
                    style={{ color: "#4e4e50" }}
                  >
                    Brings people together by creating digital spaces for
                    organizations to connect with customers, partners, and
                    employees. In these online communities, users can share
                    info, collaborate on projects, and access resources.
                    Businesses use it to build stronger relationships, foster
                    better communication, and boost engagement—all in one
                    central hub for interaction and collaboration.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <div className="flex items-center md:justify-center gap-2">
                    <FcRefresh size={52} />
                    <Typography gutterBottom variant="h3" component="div">
                      AppExchange
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="md:text-justify"
                    style={{ color: "#4e4e50" }}
                  >
                    It's a go-to spot for businesses looking to spruce up their
                    Salesforce experience with specialized tools. Offering a
                    variety of apps across industries, it lets organizations
                    effortlessly find, install, and blend third-party
                    applications into their Salesforce setup. This marketplace
                    is a hub of innovation, letting users tailor and expand
                    their Salesforce capabilities to fit their unique business
                    requirements.
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
      <section className="testimonial md:pb-20 space-y-10">
        <motion.img
          src="./customersays.png"
          alt="customer says"
          className="object-contain mx-auto w-40 "
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
        />
        <Carousel
          autoPlay={true}
          swipeable={true}
          draggable={false}
          responsive={responsiveTest}
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
          {/* ml-56  */}

          {Testimonial.map((item) => (
            <div className="h-full   p5 md:w-[45vw] w-[90vw] shadow-md shadow-gray-600 md:p-12 rounded-md  space-x-0  mx-auto">
              <div className="flex flex-col gap-5 ">
                <img
                  src={`./logos/${item.image}`}
                  className="object-contain w-48 mx-auto"
                />
                <p
                  className="text-justify text-[16px]"
                  style={{ color: "#4e4e50" }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Your Ideal Salesforce Verified Consulting Partner Is Here!
        </Typography>
        <Button
          href="/contact-us.html"
          className="bgRed white pl15 pr15 poppin upperCase"
        >
          Connect with Our Expert
        </Button>
      </section> */}
      <LeadForm />
      <Footer />
    </div>
  );
}
