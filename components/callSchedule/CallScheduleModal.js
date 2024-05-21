import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const CallScheduleModal = ({ open, handleClose, setOpen }) => {
    const [isLoading, setLoading] = useState(false);

    const [inputData, setInputData] = useState({
        full_name: "",
        email_address: "",
        contact_number: "",
        industry: "",
        message: "",
    });

    const handleChange = (e) => {
        setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("value", inputData);

        try {
            const res = await axios.post("https://mydryve.co/Api/sendMail", inputData);
            console.log(res.data.message);
            setLoading(false);
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

        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: 450,
        maxHeight: '90vh',
        overflowY: 'auto',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
        borderRadius: '16px',
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4">Request a call back</h2>
                    <button onClick={handleClose} className="text-gray-700 hover:text-red-500 -mt-4">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="full_name" className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            id="full_name" 
                            name="full_name"
                            value={inputData.full_name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email_address" className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            id="email_address" 
                            name="email_address"
                            value={inputData.email_address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact_number" className="block text-gray-700 text-sm font-bold mb-2">
                            Contact Number
                        </label>
                        <input 
                            type="text" 
                            id="contact_number" 
                            name="contact_number"
                            value={inputData.contact_number}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea 
                            id="message" 
                            name="message"
                            value={inputData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 text-white shadow-md bg-red-600 rounded-md hover:bg-red-900"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </Box>
        </Modal>
    );
};

export default CallScheduleModal;
