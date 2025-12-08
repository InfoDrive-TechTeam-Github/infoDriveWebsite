import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import utilStyles from '../styles/utils.module.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Link from '@mui/material/Link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Head from 'next/head';
import LeadForm from 'components/leadForm';
import { FcApproval } from 'react-icons/fc';
import {
  BsBoxes,
  BsBuildingGear,
  BsCardChecklist,
  BsLayoutTextSidebarReverse,
} from 'react-icons/bs';
import { FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

function crm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <ScheduleCallButton text="Schedule a Call" onClick={handleOpen} />
      <CallScheduleModal open={open} handleClose={handleClose} setOpen={setOpen} />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='https://img.freepik.com/free-photo/old-man-using-laptop_53876-96887.jpg?w=1060&t=st=1684819390~exp=1684819990~hmac=73f5baf4325d441d45d4f8af7b9d9b62117832d2212fec9ea8a23619473e9586'
          alt='IT Solutions Company in Kuala Lumpur'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h1' component='div'>
              We are a world of people. <br /> We believe in the future. <br />{' '}
              We believe technology brings us <br />
              together and makes our lives better
            </Typography>
            <Button
              href='/contact-us.html'
              className='readmore white'
              variant='text'
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className='socical-network'>
              <List>
                <ListItem>
                  <ListItemButton
                    component='a'
                    href='https://www.facebook.com/InfoDrivesolutions/'
                  >
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component='a'
                    href='https://in.linkedin.com/company/infodrive-solutions/'
                  >
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component='a'
                    href='https://www.instagram.com/infodrivesolutions/'
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
      <section
        className={`sectionBox applicationDevelopmentBox bg-gray-100 p5`}
      >
        <Typography
          className='w100 red'
          gutterBottom
          variant='h1'
          component='h1'
        >
          Loan Management System (LMS)
        </Typography>
        <Typography className='w100' gutterBottom variant='h5' component='div'>
          Our Loan Management System is a flexible, API-first Loan Management System designed to support fast-growing lending businesses. From loan creation to collections and recoveries, everything runs on one controlled, configurable platform.
          <br />
          <br />
          Here’s the thing. Lending operations break when systems are rigid. LMS solves that by giving you full control over products, borrowers, collections, and integrations without locking you into heavy customization.
          <br />
        </Typography>
      </section>
      <section className="py-20 bg-white"> <div className="container mx-auto max-w-6xl"> <h2 className="text-3xl font-bold text-center mb-12"> Here are our Products Core Capabilities </h2>
        <div className="grid md:grid-cols-2 gap-10">

        {/* Loan Creation & Management */}
        <div className="shadow-md rounded-xl p-7 bg-gray-50 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-red-600 mb-3"> Loan Creation and Management</h3>
            <p className="text-[#00000099] leading-6">
            Create, manage, and scale loan products without operational friction.
            </p>
            <ul className="list-disc ml-5 mt-3 text-[#00000099] leading-7">
            <li>End-to-end loan lifecycle management</li>
            <li>Drawdowns, disbursements, and contract management</li>
            <li>Automated repayment schedules and due tracking</li>
            <li>Real-time updates on outstanding, dues, and penalties</li>
            </ul>
             <p className="text-[#00000099] leading-6">
              Loan accounts stay accurate, auditable, and always up to date.
            </p>
        </div>

        {/* Loan Product Configuration */}
        <div className="shadow-md rounded-xl p-7 bg-gray-50 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Loan Product Configuration</h3>
            <p className="text-[#00000099] leading-6">
            Design loan products the way your business actually works.
            </p>
            <ul className="list-disc ml-5 mt-3 text-[#00000099] leading-7">
            <li>Interest rates, processing fees, and late fees configurable in seconds</li>
            <li>Immediate deployment of new or updated products</li>
            <li>Product rules managed without code changes</li>
            </ul>
        </div>

        {/* Borrower Management */}
        <div className="shadow-md rounded-xl p-7 bg-gray-50 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Borrower Management</h3>
            <p className="text-[#00000099] leading-6">
            One complete view of every borrower.
            </p>
            <ul className="list-disc ml-5 mt-3 text-[#00000099] leading-7">
            <li>Customer account creation and limit assignment</li>
            <li>Limit enhancement and suspension controls</li>
            <li>Borrower suspension and reactivation</li>
            <li>Full visibility into borrower behavior and exposure</li>
            </ul>
            <p className="text-[#00000099] leading-6">
            All borrower actions can be handled from the back office or via APIs.
            </p>
        </div>

        {/* Collections Management */}
        <div className="shadow-md rounded-xl p-7 bg-gray-50 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Collections and DCA Management</h3>
            <p className="text-[#00000099] leading-6">
            Collections shouldn’t live outside your core system. LMS keeps them integrated.
            </p>
            <ul className="list-disc ml-5 mt-3 text-[#00000099] leading-7">
            <li>Built-in collections tracking</li>
            <li>DCA routing and assignment rules</li>
            <li>Configurable workflows based on DPD buckets</li>
            <li>Clear monitoring of delinquent portfolios</li>
            </ul>
            <p className="text-[#00000099] leading-6">
            No gaps between lending, collections, and recovery teams.
            </p>
        </div>

        </div>

      </div> </section>


      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"> <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
<h2 className="text-center text-3xl font-bold text-red-600 mb-3">
  API-First by Design
</h2>

<p className="text-center text-[#00000099] max-w-3xl mx-auto leading-7 mb-10">
  LMS is built to plug into your ecosystem, not fight it.
</p>

{/* Card Box */}
<div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">

  {/* Subheading */}
  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
    Key APIs Available
  </h3>

  {/* Two Column List */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* Left Column */}
    <ul className="space-y-3 text-[#00000099] leading-7 list-disc ml-6">
      <li><span className="font-bold">Account APIs</span> – customer creation and limit management</li>
      <li><span className="font-bold">Transaction APIs</span> – loan drawdowns</li>
      <li><span className="font-bold">Disbursement APIs</span> – approval and confirmations</li>
      <li><span className="font-bold">Contract APIs</span> – repayment schedules, dues, and fees</li>
    </ul>

    {/* Right Column */}
    <ul className="space-y-3 text-[#00000099] leading-7 list-disc ml-6">
      
      <li><span className="font-bold">Repayment APIs</span> – payment quotes, payment history, and settlement types</li>
      <li><span className="font-bold">Limit APIs</span> – enhancement, suspension, and queries</li>
      <li><span className="font-bold">Repayment Due APIs</span> – DPD-based dues for customer notifications</li>
    </ul>

  </div>

  {/* Bottom Text */}
  <p className="text-center text-[#00000099] leading-7 mt-10">
    These APIs enable full flexibility in customer journeys and third-party integrations .
  </p>
</div>

      </div>
       </section>

<section className="py-20 bg-black text-white"> <div className="container mx-auto max-w-6xl">
    {/* Heading */}
<h2 className="text-3xl text-center font-bold mb-12">
  Security and Compliance Built In
</h2>

{/* Two Column Bullet List */}
<div className="grid md:grid-cols-2 gap-10 px-4">

  {/* Left Column */}
  <ul className="list-disc ml-6 space-y-4 leading-7 text-gray-300">
    <li>HMAC SHA256 secure communication with replay protection</li>
    <li>Encryption at rest and in transit</li>
  </ul>

  {/* Right Column */}
  <ul className="list-disc ml-6 space-y-4 leading-7 text-gray-300">
    <li>Mandatory two-factor authentication for back office users</li>
    <li>Full activity logging</li>
  </ul>

</div>

</div>
</section>
{/* ===================== ARCHITECTURE ===================== */}

<section className="py-20 bg-white"> <div className="container max-w-6xl mx-auto px-6">
{/* Heading */}
<h2 className="text-3xl text-center font-bold mb-6">
  Architecture Overview
</h2>

{/* Sub-text */}
<p className="text-center text-[#00000099] max-w-3xl mx-auto leading-7 mb-12">
  The LMS fits cleanly into modern financial architectures.
</p>

{/* Modern Card Box */}
<div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-10">

  {/* Two Column Bullet List */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* Column 1 */}
    <ul className="space-y-4 text-[#00000099] leading-7">
      <li className="flex items-start gap-3">
        <span className="mt-1 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
        LMS engine at the core
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
        API layer for integrations
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
        API layer for integrations
      </li>
    </ul>

    {/* Column 2 */}
    <ul className="space-y-4 text-[#00000099] leading-7">
      <li className="flex items-start gap-3">
        <span className="mt-1 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
        Back office UI for operations
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
        Integration with KYC, AML, payment gateways, and third-party services
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
        Compatibility with core banking systems
      </li>
    </ul>

  </div>

  {/* Bottom Text */}
  <p className="text-center text-[#00000099] leading-7 mt-10 max-w-3xl mx-auto">
    This allows custom journeys and branding without touching the core engine.
  </p>

</div>

</div></section>

{/* ===================== DEPLOYMENT MODEL ===================== */}

<section className="py-20 bg-white"> <div className="container max-w-6xl mx-auto text-center"> <h2 className="text-3xl font-bold mb-6">Deployment Model</h2> <p className="max-w-4xl mx-auto text-[#00000099] leading-7"> A deployment strategy that balances control, security, and speed. </p>

</div> 
<section className='experience py-20 '>
        <div className='timeline md:mx-10'>
          <div className='timeline-box shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
            
              
              <h4 className='experience-company-name'> Delivered as Docker images</h4>
             
            </div>
          </div>

          <div className='timeline-box right shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              
            
              <h4 className='experience-company-name'>Infrastructure-as-Code templates available</h4>
              
            </div>
          </div>

          <div className='timeline-box left shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
            
              <h4 className='experience-company-name'>Deployable on your own cloud infrastructure</h4>
              <br />

            </div>
          </div>
          <div className='timeline-box right shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              
            
              <h4 className='experience-company-name'>Data storage and cybersecurity aligned with regulatory standards</h4>
              
            </div>
          </div>

          <div className='timeline-divider '>
            <div className='timeline-traveller'>
              <div>
                <FaPlane className='i' size={42} />
              </div>
            </div>
          </div>
        </div>
      </section>
</section>

<section className="py-20 bg-white">
  <div className="container max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl font-bold mb-8">Who This Is For</h2>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-4 gap-8 mt-10">

      {/* Card 1 */}
      <div className="shadow-lg bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">1</span>
        </div>
        <p className="text-[#00000099] font-medium text-sm">
          NBFCs and lending institutions
        </p>
      </div>

      {/* Card 2 */}
      <div className="shadow-lg bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">2</span>
        </div>
        <p className="text-[#00000099] font-medium text-sm">
          Fintech lenders
        </p>
      </div>

      {/* Card 3 */}
      <div className="shadow-lg bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">3</span>
        </div>
        <p className="text-[#00000099] font-medium text-sm">
          Embedded finance platforms
        </p>
      </div>

      {/* Card 4 */}
      <div className="shadow-lg bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">4</span>
        </div>
        <p className="text-[#00000099] font-medium text-sm">
          Enterprises running internal credit programs
        </p>
      </div>

    </div>

    {/* Footer Text */}
    <p className="text-[#00000099] mt-12 max-w-3xl mx-auto leading-7">
      If lending is core to your business, this system is built for you.
    </p>

  </div>
</section>

{/* ===================== WHY INFODRIVE ===================== */}


<section className="py-8 bg-gradient-to-b from-white to-gray-100">
  <div className="container max-w-6xl mx-auto text-center px-6">
    
    {/* Heading */}
    <h2 className="text-3xl font-bold mb-4">Why InfoDrive Solutions</h2>

    {/* Subheading */}
    <p className="max-w-3xl mx-auto text-[#00000099] leading-7 mb-12">
      We approach LMS as a business platform, not just software.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-4 gap-8 mt-10">

      {/* Card 1 */}
      <div className="group shadow-lg rounded-2xl p-8 bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">1</span>
        </div>
        <p className="text-[#00000099] text-sm font-medium">
          Strong domain understanding
        </p>
      </div>

      {/* Card 2 */}
      <div className="group shadow-lg rounded-2xl p-8 bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">2</span>
        </div>
        <p className="text-[#00000099] text-sm font-medium">
          High configurability without instability
        </p>
      </div>

      {/* Card 3 */}
      <div className="group shadow-lg rounded-2xl p-8 bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">3</span>
        </div>
        <p className="text-[#00000099] text-sm font-medium">
          API-first architecture for future growth
        </p>
      </div>

      {/* Card 4 */}
      <div className="group shadow-lg rounded-2xl p-8 bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">4</span>
        </div>
        <p className="text-[#00000099] text-sm font-medium">
          Enterprise-grade support and delivery
        </p>
      </div>

    </div>

    {/* Footer Text */}
    <p className="text-[#00000099] mt-12 text-sm">
      We focus on building lending systems teams can depend on.
    </p>

  </div>
</section>

{/* ===================== CTA ===================== */}

<section className="py-20 bg-black text-white text-center"> <h2 className="text-3xl font-bold mb-6">Let’s Talk</h2> <p className="max-w-3xl mx-auto text-lg mb-6 leading-8"> If you’re evaluating a new Loan Management System or planning to modernize your lending stack, let’s have a conversation. We’ll understand your lending model first, then show how LMS fits. </p> <button className="bg-red-600 px-8 py-3 rounded-md text-white font-semibold hover:bg-red-700 transition"> Contact Us </button> </section>

      <LeadForm />
      <Footer />
    </>
  );
}

// framer motion properties
const heroVarient = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: { opacity: 1, x: 0, rotate: 360 },
};

export default crm;
