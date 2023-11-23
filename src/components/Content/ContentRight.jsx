/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export default function ContentRight() {
  const customers = [
    { name: "PT. Pertamina Sero", time: "2 days ago" },
    { name: "Petroxchina Int", time: "2 days ago" },
    { name: "PT. Pertamina Sero", time: "2 days ago" },
    { name: "Petroxchina Int", time: "2 days ago" },
    { name: "Petroxchina Int", time: "2 days ago" },
    { name: "Petroxchina Int", time: "2 days ago" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-[25%] pt-24 pr-6">
      <div className="bg-white border-2  border-[#C3C9D9] w-full h-full rounded-3xl">
        <div className="flex pt-4 justify-between px-4">
          <h1 className="font-primary font-semibold text-[#363062]">
            Latest Customer
          </h1>
          <button
            id="dropdownButton"
            onClick={toggleDropdown}
            className="inline-block rounded-lg text-sm p-1.5 focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className={`w-5 h-5 transform ${
                isOpen ? "rotate-180" : "rotate-90"
              } fill-black transition-all duration-300`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {isOpen && (
            <div
              id="dropdown"
              className="absolute z-10 text-lg  divide-y bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
               divide-gray-300 rounded-lg  w-56 mt-9 right-[84px] origin-top-right"
              tabIndex={-1}
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-secondary font-medium text-grey-700 hover:bg-gray-300"
                    tabIndex={-1}
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-medium text-grey-700 font-secondary hover:bg-gray-300"
                    tabIndex={-1}
                  >
                    Test
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-medium text-grey-700 font-secondary hover:bg-gray-300"
                    tabIndex={-1}
                  >
                    Export Data
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto scroll-container">
          {customers
            .slice(0, isExpanded ? customers.length : 3)
            .map((val, index) => (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-gray-200 py-6 px-4 gap-4"
              >
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="user"
                  className="h-[50px] w-[50px] object-cover rounded-full flex items-center justify-center mr-3 bg-slate-300"
                />
                <div className="flex-1 py-1">
                  <div className="text-sm font-semibold font-primary text-[#363062]">
                    {val.name}
                  </div>
                  <div className="text-xs font-normal font-primary text-[#757D96]">
                    {val.time}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="py-8 px-2 flex justify-center items-center">
          <button
            onClick={toggleExpand}
            className="w-full flex justify-center items-center gap-1 hover:shadow-[#564e97]"
          >
            <h1 className="font-primary font-semibold text-[#363062] hover:text-[#564e97]">
              {isExpanded ? "Collapse" : "View All"}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              className="fill-[#363062]"
            >
              <path
                d="M3.3335 12.1211V14.2695H13.3335L8.75016 20.1777L9.9335 21.7031L16.5335 13.1953L9.9335 4.6875L8.75016 6.21289L13.3335 12.1211H3.3335Z"
                fill="#363062"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
