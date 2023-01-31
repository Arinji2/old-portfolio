import React, { useState, useEffect } from "react";
import projectPic from "./assets/projects.png";
import "./App.css";
import About from "./components/about";
import Commissions from "./components/commisions";
import Hero from "./components/hero";
import Languages from "./components/languages";

import Nav from "./components/nav";
import Projects from "./components/projects";
import { Oval } from "react-loader-spinner";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [ready, setReady] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (document.readyState === "complete") {
        setReady(true);
      } else setCounter(counter + 1);
    }, 2000);
  }, [counter]);
  return (
    <React.Fragment>
      <div
        className={ready ? "App h-fit scroll-smooth bg-transparent" : "hidden"}
      >
        <Nav />
        <Hero />
        <About />
        <Languages />
        <Projects />

        <Commissions />
      </div>
      <div
        className={
          ready
            ? "hidden"
            : "flex h-screen w-full flex-col items-center justify-center bg-black"
        }
      >
        <Oval secondaryColor="transparent" color="yellow" />
      </div>
    </React.Fragment>
  );
}

export default App;
