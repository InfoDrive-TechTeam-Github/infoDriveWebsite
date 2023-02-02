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
          src='images/0959e7bad48d4a91f7e112136efad00a.jpeg'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent salePart'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h3' component='div'>Salesforce LIGHTNING

            </Typography>
            <Typography gutterBottom variant='h1' component='div'>
            Salesforce Lightning is a powerful, user-friendly <br/>
            platform that allows businesses <br/>
            to streamline their operations, improve <br/>
            customer experiences, and boost their <br/>
            productivity.
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

        <Typography gutterBottom variant='h3' className="upperCase" component='h3'>
        Why Salesforce Lightning Development
        </Typography>

        <Typography gutterBottom variant='h1' component='h1'>
        With Lightning, you can access all of your Salesforce data and tools from a single, intuitive interface, making it easier to manage your business and drive growth.
        </Typography>

        <Typography gutterBottom variant='h5' component='div'>
        At InfoDrive Solutions, we are dedicated to helping our clients maximize the benefits of Salesforce Lightning. Our team of certified Salesforce consultants has years of experience working with the platform, and we are committed to delivering top-quality services to our clients. <br/>
        One of the key benefits of Salesforce Lightning is its ability to provide a personalized, seamless experience for users. With lightning, you can tailor the interface to your specific needs, giving you the information and tools, you need to get your job done quickly and efficiently.
        </Typography>
      </section>


      <section className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices`}>
        <Typography className="mb0" gutterBottom variant='h2' component='div'>
        Another advantage of Lightning is its integration capabilities. With lightning, you can easily connect your Salesforce account to other systems and platforms, such as CRM software, marketing automation tools, and more.
        </Typography>
                <br/>

                <Typography className="mb0" gutterBottom variant='body2' color="text.secondary">
                This allows you to bring all of your data together in one place, giving <br/>
                you a complete view of your business and enabling you to make better, <br/>
                more informed decisions.
                In addition to these core features, Salesforce Lightning also offers a <br/>
                wide range of advanced tools and features that can help your business <br/>
                grow and thrive. These include:
                </Typography>
        <br/>
        <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={3} className>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Salesforce Einstein
                  </Typography>
                  <br />
                  <Typography className="pr30" variant='body2' color='text.secondary'>
                  This artificial intelligence platform uses machine learning to provide insights and predictions that can help you make better business decisions.
                 </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning app builder
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  This tool allows you to create custom, interactive apps that can be accessed from any device.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning flow             
                  </Typography>
                  <br />
                  <Typography className="pr30" variant='body2' color='text.secondary'>
                  This feature allows you to automate business processes and workflows, saving you time and improving efficiency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning communities          
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  With this feature, you can create online communities for your customers, partners, and employees, enabling them to collaborate and share information in real time.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid> 
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox  pb0 `}>
        <Typography className="mb0" gutterBottom variant='h2' component='div'>
        Our Lightning services includes:
        </Typography>
                <br/>

        <Typography className="mb0" gutterBottom variant='body2' color="text.secondary">
           At InfoDrive Solutions, we offer a range of services to help our clients get the most out of Salesforce Lightning. These include:
        </Typography>
        <br/>
        <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={3} className>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning implementation
                  </Typography>
                  <br />
                  <Typography className="pr30" variant='body2' color='text.secondary'>
                  We can help you set up and customize your Lightning platform, ensuring that it meets the specific needs of your business.
                 </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning training
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  Our team can provide training and support to help you and your team get up to speed on the Lightning platform, so you can take full advantage of its features and capabilities.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning consulting             
                  </Typography>
                  <br />
                  <Typography className="pr30" variant='body2' color='text.secondary'>
                  Our consultants can provide guidance and advice on how to use Lightning to drive business growth and improve your operations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className='mb0' component='div'>
                  Lightning support         
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  We offer ongoing support and maintenance to ensure that your Lightning platform is always running smoothly and efficiently.
                  </Typography>
                  </CardContent>
              </Card>
            </Grid> 
          </Grid>
        </Box>
      </section>

      <br/>
      
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
