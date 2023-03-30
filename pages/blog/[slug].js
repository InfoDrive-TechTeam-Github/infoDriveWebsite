import Head from 'next/head';
import React from 'react';
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
export default function SalesForceDevelopment({ data }) {
  return (
    <div>
      <Head></Head>
      <Header />
      <section className={`sectionBox whyUsBox salesForceServices2 blog news`}>
        <Box sx={{ flexGrow: 1 }}>
          {data.map((post, index) => {
            var today = new Date(post['date']).toLocaleDateString();
            return (
              <div>
                <section
                  className={`sectionBox pt10 pb10 textAlignCenter blog`}
                >
                  <Typography
                    gutterBottom
                    variant='h1'
                    component='h2'
                    className='w100 pl10'
                  >
                    {post['title']['rendered']}

                   
                  </Typography>

                  <br />
                </section>
                <Grid container spacing={0}>
                  <Grid item xs={12} className='mb1'>
                    <Card>
                      <CardContent>
                      <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
                          <img
                            className='h-full rounded-xl'
                            style={{ width: '70%' }}
                            src={
                              post['_embedded']['wp:featuredmedia'][0][
                                'source_url'
                              ]
                            }
                          />
                        </div>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='div'
                          className='w100 pl30'
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post['content']['rendered'],
                            }}
                          ></div>
                        </Typography>
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
