import React from "react";
import Navbar from "./Footer/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-50 text-gray-900 overflow-hidden">
      {/* Animated Border Wrapper */}
      <div className="absolute inset-0 z-0 animate-border bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 border-4 border-transparent rounded-xl"></div>

      {/* Main Content Wrapper */}
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
          <Navbar />
        </header>

        {/* Page Content - No White Space Above/Below */}
        <main className="flex-grow w-full px-0 py-0">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-100 shadow-inner py-4">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
