import Head from 'next/head';
import React from 'react'
import Header from 'components/header';
import Footer from 'components/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SalesForceDevelopment({data}) {
  return (
    <div>
        <Head></Head>
        <Header />
             <section className={`sectionBox whyUsBox salesForceServices2 blog news`}>
             <Box sx={{ flexGrow: 1 }}>
                {data.map((post,index) =>{
                    var today = new Date(post['date']).toLocaleDateString();
                    return(
                        <div>
                             <section className={`sectionBox pt10 pb20 textAlignCenter blog`}>
                            
                                <Typography gutterBottom variant='h1' component='h2' className='w100 pl10'>
                                {post['title']['rendered']}
                                <img
                          style={{ width: '100%' }}
                          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                        />
                                </Typography>
                                <br/>
                            </section>
                            <Grid container spacing={0}>
                                <Grid item xs={12} className="mb1">
                                <Card> 
                                <CardContent>
                               
                                <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                                className='w100 pl30'
                            >
                                <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}></div>
                            </Typography>
                                </CardContent>
                                </Card>
                                </Grid>
                            </Grid>
                            {/* <img className='mb-5 rounded-2xl w-full object-cover' src={post['']}></img>
                            <h1 className='text-4xl mb-3 font-medium'>{post['title']['rendered']}</h1>
                            <div className='text-sm mb-10'>Published on : {today}</div>
                            <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}></div> */}
                        </div>
                    );
                })}
                </Box>
            </section>
        <Footer />
    </div>
    // <div className='max-w-6xl mx-auto py-20 px-4 md:px-8'>
    //   {data.map((post,index) =>{
    //     var today = new Date(post['date']).toLocaleDateString();
    //     return(
    //         <div>
    //             <img className='mb-5 rounded-2xl w-full object-cover' src={post['']}></img>
    //             <h1 className='text-4xl mb-3 font-medium'>{post['title']['rendered']}</h1>
    //             <div className='text-sm mb-10'>Published on : {today}</div>
    //             <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}></div>
    //         </div>
    //     );
    //   })}
    // </div>
  )
}
export async function getServerSideProps(context) {
    const { id } = context.params;
    // Fetch data from external API
    const res = await fetch(`https://mydryve.co/blog/wp-json/wp/v2/posts?_embed&slug=${id}`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}


