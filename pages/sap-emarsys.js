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
          src='images/ae292a98639663768aec9289f08dd823.jpeg'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent salePart'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h3' component='div'>
              SAP Emarsys Customer Engagement
            </Typography>

            <Typography gutterBottom variant='h1' component='div'>
              Emarsys is the leading global provider of a <br/>
              cloud-based Omnichannel Customer <br/>
              Engagement Platform, designed for <br/>
              marketing automation and marketing <br/>
              cloud for retail and B2C-customer businesses.
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
      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2`}>
        <Typography gutterBottom variant='h2' className='mb0' component='div'>
          It is a platform trusted by leading brands and innovative marketers across the globe. Build, launch, and scale personalized 1:1 cross-channel campaigns that drive business outcomes.
        </Typography>
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    variant='body2'
                    className='pr10'
                    color='text.secondary'
                  >
                    SAP Emarsys Customer Engagement is a powerful and comprehensive customer engagement platform that enables businesses to deliver personalized and relevant communications to their customers across various channels. With SAP Emarsys, businesses can connect with their customers in real-time, using data-driven insights to drive customer engagement and loyalty.
                    The SAP Emarsys platform is designed to help businesses manage their customer relationships and interactions in a more effective and efficient manner.  It provides a range of tools and features that allow businesses to segment their customer base, 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    create targeted campaigns, and deliver personalized messaging to the right audience at the right time. One of the key benefits of SAP Emarsys is its ability to leverage data and analytics to drive customer engagement. The platform integrates with a wide range of data sources, including CRM systems, social media platforms, and web analytics tools, to provide businesses with a 360-degree view of their customers. This allows businesses to understand their customers' needs, preferences, and behaviors, and use this information to create targeted and personalized communications that drive engagement and loyalty.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox saleForcesDevelopmentBox marketCloudBox sapEmarsysServices`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className='androidDevelopment'>
            <Grid item xs={6} className='saleForcesDevelopment'>
              <Typography gutterBottom className="w0" variant='h2' component='div'>
              Another key advantage of SAP Emarsys is its versatility. The platform supports a wide range of communication channels, including email, SMS, social media, and push notifications, allowing businesses to reach their customers on the channels they prefer. It also includes tools for managing and optimizing cross-channel campaigns, ensuring that the right message is delivered to the right customer at the right time.
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
              In addition to its customer engagement capabilities, SAP Emarsys also offers a range of features for managing customer data and optimizing the customer experience. This includes tools for data management, segmentation, and analytics, as well as features for creating and managing customer profiles, automating marketing processes, and improving the customer journey.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox`}>
        <Typography  gutterBottom variant='h1' component='h1'>
          Overall, SAP Emarsys is a powerful and comprehensive platform that helps businesses engage with their customers in a more meaningful and personalized way. 
        </Typography>

        <Typography  gutterBottom variant='h5' component='div'>
          By leveraging data and analytics, businesses can create targeted and relevant communications that drive customer engagement and loyalty, ultimately leading to increased revenue and growth.
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
