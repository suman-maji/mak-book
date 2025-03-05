import React from 'react';
import Navbar from './Footer/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar - Fixed at the top with shadow */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Main Content with proper spacing */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-6 transition-all duration-300">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <footer className="bg-gray-900 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
