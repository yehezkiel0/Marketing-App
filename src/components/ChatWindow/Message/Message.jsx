import React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");
export default function Message() {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("chat message", (receivedMessage) => {
      setChatMessages([
        ...chatMessages,
        { text: receivedMessage, sender: "recipient" },
      ]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages([...chatMessages, { text: newMessage, sender: "user" }]);
      socket.emit("chat message", newMessage);
      setNewMessage("");
    }
  };
  return (
    <div>
      <div className="h-[300px] px-4 overflow-y-auto message-container">
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user"
                ? "text-right flex justify-end py-1 px-4 gap-2 items-center"
                : "text-left flex flex-row-reverse justify-end py-1 px-4 gap-2 item-center"
            } `}
          >
            <div
              className={`${
                message.sender === "user"
                  ? "bg-[#6A62B2] rounded-s-full rounded-tr-full  w-fit px-4 py-2 text-white"
                  : "bg-blue-500 rounded-e-full rounded-tl-full text-white w-fit px-4 py-2"
              } `}
            >
              {message.text}
            </div>
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="user"
              className="h-[40px] w-[40px] object-cover rounded-full flex items-center justify-center bg-slate-300"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row px-4 py-2 mt-1 items-center rounded-2xl  bg-[#F7F7F9]">
        <button className="inline-flex justify-center py-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              d="M17.4573 9.32334C17.4573 7.54352 16.6399 5.8366 15.1848 4.57807C13.7297 3.31955 11.7563 2.61252 9.6985 2.61252C7.64074 2.61252 5.66725 3.31955 4.2122 4.57807C2.75714 5.8366 1.9397 7.54352 1.9397 9.32334C1.9397 11.1032 2.75714 12.8101 4.2122 14.0686C5.66725 15.3271 7.64074 16.0342 9.6985 16.0342C11.7563 16.0342 13.7297 15.3271 15.1848 14.0686C16.6399 12.8101 17.4573 11.1032 17.4573 9.32334ZM19.397 9.32334C19.397 11.5481 18.3752 13.6818 16.5564 15.2549C14.7375 16.8281 12.2707 17.7119 9.6985 17.7119C8.42487 17.7119 7.16372 17.4949 5.98704 17.0733C4.81037 16.6518 3.74121 16.0339 2.84062 15.2549C1.0218 13.6818 0 11.5481 0 9.32334C0 7.09856 1.0218 4.96491 2.84062 3.39176C4.65944 1.8186 7.12629 0.934814 9.6985 0.934814C10.9721 0.934814 12.2333 1.15179 13.41 1.57335C14.5866 1.99492 15.6558 2.61281 16.5564 3.39176C17.457 4.1707 18.1713 5.09545 18.6587 6.11319C19.1461 7.13093 19.397 8.22174 19.397 9.32334ZM7.7588 7.22621C7.7588 7.89729 7.0799 8.48449 6.30402 8.48449C5.52814 8.48449 4.84925 7.89729 4.84925 7.22621C4.84925 6.55513 5.52814 5.96793 6.30402 5.96793C7.0799 5.96793 7.7588 6.55513 7.7588 7.22621ZM14.5477 7.22621C14.5477 7.89729 13.8688 8.48449 13.093 8.48449C12.3171 8.48449 11.6382 7.89729 11.6382 7.22621C11.6382 6.55513 12.3171 5.96793 13.093 5.96793C13.8688 5.96793 14.5477 6.55513 14.5477 7.22621ZM9.6985 13.7105C8.00126 13.7105 6.50769 13.0982 5.63483 12.1922L7.01201 11.001C7.44844 11.605 8.48618 12.0328 9.6985 12.0328C10.9108 12.0328 11.9485 11.605 12.385 11.001L13.7622 12.1922C12.8893 13.0982 11.3957 13.7105 9.6985 13.7105Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="py-1 p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="30"
            viewBox="0 0 34 30"
            fill="none"
          >
            <g clip-path="url(#clip0_482_643)">
              <path
                d="M24.4138 13.1275L17.0338 20.7347C16.353 21.4365 15.3777 21.8756 14.3226 21.9554C13.2675 22.0352 12.2189 21.7493 11.4076 21.1604C10.5963 20.5716 10.0886 19.7281 9.99627 18.8155C9.90396 17.9029 10.2346 16.996 10.9154 16.2942L18.9372 8.02546C19.3627 7.58686 19.9722 7.31242 20.6316 7.26252C21.2911 7.21262 21.9464 7.39134 22.4535 7.75937C22.9606 8.1274 23.2779 8.65459 23.3356 9.22497C23.3933 9.79534 23.1867 10.3622 22.7612 10.8008L16.0229 17.7465C15.8527 17.9219 15.6088 18.0317 15.3451 18.0517C15.0813 18.0716 14.8192 18.0002 14.6163 17.8529C14.4135 17.7057 14.2866 17.4949 14.2635 17.2667C14.2404 17.0386 14.3231 16.8118 14.4933 16.6364L20.5898 10.3521L19.4426 9.51955L13.3461 15.8038C12.9206 16.2424 12.7139 16.8092 12.7716 17.3796C12.8293 17.95 13.1466 18.4772 13.6537 18.8452C14.1608 19.2132 14.8161 19.3919 15.4756 19.342C16.135 19.2921 16.7446 19.0177 17.1701 18.5791L23.9084 11.6334C24.5892 10.9316 24.9198 10.0247 24.8275 9.11208C24.7352 8.19948 24.2275 7.35597 23.4161 6.76713C22.6048 6.17828 21.5562 5.89232 20.5011 5.97216C19.446 6.05201 18.4708 6.49111 17.79 7.19287L9.76818 15.4616C8.83207 16.4265 8.37748 17.6736 8.50441 18.9284C8.63133 20.1832 9.32938 21.343 10.445 22.1527C11.5606 22.9623 13.0024 23.3555 14.4531 23.2458C15.9039 23.136 17.2449 22.5322 18.181 21.5673L25.561 13.9601L24.4138 13.1275Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_482_643">
                <rect
                  width="22.6798"
                  height="22.1193"
                  fill="white"
                  transform="matrix(0.809317 0.587372 -0.696308 0.717743 15.645 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <textarea
          rows={1}
          className="inline-block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="w-[15%] h-[40px]  p-2 bg-[#3B3286] text-white font-primary font-medium text-[14px] rounded-[5px] cursor-pointer hover:bg-[#7668f3]"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
