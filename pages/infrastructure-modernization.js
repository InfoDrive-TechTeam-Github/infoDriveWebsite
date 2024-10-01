import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LeadForm from "../components/leadForm";
import Head from "next/head";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function InfrastructureModernization() {
    return (
        <div>
            <Head>
                <title>
                    Infrastructure Modernization Services | InfoDrive Solutions - Optimizing IT Infrastructure
                </title>
                <meta
                    name="description"
                    content="InfoDrive Solutions provides infrastructure modernization services to optimize your IT environment, enhancing digital enablement, optimization, and transformation."
                />
                <meta
                    name="keywords"
                    content="Infrastructure modernization services, IT optimization, End-User Computing services, VDI, Cloud desktops, Data security, Application streaming, Digital transformation"
                />
                <link
                    rel="canonical"
                    href="https://infodrive-solutions.com/infrastructure-modernization.html"
                />
                <meta
                    property="og:title"
                    content="Infrastructure Modernization Services | InfoDrive Solutions"
                />
                <meta
                    property="og:description"
                    content="Modernize your IT infrastructure with InfoDrive Solutions. Our services support your digital transformation by optimizing IT operations, end-user computing, and security."
                />
                <meta
                    property="og:image"
                    content="https://example.com/infrastructure-modernization-banner.jpg"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            {/* Hero Section */}
            <div className="sliderBox">
                <img
                    style={{ width: "100%" }}
                    src="images/pexels-thisisengineering-3862132.jpg"
                    alt="Infrastructure Modernization"
                />
                <Box sx={{ flexGrow: 1 }} className="sliderContent">
                    <Grid container spacing={0}>
                        <Typography gutterBottom variant="h1" component="div">
                            Modernize Your IT Infrastructure <br />
                            for a Smarter Business Future
                        </Typography>
                        <Button
                            href="/contact-us.html"
                            className="readmore white normalCase mt15"
                            variant="text"
                        >
                            Let's Talk <ArrowRightAltIcon />
                        </Button>
                    </Grid>
                </Box>
            </div>

            {/* Introduction Section */}
            <section className="px-6 py-16 text-center bg-gray-50">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Optimizing Your IT Environment for Future Growth
                </h2>
                <p className="mb-8 text-lg md:text-xl">
                    InfoDrive Solutions offers comprehensive infrastructure modernization services, focusing on enabling digital transformation, boosting productivity, and enhancing security.
                </p>
                <img
                    className="w-3/4 mx-auto mb-8 md:w-1/2"
                    src="images/Modernization-Process-v2.png"
                    alt="Infrastructure Modernization Overview"
                />
            </section>

            {/* End-User Computing Services */}
            <section className="px-6 py-16 bg-white">
                <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
                    Empower Your Workforce with End-User Computing (EUC) Services
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Increased Productivity */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Increased Productivity</h3>
                        <p className="text-lg">
                            Enable employees to work securely from any location, on any device, with easy access to essential tools.
                        </p>
                    </div>
                    {/* Improved Security */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Improved Security</h3>
                        <p className="text-lg">
                            Centralized data management reduces security risks, ensuring better compliance and control.
                        </p>
                    </div>
                    {/* Reduced Costs */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Reduced Costs</h3>
                        <p className="text-lg">
                            Optimize costs by minimizing hardware purchases and maintenance with cloud-based solutions.
                        </p>
                    </div>
                    {/* Greater Scalability */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Greater Scalability</h3>
                        <p className="text-lg">
                            Easily scale your IT environment to accommodate business growth and evolving needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* EUC Services Offered Section */}
            <section className="px-6 py-16 bg-gray-50">
                <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
                    Our End-User Computing Services
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* VDI */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Virtual Desktop Infrastructure (VDI)</h3>
                        <p className="text-lg">
                            Provide employees with secure virtual desktops for remote access to business applications.
                        </p>
                        {/* <img className="w-full mt-4" src="images/vdi-service.jpg" alt="VDI" /> */}
                    </div>
                    {/* Cloud Desktops */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Cloud Desktops</h3>
                        <p className="text-lg">
                            Deploy cloud desktops for a flexible, cost-effective computing solution.
                        </p>
                        {/* <img className="w-full mt-4" src="images/cloud-desktops-service.jpg" alt="Cloud Desktops" /> */}
                    </div>
                    {/* IAM */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Identity & Access Management</h3>
                        <p className="text-lg">
                            Manage user identities and access to applications securely with a robust policy framework.
                        </p>
                    </div>
                    {/* Application Streaming */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">Application Streaming</h3>
                        <p className="text-lg">
                            Stream applications securely to any device, improving accessibility and productivity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="px-6 py-16 text-center bg-white">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Our Tailored Approach to IT Modernization
                </h2>
                <p className="mb-8 text-lg md:text-xl">
                    We focus on understanding your unique business requirements, crafting personalized solutions for optimal IT modernization. From infrastructure design to deployment, we deliver results that meet your digital goals.
                </p>
                {/* <img
                    className="w-3/4 mx-auto md:w-1/2"
                    src="images/infrastructure-strategy.jpg"
                    alt="Our Approach"
                /> */}
            </section>

            {/* Contact Section */}
            <section className={`sectionBox connectUs backDrop mb0 p5`}>
                <Typography
                    gutterBottom
                    variant="h3"
                    className="white pb15 pt15 poppin"
                    component="div"
                >
                    Contact Us to Explore Our Infrastructure Modernization Solutions
                </Typography>
                <Button
                    href="/contact-us.html"
                    className="bgRed white pl15 pr15 poppin upperCase"
                >
                    Connect with Our Experts
                </Button>
            </section>

            {/* Lead Form */}
            <LeadForm />
            <Footer />
        </div>
    );
}
