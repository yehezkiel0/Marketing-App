/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Message from "../ChatWindow/Message/Message";
import CardStat from "../Card/CardStat";

export default function ContentLeft() {
  const email = localStorage.getItem("email");

  return (
    <div className="px-8 mb-4 w-[75%]">
      <div className="pt-4 flex flex-row gap-4">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="user"
          className="h-14 w-14  object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-primary font-bold text-3xl text-[#3B3286]">
            Hello, {email} !
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
