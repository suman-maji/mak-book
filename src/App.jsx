import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import About from "./Pages/About";
import Course from "./Pages/Course";
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";
import Error from "./Component/Error/Error";
import Layout from "./Component/Layout";
import Contact from "./Component/Contact/Contact";
import Services from "./Pages/Services";
import DonateDetails from "./Component/Donate/DonateDetails";

function App() {
  return (
    <>
      <div className="bg-gray-800 font-mont">
        <BrowserRouter>
          <Helmet>
            <title>MAK-Book - Get the Latest MAKAUT Study Material</title>
            <meta name="description" content="MakBook - Your ultimate resource for the latest MAKAUT study materials, organized notices, and previous year question papers. Simplify your MAKAUT studies with MakBook." />
            <meta name="keywords" content="MAK-BOOK, MakBook, makbook, MAKAUT, study material, organizer, notice, previous year question papers, resources, exam preparation, students, guides, syllabus" />
          </Helmet>
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
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
