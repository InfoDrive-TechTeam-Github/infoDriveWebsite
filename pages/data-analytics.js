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

export default function DataAnalytics() {
    return (
        <div>
            <Head>
                <title>
                    Data & Analytics Services | InfoDrive Solutions - Data Strategy,
                    Integration, and Advanced Analytics
                </title>

                <meta
                    name="description"
                    content="InfoDrive Solutions offers Data & Analytics services that include data strategy, integration, governance, and advanced analytics to help businesses make informed decisions and drive growth."
                />
                <meta
                    name="keywords"
                    content="Data strategy consulting, Data integration services, Business intelligence solutions, Predictive analytics services, Big data processing, Cloud analytics, Master data management, Descriptive analytics, Prescriptive analytics"
                />
                <link
                    rel="canonical"
                    href="https://infodrive-solutions.com/data-analytics-services.html"
                />
                <meta
                    property="og:title"
                    content="Data & Analytics Services | InfoDrive Solutions"
                />
                <meta
                    property="og:description"
                    content="Harness the power of data with InfoDrive Solutions' comprehensive Data & Analytics services. From data strategy to advanced analytics, we provide actionable insights for your business."
                />
                <meta
                    property="og:image"
                    content="https://example.com/data-analytics-banner.jpg"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            {/* Hero Section */}
            <div className="sliderBox">
                <img
                    style={{ width: "100%" }}
                    src="images/website5.png"
                    alt="Data & Analytics"
                />
                <Box sx={{ flexGrow: 1 }} className="sliderContent">
                    <Grid container spacing={0}>
                        <Typography gutterBottom variant="h1" component="div">
                            Unlock the Power of Data <br />
                            to Drive Business Growth
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
            <section className="py-16 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="mb-8 text-3xl font-bold text-center lg:text-4xl">
                        Data & Analytics: Empowering Your Business
                    </h2>
                    <p className="mb-8 text-lg text-center">
                        In today's fast-paced world, harnessing data is crucial for success. InfoDrive
                        Solutions provides end-to-end Data & Analytics services that give you a
                        competitive edge through data strategy, integration, and advanced analytics.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <img
                            src="/images/Data-Strategy-Components-1024x576.png"
                            alt="Data Strategy"
                            className="object-cover w-full rounded-lg shadow-lg h-80"
                        />
                        <img
                            src="/images/Analytical-Dashboard.png"
                            alt="Analytics Dashboard"
                            className="object-cover w-full rounded-lg shadow-lg h-80"
                        />
                    </div>
                </div>
            </section>

            {/* Offering Section */}
            <section className="py-16 bg-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-3xl font-bold text-center lg:text-4xl">
                        Our Offerings Includes               </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Data Strategy & Consulting
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>
                                    <strong>Data Assessment:</strong> Evaluate your data environment
                                    and objectives.
                                </li>
                                <li>
                                    <strong>Roadmap Development:</strong> Plan a strategic data
                                    transformation.
                                </li>
                                <li>
                                    <strong>Data Governance:</strong> Ensure data quality, security,
                                    and compliance.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Data Integration & Management
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>
                                    <strong>Data Integration:</strong> Consolidate data from multiple
                                    sources.
                                </li>
                                <li>
                                    <strong>Data Warehousing:</strong> Scalable storage for large
                                    volumes.
                                </li>
                                <li>
                                    <strong>Master Data Management:</strong> Ensure data consistency
                                    across your organization.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
                        <div>
                            <img
                                src="/images/big-data-processing.jpg"
                                alt="Big Data Processing"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <img
                                src="/images/cloud-analytics.jpg"
                                alt="Cloud Analytics"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Advanced Analytics Section */}
            <section className="py-16 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-3xl font-bold text-center lg:text-4xl">
                        Advanced Analytics & Business Intelligence
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Advanced Analytics
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>
                                    <strong>Descriptive Analytics:</strong> Understand historical
                                    data trends.
                                </li>
                                <li>
                                    <strong>Predictive Analytics:</strong> Forecast future outcomes
                                    using machine learning.
                                </li>
                                <li>
                                    <strong>Prescriptive Analytics:</strong> Optimize operations with
                                    actionable recommendations.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Big Data & Cloud Analytics
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>
                                    <strong>Big Data Processing:</strong> Handle complex, large-scale
                                    data sets efficiently.
                                </li>
                                <li>
                                    <strong>Cloud Analytics:</strong> Leverage the cloud for
                                    flexible, cost-effective analytics.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`sectionBox connectUs backDrop mb0 p5`}>
                <Typography
                    gutterBottom
                    variant="h3"
                    className="white pb15 pt15 poppin"
                    component="div"
                >
                    Contact Us to Explore Our Data & Analytics Solutions
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
