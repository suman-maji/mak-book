import React from "react";
import Navbar from "./Footer/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-50 text-gray-900 overflow-hidden">
      {/* Main Content Wrapper */}
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full bg-gray-50 shadow-md">
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="flex-grow w-full">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-50 shadow-inner">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
