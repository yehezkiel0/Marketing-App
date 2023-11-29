import React from "react";
import Cardin from "../../assets/img/CardInfo.png";

export default function CardInfo() {
  return (
    <>
      <div className="w-full h-full rounded-2xl bg-white py-2 border border-gray-300 px-2">
        <div className="flex flex-row w-full h-full py-2 px-4 ">
          <div className="rounded-2xl bg-[#D8D6F1] px-4 pr-8 py-4 pb-6 w-full h-full flex flex-col justify-center gap-3">
            <div className="pr-7 z-10">
              <h1 className="font-secondary font-extrabold text-[23px] text-[#363062] py-1">
                Sales and Marketing
              </h1>
              <p className="font-secondary font-bold text-sm text-left justify-center pr-4 text-[#635E96]">
                Go and check progress of sales and marketing’s graphs
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-[#363062] hover:bg-[#5b54b6] font-primary text-[10px] font-semibold text-white px-8 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex item-center justify-center z-20 -translate-x-8">
            <img
              src={Cardin}
              alt="cardin"
              className="object-cover w-[550px] h-[193px] scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
}
