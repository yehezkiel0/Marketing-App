import React, { useState } from "react";
import { HiOutlineBell, HiMoon, HiSun, HiMenuAlt1 } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { config } from "../../config";

export default function TopNav({ onToggleSidebar }) {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const userName = user?.user_metadata?.name || "User";
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-4">
        {/* Hamburger Menu - Visible on Mobile */}
        <button
          onClick={onToggleSidebar}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg lg:hidden transition-colors"
        >
          <HiMenuAlt1 size={24} />
        </button>

        {/* Left side (Breadcrumb or Title) */}
        <h1 className="text-xl font-bold font-primary text-gray-800 dark:text-gray-100">
          {config.appName}
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          {theme === "dark" ? (
            <HiSun className="w-6 h-6" />
          ) : (
            <HiMoon className="w-6 h-6" />
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors focus:outline-none"
          >
            <HiOutlineBell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-gray-900"></span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-scale-in origin-top-right z-50">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Notifications
                </h3>
                <span className="text-xs text-blue-500 cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {[
                  {
                    id: 1,
                    text: "New campaign 'Summer Sale' created.",
                    time: "2 min ago",
                    unread: true,
                  },
                  {
                    id: 2,
                    text: "Your daily report is ready to download.",
                    time: "1 hour ago",
                    unread: false,
                  },
                  {
                    id: 3,
                    text: "Subscription renewed successfully.",
                    time: "1 day ago",
                    unread: false,
                  },
                ].map((note) => (
                  <div
                    key={note.id}
                    className={`p-4 border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                      note.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : ""
                    }`}
                  >
                    <p className="text-sm text-gray-800 dark:text-gray-200 mb-1">
                      {note.text}
                    </p>
                    <p className="text-xs text-gray-400">{note.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-gray-100 dark:border-gray-700">
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                  View All Activity
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-2"></div>
        <div className="flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:block">
            {userName}
          </span>
        </div>
      </div>
    </div>
  );
}
