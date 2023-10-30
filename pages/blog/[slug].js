import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "components/header";
import Footer from "components/footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Button from "@mui/material/Button";
import LeadForm from "../../components/leadForm";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import { green, pink } from "@mui/material/colors";
import Link from "next/link";
import Crousel from "components/Crousel";
import CardBlog from "components/blogCard";

export default function SalesForceDevelopment({ data, datafull }) {
  const [dataIndex, setDataIndex] = useState(0);
  console.log("dataIndex", dataIndex);
  const { _embedded } = datafull;
  console.log("media", _embedded);
  const itemsPerPage = 1;
  console.log("datafull", datafull);
  console.log("data", data);
  // subdata
  const subset = datafull.slice(dataIndex + 1);
  console.log("subset", subset);

  const totalPages = datafull.length;

  useEffect(() => {
    const index = datafull.findIndex((item) => item.id === data[0].id);
    console.log("dataIndex", index);
    setDataIndex(index);
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <section
        className={`sectionBox whyUsBox salesForceServices2 blog news my-[50px] `}
      >
        <Box>
          {data.map((post, index) => {
            var today = new Date(post["date"]).toLocaleDateString();
            return (
              <div>
                <section
                  className={`sectionBox pt10 pb10 textAlignCenter blog bg-white`}
                >
                  {/**TITLE */}
                  <div className="flex justify-center">
                    <Typography
                      gutterBottom
                      variant="h1"
                      component="h2"
                      className="w-fit pl10 border rounded-2xl flex items-center justify-center p-5  hover:bg-[#f50057] hover:text-white transition-all ease-in "
                    >
                      {post["title"]["rendered"]
                        .replace(/&#8217;/g, "'")
                        .replace(/&#8211;/g, "-")
                        .replace(/&amp;/g, "&")
                        .replace(/&nbsp;/g, " ")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "'")
                        .replace(/&ldquo;/g, '"')
                        .replace(/&#8220;/g, '"')
                        .replace(/&#8221;/g, '"')
                        .replace(/&#038;/g, "")}
                    </Typography>
                  </div>

                  <br />
                </section>
                <Grid container spacing={0}>
                  <Grid item xs={12} className="mb1 blg">
                    <Card>
                      <CardContent>
                        <div className="flex justify-center items-center py-3 ">
                          <div className=" w-[34rem]">
                            {/**Image Div */}
                            <img
                              className="h-full rounded-xl w-fit"
                              src={
                                post &&
                                post["_embedded"] &&
                                post["_embedded"]["wp:featuredmedia"] &&
                                post["_embedded"]["wp:featuredmedia"][0]
                                  ? post["_embedded"]["wp:featuredmedia"][0][
                                      "source_url"
                                    ]
                                  : null
                              }
                            />
                          </div>
                        </div>
                        {/**content */}
                        <div className="Content max-w-7xl md:px-10 mt-10">
                          {/**Image below section Category and User,Avtar */}
                          <div className="md:flex md:justify-between items-baseline whitespace-nowrap w-full">
                            <div className="text-gray-400 flex gap-2 ">
                              {/* <Avatar src="/broken-image.jpg" className="h-6 w-6" /> */}
                              {/* <p>{post["_embedded"]["author"][0]["name"]}</p> */}
                              <div className="rounded-full w-8 h-8 overflow-hidden border">
                                <img
                                  src="/images/team-photos/kapil.png"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p>Kapil Gairola</p>
                            </div>
                            <Button
                              href={`/blog/${post["slug"]}.html`}
                              className="bgRed white  poppin  normalCase font-semibold  min-h-7 w-auto text-center md:mr-5"
                            >
                              {post["_embedded"]["wp:term"][0][0]["name"]}
                            </Button>
                          </div>
                          {/**contenten inserted here */}
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="w100  text-3xl"
                          >
                            <div
                              className="prose prose-2xl prose-stone prose-a:text-blue-800 prose-h2:text-lg prose-li:text-sm  prose-p:text-[#4e4e50] prose-h2:text-pink-600 prose-h3:text-base prose-h4:text-base prose-h5:text-base prose-h6:text-base"
                              dangerouslySetInnerHTML={{
                                __html: post["content"]["rendered"],
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
        <section className="releatedPost mx-auto bg-white  text-black p-3">
          <h3 className="text-center font-extrabold md:text-4xl text-lg text-red-600">
            Read Related Articles
          </h3>
          <hr className="border-2 md:w-80 mx-auto mt-3 border-blue-900 rounded-md shadow-md w-1/2" />

          <div className="mt-20">
            <Crousel>
              {subset.map((data) => {
                const descWords = data["excerpt"]["rendered"].split(" ");
                const limitedDesc = descWords.slice(0, 15).join(" ");

                return (
                  <CardBlog
                    author="Kapil Gairola"
                    desc={limitedDesc}
                    created={data["date"]}
                    img={data["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                    slug={data.slug}
                    category={data["_embedded"]["wp:term"][0][0]["name"]}
                    title={data["title"]["rendered"]
                      .replace(/&#8217;/g, "'")
                      .replace(/&#8211;/g, "-")
                      .replace(/&amp;/g, "&")
                      .replace(/&nbsp;/g, " ")
                      .replace(/&lt;/g, "<")
                      .replace(/&gt;/g, ">")
                      .replace(/&quot;/g, '"')
                      .replace(/&#039;/g, "'")
                      .replace(/&ldquo;/g, '"')
                      .replace(/&#8220;/g, '"')
                      .replace(/&#8221;/g, '"')}
                  />
                );
              })}
            </Crousel>
          </div>
        </section>
      </section>
      {/**Pagination 
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
              className=' cursor-pointer flex  border rounded-lg justify-center items-center p-1 hover:bg-slate-950/5 '
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
*/}
      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Sign Up For a Free Consultation With Our Experts Today!
        </Typography>
        <Button
          href="/contact-us.html"
          className="bgRed white pl15 pr15 poppin upperCase"
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
    `https://mydryve.co/InfoDriveblog_Setup/wp-json/wp/v2/posts?_embed&per_page=100`,
    {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0,
      },
    }
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
    `https://mydryve.co/InfoDriveblog_Setup/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
  );
  const res1 = await fetch(
    `https://mydryve.co/InfoDriveblog_Setup/wp-json/wp/v2/posts?_embed`
  );
  const data = await res.json();
  const datafull = await res1.json();

  // Pass data to the page via props
  return { props: { data, datafull } };
}
