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
              INTRO
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
            We use a wide range of full-stack technologies connecting a variety of people, businesses, and industries which are responsive for different platforms and devices.
            </Typography>
      </section>

      <section className={`sectionBox ourValueBox`}>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={0}>
              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" component="div">
                Various technology stack
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We divide complex problems into simpler <br/> solutions that are a combination of frontend, <br/>backend, and full stacks.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" component="div">
                Hands-on experience
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We have worked with multiple frameworks, <br/> tools, domains to have to hands-on <br/>experience which can be of great advantage. <br/>These experiences are accumulated from past projects.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" component="div">
                Results oriented
                </Typography>
                <Typography gutterBottom variant="h5" component="div">Understanding the requirement is the key,<br/> so our design and development process <br/> starts with a deep understanding of your company or <br/> organization and we work keeping the output in mind.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" component="div">
                Unique design
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We work with you to ensure that your digital <br/> marketing goals are realized with the designs we create.</Typography>
              </Grid>

              <Grid item xs={6} className="pb30">
                <Typography gutterBottom variant="h2" component="div">
                Unique products
                </Typography>
                <Typography gutterBottom variant="h5" component="div">We learn about who you are and what your <br/> goals are to create a unique website <br/> experience for your target audience.</Typography>
              </Grid>
            </Grid>
        </Box>
      </section>


      <section className={`sectionBox whyUsBox`}>
      <Typography gutterBottom variant="h2" className='mb0' component="div"> Our expertise lies in <br/> various technologies</Typography>
      <br/>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    Our expertise lies in <br/> various technologies
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
                    no content here. To provide
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