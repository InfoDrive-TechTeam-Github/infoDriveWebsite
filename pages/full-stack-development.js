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
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '29px',
    letterSpacing: '0em',
    // textAlign: 'center',
    color: ' #FFFFFF',
  };

  return (
    <div>
      <Header />

      <div className='sliderBox'>
        <img style={{ width: '100%' }} src='images/Rectangle.jpg' />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <p>
              We are a full stack development company
              <br /> that serves businesses in Singapore <br />, Malaysia , and
              India. Our goal is to <br /> provide top-quality solutions that
              help <br /> businesses thrive in the digital world.
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
          </Grid>
        </Box>
      </div>

      <section className={`sectionBox`}>
        <Typography gutterBottom variant='h3' component='div'>
          Full Stack DEVELOPMENT,
          <br /> MAINTENANCE AND SUPPORT
        </Typography>
        <Typography gutterBottom variant='h2' component='div'>
          Our team of experienced developers specializes in a wide range of
          technologies, including JavaScript, HTML, CSS, Python, Java, PHP, and
          more. We have the expertise and tools to build custom web and mobile
          applications that are tailored to your specific needs and goals.
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          Our full stack development process is designed to be efficient, agile,
          and transparent. We begin by understanding your business requirements
          and objectives, and then we work closely with you to design and
          develop a solution that meets your needs. Throughout the process, we
          keep you informed of our progress and welcome your input and feedback.
        </Typography>
      </section>
      <section
        className={`sectionBox aboutUsBox3 servicesForStartUp `}
        style={{
          backgroundImage: `url('images/Rectangle2.png')`,
        }}
      >
        <Box sx={{ flexGrow: 1 }} className='ourMissionContent '>
          <p
            style={{
              fontSize: '30px',
              fontWeight: '600',
              lineHeight: '37px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: '#FFFFFF',
              height: '70px',
              width: '738px',
              marginLeft: '150px',

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
                  Web application
                  <br />
                  development
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
                  Mobile application
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
                  E-commerce
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
                  Custom software
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
                    backgroundImage: `url('images/vector6.png')`,
                  }}
                ></div>
                <p style={typographyStyles}>Responsiveness</p>
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
                  Customer
                  <br />
                  service
                </p>
              </div>
            </div>
          </div>
        </Box>
      </section>

      {/*we are speclised in section*/}

      <section className={`sectionBox whyUsBox`}>
        <Typography gutterBottom variant='h2' className='mb0' component='div'>
          {' '}
          WE ARE <br /> SPECIALIZED IN
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    Expertise
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    Our developers have a wealth of experience in a wide range
                    of programming languages, frameworks, and technologies. This
                    allows us to deliver custom solutions that are tailored to
                    meet the specific needs of our clients.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    Quality
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    We have strict quality standards and always strive to
                    deliver projects that meet and exceed our clients'
                    expectations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    Responsiveness
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    We understand that time is of the essence, especially in the
                    fast-paced world of web development. That's why we are
                    dedicated to delivering projects on time and on budget.
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
                real-life products.
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
