import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";//import browser router 
import { Toaster } from "react-hot-toast"; // for toster
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
       <Toaster />       {/* toast error messages in backend */}
    </Router>
  );
};

export default App;
