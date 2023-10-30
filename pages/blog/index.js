import React, { useEffect, useState } from "react";
import Header from "components/header";
import Footer from "components/footer";
import Box from "@mui/material/Box";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Head from "next/head";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import LeadForm from "components/leadForm";
import { green, pink } from "@mui/material/colors";
import dateFormat, { masks } from "dateformat";
export default function SalesForceDevelopment({ data }) {
  console.log("data0000__", data);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [active, setActive] = useState("All Category");
  const [filterData, setFilterData] = useState(data);

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const goToPage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber > 0) {
      setPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };
  // creating unique Category names

  // const uniqueCategory = Array.from(
  //   new Set(data.map((post) => post['_embedded']['wp:term'][0][0]['name']))
  // );
  // console.log('uniqueCategory: ' + uniqueCategory);

  const uniqueCategory = [
    "Web and APP Development",
    "IT Solutions",
    "Salesforce",
    "App Development",
    "CRM",
    "SAP Emarys",
    "Staff Augmentation",
    "Business",
    "Digital Marketing",
    "Blockchain",
  ];

  // Handle Category button
  const handleButtonClick = (category) => {
    setActive(category);
    setPage(1);
    if (category == "All Category") {
      setFilterData(data);
    } else {
      const filtered = data.filter(
        (post) => post["_embedded"]["wp:term"][0][0]["name"] === category
      );
      setFilterData(filtered);
    }
  };

  // console.log('active', active);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Header />
      <section className={` textAlignCenter blog upperCase mt-10 Poppins `}>
        <div className="container mx-auto  bg-white p-5 Poppins rounded-lg shadow-sm max-w-6xl">
          <h1 className="w100 font-extrabold text-4xl text-blue-950 Poppins ">
            All Posts
          </h1>

          {/**  category menu */}

          <div className="category flex flex-wrap  md:gap-2 gap-5 mt-5  mx-auto md:pl-14 ">
            <div
              className={`button poppin hover:bg-[#f50057]  md:h-fit w-fit p-2  poppin min-w-[150px] text-center border cursor-pointer transition-all ease-out  hover:text-white hover:border-white rounded-lg  ${
                active === "All Category"
                  ? "bg-[#f50057] text-white border-white"
                  : "text-gray-500 border-gray-500"
              }`}
              onClick={() => handleButtonClick("All Category")}
            >
              All Category
            </div>
            {uniqueCategory.map((post, index) => (
              <div
                className={`button poppin hover:bg-[#f50057] md:h-10 h-fit w-fit p-2  poppin min-w-[150px] cursor-pointer text-center border transition-all ease-out  hover:text-white hover:border-white rounded-lg ${
                  active === post
                    ? "bg-[#f50057] text-white border-white"
                    : "text-gray-500 border-gray-500"
                }`}
                onClick={() => handleButtonClick(post)}
              >
                {post}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/** blog section */}
      <section className={`sectionBox whyUsBox salesForceServices2 blog news `}>
        <Box sx={{ flexGrow: 1 }}>
          {filterData.slice(startIndex, endIndex).map((post, index) => {
            return (
              <div>
                {(() => {
                  if (
                    typeof post["_embedded"]["wp:featuredmedia"] ==
                      "undefined" &&
                    post["_embedded"]["wp:featuredmedia"] != ""
                  ) {
                    return <div></div>;
                  } else {
                    return <div></div>;
                  }
                })()}
                {/** blog left  section */}
                <Grid container spacing={0} className="mb30 items-center">
                  <Grid item xs={6} className="mb1">
                    <Card>
                      <CardContent>
                        <div className="flex items-center object-cover h-full">
                          <a
                            href={`/blog/${post["slug"]}.html`}
                            className="h-full"
                          >
                            <img
                              className="h-full rounded-xl"
                              style={{ width: "100%" }}
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
                              alt="infodrive blog post"
                            />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  {/** blog right  section */}
                  <Grid item xs={6}>
                    <div className="imgHeader flex  flex-wrap grid-col-1 items-baseline  justify-between md:pl-[30px] py-3 ">
                      <div className="text-gray-400 flex gap-2 ">
                        {/* <Avatar src="/broken-image.jpg" className="h-6 w-6" /> */}
                        {/* <p>{post["_embedded"]["author"][0]["name"]}</p> */}
                        <div className="rounded-full w-8 h-8 overflow-hidden border">
                          <img
                            src="images/team-photos/kapil.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p>Kapil Gairola</p>
                      </div>
                      <Button
                        href={`/blog/${post["slug"]}.html`}
                        className="bgRed white  poppin md:ml-[30px] normalCase   min-h-7 w-auto text-center"
                      >
                        {post["_embedded"]["wp:term"][0][0]["name"]}
                      </Button>
                    </div>
                    <Card>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h3"
                          component="h2"
                          className="w100 md:pl-[30px] "
                        >
                          <div>
                            <a href={`/blog/${post["slug"]}.html`}>
                              <h3>
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
                                  .replace(/&#8221;/g, '"').replace(/&#038;/g, "")}
                              </h3>
                            </a>
                          </div>
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="w100 md:pl-[30px] text-start"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post["excerpt"]["rendered"],
                            }}
                          ></div>
                        </Typography>
                        {/* puslish date and remore*/}
                        <div className="flex ">
                          <h3 className="pr15 poppin md:ml-[30px] font-semibold">
                            Publish Date: {dateFormat(post["date"], "fullDate")}
                          </h3>
                          {/* <Button
                            href={`/blog/${post['slug']}.html`}
                            className='pl15 pr15 poppin  normalCase shadow-md text-gray-600 ml-20 bg-slate-950/5 rounded-lg mb-10 font-medium'
                          >
                            Read more
                          </Button>*/}
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

      {/**pagination */}
      <section className="pagination">
        <CssBaseline />
        <Container
          maxWidth="sm"
          component={"Box"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <ChevronLeftIcon
              style={{ cursor: "pointer" }}
              onClick={() => goToPage(page - 1)}
            />
            <Avatar sx={{ bgcolor: pink[500] }}>{page}</Avatar>
            <ChevronRightIcon
              onClick={() => goToPage(page + 1)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Container>
      </section>

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Transforming Your Website Into a Search Egine Powerhouse
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

export async function getStaticProps() {
  const res = await fetch(
    `https://mydryve.co/InfoDriveblog_Setup/wp-json/wp/v2/posts?_embed&per_page=100`
  );
  const data = await res.json();
  console.log("API blog", data);
  return { props: { data } };
}

// server side rendering
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://mydryve.co/InfoDriveBlog/wp-json/wp/v2/posts?_embed`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
