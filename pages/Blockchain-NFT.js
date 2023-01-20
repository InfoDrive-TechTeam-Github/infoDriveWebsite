import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Head from 'next/head';
import LeadForm from '../components/leadForm';

export default function blockchain() {
  return (
    <div>
      <Head>
        <title>
          Blockchain & NFT Development Services & Company | Developer in
          Singapore, Malaysia, and India
        </title>
        <meta
          name='description'
          content='InfoDrive Solutions - A leading blockchain and NFT development company in Singapore, Malaysia, and India. Our expert developers provide cutting-edge solutions for your business.'
        />
        <meta
          name='keywords'
          content='Blockchain Application Development Services, Blockchain Development Services in Singapore, Blockchain Development Services in Malaysia, Blockchain Development Services in India, Blockchain Development Services in Bangalore, Blockchain Development Services in Kuala Lumpur, Blockchain Development Company in Singapore, Blockchain Development Company in Malaysia, Blockchain Development Company in Kuala Lumpur, Blockchain Development Company in India, Best Blockchain Developer in Singapore, Hire Blockchain Developer in Singapore'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/blockchain-nft.html'
        />
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
      <div className='sliderBox blockNFT'>
        <img
          style={{ width: '100%', opacity: '0.5' }}
          src='images/Blockchain_background.png'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h1' component='div'>
              We offer reliable and advanced <br /> blockchain solutions to
              secure a <br /> formidable position for our clients when <br />
              the future unfolds
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
      <section className={`sectionBox BlockchainUsBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className='fd1'>
            <Grid item xs={6}>
              <Card className='fp1'>
                <Typography gutterBottom variant='h3' component='div'>
                  Exact analysis
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className='bp2'
                  >
                    Our blockchain consultants cover all challenges
                    <br /> emerging in blockchain development and <br /> deliver
                    thorough analysis of current business <br />
                    processes, specify needs for blockchain <br /> solution,
                    estimate value from blockchain <br /> application in your
                    business.
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <img
                  alt='Exact analysis'
                  className='chain_img'
                  src='images/Exact-analysis.png'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={`sectionBox BlockchainUsBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <img
                  alt='On time deliverige'
                  className='chain_img'
                  src='images/on-time-deliverie.png'
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className='fp2'>
                <Typography gutterBottom variant='h3' component='div'>
                  Proven on-time deliveries
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h2'
                    component='div'
                    className='bp2'
                  >
                    Infodrive Solutions has over 9 years of <br />
                    experience in eCommerce and <br /> blockchain to assist you
                    in successfully
                    <br /> adopting NFT.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='h2'
                    component='div'
                    className='bp2'
                  >
                    We have flawlessly deployed more than 10 <br />{' '}
                    tokenization-related projects.
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
                className='readmore white pl0 '
                variant='text'
              >
                CONTACT US <ArrowRightAltIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </section>
      <LeadForm />
      <Footer />
    </div>
  );
}
