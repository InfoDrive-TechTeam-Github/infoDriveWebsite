import * as React from 'react';
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

export default function Footer() {
  return (
      <section className={`sectionBox footerSection`}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={5}>
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
              <Grid item xs={7}>
                <Grid item xs={4}>
                
                </Grid>
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
  )
}