import React, { useEffect, useState } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
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


import LeadForm from '../components/leadForm';
export default function SalesForceDevelopment({ data }) {
  console.log("data0000__",data);
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
      <section className={`sectionBox pt30 pb30 textAlignCenter blog upperCase`}>
      <br/>
      <br/>
        <Typography gutterBottom variant='h1' component='h1' className='w100'>
           All Posts
        </Typography>
        <br/>
      </section>
      <section className={`sectionBox whyUsBox salesForceServices2 blog news`}>
        <Box sx={{ flexGrow: 1 }}>
          {data.map((post,index) =>{
            return(
              <div>
               {(() => {
                  if ((typeof post['_embedded']['wp:featuredmedia'] == 'undefined') && (post['_embedded']['wp:featuredmedia'] != '')) {
                    return (
                      //console.log("out____",post['_embedded'])
                      <div></div>
                    )
                  } else {
                    return (
                      <div></div>
                    )
                  }
                })()}

                <Grid container spacing={0}>
                <Grid item xs={6} className="mb1">
                  <Card>
                    <CardContent>
                      <div> <img
                          style={{ width: '100%' }}
                          src='images/3f41e8b470a19936da4c15fc5a17ebf3.jpeg'
                        /></div>
                      {/* src={post['_embedded']['wp:featuredmedia'][0]['source_url']} */}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} className="mb0">
                <Card>
                <CardContent>
                <Typography
                        gutterBottom
                        variant='h3'
                        component='h2'
                        className='w100 pl30'
                      >
                      <div><h3>{post['title']['rendered']}</h3> </div>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        className='w100 pl30'
                      >
                        <div dangerouslySetInnerHTML={{__html:post['excerpt']['rendered']}}></div>
                      </Typography>
                      <Button
                        href={`/${post['slug']}`}
                        className='bgRed white pl15 pr15 poppin ml30 normalCase'
                      >
                        Read more
                      </Button>
                </CardContent>
                </Card>
                </Grid>
                </Grid>

              </div>
          );
          })}
        </Box>
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
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://mydryve.co/blog/wp-json/wp/v2/posts?_embed`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

