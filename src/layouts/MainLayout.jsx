import React, { useState } from "react";
// import Sidebar from "../components/Sidebar/Sidebar"; // Left old sidebar for reference
import Sidebar from "../components/SaaS/Sidebar";
import TopNav from "../components/SaaS/TopNav";
import { Outlet } from "react-router-dom"; // Import Outlet

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden font-primary transition-colors">
      {/* Sidebar - Passed state for mobile handling */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navigation - Passed toggle function */}
        <TopNav onToggleSidebar={toggleSidebar} />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6 scrollbar-hide transition-colors relative">
          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
          <div className="container mx-auto max-w-7xl">
            {/* Support both children and Outlet for flexibility */}
            {children ? children : <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
