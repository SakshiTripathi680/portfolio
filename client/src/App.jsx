import React from "react";
import About from "./pages/About";
import Nav from "./pages/Nav";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Nav />
      <About />
      <Experience/>
      <Education/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
