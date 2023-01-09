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
      <Footer/>
    </div>
  )
}