import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
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
          <a href="#arinji">Arinji</a>
        </div>
        <div className="w-[70%]  flex flex-row items-center justify-end mr-5  text-xl gap-5">
          <ul className="inline">
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              <a href="#about">About</a>
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              <a href="#lang">Languages</a>
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              <a href="#projects">Projects</a>
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              <a href="#price">Commissions</a>
            </li>{" "}
            <li className="inline pr-2 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer border-r-2 border-white">
              <a href="#socials">Socials</a>
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
          <h1 className="w-full text-center">
            <a href="#arinji">Arinji</a>
          </h1>

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
                  <a href="#about">About</a>
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  <a href="#lang">Languages</a>
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  <a href="#projects">Projects</a>
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  <a href="#price">Commissions</a>
                </li>{" "}
                <li className=" mt-20 link link-underline link-underline-black transition-all ease-in-out duration-300 pb-2 hover:cursor-pointer ">
                  <a href="#socials">Socials</a>
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

export default Nav;
