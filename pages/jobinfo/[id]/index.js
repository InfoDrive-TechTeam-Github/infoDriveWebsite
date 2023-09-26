// pages/jobinfo/[id].js
import * as React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "components/header";
import Footer from "components/footer";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

import TextField from "@mui/material/TextField";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { compareAsc, format } from "date-fns";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import parse from "html-react-parser";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeadForm from "components/leadForm";
//import { jobService } from '../services';
import UploadIcon from "@mui/icons-material/Upload";
import { green, pink } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";
// import { getJobById } from "../../utils/api";

const JobInfoPage = ({}) => {
  const [jobs, setJobInfo] = useState();
  const router = useRouter();
  const [activeButtonColor, setactiveButtonColor] = useState(null);
  const [activeApplyButton, setActiveApply] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [applyJob, setApplyJob] = React.useState(false);
  const [valuePhone, setValuePhone] = useState();
  const [jdHeight, setJdHeifht] = useState(false);
  const [Resume, setResume] = useState("");
  const [info, setInfo] = useState("");
  console.log("info", info);
  const [applyValues, setApplyValues] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    AvailableFrom: "",
    Skills: "",
  });

  // show div functionality
  const [showDiv, setShowDiv] = useState(false);
  const { id } = router.query;
  useEffect(() => {
    function checkSize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }

    checkSize();

    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const handleClickApplyOpen = (data) => {
    console.log("dataJob", data);
    setJobDetail(data);
    setApplyJob(true);
  };
  const handleClickShowMore = (data) => {
    setJobDetail(data);
    setJdHeifht((current) => !current);
  };
  console.log("jdHeight", jdHeight);

  const handleApplyClose = () => {
    setApplyJob(false);
  };
  const handleChange = (e) => {
    setApplyValues({
      ...applyValues,
      [e.target.name]: e.target.value,
    });
  };
  //var jbId = jobDetail.Id;

  const onSubmitHandler = () => {
    let jbId = [jobDetail.Id];

    axios
      .post("https://mydryve.co/Api/addCandidate", {
        OwnerId: jobDetail.OwnerId,
        FirstName: applyValues.FirstName,
        LastName: applyValues.LastName,
        Email: applyValues.Email,
        Phone: valuePhone,
        City: "dummy",
        Locality: "dummy",
        FullAddress: "dummy",
        WillingToRelocate: "0",
        Qualification: "dummy",
        Specialization: "dummy",
        CurrentOrganization: "dummy",
        Title: "dummy",
        TotalExperience: "dummy",
        RelevantExperience: "dummy",
        SalaryType: "dummy",
        CurrentSalary: "dummy",
        SalaryExpectation: "dummy",
        Billing_rate: "dummy",
        CurrentEmploymentStatus: "dummy",
        NoticePeriod: applyValues.AvailableFrom,
        AvailableFrom: applyValues.AvailableFrom,
        Nationality: "dummy",
        WorkVisa: "dummy",
        Skills: applyValues.Skills,
        LanguageSkills: "dummy",
        ProficiencyLevel: "dummy",
        FacebookURL: "dummy",
        TwitterURL: "dummy",
        LinkedInURL: "dummy",
        GitHubURL: "dummy",
        Source: "dummy",
        Resume,
      })
      .then(function (response) {
        console.log("responseSubmit", response);
        if (response.data.status == true) {
          setApplyJob(false);
          // assign job to Candidate
          const candidateId = response.data.payload.candidateId;
          axios
            .post("https://mydryve.co/Api/assignJobToCandidate", {
              JobId: jbId,
              candidateId: candidateId,
              OwnrId: jobDetail.OwnerId,
            })
            .then(function (response) {
              //const getData = response.data.payload.payload
              console.log("assignJob___", response);
              // email send code here
              //https://infodrive.orbiloggiin.com/SendEmailCandidate
              const inputData = {
                JobId: applyValues.Id,
                CandiateName:
                  applyValues.FirstName + "/" + applyValues.LastName,
                Skills: applyJob.Skills,
                NoticePeriod: applyValues.AvailableFrom,
                candidateCv: "",
              };
              toast.success("You have Sucessfully applied for Job", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              try {
                const res = axios.post(
                  "https://infodrive.orbiloggiin.com/SendEmailCandidate",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputData),
                  }
                );

                const { error } = res.json();

                if (error) {
                  console.log("error_email", error);
                  // toast.warning("Please Try Again", {
                  //         position: 'top-right',
                  //         autoClose: 2000,
                  //         hideProgressBar: false,
                  //         closeOnClick: true,
                  //         pauseOnHover: true,
                  //         draggable: true,
                  //         progress: undefined,
                  // });
                } else {
                  console.log("Email Sent");
                  // toast.success("Thank you for your message. We will Response in 2 business days", {
                  //   position: 'top-right',
                  //   autoClose: 2000,
                  //   hideProgressBar: false,
                  //   closeOnClick: true,
                  //   pauseOnHover: true,
                  //   draggable: true,
                  //   progress: undefined,
                  // });
                }
              } catch (error) {
                console.log("error_email222", error);
                // toast.error("Something went wrong", {
                //   position: 'top-right',
                //   autoClose: 2000,
                //   hideProgressBar: false,
                //   closeOnClick: true,
                //   pauseOnHover: true,
                //   draggable: true,
                //   progress: undefined,
                // });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //file upload code start
  let resume = "";
  const fileUpload = (e) => {
    const fl = e.target.files[0];
    // console.log('Uploading file', fl.name);
    //getupfile(`${url}/uploads/Candidate/Resume/` + fl.name);
    const formData = new FormData();
    formData.append("file", fl);
    console.log("formData_____", formData.file);
    if (formData !== "") {
      axios
        .post(`https://mydryve.co/Api/candidateApplicationResume`, formData)
        .then((res) => {
          console.log("file____chk__", res);
          // const name = res?.data?.name.split(' ');
          // const firstName = name[0];
          // const lastName = name[name.length - 1];
          const msg = res.data.payload;
          resume = `https://mydryve.co/Api/uploads/Candidate/Resume/` + msg;
          setResume(resume);
        })
        .catch((err) => {
          console.log("There was an error!", err?.response);
          toast.error("Something went wrong!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } else {
      toast.error("Invalid Input", {
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    // Fetch job information based on the job ID using useEffect
    const fetchData = async () => {
      axios
        .post("https://mydryve.co/Api/getJobById", { id })
        .then((response) => {
          // Store the job information in the state variable
          setJobInfo(response.data.payload.payload);
        })
        .catch((error) => console.log(`Error: ${error}`));
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>
          Join our team at Infodrive Solutions -
          {jobs ? jobs[0].JobTitle : "Jobs at Infodrive"}
        </title>
        <meta
          name="description"
          content={
            "Discover exciting career opportunities at Infodrive Solutions, a leading software development company. Apply now and join our team of talented professionals in delivering innovative solutions to our clients. Explore our current job openings and take the first step towards a rewarding career."
          }
        />
        <link
          rel="canonical"
          href={`https://infodrive-solutions.com/jobinfo/${id}.html`}
        />
        <meta
          property="og:title"
          content=" Join our team at Infodrive Solutions - Exciting Career Opportunities
          Available"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <meta
        property="og:image"
        content="https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"
      />
      <link
        rel="icon"
        href="https://cdn.discordapp.com/attachments/949683263386054716/1076906969983614986/favicon.png"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-MB38MVS'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MB38MVS');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <Header /> */}

      {/**Jobs Card Start from here */}
      {jobs && (
        <Container
          maxWidth="xl"
          className="flex gap-3 items-center mb-10 mx-auto mt-10 "
        >
          {/* Start of main div*/}

          <div className="JOB CARD bg-white border-2 rounded-2xl p-10 shadow-md sectionBox   transition-all ease-in-out w-full ">
            <div className="flex justify-between  w-full ">
              <Typography
                gutterBottom
                variant="h2"
                className="pt0 cursor-pointer"
                component="div"
                onClick={() => handleJobClick(job.Id)}
              >
                {jobs[0].JobTitle}
              </Typography>
              <div className="CreatedBox flex gap-1 text-[#dd3952]">
                <CalendarMonthIcon />
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  className=""
                >
                  Created at:{" "}
                  {format(new Date(jobs[0].created_at), "dd-MM-yyyy")}
                </Typography>
              </div>
            </div>

            {/*<JobDescription job={job} />*/}

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={`w100`}
              //   sx={{ height: "125px", overflow: "hidden" }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: jobs[0].Jobdescription,
                }}
                className="Poppins"
              />
            </Typography>
            {/*show location */}

            <Box className="mt30 ">
              <Box className="careerbox gap-1">
                <LocationOnIcon className="h-[2rem] w-[2rem] " />
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  className="mlb pt5"
                >
                  {jobs[0].Locality}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center text-slate-500",
                  gap: "4px",
                }}
              >
                <div className="Currency border-2 border-black p-3 rounded-full h-[2rem] w-[2rem] flex justify-center items-center">
                  <p className="Poppins font-semibold">{jobs[0].Currency}</p>
                </div>

                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  className="mlb pt5"
                >
                  {jobs[0].MinSalary + " - " + jobs[0].MaxSalary}
                </Typography>
              </Box>
            </Box>
            <div className="flex items-center justify-between">
              <button
                className={`mt30 Poppins  rounded-md p-2  shadow-md  hover:text-[#dd3952] hover:bg-white transition-all ease-in-out font-semibold uppercase
                ${
                  activeApplyButton
                    ? "bg-white text-[#dd3952]"
                    : "bg-[#dd3952] text-white"
                }`}
                onClick={() => handleClickApplyOpen(job)}
              >
                Apply now
              </button>
            </div>
          </div>
          {/* End of main div*/}
        </Container>
      )}

      <section className={`sectionBox connectUs backDrop mb0`}>
        <Typography
          gutterBottom
          variant="h3"
          className="white pb15 pt15 poppin"
          component="div"
        >
          Empower Your Career Growth with InfoDrive Solutions
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
      <Dialog
        open={applyJob}
        className="career-dialog"
        onClose={handleApplyClose}
      >
        <DialogTitle>Apply Job: {jobDetail?.JobTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              dangerouslySetInnerHTML={{ __html: jobDetail?.Jobdescription }}
            />
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
                name="FirstName"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
                name="LastName"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                name="Email"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              fullWidth
              name="Phone"
              variant="standard"
              onChange={handleChange}
            /> */}
              <PhoneInput
                placeholder="Enter phone number"
                value={valuePhone}
                defaultCountry="SG"
                onChange={setValuePhone}
                //onChange={setValue}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="AvailableFrom"
                label="Available From"
                type="date"
                defaultValue="05-24-2022"
                fullWidth
                name="AvailableFrom"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Skills</label>
              <input
                className="w100 job-skills"
                onChange={handleChange}
                placeholder="Please add comma after each skill"
              />
              {/* <TextField
              autoFocus
              margin="dense"
              id="skills"
              label="Skills"
              type="text"
              fullWidth
              name="Skills"
              variant="standard"
              onChange={handleChange}
            /> */}
            </Grid>
            <Grid item xs={12}>
              <label
                className="w100"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                }}
              >
                Upload Your CV File
              </label>
              <input className="" type="file" onChange={fileUpload} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApplyClose}>Cancel</Button>
          <Button onClick={onSubmitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={jdHeight}
        className="career-dialog"
        onClose={handleApplyClose}
      >
        <DialogTitle>Job: {jobDetail?.JobTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              dangerouslySetInnerHTML={{ __html: jobDetail?.Jobdescription }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions className="px-10">
          <Button onClick={handleClickShowMore}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// export async function getStaticPaths() {
//   // Fetch all job IDs during build time
//   // Adjust this to fetch the actual job IDs
//   const jobIds = [1, 2, 3];  // Example job IDs

//   const paths = jobIds.map(id => ({
//     params: { id: id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;

//   // Fetch job information based on the job ID
//   const response = await getJobById(id);

//   return {
//     props: {
//       initialJobInfo: response.data.payload.payload["0"],
//     },
//   };
// }

export default JobInfoPage;
