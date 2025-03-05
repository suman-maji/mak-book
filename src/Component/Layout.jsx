import React from "react";
import Navbar from "./Footer/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Navbar with full width */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <Navbar />
      </header>

      {/* Page Content - Full Width */}
      <main className="flex-grow w-full px-0 py-6 transition-opacity duration-300">
        <Outlet />
      </main>

      {/* Footer - Full Width */}
      <footer className="w-full bg-gray-100 shadow-inner py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

