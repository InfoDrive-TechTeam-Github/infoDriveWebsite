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
          Our Cutting-Edge Digital Will Solution
        </Typography>
        <Typography className='w100' gutterBottom variant='h2' component='div'>
          Welcome to the future of estate planning
        </Typography>
        <Typography className='w100' gutterBottom variant='h5' component='div'>
          At Infodrive Solutions, we are excited to introduce our revolutionary
          digital will solution that will transform the way you manage your
          legacy. Say goodbye to the complexities and limitations of traditional
          paper wills and embrace the simplicity, security, and convenience of
          our innovative digital platform.
          <br />
          <br />
          Planning for the future and ensuring that your loved ones are taken
          care of is of utmost importance. Our digital will solution is designed
          to provide you with a seamless and efficient way to create, manage,
          and update your will. With our user-friendly interface and intuitive
          design, you can confidently navigate through the estate planning
          process, even if you don't have legal expertise. We've taken the
          complexities out of creating a will, allowing you to focus on what
          truly matters – protecting your legacy.
          <br />
          <br />
          Security and privacy are paramount when it comes to your personal and
          sensitive information. Our digital will platform utilizes
          state-of-the-art security measures, including advanced encryption
          techniques, to ensure that your data is protected at all times. Rest
          assured that your digital will is securely stored and accessible only
          to authorized individuals. With our robust security protocols, you can
          have peace of mind knowing that your wishes are confidential and
          safeguarded.
          <br />
          <br />
          Embracing a digital will also means accounting for your digital assets
          in the modern era. From online accounts and digital subscriptions to
          cryptocurrency and social media profiles, our platform allows you to
          include instructions and details about your digital assets. By
          addressing these assets in your digital will, you ensure that nothing
          is overlooked and that your digital presence is managed according to
          your wishes. Protecting your legacy means considering both physical
          and digital aspects, and our digital will solution enables you to do
          just that.
        </Typography>
      </section>

      <section className='blob  md:h-[670px] md:flex justify-center items-center'>
        <div className='container max-w-5xl mx-auto md:flex  items-center h-full p-5 md:p-0 gap-5'>
          <div className='left  flex flex-col gap-5 mt-20 '>
            <h2 className='text-red-600 md:text-2xl font-bold text-xl'>
              Empower Your Estate Planning with
              <br className='md:block hidden' />
              <span className='text-black mt-5 md:ml-0 ml-1'>
                the Unified Stack for Digital Wills
              </span>
            </h2>
            <p className='text-sm text-[#00000099]'>
              Simplify Your Estate Planning Journey with the No-Code Digital
              Will Platform for All Your Needs
            </p>
            <div className='md:flex gap-5 h-full md:mt-24 '>
              <button
                className='bg-red-600 rounded-md p-5 shadow-md w-1/2 h-16 ml-16 md:ml-0'
                style={{ flex: 2 }}
              >
                <Link
                  className=' text-white font-semibold text-sm md:text-base'
                  style={{ textDecoration: 'none', color: 'white' }}
                  href='http://digital-will.web3dapps.world/dashboard'
                >
                  Open Digital Bill
                </Link>
              </button>
              <hr className='md:h-80 h-0 md:w-0 w-20 border-2 border-red-600 hidden md:block' />
              <div className='md:mt-16' style={{ flex: 3 }}>
                <h2 className='text-red-600 font-bold text-xl mb-5 ml-16 md:ml-0'>
                  Digit Will offers you
                </h2>
                <p className='text-[#00000099] leading-6 text-sm'>
                  Digit Will offers a user-friendly and secure platform for
                  simplified estate planning. With advanced encryption and
                  strict access controls, your digital will remains confidential
                  and protected. You can conveniently manage and update your
                  will from anywhere, ensuring your wishes and digital assets
                  are accounted for. Collaborate with trusted individuals,
                  receive reliable customer support, and gain peace of mind
                  knowing that your loved ones will be taken care of according
                  to your instructions. Choose Digit Will for a seamless and
                  secure digital will experience.
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
                Peace of Mind
              </h3>
              <h4 className='experience-company-name'>Secure and Efficient</h4>
              <br />

              <p className='experience-description text-align-justify text-[#00000099] leading-6 text-sm'>
                With our state-of-the-art digital will solution, you can have
                peace of mind knowing that your final wishes will be honored and
                your loved ones will be taken care of. Our platform ensures the
                security and efficiency of your digital will, making the estate
                planning process seamless and hassle-free.
              </p>
            </div>
          </div>

          <div className='timeline-box right shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              <div className='timeline-logo'>
                <img src='https://img.freepik.com/free-vector/accept-terms-concept-illustration_114360-1027.jpg?w=740&t=st=1684819781~exp=1684820381~hmac=bcc3deea5c7948b6a2678708d67c93261d8803f370b78760208c3755afdc74ab' />
              </div>
              <h3 className='experience-designation m0 m-blue text-red-600  font-Poppins'>
                Convenient Estate Planning
              </h3>
              <h4 className='experience-company-name'>Streamlined Process</h4>
              <br />

              <p className='experience-description text-align-justify text-[#00000099] leading-6 text-sm'>
                Our digital will solution offers convenient estate planning,
                allowing you to create and manage your will with ease. With a
                streamlined process, you can efficiently document your wishes
                and ensure a smooth transfer of assets to your loved ones.
              </p>
            </div>
          </div>

          <div className='timeline-box left shadow-md rounded-lg p-5'>
            <div className='timeline-container'>
              <div className='timeline-logo'>
                <img src='https://img.freepik.com/premium-vector/flat-3d-isometric-nda-document-with-shield-lock-digital-tablet-non-disclosure-agreement-contract-concept_47328-1832.jpg?w=740' />
              </div>
              <h3 className='experience-designation m0 m-blue text-red-600  font-Poppins'>
                Secure Data Protection
              </h3>
              <h4 className='experience-company-name'>Advanced Encryptiont</h4>
              <br />

              <p className='experience-description text-align-justify text-[#00000099] leading-6 text-sm'>
                At Digital Will Solutions, we prioritize the security of your
                sensitive information. Our platform employs advanced encryption
                techniques to ensure that your data is protected at all times.
                With our secure data protection measures, you can have peace of
                mind knowing that your digital will is safeguarded from
                unauthorized access and breaches. We understand the importance
                of privacy and confidentiality when it comes to estate planning,
                and we are committed to maintaining the highest standards of
                data security.
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

      <section className='crma md:h-[850px] md:p-10 h-[1250px]  bg-black p5'>
        <h2 className='text-center  text-white text-2xl leading-10 z-10 relative'>
          Simplify Estate Planning with our
          <span className='font-bold '> Digital Will Solution</span>
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
            Our digital will solution simplifies the process of estate planning,
            empowering you to protect your legacy and ensure your final wishes
            are honored. With our user-friendly platform, you can conveniently
            create, update, and manage your digital will with ease. From
            designating beneficiaries to outlining asset distribution, our
            solution provides a comprehensive framework to handle all aspects of
            your estate plan. By leveraging technology, we offer a secure and
            efficient way to organize your important documents and ensure their
            accessibility when needed.
          </div>
          <div className='image relative md:w-1/2'>
            <img src='images/digitalWill.png' alt='' />
            <img
              src='images/will.png'
              alt=''
              className='absolute md:top-32 md:left-16 top-10 left:10'
            />
          </div>
        </div>
      </section>

      {/**customer says section */}
      <section className=' min-h-[600px] relative'>
        <div className=' mx-auto container max-w-6xl pt-24'>
          <div className='customerbox md:flex'>
            <div className='max-w-6xl mx-auto '>
              <h2 className='text-center  font-extrabold text-xl'>
                One Platform To{' '}
                <span className='text-red-600'>
                  Support Your Entire Journey
                </span>
              </h2>

              <div className='main grid md:grid-cols-2 m-10 gap-10 grid-cols-1'>
                <div className='div1 flex flex-col items-center gap-2'>
                  <img
                    src='gif/wired-flat-21-avatar.gif'
                    alt=''
                    className='h-28 w-28'
                  />
                  <h3 className='text-red-600 font-bold  text-[#00000099] leading-6 '>
                    Easy and Intuitive
                  </h3>
                  <p className='text-sm text-[#00000099]'>
                    Our digital will platform simplifies the process of creating
                    and managing your will. With user-friendly interfaces and
                    step-by-step guidance, you can easily draft, update, and
                    organize your will without the need for legal expertise.
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <img
                    src='gif/wired-flat-500-fingerprint-security.gif'
                    alt=''
                    className='h-28 w-28'
                  />
                  <h3 className='text-red-600 font-bold   leading-6 '>
                    Secure and Encrypted:
                  </h3>
                  <p className='text-sm text-[#00000099]'>
                    We understand the importance of privacy and security when it
                    comes to your personal and sensitive information. Our
                    digital will solution utilizes advanced encryption
                    techniques to protect your data.
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2 '>
                  <img
                    src='gif/wired-flat-177-envelope-mail-send.gif'
                    alt=''
                    className='h-28 w-28'
                  />
                  <h3 className='text-red-600 font-bold  text-[#00000099] leading-6 '>
                    Accessibility and Convenience
                  </h3>
                  <p className='text-sm text-[#00000099]'>
                    Access your digital will anytime, anywhere. Our cloud-based
                    platform allows you to securely store and access your will
                    from any device with an internet connection. No more
                    worrying about physical copies or the risk of misplacing
                    important documents.
                  </p>
                </div>
                <div className='div1 flex flex-col items-center gap-2'>
                  <img
                    src='gif/wired-flat-1736-smart-tv-layout-interface.gif'
                    alt=''
                    className='h-28 w-28'
                  />
                  <h3 className='text-red-600 font-bold   leading-6 '>
                    Digital Asset Management
                  </h3>
                  <p className='text-sm text-[#00000099]'>
                    In the digital age, it's crucial to consider your digital
                    assets alongside physical ones. Our platform allows you to
                    include instructions and details about your digital assets,
                    ensuring they are accounted for and properly managed after
                    your passing.
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
