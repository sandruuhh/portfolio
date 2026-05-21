import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education"; 
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";
//import Data from "./components/Data";

function App(){
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Contact/>
    <Footer/>
    
  
    </>
  )
}
export default App;