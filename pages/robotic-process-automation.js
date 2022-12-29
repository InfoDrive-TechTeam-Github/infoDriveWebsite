import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function RoboticProcessAutomation() {
    return (
        <div >
           <Header/>
           <div className="sliderBox blockNFT">
        <img style={{width: '100%',opacity: '0.5'}} src="images/Robotic_Process.png"/>
        <Box sx={{ flexGrow: 1 }} className="sliderContent">
              <Grid container spacing={0}>
              <p>
              Robotic <br/> process <br/> automation </p>
              <Button className="readmore" variant="text">Let's Talk <ArrowRightAltIcon/></Button>
                  <nav className="socical-network">
                    <List>
                      <ListItem>
                        <ListItemButton>
                          <ListItemIcon>
                            <FacebookIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>
                          <ListItemIcon>
                            <TwitterIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>
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
      <section className={`sectionBox RoboticAuBox`}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0} className="fd1">
                <Grid item xs={6}>
                  <Card className="fp1">
                  <Typography gutterBottom variant="h3" component="div">
                  Exact analysis
              </Typography>
                  <CardContent>
                      <Typography gutterBottom variant="h3" component="div" className="bp2">
                      Our blockchain consultants cover all challenges<br/> emerging in blockchain development and <br/> deliver thorough analysis of current business <br/>processes, specify needs for blockchain <br/> solution, estimate value from blockchain <br/> application in your business.<br/>
                      </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                  <img alt="Exact analysis" className="chain_img" src="images/Exact analysis.png"/>
                  </Card>
                </Grid>
              </Grid>
          </Box>
        </section>
        <section className={`sectionBox BlockchainUsBox`}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Card>
                  <img alt="On time deliverige" className="chain_img" src="images/on-time deliverie.png"/>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className="fp2">
                  <Typography gutterBottom variant="h3" component="div">
                  Proven on-time deliveries
              </Typography>
                  <CardContent>
                      <Typography gutterBottom variant="h2" component="div" className="bp2">
                      Infodrive Solutions has over 9 years of <br/>experience in eCommerce and <br/> blockchain to assist you in successfully<br/> adopting NFT.
                      </Typography>
                      <Typography gutterBottom variant="h4" component="div" className="bp3">
                      We have flawlessly deployed more than 10 <br/> tokenization-related projects.
                      </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
          </Box>
        </section>
  
        <section className={`sectionBox BlockchainUsBox`}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={5} className="blcnt">
                  <Card className="blcnt2">
                  <CardContent >
                      <Typography gutterBottom variant="h3" component="div" className="blcntp">
                      Get in touch with us today for a <br/> non-obligation discussion and <br/> start transforming your start-up <br/>ideas into real-life products.
                      </Typography>
                      
                      <Button className='readmore blcnbtn' variant="text">CONTACT US <ArrowRightAltIcon/></Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={7}>
                  <Card>
                  <img alt="Contact us" className="chain_img" src="images/Blockchain_contactus.png"/>
                  
                  </Card>
                </Grid>
              </Grid>
          </Box>
        </section>
           <Footer/>
        </div>
      
      )
}

export default RoboticProcessAutomation;
