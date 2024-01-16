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
          src="images/odoo.jpg"
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
              Seamless Integration with Odoo ERP:
              <br />
              Odoo Marketing Cloud effortlessly integrates <br />
              with the Odoo ERP system,
              <br /> providing a complete view of customers
              <br />
              enabling real-time data-driven marketing efforts.
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
      </div>

      <section className={`p5  bg-black  text-white md:h-24 p-5`}>
        <div className="flex md:flex-row flex-col justify-between items-center max-w-5xl mx-auto">
          <div className="content">
            <h2 className="font-bold text-3xl">120+</h2>
            <p>Project Deliverd</p>
          </div>
          <hr className="border md:h-10 w-full md:w-0 my-5" />
          <div className="content">
            <h2 className="font-bold text-3xl">80+</h2>
            <p>Countries Catered</p>
          </div>
          <hr className="border md:h-10 w-full md:w-0 my-5" />

          <div className="content">
            <h2 className="font-bold text-3xl">100+</h2>
            <p>Odoo ERP Consultants</p>
          </div>
          <hr className="border md:h-10 w-full md:w-0 my-5" />

          <div className="content">
            <h2 className="font-bold text-3xl">90%</h2>
            <p>Client Retention Rate</p>
          </div>
        </div>
      </section>

      <section className={`p5 `}>
        <div className="max-w-5xl container mx-auto border-red-600 md:flex items-center  justify-between">
          <div className="left basis-1/2 ">
            <img src="images/odoo1.jpg" alt="Picture of the author" />
          </div>
          <div className="right flex flex-col gap-5 basis-1/2">
            <h2 className="font-extrabold text-3xl">
              Welcome to InfoDrive Solutions
            </h2>
            <h3 className="font-bold">Your Official Odoo Partner!</h3>
            <p>
              At InfoDrive Solutions, we take pride in being an official Odoo
              partner, bringing you powerful and comprehensive ERP solutions. As
              your dedicated Odoo partner, we are committed to providing
              seamless integration, efficient workflows, and reliable support
              throughout your Odoo journey. From CRM and sales to inventory
              management and accounting, our expertise covers every aspect of
              Odoo's versatile capabilities.
              <br />
            </p>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5`}>
        <Typography gutterBottom variant="h2" className="mb0" component="div">
          Discover Odoo: Your Complete ERP Solution!
        </Typography>
        <br />
        <br />
        <div className="openSource  grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">All-in-One Efficiency:</h2>
              <p>
                Manage CRM, sales, inventory, accounting, and more seamlessly in
                one integrated platform.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaCloudscale size={100} />
            <div>
              <h2 className="font-bold">Flexibility & Scalability</h2>
              <p>
                Easily customize and scale Odoo to match your business needs and
                growth.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaCreativeCommonsBy size={100} />
            <div>
              <h2 className="font-bold">User-Friendly Interface</h2>
              <p>
                Intuitive design ensures quick adoption and boosts productivity.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaRegMoneyBillAlt size={100} />
            <div>
              <h2 className="font-bold">Cost-Effective</h2>
              <p>
                Open-source nature eliminates hefty licensing fees, saving your
                budget.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5 ">
            {/* icons */}
            <FaShareAlt size={100} className="" />
            <div>
              <h2 className="font-bold">Real-Time Insights:</h2>
              <p>
                Gain valuable business insights instantly with robust reporting
                and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className="developmentService bg-slate-800 text-white py-20 p5">
        <div className="max-w-5xl container mx-auto ">
          <div className="flex md:flex-row flex-col justify-between gap-24 ">
            <div className="left self-center">
              <div className="font-extrabold text-5xl">
                <p className=""> Our</p>

                <p className="my-3"> Odoo </p>
                <p> Services</p>
              </div>
              <div className=" star shadow-xl mt-10 bg-white/5 rounded-lg p-5">
                <div className="top flex gap-2 items-center">
                  <div className="flex items-center text-yellow-600 ">
                    <FaStar size={32} />
                    <FaStar size={32} />
                    <FaStar size={32} />
                    <FaStar size={32} />
                    <FaStarHalfAlt size={32} />
                  </div>
                  <p className="text-3xl">4.5</p>
                </div>
              </div>
            </div>
            <div className="right flex flex-col gap-10">
              <div className="box">
                <div className="flex items-center gap-2 mb-3">
                  <FaCloudsmith size={35} />
                  <h2 className="font-bold">Odoo Implementation:</h2>
                </div>
                <p>
                  We'll help you set up and configure Odoo to match your
                  business needs, ensuring a seamless transition to this
                  powerful ERP platform.
                </p>
              </div>
              <div className="box">
                <div className="flex items-center gap-2 mb-3">
                  <FaCloudscale size={35} />
                  <h2 className="font-bold">Odoo Customization:</h2>
                </div>
                <p>
                  Our team can customize Odoo modules and features to cater to
                  your specific requirements, enhancing your ERP experience.
                </p>
              </div>
              <div className="box">
                <div className="flex items-center gap-2 mb-3">
                  <FaConnectdevelop size={35} />
                  <h2 className="font-bold">Odoo Integration:</h2>
                </div>
                <p>
                  We integrate Odoo with other tools and applications to
                  streamline your operations and improve overall efficiency.
                </p>
              </div>
              <div className="box">
                <div className="flex items-center gap-2 mb-3">
                  <FaHubspot size={35} />
                  <h2 className="font-bold">Odoo Support and Maintenance:</h2>
                </div>
                <p>
                  Count on us for reliable support and maintenance services to
                  keep your Odoo system running smoothly at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5`}>
        <div className="container mx-auto max-w-5xl mt-10">
          <Typography variant="h2" component="div">
            Benefits of Choosing InfoDrive Solutions
          </Typography>

          <div className="flex md:flex-row flex-col justify-between gap-2 py-20 -mt-20">
            <div className="card shadow-xl text-white bg-red-600 p-10 flex flex-col gap-5 items-center">
              <FaBuromobelexperte size={52} />
              <h2 className="font-bold text-xl">Certified Odoo Experts</h2>
              <p>
                Our team comprises certified Odoo experts who have deep
                knowledge and experience in implementing and customizing Odoo
                ERP solutions to suit your unique business requirements.
              </p>
            </div>
            <div className="card shadow-xl text-white bg-red-600 p-10 flex flex-col gap-5 items-center">
              <FaRocketchat size={52} />
              <h2 className="font-bold text-xl">Extensive Experience</h2>
              <p>
                With numerous successful Odoo projects under our belt, we have
                honed our skills in delivering top-notch solutions that drive
                business growth and efficiency.
              </p>
            </div>
            <div className="card shadow-xl text-white bg-red-600 p-10 flex flex-col gap-5 items-center">
              <FaBlackTie size={52} />
              <h2 className="font-bold text-xl">Tailored Solutions</h2>
              <p>
                We understand that every business is unique, and that's why we
                offer personalized Odoo solutions that align perfectly with your
                processes and goals.
              </p>
            </div>
            <div className="card shadow-xl text-white bg-red-600 p-10 flex flex-col gap-5 items-center">
              <FaBity size={52} />
              <h2 className="font-bold text-xl">Seamless Integration</h2>
              <p>
                Our expertise in integrating Odoo with other systems and
                applications ensures smooth data flow and improved collaboration
                across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`sectionBox connectUs backDrop mb0 p5`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Are you ready to take your business to the next level with Odoo ERP?
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
