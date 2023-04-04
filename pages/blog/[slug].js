import Head from 'next/head';
import React, { useState } from 'react';
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
export default function SalesForceDevelopment({ data }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const goToPage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber > 0) {
      setPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <Head></Head>
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
                      className='w-fit pl10 border rounded-2xl flex items-center justify-center p-5  hover:bg-[#0047AB] hover:text-white transition-all ease-in '
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
                              className='h-full rounded-xl w-[34rem]'
                              src={
                                post['_embedded']['wp:featuredmedia'][0][
                                  'source_url'
                                ]
                              }
                            />
                            {/**Image below section Category and User,Avtar */}
                            <div className='flex justify-between items-baseline py-3 '>
                              <div className='text-gray-400 flex gap-2'>
                                <Avatar
                                  src='/broken-image.jpg'
                                  className='h-6 w-6'
                                />
                                <p>{post['_embedded']['author'][0]['name']}</p>
                              </div>
                              <Button
                                href={`/blog/${post['slug']}.html`}
                                className='bgRed white  poppin ml30 normalCase   min-h-7 w-auto text-center'
                              >
                                {post['_embedded']['wp:term'][0][0]['name']}
                              </Button>
                            </div>
                          </div>
                        </div>
                        {/**content */}
                        <div className='Content'>
                          <Typography
                            gutterBottom
                            variant='h5'
                            component='div'
                            className='w100 pl30 text-3xl'
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
          Sign Up For a Free Consultation With Our Experts Today.
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
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
