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

import { FaBuffer } from "react-icons/fa";
export default function SalesForceDevelopment() {
  return (
    <div>
      <Head>
        <title>
          Salesforce Marketing Cloud Implementation and Consulting Services in
          Singapore, Malaysia
        </title>
        <meta
          name="description"
          content="Transform your marketing strategy with InfoDrive Solutions' Salesforce Marketing Cloud services. Our experts offer consultation, implementation, and customization solutions for businesses in Singapore, Malaysia, India, and ASEAN."
        />
        <meta
          name="keywords"
          content="Salesforce Marketing Cloud Implementation, Salesforce Marketing Cloud Consulting Services, Salesforce Marketing Cloud Consulting Services in Singapore, Salesforce Marketing Cloud Consulting Services in Malaysia, Salesforce Marketing Cloud benefits, Salesforce Marketing Cloud Automation, Salesforce Marketing Cloud integrations, Salesforce Marketing Cloud Customization, Salesforce Marketing Cloud for Small business, Salesforce Marketing Cloud Consulting Services in India, Salesforce Marketing Cloud for ASEAN businesses, Salesforce Marketing Cloud customization in India"
        />
        <link
          rel="canonical"
          href=" https://infodrive-solutions.com/marketing-cloud.html"
        />

        <meta
          property="og:title"
          content=" Salesforce Marketing Cloud Implementation and Consulting Services in
          Singapore, Malaysia"
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
          src="images/odoo.jpeg"
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
              Boost Your Marketing Success with
              <br />
              Salesforce Marketing Cloud. <br />
              InfoDrive Solutions helps you leverage <br />
              its powerful features for targeted
              <br /> omnichannel campaigns and increased conversions
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
              Odoo Development Company
            </h2>
            <h3 className="font-bold">
              Your One-Stop Odoo Development Solution!
            </h3>
            <p>
              Big ideas require big courage to achieve them. As an Odoo
              Development Company, Ksolves recognize the need of all the
              businesses out there. Expand your business with our unparalleled
              Odoo services. We have a team of highly trained Odoo specialists
              who help us build, deploy, and design ERP systems that assist our
              customers.
              <br />
              <br />
              Achieve your long-term goals with our finest Odoo Development
              services. Consult us now!
            </p>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5`}>
        <Typography gutterBottom variant="h2" className="mb0" component="div">
          Unleash Your Business’s Growth Potential
        </Typography>
        <br />
        <br />
        <div className="openSource  grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">Open-Source</h2>
              <p>
                Odoo is an OpenSource platform as its source code is available
                to everyone. The Open development process allows a business to
                evolve and improve continuously.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">Open-Source</h2>
              <p>
                Odoo is an OpenSource platform as its source code is available
                to everyone. The Open development process allows a business to
                evolve and improve continuously.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">Open-Source</h2>
              <p>
                Odoo is an OpenSource platform as its source code is available
                to everyone. The Open development process allows a business to
                evolve and improve continuously.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">Open-Source</h2>
              <p>
                Odoo is an OpenSource platform as its source code is available
                to everyone. The Open development process allows a business to
                evolve and improve continuously.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">Open-Source</h2>
              <p>
                Odoo is an OpenSource platform as its source code is available
                to everyone. The Open development process allows a business to
                evolve and improve continuously.
              </p>
            </div>
          </div>
          <div className="content flex gap-10 border p-5">
            {/* icons */}
            <FaBuffer size={100} />
            <div>
              <h2 className="font-bold">Open-Source</h2>
              <p>
                Odoo is an OpenSource platform as its source code is available
                to everyone. The Open development process allows a business to
                evolve and improve continuously.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className={`sectionBox connectUs backDrop mb0 p5`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Elevate Your Marketing Strategy with Salesforce Marketing Cloud
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
