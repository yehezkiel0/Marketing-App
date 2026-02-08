import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdLogout } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { TbSeo, TbSocial } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";
import { GrDatabase } from "react-icons/gr";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { authService } from "../../services/authService";
import { config } from "../../config";

export default function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.signOut();
    navigate("/login");
  };

  const navItems = [
    { name: "Realtime Overview", icon: <MdOutlineSpaceDashboard />, path: "/" },
    { name: "SEO", icon: <TbSeo />, path: "/seo" },
    { name: "Paid Ads", icon: <RiAdvertisementLine />, path: "/ads" },
    { name: "Social Media", icon: <TbSocial />, path: "/social" },
    { name: "Data Sources", icon: <GrDatabase />, path: "/data", hasSub: true },
    { name: "Reports", icon: <BsFileEarmarkBarGraph />, path: "/reports" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  return (
    <>
      <div
        className={`fixed lg:sticky top-0 h-screen w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between p-4 transition-transform duration-300 z-30
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          {/* Logo Area */}
          <div className="mb-8 px-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
                <div className="text-white dark:text-gray-900 text-lg">
                  {config.appLogo}
                </div>
              </div>
              <span className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                {config.appName}
              </span>
            </div>
          </div>
          {/* New Search (Mock) */}
          <div className="mb-6 relative">
            <HiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 dark:text-gray-200 placeholder-gray-400 transition-colors"
            />
          </div>
          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 1024) onClose(); // Close sidebar on mobile nav
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white font-semibold"
                      : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
                {/* Dummy Submenu for Data Sources - Hidden for brevity/cleanliness in this step, or keeping it but ensuring it doesn't break layout */}
                {item.hasSub && (
                  <div className="ml-9 mt-1 space-y-1">
                    <p className="px-3 py-1 text-xs text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
                      Google Analytics
                    </p>
                    <p className="px-3 py-1 text-xs text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
                      Google Ads
                    </p>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer / User / Logout */}
        <div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors px-3 py-2 w-full"
          >
            <MdLogout />
            <span>Logout</span>
          </button>
          <div className="mt-4 flex items-center gap-2 px-3">
            <span className="text-xs text-gray-400">© 2026 SaaS Inc.</span>
          </div>
        </div>
      </div>
    </>
  );
}
