import { useState, useEffect,useRef } from 'react';

import { Link } from './../../components';
import { jobService } from '../../services';

import * as React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import utilStyles from '../../styles/utils.module.css';
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
import Head from 'next/head';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import LeadForm from '../../components/leadForm';
    
export default Index;

function Index() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
  };
  const triggerClick= React.useRef(null);

  const validationSchema = Yup.object().shape({
    passCode: Yup.string(),
});
const formOptions = { resolver: yupResolver(validationSchema) };
const { register, handleSubmit, reset, formState } = useForm(formOptions);
const [isError, setError] = React.useState(false);

function onSubmit(data) {
  // triggerClick.current?.focus();
  if(data.passCode === 'infoDrive'){
    document.getElementsByClassName("triggerClick")[0].click();
  }else{
    setError(true);
  }
}

function onSubmitDelete(data) {
  // triggerClick.current?.focus();
  if(data.passCode === 'infoDrive'){
    document.getElementsByClassName("triggerClickDelete")[0].click();
    window.location.href="/job-manage";
  }else{
    setError(true);
  }
}
  
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openPasscode, setOpenPassCode] = React.useState(false);
  const [openDeletePasscode, setDeleteOpenPassCode] = React.useState(false);

  const handlePassCodeOpen = () => setOpenPassCode(true);
  const handlePassCodeClose = () => setOpenPassCode(false);

  const handleDeletePassCodeOpen = () => setDeleteOpenPassCode(true);
  const handleDeletePassCodeClose = () => setDeleteOpenPassCode(false);

    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        jobService.getAll().then(x => setJobs(x));
    }, []);

    function deleteJob(id) {
        setJobs(jobs.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        jobService.delete(id).then(() => {
            setJobs(jobs => jobs.filter(x => x.id !== id));
        });
    }

    return (

    <>
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
      <link rel='icon' href='../favicon.png' />
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

      {/* <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='images/25614380e49e0fd7742fc1e2e7973a1e.jpeg'
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
      </section> */}

      <section className={`sectionBox nm `}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button variant="contained" href="/job-manage/add" color="primary" sx={{ height: 40 }}>
          Add new job
        </Button>

        </Box>
        <Grid container spacing={7} justify='center'>

        {jobs && jobs.map(job =>
          <Grid item lg={6} xs={12} key={job.id}>
            <Card className='cardcareer w100'>
              <CardContent>
              <Box className='manageAction'>
                                    <Button variant="contained" color="warning" className="mr15" onClick={handlePassCodeOpen}>Edit</Button>
                                    <Button variant="contained" color="error" className="mr15" onClick={handleDeletePassCodeOpen}>Delete</Button>

                                    <Button style={{display:'none'}} variant="contained" color="warning" className="mr15 triggerClick" href={`/job-manage/edit/${job.id}`}>Edit</Button>
                                    <Button style={{display:'none'}} variant="contained" component="label" color="error" onClick={() => deleteJob(job.id)} className="btn btn-sm btn-danger btn-delete-job triggerClickDelete" disabled={job.isDeleting}>
                                        {job.isDeleting 
                                            ? <span className="spinner-border spinner-border-sm"></span>
                                            : <span>Delete</span>
                                        }
                                    </Button>
                                    <Button variant="contained" className="ml15" href={`/job-manage/edit/${job.id}`}>{job.status}</Button>

              </Box>
                <Box
                  className='mt30'
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Typography gutterBottom variant='h1' className="pt0" component='div'>
                  {job.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className='w100 ml pt5'
                  >
                    {job.creationtime}
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='w100 mt30'
                >
                  {job.desc}
                </Typography>
                <Box className='mt30'>
                  <Box className='careerbox'>
                    <LocationOnIcon />
                    <Typography
                      gutterBottom
                      variant='h3'
                      component='div'
                      className='mlb'
                    >
                      {job.location}
                    </Typography>
                  </Box>
                  <Box style={{ display: 'flex' }}>
                    <MonetizationOnIcon />

                    <Typography
                      gutterBottom
                      variant='h3'
                      component='div'
                      className='mlb'
                    >
                      {job.salarayrange}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  gutterBottom
                  variant='h3'
                  component='div'
                  className='mt30'
                >
                  Apply now
                </Typography>
              </CardContent>
            </Card>
          </Grid>
                    )}
                    {!jobs &&
                        <>loading...</>
                    }
                    {jobs && !jobs.length &&
                                <>No Jobs To Display</>
                    }
          
        </Grid>
      </section>

      {/* <section className={`sectionBox connectUs backDrop mb0`}>
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
      <LeadForm /> */}
      <Footer />

      <Modal
      open={openPasscode}
      onClose={handlePassCodeClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Please input the passcode to edit the job
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)} className="addEditNewJob">
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                    id="standard-multiline-flexible"
                    label="Pass Code"
                    fullWidth
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="passCode"
                    {...register('passCode')}
                />
    </Typography>
    <br/>
    {isError == true ? 
    <span style={{color:"red",textAlign:'center', display:'block'}}>Your Passcode is wrong!. <br/> Please input the correct Passcode</span>
    :""}
    <br/>
    <Button type="submit" variant="contained" className="mr15">Submit</Button>
    <Button variant="contained" color="warning" href="/job-manage" className="mr15">Cancel</Button>
    </form>
  </Box>
</Modal>

{/* Delete item */}
<Modal
      open={openDeletePasscode}
      onClose={handleDeletePassCodeClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Please input the passcode to delete the job
    </Typography>
    <form onSubmit={handleSubmit(onSubmitDelete)} className="addEditNewJob">
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                    id="standard-multiline-flexible"
                    label="Pass Code"
                    fullWidth
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="passCode"
                    {...register('passCode')}
                />
    </Typography>
    <br/>
    {isError == true ? 
    <span style={{color:"red",textAlign:'center', display:'block'}}>Your Passcode is wrong!. <br/> Please input the correct Passcode</span>
    :""}
    <br/>
    <Button type="submit" variant="contained" className="mr15">Submit</Button>
    <Button variant="contained" color="warning" href="/job-manage" className="mr15">Cancel</Button>
    </form>
  </Box>
</Modal>
        </>
    );
}
