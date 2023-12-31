/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Logo from "../assets/img/Rectangle-33.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { login } from "../auth/Auth";
import axios from "axios";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedLoadingStatus = localStorage.getItem("isLoading");

    if (storedLoadingStatus === "true") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        localStorage.removeItem("isLoading");
      }, 2000);
    }
  }, [location.pathname]);
  const performLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem("isLoading");
      window.location.href = "/";
    }, 2000);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const enteredEmail = event.target.elements.email.value;
    const enteredPassword = event.target.elements.password.value;

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      login();
      performLogin();
      localStorage.setItem("isLoading", "true");
    } else {
      setShowPopup(true);
    }
    // const handleLogin = async (event) => {
    //   event.preventDefault();

    //   const enteredEmail = event.target.elements.email.value;
    //   const enteredPassword = event.target.elements.password.value;

    //   try {
    //     const response = await axios.post(
    //       "https://pemin.aenzt.tech/api/v1/auth/login",
    //       {
    //         email: enteredEmail,
    //         password: enteredPassword,
    //       },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (response.status === 200) {
    //       console.log("Login successful:", response.data);
    //       const token = response.data.access_token;
    //       localStorage.setItem("auth", token);
    //       login();
    //       performLogin();
    //       localStorage.setItem("isLoading", "true");
    //     } else {
    //       setShowPopup(true);
    //     }
    //   } catch (error) {
    //     console.error("Login failed:", error);
    //     setShowPopup(true);
    //   }
  };
  return (
    <div className="fixed w-full h-screen px-14 py-10  [background:linear-gradient(180deg,rgb(35.97,32.88,65)_0%,rgb(62.88,57.29,115.48)_33.33%,rgb(107.98,100.12,181.87)_64.58%,rgb(133.38,124.71,214.83)_100%)]">
      <div className="flex w-full h-full lg:flex-row">
        <div className="w-full h-full  bg-white md:rounded-s-3xl max-lg:rounded-3xl">
          <div className="item-center w-full h-full flex flex-col">
            <div className="h-full flex flex-col  px-12 py-10 max-md:py-8">
              <h1 className="font-primary font-bold text-[#363062] text-[50px]">
                Login Page
              </h1>
              <form className="w-full h-fit" onSubmit={handleLogin}>
                <div className="w-full">
                  <label
                    htmlFor="emailInput"
                    className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[20px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    name="email"
                    className="w-full h-[60px]  px-4 mt-4 block bg-white rounded-[15px] border-2 focus:outline-none border-gray-300  text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full h-[60px] px-4 mt-4 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="item-center flex justify-center w-full max-md:mt-6 mt-8">
                  <button
                    className="w-2/3 h-[50px] max-md:h-[40px] px-32 py-3 flex items-center justify-center bg-[#3b3286] rounded-[100px] font-primary font-medium text-white text-[17px] text-center 
                    focus:ring-4 focus:outline-none focus:ring-[#5245b1] hover:bg-[#30286f]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="items-center flex flex-col w-full mt-4">
                  <div className="w-full">
                    <div className="inline-flex items-center justify-center w-full">
                      <hr className="w-1/2 max-sm:w-2/3 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                      <p className="absolute px-3 text-center w-fit bg-white font-primary font-medium text-[#98a2b3] text-[14px]">
                        or
                      </p>
                    </div>
                    <div className="item-center flex justify-center w-full">
                      <button
                        className="flex items-center justify-center w-1/2 max-sm:w-2/3 h-[40px] px-3 max-sm:px-0 py-2 my-4 bg-white rounded-[100px] border 
                      border-solid border-[#d0d5dd] focus:outline-none hover:border-blue-300 focus:ring-1 focus:ring-blue-300 font-primary font-semibold text-[#344054] text-[14px] max-sm:text-[10px] text-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M19.5328 10.1871C19.5328 9.36767 19.4664 8.76973 19.3225 8.14966H9.96582V11.848H15.458C15.3473 12.7671 14.7493 14.1512 13.4206 15.0813L13.4019 15.2051L16.3603 17.4969L16.5653 17.5174C18.4477 15.7789 19.5328 13.221 19.5328 10.1871Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M9.96566 19.9312C12.6563 19.9312 14.9152 19.0453 16.5651 17.5173L13.4204 15.0812C12.5789 15.6681 11.4494 16.0777 9.96566 16.0777C7.33032 16.0777 5.0936 14.3393 4.29627 11.9365L4.1794 11.9464L1.10322 14.3271L1.06299 14.439C2.70177 17.6944 6.06795 19.9312 9.96566 19.9312Z"
                            fill="#34A853"
                          />
                          <path
                            d="M4.29626 11.9366C4.08588 11.3165 3.96412 10.6521 3.96412 9.96559C3.96412 9.27902 4.08588 8.61467 4.28519 7.9946L4.27962 7.86254L1.16489 5.4436L1.06298 5.49208C0.387557 6.84299 0 8.36002 0 9.96559C0 11.5712 0.387557 13.0881 1.06298 14.439L4.29626 11.9366Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M9.96566 3.85336C11.837 3.85336 13.0992 4.66168 13.819 5.33718L16.6315 2.59107C14.9042 0.985496 12.6563 0 9.96566 0C6.06795 0 2.70177 2.23672 1.06299 5.49214L4.2852 7.99466C5.0936 5.59183 7.33032 3.85336 9.96566 3.85336Z"
                            fill="#EB4335"
                          />
                        </svg>
                        <span className="px-2">Sign in with google</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="w-full  font-primary font-medium  text-black text-[15px] text-center">
                  Don&#39;t have an account?
                  <Link
                    to={"/register"}
                    className="font-primary px-1 font-semibold text-[#3b3286] text-[15px] text-center underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex item-center justify-center w-full max-lg:hidden">
          <img
            src={Logo}
            className="lg:w-full w-[70%] lg:h-full h-[30%] lg:rounded-e-3xl object-cover"
          ></img>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#282c34] flex justify-center items-center z-50">
          <ClimbingBoxLoader size={30} color={"#6A62B2"} />
        </div>
      )}
      {/* Popup Card */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-[#a7a7a744] flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-800"
          >
            <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Login Failed
              </h3>
              <p className="text-lg">
                Please check your email and password and try again.
              </p>
            </div>
            <div className="justify-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <div className="space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                <button
                  onClick={() => setShowPopup(false)}
                  className="btn-close py-2 px-4 w-full text-sm font-medium rounded-lg border border-gray-200 sm:w-auto focus:ring-4 focus:outline-none focus:ring-primary-300 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 bg-primary text-white hover:bg-primary-light transition duration-300"
                >
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
