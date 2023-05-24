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

function crm() {
  return (
    <>
      <Header />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='https://img.freepik.com/free-photo/smiling-asian-businesswoman-showing-tablet-her-manager-during-meeting-office_74952-2849.jpg?w=1060&t=st=1684605611~exp=1684606211~hmac=4cdbebfbc636394831102118202403204b33268d25215f17033058b12d0e2a0b'
          alt='IT Solutions Company in Kuala Lumpur'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h1' component='div'>
              Harnessing the Power of <br /> CRM and ATS for a <br /> Connected
              and Enhanced <br />
              Customer Journey
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
      <section className={`sectionBox applicationDevelopmentBox bg-gray-100`}>
        <Typography
          className='w100 red'
          gutterBottom
          variant='h1'
          component='h1'
        >
          Welcome to driven.io CRM and ATS
        </Typography>
        <Typography className='w100' gutterBottom variant='h2' component='div'>
          Revolutionize Your Business with Seamless CRM and ATS
        </Typography>
        <Typography className='w100' gutterBottom variant='h5' component='div'>
          InfoDrive Solutions proudly presents Driven.io, our flagship product
          that combines the power of Customer Relationship Management (CRM) and
          Applicant Tracking System (ATS). Designed to cater to businesses of
          all sizes, Driven.io CRM and ATS empower you to streamline your sales
          processes, enhance customer interactions, and revolutionize your
          recruitment procedures.
          <br />
          <br />
          With Driven.io, you'll experience a seamless and user-friendly
          interface that simplifies your CRM and ATS experience. Our intuitive
          dashboard allows you to effortlessly navigate through modules, access
          crucial information, and efficiently manage both customer
          relationships and applicant data. Stay organized and never miss out on
          any opportunity as Driven.io CRM and ATS enable you to assign tasks,
          schedule activities, and set reminders, ensuring that you and your
          team stay on top of important deadlines, follow-ups, and candidate
          engagements.
          <br />
          <br />
          We understand that every business is unique, and customization is key.
          With Driven.io CRM and ATS, you have the flexibility to tailor the
          system to match your specific requirements. Customize fields,
          workflows, and modules to align with your business processes and adapt
          as your organization evolves. Driven.io CRM and ATS scale effortlessly
          to accommodate your expanding needs, ensuring seamless integration and
          efficient management of both customer relationships and applicant
          data.
        </Typography>
      </section>

      <section className='wave  md:h-[670px] md:flex justify-center items-center'>
        <div className='container max-w-5xl mx-auto md:flex  items-center h-full p-5 md:p-0 gap-5'>
          <div className='left md:w-1/3 flex flex-col gap-5 '>
            <h2 className='text-red-600 md:text-xl font-bold text-lg'>
              Streamline Your CRM and ATS
              <br />
              <span className='text-black'>Journey with Driven.io</span>
            </h2>
            <p>Effectively manage and nurture customer relationships</p>
            <button
              className='bg-red-600 rounded-md p-5 shadow-md'
              onClick={() =>
                window.open(
                  'http://dev-ats.web3dapps.world/dashboard',
                  '_blank'
                )
              }
            >
              <Link
                className=' text-white font-semibold'
                style={{ textDecoration: 'none', color: 'white' }}
                // href='http://dev-ats.web3dapps.world/dashboard'
              >
                Click to Open Driven.io
              </Link>
            </button>

            <div className='trueDiv mt-10 flex flex-col gap-5'>
              <div className='flex gap-2 items-center'>
                <FcApproval size={30} />
                <h2>Monitor customer interactions.</h2>
              </div>
              <div className='flex gap-2 items-center'>
                <FcApproval size={30} />
                <h2>Easily create and publish job postings.</h2>
              </div>
              <div className='flex gap-2 items-center'>
                <FcApproval size={30} />
                <h2>Centralize all applicant data.</h2>
              </div>
            </div>
          </div>

          <img
            src='https://img.freepik.com/free-vector/scrum-method-concept-illustration_114360-13019.jpg?w=900&t=st=1684734045~exp=1684734645~hmac=5941895e9f50258e40c86a350693eaf03bf27827042663ad42157722d712aa6c'
            alt=''
            className='object-cover  h-[300px]   w-1/2 '
          />
        </div>
      </section>
      <div className='bg-gray-100 h-auto polygon text-white'>
        <section className='hero  text-black  max-w-6xl mx-auto'>
          <div
            className='md:flex justify-between items-center'
            style={{ flex: 2 }}
          >
            <div className='right' style={{ flex: 3 }}>
              <div className='relative container mx-auto px-6 flex flex-col space-y-8 '>
                <div className='absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0'></div>
                <div className='relative z-10'>
                  <img
                    src='https://img.freepik.com/free-vector/gradient-crm-illustration_23-2149379177.jpg?w=740&t=st=1684603989~exp=1684604589~hmac=fe21bbcfd8ab34859ee3c8db1ce74d5f56954b6ce0155e80ccfa729f47e57f82'
                    alt=''
                    className='timeline-img1'
                  />
                  <div className='timeline-container1'>
                    <div className='timeline-pointer' aria-hidden='true'></div>
                    <div className='bg-white p-6 rounded-md shadow-md'>
                      <span className='font-bold text-red-600 text-sm tracking-wide'>
                        Streamline your sales processes
                      </span>
                      <h1 className='text-xl font-bold pt-1 text-[#0b2653]'>
                        CRM and ATS Solution
                      </h1>

                      <p className='pt-1 text-[#00000099] text-sm leading-6'>
                        Our CRM and ATS solution is designed to help you
                        streamline your sales processes. With our powerful
                        features and intuitive interface, you can manage your
                        customer relationships and track your applicant data
                        efficiently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='relative z-10'>
                  <img
                    src='https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041849.jpg?w=996&t=st=1684604186~exp=1684604786~hmac=69b4babd71ec1f29b482eb47ca5ff214259191dea09330dfe60b525f79366243'
                    alt=''
                    className='timeline-img1'
                  />
                  <div className='timeline-container1 timeline-container-left1'>
                    <div
                      class='timeline-pointer timeline-pointer-left'
                      aria-hidden='true'
                    ></div>
                    <div className='bg-white p-6 rounded-md shadow-md'>
                      <span className='font-bold text-red-600 text-sm tracking-wide'>
                        Boost productivity and efficiency
                      </span>
                      <h1 className='text-xl font-bold pt-1 text-[#0b2653]'>
                        Advanced ATS and CRM Features
                      </h1>
                      <p className='pt-1 text-[#00000099] text-sm leading-6'>
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
                <div className='relative z-10 '>
                  <img
                    src='https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038409.jpg?w=996&t=st=1684755663~exp=1684756263~hmac=d0994d271fdf751c1a3d997a803546afc0706a9cf2a150463698880843ae21b0'
                    alt=''
                    className='timeline-img1'
                  />
                  <div className='timeline-container1'>
                    <div className='timeline-pointer' aria-hidden='true'></div>
                    <div className='bg-white p-6 rounded-md shadow-md mb-5'>
                      <span className='font-bold text-red-600 text-sm tracking-wide'>
                        Stay organized and informed
                      </span>
                      <h1 className='text-xl font-bold pt-1 text-[#0b2653]'>
                        Centralized Data Management
                      </h1>
                      <p className='pt-1 text-[#00000099] text-sm leading-6'>
                        With our ATS and CRM solution, you can centralize all
                        your sales and applicant data in one place. From contact
                        details and communication history to application status
                        and performance metrics, our system provides a
                        comprehensive view of your business, enabling you to
                        make data-driven decisions and stay organized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='crma md:h-[800px] md:p-10 h-[1150px] p-3'>
        <h2 className='text-center mb-10 text-red-600 text-2xl leading-10 font-semibold'>
          Driven.io ATS and CRM help you create and automate a <br />
          <span className='font-bold text-[#0b2653]'>
            better customer journey
          </span>
        </h2>
        <div
          className='left flex  justify-center items-center mx-auto'
          style={{ flex: 1 }}
        >
          <img
            src='images/chatbot-marketing.gif'
            alt=''
            className='h-[200px] w-[200px]'
          />
        </div>
        <div className='inner md:flex items-center gap-10 max-w-6xl mx-auto mb-5 md:mb-0'>
          <div className='articleRight md:w-1/2 leading-8 md:mt-10  '>
            Combination of a CRM and an ATS empowers you to create and automate
            a better customer journey. By harnessing the capabilities of these
            systems, you can effectively manage customer interactions,
            streamline recruitment processes, and deliver personalized
            experiences at every stage. This integrated approach not only
            improves efficiency but also enables you to build stronger
            relationships, increase customer satisfaction, and drive business
            growth in today's competitive market.
          </div>
          <div className='image relative md:w-1/2'>
            <img src='images/crm.jpg' alt='' />
            <img
              src='images/crmtable.jpg'
              alt=''
              className='absolute md:top-32 md:left-16 top-20 left:10'
            />
          </div>
        </div>
      </section>

      {/**customer says section */}
      <section className='bg-gray-100 min-h-[600px] relative'>
        <div className=' mx-auto container max-w-6xl pt-24'>
          <div className='customerbox md:flex'>
            <div className='max-w-6xl mx-auto '>
              <h2 className='text-center  font-extrabold text-xl'>
                One Platform To{' '}
                <span className='text-red-600 font-semibold'>
                  Support Your Entire Journey
                </span>
              </h2>

              <div className='main grid md:grid-cols-2 m-10 gap-20 grid-cols-1'>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsBuildingGear className='text-red-600' size={80} />
                  <h3 className='text-red-600 font-bold'>
                    User-friendly interface
                  </h3>
                  <p className='text-[#00000099] text-sm'>
                    Our intuitive and easy-to-use interface ensures a smooth
                    onboarding experience and minimal training requirements for
                    your teams.
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsBoxes size={80} className='text-red-600' />
                  <h3 className='text-red-600 font-bold'>
                    Scalable and customizable
                  </h3>
                  <p className='text-[#00000099] text-sm'>
                    driven.io CRM and ATS can be tailored to meet the unique
                    needs of your business, adapting as your organization grows
                    and evolves
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsCardChecklist className='text-red-600' size={80} />
                  <h3 className='text-red-600 font-bold'>Data security</h3>
                  <p className='text-[#00000099] text-sm'>
                    We prioritize the security of your data, employing robust
                    measures to protect sensitive information from unauthorized
                    access or breaches.
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsLayoutTextSidebarReverse
                    className='text-red-600'
                    size={80}
                  />
                  <h3 className='text-red-600 font-bold'>
                    Integration capabilities
                  </h3>
                  <p className='text-[#00000099] text-sm'>
                    Seamlessly integrate driven.io CRM and ATS with your
                    existing systems and tools, maximizing productivity and
                    efficiency across your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='custom-shape-divider-top-1684756723'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </>
  );
}

export default crm;
