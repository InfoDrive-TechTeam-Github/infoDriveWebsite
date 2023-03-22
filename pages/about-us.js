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
import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>
          About Us - IT Solutions Company in Singapore, Malaysia, and India |
          InfoDrive Solutions
        </title>
        <meta
          name='description'
          content='InfoDrive Solutions is a leading IT solution provider, and we are helping many start-ups and small-medium businesses to build products from scratch. We analyse your start-up model in its entirety, consult and offer the right technology solutions.'
        />
        <meta
          name='keywords'
          content='InfoDrive Solutions Company, IT Solutions Company in Singapore, IT Solutions Company in Malaysia, IT Solutions Company in India, IT Solutions Company in Kuala Lumpur'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/about-us.html'
        />
        <meta
          property='og:title'
          content='About Us - IT Solutions Company in Singapore, Malaysia, and India |InfoDrive Solutions'
        />
        <meta
          property='og:image'
          content='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
        />
        <link rel='icon' href='/favicon.png' />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MB38MVS');`,
          }}
        />
      </Head>

      <iframe
        src='https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS'
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
      <Header />
      <div className='sliderBox'>
        <img
          style={{ width: '100%' }}
          src='images/pexels-helena-lopes-933964.jpg'
          alt='IT Solutions Company in Kuala Lumpur'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <Typography gutterBottom variant='h1' component='div'>
              We are a world of people. <br /> We believe in the future. <br />{' '}
              We believe technology brings us <br />
              together and makes our lives better
            </Typography>
            <Button
              href='/contact-us.html'
              className='readmore white'
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
        <Typography gutterBottom variant='h3' component='div'>
          ABOUT US
        </Typography>
        <Typography gutterBottom variant='h1' component='h1'>
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
                <img
                  alt='Consulting services to local and
                multinational companies within Asia'
                  src='images/pexels-fauxels-3183145.jpg'
                />
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
                  <Button
                    className='readmore'
                    href='/contact-us.html'
                    variant='text'
                  >
                    LEARN MORE ABOUT US <ArrowRightAltIcon />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox aboutUsBox ourMissionBox`}>
        <img
          alt='IT Solutions Company in India '
          src='images/pexels-bradley-hook-123335.jpg'
        />
        <Box sx={{ flexGrow: 1 }} className='ourMissionContent'>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='red'
                    component='div'
                  >
                    OUR MISSION
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Our mission is to deliver highest standard of services to
                    our customers in a relationship focused environment by
                    ensuring right people and technology.
                  </Typography>

                  <Typography
                    gutterBottom
                    variant='h3'
                    className='red'
                    component='div'
                  >
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
              <Typography
                gutterBottom
                variant='h3'
                className='red'
                component='div'
              >
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
                  alt='IT Solutions Company in Malaysia'
                  src='images/pexels-harsch-shivam-2007647.jpg'
                />
              </Card>
            </Grid>
            <Grid item xs={6} style={{ padding: '30px' }}>
              <Typography
                gutterBottom
                variant='h3'
                className='red'
                component='div'
              >
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
          <Typography gutterBottom variant='h2' className='red' component='div'>
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
                    We understand the importance of timely delivery and
                    cost-effectiveness for our clients. That's why we strive to
                    provide fast delivery of our products and services at
                    reasonable costs. Our team of experts works efficiently to
                    ensure that our clients receive their orders as soon as
                    possible without compromising on the quality.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox pt0 pb0`}>
        <Typography gutterBottom variant='h2' component='div'>
          We offer a wide variety of IT services
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='IT Solutions Company in Singapore'
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
                  alt='Salesforce consulting'
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
                  alt='Our mission is to deliver highest standard of services'
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
                  alt=' accelerate  your start-up'
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
                  alt='We are headquartered in Singapore'
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
                  alt='Digital
          Transformation Solutions company'
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
                <ListItemButton href='/'>
                  <ListItemIcon>
                    <img
                      src='images/internet.png'
                      alt='Leading Technology solution provider'
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/ios-app-development.html'>
                  <ListItemIcon>
                    <img src='images/apple.png' />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/android-app-development.html'>
                  <ListItemIcon>
                    <img
                      src='images/android.png'
                      alt=' IT Solutions Company in Singapore'
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/customer-relationship-management.html'>
                  <ListItemIcon>
                    <img
                      src='images/internet-2.png'
                      alt='We analyse your start-up model in its entirety'
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/blockchain-nft.html'>
                  <ListItemIcon>
                    <img
                      src='images/nft.png'
                      alt='IT Solutions Company in Singapore, Malaysia, and India |
          InfoDrive Solutions'
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/blockchain-nft.html'>
                  <ListItemIcon>
                    <img
                      src='images/blockchain.png'
                      alt='small-medium businesses to build products from scratch'
                    />
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

              <Button
                className='readmore white'
                href='/about-us.html'
                variant='text'
              >
                JOIN OUR TEAM <ArrowRightAltIcon />
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              className='rightOurCoreTeam'
              style={{ padding: '30px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/pradeep.png'
                  alt='we are helping many start-ups'
                />
                <CardContent>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Pradeep Chand</span>
                    <a
                      className='red'
                      target='_blank'
                      href='https://www.linkedin.com/in/pradeepchand1/'
                    >
                      <LinkedInIcon />
                    </a>
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

            <Grid
              item
              xs={3}
              className='rightOurCoreTeam'
              style={{ padding: '30px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/kapil.png'
                  alt='InfoDrive Solutions is a leading IT solution provider'
                />
                <CardContent>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Kapil Gairola</span>
                    <a
                      className='red'
                      target='_blank'
                      href='https://www.linkedin.com/in/kapilgairola/'
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className='widthInitial'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    CEO Malaysia
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
            <Grid
              item
              xs={2}
              className='rightOurCoreTeam'
              style={{ padding: '15px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/shashank.png'
                  alt='IT Solutions Company in Singapore'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Shashank Jain</span>
                    <a
                      target='_blank'
                      className='red'
                      href='https://www.linkedin.com/in/shashank-jain-%E2%98%81-00913550/'
                    >
                      <LinkedInIcon />
                    </a>
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

            <Grid
              item
              xs={2}
              className='rightOurCoreTeam'
              style={{ padding: '15px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/bharani.png'
                  alt='IT Solutions Company in Kuala Lumpur'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Bharani Kumar</span>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/bharani-kumar-8b929641/'
                      className='red'
                    >
                      <LinkedInIcon />
                    </a>
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

            <Grid
              item
              xs={2}
              className='rightOurCoreTeam'
              style={{ padding: '15px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/maria.png'
                  alt='InfoDrive Solutions'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Maria Aileen</span>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/maria-aileen-abendanio-b6802518/'
                      className='red'
                    >
                      <LinkedInIcon />
                    </a>
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

            <Grid
              item
              xs={2}
              className='rightOurCoreTeam'
              style={{ padding: '15px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/Sudhir-2.JPG'
                  alt='IT Solutions Company in  India'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Sudhir Budakoti</span>
                    <a
                      className='red'
                      target='_blank'
                      href='https://www.linkedin.com/in/sudhirbudakoti/'
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    CEO India
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* <Grid
              item
              xs={2}
              className='rightOurCoreTeam'
              style={{ padding: '15px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/kyna.png'
                    alt='IT Solutions Company in Singapore, Malaysia, and India |
          InfoDrive Solutions'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Kyna Lim</span>
                    <a
                      href='https://www.linkedin.com/in/lxmyitian/'
                      className='red'
                    >
                      <LinkedInIcon />
                    </a>
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
            </Grid> */}

            <Grid
              item
              xs={2}
              className='rightOurCoreTeam'
              style={{ padding: '15px' }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='240'
                  image='images/team-photos/dev.png'
                  alt='IT Solutions Company in Malaysia'
                />
                <CardContent>
                  <Typography
                    className='widthInitial fs20'
                    gutterBottom
                    variant='h3'
                    component='div'
                  >
                    <span>Devraj Singh</span>
                    <a
                      href='https://www.linkedin.com/in/devrajsinghrawat/'
                      className='red'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className='widthInitial fs18'
                    gutterBottom
                    variant='h4'
                    component='div'
                  >
                    Blockchain Lead at InfoDrive Solutions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox ourValueBox ourBeliefBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={5}
              style={{ padding: '30px', background: '#DE3854' }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Get in touch with us today for a <br /> non-obligation
                discussion
                <br />
                <br />
                InfoDrive Solutions is 24X7 <br /> Available To Help You
              </Typography>
              <br />
              <br />
              <Button
                href='/contact-us.html'
                className='readmore white'
                variant='text'
              >
                CONTACT US <ArrowRightAltIcon />
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Card>
                <img
                  alt='IT Solutions Company in Singapore'
                  src='images/pexels-prakhar-bansal-732183.jpg'
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
