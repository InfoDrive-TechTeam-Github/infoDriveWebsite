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
export default function SalesForceDevelopment() {
  return (
    <div>
      <Head>
        <title>
          Top Android App Development Company & Developers in Singapore,
          Malaysia, and India
        </title>
        <meta
          name='description'
          content='At InfoDrive Solutions, we specialize in developing high-quality android applications for businesses and organizations across Singapore, Malaysia, and India. With a team of experienced and skilled android developers.'
        />
        <meta
          name='keywords'
          content='Android App Development Company, Android App Development Company in Singapore, Android App Development Company in Malaysia, Android App Development Company in Kuala Lumpur, Android App Development Company in Bangalore, Top Android App Development Company in Singapore, Top Android App Development Company in Malaysia, Android App Developers in Singapore, Top Android App Developers in Malaysia, Android App Developers in India, Android App Developers in Bangalore, Mobile App Development Services in Singapore, Mobile App Development Services in Malaysia, Android App Development'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/android-app-development.html'
        />
        <meta
          property='og:title'
          content='Top Android App Development Company & Developers in Singapore,Malaysia, and India'
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
          src='images/25614380e49e0fd7742fc1e2e7973a1e.jpeg'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent salePart'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h3' component='div'>
              CAREERS AT INFODRIVE
            </Typography>

            <Typography gutterBottom variant='h1' component='div'>
              The team is growing with <br/>
              a variety of opportunities <br/>
              available 
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

      <section className={`sectionBox`}>
        <Typography  gutterBottom variant='h1' component='h1'>
          Explore popular jobs        
        </Typography>

        <Typography  gutterBottom variant='h5' component='div'>
          InfoDrive is always on a lookout for passionate, creative people who have the zeal to achieve the extraordinary. We welcome candidates who think they can contribute positively to our team and help us take InfoDrive to further levels of excellency. If you think, you're the perfect fit for our organization, please send your CV and cover letter to info@infodrive-solutions.com. You can find the latest openings here:
        </Typography>
      </section>

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Elevate Your Marketing Strategy with Salesforce Marketing Cloud
        </Typography>
        <Button
          href='/contact-us.html'
          className='bgRed white pl15 pr15 poppin upperCase'
        >
          Connect with Our Expert
        </Button>
      </section>
      <LeadForm />
      <Footer />
    </div>
  );
}
