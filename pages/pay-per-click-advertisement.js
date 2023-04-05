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
          Google Ads Management | Pay-Per-Click Advertising Services in
          Singapore, Malaysia
        </title>
        <meta
          name='description'
          content='Drive more traffic to your website with our professional pay-per-click advertising services. Our team at InfoDrive Solutions can help you increase your online visibility and reach your target audience.'
        />
        <meta
          name='keywords'
          content='Pay-per-click advertising services, Google Ads management services, Display advertising services, Remarketing advertising services, Shopping Ads management services, Local search advertising services, Mobile advertising services, Google Advertising Services in Singapore, Google Advertising Services in Malaysia, Google Ads Services in Malaysia, Google Ads Services in Singapore, Search Ads Services in Singapore, Search Ads Services in Malaysia, Google Ads management services in Singapore, Pay-per-click advertising services in Singapore, Pay-per-click advertising services in Malaysia'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/pay-per-click-advertisement.html'
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
      <div className='sliderBox customerRelationshipManagement'>
        <img
          style={{ width: '100%' }}
          src='images/8c379a749146d0d08a88b518990cf8b4.jpeg'
          alt='  Google Ads Management'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent salePart'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h3' component='div'>
              Pay Per Click Advertisement
            </Typography>
            <Typography gutterBottom variant='h1' component='div'>
              PPC advertising is a powerful tool for <br />
              driving traffic to your website and attracting <br />
              potential customers. By placing ads on Google and other <br />
              search engines, you can reach a wider audience and <br />
              increase your visibility online.
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

      <section className={`sectionBox whyUsBox  pb0 `}>
        <Typography className='mb0' gutterBottom variant='h2' component='div'>
          Our Company InfoDrive Solutions is a leading provider of pay-per-click
          (PPC) advertisement services in Singapore, Malaysia, and India.
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    className='pr30'
                    variant='body2'
                    color='text.secondary'
                  >
                    With years of experience and a team of highly skilled
                    professionals, we are committed to helping businesses of all
                    sizes reach their full potential through targeted,
                    cost-effective PPC campaigns. However, creating and managing
                    a successful PPC campaign can be complex and time-consuming,
                    which is where InfoDrive Solutions comes in.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    className='pr30'
                    variant='body2'
                    color='text.secondary'
                  >
                    As a Google Premier Partner, we have the expertise and
                    resources to create and manage highly effective PPC
                    campaigns that deliver results. Our team of certified PPC
                    experts will work with you to understand your business goals
                    and create a customized strategy that meets your needs and
                    budget. We use advanced tools and techniques to optimize
                    your campaigns and ensure that you get the best return on
                    investment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <br />
      <section
        className={`sectionBox saleForcesDevelopmentBox marketCloudBox sapEmarsysServices socialMediaService onlineService`}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className='androidDevelopment'>
            <Grid item xs={5} className='saleForcesDevelopment'>
              <Typography gutterBottom variant='h5' component='div'>
                One of the main benefits of PPC advertising is that it allows
                you to target specific keywords and demographics. This means
                that you can reach the people who are most likely to be
                interested in your products or services, rather than wasting
                money on irrelevant clicks. With our extensive keyword research
                and targeting capabilities, we can help you reach the right
                audience at the right time.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section
        className={`sectionBox whyUsBox serviceOffer pb0 salesForceServices`}
      >
        <Typography
          className='w100 mb0 pb10'
          gutterBottom
          variant='h2'
          component='div'
        >
          Another advantage of PPC advertising <br />
          is that it is highly measurable. We use <br />
          advanced tracking and analytics tools <br />
          to monitor the performance of your <br />
          campaigns in real-time and make <br />
          adjustments as needed to ensure that <br />
          you are getting the most value for your money.
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    className='pr30'
                    variant='body2'
                    color='text.secondary'
                  >
                    This allows us to continuously optimize your campaigns and
                    make sure that you are getting the best possible return on
                    investment. In addition to our PPC services, we also offer a
                    range of other digital marketing solutions, including search
                    engine optimization (SEO), social media marketing, and
                    website design and development. Our team of experts will
                    work with you to create a comprehensive digital marketing
                    strategy that helps you achieve your business goals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    className='pr30'
                    variant='body2'
                    color='text.secondary'
                  >
                    Whether you are a small business just starting out or an
                    established company looking to expand your online presence,
                    InfoDrive Solutions has the expertise and resources to help
                    you succeed. Contact us today to learn more about our PPC
                    advertising services in Singapore, Malaysia, and India and
                    how we can help your business grow.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox`}>
        <Typography gutterBottom variant='h1' component='h2'>
          Why do you need a Google Ads <br />
          Management Company?
        </Typography>

        <Typography gutterBottom variant='h5' component='div'>
          There are several reasons why businesses may choose to work with a
          Google AdWords management company like InfoDrive Solutions. Some of
          the main benefits include:
        </Typography>
      </section>
      <section className={`sectionBox whyUsBox  pb0 pt0 `}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='mb0 bluecolor'
                    component='div'
                  >
                    Expertise and experience
                  </Typography>
                  <br />
                  <Typography
                    className='pr30'
                    variant='body2'
                    color='text.secondary'
                  >
                    PPC advertising can be complex, and it takes a lot of time
                    and expertise to create and manage successful campaigns. A
                    Google AdWords management company like InfoDrive Solutions
                    has a team of certified professionals with years of
                    experience in the field, so you can trust that your
                    campaigns are in good hands.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='mb0 bluecolor'
                    component='div'
                  >
                    Time-saving
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    Managing a PPC campaign requires a lot of time and effort,
                    including researching keywords, writing ad copy, creating
                    landing pages, and analyzing data. By working with a Google
                    AdWords management company, you can save time and focus on
                    running your business while still taking advantage of the
                    benefits of PPC advertising.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='mb0 bluecolor'
                    component='div'
                  >
                    Better results
                  </Typography>
                  <br />
                  <Typography
                    className='pr30'
                    variant='body2'
                    color='text.secondary'
                  >
                    A Google AdWords management company has the tools and
                    resources to create and manage highly effective campaigns
                    that deliver results. By using advanced techniques like A/B
                    testing and data analysis, we can continuously optimize your
                    campaigns to ensure that you are getting the best return on
                    investment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='mb0 bluecolor'
                    component='div'
                  >
                    Cost-effective
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    PPC advertising can be an expensive endeavor, especially if
                    you are not familiar with the most effective strategies. A
                    Google AdWords management company can help you create a
                    budget-friendly campaign that still delivers results, saving
                    you money in the long run.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox ourBeliefBox pt0 pb0`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={5} style={{ padding: '30px' }}>
              <br />
              <Typography gutterBottom variant='h3' component='div'>
                We pride ourselves on delivering exceptional results for our
                clients. Our team is dedicated to helping businesses and
                organizations in Singapore, Malaysia, and India succeed online
                and achieve their business goals. <br />
              </Typography>
              <br />
              <Typography gutterBottom variant='h5' component='div'>
                If you're interested in learning more about our SMO services, we
                encourage you to contact us for a consultation. We'd be happy to
                discuss your business needs and how we can help you succeed on
                social media.
                <br />
              </Typography>
              <br />
              <Button
                href='/contact-us.html'
                className='readmore white'
                variant='text'
              >
                CONTACT US <ArrowRightAltIcon />
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Card>
                <img
                  alt='Pay-Per-Click Advertising Services'
                  src='images/pexels-prakhar-bansal-732183.jpg'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      {/* <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Boost Your Customer Engagement with SAP Emarsys
        </Typography>
        <Button
          href='/contact-us.html'
          className='bgRed white pl15 pr15 poppin upperCase'
        >
          Connect with Our Expert
        </Button>
      </section>
      <LeadForm /> */}
      <Footer />
    </div>
  );
}
