import * as React from 'react';
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
export default function About() {
  return (
    <div>
      <Header />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='images/pexels-helena-lopes-933964.jpg'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <p>
              We are a world of people. <br /> We believe in the future. <br />{' '}
              We believe technology brings us <br />
              together and makes our lives better
            </p>
            <Button href="/contact-us.html" className='readmore white' variant='text'>
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className='socical-network'>
            <List>
                    <ListItem>
                      <ListItemButton component="a" href="https://www.facebook.com/InfoDrivesolutions/">
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                    <ListItemButton component="a" href="https://in.linkedin.com/company/infodrive-solutions/">
                        <ListItemIcon>
                          <LinkedInIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="https://www.instagram.com/infodrivesolutions/">
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
        <Typography gutterBottom variant='h3' component='div'>
          ABOUT US
        </Typography>
        <Typography gutterBottom variant='h2' component='div'>
          InfoDrive Solutions is a leading Technology solution provider and we
          are helping many start-ups and small-medium businesses to build
          products from scratch.
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          InfoDrive Solutions is a Software Development and Digital
          Transformation Solutions company, we are headquartered in Singapore
          with regional offices in Malaysia (KL) & India (Bangalore). We deliver
          cutting-edge Digital Transformation Solutions to many of our
          prestigious customers in South East Asia. We provide curated IT
          resources companies need for technical implementation and bringing a
          better understanding of the costs of development.
        </Typography>
      </section>

      <section className={`sectionBox aboutUsBox aboutUsBox3`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <img alt='Remy Sharp' src='images/pexels-fauxels-3183145.jpg' />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    We analyze your start-up model in its entirety, consult and
                    offer the right technology solutions. Our leading technology
                    experts will bring you the latest technologies with a
                    variety of great benefits and catered solutions that will
                    accelerate and elevate your start-up. <br />
                    At InfoDrive Solutions, we work together with start-ups to
                    build custom applications for product-market fit, including
                    mobile and/or web solutions, blockchain-based applications,
                    or enterprise solutions to have a seamless flow for customer
                    engagement, with the help of tools like Salesforce or other
                    enterprise software.
                  </Typography>
                  <Button className='readmore' href="/contact-us.html" variant='text'>
                    LEARN MORE ABOUT US <ArrowRightAltIcon />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox aboutUsBox ourMissionBox`}>
        <img alt='Remy Sharp' src='images/pexels-bradley-hook-123335.jpg' />
        <Box sx={{ flexGrow: 1 }} className='ourMissionContent'>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' className="red" component='div'>
                    OUR MISSION
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Our mission is to deliver highest standard of services to
                    our customers in a relationship focused environment by
                    ensuring right people and technology.
                  </Typography>

                  <Typography gutterBottom variant='h3' className="red" component='div'>
                    OUR VISION
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Our vision helps us to stay focused on what needs to be
                    accomplished to achieve our goals and to be numero uno in
                    salesforce consulting, recruitment and staffing field.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography gutterBottom variant='h3' className="red" component='div'>
                OUR VALUES
              </Typography>
              <Typography gutterBottom variant='h2' component='div'>
                We pursue growth and learning with passion in the heart while
                developing a passion to always win and enjoy what we do.
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                Infodrive Solutions is an IT Services and solutions company
                specialized in software development, support, IT training, IT
                technology staffing, and consulting services to local and
                multinational companies within Asia who are leaders in financial
                services, insurance, telecommunication, healthcare and
                biosciences, logistics, information technology and government
                and public sector.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox ourBeliefBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <img
                  alt='Remy Sharp'
                  src='images/pexels-harsch-shivam-2007647.jpg'
                />
              </Card>
            </Grid>
            <Grid item xs={6} style={{ padding: '30px' }}>
              <Typography gutterBottom variant='h3' className="red" component='div'>
                OUR BELIEF
              </Typography>
              <Typography gutterBottom variant='h2' component='div'>
                Delivering our very best in all we do, holding ourselves
                accountable for results with a commitment to integrity, fairness
                and responsibility.
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                We have a passionate team striving to make a space where access
                to knowledge and technology is for everyone equally.To manage
                the quality level and give the best performance, we regulate our
                services according to our clients’ expectations.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox companiesBox`}>
        <div>
          <Typography gutterBottom variant='h2' className="red" component='div'>
            Companies don't make people, people make companies!
          </Typography>

          <Typography gutterBottom variant='h5' component='div'>
            We always believe in the strength of manpower that is why we keep
            them at “First”. We always look for smart, intelligent, passionate &
            energetic individuals for various opportunities. InfoDrive Solutions
            provides the services & solutions to global companies and works in
            the manners of IT Technologies.
          </Typography>
          {/* <br />
          <br />
          <br />
          <Typography gutterBottom variant='h3' component='div'>
            InfoDrive Technologies “Driven By Technology”
          </Typography> */}
        </div>
      </section>

      <section className={`sectionBox whyUsBox pt0 pb0`}>
        <Typography gutterBottom variant='h2' className='mb0' component='div'>
          What we do
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    Technical consultation
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    100+ projects in long-term partnerships with 100+ clients
                    worldwide allow us to provide comprehensive technical
                    consultations for start-ups with absolute guarantee of
                    quality.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    Long-standing reputation
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    Close to 10 years of experience inherited and the position
                    in earned in Singapore as one of the reliable technology
                    corporations have cemented our prestige and position in the
                    IT market of the region.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    Fast Delivery & Reasonable Cost
                  </Typography>
                  <br />
                  <Typography variant='body2' color='text.secondary'>
                    no content here. To provide
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox pt0 pb0`}>
        <Typography gutterBottom variant='h2' component='div'>
          We offer a wide 
          variety of IT services
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='images/ideation.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Ideation
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We discuss your ideas to determine the pros and cons, dig
                    into the issues you are facing and analyze your targeted
                    clients to provide the most suitable technology solution for
                    your start-up.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='images/MVP.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    MVP development
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We design, develop and launch Minimum Viable Product (MVP)
                    that helps to turn your idea into a real project or
                    eliminate all possible risks from a defective product,
                    helping you to identify market needs and bring your
                    customers satisfaction.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='images/growth.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Growth marketing
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We map out your start-up growth path based on defining your
                    current scope and condition to help your business approach a
                    bigger potential customer base and gain more profits.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='images/agile-software.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Agile software development
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Our end-to-end software development service will make your
                    ideas into reality and help your start-up confidently enter
                    the market. Our experienced developers build responsive
                    software in the fastest time possible.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='images/consulting.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Online consulting
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='images/team.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Dedicated team
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Over the past decade, our customers succeeded by leveraging
                    intellect soft's process of building and motivating.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox companiesBox weDelivery`}>
        <div>
          <Typography gutterBottom variant='h3' component='div'>
            We deliver solution with <br />
            the goal of trusting relationships
          </Typography>
          <br />
          <nav className='socical-network'>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <img src='images/internet.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <img src='images/apple.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <img src='images/android.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <img src='images/internet-2.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <img src='images/nft.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <img src='images/blockchain.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </div>
      </section>
      <section className={`sectionBox ourCoreTeam pb0`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} style={{ padding: '30px' }}>
              <Typography
                className='widthInitial red'
                gutterBottom
                variant='h2'
                component='div'
              >
                Our core team
              </Typography>
              <Typography
                className='widthInitial'
                gutterBottom
                variant='h5'
                component='div'
              >
                We help businesses elevate their value through custom software
                development, product design, QA and consultancy services.
              </Typography>

              <Button className='readmore black pl0' variant='text'>
                JOIN OUR TEAM <ArrowRightAltIcon />
              </Button>
            </Grid>
            <Grid item xs={3} className="rightOurCoreTeam" style={{ padding: '30px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/pradeep.png'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Pradeep Chand</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    Group CEO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3} className="rightOurCoreTeam" style={{ padding: '30px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/kapil.png'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Kapil Gairola</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    CEO | MALAYSIA & INDIA
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourCoreTeam ourCoreTeamOther pt0`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={2} className="rightOurCoreTeam" style={{ padding: '15px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/shashank.png'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Shashank Jain</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    VP | Europe & North America
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2} className="rightOurCoreTeam" style={{ padding: '15px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/bharani.png'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Bharani Kumar</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    CTO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2} className="rightOurCoreTeam" style={{ padding: '15px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/maria.png'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Maria Aileen</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    Head of Finance{' '}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2} className="rightOurCoreTeam" style={{ padding: '15px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/Sudhir-2.JPG'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Sudhir Budakoti</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    Sales Director
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2} className="rightOurCoreTeam" style={{ padding: '15px' }}>
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/kyna.png'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Kyna Lim</span> <LinkedInIcon />
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    Senior Sales Executive | APAC
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox ourBeliefBox`}>
           <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={0}>
            <Grid item xs={5} style={{padding:"30px", background:"#DE3854"}}>
                  <Typography gutterBottom variant="h5" component="div">
                  Get in touch with us today for a <br/> non-obligation discussion and start transforming your start-up ideas into real-life products.                  
                  <br/>
                  <br/>
                  InfoDrive Solutions is 24X7 <br/> Available To Help You
                  </Typography>
                  <br/>
                  <br/>
                  <Button href="/contact-us.html" className='readmore white pl0' variant="text">CONTACT US <ArrowRightAltIcon/></Button>
                  </Grid>
                <Grid item xs={7}>
                    <Card>
                      <img
                        alt="Remy Sharp"
                        src="images/pexels-prakhar-bansal-732183.jpg"
                      />
                    </Card>
                </Grid>
            </Grid>
          </Box>
      </section>

      <Footer />
    </div>
  );
}
