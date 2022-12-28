import React, { useState, useEffect } from "react";
import hero from "./assets/hero.png";
import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App bg-transparent h-fit scroll-smooth">
      <Nav />
      <Hero />
      <h1 className="pb-56"></h1>
    </div>
  );
}

function Nav() {
  const [scroll, onScroll] = useState(0);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      onScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={
          scroll > 50
            ? "md:flex hidden flex-row w-full h-20 bg-black fixed top-0 z-50 shadow-md shadow-black transition-all ease-in-out duration-300 text-white"
            : "md:flex hidden flex-row w-full h-20 bg-transparent fixed top-0 z-50 transition-all ease-in-out duration-300 text-white"
        }
      >
        <div className="w-[30%] flex flex-row items-center justify-start ml-5 text-2xl">
          Arinji
        </div>
        <div className="w-[70%]  flex flex-row items-center justify-end mr-5  text-xl gap-5">
          <ul className="inline">
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              Languages
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              Projects
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              Contributions
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              Commisions
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              Socials
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          scroll > 50 && nav !== true
            ? "md:hidden flex flex-row w-full h-20 bg-black fixed top-0 z-50 shadow-md shadow-black transition-all ease-in-out duration-300 text-white"
            : "md:hidden flex flex-row w-full h-20 bg-transparent fixed top-0 z-50 transition-all ease-in-out duration-300 text-white"
        }
      >
        <div className="w-screen flex flex-row items-center justify-center z-10 text-2xl">
          <h1 className="w-full text-center">Arinji</h1>

          <FontAwesomeIcon
            icon={faBars}
            className="left-10 absolute"
            onClick={() => {
              setNav(true);
            }}
          />
        </div>

        <div
          className={
            nav
              ? "w-[90%] h-screen absolute z-20 bg-black transition-all ease-in-out duration-300"
              : "w-[0%]  bg-black z-20 absolute transition-all ease-in-out duration-300"
          }
        >
          <div className="flex flex-row items-start justify-between">
            <div
              className={
                nav
                  ? "w-[70%] h-screen flex flex-col items-center justify-start "
                  : "invisible"
              }
            >
              <ul className="">
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  Languages
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  Projects
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  Contributions
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  Commisions
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  Socials
                </li>
              </ul>
            </div>
            <div
              className={
                nav
                  ? "w-[30%] h-screen flex flex-col items-end justify-start mr-10 mt-10 text-2xl "
                  : "invisible"
              }
              onClick={() => {
                setNav(false);
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Hero() {
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
    <div className="w-full h-screen">
      <div
        className="bg-black z-10 h-screen w-full opacity-50 absolute"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      <div
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        className="-z-0"
      >
        <img
          src={hero}
          alt={"hero"}
          className="absolute -z-20 h-screen w-full object-cover"
        />
      </div>

      <div className="w-100% h-screen  flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-white text-5xl md:text-6xl z-10  font-bold">
          I am Arinji
        </h1>
        <span className="text-white text-2xl md:text-3xl z-10">
          A{" "}
          <span className="">
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Creator",
                1000,
                "Designer",
                1000,
                "Dreamer",
                1000,
              ]}
              speed={20} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
              className="text-green-400 w-20 bg-green"
              deletionSpeed={20}
              cursor={false}
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
