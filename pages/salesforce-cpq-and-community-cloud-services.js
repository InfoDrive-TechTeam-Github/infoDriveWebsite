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
export default function SalesForceDevelopment() {
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
  }, [width]);

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
        <title>
          Empower Your Business with Salesforce Commerce Cloud and Einstein
          Services
        </title>
        <meta
          name="description"
          content="Transform your online presence with our Salesforce Commerce Cloud and Einstein Services. Elevate your customer experience, drive sales, and harness the power of AI with Infodrive Solutions."
        />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-commerce-cloud-and-einstein-services.html"
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

      <section className="newsectionbox text-white relative  pb-0 h-[450px] w-full ">
        <div className="container md:max-w-5xl  lg:max-w-7xl md:mx-auto h-full w-full p5   lg:px-8">
          <div className="space-y-5 flex md:flex-row flex-col items-center gap-5">
            <h1
              className="text-justify md:w-[40%] w-full"
              style={{
                zIndex: 5,
                width: width <= mobileBreakpoint ? "100%" : "50%",
                width: "50%",
                color: "#148ED9",
              }}
            >
              Simplify your CPQ processes with{" "}
              <span className="text-red-500">
                InfoDrive's Salesforce CPQ services.
              </span>{" "}
              Work flexibly from any location, on any device, enhancing
              productivity and increasing deal-closure chances for your
              organization.
            </h1>
            <div className="md:w-[60%] mx-auto">
              <img
                src="./salesforce-cpq-implementation.jpg"
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
              className="buttOnread   normalCase mt-5"
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
                alt="app exchange"
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
      <section className={`newsectionbox   h-full -mt-40 space-y-5`}>
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
              <img src="./community3.png" alt="" className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* key feature of ligtning */}

      <section
        className={`newsectionbox  h-full salesandservice relative  mt-16`}
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
        <div className="container mx-auto md:px-8 p5 py-16 mt-5  ">
          <span className="block text-red-600 font-bold text-center mt-5">
            Salesforce CPQ Service Offerings
          </span>
          <div className="left md:w-1/2 rounded-md overflow-hidden mx-auto">
            <img
              alt="app exchange"
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
        className={`newsectionbox  h-full salesandservice relative  mt-16`}
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
        <div className="container mx-auto md:px-8 p5  ">
          <span className="block text-red-600 font-bold text-center mt-5">
            Salesforce Community Cloud-Salesforce Communities Development
          </span>
          <div className="left  rounded-md overflow-hidden mx-auto">
            <img
              alt="app exchange"
              src="./community5.png"
              className=" object-contain mt-10 rounded-md md:w-1/2 mx-auto"
            />
            <span className="text-red-600  text-center block whitespace-nowrap text-sm mt-5">
              Connect with people important for your business with Community
              Cloud (Salesforce Experience Cloud)
            </span>
          </div>

          <div className="right mt-10 ">
            <p>
              Create customized Salesforce Communities for effective engagement
              with customers, employees, and partners. Hire certified Salesforce
              Communities Development Consultants today! Formerly known as
              Salesforce Community Cloud, now Salesforce Experience Cloud, its a
              social platform fostering real-time communication among your
              organizations stakeholders. Enable seamless data and image
              sharing. Connect with top Salesforce Experience Cloud experts now.
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
                  Provide Better Customer Service
                </span>
                <p>
                  A community helps customers to find answers for themselves and
                  for other customers as well. Focus on more meaningful complex
                  customer issues with the service agents. Create a rich
                  self-service with the Community Cloud Service.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Engage with Customers
                </span>
                <p>
                  Support customers by accessing data and make purchase
                  decisions. Community Cloud gives a voice to customers. Provide
                  a one-stop-shop for the customers to have more information on
                  your organizational products and services.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Improve Employee Productivity
                </span>
                <p>
                  Harness the power of Community Cloud to create a social,
                  mobile and branded Community for your employees with improved
                  productivity. Provide a personalized experience for each
                  employee and offer a real impact on the employees, with
                  increased satisfaction and retention rates.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Build Communities to Fit into Your Business Ecosystem
                </span>
                <p>
                  Build a community that is crucial for your business ecosystem.
                  The ecosystem consists of suppliers, vendors, agencies, job
                  applicants as well as retail location. Collaborate among the
                  employees, partners and above all your customers.
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
                        <span className="font-bold">Automated Quoting</span> We
                        will help you set custom price templates with dynamic
                        pricing models. It will automate quotes and rapidly
                        generate branded proposals.
                      </p>
                      {/* second */}
                      <p>
                        <span className="font-bold">Improved Accuracy</span>{" "}
                        There will be no manual configuration and pricing errors
                        in the sales quotes, thanks to the automated quoting
                        process and approval workflows.
                      </p>
                      <p>
                        <span className="font-bold">
                          {" "}
                          Shortened Sales Cycles{" "}
                        </span>
                        Leverage the built-in quote automation capabilities of
                        Salesforce CPQ and excellently configure complex product
                        bundles and seamless sales cycle.
                      </p>
                      <p className="font-bold">
                        <span className="font-bold">
                          Effortless Customer Acquisitions:
                        </span>{" "}
                        Benefit from easy and effective customer acquisition
                        with Salesforce Commerce Cloud implementation services,
                        turning prospects into brand-loyal customers.
                      </p>
                      <p className="font-bold">
                        <span className="font-bold">
                          Enhanced Customer Experience
                        </span>{" "}
                        Our Salesforce CPQ consulting services help you create
                        personalized sales quotes with special offers &amp;
                        discounts. It improves customer retention rate.
                      </p>
                      <p>
                        <span className="font-bold">Max Sales</span> Personalize
                        Our Salesforce CPQ consulting services help you create
                        personalized sales quotes with special offers &amp;
                        discounts. It improves customer retention rate.
                      </p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} className=" w-full md:mt-16">
                <Card>
                  <img
                    alt="saleforce"
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

      <section
        className={`newsectionbox aboutUsBox3 salesCloudService  -mt-10 pt-10 relative`}
      >
        <div className=" container mx-auto md:px-8 p5 ">
          <h2
            className="text-center font-bold md:whitespace-nowrap mt-10"
            style={{ color: "#dd3952" }}
          >
            Community Cloud (Experience Cloud) Services
          </h2>
          <p className="mt-5 text-center text-gray-600 ">
            We offer the best Salesforce community cloud consulting services and
            ensure that you leverage all the benefits.
          </p>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} className=" w-full mt-10 ">
                <Card>
                  <img
                    alt="saleforce"
                    src="./community7.jpg"
                    className="h-full   object-cover  rounded-md w-[90%] "
                  />

                  <div className="flex items-center gap-5">
                    <div className="h-24 w-24">
                      <img
                        alt="saleforce"
                        src="./ComC4.png"
                        className="w-full h-full object-cover  rounded-md "
                      />
                    </div>
                    <div className="h-16 w-16">
                      <img
                        alt="saleforce"
                        src="./comC2.png"
                        className=" w-full h-full  rounded-md "
                      />
                    </div>
                    <img
                      alt="saleforce"
                      src="./ComC6.png"
                      className="h-16  w-16 object-cover  rounded-md "
                    />
                    <img
                      alt="saleforce"
                      src="./comC3.png"
                      className="h-16  w-16 object-cover  rounded-md "
                    />
                    <img
                      alt="saleforce"
                      src="./ComC5.png"
                      className="h-20  w-20 object-cover  rounded-md "
                    />
                    <img
                      alt="saleforce"
                      src="./comC1.png"
                      className="h-16  w-16 object-cover  rounded-md "
                    />
                  </div>
                </Card>
              </Grid>
              <Grid item xs={6} className="pr30 ">
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
                        <span className="font-bold">Automated Quoting</span> We
                        will help you set custom price templates with dynamic
                        pricing models. It will automate quotes and rapidly
                        generate branded proposals.
                      </p>
                      {/* second */}
                      <p>
                        <span className="font-bold">Community Creation</span> It
                        will be super easy for businesses to customize their
                        community as per their needs. Customers can also build
                        and escalate myriad support cases. Have easy
                        accessibility.
                      </p>
                      <p>
                        <span className="font-bold">Employee Empowerment</span>
                        Give your team the boost it deserves with our custom
                        Salesforce integration services. Improve its
                        productivity and engagement with internal communities.
                      </p>
                      <p className="font-bold">
                        <span className="font-bold">Partner Sales Growth</span>{" "}
                        Now connection with the resellers, distributors, and
                        partners is so easy, thanks to the community cloud. It
                        will accelerate sales channels resolve channel
                        conflicts.
                      </p>
                      <p className="font-bold">
                        <span className="font-bold">Connected Customers</span>{" "}
                        The easy to build communities enable businesses to
                        deliver services seamlessly. It enables smarter work
                        offers customers a rich self-service experience.
                      </p>
                      <p>
                        <span className="font-bold">Outmatch Service</span> It
                        helps teams close deals, resolve customer cases, and
                        improve the overall business process. Fewer support
                        calls lead to greater customer satisfaction.
                      </p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>

      {/* key feature of ligtning */}

      {/* timeline  */}
      {/* <section className="newsectionbox">
        <div className="container mx-auto md:px-8 -mt-24 p5 py-10">
          <div className="relative self-start ml-10 md:flex items-center justify-between ">
            <h2 className="  w-1/2 md:mt-20 ">
              <span className="text-red-600 text-3xl font-black mr-1">WHY</span>
              Revitalize Your Business with Salesforce Commerce Cloud
              Implementation
            </h2>
            <Lottie animationData={Sale2} loop={true} className=" md:w-1/2" />
          </div>
          <div
            // style={{ width: "100vw" }}
            className="flex relative items-center justify-center md:flex-row flex-col "
          >
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
        </div>
      </section> */}

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
