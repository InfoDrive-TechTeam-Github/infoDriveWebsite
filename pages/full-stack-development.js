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
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Head from 'next/head';

import LeadForm from '../components/leadForm';
export default function FullstackDevelopment() {
  return (
    <div>
      <Head>
        <title>
          Full Stack Development Services & Developers in Singapore, Malaysia,
          and India
        </title>
        <meta
          name='description'
          content='InfoDrive Solutions is a leading full stack development company in Singapore, Malaysia, and India. Our expert developers provide end-to-end solutions for businesses of all sizes. From front-end to back-end, we have got you covered.'
        />
        <meta
          name='keywords'
          content='Full Stack Development Services in Singapore, Full Stack Development Services in Malaysia, Full Stack Development Services in Bangalore, Full Stack Development Services in Kuala Lumpur, Full Stack Development in Singapore, Full Stack Development in Malaysia, Full Stack Developers in Singapore, Full Stack Developers in Malaysia, Full Stack Developers in India, Full Stack Development'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/full-stack-development.html'
        />
        <meta
          property='og:title'
          content='Full Stack Development Services & Developers in Singapore, Malaysia, and India'
        />
        <meta
          property='og:image'
          content='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
        />
        <link rel='icon' href='/favicon.png' />
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
          src='https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Header />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='images/pexels-helena-lopes-933964.jpg'
          alt='Full Stack Development Services'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h1' component='div'>
              Infodrive has helped its <br />
              clients rationalize business <br /> developments, abetting <br />{' '}
              development of specialized <br /> solutions at all stages
            </Typography>
            <Button
              href='/contact-us.html'
              className='readmore white normalCase'
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

      <section className={`sectionBox applicationDevelopmentBox`}>
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
        <br />
        <Typography className='w100' gutterBottom variant='h3' component='div'>
          Our full stack development services include:
        </Typography>
        <ul>
          <li>Web application development</li>
          <li>Mobile application development</li>
          <li>E-commerce development</li>
          <li>Custom software development</li>
        </ul>
        <hr className='w100' style={{ marginLeft: 0 }} />
        <Typography className='w100' gutterBottom variant='h5' component='div'>
          In addition to our full stack development services, we also offer a
          range of other services, including website design, digital marketing,
          and search engine optimization (SEO). As a company, we are committed
          to delivering exceptional value to our clients. We have a track record
          of success and a reputation for delivering high-quality solutions on
          time and on budget. Our team is dedicated to customer satisfaction,
          and we take pride in the long-term relationships we have built with
          our clients. We pride ourselves on being a top full stack development
          company. Our team of experienced developers has a strong track record
          of delivering high-quality web solutions to clients in a variety of
          industries.
        </Typography>
        <hr className='w100' style={{ marginLeft: 0 }} />
      </section>

      <section className={`sectionBox whyUsBox pb0 fullstackGame w100 ml0`}>
        <Typography gutterBottom variant='h2' component='div' className='w100'>
          Stay ahead in the game with our full stack
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Full Stack Development Services in Singapore'
                  src='images/vector2.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Visual
                    <br />
                    engineering
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Full Stack Development Services in Malaysia'
                  src='images/vector3.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Product <br /> development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Full Stack Development Services in Bangalore'
                  src='images/vector1.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Application
                    <br />
                    development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Full Stack Development Services in Kuala Lumpur'
                  src='images/vector4.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Porting <br /> migration
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Full Stack Developers in India'
                  src='images/vector6.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Production <br /> support
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Full Stack Development Services  in Singapore'
                  src='images/vector7.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Product help desk <br /> & support
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox pb0`}>
        <Typography gutterBottom variant='h2' className='mb0' component='h1'>
          We Are Specialized in
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    WORLD’S #1 CRM
                  </Typography>

                  <Typography variant='body2' color='text.secondary'>
                    Salesforce is the World’s #1 CRM today, over 100,000 of the
                    world’s most innovative companies use Salesforce to close
                    bigger deals, faster.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    AI AND ANALYTICS
                  </Typography>

                  <Typography variant='body2' color='text.secondary'>
                    Unleash the power of AI and analytics to surface
                    information, make predictions, and automate repetitive tasks
                    so you can focus on strategic work.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    ENTERPRISE APPLICATIONS
                  </Typography>

                  <Typography variant='body2' color='text.secondary'>
                    Today’s enterprise needs a network of applications, data,
                    and devices connected by APIs, whether on-premises or in the
                    cloud.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox ourBeliefBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={5}
              style={{ padding: '30px', background: '#DE3854' }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Get in touch with us today for a <br /> non-obligation
                discussion
                <br />
                <br />
                InfoDrive Solutions is 24X7 <br /> Available To Help You
              </Typography>
              <br />
              <br />
              <Button
                href='/contact-us.html'
                className='readmore white pl0'
                variant='text'
              >
                CONTACT US <ArrowRightAltIcon />
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Card>
                <img
                  alt='Full Stack Development Developers in Singapore,
          and India'
                  src='images/pexels-prakhar-bansal-732183.jpg'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <LeadForm />
      <Footer />
    </div>
  );
}
