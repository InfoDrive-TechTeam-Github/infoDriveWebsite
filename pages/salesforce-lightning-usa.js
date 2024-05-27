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
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

export default function SalesLightningUSA() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Head>
        <title>
          Salesforce Lightning App Development Services, Features,
          Customization, and Implementation
        </title>
        <meta
          name="description"
          content="Revolutionize your Salesforce experience with InfoDrive Solutions' Lightning App Development Services. Our experts offer customization, implementation, and feature-rich solutions for small businesses in USA."
        />
        <meta
          name="keywords"
          content="Salesforce Lightning App Development Services, Salesforce Lightning for small business, Salesforce Lightning Customization, Salesforce Lightning Features, Salesforce Lightning Implementation, Salesforce Lightning App Development Services in Singapore, Salesforce Lightning App Development Services in United States Salesforce Lightning App Development Services in United States"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-lightning-usa.html"
        />
        <meta
          property="og:title"
          content=" Salesforce Lightning App Development Services, Features,
          Customization, and Implementation"
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
      <div className="sliderBox lightlingSlider">
        <img
          style={{ width: "100%", height: "100%" }}
          src="images/0959e7bad48d4a91f7e112136efad00a-min.jpeg"
          alt="Salesforce Lightning App Development Services"
        />
        <Box sx={{ flexGrow: 1 }} className="sliderContent salePart">
          <Grid container spacing={0}>
            <Typography
              className="hiddenElement"
              gutterBottom
              variant="h3"
              component="div"
            >
              Salesforce LIGHTNING
            </Typography>
            <Typography gutterBottom variant="h1" component="div">
              Transform Your Business Processes <br />
              and Enhance User Experience with <br />
              Salesforce Lightning. Upgrade Now to <br />
              customer experiences, and boost their <br />
              Revolutionize Your Operations!
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

      <section className={`sectionBox p5`}>
        <Typography
          gutterBottom
          variant="h1"
          className="upperCase whitespace-nowrap"
          component="h1"
        >
          Your Trusted Salesforce Lightning App Development Services Provider in
          the USA
        </Typography>

        <Typography className="w100" gutterBottom variant="h5" component="h3">
          Are you looking to enhance your Salesforce experience with custom
          Lightning applications? Look no further! InfoDrive Solutions is your
          trusted partner for Salesforce Lightning app development services in
          the USA. With our expertise in Salesforce Lightning and a track record
          of successful app development projects, we specialize in creating
          innovative and customized solutions that maximize your Salesforce
          investment.
        </Typography>

        <Typography className="w100" gutterBottom variant="h5" component="div">
          At InfoDrive Solutions, we are dedicated to helping our clients
          maximize the benefits of Salesforce Lightning. Our team of certified
          Salesforce consultants has years of experience working with the
          platform, and we are committed to delivering top-quality services to
          our clients. One of the key benefits of Salesforce Lightning is its
          ability to provide a personalized, seamless experience for users. With
          lightning, you can tailor the interface to your specific needs, giving
          you the information and tools, you need to get your job done quickly
          and efficiently.
        </Typography>
      </section>

      <section
        className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices p5`}
      >
        <Typography className="mb0" gutterBottom variant="h2" component="div">
          Another advantage of Lightning is its integration capabilities. With
          lightning, you can easily connect your Salesforce account to other
          systems and platforms, such as CRM software, marketing automation
          tools, and more.
        </Typography>
        <br />

        <Typography
          className="mb0"
          gutterBottom
          variant="body2"
          color="text.secondary"
        >
          This allows you to bring all of your data together in one place,
          giving <br />
          you a complete view of your business and enabling you to make better,{" "}
          <br />
          more informed decisions. In addition to these core features,
          Salesforce Lightning also offers a <br />
          wide range of advanced tools and features that can help your business{" "}
          <br />
          grow and thrive. These include:
        </Typography>
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={3} className>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Salesforce Einstein
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    This artificial intelligence platform uses machine learning
                    to provide insights and predictions that can help you make
                    better business decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Lightning app builder
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    This tool allows you to create custom, interactive apps that
                    can be accessed from any device.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Lightning flow
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    This feature allows you to automate business processes and
                    workflows, saving you time and improving efficiency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Lightning communities
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    With this feature, you can create online communities for
                    your customers, partners, and employees, enabling them to
                    collaborate and share information in real time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox  pb0 p5`}>
        <Typography className="mb0" gutterBottom variant="h2" component="div">
          Our Salesforce Lightning App Development Services:
        </Typography>
        <br />

        <Typography
          className="mb0"
          gutterBottom
          variant="body2"
          color="text.secondary"
        >
          At InfoDrive Solutions, we offer a range of services to help our
          clients get the most out of Salesforce Lightning. These include:
        </Typography>
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={3} className>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    App Ideation and Design
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Our expert developers work closely with you to understand
                    your business goals and challenges. We help you
                    conceptualize and refine your app ideas, ensuring that they
                    align with your objectives. Our design experts create
                    intuitive and visually appealing user interfaces that
                    provide an exceptional user experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Custom App Development
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    We specialize in custom Salesforce Lightning app
                    development. Our developers have expertise in building
                    applications that leverage the power of Lightning to
                    streamline your business processes and enhance productivity.
                    We follow industry best practices and adhere to Salesforce
                    guidelines to deliver secure, scalable, and high-performing
                    applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    Lightning Component Development
                  </Typography>
                  <br />
                  <Typography
                    className="pr30"
                    variant="body2"
                    color="text.secondary"
                  >
                    Salesforce Lightning offers a wide range of reusable
                    components that can be customized and extended to suit your
                    specific business needs. Our developers have deep knowledge
                    and experience in Lightning component development. We can
                    create custom Lightning components that enhance your
                    Salesforce organization and provide a seamless user
                    experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="mb0"
                    component="div"
                  >
                    App Testing and Quality Assurance
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    We understand the importance of delivering bug-free and
                    reliable applications. Our rigorous testing and quality
                    assurance processes ensure that your app functions
                    flawlessly across different devices, browsers, and operating
                    systems. We conduct comprehensive testing to identify and
                    address any issues, guaranteeing a seamless user experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <br />

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Ready to Supercharge Your Salesforce Experience with Custom Lightning
          Apps?
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
