import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from "react";

import Layout from "./Component/Layout";
import Error from "./Component/Error/Error";

// Lazy load route components for better performance
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Course = lazy(() => import("./Pages/Course"));
const Subject = lazy(() => import("./Pages/Subject"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Services = lazy(() => import("./Pages/Services"));
const DonateDetails = lazy(() => import("./Component/Donate/DonateDetails"));

function App() {
  return (
    <HelmetProvider>
      <div className="bg-gray-800 font-mont min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrowserRouter>
            <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="services" element={<Services />} />
                  <Route path="donate" element={<DonateDetails />} />
                  <Route path="choice/:id" element={<Course />} />
                  <Route path="choice/:id/:branchId/:semId" element={<Subject />} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
