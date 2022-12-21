import * as React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
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

export default function About() {
  
  return (
    <div >
      <Header/>
      <div className="sliderBox">
      <img style={{width: '100%'}} src="images/pexels-helena-lopes-933964.jpg"/>
      <Box sx={{ flexGrow: 1 }} className="sliderContent">
            <Grid container spacing={0}>
            <p>
            We are a world of people. <br/> We believe in the future. <br/> We believe technology brings us <br/>together and makes our lives better.</p>
            <Button className="readmore" variant="text">Let's Talk <ArrowRightAltIcon/></Button>
                <nav className="socical-network">
                  <List>
                    <ListItem>
                      <ListItemButton>
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemIcon>
                          <TwitterIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
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
              ABOUT US
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
            InfoDrive Solutions is a leading Technology solution provider and we are helping many start-ups and small-medium businesses to build products from scratch.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">InfoDrive Solutions is a Software Development and Digital Transformation Solutions company, we are headquartered in Singapore with regional offices in Malaysia (KL) & India (Bangalore). We deliver cutting-edge Digital Transformation Solutions to many of our prestigious customers in South East Asia.
            We provide curated IT resources companies need for technical implementation and bringing a better understanding of the costs of development.</Typography>
      </section>

      <section className={`sectionBox aboutUsBox aboutUsBox3`}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Card>
                  <img
                    alt="Remy Sharp"
                    src="images/pexels-fauxels-3183145.jpg"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    We analyze your start-up model in its entirety, consult and offer the right technology solutions. Our leading technology experts will bring you the latest technologies with a variety of great benefits and catered solutions that will accelerate and elevate your start-up.  <br/>
                    At InfoDrive Solutions, we work together with start-ups to build custom applications for product-market fit, including mobile and/or web solutions, blockchain-based applications, or enterprise solutions to have a seamless flow for customer engagement, with the help of tools like Salesforce or other enterprise software.
                    </Typography>
                    <Button className='readmore' variant="text">LEARN MORE ABOUT US <ArrowRightAltIcon/></Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Box>
      </section>
      {/* <Footer/> */}
    </div>
  )
}