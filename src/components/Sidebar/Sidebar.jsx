/* eslint-disable no-unreachable */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiListCheck } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { MdPermDeviceInformation, MdOutlineGroups } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <RiListCheck />, path: "/" },
    { name: "Profile", icon: <CgProfile />, path: "/pages" },
    { name: "Reports", icon: <GoGraph />, path: "" },
    { name: "Informations", icon: <MdPermDeviceInformation />, path: "" },
    { name: "Chat", icon: <MdOutlineGroups />, path: "" },
  ];
  return (
    <div className="h-full border-gray-200 w-64 px-4 py-6 space-y-[50px]">
      <h1 className="font-['Avenir Next'] font-bold text-white text-[19px] pl-2 py-4">
        Sales & Marketing
      </h1>
      <div className="text-white font-secondary font-bold">
        <ul>
          {menu.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={`w-[90%] mb-4 flex flex-row items-center px-2 gap-x-7  py-4 rounded-3xl hover:bg-white hover:bg-opacity-[0.13] ${
        pathname === item.path ? "bg-white bg-opacity-[0.13]" : ""
      }`}
    >
      <div className="scale-150 pl-3">{item.icon}</div>
      <div>{item.name}</div>
    </Link>
  );
}
