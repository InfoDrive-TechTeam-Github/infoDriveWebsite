import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import FeatureCard from "../components/featureCard";
import LeadForm from "../components/leadForm";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import EventsForm from "../components/eventsForm";
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

export default function EventsComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="InfoDrive Solutions is a leading IT solution provider, and we are helping many start-ups and small-medium businesses to build products from scratch. We analyse your start-up model in its entirety, consult and offer the right technology solutions."
        />
        <meta
          name="keywords"
          content="InfoDrive Solutions Company, IT Solutions Company in Singapore, IT Solutions Company in Malaysia, IT Solutions Company in India, IT Solutions Company in Kuala Lumpur"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/events.html"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <ScheduleCallButton text="Schedule a Call" onClick={handleOpen} />
<CallScheduleModal open={open} handleClose={handleClose} setOpen={setOpen} />

      <EventsForm />

      <div className="mt-10">
        <h4 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Let's Meet & Greet Each Other
        </h4>
        <h2 className="text-center font-bold dark:text-white text-3xl" >
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-800 from-rose-700">
            With Our Amazing Team
          </span>
        </h2>
      </div>

      <section className={`sectionBox ourCoreTeam ourCoreTeamOther pt0`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={3}
              className="rightOurCoreTeam"
              style={{ padding: "30px" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  className="h-[260px] boxshadow rounded-lg"
                  image="images/team-photos/pradeep.png"
                  alt="We are helping many start-ups"
                />
                <CardContent>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    <span>Pradeep Chand</span>
                    <a
                      className="red"
                      target="_blank"
                      href="https://www.linkedin.com/in/pradeepchand1/"
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Group CEO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={3}
              className="rightOurCoreTeam"
              style={{ padding: "30px" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  className="h-[260px] boxshadow rounded-lg"
                  image="images/team-photos/kapil.png"
                  alt="InfoDrive Solutions is a leading IT solution provider"
                />
                <CardContent>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    <span>Kapil Gairola</span>
                    <a
                      className="red"
                      target="_blank"
                      href="https://www.linkedin.com/in/kapilgairola/"
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    CEO Malaysia
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={3}
              className="rightOurCoreTeam"
              style={{ padding: "30px" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  className="h-[260px] boxshadow rounded-lg"
                  image="images/team-photos/Sudhir-2.JPG"
                  alt="IT Solutions Company in  India"
                />
                <CardContent>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    <span>Sudhir Budakoti</span>
                    <a
                      className="red"
                      target="_blank"
                      href="https://www.linkedin.com/in/sudhirbudakoti/"
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    CEO India
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={3}
              className="rightOurCoreTeam"
              style={{ padding: "30px" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  className="h-[260px] boxshadow rounded-lg"
                  image="images/team-photos/shashank.png"
                  alt="IT Solutions Company in Singapore"
                />
                <CardContent>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    <span>Shashank Jain</span>
                    <a
                      target="_blank"
                      className="red"
                      href="https://www.linkedin.com/in/shashank-jain-%E2%98%81-00913550/"
                    >
                      <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography
                    className="widthInitial"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    VP | Europe & North America
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      {/* Why Should You Join Us At The Event? */}

      <h2 className="-mt-10 text-center text-2xl font-extrabold text-gray-900 dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-800 from-rose-700">
          Why Should You
        </span>{" "}
        Join Us{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-800 from-rose-700">
          At The Event?
        </span>{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-10 pt-10">
        <FeatureCard
          icon={
            <img
              src="./conversation-2-1.png"
              alt="Icon"
              className="h-10 w-10"
            />
          }
          title="Meet New People"
          description="Get to know people with new and trailblazing ideas, Founders, Entrepreneurs, Investors, etc."
        />

        <FeatureCard
          icon={<img src="./learning-1.png" alt="Icon" className="h-10 w-10" />}
          title="Learn & Nurture"
          description="Learn from industry-leading experts, keynote speakers and fantastic business tycoons."
        />

        <FeatureCard
          icon={<img src="./internet-1.png" alt="Icon" className="h-10 w-10" />}
          title="Build Network"
          description="Connect with your business peers, community leaders, MVPs, and Salesforce employees to create a long-lasting relationship with all."
        />

        <FeatureCard
          icon={<img src="./confetti-1.png" alt="Icon" className="h-10 w-10" />}
          title="Have Fun"
          description="Spend time with like-minded individuals and enjoy the party, food, and entertainment."
        />
      </div>
      <LeadForm />
      <Footer />
    </div>
  );
}
