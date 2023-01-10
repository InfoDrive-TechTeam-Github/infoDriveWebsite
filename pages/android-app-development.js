import * as React from 'react';
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

export default function AndroidAppDevelopment() {
  
  return (
    <div >
      <Header/>
      <div className="sliderBox">
      <img style={{width: '100%'}} src="images/pexels-helena-lopes-933964.jpg"/>
      <Box sx={{ flexGrow: 1 }} className="sliderContent">
            <Grid container spacing={0}>
            <p>
            We are one of the leading <br/> Android app development <br/> companies offering <br/> unmatched business <br/> results.</p>
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

    <section className={`sectionBox`}>
            <Typography gutterBottom variant="h3" component="div">
            ANDROID APP DEVELOPMENT
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
            Our expert team builds feature-rich, cost-effective, and scalable Android apps customized to your business requirements using cutting-edge technology and tools.
            </Typography>
      </section>

      <section className={`sectionBox androidDevelopmentBox`}>
        <Box sx={{ flexGrow: 1 }} >
              <Grid container spacing={0} className="androidDevelopment">
                  <Grid item xs={10} className="androidDevelopmentLeft">
                    <Typography gutterBottom variant="h3" component="div">
                    ANDROID APP DEVELOPMENT
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div">
                    Infodrive is a leading Android App development company that aims to produce long-term relationships with businesses through its extensive production and design process. We are known for providing engaging mobile apps and innovative solutions. We design and develop custom Android applications for startups and enterprise businesses, that are highly capable of helping your businesses succeed in this competitive world.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">Our Android app developers regularly update themselves about the most advanced technologies and skills. Having the experience of working with different Android device brands and types, our Android app development services will always give you an accurate and reliable product for various business verticals.</Typography>
                  </Grid>

                  <Grid item xs={7} className="androidDevelopmentRight">
                    <Card>
                      <img
                        alt="Remy Sharp"
                        src="images/professional-programmer-working-late-dark-office.jpeg"
                      />
                    </Card>
                  </Grid>
              </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox pt0 pb0`}>
        <Typography gutterBottom variant="h2" className='mb0' component="div">Key benefits of our Android <br/> app development services</Typography>
        <br/>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Easy customization
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      As we have seen, most businesses make this common mistake i.e., they go for excellent packaged applications and then end up completely changing their business processes. Custom Android application development offered by us is always a better app solution than a standard one because it is exactly aligned with your business requirements and goals.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card >
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Enhanced Security and Easy Marketing
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      People today use mobile apps for a wide range of purposes, even various businesses have integrated personalized apps to increase their marketing and customer support. Still, malware attacks continue to be a threat to users. It is for this reason that our Android app developers constantly carry out safety tests and provide continuous support, to keep the applications updated and reliable.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Scope for innovation
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      Mobile applications today have an exceptionally large scope in every field. Several educational industries are getting updated with online courses, and now it has become easy for children as well as elders to learn with online courses. Being a world-class Android App Development Company, we provide unique and understandable Android mobile applications for different users across the world.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Low investment and high ROI
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      The cost of resources is considered the primary factor influencing the cost of developing an app. The creation of Android applications can result in significant, long-term rewards. When compared to other development platforms like iOS, etc., the investment in Android is incredibly minimal. We help you in expanding your customer base and accelerate business growth at a very affordable price.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card >
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Integration with social media
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      Maintaining trust with social media is helpful to any app that markets products or services. Keeping this in mind, Cynoteck offers opportunities like integrating social media into mobile app development, which helps maintain industry relevance. Moreover, it also brings business growth through app downloads and uses.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
          </Box>
      </section>


      <section className={`sectionBox whyUsBox serviceOffer pb0`}>
        <Typography gutterBottom variant="h2"  component="div">Services we offer in <br/> Android app development</Typography>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Card>
                    <Avatar
                      alt="Remy Sharp"
                      src="images/33301.png"
                      sx={{ width: 65, height: 65, marginLeft: 2, marginBottom:3 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Android app <br/> development consultation
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      We offer Android app consultation to help businesses become successful in the real world, integrating their ideas with customer expectations and an Android-specific customer base. Our consultants help you in choosing the best Android platform and the way by which you can conquer the store. This provides users with an amazing and thrilling experience.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={6}>
                  <Card>
                    <Avatar
                      alt="Remy Sharp"
                      src="images/33301.png"
                      sx={{ width: 65, height: 65, marginLeft: 2, marginBottom:3 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Android UI/UX <br/>design
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      Being a world-class Android app development company, we consider UI/UX to be the most vital component of our Android app development services. This distinguishes us from the competition in the field. Our team of Android app designers is skilled at producing engaging experiences, regardless of the Android version or device.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <Avatar
                      alt="Remy Sharp"
                      src="images/33301.png"
                      sx={{ width: 65, height: 65, marginLeft: 2, marginBottom:3 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Custom Android <br/> app development
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      Every organization is unique, and everyone has different needs when developing an Android app. Therefore, we use an approach where the client's needs are thoroughly discussed and analyzed, followed by brainstorming, design, testing, and launch. Our Android app developers are skilled in creating reliable and scalable Android solutions.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <Avatar
                      alt="Remy Sharp"
                      src="images/33301.png"
                      sx={{ width: 65, height: 65, marginLeft: 2, marginBottom:3 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Multi-platform <br/> deployment
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      Businesses today aim to reach as many customers as possible with their products. Being a top Android app development company, we specialize in the deployment and integration of seamless Android apps. No matter what platform you want to be on, our experienced Android development team can help you in getting there.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <Avatar
                      alt="Remy Sharp"
                      src="images/33301.png"
                      sx={{ width: 65, height: 65, marginLeft: 2, marginBottom:3 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                      Android <br/> software testing
                      </Typography>
                      <br/>
                      <Typography variant="body2" color="text.secondary">
                      Testing, security, and performance are the main priorities in our Android mobile development approach. We do QA testing at every level of development, finding defects, reporting, bug tracking, fixing, and retesting. We combine manual and automated testing procedures, providing our clients with the best products.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>


              </Grid>
          </Box>
      </section>

      <section className={`sectionBox connectUs backDrop mb0`}>
            <Typography gutterBottom variant="h3" className='white pb15 pt15 poppin' component="div">
              Ready to take your business to the next level with a custom web or mobile app?
            </Typography>
            <Button href="/contact-us" className='bgRed white pl15 pr15 poppin normalCase'>
              Connect with Our Expert
            </Button>
      </section>

      {/* <section className={`sectionBox connectUs backDrop`}>
            <Typography gutterBottom variant="h3" className='white pb15 pt15 poppin' component="div">
              Ready to take your business to the next level with a custom web or mobile app?
            </Typography>
            <Button href="/contact-us" className='bgRed pl15 pr15 poppin normalCase'>
              Connect with Our Expert
            </Button>
      </section> */}
<section className={`sectionBox locationBox contactUsArea leadForm mt0`} style={{marginTop:"0px"}}>
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