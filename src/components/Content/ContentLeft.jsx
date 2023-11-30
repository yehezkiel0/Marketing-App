/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Message from "../ChatWindow/Message/Message";
import CardStat from "../Card/CardStat";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ContentLeft() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://pemin.aenzt.tech/api/v1/auth/logout",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("auth")}`,
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       localStorage.removeItem("auth");
  //       window.location.href = "/login";
  //     } else {
  //       console.error("Logout failed");
  //     }
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };

  return (
    <div className="px-8 mb-4 w-[75%]">
      <div className="pt-4 flex flex-row gap-4">
        <button
          id="user-menu-button"
          aria-expanded={isDropdownOpen}
          type="button"
          onClick={toggleDropdown}
        >
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="user"
            className="h-14 w-14 object-cover rounded-full cursor-pointer"
          />
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-50 top-[88px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {name}
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                {email}
              </span>
            </div>
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit Profile
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        <div className="flex flex-col">
          <h1 className="font-primary font-bold text-3xl text-[#3B3286]">
            Hello, {name} !
          </h1>
          <p className="font-secondary font-bold text-lg text-[#4E4885]">
            View sales and marketing’s report on current progresses
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 justify-evenly py-1">
          <CardStat />
        </div>
        <div className="bg-white border-[1px] border-solid border-[#C3C9D9] rounded-3xl w-full h-full pb-2 px-4 flex flex-col">
          <div className="px-2 py-2">
            <h1 className="font-primary font-semibold text-[#363062] text-[17px] ">
              Zefanya
            </h1>
          </div>
          <Message />
        </div>
      </div>
    </div>
  );
}
