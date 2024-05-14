import { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import axios from "axios";

function EventsForm() {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    contact_number: "",
    message: "",
    events: [],
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleEventSelect = (selectedEvents) => {
    setInputData({
      ...inputData,
      events: selectedEvents,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${inputData.first_name} ${inputData.last_name}`;
    const combinedMessage = `Events: ${inputData.events
      .map((event) => event.label)
      .join(", ")}\n\nMessage: ${inputData.message}`;

    const dataToSend = {
      full_name: fullName,
      email_address: inputData.email_address,
      contact_number: inputData.contact_number,
      industry: "",
      message: combinedMessage,
    };

    try {
      if (
        !inputData.first_name ||
        !inputData.last_name ||
        !inputData.email_address ||
        !inputData.contact_number ||
        !inputData.events.length
      ) {
        toast.error("Please fill in all required fields", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      const res = await axios.post(
        "https://mydryve.co/Api/sendMail",
        dataToSend
      );

      if (res.data.message) {
        setSubmissionStatus("success");
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(res.data.message, "success");
      } else {
        setSubmissionStatus("error");
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
      setSubmissionStatus("error");
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
    console.log(dataToSend);
  };

  const eventOptions = [
    { value: "TrailblazerDX", label: "TrailblazerDX" },
    { value: "Devops days", label: "Devops days" },
  ];

  return (
    <div
      className="relative px-6 lg:px-8 w-full"
      style={{
        backgroundImage: "url('/images/pexels-helena-lopes-933964-min.jpg')",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-red-600 opacity-70"></div>
      <div className="flex flex-wrap items-center relative z-10">
        <div className="w-full md:p-5 md:w-1/2 xs:mt-20">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-white text-center">
            <p className="font-bold text-2xl">
              <span>If </span>
              <span className="text-blue-500">Success is Your Thing</span>
              <span>, Don't Miss the Chance to </span>
              <span className="text-lime-500 font-bold underline">
                Meet us!
              </span>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight ">
              Join us across the Globe - USA & EUROPE
            </h1>
            <p className="mt-3 text-1xl ">
              This May to July 2024, Get the chance to meet industry-leading
              experts, business tycoons, inspiring tech enthusiasts, and more!
            </p>
            <h2 className="text-2xl md:text-2xl font-bold tracking-tight ">
              <span>Let's</span>{" "}
              <span className="text-blue-500 font-bold">Engage</span>,{" "}
              <span className="text-yellow-500 font-bold">Evolve</span>, and{" "}
              <span className="text-lime-500 font-bold">Elate</span> Together!
            </h2>
          </div>
        </div>
        <div className="w-full mx-auto max-w-xl sm:mt-10 md:w-1/2 p-10">
          <div className="w-auto border border-red-600 rounded-lg p-7 bg-white">
            <h1 className="text-center text-3xl font-bold mb-4">
              {" "}
              <span className="text-red-800 font-bold">
                Let's Get Connected &{" "}
              </span>
              <span>Grab New Opportunities</span>
            </h1>
            <form className="" onSubmit={handleSubmit}>
              <div>
                <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="">
                      <input
                        id="grid-first-name"
                        type="text"
                        onChange={handleChange}
                        name="first_name"
                        required
                        autoComplete="given-name"
                        placeholder="Your First Name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="">
                      <input
                        id="grid-last-name"
                        type="text"
                        onChange={handleChange}
                        name="last_name"
                        required
                        autoComplete="family-name"
                        placeholder="Your Last Name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 mt-2">
                  <label
                    htmlFor="contact-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact Number
                  </label>
                  <div className="">
                    <input
                      id="grid-contact-number"
                      type="tel"
                      placeholder="Your contact number"
                      onChange={handleChange}
                      name="contact_number"
                      required
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 mt-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="">
                    <input
                      id="grid-email"
                      type="email"
                      onChange={handleChange}
                      name="email_address"
                      required
                      autoComplete="email"
                      placeholder="Your Email Address"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 mt-2">
                  <label
                    htmlFor="select-event"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Select Event
                  </label>
                  <div className="">
                    <Select
                      options={eventOptions}
                      onChange={handleEventSelect}
                      isMulti
                      placeholder="Select event(s)"
                      required
                    />
                  </div>
                </div>
                <p className="w-full mt-2 md:w-full">
                  If you are unable to attend the event but prefer to meet us,
                  drop us a message here.
                </p>
                <div className="sm:col-span-2 mt-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="">
                    <textarea
                      id="grid-message"
                      placeholder="Your message"
                      onChange={handleChange}
                      name="message"
                      required
                      rows="4"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                {/* Submission status message */}
                {submissionStatus === "success" && (
                  <p className="text-green-500 text-center">
                    Submission successful!
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p className="text-red-500 text-center">
                    Submission failed. Please try again.
                  </p>
                )}
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-sm py-2 w-full block"
                >
                  Book A Meeting →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsForm;
