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
// import Lottie from "lottie-react";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import cloufLottie from "../public/apppexchange.json";
import Light from "../public/lightning2.json";

import Sale2 from "../public/Sale2.json";
import Cloud from "../public/lightning.json";
import SaleforceCient from "components/SaleforceCient";
import CustomTimeline from "components/verticleTimeline/CustomTimeline";
import { FcCheckmark } from "react-icons/fc";
import dynamic from "next/dynamic";
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

export default function SalesForceDevelopment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts
  }, []);

  return (
    <div>
      <Head>
        <title>Expert Salesforce CPQ Services | Implementation & Consulting</title>
        <meta
          name="description"
          content="Transform your sales operations with Salesforce CPQ services from InfoDrive Solutions. We provide expert CPQ consulting and implementation to help you optimize pricing and quoting processes. Get in touch to enhance your sales efficiency!"
        />
        <meta
          name="keywords"
          content="Salesforce CPQ, Salesforce CPQ services, Salesforce CPQ implementation, Salesforce CPQ consulting, CPQ solutions, CPQ implementation services, Salesforce CPQ experts, CPQ consulting partners, salesforce cpq consultant"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-cpq.html"
        />
        <meta
          property="og:title"
          content="Empower Your Business with Salesforce Commerce Cloud and Einstein
          Services - InfoDrive Solutions"
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
      <section className="newsectionbox text-white relative  pb-0 h-[450px] w-full ">
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
              Simplify your CPQ processes with{" "}
              <span className="text-red-500">
                InfoDrive's Salesforce CPQ services.
              </span>{" "}
              Work flexibly from any location, on any device, enhancing
              productivity and increasing deal-closure chances for your
              organization.
            </span>
            <div className="md:w-[60%] mx-auto">
              <img
                src="./salesforce-cpq-implementation.jpg"
                alt="Salesforce CPQ services"
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

      <section className={`newsectionbox   h-full salesandservice relative   `}>
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
        <div className="container mx-auto md:px-8  py-16 p5">
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto mt-10">
            InfoDrive Solution’s Salesforce CPQ Services
          </span>
          <div className="md:flex items-center gap-3 md:-mt-10">
            <motion.div
              className="left md:w-[40%] rounded-md overflow-hidden z-10 md:mt-20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                alt="InfoDrive Solutions Salesforce CPQ services"
                src="./community2.png"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="right md:w-1/2 mt-5 md:mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h5 className="md:text-justify">
                Enhance your quoting process by leveraging customization rules
                pricing features of{" "}
                <span className="text-red-600 font-bold">
                  Salesforce CPQ Services
                </span>{" "}
                from{" "}
                <span className="text-red-600 font-bold">
                  InfoDrive Solutions.
                </span>{" "}
                Ensure timely delivery of accurate quotes, fostering seamless
                collaboration across all departments within your organization.
                Integrate CPQ with systems like ERP to streamline processes and
                establish a strong connection between operations sales. Elevate
                the efficiency of your sales team through CPQ implementation,
                ultimately setting the stage for increased revenue substantial
                savings for your organization.
              </h5>
            </motion.div>
          </div>
        </div>
      </section>
      {/* advantage */}
      <section className={`newsectionbox relative  h-full -mt-40 space-y-5`}>
        <div className="container md:px-8 mx-auto h-full w-full p5 ">
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto mt-5">
            Why Salesforce CPQ?
          </span>
          <div className="md:flex md:items-center gap-2 py-10">
            <motion.div
              className="md:w-[60%]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2">
                <FcCheckmark size={32} />
                <p>
                  Guiding Your Business Growth with Salesforce Commerce Cloud
                  Expertise
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark size={32} />
                <p>
                  Establish organizational standardization with formalized
                  pricing and rules.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark size={32} />
                <p>Save valuable time with precise and faster quoting.</p>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark size={32} />
                <p>
                  Set firm standards across departments for streamlined
                  processes.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark size={32} />
                <p>
                  Increase efficiency of the Sales team to dedicate more time to
                  clients.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark size={32} />
                <p>Attain effective and profitable sales processes.</p>
              </div>
            </motion.div>
            <motion.div
              className="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="./community3.png"
                alt="Salesforce Community Cloud-Salesforce Communities Development"
                className="w-full"
              />
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
        </svg>
      </section>
      {/* key feature of ligtning */}

      <section className={`newsectionbox  h-full salesandservice relative`}>
        <div className="container mx-auto md:px-8 p5   ">
          <span className="block text-red-600 font-bold text-center mt-5">
            Salesforce CPQ Service Offerings
          </span>
          <div className="left md:w-1/2 rounded-md overflow-hidden mx-auto">
            <img
              alt="Salesforce CPQ Service Offerings"
              src="./community4.png"
              className="w-full object-contain mt-10 rounded-md"
            />
          </div>

          <div className="right  ">
            <p className="text-justify">
              Enhance your sales strategy with InfoDrive Solutions CPQ services.
              Our tailored solutions streamline quote automation, pricing
              management, and deal closure on Salesforce. Stay ahead of the
              competition by leveraging our CPQ services, optimizing sales tools
              to maximize your business ROI. Transform discount and pricing
              processes for optimal results. Choose InfoDrive for smarter
              selling.
            </p>
            <ul
              style={{ listStyleType: "circle" }}
              className="grid grid-col md:grid-cols-2 gap-10 mt-10"
            >
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Salesforce CPQ Configuration
                </span>
                <p className="md:text-justify">
                  Create automation of manual processes, configuration of the
                  system based on the unique requirements of your business with
                  our adept Salesforce experts.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Salesforce CPQ Consultation
                </span>
                <p className="md:text-justify">
                  Evaluate the effectiveness of Salesforce CPQ for your business
                  with our Salesforce certified experts and show you ways to
                  attain your business objectives.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Salesforce CPQ Maintenance
                </span>
                <p className="md:text-justify">
                  Eliminate the need for an expensive in-house team with our
                  Salesforce CPQ maintenance services. Ensure reliable, secure
                  and optimized services for API updates.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Salesforce CPQ Customization
                </span>
                <p className="md:text-justify">
                  Render highly customized Salesforce CPQ Services, create quote
                  templates as per your branding guidelines, with the
                  experienced professionals at Cloud Analogy Bring transparency
                  into pricing and discount processes.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Salesforce CPQ Implementation
                </span>
                <p className="md:text-justify">
                  {" "}
                  We have a team of qualified, dynamic experts with
                  sophisticated expertise and in-depth knowledge in
                  quote-to-cash processes for some of the complex implementation
                  projects.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Salesforce CPQ Integration
                </span>
                <p className="md:text-justify">
                  {" "}
                  Cloud Analogy has a strong track record on implementation of
                  Salesforce CPQ Integration services. We ensure secure and
                  reliable transfer of data between CPQ and the
                  financial/billing process of your organization.
                </p>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className={`newsectionbox aboutUsBox3 salesCloudService  -mt-10 pt-10 relative`}
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
        <div className=" container mx-auto md:px-8 p5 py-10">
          <h2
            className="text-center font-bold md:whitespace-nowrap "
            style={{ color: "#dd3952" }}
          >
            Top Benefits of Hiring InfoDrive Solutions for Salesforce CPQ
            Implementation Services
          </h2>
          <p className="mt-5 text-center text-gray-600 ">
            As your Salesforce CPQ implementation partner, we will help leverage
            all the advantages of this platform to the fullest. Now streamline
            your sales cycles and close deals with confidence.
          </p>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} className="pr30">
                <Card>
                  <CardContent>
                    <br />
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      className="text-justify"
                    >
                      {/* first */}
                      <p>
                        <span className="font-bold mr-1">
                          Automated Quoting:
                        </span>{" "}
                        We will help you set custom price templates with dynamic
                        pricing models. It will automate quotes and rapidly
                        generate branded proposals.
                      </p>
                      {/* second */}
                      <p>
                        <span className="font-bold mr-1">
                          Improved Accuracy:
                        </span>{" "}
                        There will be no manual configuration and pricing errors
                        in the sales quotes, thanks to the automated quoting
                        process and approval workflows.
                      </p>
                      <p>
                        <span className="font-bold mr-1">
                          {" "}
                          Shortened Sales Cycles:
                        </span>
                        Leverage the built-in quote automation capabilities of
                        Salesforce CPQ and excellently configure complex product
                        bundles and seamless sales cycle.
                      </p>
                      <p className="font-bold ">
                        <span className="font-bold mr-1">
                          Effortless Customer Acquisitions:
                        </span>{" "}
                        Benefit from easy and effective customer acquisition
                        with Salesforce Commerce Cloud implementation services,
                        turning prospects into brand-loyal customers.
                      </p>
                      <p className="font-bold">
                        <span className="font-bold mr-1">
                          Enhanced Customer Experience:
                        </span>
                        Our Salesforce CPQ consulting services help you create
                        personalized sales quotes with special offers &amp;
                        discounts. It improves customer retention rate.
                      </p>
                      <p>
                        <span className="font-bold mr-2">Max Sales:</span>{" "}
                        Personalize Our Salesforce CPQ consulting services help
                        you create personalized sales quotes with special offers
                        &amp; discounts. It improves customer retention rate.
                      </p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} className=" w-full md:mt-16">
                <Card>
                  <img
                    alt="Top Benefits of Salesforce CPQ Implementation Services"
                    src="./community7.png"
                    className="h-full w-[90%] object-cover md:ml-16"
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
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
