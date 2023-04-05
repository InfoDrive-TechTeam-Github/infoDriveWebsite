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
import { compareAsc, format } from 'date-fns';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import parse from 'html-react-parser';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeadForm from '../components/leadForm';
//import { jobService } from '../services';
import UploadIcon from '@mui/icons-material/Upload';
import { green, pink } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import JobDescription from 'components/JobDescription';
export default function SalesForceDevelopment() {
  const [jobs, setJobs] = useState(null);
  const [activeButtonColor, setactiveButtonColor] = useState(null);
  const [activeApplyButton, setActiveApply] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [applyJob, setApplyJob] = React.useState(false);
  const [valuePhone, setValuePhone] = useState();
  const [jdHeight, setJdHeifht] = useState(false);
  const [Resume, setResume] = useState('');
  const [applyValues, setApplyValues] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    AvailableFrom: '',
    Skills: '',
  });

  // show div functionality
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    function checkSize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }

    checkSize();

    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  const handleClickApplyOpen = (data) => {
    console.log('dataJob', data);
    setJobDetail(data);
    setApplyJob(true);
  };
  const handleClickShowMore = (data) => {
    setJobDetail(data);
    setJdHeifht((current) => !current);
  };
  console.log('jdHeight', jdHeight);

  const handleApplyClose = () => {
    setApplyJob(false);
  };
  const handleChange = (e) => {
    setApplyValues({
      ...applyValues,
      [e.target.name]: e.target.value,
    });
  };
  //var jbId = jobDetail.Id;

  const onSubmitHandler = () => {
    let jbId = [jobDetail.Id];

    axios
      .post('https://mydryve.co/Api/addCandidate', {
        OwnerId: jobDetail.OwnerId,
        FirstName: applyValues.FirstName,
        LastName: applyValues.LastName,
        Email: applyValues.Email,
        Phone: valuePhone,
        City: 'dummy',
        Locality: 'dummy',
        FullAddress: 'dummy',
        WillingToRelocate: '0',
        Qualification: 'dummy',
        Specialization: 'dummy',
        CurrentOrganization: 'dummy',
        Title: 'dummy',
        TotalExperience: 'dummy',
        RelevantExperience: 'dummy',
        SalaryType: 'dummy',
        CurrentSalary: 'dummy',
        SalaryExpectation: 'dummy',
        Billing_rate: 'dummy',
        CurrentEmploymentStatus: 'dummy',
        NoticePeriod: applyValues.AvailableFrom,
        AvailableFrom: applyValues.AvailableFrom,
        Nationality: 'dummy',
        WorkVisa: 'dummy',
        Skills: applyValues.Skills,
        LanguageSkills: 'dummy',
        ProficiencyLevel: 'dummy',
        FacebookURL: 'dummy',
        TwitterURL: 'dummy',
        LinkedInURL: 'dummy',
        GitHubURL: 'dummy',
        Source: 'dummy',
        Resume,
      })
      .then(function (response) {
        console.log('responseSubmit', response);
        if (response.data.status == true) {
          setApplyJob(false);
          // assign job to Candidate
          const candidateId = response.data.payload.candidateId;
          axios
            .post('https://mydryve.co/Api/assignJobToCandidate', {
              JobId: jbId,
              candidateId: candidateId,
              OwnrId: jobDetail.OwnerId,
            })
            .then(function (response) {
              //const getData = response.data.payload.payload
              console.log('assignJob___', response);
              // email send code here
              //https://infodrive.orbiloggiin.com/SendEmailCandidate
              const inputData = {
                JobId: applyValues.Id,
                CandiateName:
                  applyValues.FirstName + '/' + applyValues.LastName,
                Skills: applyJob.Skills,
                NoticePeriod: applyValues.AvailableFrom,
                candidateCv: '',
              };
              toast.success('You have Sucessfully applied for Job', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              try {
                const res = axios.post(
                  'https://infodrive.orbiloggiin.com/SendEmailCandidate',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputData),
                  }
                );

                const { error } = res.json();

                if (error) {
                  console.log('error_email', error);
                  // toast.warning("Please Try Again", {
                  //         position: 'top-right',
                  //         autoClose: 2000,
                  //         hideProgressBar: false,
                  //         closeOnClick: true,
                  //         pauseOnHover: true,
                  //         draggable: true,
                  //         progress: undefined,
                  // });
                } else {
                  console.log('Email Sent');
                  // toast.success("Thank you for your message. We will Response in 2 business days", {
                  //   position: 'top-right',
                  //   autoClose: 2000,
                  //   hideProgressBar: false,
                  //   closeOnClick: true,
                  //   pauseOnHover: true,
                  //   draggable: true,
                  //   progress: undefined,
                  // });
                }
              } catch (error) {
                console.log('error_email222', error);
                // toast.error("Something went wrong", {
                //   position: 'top-right',
                //   autoClose: 2000,
                //   hideProgressBar: false,
                //   closeOnClick: true,
                //   pauseOnHover: true,
                //   draggable: true,
                //   progress: undefined,
                // });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //file upload code start
  let resume = '';
  const fileUpload = (e) => {
    const fl = e.target.files[0];
    // console.log('Uploading file', fl.name);
    //getupfile(`${url}/uploads/Candidate/Resume/` + fl.name);
    const formData = new FormData();
    formData.append('file', fl);
    console.log('formData_____', formData.file);
    if (formData !== '') {
      axios
        .post(`https://mydryve.co/Api/candidateApplicationResume`, formData)
        .then((res) => {
          console.log('file____chk__', res);
          // const name = res?.data?.name.split(' ');
          // const firstName = name[0];
          // const lastName = name[name.length - 1];
          const msg = res.data.payload;
          resume = `https://mydryve.co/Api/uploads/Candidate/Resume/` + msg;
          setResume(resume);
        })
        .catch((err) => {
          console.log('There was an error!', err?.response);
          toast.error('Something went wrong!', {
            position: 'bottom-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        });
    } else {
      toast.error('Invalid Input', {
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    axios
      .post('https://mydryve.co/Api/getJobsList', {
        userId: 1,
      })
      .then(function (response) {
        const getData = response.data.payload.payload;
        console.log('getData', getData);
        setJobs(getData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // http://206.189.149.207:4001/getJobsList/userId=1
  console.log('jobs', jobs);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = Math.ceil(jobs?.length / itemsPerPage);
  const goToPage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber > 0) {
      setPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

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
        <link rel='icon' href='/favicon.png' />
      </Head>
      <meta
        property='og:image'
        content='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
      />
      <link
        rel='icon'
        href='https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png'
      />
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
          alt='Discover exciting career opportunities at Infodrive Solutions,'
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
      <br />
      {/** this job horizonal div only show when below medium screen */}
      {/*{showDiv && (
        <section className={`sectionBox nm jobSection transition-all ease-in`}>
          <Grid container spacing={7} justify='center'>
            {jobs &&
              jobs.slice(startIndex, endIndex).map((job, index) => (
                <>
                  {job.JobStatus === 'Open' ? (
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
                            <Typography
                              gutterBottom
                              variant='h2'
                              className='pt0'
                              component='div'
                            >
                              {job.JobTitle}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant='h3'
                              component='div'
                              className='w100 ml pt5 createdat'
                            >
                              Created at:{' '}
                              {format(new Date(job.created_at), 'dd-MM-yyyy')}
                            </Typography>
                          </Box>
                          <Typography
                            gutterBottom
                            variant='h5'
                            component='div'
                            className={`w100 mt30 jd ${
                              jdHeight ? 'setShowDescription' : ''
                            }`}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: job.Jobdescription,
                              }}
                            />
                          </Typography>
                          {job.Jobdescription ? (
                            <span
                              className='mt15 readMoreLink'
                              onClick={() => handleClickShowMore(job)}
                            >
                              {jdHeight ? 'Show less' : 'Show more'}
                            </span>
                          ) : (
                            ''
                          )}
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
                            <Box
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <MonetizationOnIcon />

                              <Typography
                                gutterBottom
                                variant='h3'
                                component='div'
                                className='mlb pt5'
                              >
                                {job.MinSalary > 0 ? job.MinSalary : ''}
                                {job.MinSalary > 0 && job.MaxSalary > 0
                                  ? ' - '
                                  : ''}
                                {job.MaxSalary > 0 ? job.MaxSalary : ''}
                              </Typography>
                            </Box>
                          </Box>

                          <Button
                            className='mt30'
                            onClick={() => handleClickApplyOpen(job)}
                          >
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
                  ) : (
                    ''
                  )}
                </>
              ))}
            {!jobs && <>loading...</>}
            {jobs && !jobs.length && <>No Jobs To Display</>}
          </Grid>
        </section>
                  )}*/}

      {/**Jobs Card Start from here */}
      {jobs &&
        jobs.slice(startIndex, endIndex).map((job, index) => (
          <Container
            maxWidth='xl'
            className='flex gap-3 items-center mb-10 mx-auto '
          >
            {!showDiv && (
              <div
                className={`shadow-2xl border-4    border-slate-950/5  rounded-full transition-all ease-in-out duration-1000 text-white h-[2rem] w-[2rem]  flex justify-center items-center p-4 ${
                  activeButtonColor == index ? 'bg-[#99B898]' : 'bg-[#eb6841]'
                }`}
              >
                <p className='Poppins font-semibold'>
                  {console.log('start', index)}
                  {index + startIndex + 1}
                </p>
              </div>
            )}

            {/* Start of main div*/}

            <div
              className='JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox   transition-all ease-in-out w-full'
              // this for side button animation */
              onMouseEnter={() => setactiveButtonColor(index)}
              onMouseLeave={() => setactiveButtonColor(!index)}
            >
              <div className='flex justify-between  w-full '>
                <Typography
                  gutterBottom
                  variant='h2'
                  className='pt0'
                  component='div'
                >
                  {job.JobTitle}
                </Typography>
                <div className='CreatedBox flex gap-1 text-[#dd3952]'>
                  <CalendarMonthIcon />
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className=''
                  >
                    Created at: {format(new Date(job.created_at), 'dd-MM-yyyy')}
                  </Typography>
                </div>
              </div>

              {/*<JobDescription job={job} />*/}

              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className={`w100  jd ${jdHeight ? 'setShowDescription' : ''}`}
                sx={{ height: '125px', overflow: 'hidden' }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.Jobdescription,
                  }}
                  className='Poppins'
                />
              </Typography>

              {job.Jobdescription ? (
                <span
                  className={`mt15 readMoreLink   rounded-lg p-2  transition-all ease-out shadow-lg 
                   
                     hover:bg-[#dd3952] hover:border hover:text-white Poppins
                      
                  `}
                  onClick={() => handleClickShowMore(job)}
                  onMouseEnter={() => setActiveApply(true)}
                  onMouseLeave={() => setActiveApply(false)}
                >
                  {jdHeight ? 'Show less' : 'Show more'}
                </span>
              ) : (
                ''
              )}
              {/*show location */}

              <Box className='mt30 '>
                <Box className='careerbox gap-1'>
                  <LocationOnIcon className='h-[2rem] w-[2rem] ' />
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className='mlb pt5'
                  >
                    {job.Locality}
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center text-slate-500',
                    gap: '4px',
                  }}
                >
                  <div className='Currency border-2 border-black p-3 rounded-full h-[2rem] w-[2rem] flex justify-center items-center'>
                    <p className='Poppins font-semibold'>{job.Currency}</p>
                  </div>

                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className='mlb pt5'
                  >
                    {job['MinSalary'] + ' - ' + job.MaxSalary}
                  </Typography>
                </Box>
              </Box>
              <button
                className={`mt30 Poppins  rounded-md p-2  shadow-md  hover:text-[#dd3952] hover:bg-white transition-all ease-in-out font-semibold uppercase
                ${
                  activeApplyButton
                    ? 'bg-white text-[#dd3952]'
                    : 'bg-[#dd3952] text-white'
                }`}
                onClick={() => handleClickApplyOpen(job)}
              >
                Apply now
              </button>
            </div>
            {/* End of main div*/}
          </Container>
        ))}
      <section className='pagination'>
        <CssBaseline />
        <Container
          maxWidth='sm'
          component={'Box'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <ChevronLeftIcon
              style={{ cursor: 'pointer' }}
              onClick={() => goToPage(page - 1)}
            />
            <Avatar sx={{ bgcolor: pink[500] }}>{page}</Avatar>
            <ChevronRightIcon
              onClick={() => goToPage(page + 1)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Container>
      </section>
      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Empower Your Career Growth with InfoDrive Solutions
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
      <Dialog
        open={applyJob}
        className='career-dialog'
        onClose={handleApplyClose}
      >
        <DialogTitle>Apply Job: {jobDetail?.JobTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              dangerouslySetInnerHTML={{ __html: jobDetail?.Jobdescription }}
            />
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin='dense'
                id='firstName'
                label='First Name'
                type='text'
                fullWidth
                name='FirstName'
                variant='standard'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin='dense'
                id='lastName'
                label='Last Name'
                type='text'
                fullWidth
                name='LastName'
                variant='standard'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin='dense'
                id='email'
                label='Email'
                type='email'
                fullWidth
                name='Email'
                variant='standard'
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
                placeholder='Enter phone number'
                value={valuePhone}
                defaultCountry='SG'
                onChange={setValuePhone}
                //onChange={setValue}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='AvailableFrom'
                label='Available From'
                type='date'
                defaultValue='05-24-2022'
                fullWidth
                name='AvailableFrom'
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Skills</label>
              <input
                className='w100 job-skills'
                onChange={handleChange}
                placeholder='Please add comma after each skill'
              />
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
            <Grid item xs={12}>
              <label
                className='w100'
                style={{
                  marginBottom: '10px',
                  marginTop: '10px',
                  display: 'block',
                }}
              >
                Upload Your CV File
              </label>
              <input className='' type='file' onChange={fileUpload} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApplyClose}>Cancel</Button>
          <Button onClick={onSubmitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={jdHeight}
        className='career-dialog'
        onClose={handleApplyClose}
      >
        <DialogTitle>Job: {jobDetail?.JobTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              dangerouslySetInnerHTML={{ __html: jobDetail?.Jobdescription }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='px-10'>
          <Button onClick={handleClickShowMore}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
