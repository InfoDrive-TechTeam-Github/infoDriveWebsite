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

      <section className="newsectionbox text-white relative  pb-0 md:h-[600px] h-[800px] w-full bg-[#48BDE8]">
        <div className="container md:max-w-5xl  lg:max-w-7xl mx-auto h-full w-full p5 absolute top-16 md:top-40 md:left-10   lg:px-8">
          <div className="md:flex md:items-center md:gap-10 md:px-5 ">
            <span
              className="md:text-justify block font-bold md:w-1/2 w-full"
              style={{
                fontFamily: "Poppins",
                fontSize: "23px",
                lineHeight: "33px",
                color: "white",
                zIndex: 5,
              }}
            >
              Fueling Business Efficiency, Sparking Innovation: Supercharge lead
              generation, elevate conversion rates, and tailor customer services
              with the Expertise of InfoDrive Solutions. Let's Elevate Your
              Enterprise Together using Salesforce Commerce Cloud Services.
            </span>
            <div className="md:w-[40%] mt-5 md:mt-0">
              <img src="./commerce2.jpg" alt="saleforce commerce cloud" />
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
                background: "rgb(219 39 119)",
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
          <div className="md:flex items-center justify-between">
            <motion.div
              className="right md:w-1/2 mt-5 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className=" font-bold text-center  text-red-600 text-lg w-full mx-auto mt-5 block">
                Salesforce Commerce Cloud Services
              </span>
              <span className="md:text-justify block">
                In the era of online shopping and growing eCommerce, Salesforce
                Commerce Cloud integration is vital. InfoDrives Services, a
                leading Salesforce Commerce Cloud consulting company, brings
                extensive domain experience and expertise to guide eCommerce
                businesses. We enhance leads, boost conversions, and empower
                effective customer service.
                <br /> <br />
                InfoDrive Solutions services fortify your business, providing a
                personalized, optimized, and seamless buying experience. With
                the necessary resources and expertise, InfoDrives offers
                scalable commerce cloud solutions aligning with customer
                expectations. Optimize engagements and streamline conversions
                for your business growth. Choose InfoDrives Services to unlock
                the full potential of commerce cloud implementation and
                integration.
              </span>
            </motion.div>
            <motion.div
              className="left md:w-[40%] rounded-md overflow-hidden z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                alt="Salesforce Commerce Cloud Services"
                src="./c2.jpeg"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* advantage */}
      <section className={`newsectionbox   h-full md:-mt-10 space-y-5 -mt-36`}>
        <div className="container md:px-8 mx-auto h-full w-full p5 ">
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto mt-5">
            Empowering Businesses through Our B2B & B2C Salesforce Commerce
            Cloud Solutions
          </span>
          <div className="md:flex md:items-center justify-between py-10">
            <div className="md:w-[60%]">
              <p>
                Guiding Your Business Growth with Salesforce Commerce Cloud
                Expertise
              </p>
              <p>
                Our team of{" "}
                <span className="text-red-600 font-bold">Certified</span>{" "}
                Salesforce professionals is dedicated to supporting you
                throughout the entire journey of implementing{" "}
                <span className="text-red-600 font-bold">Commerce Cloud.</span>{" "}
                We provide top-notch, results-driven consulting services
                tailored to meet your unique business needs.
              </p>
            </div>
            <div className="right">
              <img
                src="./c3.png"
                alt="B2B & B2C Salesforce Commerce Cloud Solutions"
                className="w-full"
              />
            </div>
          </div>
          {/* new slide */}
          <div className="grid md:grid-cols-2 grid-col-1 gap-3 mt-5">
            {/* first */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center ">
                Seamless Integration for Expanded Reach
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify ">
                At InfoDrive, our commerce cloud experts seamlessly integrate
                your product catalogue with major online retailers like eBay and
                Amazon, enabling your business to sell through third-party
                channels and reach a broader audience.
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
                Efficient and Goal-Oriented Implementation
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify ">
                With expertise across various industries and business scales, we
                specialize in delivering goal-oriented Salesforce Commerce Cloud
                implementations. Our services ensure a smooth path toward
                achieving your business goals.
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
                Enhanced B2C Commerce Cloud Experience
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Connect with your customers at every touchpoint by enhancing the
                efficiency of your online store. We introduce additional
                features such as Commerce Cloud order management and endless
                aisle to elevate the shopping experience.
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
                Boosting Revenue and Engagement with B2B Commerce Cloud
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Our Salesforce B2B Commerce Cloud services are designed to
                increase online revenue, engage untapped customer bases, meet
                industry needs, and enhance conversion rates through a
                streamlined purchasing process.
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
                Effortless Migration with Commerce Cloud Experts
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Navigating the migration process is easy with our experts. We
                ensure accuracy and transparency, making the transfer from
                legacy systems to the new Commerce Cloud system a smooth
                experience.
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
                Tailored Solutions through Commerce Cloud Customization
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Deliver a seamless and secure online shopping experience with
                our fully custom and adaptable Salesforce Commerce Cloud
                solutions. Our customization is aligned with your specific
                business requirements.
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
                Comprehensive Managed Services for Sustained Success
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Our wide range of managed services covers defect fixing,
                Salesforce patching, deployment support, UI changes, code
                review, and analysis of logs, ensuring the continuous
                optimization and performance of your Commerce Cloud.
              </p>
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
          <div className="left md:w-1/2 rounded-md overflow-hidden mx-auto">
            <img
              alt="Salesforce Einstein Analytics Cloud Consulting Solutions"
              src="./c4.png"
              className="w-full object-cover mt-10 rounded-md"
              cl
            />
          </div>

          <div className="right ">
            <span className="block text-red-600 font-bold text-center mt-5">
              Salesforce Einstein Analytics Cloud Consulting Solutions
            </span>
            <ul
              style={{ listStyleType: "circle" }}
              className="grid grid-col md:grid-cols-2 gap-10 mt-5"
            >
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Community Cloud Einstein
                </span>
                Leverage Salesforce Communities to build brand awareness, engage
                customers, and establish brand authority. Provide personalized
                newsfeeds, automate escalations, and enhance consumer
                experiences.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Einstein Analytics
                </span>
                Explore a cloud-based platform for interactive data views with
                easy-to-use dashboards. Extract, transform, and customize
                applications for streamlined business operations, enabling data
                access from any device, anywhere, anytime.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  IoT Cloud Einstein
                </span>
                Seamlessly manage devices across platforms, staying connected
                with your audience. Enhance brand interaction and productivity
                through Salesforce IoT Cloud Einstein solutions.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Commerce Cloud Einstein
                </span>
                Empower your business with store planning and product
                recommendations, boosting cross-sells and upsells. Maximize the
                potential of Salesforce Commerce Cloud Einstein to grow your
                business.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Service Cloud Einstein
                </span>
                Elevate service team performance and productivity quickly. Our
                certified Service Cloud Einstein professionals redefine customer
                retention and engagement strategies for your business.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-bold text-red-600">
                  Einstein Discovery
                </span>
                Enabling seamless communication within the Salesforce
                platform.Identify, customize, and implement Einstein Discovery
                for actionable predictions and insights. Our Salesforce Einstein
                Analytics Cloud Consultants tailor solutions to your
                success-driven business requirements.{" "}
              </motion.li>
            </ul>
          </div>
        </div>
      </section>

      {/* timeline  */}
      <section className="newsectionbox">
        <div className="container mx-auto md:px-8 -mt-24 p5">
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
        <div className=" container mx-auto md:px-8 p5 ">
          <h2
            className="text-center font-bold md:whitespace-nowrap "
            style={{ color: "#dd3952" }}
          >
            WHY InfoDrive Solutions for Salesforce Commerce Cloud & Einstein
            Services?
          </h2>
          <p className="mt-5 text-center text-gray-600 ">
            InfoDrive benefits for the Salesforce Commerce Cloud & Einstein
            services help you drive innovation to your sales, marketing,
            customer services, smart decisions and commerce cloud strategy
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
                        <span className="font-bold">
                          Tailored Solutions for Your Business
                        </span>{" "}
                        InfoDrive crafts innovative business models to meet your
                        unique needs, ensuring adaptability to the dynamic
                        market.
                      </p>
                      {/* second */}
                      <p>
                        <span className="font-bold">
                          Increase Revenue Opportunities:
                        </span>{" "}
                        Optimize your business processes with our commerce cloud
                        services to tap into untapped markets and empower your
                        sales team with accurate insights, boosting online
                        revenue.
                      </p>
                      <p>
                        <span className="font-bold">
                          {" "}
                          Enhanced Customer Engagement:{" "}
                        </span>
                        Our solutions empower your service team to be available
                        24/7, addressing customer queries in real-time through
                        data integration that tracks sales and conversions.
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
                          Innovation and Scalability:
                        </span>{" "}
                        Salesforce Commerce Cloud brings innovation and
                        scalability to your business, allowing you to focus on
                        building mobile-first apps with accessible development
                        frameworks, APIs, and cutting-edge technology.
                      </p>
                      <p>
                        <span className="font-bold">
                          AI-Driven Business Prosperity:
                        </span>{" "}
                        Personalize your customers shopping experience with
                        type-ahead suggestions and reduced searches using
                        Salesforce Commerce Clouds AI-generated keywords,
                        enhancing the overall customer experience.
                      </p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} className=" w-full md:mt-16">
                <Card>
                  <img
                    alt="saleforce"
                    src="./c5.jpg"
                    className="h-full w-[90%] object-cover ml-16 mt-20"
                  />
                  <div className="flex items-center  gap-2 w-full ml-5 mt-20 ">
                    <img
                      src="./c6.png"
                      alt="app exchange"
                      className="object-cover md:w-20 w-8"
                    />

                    <img
                      src="./c7.png"
                      alt="sale certificate1"
                      className="object-cover md:w-20 w-8"
                    />

                    <img
                      src="./c8.png"
                      alt="sale certificate5"
                      className="object-cover md:w-20 w-8"
                    />

                    <img
                      src="./c9.png"
                      alt="sale certificate4"
                      className="object-cover md:w-20 w-8"
                    />

                    <img
                      src="./c10.png"
                      alt="sale certificate2"
                      className="object-cover md:w-20 w-8"
                    />

                    <img
                      src="./c11.png"
                      alt="sale certificate3"
                      className="object-cover md:w-20 w-8"
                    />
                  </div>
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
