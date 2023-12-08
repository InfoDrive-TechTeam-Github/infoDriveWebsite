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

import LeadForm from "../components/leadForm";

export default function SalesForceDevelopment() {
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
          href="https://infodrive-solutions.com/sales-cloud.html"
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

      <section className="newsectionbox text-white relative  ocean pb-0 -mt-10 ">
        <div className="container max-w-5xl mx-auto    h-full w-full ">
          <div className=" flex md:flex-row flex-col items-center justify-between">
            <h1 className="text-justify md:w-1/2">
              Elevate Your Sales Process Unleash the Power of Sales Cloud &
              Service Cloud - A Cutting-Edge Business Solution offering a
              unified platform to simplify and manage your sales activities.
            </h1>
            <div className="hero md:w-1/2">
              <img src="./sales12.png" alt="sale and service" className="" />
            </div>
          </div>
          <Button
            href="/contact-us.html"
            className="readmore white normalCase"
            variant="text"
          >
            Let's Talk <ArrowRightAltIcon />
          </Button>
          <nav className="absolute md:-right-10 md:top-52 top-10  pl-2 hidden md:block">
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
        </div>
      </section>

      <section className={`newsectionbox p5 mt-10 h-full`}>
        <div className="container max-w-5xl mx-auto    h-full w-full ">
          <div className="flex md:flex-row flex-col gap-10 items-start justify-between md:gap-20 w-full h-full">
            <div className="left shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 h-full ">
              <img
                className="h-64 w-[80%] border mx-auto -mt-14 shadow-lg rounded-md"
                src="./businessman-with-cloud-icons.jpg"
              />
              <div>
                <Typography
                  gutterBottom
                  variant="h1"
                  component="h1"
                  className="text-center mx-auto mt-5"
                >
                  Salesforce Sales Cloud Services
                </Typography>
                <h5>
                  Salesforce Sales Cloud stands as a potent tool for effectively
                  managing customer interactions and data across the entire
                  customer lifecycle – from lead inception through conversion to
                  retention. Boasting a customizable interface and a robust
                  feature set, Salesforce Sales Cloud can be finely tuned to
                  align with the specific needs of your business. Our service
                  offerings extend to Salesforce Sales Cloud implementation and
                  consulting in Singapore, Malaysia, and India.
                </h5>
              </div>
            </div>
            {/* right */}
            <div className="right shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 ">
              <img
                className="h-64 w-[80%] border mx-auto -mt-14 shadow-lg rounded-md"
                src="./service.jpg"
              />
              <div>
                <Typography
                  gutterBottom
                  variant="h1"
                  component="h1"
                  className="text-center mx-auto mt-5"
                >
                  Salesforce Service Cloud Services
                </Typography>
                <h5>
                  Salesforce Service Cloud, a robust customer service platform,
                  empowers businesses to efficiently manage customer
                  interactions and support inquiries across diverse channels
                  such as phone, email, chat, and social media. Its rich set of
                  tools and features, including case management, knowledge
                  management, and community engagement, equips businesses to
                  deliver personalized, efficient, and consistently exceptional
                  support to their customers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* advantage */}
      {/* <section className={`newsectionbox p5  h-full -mt-10 space-y-5`}>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <h2>Features of Sales Cloud</h2>
        </div>
        <div className="flex justify-center w-full ">
          <img
            alt="advantage sale and service "
            src="./sales 1 3.png"
            className="w-1/2 "
          />
        </div>
      </section> */}
      <section className="hero  text-black  max-w-6xl mx-auto">
        <div
          className="md:flex justify-between items-center"
          style={{ flex: 2 }}
        >
          <div className="right" style={{ flex: 3 }}>
            <div className="relative container mx-auto px-6 flex flex-col space-y-8 ">
              <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
              <div className="relative z-10">
                {/* <motion.img
                  src="https://img.freepik.com/free-vector/gradient-crm-illustration_23-2149379177.jpg?w=740&t=st=1684603989~exp=1684604589~hmac=fe21bbcfd8ab34859ee3c8db1ce74d5f56954b6ce0155e80ccfa729f47e57f82"
                  alt=""
                  className="timeline-img1"
                  animate={{
                    // x: [0, 10, 0], // Animation values for the x-axis
                    rotate: -360,
                    transition: {
                      delay: 1,
                      repeat: Infinity, // Repeat the animation indefinitely
                      repeatType: "loop", // Reverse the animation on each repeat
                      duration: 5, // Duration of each animation cycle
                    },
                  }}
                /> */}
                <div className="timeline-container1">
                  <div className="timeline-pointer" aria-hidden="true"></div>
                  <div className="bg-white p-6 rounded-md shadow-md">
                    <span className="font-bold text-red-600 text-sm tracking-wide">
                      Get to Know Your Customers:
                    </span>
                    <p className="pt-1 text-[#00000099] text-sm leading-6">
                      Salesforce Sales Cloud consolidates customer information,
                      interactions, and transactions, offering your sales team a
                      comprehensive view. This insight helps tailor approaches
                      to better meet customer needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                {/* <motion.img
                  src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041849.jpg?w=996&t=st=1684604186~exp=1684604786~hmac=69b4babd71ec1f29b482eb47ca5ff214259191dea09330dfe60b525f79366243"
                  alt=""
                  className="timeline-img1"
                  animate={{
                    // x: [0, 10, 0], // Animation values for the x-axis
                    rotate: 360,
                    transition: {
                      delay: 1,
                      repeat: Infinity, // Repeat the animation indefinitely
                      repeatType: "loop", // Reverse the animation on each repeat
                      duration: 5, // Duration of each animation cycle
                    },
                  }}
                /> */}
                <div className="timeline-container1 timeline-container-left1">
                  <div
                    class="timeline-pointer timeline-pointer-left"
                    aria-hidden="true"
                  ></div>
                  <div className="bg-white p-6 rounded-md shadow-md">
                    <span className="font-bold text-red-600 text-sm tracking-wide">
                      Boost productivity and efficiency
                    </span>
                    <h1 className="text-xl font-bold pt-1 text-[#0b2653]">
                      Advanced ATS and CRM Features
                    </h1>
                    <p className="pt-1 text-[#00000099] text-sm leading-6">
                      Unlock the full potential of your sales team with our
                      advanced ATS and CRM features. From automated applicant
                      tracking to seamless integration with your existing
                      systems, our solution empowers your team to work smarter
                      and achieve better results.
                    </p>
                  </div>
                </div>
                {/**chatbot */}

                {/**chatbot end*/}
              </div>
              <div className="relative z-10 ">
                {/* <motion.img
                  src="https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038409.jpg?w=996&t=st=1684755663~exp=1684756263~hmac=d0994d271fdf751c1a3d997a803546afc0706a9cf2a150463698880843ae21b0"
                  alt=""
                  className="timeline-img1"
                  animate={{
                    // x: [0, 10, 0], // Animation values for the x-axis
                    rotate: -360,
                    transition: {
                      delay: 1,
                      repeat: Infinity, // Repeat the animation indefinitely
                      repeatType: "loop", // Reverse the animation on each repeat
                      duration: 5, // Duration of each animation cycle
                    },
                  }}
                /> */}
                {/* timeline */}
                <div className="timeline-container1">
                  <div className="timeline-pointer" aria-hidden="true"></div>
                  <div className="bg-white p-6 rounded-md shadow-md mb-5">
                    <span className="font-bold text-red-600 text-sm tracking-wide">
                      Stay organized and informed
                    </span>
                    <h1 className="text-xl font-bold pt-1 text-[#0b2653]">
                      Centralized Data Management
                    </h1>
                    <p className="pt-1 text-[#00000099] text-sm leading-6">
                      With our ATS and CRM solution, you can centralize all your
                      sales and applicant data in one place. From contact
                      details and communication history to application status
                      and performance metrics, our system provides a
                      comprehensive view of your business, enabling you to make
                      data-Dryvn decisions and stay organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices p5`}
      >
        <Typography className="mb0" gutterBottom variant="h2" component="div">
          Our team of consultants can help you <br />
          with every step of the Salesforce Sales <br />
          Cloud implementation process, including:
        </Typography>
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Assessing your business needs and goals
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Before we begin the implementation process, we'll work with
                    you to understand your business needs and goals. This will
                    help us tailor the solution to meet your specific
                    requirements and ensure that it aligns with your overall
                    business strategy.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Setting up your Salesforce account
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Our team will help you set up your Salesforce account and
                    configure it to your specific needs. This includes
                    customizing fields, workflows, and other settings to ensure
                    that the platform is optimized for your business.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Data migration and integration
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    If you're moving from a different CRM platform or have data
                    stored in other systems, we can help you migrate and
                    integrate that data into Salesforce Sales Cloud. This will
                    help ensure that you have a comprehensive view of your
                    customer data and can take full advantage of the platform's
                    features.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Training and support
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Our team will provide training and support to help you and
                    your team get up to speed with Salesforce Sales Cloud. We'll
                    also be available to answer any questions and provide
                    ongoing support as you continue to use the platform.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox aboutUsBox3 salesCloudService p5`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className="pr30">
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Maximize Your Potential with Salesforce Sales Cloud
                    Consulting Services
                  </Typography>
                  <br />
                  <Typography gutterBottom variant="h3" component="div">
                    Our consulting services are designed to help you fully
                    leverage the capabilities of Salesforce Sales Cloud and
                    achieve your business goals.
                  </Typography>

                  <Typography gutterBottom variant="h3" component="div">
                    Our team of experienced consultants can provide a range of
                    services, including strategy and planning to help you
                    develop a roadmap for using Salesforce Sales Cloud to drive
                    business growth and efficiency. We can also assist with
                    customization and optimization to ensure that the platform
                    is tailored to meet the specific needs of your business. In
                    addition to implementation services, we also offer a range
                    of consulting services to help you get the most out of
                    Salesforce Sales Cloud. This includes:
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <img
                  alt="Salesforce Sales Cloud automation"
                  src="images/491c67e4b1055317d0f23ddd3ee7af54-min.jpeg"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Strategy and planning
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Our consultants can help you develop a strategy for using
                    Salesforce Sales Cloud to drive business growth and
                    efficiency. We'll work with you to identify key areas for
                    improvement and develop a plan to achieve your goals.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Customization and optimization
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Salesforce Sales Cloud is highly customizable, and our team
                    can help you optimize the platform to meet your specific
                    needs. This includes customizing fields, workflows, and
                    other settings to ensure that the platform is optimized for
                    your business.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Reporting and analytics
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Salesforce Sales Cloud provides a range of reporting and
                    analytics tools that can help you better understand your
                    customers and sales processes. Our team can help you set up
                    and interpret these reports to gain insights and make
                    data-driven decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Ongoing support and maintenance
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    We offer ongoing support and maintenance to help you get the
                    most out of Salesforce Sales Cloud. This includes answering
                    questions, providing guidance on best practices, and helping
                    you troubleshoot any issues that may arise.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Empower Your Sales Team with Advanced Sales Cloud Solutions
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
