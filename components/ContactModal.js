import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReCAPTCHA from "react-google-recaptcha";

import CardMedia from "@mui/material/CardMedia";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ToastContainer, toast } from "react-toastify";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import axios from "axios";
const style = {
  position: "absolute",
  top: "56%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  width: "60vw",
  bgcolor: "#f3f4f6",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
  borderRadius: "10px",
  fontFamily: "Poppins",
};

function ContactModal({ open, handleClose, setOpen }) {
  const [isLoading, setLoading] = React.useState(false);

  const [inputData, setInputData] = React.useState({
    full_name: "",
    email_address: "",
    contact_number: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    // setInputData({ ...inputData, [e.target.name]: e.target.value });
    setInputData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("value", inputData);

    try {
      const res = await axios.post(
        "https://mydryve.co/Api/sendMail",
        inputData
      );
      console.log(res.data.message);
      if (res.data.message) {
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warning("Please Try Again", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error, "error");
    }

    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-between ">
            <div className="left space-y-5 p-4 w-1/2">
              <h2 className="font-bold text-2xl text-gray-500">
                Speak To Sales
              </h2>
              <div>
                <List>
                  <ListItem className="ce -ml-3">
                    <CardMedia
                      component="img"
                      style={{ width: "30px", height: "30px" }}
                      image="images/singapore.png"
                      alt="green iguana"
                    />
                    <ListItemButton
                      component="a"
                      href="tel:+6592384299"
                      style={{
                        color: "black",
                        display: "inline-block",
                        flexGrow: 0,
                        paddingRight: 0,
                      }}
                    >
                      <ListItemText className="pl5" primary="+65-9238 4299" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="ce -ml-3">
                    <CardMedia
                      component="img"
                      image="images/malaysia.png"
                      style={{ width: "30px", height: "30px" }}
                      alt="green iguana"
                    />
                    <ListItemButton
                      component="a"
                      href="tel:+60123275811"
                      style={{
                        color: "#000",

                        display: "inline-block",
                        flexGrow: 0,
                        paddingRight: 0,
                      }}
                    >
                      <ListItemText className="pl5" primary="+60-1 2327 5811" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="ce -ml-3">
                    <CardMedia
                      component="img"
                      image="images/india.png"
                      alt="green iguana"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <ListItemButton
                      component="a"
                      href="tel:+919606188081"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        display: "inline-block",
                        flexGrow: 0,
                        paddingRight: 0,
                      }}
                    >
                      <ListItemText
                        style={{
                          fontWeight: "bold",
                        }}
                        className="pl5"
                        primary="+91-960 61880 81"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="footerEmail -ml-3">
                    <EmailIcon />
                    <ListItemButton
                      component="a"
                      href="mailto:contact@infodrive-solutions.com"
                    >
                      <ListItemText
                        className=" whitespace-nowrap"
                        primary="contact@infodrive-solutions.com"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      target="_blank"
                      component="a"
                      style={{
                        color: "#000",
                        display: "inline-block",
                        flexGrow: 0,
                      }}
                      href="https://www.instagram.com/infodrivesolutions/"
                    >
                      <InstagramIcon />
                    </ListItemButton>
                    <ListItemButton
                      target="_blank"
                      component="a"
                      style={{
                        color: "#000",
                        display: "inline-block",
                        flexGrow: 0,
                      }}
                      href="https://www.facebook.com/InfoDrivesolutions/"
                    >
                      <FacebookIcon />
                    </ListItemButton>
                    <ListItemButton
                      target="_blank"
                      component="a"
                      style={{
                        color: "#000",
                        display: "inline-block",
                        flexGrow: 0,
                      }}
                      href="https://in.linkedin.com/company/infodrive-solutions/"
                    >
                      <LinkedInIcon />
                    </ListItemButton>
                    <ListItemButton
                      target="_blank"
                      component="a"
                      style={{
                        color: "#000",
                        display: "inline-block",
                        flexGrow: 0,
                      }}
                      href="https://www.youtube.com/@infodrivesolutions9178"
                    >
                      <YouTubeIcon />
                    </ListItemButton>
                    <ListItemButton
                      target="_blank"
                      component="a"
                      style={{
                        color: "#000",
                        display: "inline-block",
                        flexGrow: 0,
                      }}
                      href="https://twitter.com/infodrives"
                    >
                      <TwitterIcon />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="right shadow-md p-4 pl-8 rounded-md bg-white space-y-3 w-1/2">
              <h2 className="font-bold text-2xl text-gray-500">
                Request a call back
              </h2>
              <input
                placeholder="full name"
                className="border border-gray-300 rounded-md p-2"
                name="full_name"
                onChange={handleChange}
              />
              <input
                placeholder="Email Address"
                className="border border-gray-300 rounded-md p-2"
                name="email_address"
                onChange={handleChange}
              />
              <input
                placeholder="Contact Number"
                className="border border-gray-300 rounded-md p-2"
                name="contact_number"
                onChange={handleChange}
              />
              <textarea
                placeholder="message"
                className="border border-gray-300 rounded-md p-2"
                name="message"
                cols={25}
                onChange={handleChange}
              />
              {/* <ReCAPTCHA
    sitekey="6LcqzWEpAAAAALwrGPJ7XPd3Z9sMfIGci_V-SfOM"
    onChange={onChange}
  /> */}
              <button
                className="p-2 text-white shadow-md bg-red-600 rounded-md"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default ContactModal;
