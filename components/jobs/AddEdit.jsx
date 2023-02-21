import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from '../Link';
import { jobService, alertService } from '../../services';


import * as React from 'react';
import Header from '../header';
import Footer from '../footer';
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
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Head from 'next/head';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LeadForm from '../leadForm';

export { AddEdit };

function AddEdit(props) {
    const job = props?.job;
    const isAddMode = !job;
    const router = useRouter();
    const [valueDate, setValueDate] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleDateChange = (newValue) => {
        setValueDate(newValue);
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string(),
        desc: Yup.string(),
        creationtime: Yup.string(),
        location: Yup.string(),
        salarayrange: Yup.string(),
        status: Yup.string(),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        const { ...defaultValues } = job;
        formOptions.defaultValues = defaultValues;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    console.log('props', props);
    function onSubmit(data) {
        console.log('onSubmit', data);
        // var newData = {
        //     title: data.title,
        //     location: data.location,
        //     salarayrange: data.salarayrange,
        //     status: data.status,
        //     creationtime: valueDate
        // }
        // console.log('newData',newData );
        console.log('isAddMode', isAddMode);
        return isAddMode ? createJob(data) : updateJob(job.id, data);
    }

    function createJob(data) {
        console.log('data', data);
        return jobService.create(data)
            .then(() => {
                alertService.success('Job added', { keepAfterRouteChange: true });
                window.location.href='/job-manage';
            })
            .catch(alertService.error);
    }

    function updateJob(id, data) {
        return jobService.update(id, data)
            .then(() => {
                alertService.success('Job updated', { keepAfterRouteChange: true });
                window.location.href='/job-manage';
            })
            .catch(alertService.error);
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
      <section className={`sectionBox`}>
        <Box
        component="div"
        style={{width:'800px',margin:'0 auto'}}
        noValidate
        autoComplete="off"
        >


        <form onSubmit={handleSubmit(onSubmit)} className="addEditNewJob">
            <h1>{isAddMode ? 'Add new job' : 'Edit job'}</h1>
            <div className="form-row">
            <Grid container spacing={2}>
              <Grid  xs={12}>
              <div className="form-group">
                <TextField
                    id="standard-multiline-flexible"
                    label="Title"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="title"
                    fullWidth
                    {...register('title')}
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                    {/* <label>Title</label>
                    <input name="title" type="text" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`} /> */}
                    <div className="invalid-feedback">{errors.title?.message}</div>
                   
                </div>
              </Grid>
              <Grid  xs={12}>
              <div className="form-group col-5">
                <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    rows={3}
                    maxRows={5}
                    variant="standard"
                    name="desc"
                    {...register('desc')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                />
                
                    {/* <label>Description</label>
                    <input name="desc" type="text" {...register('desc')}  className={`form-control ${errors.desc ? 'is-invalid' : ''}`} /> */}
                    <div className="invalid-feedback">{errors.desc?.message}</div>
                </div>
              </Grid>
              <Grid  xs={12}>
              <div className="form-group col-5">
                <TextField
                    id="standard-multiline-flexible"
                    label="Location"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="location"
                    {...register('location')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                />

                    {/* <label>Location</label>
                    <input name="location" type="text" {...register('location')}  className={`form-control ${errors.location ? 'is-invalid' : ''}`} /> */}
                    <div className="invalid-feedback">{errors.location?.message}</div>
                </div>
              </Grid>
              <Grid  xs={4}>
              <div className="form-group mt30">
                {/* <TextField
                    id="standard-multiline-flexible"
                    label="Creation time"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="creationtime"
                    {...register('creationtime')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                /> */}
                    {/* <label>Creation time</label>
                    <input name="creationtime" type="text" {...register('creationtime')} className={`form-control ${errors.creationtime ? 'is-invalid' : ''}`} /> */}
                    <div className="invalid-feedback">{errors.creationtime?.message}</div>

                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                     

<TextField
        id="date"
        label="Creation time"
        type="date"
        defaultValue="05-24-2022"
        fullWidth
        style={{ width: '220px', marginTop: '0px' }}
        {...register('creationtime')}
        name="creationtime"
        InputLabelProps={{
          shrink: true,
        }}
      />
                        {/* </Stack>
                        </LocalizationProvider> */}
                </div>
              </Grid>
              <Grid  xs={4}>
              <div className="form-group mt30">
                <Box sx={{ width: '220px' }}>
                  <FormControl style={{ width: '220px' }}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      {...register("status")}
                      name="status"
                      label="Status"
                      defaultValue={props.job?.status}
                    >
                      <MenuItem value={'enable'}>Enable</MenuItem>
                      <MenuItem value={'disable'}>Disable</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* <TextField
                    id="standard-multiline-flexible"
                    label="Status"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="status"
                    {...register('status')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                /> */}
                    {/* <label>Status</label>
                    <input name="status" type="text" {...register('status')}  className={`form-control  ${errors.status ? 'is-invalid' : ''}`} /> */}
                    <div className="invalid-feedback">{errors.status?.message}</div>
                </div>
              </Grid>

              <Grid  xs={4}>
              <div className="form-group mt30">
                <TextField
                    id="standard-multiline-flexible"
                    label="Salaray range"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="salarayrange"
                    {...register('salarayrange')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                />
                    {/* <label>Salaray range</label>
                    <input name="salarayrange" type="text" {...register('salarayrange')} className={`form-control ${errors.salarayrange ? 'is-invalid' : ''}`} /> */}
                    <div className="invalid-feedback">{errors.salarayrange?.message}</div>
                </div>
              </Grid>
             
            </Grid>
                
            </div>
            <Grid  xs={12}>
              <div className="form-group mt30">
                <Button variant="contained" color="success" type="submit" disabled={formState.isSubmitting} className="mr15">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </Button>
                <Button variant="contained" onClick={() => reset(formOptions.defaultValues)} disabled={formState.isSubmitting} className="mr15">Reset</Button>
                <Button variant="contained" color="warning" href="/job-manage" className="mr15">Cancel</Button>
            </div>
              </Grid>

        </form>
    </Box>
        </section>
      <Footer />

        </>
    );
}