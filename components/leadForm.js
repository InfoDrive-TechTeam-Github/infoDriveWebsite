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
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
//import ImgGet from "./../public/images/loder.gif";

import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function leadForm() {
  const [value, setValue] = React.useState('1');
  const [isLoading, setLoading] =useState(false); 
  const [inputData, setInputData] = useState({
    full_name: "",
    email_address: "",
    contact_number: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   //https://infodrive.orbiloggiin.com/GetEmailQuery
    try {
			const res = await fetch("https://infodrive.orbiloggiin.com/GetEmailQuery", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputData),
			});

			const { error } = await res.json()

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
				return
			}else{
             setLoading(false);
            
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

  }

  return (
    <>
      <section className={`sectionBox locationBox contactUsArea leadForm mt0`}>
          <Box sx={{ flexGrow: 1 }} className="locationContent">
            <Grid container spacing={0}>
               
               <Grid item xs="6"  className="leadFormBox">

               <form className="contact-form" onSubmit={handleSubmit}>
                <Box sx={{ '& > :not(style)': { ml: 6, mt: 7,maxWidth:'41%', width:'41%' } }}>
                <Typography gutterBottom variant="h2" className='white' component="div">
                Request a call back
                            </Typography>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Full Name"
                            name="full_name"
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email Address"
                            name="email_address"
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            onChange={handleChange}
                            variant="standard"
                        />

                        <TextField
                            id="input-with-icon-textfield"
                            label="Contact Number"
                            name="contact_number"
                            type='number' 
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Message"
                            name="message"
                            multiline
                            rows={3}
                            fullWidth sx={{ m: 1 }}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            onChange={handleChange}
                            variant="standard"
                        />
                        
      
      
                        <Stack spacing={2}  direction="row">
                            {isLoading ? "" :
                            (<Button type="submit" className="bgRed" variant="contained">Send Message</Button>)}
                            {isLoading ? <div className='btnLodrShw'><h4>Message Sending....</h4>
                            <img style={{width:50, height:50, marginTop:15}} src='loading.gif' alt="Loder" className='btnLdr'/></div> :''}
                        </Stack>
                    </Box>
                    </form>
               </Grid>

               <Grid item xs={6} className="leftLeadFormBox">
                    <Grid item xs={12} className='contactUsB contactUsB1'>
                        <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                            InfoDrive Solutions Pte Ltd
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Address: 2 Changi Business Park avenue 1. #02-00, Singapore <br/>
                            Phone: <a href="tel:+6592384299" style={{color:"#fff"}}>+65-9238 4299 </a><br/>
                            Email: <a href="mailto:contact@infodrive-solutions.com" style={{color:"#fff"}}>contact@infodrive-solutions.com</a>

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
                            Phone: <a href="tel:+60123275811" style={{color:"#fff"}}>+60-1 2327 5811</a><br/>
                            Email: <a href="mailto:contact@infodrive-solutions.com" style={{color:"#fff"}}>contact@infodrive-solutions.com</a>

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
                            Phone: <a href="tel:+919606188081" style={{color:"#fff"}}>+91-960 61880 81 </a><br/>
                            Email: <a href="mailto:contact@infodrive-solutions.com" style={{color:"#fff"}}>contact@infodrive-solutions.com</a>
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
               </Grid>
            </Grid>
        </Box>
      </section>
      <ToastContainer />
    </>
  )
}