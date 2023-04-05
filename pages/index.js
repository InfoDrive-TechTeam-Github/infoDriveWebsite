import * as React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/slider';
import utilStyles from '../styles/utils.module.css';
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
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeadForm from '../components/leadForm';

export default function Index() {
  const [value, setValue] = React.useState('1');

  const [inputData, setInputData] = useState({
    full_name: '',
    email_address: '',
    contact_number: '',
    industry: '',
    message: '',
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  var items = [
    {
      item0: [
        {
          name: 'Aidin Mahmoodi',
          role: 'Product Lead at ServiceRocket',
          description: `We reached out to InfoDrive to help us build a few technical POC (Proof of Concept) as our internal development teams were extremely busy with other products/projects. InfoDrive was very particularly quick and responsive, they quickly jumped on a call together requirements from us and provided their estimate and proposal in a short time.\n After a lengthy onboarding process from our side, InfoDrive assigned one of their remarkably capable, knowledgeable Salesforce certified engineers as our main technical person.\n I’d also like to point out that the entire team at Info Drive is resourceful, responsive, and flexible. Our assigned engineer easily adopted our internal agile practices and was able to provide feedback on our sprint review and planning, similar to our internal development teams.`,
        },
        {
          name: 'Kester Poh',
          role: 'CEO at AiChat',
          description:
            'Infodrive team has provided support in a POC setup and configured a Email-to-Case demo.   The team has also provided professional consultation on the approach for the project.    Thanks Pradeep and team for the support, looking forward to working on the next project together!',
        },
      ],
    },
    {
      item0: [
        {
          name: 'Mark Durante',
          role: 'Vice President of Product and Engineering at Jabmo',
          description:
            "After a rigorous vendor selection process undertaken by my team, we settled on InfoDrive for our SFDC app implementation project. InfoDrive's relevant experience, prompt communication, and positive attitude won us over. And I'm happy to say we made the right decision. Interactions with the team were fluid and pleasant, and they delivered a quality work product on time.  We look forward to future engagements with InfoDrive as our needs require.",
        },
        {
          name: 'Sivachanthiran Belasamy',
          role: 'Founder & CEO at Falaina',
          description:
            'Info Drive Team had provided constant support to our Organisation by helping us in building the Custom tables and related API in Salesforce.   The team has always been reachable on the approach for the project. Further, the team has been more than happy to clarify any doubts that we may have had, and done several knowledge transfers for us to better understand Salesforce and its functionalities.   Thanks, Pradeep and team for the support, looking forward to working on the upcoming projects!',
        },
      ],
    },
  ];
  console.log('items', items);
  return (
    <>
      <Head>
        <title>
          Software Development & Digital Transformation Solutions Company in
          Singapore, Malaysia & India - InfoDrive Solutions
        </title>
        <meta
          name='description'
          content='InfoDrive Solutions is a Software Development and Digital Transformation Solutions company, we are headquartered in Singapore with regional offices in Malaysia (KL) & India (Bangalore).'
        />
        <meta
          name='keywords'
          content='Software Development Company in Singapore, Software Development Company in Malaysia, Software Development Company in India, Digital Transformation Solutions Company in Malaysia, Digital Transformation Solutions Company in Singapore, IT Solutions Company in Singapore, IT Services in Malaysia, Top Software Company in Singapore, Top Software Company in Malaysia, Software Development Agency Singapore, Custom Software Malaysia, Software Development Company in Kuala Lumpur'
        />
        <meta
          property='og:title'
          content='Software Development & Digital Transformation Solutions Company inSingapore, Malaysia & India - InfoDrive Solutions'
        />
        <meta
          property='og:image'
          content='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
        />

        <link rel='icon' href='/favicon.png' />
        <link rel='canonical' href='https://infodrive-solutions.com/' />
        <meta
          name='google-site-verification'
          content='JcRwQCIELBAZJX2iIdAkVHip-fPEjV_icDXuaLBIXfE'
        />
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
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Header />
      <Slider />
      <section className={`sectionBox`}>
        <Typography gutterBottom variant='h3' component='h3'>
          WHO IS INFODRIVE SOLUTIONS
        </Typography>
        <Typography className='w100' gutterBottom variant='h1' component='h1'>
          Expert Software Consulting and Development Services for Digital
          Transformation
        </Typography>
        <Typography className='w100' gutterBottom variant='h5' component='div'>
          InfoDrive Solutions is a Software Development and Digital
          Transformation Solutions company, we are headquartered in Singapore
          with regional offices in Malaysia (KL) & India (Bangalore). We deliver
          cutting-edge Digital Transformation Solutions to many of our
          prestigious customers in South East Asia. Our expertise lies in
          providing cutting edge IT Development, Digital Transformation,
          Salesforce Consulting Services & Outsourcing Engineering Services.
        </Typography>

        <Typography className='w100' gutterBottom variant='h5' component='div'>
          We specialize in creating custom software solutions that drive digital
          transformation for businesses of all sizes. Our team of experienced
          developers uses the latest technologies to build and implement
          solutions that streamline processes, improve efficiency, and enhance
          the user experience.
        </Typography>

        <Typography className='w100' gutterBottom variant='h5' component='div'>
          Our services include web and mobile application development, cloud
          migration, API development, Digital Marketing, Salesforce Services and
          more. We work closely with our clients to understand their unique
          needs and goals, and we deliver solutions that are tailored to their
          specific requirements.
          <br />
          <br />
          In addition to our technical expertise, we also offer strategic
          consulting to help our clients navigate the constantly-evolving world
          of digital transformation. Our team can help you assess your current
          technology stack, identify areas for improvement, and create a roadmap
          for success. With a strong track record of delivering successful
          projects for clients across a range of industries, InfoDrive Solutions
          is a trusted partner for businesses seeking to drive innovation and
          growth through the power of technology.
        </Typography>
      </section>
      <section className={`sectionBox solutionBox`}>
        <p>
          InfoDrive Solutions is a preferred partner in Business process
          improvement for many small & medium size corporations and built with
          the commitment, promise & passion to provide outstanding services in
          Software Consulting. A lot of times businesses struggle to generate
          the desired outcome of their current business processes and
          applications.
        </p>
      </section>
      <section className={`sectionBox whyUsBox`}>
        <Typography gutterBottom variant='h2' component='div'>
          Why Infodrive solutions?
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Software Development'
                  src='images/knowledgable-team.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Knowledgeable team
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We have the professional team with hands-on experience in
                    their respective fields, which is the icing on the cake. We
                    have adequate and sources to accomplish and acquire the
                    superior technology platform required to run the business.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Digital Transformation Solutions Company'
                  src='images/love-for-work.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Love for work
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We have a passionate team striving to make a space where
                    access to knowledge and technology is for everyone equally.
                    To manage the quality level and give the best performance,
                    we regulate our services according to our clients’
                    expectations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Software Development Company in
          Singapore'
                  src='images/profitable-solutions.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Profitable solutions
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Our dedicated team keeps working to provide a cost-efficient
                    result from scanning to the solution’s execution. We
                    comprehend that approachability is one of the various goals
                    that strive for growth sources.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Software Development Company in
 Malaysia'
                  src='images/clinet-satisfaction.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Assured client satisfaction
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We consider our clients’ needs and respond to deliver
                    excellent outcomes by becoming flexible according to work.
                    Our clients relish the high-quality work we provide and the
                    outstanding client assistance we render. We aim to surpass
                    your expectation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='Software Development Solutions Company in India'
                  src='images/in-house-staff.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    In-house staff
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Our team interacts with our clients directly to solve their
                    queries on their projects. We don’t strive for assistance
                    that we cannot meet ourselves. At the end of every week, we
                    meet and discuss each client’s tasks, review the progress,
                    and provide improvement-related suggestions if needed.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Avatar
                  alt='InfoDrive Solutions'
                  src='images/ROI.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Excellent ROI
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We always think about the growth and profitability of our
                    associates; hence our prices are defined. All our assistance
                    and methods are modernized, focusing on accurate performance
                    and Return on investment. Thus it meets the principle aim of
                    offshore collaboration.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox aboutUsBox aboutUsBoxHome`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h3' component='div'>
                    ABOUT US
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Delivering our very best in all we do, holding ourselves
                    accountable for results with a commitment to integrity,
                    fairness and responsibility.
                  </Typography>
                  <Button
                    className='readmore white '
                    href='/about-us.html'
                    variant='text'
                  >
                    LEARN MORE ABOUT US <ArrowRightAltIcon />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={7}>
              <Card>
                <img
                  alt='Digital Transformation Solutions Company in
          Singapore'
                  src='images/pexels-ketut-subiyanto-4350210.jpg'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox connectUs backDrop connectUsHome mb30`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Transform Your Business with Cutting-Edge Technology - Partner with
          Infodrive Solutions Today!
        </Typography>
        <Button
          href='/contact-us.html'
          className='bgRed white pl15 pr15 poppin upperCase'
        >
          Connect with Our Expert
        </Button>
      </section>

      <br />

      <section className={`sectionBox aboutUsBox aboutUsBox2`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Card>
                <img alt='Remy Sharp' src='images/aboutus2.png' />
              </Card>
            </Grid>
            <Grid item xs={7}>
              <Card>
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    Delivering our very best in all we do, holding ourselves
                    accountable for results with a commitment to integrity,
                    fairness and responsibility.
                  </Typography>
                  <Typography gutterBottom variant='h2' component='div'>
                    130+
                  </Typography>
                  <Typography gutterBottom variant='h3' component='div'>
                    SUCCESSFUL PROJECTS
                  </Typography>
                  <Typography gutterBottom variant='h2' component='div'>
                    65+
                  </Typography>
                  <Typography gutterBottom variant='h3' component='div'>
                    YEARS OF EXPERIENCE
                  </Typography>
                  <Typography gutterBottom variant='h2' component='div'>
                    110+
                  </Typography>
                  <Typography gutterBottom variant='h3' component='div'>
                    HAPPY CLIENTS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <br />
      <br />
      <section className={`sectionBox locationBox mt30 testmonial`}>
        <Typography gutterBottom variant='h2' component='div'>
          What do clients say about us?
        </Typography>
        <br />

        <Carousel
          NavButton={({ onClick, className, style, next, prev }) => {
            // Other logic

            return (
              <div className='navCarouselBox'>
                <Button onClick={onClick} className={'navCarouselNext '}>
                  {/* {next && <KeyboardArrowRightIcon/>}
                {prev && <KeyboardArrowLeftIcon/>} */}
                  {next && 'Next'}
                  {prev && 'Previous'}
                </Button>
              </div>
            );
          }}
        >
          {
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Avatar
                      alt='Digital Transformation Solutions Company in
 Malaysia'
                      src='images/user-icon.jpeg'
                      sx={{ width: 65, height: 65, marginLeft: 2 }}
                    />
                    <div className='testmonialStar'>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h3'
                        className='pt15 mb0'
                        component='div'
                      >
                        Mark Durante
                      </Typography>
                      <Typography
                        className='mt0 pt0 pb15'
                        gutterBottom
                        variant='h5'
                        component='div'
                      >
                        Vice President of Product and Engineering at Jabmo
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        After a rigorous vendor selection process undertaken by
                        my team, we settled on InfoDrive for our SFDC app
                        implementation project. InfoDrive's relevant experience,
                        prompt communication, and positive attitude won us over.
                        And I'm happy to say we made the right decision. <br />
                        Interactions with the team were fluid and pleasant, and
                        they delivered a quality work product on time. <br />
                        We look forward to future engagements with InfoDrive as
                        our needs require.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Avatar
                      alt='Digital Transformation Solutions Company in
          India'
                      src='images/user-icon.jpeg'
                      sx={{ width: 65, height: 65, marginLeft: 2 }}
                    />
                    <div className='testmonialStar'>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h3'
                        className='pt15 mb0'
                        component='div'
                      >
                        Sivachanthiran Belasamy
                      </Typography>
                      <Typography
                        className='mt0 pt0 pb15'
                        gutterBottom
                        variant='h5'
                        component='div'
                      >
                        (Founder & CEO at Falaina)
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Info Drive Team had provided constant support to our
                        Organisation by helping us in building the Custom tables
                        and related API in Salesforce. <br />
                        The team has always been reachable on the approach for
                        the project. Further, the team has been more than happy
                        to clarify any doubts that we may have had, and done
                        several knowledge transfers for us to better understand
                        Salesforce and its functionalities. <br />
                        Thanks, Pradeep and team for the support, looking
                        forward to working on the upcoming projects!"
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          }
          {
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Avatar
                      alt='We are headquartered in Singapore'
                      src='images/user-icon.jpeg'
                      sx={{ width: 65, height: 65, marginLeft: 2 }}
                    />
                    <div className='testmonialStar'>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h3'
                        className='pt15 mb0'
                        component='div'
                      >
                        Aidin Mahmoodi
                      </Typography>
                      <Typography
                        className='mt0 w100 pt0 pb15'
                        gutterBottom
                        variant='h5'
                        component='div'
                      >
                        {'Product Lead at ServiceRocket'}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        We reached out to InfoDrive to help us build a few
                        technical POC (Proof of Concept) as our internal
                        development teams were extremely busy with other
                        products/projects. InfoDrive was very particularly quick
                        and responsive, they quickly jumped on a call together
                        requirements from us and provided their estimate and
                        proposal in a short time. <br />
                        After a lengthy onboarding process from our side,
                        InfoDrive assigned one of their remarkably capable,
                        knowledgeable Salesforce certified engineers as our main
                        technical person. <br />
                        I’d also like to point out that the entire team at Info
                        Drive is resourceful, responsive, and flexible. Our
                        assigned engineer easily adopted our internal agile
                        practices and was able to provide feedback on our sprint
                        review and planning, similar to our internal development
                        teams.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Avatar
                      alt='Providing cutting edge IT Development'
                      src='images/user-icon.jpeg'
                      sx={{ width: 65, height: 65, marginLeft: 2 }}
                    />
                    <div className='testmonialStar'>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h3'
                        className='pt15 mb0'
                        component='div'
                      >
                        Kester Poh
                      </Typography>
                      <Typography
                        className='mt0 pt0 pb15'
                        gutterBottom
                        variant='h5'
                        component='div'
                      >
                        (CEO at AiChat)
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Infodrive team has provided support in a POC setup and
                        configured a Email-to-Case demo. <br />
                        The team has also provided professional consultation on
                        the approach for the project. <br />
                        Thanks Pradeep and team for the support, looking forward
                        to working on the next project together! <br />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          }
        </Carousel>
      </section>
      <LeadForm />
      <Footer />
    </>
  );
}
