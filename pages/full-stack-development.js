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
            <Button href="/contact-us" className='readmore' variant='text'>
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className='socical-network'>
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
              <ListItemButton className="pl0 readmore" component="a" sx={{ textAlign: 'center' }}>
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
      <Footer />
    </div>
  );
}
