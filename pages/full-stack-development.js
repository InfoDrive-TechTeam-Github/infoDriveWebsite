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

export default function About() {
  const typographyStyles = {
    fontFamily: 'General Sans',
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '29px',
    letterSpacing: '0em',
    // textAlign: 'center',
    color: ' #FFFFFF',
  };
  const thirdsectionheading = {
    fontSize: '35px',
    fontWeight: 600,
    lineHeight: '47px',
    letterSpacing: '0em',
    textAlign: 'left',
  };
  const descrption = {
    fontFamily: 'General Sans',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'left',
  };
  const details = {
    fontFamily: 'General Sans',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '18px',
    lineHeight: '29px',
  };
  return (
    <div>
      <Header />

      <div className='sliderBox'>
        <img style={{ width: '100%' }} src='images/Rectangle.jpg' />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <p>
            Infodrive has helped its
            <br />
            clients rationalize business <br /> developments, abetting <br />{' '}
            development of specialized <br /> solutions at all stages
          </p>
          <Button className='readmore' variant='text'>
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
        </Box>
      </div>

      <section className={`sectionBox`}>
        <Typography gutterBottom variant='h3' component='div'>
          APPLICATION DEVELOPMENT,
          <br /> MAINTENANCE AND SUPPORT
        </Typography>
        <Typography gutterBottom variant='h2' component='div'>
          Knowledge combined with quality gives our clients the edge over other
          competitors. Value assurance practices and optimized delivery cycles
          has been our focus from day one.
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          Our niche solutions are one of a kind in the market. Our applications
          maximize on key factors such as portability and scalability. Infodrive
          enables clients to rationalize business developments and abet
          development of specialized solutions at all stages. We provide you
          highly differentiated and nifty solutions. Our applications provide
          maximum portability and scalability
        </Typography>

        <section
          className={`sectionBox aboutUsBox ourMissionBox`}
          style={{
            backgroundImage: `url('images/Rectangle2.png')`,
            marginTop: 128,
          }}
        >
          <Box sx={{ flexGrow: 1 }} className='ourMissionContent'>
            <p
              style={{
                fontFamily: 'General Sans',
                fontSize: '30px',
                fontWeight: '600',
                lineHeight: '37px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#FFFFFF',
                height: '70px',
                width: '738px',

                // marginTop: '136px',
              }}
            >
              Stay ahead in the game with our full stack
            </p>

            {/**container for icons */}
            <div
              style={{
                marginTop: 138,

                borderRadius: 6,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                {/*icons*/}
                <div>
                  <div
                    className='vector1'
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundImage: `url('images/vector2.png')`,
                    }}
                  ></div>
                  <p style={typographyStyles}>
                    Visual
                    <br />
                    engineering
                  </p>
                </div>
                <div>
                  <div
                    className='vector2'
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundImage: `url('images/vector3.png')`,
                    }}
                  ></div>
                  <p style={typographyStyles}>
                    Product
                    <br />
                    development
                  </p>
                </div>
                <div>
                  <div
                    className='vector4'
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundImage: `url('images/vector1.png')`,
                    }}
                  ></div>
                  <p style={typographyStyles}>
                    Application
                    <br />
                    development
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginTop: 58,
                }}
              >
                <div>
                  <div
                    className='vector4'
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundImage: `url('images/vector4.png')`,
                    }}
                  ></div>
                  <p style={typographyStyles}>
                    Porting/
                    <br />
                    migration
                  </p>
                </div>
                <div>
                  <div
                    className='vector4'
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundImage: `url('images/vector6.png')`,
                    }}
                  ></div>
                  <p style={typographyStyles}>
                    Production
                    <br />
                    support
                  </p>
                </div>
                <div>
                  <div
                    className='vector4'
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundImage: `url('images/vector7.png')`,
                    }}
                  ></div>
                  <p style={typographyStyles}>
                    Product help desk
                    <br />& support
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </section>
      </section>

      <section
        className={`sectionBox aboutUsBox ourMissionBox`}
        style={{ background: 'white' }}
      >
        <Box sx={{ flexGrow: 1 }} className='ourMissionContent'>
          <Typography
            gutterBottom
            variant='h3'
            component='div'
            style={thirdsectionheading}
          >
            We ARE
            <br /> SPECIALIZED IN
          </Typography>
          <div
            className='speclized'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div className='Salesforce partner'>
              <p style={descrption}>WORLD’S #1 CRM</p>
              <p
                style={{
                  fontFamily: ' General Sans',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  lineHeight: '29px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                Salesforce partner
              </p>
              <p style={details}>
                Salesforce is the World’s #1 CRM today, over 100,000 of the
                world’s most innovative companies use Salesforce to close bigger
                deals, faster.
              </p>
            </div>
            <div className='Servicenow'>
              <p style={descrption}>AI AND ANALYTICS</p>
              <p
                style={{
                  fontFamily: ' General Sans',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  lineHeight: '29px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                Servicenow
              </p>
              <p style={details}>
                Unleash the power of AI and analytics to surface information,
                make predictions, and automate repetitive tasks so you can focus
                on strategic work.
              </p>
            </div>
            <div className='Mulesoft'>
              <p style={descrption}>ENTERPRISE APPLICATIONS</p>
              <p
                style={{
                  fontFamily: ' General Sans',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  lineHeight: '29px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                Mulesoft
              </p>
              <p style={details}>
                Today’s enterprise needs a network of applications, data, and
                devices connected by APIs, whether on-premises or in the cloud.
              </p>
            </div>
          </div>
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
              <Button className='readmore pl0' variant='text'>
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

      <Footer />
    </div>
  );
}
