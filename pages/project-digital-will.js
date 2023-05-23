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

function crm() {
  return (
    <>
      <Header />
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
          APPLICATION DEVELOPMENT, MAINTENANCE AND SUPPORT
        </Typography>
        <Typography className='w100' gutterBottom variant='h2' component='div'>
          One-stop Solution for Your Development Needs
        </Typography>
        <Typography className='w100' gutterBottom variant='h5' component='div'>
          As a leading provider of full stack development services in Singapore,
          Malaysia, and India, we are committed to delivering top-quality
          solutions that help businesses of all sizes succeed in today's digital
          landscape. Our team of experienced developers specializes in a wide
          range of technologies, including JavaScript, HTML, CSS, Python, Java,
          PHP, and more. We have the expertise and tools to build custom web and
          mobile applications that are tailored to your specific needs and
          goals.
          <br /> Our full stack development process is designed to be efficient,
          agile, and transparent. We begin by understanding your business
          requirements and objectives, and then we work closely with you to
          design and develop a solution that meets your needs. One of the key
          benefits of working with InfoDrive Solutions is our ability to provide
          end-to-end development services. This means that we can handle every
          aspect of your project, from the initial concept and design to the
          final deployment and maintenance. This allows us to deliver a
          complete, turnkey solution that is ready to use as soon as it is
          deployed.
        </Typography>
      </section>

      <section className='blob  md:h-[670px] md:flex justify-center items-center'>
        <div className='container max-w-5xl mx-auto md:flex  items-center h-full p-5 md:p-0 gap-5'>
          <div className='left  flex flex-col gap-5 mt-20 '>
            <h2 className='text-red-600 md:text-3xl font-bold text-xl'>
              The Unified Stack For
              <span className='text-black'> Modern Data Teams</span>
            </h2>
            <p>
              The no-code data pipeline platform for your entire data journey
            </p>
            <div className='md:flex gap-5 h-full md:mt-24 '>
              <button
                className='bg-red-600 rounded-md p-5 shadow-md w-1/2 h-16 ml-16 md:ml-0'
                style={{ flex: 2 }}
              >
                <Link
                  className=' text-white font-semibold text-sm md:text-base'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Open Digital Bill
                </Link>
              </button>
              <hr className='md:h-80 h-0 md:w-0 w-20 border-2 border-red-600 hidden md:block' />
              <div className='md:mt-24' style={{ flex: 3 }}>
                <h2 className='text-red-600 font-bold text-xl mb-5 ml-16 md:ml-0'>
                  Digit Bill offers you
                </h2>
                <p className='text-[#4e4e50] leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat iste inventore voluptates non, corporis nesciunt
                  quisquam optio assumenda voluptate, dignissimos soluta debitis
                  natus quae possimus veniam velit, fugit nihil quibusdam sint
                  in officia beatae consequuntur. Voluptate nesciunt nam quam
                  eum tempora similique doloribus ut, consectetur, tenetur,
                  deleniti perferendis dolores cumque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='experience py-20 '>
        <div className='timeline md:mx-10'>
          <div className='timeline-box shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              <div className='timeline-logo shadow-md'>
                <img src='https://img.freepik.com/free-vector/online-certification-illustration_23-2148568875.jpg?w=996&t=st=1684819553~exp=1684820153~hmac=c1eaeca2495958c7cb4f61575698bf93b543e5293d03edd24b99da1514e7ffe9' />
              </div>
              <h3 className='experience-designation m0 m-blue text-red-600  font-Poppins'>
                Designation
              </h3>
              <h4 className='experience-company-name'>Company Name</h4>
              <h5 className='experience-duration m0'>
                Month YYYY - Month YYYY
              </h5>

              <p className='experience-description text-align-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className='timeline-box right shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              <div className='timeline-logo'>
                <img src='https://img.freepik.com/free-vector/accept-terms-concept-illustration_114360-1027.jpg?w=740&t=st=1684819781~exp=1684820381~hmac=bcc3deea5c7948b6a2678708d67c93261d8803f370b78760208c3755afdc74ab' />
              </div>
              <h3 className='experience-designation m0 m-blue'>Designation</h3>
              <h4 className='experience-company-name'>Company Name</h4>
              <h5 className='experience-duration m0'>
                Month YYYY - Month YYYY
              </h5>
              <p className='experience-description text-align-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className='timeline-box left shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              <div className='timeline-logo'>
                <img src='https://img.freepik.com/premium-vector/flat-3d-isometric-nda-document-with-shield-lock-digital-tablet-non-disclosure-agreement-contract-concept_47328-1832.jpg?w=740' />
              </div>
              <h3 className='experience-designation m0 m-blue'>Designation</h3>
              <h4 className='experience-company-name'>Company Name</h4>
              <h5 className='experience-duration m0'>
                Month YYYY - Month YYYY
              </h5>

              <p className='experience-description text-align-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
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

      <section className='crma md:h-[850px] md:p-10 h-[1150px]  bg-black p5'>
        <h2 className='text-center  text-white text-2xl leading-10 z-10 relative'>
          CRM help you create and automate a <br />
          <span className='font-bold '>better customer journey</span>
        </h2>
        <div
          className='left flex  justify-center items-center md:mx-auto -mt-12'
          style={{ flex: 1 }}
        >
          <img
            src='images/alien.gif'
            alt=''
            className='h-[300px] w-[300px] bg-transparent z-0'
          />
        </div>
        <div className='inner md:flex items-center gap-10 max-w-6xl mx-auto mb-5 md:mb-0'>
          <div className='articleRight md:w-1/2 text-white leading-8 md:mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            culpa, minus quasi ea similique ipsa illo alias obcaecati, fugiat
            optio sed! Quos ex inventore nulla voluptatum dolorum, deleniti
            tempora similique cum autem ducimus assumenda natus sunt facilis
            voluptatibus atque temporibus eos fugiat aperiam corporis ipsa.
            Excepturi incidunt magnam sit sunt tempora autem aut, laboriosam vel
            error iste esse ipsa omnis quo! Eius corporis ex error aliquid
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
                <span className='text-red-600'>
                  Support Your Entire Journey
                </span>
              </h2>

              <div className='main grid md:grid-cols-2 m-10 gap-20 grid-cols-1'>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsBuildingGear className='text-red-600' size={80} />
                  <h3 className='text-red-600 font-bold'>
                    Upgrade Your Decision Making
                  </h3>
                  <p>
                    Centralize your data for a single source of reporting
                    insights
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsBoxes size={80} className='text-red-600' />
                  <h3 className='text-red-600 font-bold'>
                    Upgrade Your Decision Making
                  </h3>
                  <p>
                    Centralize your data for a single source of reporting
                    insights
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsCardChecklist className='text-red-600' size={80} />
                  <h3 className='text-red-600 font-bold'>
                    Upgrade Your Decision Making
                  </h3>
                  <p>
                    Centralize your data for a single source of reporting
                    insights
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <BsLayoutTextSidebarReverse
                    className='text-red-600'
                    size={80}
                  />
                  <h3 className='text-red-600 font-bold'>
                    Upgrade Your Decision Making
                  </h3>
                  <p>
                    Centralize your data for a single source of reporting
                    insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </>
  );
}

export default crm;
