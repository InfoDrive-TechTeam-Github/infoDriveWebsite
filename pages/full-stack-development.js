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

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Link from '@mui/material/Link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from '@mui/material/Avatar';
export default function About() {
  const typographyStyles = {
    fontSize: '22px',
    fontWeight: '500',
    // lineHeight: '29px',
    // letterSpacing: '0em',
    // textAlign: 'center',
    color: ' #FFFFFF',
    textAlign: 'center',
    width: '100%',
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

      {/* new div box*/}
      <section
        className={`sectionBox whyUsBox IosAppBox3 aboutUsBox3 servicesForStartUp`}
        style={{
          backgroundImage: `url('images/Rectangle2.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <p
              style={{
                fontSize: '30px',
                fontWeight: '600',
                lineHeight: '37px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#FFFFFF',
                height: '70px',
                width: '50vw',
                maxWidth: '738px',
                marginLeft: '5rem',

                marginTop: '60px',
              }}
            >
              Stay ahead in the game with our full stack
            </p>
            <Grid item xs={4}>
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
                  style={{ color: 'white' }}
                >
                  Web application <br /> development
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4}>
              <Avatar
                alt='Remy Sharp'
                src='images/vector2.png'
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />

              <Typography
                gutterBottom
                variant='h3'
                className='pt15 pb15'
                component='div'
                style={{ color: 'white' }}
              >
                Mobile application <br /> development
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Avatar
                alt='Remy Sharp'
                src='images/vector3.png'
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />

              <Typography
                gutterBottom
                variant='h3'
                className='pt15 pb15'
                component='div'
                style={{ color: 'white' }}
              >
                E-commerce <br /> development
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Avatar
                alt='Remy Sharp'
                src='images/vector2.png'
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />

              <Typography
                gutterBottom
                variant='h3'
                className='pt15 pb15'
                component='div'
                style={{ color: 'white' }}
              >
                Custom software <br /> development
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Avatar
                alt='Remy Sharp'
                src='images/vector4.png'
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />

              <Typography
                gutterBottom
                variant='h3'
                className='pt15 pb15'
                component='div'
                style={{ color: 'white' }}
              >
                Responsiveness
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Avatar
                alt='Remy Sharp'
                src='images/vector4.png'
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />

              <Typography
                gutterBottom
                variant='h3'
                className='pt15 pb15'
                component='div'
                style={{ color: 'white' }}
              >
                Customer
                <br /> service
              </Typography>
            </Grid>

            <Grid item xs={4}></Grid>
          </Grid>
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
