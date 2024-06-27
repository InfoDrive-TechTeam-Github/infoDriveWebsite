import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScheduleCallButton from "../components/callSchedule/ScheduleCallButton";
import CallScheduleModal from "../components/callSchedule/CallScheduleModal";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setLoading] = React.useState(false);
  const [inputData, setInputData] = React.useState({
    firstName: "",
    lastName: "",
    industry: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(inputData);
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://mydryve.co/Api/sendMail",
        inputData
      );
      console.log(res.data.message);
      if (res.data.message) {
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
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>
          Contact Us for Software Development & IT Services – InfoDrive
          Solutions
        </title>
        <meta
          name="description"
          content="Contact us today for software development and IT services. Our team of experts is ready to help you achieve your business goals and provide you with the best software solutions in the industry."
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/contact-us.html"
        />
        <meta
          property="og:title"
          content="Contact Us for Software Development & IT Services – InfoDrive Solutions"
        />
        <meta
          property="og:image"
          content="https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png"
        />
        <meta
          name="google-site-verification"
          content="JcRwQCIELBAZJX2iIdAkVHip-fPEjV_icDXuaLBIXfE"
        />
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PPS8R594');`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PPS8R594"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Header />
      <div className="fixed bottom-4 right-4 z-50">
        <ScheduleCallButton text="Schedule a Call" onClick={handleOpen} />
      </div>
      <CallScheduleModal
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      />

      <div
        className="relative w-full"
        style={{
          height: "40rem",
          backgroundImage: "url('/images/contactimg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black  to-transparent"></div>
        <div className="flex items-center h-full px-6 lg:px-8 relative z-10">
          <div className="w-full md:w-1/2 p-5">
            <div className="text-white text-center md:text-left">
              <h1 className="font-bold text-4xl">Contact Us</h1>
              <br />
              <p className="font-bold text-1.5xl">
                We're ready to turn your vision to value.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 flex flex-wrap">
        <div className="grid sm:grid-cols-2 gap-16 md:mt-5 p-8 mx-auto max-w-7xl px-6 lg:px-8 opacity-70 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333]">
          <div className="md:mt-6">
            <h1 className="text-base">SEND US A MESSAGE</h1>
            <div className="w-40">
              <hr className="border-red-500 h-1 mb-4" />
            </div>
            <p className="text-1xl md:text-3xl text-black font-bold mt-3">
              Please fill in the form and we will get back to you soon.
            </p>
            {/* <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    target="_blank"
                    href="mailto:contact@infodrive-solutions.com"
                    className="text-[#007bff] text-sm ml-3"
                  >
                    <small className="block">Mail</small>
                    <strong>contact@infodrive-solutions.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Socials</h2>
              <ul className="flex mt-3 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.facebook.com/InfoDrivesolutions/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.instagram.com/infodrivesolutions/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <form
            className="-mt-8 md:mt-0 space-y-4 w-auto border rounded-lg bg-white p-4"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={inputData.firstName}
                onChange={handleChange}
                className="w-full py-4 px-4 border text-base outline-[#007bff]"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={inputData.lastName}
                onChange={handleChange}
                className="w-full py-4 px-4 border text-base outline-[#007bff]"
                required
              />
            </div>
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={inputData.industry}
              onChange={handleChange}
              className="w-full py-4 px-4 border text-base outline-[#007bff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={inputData.email}
              onChange={handleChange}
              className="w-full py-4 px-4 border text-base outline-[#007bff"
              required
            />
            <textarea
              name="message"
              placeholder="Please send a message to get the conversation started"
              rows="4"
              value={inputData.message}
              onChange={handleChange}
              className="w-full py-4 px-4 border text-base outline-[#007bff]"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#ff0000] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      <section className="mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm md:text-xl font-semibold mb-2 text-gray-600">
              OUR GLOBAL OFFICES
            </h2>
            <div className="mx-auto w-36 md:w-52">
              <hr className="border-red-500 h-1 mb-4" />
            </div>
            <p className="text-1xl font-bold md:text-4xl mb-3">
              We bring global perspective to our local clients.
            </p>
            <span className="text-xs md:text-base">
              With our presence in Singapore, Malaysia, and India, we provide
              exceptional services to our global clients.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-3">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <img
                src="/singapore.jpg"
                alt="InfoDrive Solutions Pte Ltd"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  InfoDrive Solutions Pte Ltd
                </h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Address:</span> 135 MIDDLE RD,
                  #02-21 BYLANDS BLDG, SINGAPORE - 188975 <br />
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+6592384299" className="text-blue-500">
                    +65-9238 4299
                  </a>
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:contact@infodrive-solutions.com"
                    className="text-blue-500"
                  >
                    contact@infodrive-solutions.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <img
                src="/malaysia.jpg"
                alt="InfoDrive Solutions Sdn Bhd"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  InfoDrive Solutions Sdn Bhd
                </h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Address:</span> Lot 10-03A, 10th Floor, Tower 1,
                  Faber Towers, Jalan Desa Bahagia, Taman Desa,
                  Kuala Lumpur, Malaysia - 58100
                  <br />
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+60123275811" className="text-blue-500">
                    +60-1 2327 5811
                  </a>
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:contact@infodrive-solutions.com"
                    className="text-blue-500"
                  >
                    contact@infodrive-solutions.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <img
                src="/india.jpg"
                alt="InfoDriven Solutions Pvt Ltd"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  InfoDriven Solutions Pvt Ltd
                </h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Address:</span> #88, Borewell
                  Road, Opposite Whitefield Post Office, Whitefield, Bangalore -
                  560066 <br />
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+919606188081" className="text-blue-500">
                    +91-960 61880 81
                  </a>
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:contact@infodrive-solutions.com"
                    className="text-blue-500"
                  >
                    contact@infodrive-solutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-10">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1cTVYYOspcQmhrz3CdrJYSzacFNh3jzY&ehbc=2E312F&noprof=1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Embed"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </div>
  );
}
