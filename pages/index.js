import * as React from 'react';
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from '../components/slider'
import utilStyles from '../styles/utils.module.css'
import Box from '@mui/material/Box';
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
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
export default function Index() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div >
      <Header/>
      <Slider/>
      <section className={`sectionBox`}>
            <Typography gutterBottom variant="h3" component="div">
              WHO IS INFODRIVE SOLUTIONS
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
              InfoDrive Solutions helps its Customer achieve their desired business outcome, improve efficiencies in their processes and enable people to make collaborative & informed Data-Driven Decisions.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">InfoDrive Solutions is a Software Development and Digital Transformation Solutions company, we are headquartered in Singapore with regional offices in Malaysia (KL) & India (Bangalore). We deliver cutting-edge Digital Transformation Solutions to many of our prestigious customers in South East Asia.
            Our expertise lies in providing cutting edge IT Development, Digital Transformation, Salesforce Consulting Services & Outsourcing Engineering Services.</Typography>
      </section>
      <section className={`sectionBox solutionBox`}>
          <p>
            InfoDrive Solutions is a preferred partner in Business process improvement for many small & medium size corporations and built with the commitment, promise & passion to provide outstanding services in Software Consulting. A lot of times businesses struggle to generate the desired outcome of their current business processes and applications.
          </p>
      </section>
      <section className={`sectionBox whyUsBox`}>
      <Typography gutterBottom variant="h2" component="div">Why Infodrive solutions?</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="images/knowledgable-team.png"
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h3" className="pt15 pb15" component="div">
                      Knowledgable team
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have the professional team with hands-on experience in their respective fields, which is the icing on the cake. We have adequate and sources to accomplish and acquire the superior technology platform required to run the business.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="images/love-for-work.png"
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h3" className="pt15 pb15" component="div">
                      Love for work
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have a passionate team striving to make a space where access to knowledge and technology is for everyone equally. To manage the quality level and give the best performance, we regulate our services according to our clients’ expectations.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="images/profitable-solutions.png"
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h3" className="pt15 pb15" component="div">
                      Profitable solutions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Our dedicated team keeps working to provide a cost-efficient result from scanning to the solution’s execution. We comprehend that approachability is one of the various goals that strive for growth sources.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="images/clinet-satisfaction.png"
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h3" className="pt15 pb15" component="div">
                      Assured client satisfaction
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     We consider our clients’ needs and respond to deliver excellent outcomes by becoming flexible according to work. Our clients relish the high-quality work we provide and the outstanding client assistance we render. We aim to surpass your expectation.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="images/in-house-staff.png"
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h3" className="pt15 pb15" component="div">
                     In-house staff
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Our team interacts with our clients directly to solve their queries on their projects. We don’t strive for assistance that we cannot meet ourselves. At the end of every week, we meet and discuss each client’s tasks, review the progress, and provide improvement-related suggestions if needed.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="images/ROI.png"
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h3" className="pt15 pb15" component="div">
                      Excellent ROI
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We always think about the growth and profitability of our associates; hence our prices are defined. All our assistance and methods are modernized, focusing on accurate performance and Return on investment. Thus it meets the principle aim of offshore collaboration.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Box>
      </section>

      <section className={`sectionBox aboutUsBox`}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      ABOUT US
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Delivering our very best in all we do, holding ourselves accountable for results with a commitment to integrity, fairness and responsibility.
                    </Typography>
                    <Button className='readmore white' variant="text">LEARN MORE ABOUT US <ArrowRightAltIcon/></Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={7}>
                <Card>
                  <img
                    alt="Remy Sharp"
                    src="images/pexels-ketut-subiyanto-4350210.jpg"
                  />
                </Card>
              </Grid>
            </Grid>
        </Box>
      </section>

      <section className={`sectionBox connectUs backDrop mb30`}>
            <Typography gutterBottom variant="h3" className='white pb15 pt15 poppin' component="div">
              Ready to take your business to the next level with a custom web or mobile app?
            </Typography>
            <Button href="/contact-us" className='bgRed pl15 pr15 poppin normalCase'>
              Connect with Our Expert
            </Button>
      </section>

      <br/>

      <section className={`sectionBox aboutUsBox aboutUsBox2`}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <Card>
                  <img
                    alt="Remy Sharp"
                    src="images/aboutus2.png"
                  />
                </Card>
              </Grid>
              <Grid item xs={7}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Delivering our very best in all we do, holding ourselves accountable for results with a commitment to integrity, fairness and responsibility.
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div">
                      123
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                      SUCCESSFUL PROJECTS
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div">
                      10+
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                      YEARS OF EXPERIENCE
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div">
                      100+
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                      HAPPY CLIENTS
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Box>
      </section>

      <section className={`sectionBox locationBox`}>
          <Typography gutterBottom variant="h2" className="pb30" component="div">Where we are?</Typography>
          <Box sx={{ flexGrow: 1 }} className="locationContent">
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    InfoDrive Solutions Pte Ltd
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    2 Changi Business Park avenue 1. #02-00, Singapore <br/>
                    Phone: +65-9238 4299
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    InfoDrive Solutions Sdn Bhd
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    32-07 Level 32, Q Sentral, 2A, Jalan Stesen Sentral 2, 50470 Kuala Lumpur, Malaysia <br/>
                    Phone: +60-1 2327 5811 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    InfoDriven Solutions Pvt Ltd
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    #88, Borewell Road, opposite Whitefield Post Office, Whitefield, Bangalore – 560066<br/>
                    Phone: +91-960 61880 81
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Box>
      </section>
      <section className={`sectionBox locationBox contactUsArea leadForm`}>
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