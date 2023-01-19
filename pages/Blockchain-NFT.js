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
      </Head>
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
            <Grid item xs={7}>
              <Card>
                <img
                  alt='Remy Sharp'
                  src='images/pexels-prakhar-bansal-732183.jpg'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={`sectionBox locationBox contactUsArea leadForm`}>
        <Box sx={{ flexGrow: 1 }} className='locationContent'>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Grid item xs={12} className='contactUsB contactUsB1'>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant='h7' component='div'>
                      InfoDrive Solutions Pte Ltd
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Address: 2 Changi Business Park avenue 1. #02-00,
                      Singapore <br />
                      Phone: +65-9238 4299
                      <br />
                      Email: info@infodrive-solutions.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} className='contactUsB contactUsB2'>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant='h7' component='div'>
                      InfoDrive Solutions Sdn Bhd
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Address: 32-07 Level 32, Q Sentral, 2A, Jalan Stesen
                      Sentral 2, 50470 Kuala Lumpur, Malaysia <br />
                      Phone: +60-1 2327 5811
                      <br />
                      Email: info@infodrive-solutions.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} className='contactUsB contactUsB3'>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant='h7' component='div'>
                      InfoDriven Solutions Pvt Ltd
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Address: #88, Borewell Road, opposite Whitefield Post
                      Office, Whitefield, Bangalore – 560066
                      <br />
                      Phone: +91-960 61880 81
                      <br />
                      Email: info@infodrive-solutions.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs='6' className='leadFormBox'>
              <Box
                sx={{
                  '& > :not(style)': {
                    ml: 6,
                    mt: 7,
                    maxWidth: '41%',
                    width: '41%',
                  },
                }}
              >
                <Typography
                  gutterBottom
                  variant='h2'
                  className='white'
                  component='div'
                >
                  Request a call back
                </Typography>
                <TextField
                  id='input-with-icon-textfield'
                  label='Full Name'
                  fullWidth
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'></InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
                <TextField
                  id='input-with-icon-textfield'
                  label='Email Address'
                  fullWidth
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'></InputAdornment>
                    ),
                  }}
                  variant='standard'
                />

                <TextField
                  id='input-with-icon-textfield'
                  label='Contact Number'
                  fullWidth
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'></InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
                <TextField
                  id='input-with-icon-textfield'
                  label='Message'
                  fullWidth
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'></InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
                <Stack spacing={2} direction='row'>
                  <Button className='bgRed white' variant='contained'>
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      <Footer />
    </div>
  );
}
