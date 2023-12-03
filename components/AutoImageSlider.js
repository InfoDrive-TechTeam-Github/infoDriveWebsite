import React from "react";
import HomeCard from "./HomeCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Head from "next/head";
import Navbar from "./navbar";
import utilStyles from "../styles/utils.module.css";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const imagesData = [
  {
    url: "/1.png",
  },
  {
    url: "./images/odoop.jpg",
  },
  {
    url: "/5.png",
  },
];

function AutoImageSlider() {
  return (
    <div className="Home ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
      >
        {imagesData.map((item) => (
          //   <img src={item.url} />
          <div className="sliderBox ">
            <img
              style={{ width: "100%" }}
              src={item.url}
              className=" h-[225px] md:h-full md:object-cover pt-3"
            />
            <Box sx={{ flexGrow: 1 }} className="sliderContent">
              <Grid container spacing={0}>
                <Typography
                  gutterBottom
                  variant="h1"
                  component="div"
                  className="mb-24 md:mb-0"
                ></Typography>
                <Button
                  href="/contact-us.html"
                  className="letsTalkmin  normalCase bg-white text-black hover:bg-pink-600 hover:text-white "
                  variant="text"
                >
                  Let's Talk <ArrowRightAltIcon />
                </Button>
                <nav className="socical-network">
                  <List>
                    <ListItem>
                      <ListItemButton
                        component="a"
                        href="https://www.facebook.com/InfoDrivesolutions/"
                      >
                        <ListItemIcon>
                          <FacebookIcon
                            className="smallIcon"
                            sx={{ fontSize: 35 }}
                          />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component="a"
                        href="https://in.linkedin.com/company/infodrive-solutions/"
                      >
                        <ListItemIcon>
                          <LinkedInIcon
                            className="smallIcon"
                            sx={{ fontSize: 35 }}
                          />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        component="a"
                        href="https://www.instagram.com/infodrivesolutions/"
                      >
                        <ListItemIcon>
                          <InstagramIcon
                            className="smallIcon"
                            sx={{ fontSize: 35 }}
                          />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
            </Box>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AutoImageSlider;
