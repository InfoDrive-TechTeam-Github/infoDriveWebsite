import React, { useEffect, useState } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Head from 'next/head';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import LeadForm from 'components/leadForm';
import { green, pink } from '@mui/material/colors';
import dateFormat, { masks } from "dateformat";
export default function SalesForceDevelopment({ data }) {
  console.log('data0000__', data);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [active, setActive] = useState('all');

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const goToPage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber > 0) {
      setPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };
  const handleButtonClick = (category) => {
    setActive(category);
  };
 // console.log('active', active);
  return (
    <div>
      <Head>
        <title>
          SEO Service Provider & Company in Singapore, Malaysia, and India
        </title>
        <meta
          name='description'
          content='InfoDrive Solutions is a leading search engine optimization company offering expert SEO services in Singapore, Malaysia, and India. As a top SEO consultant, we provide customized strategies for small businesses and startups to improve their online visibility.'
        />
        <meta
          name='keywords'
          content='Search Engine Optimization Company, SEO Service Provider in Singapore, SEO Consultant in Singapore, SEO Company Near Me, SEO Strategy Provider in Singapore, SEO Company in Malaysia, SEO Company in Kuala Lumpur, SEO Services in Singapore, SEO Consultant in Malaysia, SEO Service Provider in Malaysia'
        />
        <link
          rel='canonical'
          href='https://infodrive-solutions.com/search-engine-optimization.html'
        />
        <meta
          property='og:title'
          content='SEO Service Provider & Company in Singapore, Malaysia, and India'
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
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Header />
      <section
        className={`sectionBox pt30 pb30 textAlignCenter blog upperCase`}
      >
        <br />
        <br />
        <Typography gutterBottom variant='h1' component='h1' className='w100 '>
          All Posts
        </Typography>
        {/**  category menu */}
        <div className='category flex flex-wrap gap-2 mt-10'>
          <div
            className={`button poppin hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out  hover:text-white hover:border-white rounded-lg ${
              active == 'all'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('all')}
          >
            All categories
          </div>
          <div
            className={`button poppin hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'salesforce'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('salesforce')}
          >
            Salesforce
          </div>
          <div
            className={`button  hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out  hover:text-white hover:border-white  rounded-lg ${
              active == 'blch'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('blch')}
          >
            Blockchain
          </div>
          <div
            className={`button  hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'wbAp'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('wbAp')}
          >
            Web and APP Development
          </div>
          <div
            className={`button hover:bg-[#f50057] h-10 w-fit p-2    poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'CRM'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('CRM')}
          >
            CRM
          </div>
          <div
            className={`button hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'sapEm'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('sapEm')}
          >
            SAP Emarys

          </div>
          <div
            className={`button hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'Business'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('Business')}
          >
            Business

          </div>
          <div
            className={`button hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'DigitalMarketing'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('DigitalMarketing')}
          >
            Digital Marketing
          </div>
          <div
            className={`button hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'Technology'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('Technology')}
          >
            Technology

          </div>
          <div
            className={`button hover:bg-[#f50057] h-10 w-fit p-2  poppin min-w-[150px] text-center border transition-all ease-out hover:text-white hover:border-white  rounded-lg ${
              active == 'ItSolu'
                ? 'bg-[#f50057] text-white border-white'
                : 'text-gray-500 border-gray-500'
            }`}
            onClick={() => handleButtonClick('ItSolu')}
          >
            IT Solution
          </div>
        </div>
        <br />
      </section>
      <section className={`sectionBox whyUsBox salesForceServices2 blog news `}>
        <Box sx={{ flexGrow: 1 }}>
          {data.slice(startIndex, endIndex).map((post, index) => {
            return (
              <div>
                {(() => {
                  if (
                    typeof post['_embedded']['wp:featuredmedia'] ==
                      'undefined' &&
                    post['_embedded']['wp:featuredmedia'] != ''
                  ) {
                    return (
                      <div></div>
                    );
                  } else {
                    return <div></div>;
                  }
                })()}

                <Grid container spacing={0} className='mb30 items-center'>
                  <Grid item xs={6} className='mb1'>
                    
                    <Card>
                      <CardContent>
                        <div className='flex items-center object-cover'>
                          <a href={`/blog/${post['slug']}.html`}>
                          <img
                            className='h-full rounded-xl'
                            style={{ width: '100%' }}
                            src={
                              post['_embedded']['wp:featuredmedia'][0][
                                'source_url'
                              ]
                            }
                          />
                          </a>
                        </div>

                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} >
                  <div className='imgHeader flex items-center justify-between p-2'>
                      <div className='text-gray-400 flex gap-2 items-center'>
                        <Avatar src='/broken-image.jpg' className='h-7 w-7' />
                        <p>{ post['_embedded']['author'][0][
                                'name'
                              ] }</p>
                              
                      </div>

                      <Button
                        href={`/blog/${post['slug']}.html`}
                        className='bgRed white  poppin ml30 normalCase h-7 w-fit'
                      >
                        {post['_embedded']['wp:term'][0][0]['name']}
                      </Button>
                     
                    </div>
                    <Card>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant='h3'
                          component='h2'
                          className='w100 pl30'
                        >
                          <div>
                            
                            <a href={`/blog/${post['slug']}.html`}><h3>{post['title']['rendered']}</h3>{' '}</a>
                          </div>
                        </Typography>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='div'
                          className='w100 pl30'
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post['excerpt']['rendered'],
                            }}
                          ></div>
                         
                        </Typography>
                        {/* <Button
                          href={`/blog/${post['slug']}.html`}
                          className='bgRed white pl15 pr15 poppin ml30 normalCase'
                        >
                          Read more
                        </Button> */}
                        <h3 className='pr15 poppin ml30 normalCase'>Publish Date: {dateFormat(post['date'], "fullDate")}</h3>
                       
                       
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Box>
      </section>

      <section className='pagination'>
        <CssBaseline />
        <Container
          maxWidth='sm'
          component={'Box'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <ChevronLeftIcon
              style={{ cursor: 'pointer' }}
              onClick={() => goToPage(page - 1)}
            />
            <Avatar sx={{ bgcolor: pink[500] }}>{page}</Avatar>
            <ChevronRightIcon
              onClick={() => goToPage(page + 1)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Container>
      </section>

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant='h3'
          className='white pb15 pt15 poppin'
          component='div'
        >
          Transforming Your Website Into a Search Egine Powerhouse
        </Typography>
        <Button
          href='/contact-us.html'
          className='bgRed white pl15 pr15 poppin upperCase'
        >
          Connect with Our Expert
        </Button>
      </section>
      <LeadForm />
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://mydryve.co/InfoDriveBlog/wp-json/wp/v2/posts?_embed&&limit=2&categories=3,4,5,6,7,8,9,10,11,12`
  );
  const data = await res.json();
  console.log("API blog",data);
  // Pass data to the page via props
  return { props: { data } };
}
