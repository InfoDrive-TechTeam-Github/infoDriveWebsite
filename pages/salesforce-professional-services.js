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
import { FcComboChart } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcSynchronize } from "react-icons/fc";
import LeadForm from "../components/leadForm";
import { FcCollaboration } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcDataRecovery } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";

export default function SalesForceDevelopment() {
  return (
    <div>
      <Head>
        <title>
          Salesforce Consulting Service & Development Partner Company in
          Singapore, Malaysia, and India - InfoDrive Solutions
        </title>
        <meta
          name="description"
          content="InfoDrive Solutions is a leading Salesforce consulting and development partner company offering expert services in Singapore, Malaysia, and India. Partner with us for customized Salesforce solutions."
        />
        <meta
          name="keywords"
          content="Salesforce Consulting Company, Salesforce Development Partner Company, Salesforce Service Provider in Singapore, Salesforce Consulting Company in Singapore, Salesforce Consulting Company in Malaysia, Salesforce Service Provider in Malaysia, Salesforce Consulting Partner in Singapore, Salesforce Consulting Partner in Malaysia, Salesforce Partner Company in Singapore, Salesforce Partner Company in Malaysia, Salesforce Partner Company in India, Professional Salesforce Development services, Salesforce certified consultant"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-development.html"
        />
        <meta
          property="og:title"
          content="Salesforce Consulting Service & Development Partner Company in
          Singapore, Malaysia, and India - InfoDrive Solutions"
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
      {/* <div className="sliderBox">
        <img
          style={{ width: "100%" }}
          src="images/cc13ff8a13c84325124d7b7989be19e8-min.jpeg"
          alt="Salesforce Consulting Service"
        />
        <Box sx={{ flexGrow: 1 }} className="sliderContent salePart md:p-0 p-2">
          <Grid container spacing={0}>
            <Typography gutterBottom variant="h3" component="h1">
              Empower Your Business with Salesforce Professional Services
            </Typography>

            <Typography gutterBottom variant="h1" component="div">
              Our team of certified Salesforce experts has
              <br />
              extensive experience in implementing and
              <br /> customizing Salesforce to meet the specific <br />
              needs of each business.
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
      </div> */}

      <section className="headSaleforce  bg-white text-black relative p-5 min-h-screen">
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
        <div className="container  mx-auto py-20 h-full font-Poppins text-sm text-gray-700 space-y-10 md:flex items-stretch justify-between gap-20">
          <div className="left space-y-7">
            <span className="">
              Dynamic Salesforce Professional Services with
            </span>
            <h2 className="font-semibold text-4xl leading-10">
              Salesforce Consulting Partner
            </h2>
            <div className="grid grid-cols-3 gap-5 ">
              <div>
                <p className="text-[#E13D4B] text-4xl">10+ </p>
                <p className="text-[#565758] text-lg">
                  Salesforce Certified Architect
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] text-4xl">30+ </p>
                <p className="text-[#565758] text-lg">
                  Salesforce Certified Developers
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] text-4xl">10+ </p>
                <p className="text-[#565758] text-lg">
                  Salesforce Administrators
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] text-4xl">10+ </p>
                <p className="text-[#565758] text-lg">
                  Salesforce Commerce Cloud Developers
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] text-4xl">10+ </p>
                <p className="text-[#565758] text-lg">
                  Salesforce Marketing Cloud & Pardot Developers
                </p>
              </div>
              <div>
                <p className="text-[#E13D4B] text-4xl">10+ </p>
                <p className="text-[#565758] text-lg">
                  Salesforce CPQ Developers
                </p>
              </div>
            </div>
            <Button
              href="/contact-us.html"
              className="readmore white normalCase"
              style={{ zIndex: 20 }}
              variant="text"
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
          </div>

          <img
            src="./Salesforce-Service-Cloud.png"
            alt="saleforce"
            className=" object-cover md:h-[500px] md:w-[500px]"
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-5 md:top-0 left-0 right-0 overflow-x-hidden md:h-screen"
        >
          <path
            fill="#0099ff"
            fill-opacity="0.1"
            d="M0,64L30,101.3C60,139,120,213,180,224C240,235,300,181,360,176C420,171,480,213,540,224C600,235,660,213,720,192C780,171,840,149,900,117.3C960,85,1020,43,1080,32C1140,21,1200,43,1260,80C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className={`sectionBox p5`}>
        <div className="container flex items-center justify-between gap-10">
          <img src="./empower.jpg" alt="empowe" className="w-1/2" />
          <div>
            <Typography
              className="w100"
              gutterBottom
              variant="h1"
              component="h1"
            >
              Empower Your Business Evolution through Our Salesforce Development
              Collaboration
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="w100"
            >
              Salesforce stands as a pinnacle in customer relationship
              management (CRM), offering a robust platform that empowers
              businesses to refine and enhance their sales, customer service,
              and marketing endeavors. It centralizes customer data, enabling
              streamlined processes and communication automation. As a
              Salesforce Development Services partner at InfoDrive Solutions, we
              take pride in our proven proficiency in delivering Salesforce
              Development Services partner
            </Typography>
          </div>
        </div>
      </section>

      <section className="saleforcPatner min-h-screen w-full p5">
        <div className="container mx-auto py-20 space-y-7">
          <p className="text-center text-sm text-[#E13D4B] font-semibold">
            InfoDrive Solutions is home to 100+ Salesforce Certified Experts!
          </p>
          <h2 className="text-center md:text-3xl   font-semibold text-xl text-[#565758] pb-10 ">
            Benefits Of Hiring A Salesforce Consulting Partner
          </h2>

          <div className="md:flex items-center justify-between md:px-32 p5 gap-10">
            <img
              src="./saforcePatner.png"
              alt="saleforce patner"
              className="w-1/3"
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 md:mt-0">
              <div className="flex gap-3 items-center">
                <FcComboChart size={42} />
                <p className="text-[#565758] font-normal">
                  Accelerated Implementation
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcSettings size={42} />
                <p className="text-[#565758] font-normal">Custom Solutions</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcAssistant size={42} />
                <p className="text-[#565758] font-normal">Ongoing Support</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcCollaboration size={42} />
                <p className="text-[#565758] font-normal">Strategic Guidance</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcInspection size={42} />
                <p className="text-[#565758] font-normal">
                  Data Migration Expertise
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcOvertime size={42} />
                <p className="text-[#565758] font-normal">
                  Seamless Integration
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcDebt size={42} />
                <p className="text-[#565758] font-normal">User Training</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcDataRecovery size={42} />
                <p className="text-[#565758] font-normal">Scalability</p>
              </div>
              <div className="flex gap-3 items-center">
                <FcFlowChart size={42} />
                <p className="text-[#565758] font-normal">
                  Troubleshooting and Optimization
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FcCurrencyExchange size={42} />
                <p className="text-[#565758] font-normal">Cost-Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificate min-h-screen p5">
        <div className="container mx-auto md:flex items-center justify-between md:py-20  gap-20">
          <div className="left">
            <img src="./salesforce-certifications.jpg" alt="saleforce" />
          </div>
          <div className="right space-y-7 mt-10 md:mt-0">
            <div>
              <p className="text-[#0694CB] text-4xl font-semibold">100+</p>
              <p className="text-[#565758]">Certifications</p>
            </div>
            <div>
              <p className="text-[#0694CB] text-4xl font-semibold">
                4.7/5 Rating
              </p>
              <p className="text-[#565758]">
                On All Salesforce Development Services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`sectionBox saleForcesDevelopmentBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className="androidDevelopment">
            <div className="flex flex-col items-end justify-between flex- px-10 gap-10 ">
              <Grid
                item
                xs={6}
                className="saleForcesDevelopment shadow-md rounded-lg bg-pink-100 "
              >
                <h2>Salesforce Development Partnership Advantages</h2>
                <Typography gutterBottom variant="h5" component="div">
                  Comprehensive Support - Access a diverse array of resources
                  and support from Salesforce, encompassing training, marketing,
                  and technical assistance. Cutting-Edge Expertise - Stay
                  abreast of the latest Salesforce products and technologies,
                  ensuring our clients benefit from the most advanced solutions.
                  Client-Centric Solutions - Leverage our partnership to deliver
                  optimal solutions tailored to meet the specific needs of our
                  clients.
                </Typography>
              </Grid>

              <Grid
                item
                xs={6}
                className="saleForcesDevelopment shadow-md rounded-lg w-full mr-auto"
              >
                <h2>Cutting-Edge Expertise</h2>
                <Typography gutterBottom variant="h5" component="div">
                  Strategic Alliances - Cultivate robust relationships with
                  other leading technology companies, broadening our spectrum of
                  solutions and integrations. Holistic Support - Ensure our
                  clients have access to a comprehensive suite of tools and
                  technologies, fostering their success.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                className="saleForcesDevelopment shadow-md rounded-lg bg-pink-100"
              >
                <h2>Client-Centric Solutions </h2>
                <Typography gutterBottom variant="h5" component="div">
                  Global Presence - Extend our Salesforce development services
                  across Singapore, Malaysia, and India. Certified Developers -
                  Boast a team of experienced and certified Salesforce
                  developers with an in-depth understanding of the platform.
                  Tailored Solutions: Deliver customized Salesforce
                  applications, integrate seamlessly with third-party systems,
                  and implement Salesforce CRM solutions for businesses of all
                  sizes.
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Box>
      </section>

      <section
        className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices p5`}
      >
        <Typography className="mb0" gutterBottom variant="h2" component="div">
          We have a proven track record of <br />
          delivering successful projects for our <br />
          clients and are committed to delivering <br />
          exceptional service and support <br />
          throughout the entire development process.
        </Typography>
        <Typography
          className="white mb30"
          gutterBottom
          variant="h5"
          component="div"
        >
          Our team of experienced Salesforce developers is dedicated to helping
          you get the most out of the platform. We offer a range of Salesforce
          services, including:
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
                    Salesforce consulting
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce consulting services can include helping
                    organizations choose the right Salesforce solution for their
                    needs, configuring and setting up Salesforce, customizing
                    Salesforce to fit the specific needs of the organization,
                    training users on how to use Salesforce effectively, and
                    integrating Salesforce with other business systems and
                    platforms. Our team will work with you to understand your
                    business needs and objectives, and help you choose the best
                    Salesforce solution for your organization.
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
                    Salesforce implementation
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Salesforce implementation is the process of setting up and
                    configuring the Salesforce platform to meet the specific
                    needs of an organization. This includes installing the
                    necessary software and hardware, customizing the platform to
                    fit the organization's unique business processes and
                    requirements, and training users on how to use Salesforce
                    effectively. Our team of experienced Salesforce developers
                    will work with you to understand your business needs and
                    objectives, and help you plan and execute a successful
                    Salesforce implementation.
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
                    Salesforce integration
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce integration can be especially helpful for
                    organizations that use multiple systems and platforms, as it
                    allows them to consolidate their data and create a single
                    source of truth for their customer and business information.
                    We offer Salesforce integration services to help our clients
                    connect Salesforce with their other business systems and
                    platforms. Our team of experienced Salesforce developers can
                    help you plan and execute a successful integration, ensuring
                    that your systems are working together seamlessly and
                    efficiently.
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
                    Salesforce customization
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Salesforce customization is the process of modifying the
                    Salesforce platform to fit the specific needs and
                    requirements of an organization. This can include creating
                    custom objects, fields, and reports, as well as modifying
                    the platform's user interface and workflow. we offer
                    Salesforce customization services to help our clients get
                    the most out of the platform. Our team of experienced
                    Salesforce developers can help you plan and execute a
                    successful customization project, ensuring that your
                    Salesforce solution is tailored to your specific business
                    needs.
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
                    Salesforce support and maintenance
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce support and maintenance is the ongoing process of
                    ensuring that a Salesforce solution is running smoothly and
                    efficiently. This can include troubleshooting issues,
                    applying updates and patches, and providing user support. At
                    InfoDrive Solutions, we offer Salesforce support and
                    maintenance services to help our clients keep their
                    Salesforce solutions running smoothly. Our team of
                    experienced Salesforce professionals is available to help
                    troubleshoot issues, apply updates and patches, and provide
                    user support as needed. We also offer ongoing training and
                    support to help our clients get the most out of the
                    platform.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <br />
      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2 p5`}>
        <Typography gutterBottom variant="h2" className="mb0" component="div">
          We specialize in a wide range of Salesforce products, including:
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Sales Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A CRM solution for sales teams, including tools for lead and
                    opportunity management, forecasting, and account management.
                    Our Salesforce consultants help you automate your sales
                    process resulting in improved sales and an optimized sales
                    pipeline.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Service Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A CRM solution for customer service teams, including tools
                    for case management, knowledge management, and live chat. We
                    help you overcome customer service challenges with our
                    Service Cloud solutions while offering personalized support
                    across multiple channels and devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Marketing Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A marketing automation platform, including tools for email
                    marketing, social media marketing, and marketing analytics.
                    Our team helps you connect with your consumers across
                    multiple channels such as social media, email marketing, and
                    to generate and track leads.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Commerce Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A cloud-based e-commerce platform, including tools for
                    building and managing online stores, processing orders, and
                    handling customer service.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Community Cloud
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A platform for creating and managing online communities,
                    including tools for creating custom portals, forums, and
                    blogs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    AppExchange
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    A marketplace for finding and installing third-party
                    Salesforce apps and integrations.
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
          Your Ideal Salesforce Verified Consulting Partner Is Here!
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
