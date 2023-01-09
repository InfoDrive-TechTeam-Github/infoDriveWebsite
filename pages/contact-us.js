import * as React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'
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
import Stack from '@mui/material/Stack';
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

export default function Contact() {
  
  return (
    <div >
      <Header/>
    <section className={`sectionBox contactUs`}>
            <Typography className="widthInitial red" gutterBottom variant="h2" component="div">
            Contact Us
            </Typography>
            <Typography className="widthInitial" gutterBottom variant="h5" component="div">Need to get in touch with us? Either call one of the numbers of the responding country
or fill the form and we will get back to you</Typography>
      </section>

      <section className={`sectionBox locationBox contactUsArea pt0`}>
          <Box sx={{ flexGrow: 1 }} className="locationContent">
            <Grid container spacing={0}>
               <Grid item xs={4}>
                    <Grid item xs={12} className='contactUsB contactUsB1'>
                        <Card >
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
                    <Grid item xs={12}  className='contactUsB contactUsB2'>
                        <Card >
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

                    <Grid item xs={12}  className='contactUsB contactUsB3'>
                        <Card >
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
               <Grid item xs="8">
                <Box sx={{ '& > :not(style)': { ml: 6, mt: 7,maxWidth:'41%', width:'41%' } }}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Name"
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
                            label="Email"
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
                            label="Phone"
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
                            label="Industry"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Message</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={''}
                                placeholder="Message"
                            />
                        </FormControl>

                        <Stack spacing={2} direction="row">
                            <Button style={{background:"#000"}} className="bgRed white" variant="contained">Send Message</Button>
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