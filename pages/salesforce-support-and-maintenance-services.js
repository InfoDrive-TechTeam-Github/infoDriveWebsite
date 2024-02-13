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
import { FcConferenceCall } from "react-icons/fc";
import LeadForm from "../components/leadForm";
import { FcAssistant } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import Sale2 from "../public/Sale2.json";
import Cloud from "../public/lightning.json";
import SaleforceCient from "components/SaleforceCient";
import CustomTimeline from "components/verticleTimeline/CustomTimeline";
import { FcCheckmark } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
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

      <section className="newsectionbox text-white relative  pb-0 w-full   ">
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
              Choose{" "}
              <span className="text-red-500"> InfoDrive Solution’s </span> as
              your Salesforce consulting partner to streamline processes,
              enhance team performance, and boost productivity.
              <motion.div
                whileHover={{ scale: 1.1, originX: 0 }}
                className=" w-max mt-5"
              >
                <Button
                  href="/contact-us.html"
                  className="buttOnread   normalCase  "
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
            </span>
            <div className="md:w-1/2 mx-auto">
              <img
                src="./sm1.png"
                alt="Community"
                className="w-full  object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`newsectionbox  h-full salesandservice relative mt-5`}
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
        <div className="container mx-auto md:px-8 p5   ">
          <span className="block text-red-600 font-bold text-center -mt-2 md:text-xl">
            InfoDrive Solution’s Trusted Reliable Salesforce Support Maintenance
            Services
          </span>
          <div className="md:flex items-center  rounded-md overflow-hidden mx-auto gap-5 ">
            <img
              alt="app exchange"
              src="./sm2.png"
              className=" object-contain  rounded-md w-[80%] flex justify-center  "
            />
            <div className="right  ">
              <p className="leading-8">
                From bug fixing to CRM monitoring and customization to app
                support, experience top-quality Salesforce support and
                maintenance services from InfoDrive Solutions for your
                Salesforce products. Our team comprises expert Salesforce
                support service executives, along with experienced Salesforce
                developers, administrators, architects, and more. We ensure the
                creation of a functional Salesforce environment for you and your
                end-users.
                <br />
                Our diverse and business-centric range of Salesforce support and
                maintenance services includes round-the-clock Salesforce CRM
                support, maintenance, data management, user assistance,
                troubleshooting, help desk services, and system evolution. We
                cater to clients across various industry verticals worldwide.
                Our team of Salesforce production support experts diligently
                monitors Salesforce servers, schedules tasks, manages incidents,
                and ensures the stability and peak performance of Salesforce
                solutions.
              </p>
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

      <section className={`newsectionbox  h-full salesandservice relative `}>
        <div className="container mx-auto md:px-8 p5  mt-5">
          <span className="block text-red-600 font-bold text-center text-xl ">
            InfoDrive provides the BEST Salesforce Support Services
          </span>
          <div className="left  rounded-md overflow-hidden mx-auto ">
            <motion.img
              alt="app exchange"
              src="./sm3.png"
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
                  Round-the-clock Salesforce Support (24/7)
                </span>
                <p className="md:text-justify">
                  Day or night, our team is available to assist you. We
                  guarantee optimal performance for your Salesforce CRM and
                  ensure the continuous operation of your cloud environment.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Salesforce Maintenance
                </span>
                <p className="md:text-justify">
                  Our skilled team of Salesforce support experts provides a
                  comprehensive array of services encompassed within Salesforce
                  maintenance. From data upkeep to CRM security and user
                  management, we deliver all these services and more.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Data Management
                </span>
                <p className="md:text-justify">
                  We prioritize the complete confidentiality of your data and
                  ensure your data-related concerns are always addressed
                  promptly. From data uploads to cleansing and validation, we
                  oversee and manage all aspects of the systems data
                  functionalities.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  User Support and Assistance
                </span>
                <p className="md:text-justify">
                  We provide a comprehensive range of user support and
                  assistance services, ensuring high-performance Salesforce
                  solutions tailored to your business needs. Our commitment is
                  to deliver top-notch Salesforce assistance services aligned
                  with your specific requirements.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Salesforce User Support Center
                </span>
                <p className="md:text-justify">
                  Our self-service help desk caters to users needs, providing
                  professional assistance and quick resolutions to questions and
                  issues with utmost efficiency.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600 flex justify-center">
                  Troubleshooting
                </span>
                <p className="md:text-justify">
                  Our highly experienced team of expert Salesforce support
                  service providers swiftly identifies and resolves issues,
                  enhancing and upgrading your CRM with the best solutions
                  available.
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
            How InfoDrive Solutions Can Assist You with Salesforce CRM Support
            Services?
          </h2>
          <p className="mt-5  text-gray-600 text-center">
            Prepare to harness our top-notch and industry-leading Salesforce
            support and maintenance services, which will pave the way for
            optimal business growth.
          </p>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} className=" w-full mt-10 ">
                <Card>
                  <div className="flex justify-center">
                    <img
                      alt="saleforce"
                      src="./sm4.png"
                      className="  object-cover  rounded-md md:w-[40%] "
                    />
                  </div>
                  <div className="middle-section grid md:grid-cols-2 items-center grid-cols-1 mt-20 gap-10 ">
                    <div className="right ">
                      <span className="text-red-600 font-bold flex justify-center">
                        Robust Monitoring
                      </span>
                      <div className="points-box">
                        <p className="md:text-justify">
                          In addition to our Salesforce implementation services,
                          we extend post- implementation monitoring to ensure
                          seamless functionality of your solution. Periodically,
                          we offer essential recommendations for enhancing the
                          solution.
                        </p>
                      </div>
                    </div>
                    <div className="left">
                      <span className="text-red-600 font-bold flex justify-center ">
                        Ongoing Administration
                      </span>
                      <div className="points-box">
                        <p className="md:text-justify">
                          Our commitment continues beyond the successful
                          integration and implementation of Salesforce. We
                          diligently monitor your solution and provide support
                          services including security management, bug
                          resolution, and demos.
                        </p>
                      </div>
                    </div>
                    <div className="rightimg  ">
                      <span className="text-red-600 font-bold flex justify-center ">
                        Bug Resolution
                      </span>
                      <div className="points-box">
                        <p className="md:text-justify">
                          Our seasoned Salesforce consultants and developers
                          assist in maintaining the stability of your existing
                          system by addressing bugs within the current
                          infrastructure. We meticulously resolve
                          performance-related issues with care and precision.
                        </p>
                      </div>
                    </div>

                    <div className="left">
                      <span className="text-red-600 font-bold flex justify-center">
                        Application Maintenance Support
                      </span>
                      <p className="text-justify">
                        In addition to our comprehensive range of Salesforce
                        support and maintenance services, we offer long-term
                        application maintenance. This includes debugging,
                        modification of app functions, expansion, and various
                        other services aimed at ensuring the continued
                        effectiveness of your application.
                      </p>
                    </div>
                    <div className="left">
                      <span className="text-red-600 font-bold flex justify-center">
                        Performance Enhancement
                      </span>
                      <p className="text-justify">
                        We offer a variety of improvement strategies designed to
                        enhance your customer experience seamlessly. These plans
                        are tailored to help you maximize the potential of your
                        current system and increase workforce productivity.
                      </p>
                    </div>
                    <div className="right">
                      <span className="text-red-600 font-bold flex justify-center">
                        Integration Update Assistance
                      </span>
                      <p className="text-justify">
                        Our real-time integration update support and
                        synchronization services eliminate the need for waiting
                        for support. We assist in monitoring your integration,
                        troubleshooting update-related issues, and facilitating
                        easy development of custom API integrations.
                      </p>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
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
            WHAT ALL WE DO ?
          </h2>

          <div className="middle-section flex px-auto  justify-center gap-40 mt-5 ">
            <div className="right ">
              <div className="points-box">
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Feature Activation</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Bulk Data Services</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>User Management & Adoption</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Data Quality Management</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Documentation & Training</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Analytics Supports</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>AppExchange Package Support</p>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="points-box">
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Email Administration</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>User Management and Adoption</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Small Custom Components</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Communities Maintenance</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>CRM Best Practices</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Architecture Review & Customization</p>
                </div>
                <div className="point flex items-center gap-2">
                  <FcCheckmark />
                  <p>Standard Salesforce Objects and Features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* key feature of ligtning */}
      <section className={`newsectionbox   h-full salesandservice relative   `}>
        <div className="container mx-auto md:px-8  p5">
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto">
            Excellence in Salesforce Support Customization Services
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
                  Salesforce Partnership
                </span>
                <FcConferenceCall size={32} />
              </div>

              <p className="text-justify">
                As a Salesforce Consulting Partner Company, we provide a
                comprehensive range of Salesforce support services aligned with
                international standards and delivery models.
              </p>
            </motion.div>
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Industry Expertise
                </span>
                <FcFactory size={32} />
              </div>
              <p className="text-justify">
                Our Salesforce support professionals possess extensive
                proficiency and experience in delivering support services across
                various industries.
              </p>
            </motion.div>
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Comprehensive Salesforce Services
                </span>
                <FcEngineering size={32} />
              </div>

              <p className="text-justify">
                Our commitment is to provide comprehensive Salesforce support
                and maintenance services that encompass every aspect of your
                Salesforce environment.
              </p>
            </motion.div>

            <motion.div
              className="right  mt-5 md:mt-20 "
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}
              <div className="flex   justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center ">
                  Optimizing Salesforce Implementations
                </span>
                <FcPieChart size={32} />
              </div>
              <p className="text-justify">
                We closely monitor emerging trends, features, and
                functionalities to seamlessly integrate them with your existing
                system and streamline processes.
              </p>
            </motion.div>

            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Transparency at Every Stage
                </span>
                <FcAssistant size={32} />
              </div>
              <p className="text-justify">
                We schedule regular monthly or quarterly meetings to keep you
                informed about our progress, review KPIs, assess business
                impact, analyze market trends, and prioritize plans.
              </p>
            </motion.div>
            <motion.div
              className="right  mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="md:text-justify text-red-600 font-bold flex justify-center">
                  Diverse Portfolio
                </span>
                <FcReading size={32} />
              </div>

              <p className="text-justify">
                Our extensive experience spans businesses of all sizes and
                diverse industry verticals, allowing us to build a rich
                portfolio across different Salesforce products.
              </p>
            </motion.div>
          </div>
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
