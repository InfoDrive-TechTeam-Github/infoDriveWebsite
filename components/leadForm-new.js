import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LeadForm() {
  const [isLoading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    full_name: "",
    email_address: "",
    contact_number: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://mydryve.co/Api/sendMail", inputData);
      setLoading(false);
      if (res.data.message) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.warning("Please Try Again", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <section className="flex flex-col items-center py-10 px-5 bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex w-full lg:w-10/12 ">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Request a Call Back</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={handleChange}
                value={inputData.full_name}
                aria-label="Full Name"
                required
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={handleChange}
                value={inputData.email_address}
                aria-label="Email Address"
                required
              />
              <input
                type="tel"
                name="contact_number"
                placeholder="Contact Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={handleChange}
                value={inputData.contact_number}
                aria-label="Contact Number"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={handleChange}
                value={inputData.message}
                aria-label="Message"
                required
              ></textarea>
              <div className="flex items-center">
                <button
                  type="submit"
                  className={`w-full bg-red-500 text-white py-3 rounded ${isLoading && "opacity-50"}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Message Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 bg-red-400 text-white p-6">
            {[
              {
                title: "InfoDrive Solutions Pte Ltd",
                address: "135 MIDDLE RD, #02-21 BYLANDS BLDG, SINGAPORE 188975",
                phone: "+65-9238 4299",
                email: "contact@infodrive-solutions.com",
              },
              {
                title: "InfoDrive Solutions Sdn Bhd",
                address: "Lot 10-03A, 10th Floor, Tower 1, Faber Towers, Jalan Desa Bahagia, Taman Desa, Kuala Lumpur, Malaysia - 58100",
                phone: "+60-1 2327 5811",
                email: "contact@infodrive-solutions.com",
              },
              {
                title: "InfoDriven Solutions Pvt Ltd",
                address: "#88, Borewell Road, opposite Whitefield Post Office, Whitefield, Bangalore – 560066",
                phone: "+91-960 61880 81",
                email: "contact@infodrive-solutions.com",
              },
            ].map((office, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{office.title}</h3>
                <p className="mt-2">
                  {office.address}
                  <br />
                  Phone: <a href={`tel:${office.phone}`} className="underline">{office.phone}</a>
                  <br />
                  Email: <a href={`mailto:${office.email}`} className="underline">{office.email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
