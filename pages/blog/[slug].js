import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Button from '@mui/material/Button';
import LeadForm from '../../components/leadForm';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import { green, pink } from '@mui/material/colors';
import Link from 'next/link';
export default function SalesForceDevelopment({ data, datafull }) {
  const [dataIndex, setDataIndex] = useState(0);
  console.log('dataIndex', dataIndex);

  const itemsPerPage = 1;
  console.log('datafull', datafull[dataIndex]);
  console.log('data', data);

  const totalPages = datafull.length;

  const goToPage = (pageNumber) => {
    if (pageNumber < totalPages && pageNumber >= 0) {
      setDataIndex(pageNumber);
    }
  };
  useEffect(() => {
    const index = datafull.findIndex((item) => item.id === data[0].id);
    console.log('dataIndex', index);
    setDataIndex(index);
  }, []);

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
      <Header />
      <section
        className={`sectionBox whyUsBox salesForceServices2 blog news my-[50px] `}
      >
        <Box>
          {data.map((post, index) => {
            var today = new Date(post['date']).toLocaleDateString();
            return (
              <div>
                <section
                  className={`sectionBox pt10 pb10 textAlignCenter blog bg-white`}
                >
                  {/**TITLE */}
                  <div className='flex justify-center'>
                    <Typography
                      gutterBottom
                      variant='h1'
                      component='h2'
                      className='w-fit pl10 border rounded-2xl flex items-center justify-center p-5  hover:bg-[#f50057] hover:text-white transition-all ease-in '
                    >
                      {post['title']['rendered']}
                    </Typography>
                  </div>

                  <br />
                </section>
                <Grid container spacing={0}>
                  <Grid item xs={12} className='mb1 blg'>
                    <Card>
                      <CardContent>
                        <div className='flex justify-center items-center py-3 '>
                          <div className=' w-[34rem]'>
                            {/**Image Div */}
                            <img
                              className='h-full rounded-xl w-fit'
                              src={
                                post['_embedded']['wp:featuredmedia'][0][
                                  'source_url'
                                ]
                              }
                            />
                          </div>
                        </div>
                        {/**content */}
                        <div className='Content max-w-7xl px-10 mt-10'>
                          {/**Image below section Category and User,Avtar */}
                          <div className='md:flex justify-between items-baseline '>
                            <div className='text-gray-400 flex gap-2'>
                              <Avatar
                                src='/broken-image.jpg'
                                className='h-6 w-6'
                              />
                              <p>{post['_embedded']['author'][0]['name']}</p>
                            </div>
                            <Button
                              href={`/blog/${post['slug']}.html`}
                              className='bgRed white  poppin  normalCase font-semibold  min-h-7 w-auto text-center md:mr-5'
                            >
                              {post['_embedded']['wp:term'][0][0]['name']}
                            </Button>
                          </div>
                          <Typography
                            gutterBottom
                            variant='h5'
                            component='div'
                            className='w100  text-3xl'
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post['content']['rendered'],
                              }}
                            ></div>
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Box>
      </section>
      {/**Pagination */}
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
            <Link
              href={`/blog/${
                datafull[dataIndex - 1 >= 0 ? dataIndex - 1 : 0]['slug']
              }.html`}
              className='no-underline cursor-pointer flex  border rounded-lg justify-center items-center p-1 hover:bg-slate-950/5 '
            >
              <ChevronLeftIcon
                style={{ cursor: 'pointer' }}
                // onClick={() => goToPage((dataIndex - 1) % datafull.length)}
              />
              <p className='Poppins font-semibold no-underline'>Pre</p>
            </Link>

            <Link
              href={`/blog/${
                datafull[(dataIndex + 1) % datafull.length]['slug']
              }.html`}
              className='flex  border rounded-lg justify-center items-center p-1 hover:bg-slate-950/5'
            >
              <p className='Poppins font-semibold '>Next</p>
              <ChevronRightIcon
                // onClick={() => goToPage((dataIndex + 1) % datafull.length)}
                style={{ cursor: 'pointer' }}
              />
            </Link>
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
          Sign Up For a Free Consultation With Our Experts Today!
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

export async function getStaticPaths() {
  const res = await fetch(
    'https://mydryve.co/InfoDriveBlog/wp-json/wp/v2/posts?_embed'
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const { slug } = context.params;
  // console.log('here',context.params);
  // Fetch data from external API
  const res = await fetch(
    `https://mydryve.co/InfoDriveBlog/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
  );
  const res1 = await fetch(
    `https://mydryve.co/InfoDriveBlog/wp-json/wp/v2/posts?_embed`
  );
  const data = await res.json();
  const datafull = await res1.json();

  // Pass data to the page via props
  return { props: { data, datafull } };
}
