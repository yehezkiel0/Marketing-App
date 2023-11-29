/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    phone: "",
    about: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://pemin.aenzt.tech/api/v1/marketing/consult",
        formData
      );
      console.log("Form data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
    window.location.reload();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <div className="w-full max-h-screen bg-slate-100 rounded-3xl flex flex-col p-2 overflow-y-auto">
      <div className="flex flex-wrap justify-between gap-2 p-4">
        <div className="justify-center items-center pr-32">
          <h1 className="text-[#363062] font-primary font-semibold text-[30px]">
            Form Messages
          </h1>
          <h3 className="text-[#4E4885] font-secondary font-semibold text-[19px]">
            Fill this form to consult with marketing division
          </h3>
        </div>
        <div className=" flex justify-center item-center py-2 pl-20 gap-8 border-r border-[#D0D5DD]">
          <form action="">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 border-2 border-gray-[#D0D5DD] rounded-[15px] bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="search"
                required
              />
            </div>
          </form>
          <div className="flex items-center justify-center pr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              className="hover:bg-[#D0D5DD] rounded-full cursor-pointer"
            >
              <path
                d="M16 15V9.8C15.5 9.9 15 10 14.5 10H14V16H4V9C4 6.2 6.2 4 9 4C9.1 2.7 9.7 1.6 10.5 0.7C10.2 0.3 9.6 0 9 0C7.9 0 7 0.9 7 2V2.3C4 3.2 2 5.9 2 9V15L0 17V18H18V17L16 15ZM7 19C7 20.1 7.9 21 9 21C10.1 21 11 20.1 11 19H7ZM18 4.5C18 6.4 16.4 8 14.5 8C12.6 8 11 6.4 11 4.5C11 2.6 12.6 1 14.5 1C16.4 1 18 2.6 18 4.5Z"
                fill="#9A9EA5"
              />
            </svg>
          </div>
        </div>
        <div className="justify-center items-center flex gap-4 px-3">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="user"
            className="h-14 w-14  object-cover rounded-full"
          />
          <h1 className="text-[#363062] font-primary font-semibold text-[17px]">
            Cua Anilla
          </h1>
        </div>
      </div>
      <div className="w-full h-full px-12">
        <div className="w-full rounded-2xl border-solid border-[#BFC7D3;] bg-slate-200">
          <form onSubmit={handleSubmit} className="w-full h-fit px-7">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <label
                  htmlFor="name"
                  className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
                >
                  Name
                </label>
                <input
                  type="input"
                  id="name"
                  className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label
                  htmlFor="email"
                  className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
              >
                Company / Partner
              </label>
              <input
                type="text"
                id="company"
                className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name of the Company"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="about"
                className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
              >
                About
              </label>
              <input
                type="text"
                id="about"
                className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                placeholder="In regard to"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
                >
                  Message
                </label>
                <textarea
                  rows={1}
                  id="message"
                  className="w-full h-[50px] p-2.5 px-4 mt-2 inline-block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Message"
                />
              </div>
              <div className="w-1/4 pt-11">
                <button className="w-full h-[40px] p-2 bg-[#3B3286] text-white font-primary font-medium text-[14px] rounded-[5px] cursor-pointer hover:bg-[#7668f3]">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
