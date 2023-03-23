import { useRouter } from 'next/router'
import Head from 'next/head';
import React, { useState } from 'react'
import Header from 'components/header';
import Footer from 'components/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Post = () => {
  const router = useRouter()
  //same name as name of your file, can be [slug].js; [specialId].js - any name you want
  const str = String(router.query.slug).slice(0, -5);

//   const slugString = str.slice(0, -5);
  //result will be '55' (string)
  //console.log(str.length);
  const [isData, setData] = useState('');
  axios.get(`https://mydryve.co/InfoDriveBlog/wp-json/wp/v2/posts?_embed&slug=${str}`)
      .then(res => {
        const data = res.data;
        setData(data);
      })
      .catch(error => console.log(error));
  return (
    <>
       <Header />
             <section className={`sectionBox whyUsBox salesForceServices2 blog news`}>
             <Box sx={{ flexGrow: 1 }}>
                {isData && isData.map((post,index) =>{
                    var today = new Date(post['date']).toLocaleDateString();
                    return(
                        <div>
                             <section className={`sectionBox pt10 pb20 textAlignCenter blog`}>
                            
                                <Typography gutterBottom variant='h1' component='h2' className='w100 pl10'>
                                {post['title']['rendered']}
                                
                                {(() => {
                                    if ((typeof post['_embedded']['wp:featuredmedia'] == 'undefined') && (post['_embedded']['wp:featuredmedia'] != '')) {
                                        return (
                                        //console.log("out____",post['_embedded'])
                                        <div></div>
                                        )
                                    } else {
                                        return (
                                        <div>{/* <img
                                        style={{ width: '100%' }}
                                        src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                                        /> */} </div>
                                        )
                                    }
                                })()}
                                
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
    </>
  )
}

export default Post