import { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import axios from "axios";

const EventsForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [inputData, setInputData] = useState({
    full_name: "",
    email_address: "",
    contact_number: "",
    industry: "",
    message: "",
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

    try {
      // Combine first name and last name into full_name
      const fullName = `${inputData.first_name} ${inputData.last_name}`;
      const combinedMessage = `Events: ${inputData.events
        .map((event) => event.label)
        .join(", ")}\n\nMessage: ${inputData.message}`;

      const dataToSend = {
        full_name: fullName,
        email_address: inputData.email_address,
        contact_number: inputData.contact_number,
        message: combinedMessage,
      };

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
        console.log(success, "success");
        console.log(dataToSend);
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
  };

  const eventOptions = [
    { value: "TrailblazerDX", label: "TrailblazerDX" },
    { value: "Devops days", label: "Devops days" },
  ];

  return (
    <div className="relative w-screen h-screen mt-16 mb-36">
      <div
        className="w-full h-full bg-cover bg-center grid grid-cols-2"
        style={{
          backgroundImage: "url('/images/pexels-helena-lopes-933964-min.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-red-500 opacity-80"></div>

        {/* Left side */}
        <div className="w-full h-full z-10 ml-10 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-8">
            If{" "}
            <span className="text-sky-300 font-bold">
              Success is Your Thing
            </span>
            , Don't Miss the Chance to{" "}
            <span className="text-green-300 font-bold underline">Meet us!</span>
          </h1>
          <p className="text-white mb-4">
            Join us across the Globe - USA & EUROPE <br />
            This May to July 2024, Get the chance to meet industry-leading
            experts, business tycoons, inspiring tech enthusiasts, and more!
          </p>
          <h2 className=" text-white">
            Let's <span className="text-blue-300 font-bold">Engage</span>,{" "}
            <span className="text-yellow-300 font-bold">Evolve</span>, and{" "}
            <span className="text-green-300 font-bold">Elate</span> Together!
          </h2>
        </div>

        {/* Right side */}
        <div className="w-full h-full z-10 flex flex-col justify-center items-center text-blue">
          <div className="max-w-md mx-auto">
            {" "}
            {/* Adjusted width and centered */}
            <div className="mt-5 border border-purple-600 rounded-lg p-4 bg-white">
              {" "}
              {/* Added bg-white */} {/* Reduced padding */}
              <h1 className="text-center text-3xl font-bold mb-4">
                {" "}
                {/* Reduced font size */}
                <span className="text-red-400 font-bold">
                  Let's Get Connected &{" "}
                </span>
                Grab New Opportunities
              </h1>
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2 mb-1">
                  <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Your first name"
                      onChange={handleChange}
                      name="first_name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Your last name"
                      onChange={handleChange}
                      name="last_name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-1">
                  <div className="w-full px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-contact-number"
                    >
                      Contact Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-contact-number"
                      type="number"
                      placeholder="Your contact number"
                      onChange={handleChange}
                      name="contact_number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-1">
                  <div className="w-full px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="text"
                      placeholder="Your email address"
                      onChange={handleChange}
                      name="email_address"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-2">
                  <div className="w-full px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-select-event"
                    >
                      Select Event
                    </label>
                    <Select
                      options={eventOptions}
                      onChange={handleEventSelect}
                      isMulti
                      placeholder="Select event(s)"
                    />
                  </div>
                </div>
                <p className="mb-1 text-sm">
                  If you are unable to attend the event but prefer to meet us,
                  drop us a message here.
                </p>
                <div className="flex flex-wrap -mx-2 mb-2">
                  <div className="w-full px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-message"
                    >
                      Message
                    </label>
                    <textarea
                      className="resize border rounded-md w-full h-24 py-2 px-3 bg-gray-200 text-gray-700 border-gray-200 focus:outline-none focus:border-gray-500"
                      id="grid-message"
                      placeholder="Your message"
                      onChange={handleChange}
                      name="message"
                    ></textarea>
                  </div>
                </div>

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

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white flex flex-col items-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsForm;
