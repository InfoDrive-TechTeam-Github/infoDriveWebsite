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
export default function FullstackDevelopment() {
  return (
    <div>
      <Header />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='images/pexels-helena-lopes-933964.jpg'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <p>
            Infodrive has helped its <br/>
            clients rationalize business <br/> developments, 
            abetting <br/> development of specialized <br/> solutions at all stages
            </p>
            <Button href="/contact-us" className='readmore white' variant='text'>
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className='socical-network'>
            <List>
                    <ListItem>
                      <ListItemButton component="a" href="https://www.facebook.com/InfoDrivesolutions/">
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="/">
                        <ListItemIcon>
                          <TwitterIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="https://www.instagram.com/infodrivesolutions/">
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
        <Typography gutterBottom variant='h3' component='div'>
          APPLICATION DEVELOPMENT, MAINTENANCE AND SUPPORT
        </Typography>
        <Typography gutterBottom variant='h2' component='div'>
          Knowledge combined with quality gives our clients the edge over other competitors.
          Value assurance practices and optimized delivery cycles has been our focus from day one.
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          Our niche solutions are one of a kind in the market. Our applications maximize on key factors such as portability and scalability.  Infodrive enables clients to rationalize business developments and abet development of specialized solutions at all stages. We provide you highly differentiated and nifty solutions. Our applications provide maximum portability and scalability
        </Typography>
      </section>

      <section className={`sectionBox whyUsBox pb0 fullstackGame`}>
        <Typography gutterBottom variant='h2' component='div'>
        Stay ahead in the game with our full stack
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
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
                    Visual<br/>engineering
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
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
                    Product <br/> development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
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
                    Application<br/>development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt='Remy Sharp'
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
                      Porting <br/> migration
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt='Remy Sharp'
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
                      Production <br/> support
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt='Remy Sharp'
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
                      Product help desk <br/> & support
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox pb0`}>
        <Typography gutterBottom variant='h2' className='mb0' component='div'>
          We ARE <br/>SPECIALIZED IN
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' className="pb10" component='div'>
                  WORLD’S #1 CRM
                  </Typography>
                  <Typography gutterBottom variant='h3' component='div'>
                  Salesforce partner
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  Salesforce is the World’s #1 CRM today, over 100,000 of the world’s most innovative companies use Salesforce to close bigger deals, faster.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' className="pb10" component='div'>
                  AI AND ANALYTICS
                  </Typography>
                  <Typography gutterBottom variant='h3' component='div'>
                  Servicenow
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  Unleash the power of AI and analytics to surface information, make predictions, and automate repetitive tasks so you can focus on strategic work.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' className="pb10" component='div'>
                  ENTERPRISE APPLICATIONS
                  </Typography>
                  <Typography gutterBottom variant='h3' component='div'>
                  Mulesoft
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                  Today’s enterprise needs a network of applications, data, and devices connected by APIs, whether on-premises or in the cloud. 
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
            <Grid item xs={5} style={{ padding: '30px' }}>
              <Typography gutterBottom variant='h5' component='div'>
                Get in touch with us today for a <br /> non-obligation
                discussion and start transforming your start-up ideas into
                real-life products.{' '}
              </Typography>
              <br />
              <br />
              {/* <Button className='readmore pl0' variant='text'>
               
              </Button> */}
              <ListItemButton href="/contact-us.html" className="pl0 readmore white" component="a" sx={{ textAlign: 'center' }}>
              CONTACT US <ArrowRightAltIcon />
            </ListItemButton>
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
          <Box sx={{ flexGrow: 1 }} className="locationContent">
            <Grid container spacing={0}>
               <Grid item xs={6}>
                    <Grid item xs={12} className='contactUsB contactUsB1'>
                        <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                            InfoDrive Solutions Pte Ltd
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Address: 2 Changi Business Park avenue 1. #02-00, Singapore <br/>
                            Phone: +65-9238 4299
                            <br/>
                            Email: info@infodrive-solutions.com
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}  className='contactUsB contactUsB2'>
                        <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                            InfoDrive Solutions Sdn Bhd
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Address: 32-07 Level 32, Q Sentral, 2A, Jalan Stesen Sentral 2, 50470 Kuala Lumpur, Malaysia <br/>
                            Phone: +60-1 2327 5811 
                            <br/>
                            Email: info@infodrive-solutions.com
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}  className='contactUsB contactUsB3'>
                        <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                            InfoDriven Solutions Pvt Ltd
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Address: #88, Borewell Road, opposite Whitefield Post Office, Whitefield, Bangalore – 560066<br/>
                            Phone: +91-960 61880 81
                            <br/>
                            Email: info@infodrive-solutions.com
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
               </Grid>
               <Grid item xs="6"  className="leadFormBox">
                <Box sx={{ '& > :not(style)': { ml: 6, mt: 7,maxWidth:'41%', width:'41%' } }}>
               
                <Typography gutterBottom variant="h2" className='white' component="div">
                Request a call back
                            </Typography>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Full Name"
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email Address"
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />

                        <TextField
                            id="input-with-icon-textfield"
                            label="Contact Number"
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Message"
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />
                        <Stack spacing={2} direction="row">
                            <Button className="bgRed" variant="contained">Send Message</Button>
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
