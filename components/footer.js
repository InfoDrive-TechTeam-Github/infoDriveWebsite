import * as React from 'react';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <section className={`sectionBox footerSection pb0`}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4} className='logoFooter'>
            <img src='https://cdn.discordapp.com/attachments/949683263386054716/1076906970218508399/logoFooter.png' />
            <Typography variant='h3' sx={{ my: 2 }}>
              Driven by technology
            </Typography>
            <Typography variant='h5' sx={{ my: 2 }} className='pr30'>
              InfoDrive Solutions is a premier software development company that
              specializes in providing innovative solutions using the latest
              technologies. Our team of highly skilled developers and architects
              are dedicated to delivering exceptional results to our clients
              globally.
            </Typography>
          </Grid>
          <Grid item xs={8} className='infoFooter'>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Typography gutterBottom variant='h3' component='div'>
                  Company
                </Typography>
                <nav aria-label='main mailbox folders'>
                  <List>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='/about-us.html'
                      >
                        <ListItemText primary='About us' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='/blog.html'
                      >
                        <ListItemText primary='Blog' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='/careers.html'
                      >
                        <ListItemText primary='Career' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='/contact-us.html'
                      >
                        <ListItemText primary='Contact Us' />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant='h3' component='div'>
                  Quick Links
                </Typography>
                <nav aria-label='main mailbox folders ' className='quickLinks'>
                  <List>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='/saas-application-development.html'
                      >
                        <ListItemText primary='SaaS Application Development' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='salesforce-development.html'
                      >
                        <ListItemText primary='Salesforce Consulting' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='marketing-cloud.html'
                      >
                        <ListItemText primary='Marketing Cloud' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='sales-cloud.html'
                      >
                        <ListItemText primary='Sales Cloud' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='service-cloud.html'
                      >
                        <ListItemText primary='Service Cloud' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component='a'
                        target='_blank'
                        href='sap-emarsys.html'
                      >
                        <ListItemText primary='SAP Emarsys*' />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant='h3' component='div'>
                  Contact Us
                </Typography>
                <nav
                  className='footerContactUs'
                  aria-label='main mailbox folders'
                >
                  <List>
                    <ListItem className='ce'>
                      <CardMedia
                        component='img'
                        style={{ width: '30px', height: '30px' }}
                        image='https://cdn.discordapp.com/attachments/949683263386054716/1088292931959521280/singapore.png'
                        alt='green iguana'
                      />
                      <ListItemButton
                        component='a'
                        href='tel:+6592384299'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                          paddingRight: 0,
                        }}
                      >
                        <ListItemText className='pl5' primary='+65-9238 4299' />
                      </ListItemButton>
                    </ListItem>
                    <ListItem className='ce'>
                      <CardMedia
                        component='img'
                        image='https://cdn.discordapp.com/attachments/949683263386054716/1088292931632386078/malaysia.png'
                        style={{ width: '30px', height: '30px' }}
                        alt='green iguana'
                      />
                      <ListItemButton
                        component='a'
                        href='tel:+60123275811'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                          paddingRight: 0,
                        }}
                      >
                        <ListItemText
                          className='pl5'
                          primary='+60-1 2327 5811'
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem className='ce'>
                      <CardMedia
                        component='img'
                        image='https://cdn.discordapp.com/attachments/949683263386054716/1088292931410075698/india.png'
                        alt='green iguana'
                        style={{ width: '30px', height: '30px' }}
                      />
                      <ListItemButton
                        component='a'
                        href='tel:+919606188081'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                          paddingRight: 0,
                        }}
                      >
                        <ListItemText
                          className='pl5'
                          primary='+91-960 61880 81'
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem className='footerEmail ce'>
                      <EmailIcon />
                      <ListItemButton
                        component='a'
                        href='mailto:contact@infodrive-solutions.com'
                      >
                        <ListItemText
                          className='pl5'
                          primary='contact@infodrive-solutions.com'
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        target='_blank'
                        component='a'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                        }}
                        href='https://www.instagram.com/infodrivesolutions/'
                      >
                        <InstagramIcon />
                      </ListItemButton>
                      <ListItemButton
                        target='_blank'
                        component='a'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                        }}
                        href='https://www.facebook.com/InfoDrivesolutions/'
                      >
                        <FacebookIcon />
                      </ListItemButton>
                      <ListItemButton
                        target='_blank'
                        component='a'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                        }}
                        href='https://in.linkedin.com/company/infodrive-solutions/'
                      >
                        <LinkedInIcon />
                      </ListItemButton>
                      <ListItemButton
                        target='_blank'
                        component='a'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                        }}
                        href='https://www.youtube.com/@infodrivesolutions9178'
                      >
                        <YouTubeIcon />
                      </ListItemButton>
                      <ListItemButton
                        target='_blank'
                        component='a'
                        style={{
                          color: '#fff',
                          display: 'inline-block',
                          flexGrow: 0,
                        }}
                        href='https://twitter.com/infodrives'
                      >
                        <TwitterIcon />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <br />
      <p
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: '14px',
          margin: '0px',
          paddingBottom: '15px',
        }}
      >
        Copyright © 2023 InfoDrive Solutions Pte Ltd. All Rights Reserved.
      </p>
      <a
        href='https://wa.me/6592384299'
        className='whatsapp_float flex items-center justify-center'
        target='_blank'
        rel='noopener noreferrer'
      >
        <WhatsAppIcon />
      </a>
    </section>
  );
}
