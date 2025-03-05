import React from "react";
import Navbar from "./Footer/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar with shadow effect */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-16 py-6 transition-opacity duration-300">
        <Outlet />
      </main>

      {/* Footer - sticky at bottom */}
      <footer className="bg-gray-100 shadow-inner py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
