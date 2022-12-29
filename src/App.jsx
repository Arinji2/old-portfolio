import React, { useState, useEffect } from "react";

import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Languages from "./components/languages";

import Nav from "./components/nav";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App bg-black h-fit scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Languages />
      <Projects />
    </div>
  );
}

export default App;
