import React from "react";
import Logo from "../assets/img/Rectangle-34.png";

export default function Register() {
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
            <div className="h-full max-md:h-1/2 flex flex-col  px-12 py-6 max-md:py-0 gap-2 max-md:scale-75 max-md:px-2 max-md:gap-0">
              <h1 className="font-primary font-bold text-[#363062] text-[50px]">
                Sign Up
              </h1>
              <form className="w-full h-fit">
                {/* // Inside the form element */}
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
                      className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px] border-2 border-solid border-[#d0d5dd]"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <label
                      htmlFor="username"
                      className="w-full mt-3 block font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
                    >
                      Username
                    </label>
                    <input
                      type="input"
                      id="username"
                      className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px] border-2 border-solid border-[#d0d5dd]"
                      placeholder="Username"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px] border-2 border-solid border-[#d0d5dd]"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="w-full mt-3 block  font-primary font-semibold text-[#363062] text-[20px] max-md:text-[18px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full h-[50px] px-4 mt-2 block bg-white rounded-[15px] border-2 border-solid border-[#d0d5dd]"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="item-center flex justify-center w-full mt-6">
                  <button
                    className="w-2/3 h-[45px] px-32 py-3 flex items-center justify-center bg-[#3b3286] rounded-[100px] font-primary font-medium text-white text-[17px] text-center"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="items-center flex flex-col w-full mt-4">
                  <div className="w-full my-1">
                    <div className="inline-flex items-center justify-center w-full">
                      <hr className="w-1/2 max-sm:w-2/3 h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                      <p className="absolute px-3 text-center w-fit bg-white font-primary font-medium text-[#98a2b3] text-[14px]">
                        or
                      </p>
                    </div>
                    <div className="item-center flex justify-center w-full">
                      <button className="flex items-center justify-center w-1/2 max-sm:w-2/3 h-[40px] px-3 max-sm:px-0 py-2 my-4 bg-white rounded-[100px] border border-solid border-[#d0d5dd] font-primary font-semibold text-[#344054] text-[14px] max-sm:text-[10px] text-center">
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
                  Already have an account?
                  <a
                    href="/"
                    className="font-primary px-1 font-semibold text-[#3b3286] text-[15px] text-center tracking-[0] leading-[normal] underline"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}