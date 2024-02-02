import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
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
import Sale from "../public/marketing.json";

import LeadForm from "../components/leadForm";
import Lottie from "lottie-react";
import cloufLottie from "../public/apppexchange.json";
import Light from "../public/lightning2.json";

import Sale2 from "../public/Sale2.json";
import Cloud from "../public/lightning.json";
import SaleforceCient from "components/SaleforceCient";
import CustomTimeline from "components/verticleTimeline/CustomTimeline";
import { FcCheckmark } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcCalculator } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import { FcRadarPlot } from "react-icons/fc";
export default function SalesForceDevelopment() {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : "50%"
  );

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Initial setup
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileBreakpoint = 768;
  const items = [
    {
      title:
        width <= mobileBreakpoint ? "" : "Tailored Planning and Customization",
      card: "Tailored Planning and Customization",

      cardDetailedText:
        "Unlock the full potential of Salesforce Commerce Cloud's features, delivering a unified experience tailored to customer preferences.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Enhanced Order Management",
      card: "Enhanced Order Management",
      cardDetailedText:
        "Achieve clarity and precision in stock availability, improving overall order management and supply chain processes.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Efficient Content Management",
      card: "Efficient Content Management",

      cardDetailedText:
        "Streamline content creation and distribution with Commerce Cloud, managing diverse content types effortlessly.",
    },
    {
      title:
        width <= mobileBreakpoint
          ? ""
          : "Staying Competitive with Headless Commerce",
      card: "Staying Competitive with Headless Commerce",

      cardDetailedText:
        "Stay ahead in the competition by easily launching new web experiences at a competitive price using Commerce Cloud's robust SDKs and tools.",
    },
    {
      title:
        width <= mobileBreakpoint
          ? ""
          : "Elevate Customer Experiences with Einstein AI Commerce",
      card: "Elevate Customer Experiences with Einstein AI Commerce",

      cardDetailedText:
        " Deliver hyper-personalized experiences, boost revenue, and increase cart size with Salesforce Commerce Cloud's Einstein AI, offering reliable recommendations based on predictive insights.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Salesforce Integration Services</title>
        <meta
          name="description"
          content="Enhance sales efficiency and community engagement with our expert Salesforce CPQ Service & Community Cloud Services. Empower your teams, delight your customers, and drive business growth."
        />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-integration-services.html"
        />
        <meta
          property="og:title"
          content="Salesforce Integration Services- InfoDrive Solutions"
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

      <section className="newsectionbox text-white relative  pb-0 md:h-[450px] w-full h-[600px]  ">
        <div className="container md:max-w-5xl  lg:max-w-7xl md:mx-auto h-full w-full p5   lg:px-8">
          <div className="space-y-5 flex md:flex-row flex-col items-center gap-5">
            <span
              className="md:text-justify block font-bold md:w-1/2 w-full"
              style={{
                fontFamily: "Poppins",
                fontSize: "23px",
                lineHeight: "33px",
                color: "#148ED9",
                zIndex: 5,
              }}
            >
              Salesforce Integration Services, effortlessly integrate intricate
              systems, streamline business processes, reduce costs, and
              effectively manage assets through{" "}
              <span className="text-red-500"> InfoDrive Solution’s </span>{" "}
              Salesforce Integration Services.
            </span>
            <div className="md:w-[60%] mx-auto">
              <img
                src="./i1.png"
                alt="Community"
                className="w-full  object-contain"
              />
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            className=" w-max "
          >
            <Button
              href="/contact-us.html"
              className="buttOnread   normalCase md:-mt-5 mt-5 "
              variant="text"
              style={{
                zIndex: 5,
                color: "white",
                background: "#148ED9",
              }}
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className={`newsectionbox  h-full salesandservice relative`}>
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
        <div className="container mx-auto md:px-8 p5   ">
          <span className="block text-red-600 font-bold text-center -mt-2 md:text-xl">
            InfoDrive Solution’s Salesforce Integration Services Offerings
          </span>
          <div className="left md:w-1/2 rounded-md overflow-hidden mx-auto">
            <img
              alt="app exchange"
              src="./i2.png"
              className=" object-contain mt-20 rounded-md w-[80%] flex justify-center ml-10 "
            />
          </div>

          <div className="right  ">
            <ul
              style={{ listStyleType: "none" }}
              className="grid grid-col md:grid-cols-2 gap-10 mt-10"
            >
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Premier Salesforce Integration Services
                </span>
                <p className="md:text-justify">
                  InfoDrive Solutions offers top-notch Salesforce integration
                  services tailored to enhance business operations.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Strategic Consulting Approach
                </span>
                <p className="md:text-justify">
                  Our seasoned Salesforce integration consultants meticulously
                  strategize for each integration, ensuring solutions align with
                  your unique business requirements.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Collaborative Solutions
                </span>
                <p className="md:text-justify">
                  Foster collaboration across different departments with our
                  Salesforce integration services, promoting seamless
                  communication and workflow efficiency.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Comprehensive Offerings
                </span>
                <p className="md:text-justify">
                  Our services encompass detailed roadmap design, solution
                  configuration, API-enabled integration, and ongoing support
                  and maintenance.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Quality Assurance
                </span>
                <p className="md:text-justify">
                  {" "}
                  As your trusted Salesforce integration partner, we prioritize
                  quality, delivering customized solutions utilizing a variety
                  of tools and APIs such as SOAP, REST, Jitterbit, Mulesoft, and
                  Dell Boomi.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Specialized Integrations
                </span>
                <p className="md:text-justify">
                  {" "}
                  Benefit from our expertise in social media, accounting, ERP,
                  marketing automation, CTI, eCommerce, and collaboration system
                  integrations.
                </p>
              </motion.li>
            </ul>
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

      {/* key feature of ligtning */}
      <section className={`newsectionbox   h-full salesandservice relative   `}>
        <div className="container mx-auto md:px-8  p5">
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto">
            Integration Choices Across Your Business Departments
          </span>
          <div className="grid  md:grid-cols-3 grid-cols-1 md:-mt-10 px-8 gap-5 gap-y-2">
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Database Integration
                </span>
                <FcAcceptDatabase size={32} />
              </div>

              <p className="text-justify">
                Our certified Salesforce consultants are adept at maximizing
                your data efficiency. Leverage your data effectively, extract
                actionable insights, and harness data intelligence with
                expertise in
              </p>
              <ul style={{ listStyleType: "circle" }} className="ml-5">
                <li style={{ color: "#4e4e50" }}>Oracle</li>
                <li style={{ color: "#4e4e50" }}>MySQL</li>
                <li style={{ color: "#4e4e50" }}>Microsoft SQL</li>
                <li style={{ color: "#4e4e50" }}>Teradata</li>
                <li style={{ color: "#4e4e50" }}>MongoDB</li>
              </ul>
            </motion.div>
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Marketing Integration
                </span>
                <FcBullish size={32} />
              </div>
              <p className="text-justify">
                Strengthen cooperation between your marketing and sales teams.
                Streamline data exchange, expand customer outreach, and
                re-engage cold leads using our Salesforce marketing solutions.
                Partnering with
              </p>
              <ul style={{ listStyleType: "circle" }} className="ml-5">
                <li style={{ color: "#4e4e50" }}>Marketo</li>
                <li style={{ color: "#4e4e50" }}>HubSpot</li>
                <li style={{ color: "#4e4e50" }}>MailChimp</li>
                <li style={{ color: "#4e4e50" }}>Teradata</li>
                <li style={{ color: "#4e4e50" }}>Eloqua</li>
              </ul>
            </motion.div>
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Accounting Integration
                </span>
                <FcCalculator size={32} />
              </div>

              <p className="text-justify">
                Enhance your sales team capabilities through our Salesforce
                integration services with accounting systems. Access up-to- date
                financial data and records including invoices, profiles,
                insights, transactions, and more from:
              </p>
              <ul style={{ listStyleType: "circle" }} className="ml-5">
                <li style={{ color: "#4e4e50" }}>QuickBooks</li>
                <li style={{ color: "#4e4e50" }}>Zoho</li>
                <li style={{ color: "#4e4e50" }}>Xero</li>
              </ul>
            </motion.div>

            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Ecommerce Integration
                </span>
                <FcShipped size={32} />
              </div>
              <p className="text-justify">
                Connect your eCommerce platform with Salesforce CRM for
                comprehensive 360-degree visibility into your customer
                operations. Unlock capabilities to craft customer journeys,
                launch hyper-personalized campaigns, and more with
              </p>
              <ul style={{ listStyleType: "circle" }} className="ml-5">
                <li style={{ color: "#4e4e50" }}>Magento</li>
                <li style={{ color: "#4e4e50" }}>WordPress</li>
                <li style={{ color: "#4e4e50" }}>Shopify</li>
                <li style={{ color: "#4e4e50" }}>WooCommerce</li>
              </ul>
            </motion.div>

            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  ERP Integration
                </span>
                <FcPieChart size={32} />
              </div>
              <p className="text-justify">
                Integrating Salesforce with Enterprise Resource Planning (ERP)
                systems streamlines sales and resource management workflows. Our
                expertise includes integrating Salesforce with leading ERP
                platforms such as
              </p>
              <ul style={{ listStyleType: "circle" }} className="ml-5">
                <li style={{ color: "#4e4e50" }}>NetSuite</li>
                <li style={{ color: "#4e4e50" }}>Acumatica</li>
                <li style={{ color: "#4e4e50" }}>SAP</li>
                <li style={{ color: "#4e4e50" }}>Sage</li>
                <li style={{ color: "#4e4e50" }}>Oracle</li>
                <li style={{ color: "#4e4e50" }}>Microsoft Dynamics 365</li>
              </ul>
            </motion.div>
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Other Integrations
                </span>
                <FcRadarPlot size={32} />
              </div>

              <p className="text-justify">
                We excel in tailoring Salesforce integration services to suit
                your specific business needs. Our expertise extends to
                seamlessly integrating Salesforce with various types of
                applications
              </p>
              <ul style={{ listStyleType: "circle" }} className="ml-5">
                <li style={{ color: "#4e4e50" }}>Email/Calendar</li>
                <li style={{ color: "#4e4e50" }}>Shipping</li>
                <li style={{ color: "#4e4e50" }}>
                  EMR (Electronic Medical Records)
                </li>
                <li style={{ color: "#4e4e50" }}>
                  CTI (Computer Telephony Integration)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`newsectionbox  h-full salesandservice relative `}>
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
        <div className="container mx-auto md:px-8 p5  ">
          <span className="block text-red-600 font-bold text-center text-xl ">
            InfoDrive Solution’s Integration Capabilities
          </span>
          <div className="left  rounded-md overflow-hidden mx-auto">
            <motion.img
              alt="app exchange"
              src="./i3.png"
              className=" object-contain mt-10 rounded-md md:w-[37%] mx-auto"
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

          <div className="right mt-10 ">
            <ul
              style={{ listStyleType: "none" }}
              className="grid grid-col md:grid-cols-2 gap-10 mt-10"
            >
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Salesforce API Integration
                </span>
                <p className="md:text-justify">
                  As a leading Salesforce integration firm boasting a team of
                  seasoned consultants, we specialize in Salesforce API
                  integration. Benefit from rich functionalities including
                  geo-location services, eCommerce solutions, media services,
                  and more
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Backend System Integration
                </span>
                <p className="md:text-justify">
                  Enhance the capabilities of your current backend system with
                  our Salesforce backend integration services. We meticulously
                  address specific business requirements, amplifying system
                  performance to meet your needs.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  User Interface Integration
                </span>
                <p className="md:text-justify">
                  InfoDrive Solutions is a leading Salesforce integration
                  service provider globally, ensuring seamless integration for
                  impeccable performance across all systems. Whether for
                  customers, employees, or partners, we deliver a unified user
                  experience to all stakeholders.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Data Integration
                </span>
                <p className="md:text-justify">
                  Leveraging Salesforce integration, you can enhance customer
                  engagement and employee experience. With InfoDrive Solutions,
                  establish robust connections between key touchpoints and
                  databases across your organization.
                </p>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`newsectionbox aboutUsBox3 salesCloudService  -mt-10 pt-10 relative`}
      >
        <div className=" container mx-auto md:px-8 p5 ">
          <h2
            className="text-center font-bold md:whitespace-nowrap mt-10"
            style={{ color: "#dd3952" }}
          >
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-5  text-gray-600 text-center">
            Salesforce integration is not a simple task. It involves a lengthy,
            time-consuming, and technical process that often raises several
            questions. Here are some of the most common inquiries.
          </p>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} className=" w-full mt-10 ">
                <Card>
                  <div className="flex justify-center">
                    <img
                      alt="saleforce"
                      src="./i4.png"
                      className="  object-cover  rounded-md md:w-[40%] "
                    />
                  </div>
                  <div className="middle-section grid md:grid-cols-2 items-center grid-cols-1 mt-20 gap-10 ">
                    <div className="right ">
                      <span className="text-red-600 font-bold ">
                        What Integration Challenges does InfoDrive Solutions
                        Solves?
                      </span>
                      <div className="points-box">
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Integrating Salesforce with multiple systems.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Integrating Salesforce with on-premise systems.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Integrating Salesforce with custom solutions.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Integrating Salesforce with regional branches.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Real-time data synchronization.</p>
                        </div>
                      </div>
                    </div>
                    <div className="left">
                      <span className="text-red-600 font-bold">
                        Top Benefits of Salesforce Integrations
                      </span>
                      <div className="points-box">
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>
                            It becomes simpler to link the front office with the
                            back office.
                          </p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Enable end-to-end business process automation.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Improve user experience.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Provide a 360-degree view of customers.</p>
                        </div>
                        <div className="point flex items-center gap-2">
                          <FcCheckmark />
                          <p>Ensure consistent customer experience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rightimg  ">
                      <span className="text-red-600 font-bold">
                        Why choose InfoDrive Solution’s for Salesforce
                        Integrations?
                      </span>
                      <p className="text-justify">
                        We guarantee swift delivery, access to proficient
                        Salesforce developers, competitive pricing, agile
                        methodologies, complete customer satisfaction, ongoing
                        support and maintenance, and being recognized as a Top
                        Salesforce Consulting Partner.
                      </p>
                    </div>

                    <div className="left">
                      <span className="text-red-600 font-bold">
                        Why choose InfoDrive Solution’s for Salesforce
                        Integrations?
                      </span>
                      <p className="text-justify">
                        We guarantee swift delivery, access to proficient
                        Salesforce developers, competitive pricing, agile
                        methodologies, complete customer satisfaction, ongoing
                        support and maintenance, and being recognized as a Top
                        Salesforce Consulting Partner.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:flex  gap-10  justify-center mt-10">
                    <img
                      alt="saleforce"
                      src="./ic1.png"
                      className="w-20 object-cover  rounded-md "
                    />

                    <img
                      alt="saleforce"
                      src="./ic2.png"
                      className=" w-20 h-full  rounded-md "
                    />

                    <img
                      alt="saleforce"
                      src="./ic3.png"
                      className=" w-20 object-cover  rounded-md "
                    />
                    <img
                      alt="saleforce"
                      src="./ic4.png"
                      className="w-20 object-cover  rounded-md "
                    />
                    <img
                      alt="saleforce"
                      src="./ic5.png"
                      className="w-20 object-cover  rounded-md "
                    />
                    <img
                      alt="saleforce"
                      src="./ic6.png"
                      className="w-20 object-cover  rounded-md "
                    />
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
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
