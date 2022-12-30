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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Footer() {
  return (
      <section className={`sectionBox footerSection pb0`}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={4} className="logoFooter">
                <img src="https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"/>
                <Typography variant="h3" sx={{ my: 2 }}>
                Driven by technology
                </Typography>
              </Grid>
              <Grid item xs={8}>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                        <Typography gutterBottom variant="h3" component="div">
                            Company
                        </Typography>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem >
                                    <ListItemButton component="a" href="#about-us">
                                        <ListItemText primary="About" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#contact">
                                        <ListItemText primary="Contact" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#blogs">
                                        <ListItemText primary="Blogs" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                </Grid>
                <Grid item xs={4}>
                <Typography gutterBottom variant="h3" component="div">
                            Legal
                        </Typography>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem >
                                    <ListItemButton component="a" href="#about-us">
                                        <ListItemText primary="Privacy Policy" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#contact">
                                        <ListItemText primary="Terms & Services" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#blogs">
                                        <ListItemText primary="Terms of Use" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#blogs">
                                        <ListItemText primary="Refund Policy" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                </Grid>
                <Grid item xs={4}>
                <Typography gutterBottom variant="h3" component="div">
                Quick Links
                        </Typography>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem >
                                    <ListItemButton component="a" href="#about-us">
                                        <ListItemText primary="Techlabz Keybox" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#contact">
                                        <ListItemText primary="Downloads" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#blogs">
                                        <ListItemText primary="Forum" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#blogs">
                                        <ListItemText primary="Refund Policy" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Box>
        <br/>
        <p style={{textAlign:"center", color:"#fff", fontSize:"14px", margin:"0px", paddingBottom:"15px"}}>Copyright © 2023 InfoDrive Solutions Pte Ltd. All Rights Reserved.</p>
      </section>
  )
}