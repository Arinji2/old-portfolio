import React, { useState, useEffect } from "react";
import projectPic from "./assets/projects.png";
import "./App.css";
import About from "./components/about";
import Commissions from "./components/commisions";
import Hero from "./components/hero";
import Languages from "./components/languages";

import Nav from "./components/nav";
import Projects from "./components/projects";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App bg-transparent h-fit scroll-smooth">
      <img
        src={projectPic}
        className="w-full md:h-[500vh] h-[600vh] object-cover object-center absolute -z-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        id="pic"
      />
      <Nav />
      <Hero />
      <About />
      <Languages />
      <Projects />
      <div className="h-[100vh] w-full relative"></div>
      <Commissions />
    </div>
  );
}

export default App;
