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
import start from "../public/getredy.json";
import Head from "next/head";

import LeadForm from "../components/leadForm";

import {
  FaBity,
  FaBlackTie,
  FaBuffer,
  FaBuromobelexperte,
  FaCloudscale,
  FaCloudsmith,
  FaConnectdevelop,
  FaCreativeCommonsBy,
  FaHubspot,
  FaRegMoneyBillAlt,
  FaRocketchat,
  FaSearch,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { FcAssistant, FcCollect, FcEnteringHeavenAlive } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
export default function SalesForceDevelopment() {
  return (
    <div>
      <Head>
        <title>
          Odoo Development Partner Company: Expert Implementation and Consulting
          Services in Singapore & Malaysia, and India
        </title>
        <meta
          name="description"
          content="Looking for a high-end Odoo Development Company  in Singapore & Malaysia, and India? InfoDrive Solutions is a Leading Odoo Gold Partner, providing unmatchable ERP solutions. Contact us today! "
        />
        <meta
          name="keywords"
          content="Odoo Development Company in Singapore, Odoo Development Company in Malaysia, Odoo Development Partner Company"
        />
        <link
          rel="canonical"
          href=" https://infodrive-solutions.com/odoo-development-company.html"
        />

        <meta
          property="og:title"
          content="Revolutionize Your Business with Odoo: Expert Implementation and Consulting Services in Singapore & Malaysia"
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
      <div className="sliderBox marketingSlider">
        <img
          style={{ width: "100%" }}
          src="images/partners.jpg"
          alt="Salesforce Marketing Cloud Implementation"
        />
        <Box sx={{ flexGrow: 1 }} className="sliderContent salePart">
          <Grid container spacing={0}>
            <Typography
              className="hiddenElement "
              gutterBottom
              variant="h3"
              component="div"
            >
              test
            </Typography>

            <Typography gutterBottom variant="h1" component="div">
              At InfoDrive Solutions, we believe in the
              <br /> power of collaboration. By partnering with industry
              leaders,
              <br /> we're able to offer our clients cutting-edge
              <br /> solutions and unparalleled expertise. Seamless
            </Typography>
            <Button
              href="/contact-us.html"
              className="readmore white normalCase -mt-5 ml-5"
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
      </div>

      <section className={`p5 newsectionbox`}>
        <h2 className="text-center ">
          Our Partners: Driving Success Through Collaboration
        </h2>
        <div className="max-w-5xl container mx-auto border-red-600 md:flex items-center  justify-between mt-10 ">
          <motion.div
            className="left "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="images/saleforceP.jpg"
              alt="Picture of the author"
              className="h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="right flex flex-col gap-5 w-full "
          >
            <h2 className="font-extrabold text-2xl md:whitespace-nowrap text-black">
              Salesforce: Transforming Customer Relationships
            </h2>
            {/* <h3 className="font-bold">Your Official Odoo Partner!</h3> */}
            <p className="text-start md:text-justify">
              InfoDrive Solutions is proud to be a Salesforce partner, enabling
              us to deliver world-class customer relationship management (CRM)
              solutions that drive meaningful interactions and foster lasting
              relationships. Salesforce's cloud-based platform empowers
              businesses to connect with customers, automate processes, and gain
              valuable insights to drive sales and enhance customer
              satisfaction. With our team of certified Salesforce consultants,
              we're committed to helping our clients leverage the full potential
              of the Salesforce ecosystem, from implementation and customization
              to training and support.
              <br />
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`p5 newsectionbox -mt-14 md:mt-0`}>
        <div className="max-w-5xl container mx-auto border-red-600 md:flex items-center  justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="right flex flex-col gap-5 md:w-[70%] "
          >
            <h2 className="font-extrabold text-2xl md:whitespace-nowrap">
              Odoo: Revolutionizing Business Management
            </h2>
            {/* <h3 className="font-bold">Your Official Odoo Partner!</h3> */}
            <p className="text-start md:text-justify mr-5">
              As a proud partner of Odoo, the leading provider of open-source
              business management software, we're equipped to help businesses of
              all sizes streamline their operations and drive growth. With
              Odoo's comprehensive suite of applications for CRM, accounting,
              inventory management, and more, we empower our clients to optimize
              their processes and maximize efficiency. Our certified Odoo
              consultants possess the knowledge and experience to implement and
              customize Odoo solutions tailored to your business requirements,
              ensuring a seamless transition and ongoing support.
              <br />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="left basis-1/2 "
          >
            <img
              src="images/odoop.png"
              alt="Picture of the author"
              className=""
            />
          </motion.div>
        </div>
      </section>

      <section className={`p5  newsectionbox -mt-14 md:mt-0`}>
        <div className="max-w-5xl container mx-auto border-red-600 md:flex items-center justify-between md:gap-5">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="right flex flex-col gap-5 basis-1/2 md:mt-5"
          >
            <h2 className="font-extrabold text-2xl md:whitespace-nowrap">
              OneSignal: Engaging Audiences with Push Notifications
            </h2>
            {/* <h3 className="font-bold">Your Official Odoo Partner!</h3> */}
            <p className="text-start md:text-justify" style={{ zIndex: 1 }}>
              As a trusted partner of OneSignal, the leading customer engagement
              platform for push notifications, we enable businesses to reach
              their audiences with targeted, personalized messages that drive
              engagement and retention. OneSignal's powerful platform provides
              businesses with the tools they need to deliver timely and relevant
              notifications across web and mobile devices, driving conversions
              and increasing user loyalty. Our expertise in integrating and
              optimizing OneSignal's solution ensures that our clients achieve
              maximum impact with their push notification campaigns, delivering
              tangible results and driving business growth.
            </p>
          </motion.div>
          <motion.div
            className="left md:basis-1/2 md:order-first order-last -mt-14 md:mt-0"
            style={{ zIndex: 1 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="images/OneS.jpg" alt="Picture of the author" />
          </motion.div>
        </div>
      </section>

      <section
        className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5 md:mt-20`}
      >
        <Typography gutterBottom variant="h2" className="mb0" component="div">
          Why Partner with InfoDrive Solutions?
        </Typography>
        <br />
        <br />
        <div className="openSource  grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="content shadow-sm rounded-md md:flex gap-5 border p-5">
            {/* icons */}
            <FcEnteringHeavenAlive size={100} />
            <div className="md:w-2/3">
              <h2 className="font-bold">Expertise</h2>
              <p>
                Our team of seasoned professionals possesses extensive
                experience and expertise in implementing and customizing
                solutions from our partner ecosystem.
              </p>
            </div>
          </div>
          <div className="content md:flex gap-5 border p-5 rounded-md shadow-sm">
            {/* icons */}
            <FcCollect size={100} />

            <div className="md:w-2/3">
              <h2 className="font-bold">Innovation</h2>
              <p>
                By staying at the forefront of technology trends and
                advancements, we're able to offer innovative solutions that help
                our clients stay ahead of the competition.
              </p>
            </div>
          </div>
          <div className="content  shadow-sm rounded-md md:flex gap-5 border p-5">
            {/* icons */}
            <FcEngineering size={90} />
            <div className="md:w-2/3">
              <h2 className="font-bold">Customization</h2>
              <p>
                We understand that every business is unique, which is why we
                tailor our solutions to meet the specific needs and goals of
                each client.
              </p>
            </div>
          </div>
          <div className="content md:flex gap-5 shadow-sm rounded-md border p-5">
            {/* icons */}
            <FcAssistant size={90} />
            <div className="md:w-2/3">
              <h2 className="font-bold">Support</h2>
              <p>
                Our commitment to client success doesn't end with
                implementation. We provide ongoing support and guidance to
                ensure our clients derive maximum value from their investments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* get start today */}
      <section className={`newsectionbox  p5  `}>
        <div className="max-w-5xl container mx-auto border-red-600 ">
          {" "}
          <div className="flex items-center ">
            <h2>Get Started Today</h2>
            <Lottie animationData={start} loop={true} className=" w-32" />
          </div>
          <p>
            Ready to unlock the full potential of your business with our trusted
            partners? Contact us today to schedule a consultation and discover
            how InfoDrive Solutions can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className={`sectionBox connectUs backDrop mb0 p5`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Ready to unlock the full potential of your business with our trusted
          partners?
        </Typography>
        <Button
          href="/contact-us.html"
          className="bgRed white pl15 pr15 poppin upperCase"
        >
          Connect with Our Expert
        </Button>
      </section>
      <LeadForm />
      <Footer />
    </div>
  );
}
