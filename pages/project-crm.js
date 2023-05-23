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
      <section className={`sectionBox applicationDevelopmentBox bg-gray-100`}>
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

      <section className='wave  md:h-[670px] md:flex justify-center items-center'>
        <div className='container max-w-5xl mx-auto md:flex  items-center h-full p-5 md:p-0 gap-5'>
          <div className='left md:w-1/3 flex flex-col gap-5 '>
            <h2 className='text-red-600 md:text-3xl font-bold text-xl'>
              The Unified Stack For <br />
              <span className='text-black'>Modern Data Teams</span>
            </h2>
            <p>
              The no-code data pipeline platform for your entire data journey
            </p>
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
                Click to Open CRM
              </Link>
            </button>

            <div className='trueDiv mt-10 flex flex-col gap-5'>
              <div className='flex gap-2 items-center'>
                <FcApproval size={30} />
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
              <div className='flex gap-2 items-center'>
                <FcApproval size={30} />
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
              <div className='flex gap-2 items-center'>
                <FcApproval size={30} />
                <h2>Lorem ipsum dolor sit amet.</h2>
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
                        Jan 2021
                      </span>
                      <h1 className='text-2xl font-bold pt-1'>
                        An amazing travel
                      </h1>
                      <p className='pt-1'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex iste suscipit reiciendis, perferendis vel
                        consequuntur cupiditate ad commodi provident, sapiente
                        veniam sed autem.
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
                        Aug 2020
                      </span>
                      <h1 className='text-2xl font-bold pt-1'>
                        A trip far away
                      </h1>
                      <p className='pt-1'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex iste suscipit reiciendis, perferendis vel
                        consequuntur cupiditate ad commodi provident, sapiente
                        veniam sed
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
                        Jan 2021
                      </span>
                      <h1 className='text-2xl font-bold pt-1'>
                        An amazing travel
                      </h1>
                      <p className='pt-1'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex iste suscipit reiciendis, perferendis vel
                        consequuntur cupiditate ad commodi provident, sapiente
                        veniam sed autem.
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
        <h2 className='text-center mb-10 text-red-600 text-2xl leading-10'>
          CRM help you create and automate a <br />
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
          <div className='articleRight md:w-1/2 text-gray-600 leading-8 md:mt-10'>
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
