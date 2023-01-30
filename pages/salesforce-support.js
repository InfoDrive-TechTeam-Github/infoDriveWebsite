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
        <meta property="og:title" content="Top Android App Development Company & Developers in Singapore,Malaysia, and India" />
        <meta property="og:image" content="https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png" />
        <link rel="icon" href="/favicon.png" />
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
          src='images/72250f50098664f9273c6d07e59ccdcd.jpeg'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent salePart'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h3' component='div'>
              Salesforce SUPPORT
            </Typography>
            <Typography gutterBottom variant='h1' component='div'>
            With its wide range of features and <br/>
            customizability, Salesforce has become <br/>
            one of the most popular CRM solutions <br/>
            for companies of all sizes.
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
        <Typography gutterBottom variant='h2' component='div'>
          Salesforce is a powerful customer relationship management (CRM) platform that helps businesses streamline their sales, customer service, and marketing efforts.         
        </Typography>

        <Typography gutterBottom variant='h5' component='div'>
          However, as with any complex software, Salesforce can be difficult to navigate and manage. That's where InfoDrive Solutions comes in. Our team of certified Salesforce experts is here to provide the support you need to get the most out of your Salesforce investment.
        </Typography>
      </section>

      <section className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices`}>
        <Typography className="mb0" gutterBottom variant='h2' component='div'>
        Our Salesforce support services include:                
        </Typography>
        <br/>
        <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4} className>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  On-demand support
                  </Typography>
                  <br />
                  <Typography className="pr30" variant='body2' color='text.secondary'>
                    Need help with a specific issue or question? Our team is available to assist you with anything from simple troubleshooting to complex customization projects.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Training
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  Not sure how to use all of the features in Salesforce? Our team can provide customized training sessions to ensure that you and your team are fully proficient in using the platform.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Implementation                  
                  </Typography>
                  <br />
                  <Typography className="pr30" variant='body2' color='text.secondary'>
                  If you're new to Salesforce or looking to switch from a different CRM, our team can help you set up and configure the platform to meet your specific business needs.                  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Integration            
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  Want to integrate Salesforce with other business tools and systems? Our team can help you seamlessly connect Salesforce with your other software, ensuring that all of your data is in one central location.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid> 

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Customization                  
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    Salesforce is highly customizable, but knowing how to make the most of its customization options can be challenging. Our team can help you tailor Salesforce to fit your unique business processes and workflows.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid> 
          </Grid>
        </Box>
      </section>

      <br/>
      <br/>

      <section className={`sectionBox whyUsBox pt0 pb0 salesForceServices2`}>
      <Typography gutterBottom variant='h2' className='mb0' component='div'>
      Key benefits of Salesforce Marketing
        </Typography>
        <br/>
        <Typography gutterBottom variant='h5' className='mb0' component='div'>
        There are numerous benefits to using Salesforce Marketing Cloud as your marketing automation platform, and partnering with InfoDrive Solutions as your consultant can help you maximize these benefits and drive better results for your business.
        </Typography>
        <br />
        <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                  Personalization
                  </Typography>
                  <br />
                  <Typography variant='body2' className="pr10" color='text.secondary'>
                  The platform allows you to create highly targeted, personalized campaigns based on customer data and behaviors. This can help you better engage and convert your audience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                  Omnichannel marketing                 
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  With Salesforce Marketing Cloud, you can reach your customers through email, mobile, social media, and other channels, all in one place. This allows you to create consistent, coordinated campaigns across multiple channels.
                  </Typography>
                 </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                    <CardContent>
                        <Typography gutterBottom variant='h3' component='div'>
                        Data-driven insights                   
                        </Typography>
                        <br />
                        <Typography variant='body2' color='text.secondary'>
                        The platform's advanced analytics capabilities allow you to track and measure the performance of your campaigns in real-time, giving you valuable insights into what's working and what's not.
                        </Typography>       
                    </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={6}>
              <Card>
                    <CardContent>
                        <Typography gutterBottom variant='h3' component='div'>
                        Integration
                        
                        </Typography>
                        <br />
                        <Typography variant='body2' color='text.secondary'>
                        Salesforce Marketing Cloud can be easily integrated with other systems, such as your CRM, e-commerce platform, and more. This allows you to get a complete view of your customer interactions and make informed decisions about your marketing efforts.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

          </Grid>
        </Box>
      </section>


      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Ready to take your business to the next level with a custom web or
          mobile app?
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
