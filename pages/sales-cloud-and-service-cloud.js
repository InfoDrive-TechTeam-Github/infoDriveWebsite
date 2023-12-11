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
import { Chrono } from "react-chrono";
import Sale from "../public/saleandservice.json";

import LeadForm from "../components/leadForm";
import Lottie from "lottie-react";
import cloufLottie from "../public/new.json";
import Sale2 from "../public/Sale2.json";
export default function SalesForceDevelopment() {
  const items = [
    {
      title: "IN-DEPTH KNOWLEDGE",
      cardTitle: "IN-DEPTH KNOWLEDGE",
      cardDetailedText:
        "From planning to security review assistance, and to final deployment, we are well-versed in all.",
    },
    {
      title: "INDUSTRY EXPERIENCE",
      cardTitle: "INDUSTRY EXPERIENCE",
      cardDetailedText:
        "InfoDrive have a team of highly experienced Salesforce professionals with 13+ years of industry experience in the Salesforce domain",
    },
    {
      title: "SCALABLE SOLUTIONS",
      cardTitle: "SCALABLE SOLUTIONS",
      cardDetailedText:
        "InfoDrive profoundly delivers scalable Sales/Service cloud development services that augments the business growth.",
    },
    {
      title: "FASTER TURNAROUND TIME",
      cardTitle: "FASTER TURNAROUND TIME",
      cardDetailedText:
        "Our Sales/Service cloud implementation services are rapid, and help you keep your business run faster and smoother",
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

      <section className="newsectionbox  text-white relative  ocean pb-0  ">
        <img src="./SandS.jpg" className="w-full object-cover" />

        {/* <Lottie
          animationData={cloufLottie}
          loop={true}
          className="absolute bottom-0 mt-40"
        /> */}
        <div className="container max-w-5xl mx-auto    h-full w-full absolute top-80 px-10">
          <div className=" flex md:flex-row flex-col items-center justify-between gap-10 ">
            <h1
              className="text-justify md:w-1/2 "
              style={{ zIndex: 5, color: "white" }}
            >
              Elevate Your Sales Process Unleash the Power of Sales Cloud &
              Service Cloud - A Cutting-Edge Business Solution offering a
              unified platform to simplify and manage your sales activities.
            </h1>
            {/* <div className="md:w-1/2" style={{ zIndex: 10 }}>
              <img src="./saleforcess-removebg-preview.png" />
            </div> */}
          </div>

          <Button
            href="/contact-us.html"
            className="readmore white normalCase mt-5"
            variant="text"
            style={{ zIndex: 5 }}
          >
            Let's Talk <ArrowRightAltIcon />
          </Button>
        </div>

        {/* <div className="md:top-0 bottom-0 absolute md:-mt-72">
          <Lottie animationData={cloufLottie} loop={true} className="" />
        </div> */}
      </section>

      <section className={`newsectionbox p5  h-full salesandservice `}>
        <div className="container max-w-5xl mx-auto    h-full w-full ">
          <h2 className="mb-20 text-center">
            Salesforce Sales Cloud Services and Service Cloud Services
          </h2>
          <div className="flex md:flex-row flex-col gap-10 items-start justify-between md:gap-20 w-full h-full">
            <div
              className="left shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 h-full "
              style={{ zIndex: 10 }}
            >
              <img
                className="h-64 w-[80%] border mx-auto -mt-14 shadow-lg rounded-md"
                src="./businessman-with-cloud-icons.jpg"
              />
              <Typography
                gutterBottom
                variant="h1"
                component="h1"
                className="text-center mx-auto mt-5"
              >
                Salesforce Sales Cloud Services
              </Typography>
              <div>
                <h5 className="md:text-justify">
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
            <div
              className="right shadow-md shadow-slate-500 rounded-md p-5 md:w-1/2 "
              style={{ zIndex: 10 }}
            >
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
                <h5 className="md:text-justify">
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
      <section className={`newsectionbox p5  h-full -mt-10 space-y-5`}>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <h2 className="text-center">Features of Sales Cloud</h2>

          <div className="flex justify-center w-full ">
            <img
              alt="advantage sale and service "
              src="./sales13.png"
              className="w-[70%]"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-col-1 gap-5 mt-5">
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Get to Know Your Customers:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify ">
                Salesforce Sales Cloud consolidates customer information,
                interactions, and transactions, offering your sales team a
                comprehensive view. This insight helps tailor approaches to
                better meet customer needs.
              </p>
            </div>
            {/* second */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Effortless Lead Management
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify ">
                Excelling in lead management, the platform aids in tracking and
                prioritizing leads. With features like lead scoring and
                automated workflows, your team can focus on promising
                opportunities, boosting conversion rates.
              </p>
            </div>
            {/* third */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Tailored to Your Needs
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                The highly customizable interface of Salesforce Sales Cloud
                allows businesses to adapt the platform to specific
                requirements. This flexibility ensures seamless alignment with
                unique sales processes.
              </p>
            </div>
            {/* 4 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Time-Saving Workflow Automation:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Standout features include automating repetitive tasks, saving
                time, and reducing errors. This empowers your sales team to
                concentrate on high-value activities.
              </p>
            </div>
            {/* 5 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Stay Agile with Mobile Accessibility:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Robust mobile capabilities enable your sales team to access
                crucial information on the go, fostering agility and
                responsiveness in todays fast-paced business environment.
              </p>
            </div>
            {/* 6 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Real-time Insights with Analytics
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Salesforce Sales Cloud provides powerful analytics and reporting
                tools, offering real- time insights into sales performance. This
                data-driven approach facilitates informed decision-making and
                strategy refinement.
              </p>
            </div>
            {/* 7 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Seamless Integration for Efficiency:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                The platform seamlessly integrates with third-party
                applications, ensuring a unified ecosystem that connects sales
                with other business functions, enhancing collaboration and
                efficiency.
              </p>
            </div>
            {/* 8 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Versatile Communication Channels:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Supporting communication across various channels, including
                email, chat, and social media, the platform allows your sales
                team to engage with leads and clients in preferred channels,
                building stronger relationships.
              </p>
            </div>
            {/* 9*/}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Grow at Your Pace with Scalability:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Whether your business is small or enterprise-level, Salesforce
                Sales Cloud scales to accommodate growth, adapting to evolving
                business needs and expanding sales operations.
              </p>
            </div>
            {/* 10*/}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Stay Current with Updates:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                As a leading CRM platform, Salesforce regularly introduces
                updates and innovations, staying ahead of industry trends. This
                ensures your business benefits from the latest technologies and
                features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* feature of service cloud */}
      {/* advantage */}
      <section className={`newsectionbox p5  h-full -mt-10 space-y-5`}>
        <div className="container max-w-5xl mx-auto    h-full w-full  ">
          <h2 className="text-center">Features of Service Cloud</h2>

          <div className="flex justify-center w-full ">
            <img
              alt="advantage sale and service "
              src="./sale14.png"
              className=" "
            />
          </div>
          <div className="grid md:grid-cols-2 grid-col-1 gap-5 mt-5">
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Comprehensive Customer Insights
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Service Cloud offers a unified platform to consolidate customer
                information, interactions, and service history. This 360-degree
                view empowers your support team to provide personalized and
                efficient assistance.
              </p>
            </div>
            {/* second */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Streamlined Case Resolution:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Excel in case management with automated workflows and ticketing
                systems. Service Cloud enables your team to seamlessly track and
                resolve customer issues, enhancing the resolution process.
              </p>
            </div>
            {/* third */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Efficient Knowledge Sharing:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Equip your support agents with robust knowledge management
                tools. Service Cloud facilitates easy access and sharing of
                information, ensuring consistent and accurate responses to
                customer inquiries.
              </p>
            </div>
            {/* 4 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Versatile Multi-Channel Support:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Communicate across phone, email, chat, and social media. Service
                Cloud enables your team to offer assistance where customers feel
                most comfortable.
              </p>
            </div>
            {/* 5 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Empower Customers with Self-Service:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Service Cloud provides self-service options like knowledge bases
                and online portals. Empower customers to find answers
                independently, reducing the workload on your support team.
              </p>
            </div>
            {/* 6 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Responsive Mobile Support:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Address customer issues on-the-go with Service Cloud&#39;s
                robust mobile capabilities. Enhance responsiveness and ensure
                timely resolution of service requests.
              </p>
            </div>
            {/* 7 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Automation for Streamlined Processes:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Service Clouds automation tools handle repetitive tasks
                efficiently. This frees up time for support agents to focus on
                resolving complex issues.
              </p>
            </div>
            {/* 8 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Insights through Analytics:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Gain powerful insights into support performance with Service
                Cloud analytics and reporting tools. This data-driven approach
                facilitates continuous improvement in service delivery.
              </p>
            </div>
            {/* 9 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Unified Ecosystem through Integration:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Seamlessly integrate with other Salesforce Clouds and
                third-party applications. Service Cloud ensures a cohesive
                ecosystem, enhancing collaboration across departments and
                providing a holistic view of customer interactions.
              </p>
            </div>
            {/* 10 */}
            <div className="bg-white p-6 rounded-md shadow-md mb-5">
              <span className="font-bold text-red-600 text-sm tracking-wide">
                Scalable Support Operations:
              </span>

              <p className="pt-1 text-[#00000099] text-sm leading-6 md:text-justify">
                Whether small or enterprise-level, Service Cloud scales to
                accommodate growing customer support operations. It adapts to
                evolving business needs and increasing service demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* timeline  */}
      <div
        style={{ width: "100vw" }}
        className="flex items-center justify-center md:flex-row flex-col "
      >
        <div className="newsectionbox self-start ml-10 md:w-1/2 ">
          <h2>
            Why Choose InfoDrive’s Salesforce Sales Service Cloud Implementation
            Services?
          </h2>
          <Lottie animationData={Sale2} loop={true} className="mt-20" />
        </div>
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
        />
      </div>

      <section
        className={`sectionBox aboutUsBox3 salesCloudService p5 -mt-10 pt-10`}
      >
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          className="text-center"
        >
          Empowering Growth, Optimizing Sales: Your Journey with Salesforce
          Excellence
        </Typography>

        <h3 className="text-[#dd3952] text-sm font-bold text-center">
          InfoDrive Solutions, Your Trusted Partner for Salesforce Sales Cloud &
          Service Cloud Implementation and Consulting
        </h3>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className="pr30">
              <Card>
                <CardContent>
                  {/* <Typography gutterBottom variant="h2" component="h2">
                    Maximize Your Potential with Salesforce Sales Cloud
                    Consulting Services
                  </Typography> */}
                  <br />
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    className="md:text-justify"
                  >
                    InfoDrive team of certified Salesforce consultants brings
                    substantial experience to the table, aiding businesses in
                    these regions to streamline their sales processes and foster
                    growth through the utilization of Salesforce Sales Cloud
                    Salesforce Service Cloud.
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    className="md:text-justify"
                  >
                    At InfoDrive Solutions, our core focus revolves around the
                    implementation and consulting of Salesforce Sales Cloud
                    Service Cloud, recognized globally as the premier customer
                    relationship management (CRM) platform. Trust our certified
                    Salesforce consultants to guide your business in optimizing
                    sales processes and unlocking growth potential through
                    Salesforce Sales Cloud.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Lottie animationData={Sale} loop={true} />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <div className="-mt-20">
        <LeadForm />
      </div>

      <Footer />
    </div>
  );
}
