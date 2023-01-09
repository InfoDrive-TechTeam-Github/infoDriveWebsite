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

export default function WebMobileApp() {
  
  return (
    <div >
      <Header/>
      <div className="sliderBox">
      <img style={{width: '100%'}} src="images/pexels-djordje-petrovic-2102416.jpeg"/>
      <Box sx={{ flexGrow: 1 }} className="sliderContent">
            <Grid container spacing={0}>
            <p>
            We build custom web and <br/>mobile applications and <br/>provide consulting for startups, small and <br/>mid-large scale businesses</p>
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

    <section className={`sectionBox`}>
            <Typography gutterBottom variant="h3" component="div">
              INTRO
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
             We use a wide range of full-stack technologies connecting a variety of people, businesses, and industries which are responsive for different platforms and devices.
             InfoDrive Solutions is a leading web and mobile app development company with a strong presence in Singapore, Malaysia, and India. we specialize in creating high-quality and user-friendly web and mobile applications that help businesses of all sizes achieve their goals. Our team of experienced developers has a track record of delivering successful projects on time and within budget. <br/>
            We understand that every business is unique, which is why we offer custom web and mobile app development solutions to fit your specific needs. Whether you are looking to create a new application from scratch or upgrade an existing one, we have the skills and expertise to bring your vision to life.
            Our web and mobile app development process is designed to be efficient and transparent. We begin by understanding your business objectives and gathering requirements. From there, we move on to the design and development phase, where we create prototypes and conduct user testing to ensure that the final product meets your expectations.
            We use the latest technologies and frameworks to build web and mobile applications that are fast, secure, and scalable. Some of the technologies we work with include:
            <ul>
               <li>HTML, CSS, and JavaScript for front-end development</li>
               <li>Python, Ruby, and Java for back-end development</li>
               <li>React, Angular, and Vue for front-end JavaScript libraries</li>
               <li>iOS and Android for mobile app development</li>
            </ul>
            In addition to our technical expertise, we also place a strong emphasis on user experience (UX) design. We believe that the key to a successful web or mobile app is a seamless and intuitive user interface (UI). Our designers work closely with our developers to create engaging and easy-to-use interfaces that meet the needs of your target audience.
            At InfoDrive Solutions, we are committed to delivering top-quality web and mobile app development services at competitive prices. We offer flexible pricing options to fit your budget, including fixed-price contracts and hourly rates.
            </Typography>
      </section>

      <section className={`sectionBox connectUs backDrop`}>
            <Typography gutterBottom variant="h3" className='white pb15 pt15 poppin' component="div">
              Ready to take your business to the next level with a custom web or mobile app?
            </Typography>
            <Button href="/contact-us" className='bgRed pl15 pr15 poppin normalCase'>
              Connect with Our Expert
            </Button>
      </section>

      <section className={`sectionBox ourValueBox`}>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={0}>
              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" className="red" component="div">
                Various technology stack
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We divide complex problems into simpler <br/> solutions that are a combination of frontend, <br/>backend, and full stacks.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" className="red" component="div">
                Hands-on experience
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We have worked with multiple frameworks, <br/> tools, domains to have to hands-on <br/>experience which can be of great advantage. <br/>These experiences are accumulated from past projects.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" className="red" component="div">
                Results oriented
                </Typography>
                <Typography gutterBottom variant="h5" component="div">Understanding the requirement is the key,<br/> so our design and development process <br/> starts with a deep understanding of your company or <br/> organization and we work keeping the output in mind.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" className="red" component="div">
                Unique design
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We work with you to ensure that your digital <br/> marketing goals are realized with the designs we create.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" className="red" component="div">
                Unique products
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We learn about who you are and what your <br/> goals are to create a unique website <br/> experience for your target audience.</Typography>
              </Grid>
            </Grid>
        </Box>
      </section>


      <section className={`sectionBox whyUsBox pb0`}>
      <Typography gutterBottom variant="h2" className='' component="div"> Our expertise lies in various technologies</Typography>
      <br/>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Our expertise lies in various technologies
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    100+ projects in long-term partnerships with 100+ clients worldwide allow us to provide comprehensive technical consultations for start-ups with absolute guarantee of quality.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Long-standing reputation
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    Close to 10 years of experience inherited and the position in earned in Singapore as one of the reliable technology corporations have cemented our prestige and position in the IT market of the region.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Fast Delivery & Reasonable Cost
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                    We are dedicated to delivering high quality software solutions in a timely and cost-effective manner. Our experienced team of developers is committed to meeting the specific needs of our clients and delivering results that exceed expectations. We understand that every project is unique, which is why we offer flexible pricing and delivery options to ensure that our clients receive the best value for their investment.
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