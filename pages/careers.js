import * as React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { compareAsc, format } from 'date-fns'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import parse from 'html-react-parser';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import LeadForm from '../components/leadForm';
import { jobService } from '../services';

export default function SalesForceDevelopment() {
  const [jobs, setJobs] = useState(null);
  const [jobDetail, setJobDetail] = useState(null);
  const [applyJob, setApplyJob] = React.useState(false);
  const [valuePhone, setValuePhone] = useState()
  const [applyValues, setApplyValues] = useState(
    {
      FirstName: "", 
      LastName: "",
      Email: "", 
      Phone: "", 
      AvailableFrom: "", 
      Skills: ""
    });

  
  const handleClickApplyOpen = (data) => {
    console.log('dataJob',data);
    setJobDetail(data);
    setApplyJob(true);
  };

  const handleApplyClose = () => {
    setApplyJob(false);
  };
  const handleChange = (e) => {
    setApplyValues({
        ...applyValues,
        [e.target.name]: e.target.value,
    });
  };
  console.log('applyValues',applyValues); 
  console.log('valuePhone',valuePhone); 

  const onSubmitHandler = () => {
    console.log('submit', jobDetail);  
    axios.post('http://206.189.149.207:4001/addCandiate', 
    {
      OwnerId:jobDetail.OwnerId,
      FirstName:applyValues.FirstName,
      LastName:applyValues.LastName,
      Email:applyValues.Email,
      Phone:valuePhone,
      City:'dummy',
      Locality:'dummy',
      FullAddress:'dummy',
      WillingToRelocate:'dummy',
      Qualification:'dummy',
      Specialization:'dummy',
      CurrentOrganization:'dummy',
      Title:'dummy',
      TotalExperience:'dummy',
      RelevantExperience:'dummy',
      SalaryType:'dummy',
      CurrentSalary:'dummy',
      SalaryExpectation:'dummy',
      Billing_rate:'dummy',
      CurrentEmploymentStatus:'dummy',
      NoticePeriod:applyValues.AvailableFrom,
      AvailableFrom:applyValues.AvailableFrom,
      Nationality:'dummy',
      WorkVisa:'dummy',
      Skills:applyValues.Skills,
      LanguageSkills:'dummy',
      ProficiencyLevel:'dummy',
      FacebookURL:'dummy',
      TwitterURL:'dummy',
      LinkedInURL:'dummy',
      GitHubURL:'dummy',
      Source:'dummy'
    })
    .then(function (response) {
      console.log('responseSubmit', response);
        const inputData = {
          JobId:applyValues.Id,
          CandiateName:applyValues.FirstName + '/' + applyValues.LastName,
          Skills:applyJob.Skills,
          NoticePeriod:applyValues.AvailableFrom,
          candidateCv:'',
        };
        try {
          const res = axios.post("https://infodrive.orbiloggiin.com/GetEmailQuery", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
          });
    
          const { error } = res.json()
    
          if (error) {
            toast.warning("Please Try Again", {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
            });
          }else{
                toast.success("Thank you for your message. We will Response in 2 business days", {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
          }
        } catch (error) {
            toast.error("Something went wrong", {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
        }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
useEffect(() => {
  axios.post('http://206.189.149.207:4001/getJobsList', {
    userId: 1,
  })
  .then(function (response) {
    const getData = response.data.payload.payload
    console.log('getData', getData);
    setJobs(getData);
  })
  .catch(function (error) {
    console.log(error);
  });
}, []);

// http://206.189.149.207:4001/getJobsList/userId=1
console.log('jobs', jobs)

  return (
    <div>
      <Head>
        <title>
          Join our team at Infodrive Solutions - Exciting Career Opportunities
          Available
        </title>
        <meta
          name='description'
          content='Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career.'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/careers.html'
        />
        <meta
          property='og:title'
          content=' Join our team at Infodrive Solutions - Exciting Career Opportunities
          Available'
        />
      </Head>
      <meta
        property='og:image'
        content='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
      />
      <link rel='icon' href='https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png' />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MB38MVS');`,
        }}
      />

      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Header />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='images/25614380e49e0fd7742fc1e2e7973a1e.jpeg'
          alt='Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career.'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent salePart'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h3' component='div'>
              CAREERS AT INFODRIVE
            </Typography>

            <Typography gutterBottom variant='h1' component='div'>
              The team is growing with <br />
              a variety of opportunities <br />
              available
            </Typography>
            <Button
              href='/contact-us.html'
              className='readmore white normalCase'
              variant='text'
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className='socical-network'>
              <List>
                <ListItem>
                  <ListItemButton
                    component='a'
                    href='https://www.facebook.com/InfoDrivesolutions/'
                  >
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component='a'
                    href='https://in.linkedin.com/company/infodrive-solutions/'
                  >
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component='a'
                    href='https://www.instagram.com/infodrivesolutions/'
                  >
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
        <Typography gutterBottom variant='h1' component='h1'>
          Explore popular jobs
        </Typography>

        <Typography gutterBottom variant='h5' component='div'>
          InfoDrive is always on a lookout for passionate, creative people who
          have the zeal to achieve the extraordinary. We welcome candidates who
          think they can contribute positively to our team and help us take
          InfoDrive to further levels of excellency. If you think, you're the
          perfect fit for our organization, please send your CV and cover letter
          to info@infodrive-solutions.com. You can find the latest openings
          here:
        </Typography>
      </section>

      <section className={`sectionBox nm jobSection`}>
        <Grid container spacing={7} justify='center'>
        {jobs && jobs.map((job, index) => (
          <>
          {job.JobStatus === 'Open' ? 
          <Grid item lg={6} xs={12}>
            <Card className='cardcareer w100'>
              <CardContent>
                <Box
                  className='mt30'
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                  key={job.Id}
                >
                  <Typography gutterBottom variant='h2' className="pt0" component='div'>
                  {job.JobTitle}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className='w100 ml pt5'
                  >
                    {format(new Date(job.created_at), 'dd-MM-yyyy')}
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='w100 mt30'
                >
                  <div
                  dangerouslySetInnerHTML={{__html:job.Jobdescription}}
                  />
                </Typography>
                <Box className='mt30'>
                  <Box className='careerbox'>
                    <LocationOnIcon />
                    <Typography
                      gutterBottom
                      variant='h3'
                      component='div'
                      className='mlb pt5'
                    >
                       {job.Locality} 
                    </Typography>
                  </Box>
                  <Box style={{ display: 'flex' }}>
                    <MonetizationOnIcon />

                    <Typography
                      gutterBottom
                      variant='h3'
                      component='div'
                      className='mlb pt5'
                    >
                     {job.MinSalary > 0 ? job.MinSalary + " " +job.Currency: ""} 
                     {job.MinSalary > 0 && job.MaxSalary > 0 ? " - ": ""}
                     {job.MaxSalary > 0? job.MaxSalary  + " " + job.Currency: ""}
                    </Typography>
                  </Box>
                </Box>
                
                <Button  
                    className='mt30'
                    onClick={() => handleClickApplyOpen(job)}>
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='span'
                    className='mb0'
                  >
                    Apply now
                  </Typography>
              </Button>
              </CardContent>
            </Card>
          </Grid>
          :""}
          </>
          ))}
          {!jobs &&
              <>loading...</>
          }
          {jobs && !jobs.length &&
                      <>No Jobs To Display</>
          }
        </Grid>
      </section>

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Empower Your Career Growth with Infodrive Solutions
        </Typography>
        <Button
          href='/contact-us.html'
          className='bgRed white pl15 pr15 poppin upperCase'
        >
          Connect with Our Expert
        </Button>
      </section>
      <LeadForm />
      <Footer />


      <Dialog open={applyJob} className="career-dialog" onClose={handleApplyClose}>
        <DialogTitle>Apply Job: {jobDetail?.JobTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
                <div
                  dangerouslySetInnerHTML={{__html:jobDetail?.Jobdescription}}
                />
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              name="FirstName"
              variant="standard"
              onChange={handleChange}
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
              autoFocus
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              fullWidth
              name="LastName"
              variant="standard"
              onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              name="Email"
              variant="standard"
              onChange={handleChange}
            />
            </Grid>
            <Grid item xs={6}>
              {/* <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              fullWidth
              name="Phone"
              variant="standard"
              onChange={handleChange}
            /> */}
            <PhoneInput
            placeholder="Enter phone number"
            value={valuePhone}
            defaultCountry="SG"
            onChange={setValuePhone}
            //onChange={setValue}
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="AvailableFrom"
                label="Available From"
                type="date"
                defaultValue="05-24-2022"
                fullWidth
                name="AvailableFrom"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Skills</label>
              <input className='w100 job-skills' 
              onChange={handleChange}
              placeholder='Please add comma after each skill'/>
              {/* <TextField
              autoFocus
              margin="dense"
              id="skills"
              label="Skills"
              type="text"
              fullWidth
              name="Skills"
              variant="standard"
              onChange={handleChange}
            /> */}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApplyClose}>Cancel</Button>
          <Button onClick={onSubmitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
