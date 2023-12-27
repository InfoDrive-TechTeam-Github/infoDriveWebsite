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
      title: width <= mobileBreakpoint ? "" : "Proven Expertise",
      card: "Proven Expertise",

      cardDetailedText:
        "Benefit from our extensive experience and proven track record in Salesforce Lightning and AppExchange development. Our team of certified professionals brings a wealth of knowledge to deliver tailored solutions.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Dedicated Consultants",
      card: "Dedicated Consultants",
      cardDetailedText:
        "Access a team of highly dedicated and certified Salesforce consultants who are committed to understanding your unique business requirements. We collaborate closely with you to ensure that our solutions align seamlessly with your goals.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Comprehensive Service Offering",
      card: "Comprehensive Service Offering",

      cardDetailedText:
        "Enjoy a wide range of services, from Salesforce Lightning customization and development to AppExchange app consulting, development, security review, compliance, and ongoing technical support. We offer end-to-end solutions to meet all your Salesforce needs.",
    },
    {
      title:
        width <= mobileBreakpoint
          ? ""
          : "Certified ISV AppExchange Development",
      card: "Certified ISV AppExchange Development",

      cardDetailedText:
        "As a certified Salesforce ISV AppExchange Development company, we have the expertise to design, develop, and manage applications on the AppExchange platform, ensuring compliance and security.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Successful Security Reviews",
      card: "Successful Security Reviews",

      cardDetailedText:
        "Trust in our 100% success rate in clearing security reviews for our clients. We prioritize the security and compliance of yourapplications, saving you time, money, and keeping you ahead in the competitive landscape.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Proactive App Management:",
      card: "Proactive App Management",

      cardDetailedText:
        "Rely on our experienced team for effective AppExchange app management. We help you list, handle, and update your applications on the AppExchange platform, ensuring they stay up-to-date with advanced features.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Tailored Consultation",
      card: "Tailored Consultation",

      cardDetailedText:
        "Explore the best consulting services to transform your ideas into successful applications. We guide you through the entire process, ensuring your product&#39;s success in the real world.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "Cost-Effective Solutions",
      card: "Cost-Effective Solutions",

      cardDetailedText:
        "Experience cost-effective AppExchange development services, from implementation to customization. We optimize your investment while delivering high-quality, innovative solutions.",
    },
    {
      title: width <= mobileBreakpoint ? "" : "24/7 Technical Support",
      card: "24/7 Technical Support",

      cardDetailedText:
        "Access our round-the-clock technical support services. Our dedicated team is here to handle all your queries, providing prompt and effective solutions to keep your applications running smoothly.",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Salesforce Sales Cloud Implementation, Customization, and Consulting
          Services in Singapore, Malaysia, and India - InfoDrive Solutions
        </title>
        <meta
          name="description"
          content="Transform your sales process with InfoDrive Solutions' Salesforce Sales Cloud services. Our experts provide implementation, automation, customization, and consulting services globally."
        />
        <meta
          name="keywords"
          content="Salesforce Sales Cloud Implementation, Salesforce Sales Cloud automation, Salesforce Sales Cloud customization, Salesforce Sales Cloud Consulting Services, Salesforce Sales Cloud Consulting Services in Singapore, Salesforce Sales Cloud for small business, Salesforce Sales Cloud Consulting Services in Malaysia, Salesforce Sales Cloud Consulting Services in India, Salesforce Sales Cloud implementation services in Singapore, Salesforce Sales Cloud for Malaysian businesses, Salesforce Sales Cloud implementation services in India"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/sales-and-service-cloud.html"
        />
        <meta
          property="og:title"
          content=" Salesforce Sales Cloud Implementation, Customization, and Consulting
          Services in Singapore, Malaysia, and India - InfoDrive Solutions"
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

      <section className="newsectionbox text-white relative ocean pb-0 h-screen ">
        <div className="container md:max-w-5xl  lg:max-w-7xl mx-auto h-full w-full p5 absolute top-16 md:top-40 md:left-10   lg:px-8">
          <div className="md:flex md:items-center md:gap-2 ">
            <h1
              className="text-justify "
              style={{
                zIndex: 5,
                width: "50%",
              }}
            >
              Boost Your Business Efficiency and Drive Innovation with InfoDrive
              Solutions: Harness the Expertise of Our Salesforce Lightning
              Consulting and AppExchange App Development Services.
            </h1>
            <div>
              <div className="md:w-52 relative w-20 mt-10 md:mt-0 -ml-10">
                <Lottie
                  animationData={cloufLottie}
                  loop={true}
                  className="w-full"
                />
                <h2 className="absolute md:-right-56 -right-60 top-0 text-xs md:text-base">
                  Saleforce App Exchange
                </h2>
              </div>
              <div className="md:w-32 w-20 relative mt-0 md:-ml-10 -ml-5">
                <Lottie animationData={Light} loop={true} className=" w-full" />
                <h2 className="absolute md:-right-56 -right-64 top-0 text-xs md:text-base">
                  Saleforce Lightning Service
                </h2>
              </div>
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
      </section>

      <section
        className={`newsectionbox   h-full salesandservice relative  mt-16`}
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
        <div className="container mx-auto md:px-8  py-16 p5">
          <div className="md:flex items-center justify-between">
            <div className="left md:w-[40%] rounded-md overflow-hidden">
              <img
                alt="app exchange"
                src="./appExchange1.jpeg"
                className="w-full object-cover"
                cl
              />
            </div>
            <div className="right md:w-1/2 mt-5 md:mt-0">
              <h2>
                Tailored Excellence: Crafting Unique Solutions with Salesforce
                Lightning Development and Migration Expertise.
              </h2>
              <h5>
                InfoDrive Solutions, a Pinnacle in Salesforce Lightning
                Consulting. Enlist our industry-leading, seasoned, and certified
                Salesforce Lightning Consultants and Experts. Whether on
                desktops or mobile devices, we excel in crafting exceptional
                Salesforce apps with features that deliver precise and
                comprehensive insights into your business performance. We
                streamline your processes for intuitive workflows, drawing on
                the established expertise of our Salesforce Lightning
                Professionals. Tailoring and deploying Lightning solutions
                specific to your business needs, we drive productivity and
                optimize operations with finesse.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* advantage */}
      <section className={`newsectionbox   h-full -mt-10 space-y-5`}>
        <div className="container md:px-8 mx-auto h-full w-full p5 ">
          <h2 style={{ zIndex: 5 }} className="md:text-justify">
            Experience seamless transition with our top-notch Salesforce
            Lightning services, facilitating the smooth migration of data from
            Salesforce Classic to the Lightning platform. Our adept Salesforce
            Lightning consultants possess extensive knowledge and expertise in
            executing highly successful Salesforce Classic to Lightning
            migration services.
          </h2>
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto mt-5">
            Saleforce Lightning advantage
          </span>
          <div className="grid md:grid-cols-2 grid-col-1 gap-3 mt-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center ">
                Salesforce Lightning App Development
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify ">
                At InfoDrive, our proficient Salesforce consultants specialize
                in the efficient creation of customized, Lightning-ready
                applications—both managed and unmanaged.
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
                Salesforce Lightning Consulting
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify ">
                Our expert Salesforce Lightning consultants meticulously design,
                strategize, and implement Lightning solutions to ensure maximum
                return on investment.
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
                Salesforce Lightning Migration
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Entrust your data migration from classic to Lightning to our
                dedicated team of Salesforce Lightning consultants, guaranteeing
                data security throughout the process.
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
                Salesforce Lightning Ready Customization
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Experience lightning cross-platform customization services that
                deliver engaging user experiences across various devices.
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
                Salesforce Lightning Component Development
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Utilizing a reusable Lightning component framework, we adeptly
                construct Single Page Responsive Apps tailored for both desktop
                and mobile platforms.
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
                Salesforce Lightning Community Portals
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Connect with numerous active users and foster business expansion
                through our Lightning Community Portal services.
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
                Lightning Connect
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Harness the power of seamless app cloud integration with our
                Lightning Connect services, efficiently managing data in
                external applications.
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
                Lightning Process Automation
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 text-justify">
                Partner with us for all your Salesforce automation needs. We
                formulate comprehensive automation plans and configure the
                Salesforce Lightning process builder for optimal efficiency.
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
              alt="app exchange"
              src="./appExchange2.jpeg"
              className="w-full object-cover"
              cl
            />
          </div>

          <div className="right ">
            <span className="block text-red-600 font-bold text-center mt-5">
              Unlock unparalleled advantages for your business with Salesforce
              Lightnings intelligent customizations, seamless workflows, and
              updated UI and layouts. This powerful platform offers a myriad of
              features designed to elevate your operations and deliver superior
              outcomes
            </span>
            <ul
              style={{ listStyleType: "circle" }}
              className="grid grid-col md:grid-cols-2 gap-10 mt-5"
            >
              <li>
                <span className="font-bold">
                  Lightning Component Framework:
                </span>
                Building robust and reusable components for efficient app
                development.
              </li>
              <li>
                <span className="font-bold">Lightning App Builder:</span>
                Empowering users to create custom applications with ease.
              </li>
              <li>
                <span className="font-bold">Impeccable Design:</span>
                Ensuring a flawless user experience with faultless design
                principles.
              </li>
              <li>
                <span className="font-bold">Lightning Snap-ins:</span>
                Enhancing customer engagement with Lightning-powered chat.
              </li>
              <li>
                <span className="font-bold">Faster Turnaround Time:</span>
                Accelerating development cycles for quicker project delivery.
              </li>
              <li>
                <span className="font-bold">Lightning Voice:</span>
                Enabling seamless communication within the Salesforce platform.
              </li>
              <li>
                <span className="font-bold">Lightning Connect:</span>
                Facilitating seamless integration with external data sources.
              </li>
              <li>
                <span className="font-bold">Lightning Process Builder:</span>
                Automating business processes for increased efficiency.
              </li>
              <li>
                <span className="font-bold">Easy Connection with Outlook:</span>
                Streamlining communication and data management.
              </li>
              <li>
                <span className="font-bold">Lightning Experience:</span>
                Providing a modern and intuitive user interface.
              </li>
              <li>
                <span className="font-bold">Reduced App Development Time:</span>
                Enhancing productivity through quicker app development.
              </li>
              <li>
                <span className="font-bold">
                  Salesforce Lightning Configuration:
                </span>
                Tailoring Lightning to suit your unique business requirements.
              </li>
              <li>
                <span className="font-bold">
                  Excellent Compatibility Feature:
                </span>
                Ensuring smooth integration with various systems.
              </li>
              <li>
                <span className="font-bold">
                  Lightning Dashboards and Reports:
                </span>
                Gaining insights with visually appealing and informative
                dashboards.
              </li>
              <li>
                <span className="font-bold">
                  AppExchange App Lightning Conversion:
                </span>
                Effortlessly converting apps for seamless integration into the
                AppExchange ecosystem.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* feature of service cloud */}
      {/* advantage */}
      <section className={`newsectionbox  relative h-full -mt-10 space-y-5`}>
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
        <div className="container mx-auto h-full w-full md:px-8 p5 ">
          <div className="md:flex items-center gap-10 ">
            {/* left */}
            <div className="left space-y-5 md:w-1/2">
              <span className="text-red-600 block font-bold">
                Empower Your Business with Innovation: Explore Cutting- Edge
                Salesforce AppExchange Solutions by InfoDrive
              </span>
              <h5>
                Craft cutting-edge AppExchange applications and devise effective
                go-to-market strategies with InfoDrives expert AppExchange App
                Development services. Secure the expertise of certified
                Salesforce ISV AppExchange Developers by selecting the premier
                Salesforce App Development Agency worldwide. Your pathway to
                innovation begins now.
              </h5>
              <h5>
                <span className="text-red-600  font-bold mx-1">
                  At InfoDrive Solutions,
                </span>
                we offer an extensive range of{" "}
                <span className="text-red-600  font-bold mx-1">
                  {" "}
                  Salesforce AppExchange development services,
                </span>{" "}
                backed by a team of highly experienced and certified Salesforce
                Consultants. Our dedicated experts are always ready to assist
                you in creating and publishing your standalone apps on this
                platform. Leveraging powerful APIs, Lightning components, and
                mobile-ready tools, we guide you through the entire process of
                AppExchange product design, development, review, and
                publication.
              </h5>
            </div>
            {/* right */}
            <div className="right h-96 rounded-md overflow-hidden md:ml-20 ">
              <img src="./appExchange3.png" className="h-full " />
            </div>
          </div>
          <h5>
            As your trusted Salesforce custom app development company and a
            Salesforce Consulting Partner, we provide promising solutions that
            propel your business to new heights. From implementation to
            customization, our cost-effective AppExchange Development Services
            ensure optimal results.
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
      </section>

      {/* new slides-show */}
      {/* advantage */}
      <section className={`newsectionbox   h-full -mt-10 space-y-5`}>
        <div className="container md:px-8 mx-auto    h-full w-full  p5">
          <span className=" font-bold text-center block text-red-600 text-lg w-full mx-auto ">
            App Exchange Advantage
          </span>
          <div className="grid md:grid-cols-2 grid-col-1 gap-3 mt-5">
            {/* first */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center ">
                AppExchange App Consulting
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify ">
                Have an idea to discuss? Our top-notch consulting services will
                transform your concept into a real-world application, ensuring
                your products success.
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
                AppExchange App Development
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify ">
                As a Salesforce-approved AppExchange Partner, we boast 50 plus
                live applications featured on AppExchange, all designed and
                developed for our satisfied customers.
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
                AppExchange Security Review
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                With a 100% success rate in clearing security reviews, we have
                accomplished 50 plus security reviews on the first attempt,
                saving our customers time, money, and keeping them ahead of
                their competitors.
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
                AppExchange App Compliance
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Our certified developers conduct thorough security reviews for
                every app before its launch on the AppExchange platform,
                adhering to all security protocols to simplify the security
                review process.
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
                AppExchange App Management
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Proficient in delivering AppExchange app management services,
                our Salesforce professionals assist you in listing and handling
                the app on the AppExchange platform, updating it with advanced
                features, and more.
              </p>
            </motion.div>
            {/* 6 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
              transition={{ duration: 1.5 }}
              className="bg-white p-6 rounded-md shadow-md mb-5"
            >
              <h3 className="font-bold text-red-600 text-sm tracking-wide text-center">
                Salesforce AppExchange Technical Support
              </h3>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Recognizing that app maintenance is an ongoing process, our 24x7
                AppExchange technical support services are here to address every
                query, from simple to complex, providing the best solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* timeline  */}
      <section className="newsectionbox">
        <div className="container mx-auto md:px-8 -mt-24 p5">
          <div className="relative self-start ml-10 md:flex items-center justify-between ">
            <h2 className="  w-1/2 md:mt-20 ">
              <span className="text-red-600 text-3xl font-black mr-1">Why</span>
              Choose
              <span className="text-red-600  font-black ml-1">
                InfoDrive’s Solutions
              </span>{" "}
              for Your Salesforce Lightning and Salesforce AppExchange Needs?
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
          <h5 className="text-justify">
            <span className="font-bold text-black mx-1 ">
              Choose InfoDrive Solutions for a partner that goes beyond
              development, offering a holistic approach to Salesforce Lightning
              and AppExchange solutions tailored to your business
              success.Client-Centric Approach:
            </span>
            InfoDrive Solutions places a high priority on a client-centric
            approach, understanding the unique challenges and goals of each
            business.
          </h5>
        </div>
      </section>
      <section
        className={`sectionBox aboutUsBox3 salesCloudService  -mt-10 pt-10 relative`}
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
            Unleash Business Potential: Align with InfoDrive Solutions: Your
            Reliable Authority in Lightning Solutions AppExchange Services
          </h2>

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
                      Meet our seasoned team of{" "}
                      <span className="text-red-600 font-bold">Certified</span>{" "}
                      Salesforce consultants at{" "}
                      <span className="text-red-600 font-bold">
                        InfoDrive Solutions,
                      </span>{" "}
                      where experience meets expertise to help businesses
                      optimize their{" "}
                      <span className="text-red-600 font-bold">
                        Lightning and AppExchange services,
                      </span>{" "}
                      fostering growth in these vital areas. We specialize in
                      the implementation and consulting of Salesforce Lightning
                      Solutions AppExchange Services, globally acknowledged as
                      the leading customer relationship management (CRM)
                      platform.
                      <br />
                      <br />
                      <span className="text-red-600 font-bold">
                        {" "}
                        At InfoDrive Solutions,
                      </span>{" "}
                      our core commitment is guiding businesses through the
                      strategic utilization of{" "}
                      <span className="text-red-600 font-bold mx-1">
                        Salesforce Lightning Solutions
                      </span>
                      and
                      <span className="text-red-600 font-bold mx-1">
                        AppExchange Services.
                      </span>{" "}
                      Our focus is clear – to enhance and automate business
                      processes, unlocking untapped growth potential. With our
                      Certified Salesforce Consultants by your side, consider us
                      your dedicated partners on the journey to success through
                      these powerful CRM solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} className=" w-full md:mt-16">
                <Card>
                  <img
                    alt="saleforce"
                    src="./appExchange5.png"
                    className="h-full w-[70%] object-cover ml-20"
                  />
                  <div className="flex items-center  gap-2 w-full md:ml-20 ml-10">
                    <img
                      src="./appc5.png"
                      alt="app exchange"
                      className="object-cover md:w-14 w-8"
                    />

                    <img
                      src="./appc6.png"
                      alt="sale certificate1"
                      className="object-cover md:w-14 w-8"
                    />

                    <img
                      src="./appc1.png"
                      alt="sale certificate5"
                      className="object-cover md:w-14 w-8"
                    />

                    <img
                      src="./appc2.png"
                      alt="sale certificate4"
                      className="object-cover md:w-14 w-8"
                    />

                    <img
                      src="./appc3.png"
                      alt="sale certificate2"
                      className="object-cover md:w-14 w-8"
                    />

                    <img
                      src="./appc4.png"
                      alt="sale certificate3"
                      className="object-cover md:w-14 w-8"
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
