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
    fontWeight: 'bold',
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
  const box = {
    width: '33.33%' /* divide the container into 3 equal parts */,
  };
  return (
    <div>
      <Header />

      <div className='sliderBox'>
        <img style={{ width: '100%' }} src='images/Rectangle.jpg' />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <p>
            As a leading provider of full stack development <br /> services in
            Singapore, Malaysia, and India, we are <br /> committed to
            delivering top-quality solutions
            <br /> that help businesses of all sizes <br />
            succeed in today's digital landscape.
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
        <Typography gutterBottom variant='h5' component='div'>
          One of the key benefits of working with InfoDrive Solutions is our
          ability to provide end-to-end development services. This means that we
          can handle every aspect of your project, from the initial concept and
          design to the final deployment and maintenance. This allows us to
          deliver a complete, turnkey solution that is ready to use as soon as
          it is deployed.
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
      </section>

      {/*we are speclised in section*/}
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
          {/* container for 3 div*/}
          <div
            className='speclized'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div className='Salesforce partner' style={box}>
              <p style={descrption}> Expertise</p>
              {/*<p
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
              </p>*/}
              <p style={details}>
                Our developers have a wealth of experience in a wide range of
                programming languages, frameworks, and technologies. This allows
                us to deliver custom solutions that are tailored to meet the
                specific needs of our clients.
              </p>
            </div>
            <div className='Servicenow' style={box}>
              <p style={descrption}>Quality</p>

              <p style={details}>
                We have strict quality standards and always
                <br /> strive to deliver projects that meet and exceed our
                clients' expectations.
              </p>
            </div>
            <div className='Mulesoft' style={box}>
              <p style={descrption}>Responsiveness</p>

              <p style={details}>
                We understand that time is of the essence, especially in the
                fast-paced world of web development. That's why we are dedicated
                to delivering projects on time and on budget.
              </p>
            </div>
            <div className='Salesforce partner' style={box}>
              <p style={descrption}>Value</p>
              {/*<p
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
              </p>*/}
              <p style={details}>
                We offer competitive pricing and strive to deliver the best
                value for our clients' money.
              </p>
            </div>
            <div className='Servicenow' style={box}>
              <p style={descrption}> Customer service</p>

              <p style={details}>
                Our team is dedicated to providing excellent customer service
                and going the extra mile to <br /> ensure that our clients are
                satisfied with the results.
              </p>
            </div>
            <div className='Mulesoft' style={box}>
              <p style={descrption}>Commitment</p>

              <p style={details}>
                As a company, we are committed to delivering exceptional value
                to our clients. We have a track record of success and a
                reputation for delivering high-quality solutions on time and on
                budget. Our team is dedicated to customer satisfaction, and we
                take pride in the long-term relationships we have built with our
                clients.
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
