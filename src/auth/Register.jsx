/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/img/Rectangle-34.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const performRegister = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem("isLoading");
      window.location.href = "/login";
    }, 2000);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    // Regular expression to validate password (minimum 8 characters, at least one uppercase letter, and at least one digit)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
      alert(
        "Password must contain at least 8 characters including one uppercase letter and one digit."
      );
      return;
    }
    const name = event.target.name.value;
    const division = event.target.division.value;
    const email = event.target.email.value;
    const date = event.target.date.value;
    const sex = event.target.sex.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    localStorage.setItem("name", name);
    localStorage.setItem("division", division);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("date", date);
    localStorage.setItem("sex", sex);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    localStorage.setItem("isLoading", "true");
    performRegister();
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   division: "",
  //   email: "",
  //   password: "",
  //   date: "",
  //   sex: "",
  //   address: "",
  //   phone: "",
  // });

  // const handleRegister = async (event) => {
  //   event.preventDefault();
  //   const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  //   const { password, ...otherData } = formData;

  //   if (!passwordPattern.test(password)) {
  //     alert(
  //       "Password must contain at least 8 characters including one uppercase letter and one digit."
  //     );
  //     return;
  //   }

  //   localStorage.setItem("isLoading", "true");

  //   try {
  //     const response = await axios.post(
  //       "https://pemin.aenzt.tech/api/v1/auth/register",
  //       formData
  //     );

  //     if (response.status === 200) {
  //       setIsLoading(true);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         localStorage.removeItem("isLoading");
  //         window.location.href = "/login";
  //       }, 2000);
  //     } else {
  //       console.error("Registration failed");
  //     }
  //   } catch (error) {
  //     console.error("Registration failed:", error);
  //     setIsLoading(false);
  //     alert("Registration failed. Please try again.");
  //   }
  // };

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  return (
    <div
      className="fixed w-full h-screen px-14 py-10 top-0 left-0"
      style={{
        background:
          "linear-gradient(180deg, rgb(35.97,32.88,65) 0%, rgb(62.88,57.29,115.48) 33.33%, rgb(107.98,100.12,181.87) 64.58%, rgb(133.38,124.71,214.83) 100%)",
      }}
    >
      <div className="flex w-full h-full lg:flex-row">
        <div className=" flex item-center justify-center w-full max-md:hidden">
          <img
            src={Logo}
            className="lg:w-full lg:h-full lg:mr-0 md:rounded-s-3xl object-cover"
            alt="Logo"
          />
        </div>

        <div className="w-full h-full  bg-white md:rounded-r-3xl">
          <div className="item-center w-full h-full flex flex-col">
            <div className="h-full max-md:h-full flex flex-col px-12 py-1 max-md:py-0 max-md:scale-75 max-md:px-2 max-md:gap-0 overflow-y-auto">
              <h1 className="font-primary font-bold text-[#363062] text-[30px]">
                Sign Up
              </h1>
              <form className="w-full h-fit" onSubmit={handleRegister}>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="nameInput"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                    >
                      Name
                    </label>
                    <input
                      type="input"
                      id="nameInput"
                      name="name"
                      // value={formData.name}
                      // onChange={handleChange}
                      className="w-full h-[45px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="divisionInput"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                    >
                      Division
                    </label>
                    <input
                      type="input"
                      id="divisionInput"
                      // value={formData.division}
                      // onChange={handleChange}
                      name="division"
                      className="w-full h-[45px] px-4 mt-2 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Division"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="emailInput"
                    className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="w-full h-[45px] px-4 mt-1 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="passwordInput"
                    className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="passwordInput"
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    className="w-full h-[45px] px-4 mt-1 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="dateInput"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                    >
                      BirthDate
                    </label>
                    <input
                      type="input"
                      id="dateInput"
                      name="date"
                      // value={formData.date}
                      // onChange={handleChange}
                      className="w-full h-[45px] px-4 mt-1 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="YYYY-MM-DD"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="sexInput"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                    >
                      Sex
                    </label>
                    <input
                      type="input"
                      id="sexInput"
                      name="sex"
                      // value={formData.sex}
                      // onChange={handleChange}
                      className="w-full h-[45px] px-4 mt-1 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="M / F"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="addressInput"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="addressInput"
                      name="address"
                      // value={formData.address}
                      // onChange={handleChange}
                      className="w-full h-[45px] px-4 mt-1 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="phoneInput"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[15px] max-md:text-[18px]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneInput"
                      name="phone"
                      // value={formData.phone}
                      // onChange={handleChange}
                      className="w-full h-[45px] px-4 mt-1 block bg-white rounded-[15px]  text-gray-900 text-sm border-2 focus:outline-none border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="item-center flex justify-center w-full mt-6">
                  <button
                    className="w-1/2 h-[35px] px-16 py-2 flex items-center justify-center bg-[#3b3286] focus:ring-4 focus:outline-none focus:ring-[#5245b1] hover:bg-[#30286f]
                     rounded-[100px] font-primary font-medium text-white text-[15px] text-center"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="items-center flex flex-col w-full mt-2">
                  <div className="w-full my-1">
                    <div className="inline-flex items-center justify-center w-full">
                      <hr className="w-[40%] max-sm:w-2/3 h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                      <p className="absolute px-3 text-center w-fit bg-white font-primary font-medium text-[#98a2b3] text-[14px]">
                        or
                      </p>
                    </div>
                    <div className="item-center flex justify-center w-full">
                      <button
                        className="flex items-center justify-center w-[40%] max-sm:w-2/3 h-[30px] px-3 max-sm:px-0 py-2 my-4 bg-white rounded-[100px] border border-solid border-[#d0d5dd] 
                      focus:outline-none hover:border-blue-300 focus:ring-1 focus:ring-blue-300 font-primary font-semibold text-[#344054] text-[14px] max-sm:text-[10px] text-center"
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
                <p className="w-full  font-primary font-medium  text-black text-[12px] text-center">
                  Already have an account?
                  <Link
                    to={"/login"}
                    className="font-primary px-1 font-semibold text-[#3b3286] text-[12px] text-center tracking-[0] leading-[normal] underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#282c34] flex justify-center items-center z-50">
          <ClimbingBoxLoader size={30} color={"#6A62B2"} />
        </div>
      )}
    </div>
  );
}
