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
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { Chrono } from "react-chrono";
import Sale from "../public/marketing.json";

import LeadForm from "../components/leadForm";
import Lottie from "lottie-react";
import cloufLottie from "../public/wave.json";
import Sale2 from "../public/Sale2.json";
import Cloud from "../public/cloud.json";
import SaleforceCient from "components/SaleforceCient";
import CustomTimeline from "components/verticleTimeline/CustomTimeline";
export default function SalesForceDevelopment() {
  const [widthI, setWidth] = React.useState(
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
      left: {
        card: "Expert Team",

        cardDetailedText:
          "InfoDrive Solutions ensures clients receive top-notch, tailored solutions backed by extensive experienced skilled & certified resources",
      },
      right: {
        card: "End-to-End Support",
        cardDetailedText:
          "InfoDrive Solutions offers a full spectrum of services, covering everything from implementation to ongoing support and optimization.",
      },
    },

    {
      left: {
        card: "Tailored Solutions",

        cardDetailedText:
          "InfoDrive Solutions excels in delivering customized solutions whether aligning Salesforce Marketing Cloud with specific goals or tailoring Pardot for optimal performance, client-specific needs take center stage",
      },
      right: {
        card: "Proven Success",

        cardDetailedText:
          "InfoDrive Solutions boasts a track record of successfully implementing and optimizing Salesforce Marketing Cloud and Pardot.",
      },
    },
    {
      left: {
        card: "Strategic Planning",

        cardDetailedText:
          "InfoDrive Solutions involves Team in developing a roadmap for effectively leveraging Salesforce Marketing Cloud and Pardot, ensuring long-term success and ROI.",
      },
      right: {
        card: "Ongoing Support and Training",

        cardDetailedText:
          "InfoDrive Solutions provides updates and training sessions. This empowers clients to harness the full potential of Salesforce Marketing Cloud and Pardot.",
      },
    },
    {
      left: {
        card: "Seamless Salesforce Integration",

        cardDetailedText:
          "InfoDrive Solutions ensures the seamless integration of Salesforce Marketing Cloud and Pardot with the broader Salesforce ecosystem.",
      },
      right: {
        card: "Innovation Focus",

        cardDetailedText:
          " InfoDrive Solutions remains dedicated to innovation, We current with the latest trends in Salesforce Marketing Cloud and Pardot, ensuring clients benefit from cutting-edge solution.",
      },
    },

    // {
    //   card: "Client-Centric Approach",

    //   cardDetailedText:
    //     "InfoDrive Solutions places a high priority on a client-centric approach, understanding the unique challenges and goals of each business. This focus on client satisfaction fosters strong, collaborative partnerships that extend beyond transactional service provision.",
    // },
  ];

  return (
    <div>
      <Head>
        <title>
          Salesforce Marketing Cloud & Pardot Services | InfoDrive Solutions
        </title>
        <meta
          name="description"
          content="Elevate your strategy with Marketing Cloud & Pardot Services. Our experts empower your business with cutting-edge automation, targeted campaigns, and data-driven insights."
        />
        <meta
          name="keywords"
          content="Salesforce Marketing Cloud, Pardot Services, Marketing Automation, Lead Nurturing, CRM Solutions, Marketing Excellence, Salesforce Consulting, Salesforce Development, InfoDrive Solution"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/marketing-cloud-and-pardot-services.html"
        />
        <meta
          property="og:title"
          content=" Salesforce Marketing Cloud & Pardot Services - InfoDrive Solutions"
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

      <section className="newsectionbox   text-white relative  ocean pb-0 h-screen ">
        <Lottie
          animationData={cloufLottie}
          loop={true}
          className="absolute top-0 left-0 right-0"
        />
        <div className="container md:max-w-5xl  lg:max-w-7xl mx-auto    h-full w-full  p5 absolute top-16 md:top-60 md:left-10  px-4  lg:px-8">
          <div className=" md:flex   md:items-center md:justify-between  w-full">
            <h1
              className="text-justify md:w-1/2 "
              style={{
                zIndex: 5,
                color: "#00000099",
                width: widthI < mobileBreakpoint && widthI !== 0 ? "90%" : "",
                // width: "90%",
              }}
            >
              Elevate your marketing achievements through the strategic
              integration of Salesforce Marketing Cloud and Pardot Solutions,
              where the synergy of innovation converges with guaranteed success.
            </h1>
            <div className="md:mr-20" style={{ zIndex: 10 }}>
              <img
                src="./pardot1.png"
                alt="Salesforce Marketing Cloud & Pardot Services"
              />
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            className=" w-max "
          >
            <Button
              href="/contact-us.html"
              className="buttOnread   normalCase mt-5"
              variant="text"
              style={{ zIndex: 5, color: "white", background: "#00A1DF" }}
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
          </motion.div>
        </div>

        {/* <div className="md:top-0 bottom-0 absolute md:-mt-72">
          <Lottie animationData={cloufLottie} loop={true} className="" />
        </div> */}
      </section>

      <section
        className={`newsectionbox p5  h-full salesandservice relative -mt-20 md:mt-0`}
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
        <div className="container max-w-5xl mx-auto    h-full w-full ">
          <h2 className="mb-20 text-center">
            Salesforce Marketing Cloud and Salesforce Pardot Service
          </h2>
          <div className="flex md:flex-row flex-col gap-14 items-start justify-between md:gap-10 w-full h-full">
            <div
              className="left shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 h-full "
              style={{ zIndex: 10 }}
            >
              <img
                className="md:h-64 h-[156px] w-[80%] border mx-auto -mt-14 shadow-lg rounded-md object-cover"
                src="./SFMC.png"
                alt="Marketing Automation"
              />
              <Typography
                gutterBottom
                variant="h2"
                component="h2"
                className="text-center mx-auto mt-5"
              >
                Transforming Customer Experiences: Implementation Services for
                Salesforce Marketing Cloud
              </Typography>
              <div>
                <h5 className="text-justify">
                  Unlock the power of personalized and data-driven marketing
                  with InfoDrive Solutions Salesforce Marketing Cloud
                  Implementation Services. Seamlessly deliver personalized
                  consumer engagement across web, mobile, email, social, and
                  digital advertising channels using the unparalleled
                  capabilities of Marketing Cloud Salesforce.
                </h5>
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
            </div>
            {/* right */}
            <div
              className="right shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 "
              style={{ zIndex: 10 }}
            >
              <img
                className="md:h-64 w-[80%]  border mx-auto -mt-14 shadow-lg rounded-md object-cover"
                src="./pardot.png"
                alt="marketing-cloud"
              />
              <div>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  className="text-center mx-auto mt-5"
                >
                  Unlock B2B Success: Salesforce Pardot Implementation Solutions
                  Services.
                </Typography>
                <h5 className="text-justify">
                  Optimize Buyer Engagement, Seal Deals, and Foster Stronger
                  Relationships with InfoDrive Solutions Tailor Pardot to your
                  exact specifications using advanced automation tools designed
                  for your Pardot account. Explore, construct, and manage
                  operations seamlessly with these automation tools. Establish a
                  harmonious connection between Salesforce and Pardot to align
                  your sales and marketing teams effectively.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* advantage */}
      <section className={`newsectionbox p5  h-full -mt-10 space-y-5`}>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <motion.h2
            style={{ zIndex: 5 }}
            className="text-center "
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
            Features of Salesforce Marketing Cloud
          </motion.h2>
          {/* <Lottie animationData={Cloud} loop={true} className="w-[420px]" /> */}

          <div
            className="flex justify-center w-full mt-5"
            style={{ zIndex: 10 }}
          >
            <motion.img
              alt="advantage sale and service "
              src="./pardot2.png"
              className=" aspect-square md:w-[30%] w-[70%] object-cover"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                rotate: -360,
                transition: {
                  duration: 1,
                },
              }}
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
                Multi-Channel Marketing
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify ">
                Salesforce Marketing Cloud empowers marketers to conduct
                seamless campaigns across multiple channels—email, social media,
                mobile, and web. This approach ensures businesses can connect
                with their audience wherever they are, delivering a cohesive and
                personalized brand experience.
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
                Journey Builder
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify ">
                The Journey Builder feature enables marketers to craft
                personalized customer journeys based on real-time interactions.
                This visual tool allows businesses to automate the entire
                customer journey, fostering meaningful interactions from
                awareness to conversion.
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
                Email Marketing Automation
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Robust email marketing automation capabilities empower
                businesses to send targeted and personalized email campaigns.
                From drip campaigns to triggered emails based on customer
                actions, this feature ensures the right message reaches the
                right audience at the right time.
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
                Audience Segmentation
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Precision in targeting is crucial, and Salesforce Marketing
                Cloud excels in audience segmentation. Marketers can segment
                their audience based on demographics, behaviors, and
                preferences, enabling highly targeted and relevant messaging.
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
                Analytics and Reporting
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Real-time analytics and reporting tools provide valuable
                insights into campaign performance. Marketers can track key
                metrics, measure ROI, and make data-driven decisions to
                continually optimize their strategies for better results.
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
                Personalization at Scale
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Salesforce Marketing Cloud facilitates personalization at scale,
                allowing businesses to tailor content and experiences for
                individual customers. Dynamic content and personalized
                recommendations enhance customer satisfaction and loyalty.
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
                Social Media Integration
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Seamlessly integrating with various social media platforms,
                Salesforce Marketing Cloud enables marketers to manage and track
                social media campaigns. This integration ensures a cohesive
                approach to social media marketing within the broader
                multichannel strategy.
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
                Mobile Marketing
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Recognizing the prevalence of mobile devices, Salesforce
                Marketing Cloud includes features designed for mobile marketing.
                Marketers can create mobile-optimized content and campaigns,
                ensuring a seamless experience for users on smartphones and
                tablets.
              </p>
            </motion.div>
          </div>
          <p className="mt-5 text-justify">
            {/* <span className="text-red-600 font-bold"> Conclusion,</span>{" "} */}
            Salesforce Marketing Cloud is a versatile and powerful platform that
            empowers businesses to deliver personalized, targeted, and effective
            marketing campaigns. With an array of features, marketers have the
            tools they need to engage their audience across channels, drive
            conversions, and achieve success in the ever-evolving landscape of
            digital marketing.
          </p>
        </div>
      </section>

      {/* feature of service cloud */}
      {/* advantage */}
      <section className={`newsectionbox p5 relative h-full -mt-10 space-y-5`}>
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
            Features of Salesforce Pardot
          </motion.h2>

          <div className="flex justify-center w-full ">
            <motion.img
              alt="advantage sale and service "
              src="./salesforce-pardot-image.png"
              className=" object-cover w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                rotate: -360,
                transition: {
                  duration: 1,
                },
              }}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-col-1 gap-3 mt-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Lead Nurturing with Engagement Studio
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                At the core of Pardot is the Engagement Studio, a robust tool
                for lead nurturing. Marketers can design personalized, automated
                journeys that cater to each leads unique interactions, ensuring
                timely and relevant content delivery throughout the customer
                lifecycle.
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
                Dynamic Content for Personalized Experiences
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Pardot allows marketers to create dynamic content that adapts
                based on a prospects profile and behavior. This personalized
                approach enhances engagement by delivering content that
                resonates with individual leads, increasing the likelihood of
                conversion.
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
                Smart Email Marketing Automation
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Pardots email marketing automation goes beyond the basics.
                Marketers can leverage advanced features such as drip campaigns,
                triggered emails, and A/B testing to optimize their email
                campaigns and ensure they are both impactful and targeted.
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
                Lead Scoring for Precision Targeting
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Pardots lead scoring system enables businesses to prioritize
                leads based on their behavior and engagement levels. This
                ensures that sales teams focus their efforts on the most
                promising prospects, streamlining the conversion process and
                maximizing efficiency.
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
                Advanced Analytics and Reporting
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Pardot provides comprehensive analytics and reporting tools that
                empower marketers to gain insights into the performance of their
                campaigns. From tracking email engagement to monitoring lead
                activity, these analytics facilitate data-driven decision-making
                for continuous improvement.
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
                Salesforce Integration for Seamless Collaboration
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                As part of the Salesforce ecosystem, Pardot seamlessly
                integrates with Salesforce CRM. This integration ensures
                alignment between marketing and sales teams, enabling them to
                work collaboratively and providing a unified view of customer
                interactions.
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
                Social Media Integration
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Pardot supports social media integration, allowing marketers to
                track and analyze the impact of their social media efforts. This
                feature contributes to a holistic understanding of the customer
                journey and facilitates a cohesive multichannel marketing
                strategy.
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
                Form and Landing Page Builder
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Creating visually appealing and effective forms and landing
                pages is simplified with Pardots intuitive builder. Marketers
                can design and optimize these crucial elements to capture leads
                and drive engagement.
              </p>
            </motion.div>
          </div>
          <p className="mt-5 text-justify">
            {/* <span className="text-red-600 font-bold "> Conclusion,</span>{" "} */}
            Salesforce Pardots feature-rich platform empowers businesses to
            execute sophisticated marketing strategies with ease. Whether its
            personalized lead nurturing, dynamic content creation, or seamless
            integration with Salesforce CRM, Pardot offers a comprehensive suite
            of tools designed to drive marketing success in todays dynamic
            landscape.
          </p>
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

      {/* timeline  */}
      {/* <div
        style={{ width: "100vw" }}
        className="flex items-center justify-center md:flex-row flex-col "
      >
        <Chrono
          items={items}
          mode="VERTICAL"
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
        <div className="newsectionbox self-start mr-10 md:w-1/2 ">
          <h2>
            <span className="text-red-600 text-3xl font-black">Why</span> Opt
            for
            <span className="text-red-600  font-black">
              {" "}
              InfoDrive’s Solutions
            </span>{" "}
            for Salesforce Marketing Cloud and Pardot needs? Here you can figure
            it out:
          </h2>
          <Lottie animationData={Sale2} loop={true} className="mt-20" />
        </div>
      </div> */}
      <section className={`newsectionbox p5  h-full md:-mt-20 space-y-5`}>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <div className="flex items-center justify-between">
            <h2 className=" mt-40 w-1/2 ">
              <span className="text-red-600 text-3xl font-black">Why</span> Opt
              for
              <span className="text-red-600  font-black">
                {" "}
                InfoDrive’s Solutions
              </span>{" "}
              for Salesforce Marketing Cloud and Pardot needs? Here you can
              figure it out:
            </h2>
            <Lottie animationData={Sale2} loop={true} className="w-1/2" />
          </div>
          <CustomTimeline data={items} />
        </div>
      </section>

      <section
        className={`sectionBox aboutUsBox3 salesCloudService p5 -mt-10 pt-10 relative`}
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
        <h2 className="text-center font-bold " style={{ color: "#0b2653" }}>
          Empower Your Business: Partnering with
          <span className="text-[#dd3952]  font-bold text-center ml-1">
            InfoDrive Solutions - Your Trusted Experts in Marketing Technology
            Success
          </span>
        </h2>

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
                    The seasoned team of{" "}
                    <span className="font-bold text-[#dd3952]">Certified </span>
                    Salesforce consultants at{" "}
                    <span className="font-bold text-[#dd3952]">
                      {" "}
                      InfoDrive Solutions{" "}
                    </span>{" "}
                    brings a wealth of experience to assist businesses in
                    optimizing their marketing processes and fostering growth in
                    these regions. We specialize in the{" "}
                    <span className="font-bold text-[#dd3952]">
                      {" "}
                      implementation and consulting
                    </span>{" "}
                    of Salesforce Marketing Cloud and Pardot, globally
                    recognized as the premier customer relationship management
                    (CRM) platform. <br />
                    <br />
                    <span className="font-bold text-[#dd3952]">
                      {" "}
                      At InfoDrive Solutions,
                    </span>{" "}
                    our primary focus is on guiding businesses through the
                    strategic utilization of Salesforce Marketing Cloud and
                    Pardot to enhance sales marketing processes and unlock
                    growth potential. Trust our{" "}
                    <span className="font-bold text-[#dd3952] mr-2">
                      {" "}
                      Certified Salesforce Consultants
                    </span>
                    to be your partners in achieving success through these
                    powerful CRM solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} className="-mt-12">
              <Card>
                <Lottie
                  animationData={Sale}
                  loop={true}
                  className="md:w-[90%] ml-5"
                />
                <div className="flex items-center justify-between gap-2 md:-mt-10">
                  <motion.div className="w-20 ">
                    <motion.img
                      src="./pardot5.png"
                      alt="sale certificate1"
                      className="h-full w-full"
                    />
                  </motion.div>
                  <div className="w-20 ">
                    <img
                      src="./pardot6.png"
                      alt="sale certificate5"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="w-20 ">
                    <img
                      src="./pardot7.png"
                      alt="sale certificate4"
                      className="h-full w-full"
                    />
                  </div>

                  <div className="w-20">
                    {" "}
                    <img
                      src="./pardot8.png"
                      alt="sale certificate2"
                      className="h-full w-full"
                    />
                  </div>

                  <div className="w-20 ">
                    <img
                      src="./pardot9.png"
                      alt="sale certificate3"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="w-20 ">
                    <img
                      src="./pardot10.png"
                      alt="sale certificate3"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="w-20 ">
                    <img
                      src="./pardot11.png"
                      alt="sale certificate3"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Box>
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
      <div className="">
        <LeadForm />
      </div>

      <Footer />
    </div>
  );
}
