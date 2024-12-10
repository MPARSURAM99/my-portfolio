import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner.jsx";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import Testimonial from "./components/testionial/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Copyright from "./components/footer/Copyright.jsx";

function App() {
  return (
    <div className="App w-full h-auto bg-bodyColor text-grayText font-bodyFont">
      <div className="w-full">
        <Navbar />
        <Banner />
        <Features />
        <Resume />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
