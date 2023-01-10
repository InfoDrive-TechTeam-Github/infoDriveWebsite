import * as React from 'react';
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'
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

export default function ServicesForStartUps() {
  
  return (
    <div >
      <Header/>
      <div className="sliderBox">
      <img style={{width: '100%'}} src="images/pexels-helena-lopes-933964.jpg"/>
      <Box sx={{ flexGrow: 1 }} className="sliderContent">
            <Grid container spacing={0}>
            <p>
            InfoDrive Solutions is a leading <br/>Technology solution provider and <br/>we are helping many start-ups <br/> and small-medium businesses to <br/> build products from scratch.</p>
            <Button href="/contact-us" className="readmore white" variant="text">Let's Talk <ArrowRightAltIcon/></Button>
                <nav className="socical-network">
                <List>
                    <ListItem>
                      <ListItemButton component="a" href="https://www.facebook.com/InfoDrivesolutions/">
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="https://in.linkedin.com/company/infodrive-solutions/">
                        <ListItemIcon>
                          <LinkedInIcon />
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

      <section className={`sectionBox aboutUsBox3 servicesForStartUp`}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} className="pr30">
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    We analyse your start-up model in entirely, consult and offer the right technology solutions
                    </Typography>
                    <br/>
                    <hr/>
                    <br/>
                    <Typography gutterBottom variant="h3" component="div">
                    Our leading technology experts will bring you the latest technologies with a variety of great benefits and catered solutions.
                    </Typography>
                    <br/>
                    <hr/>
                    <br/>
                    <Typography gutterBottom variant="h3" component="div">
                    We build custom applications for product-market fit:
                    </Typography>
                    <ul>
                        <li>mobile and/ or web applications</li>
                        <li>blockchain-based applications</li>
                        <li>enterprise solutions(salesforce)</li>
                    </ul>
                    <Button className='readmore' variant="text">LEARN MORE ABOUT US <ArrowRightAltIcon/></Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <img
                    alt="Remy Sharp"
                    src="images/pexels-christina-morillo-1181271.jpeg"
                  />
                </Card>
              </Grid>
            </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox`}>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h3" className="red" component="div">
                        TECHONOLGY SOLUTIONS FOR START UPS
                        </Typography>
                        <Typography gutterBottom variant="h2" component="div">
                        Finding and running a start-up could be an extremely exciting yet highly challenging endeavour.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="pb30" >
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h5" component="div">Today, close to 90% of start-ups face failure due to the challenges faced with the fast pace of technology development as well as the growth of well-known companies in the market.</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h5" component="div">Employing the services provided by software development outsourcing vendors like us will allow start-ups to have better technical execution, by ensuring product quality is ready for pitching and fund-rising.</Typography>
                    </Grid>
                </Grid>
            </Box>
           <Box className="pt30" sx={{ flexGrow: 1 }} >
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Card>
                      <img
                        alt="Remy Sharp"
                        src="images/pexels-cottonbro-studio-5473298.jpeg"
                      />
                    </Card>
                </Grid>
            </Grid>
          </Box>
      </section>

      <section className={`sectionBox connectUs backDrop`}>
            <Typography gutterBottom variant="h3" className='white pb15 pt15 poppin' component="div">
            Get in touch with our team and learn how we can help your startup succeed
            </Typography>
            <Button href="/contact-us" className='bgRed white pl15 pr15 poppin normalCase'>
              Connect with Our Expert
            </Button>
      </section>

      <section className={`sectionBox whyUsBox`}>
      <Typography gutterBottom variant="h2" className='' component="div">Why Your Start-Up Should Work With Us?</Typography>
      <br/>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Faster product 
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    Launch product in shortest time possible using technology solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Lower cost
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    Easily break down business expenses accordingly, reduce funding pressure.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Mitigate risk
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    Mitigate challenges on an end-to-end journey with us to a completed product.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Expert advisors
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    CTO and Founders with multiple exits providing start-up entrepreneurs with advices.
                    </Typography>
                  </CardContent>
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

      <Footer/>
    </div>
  )
}