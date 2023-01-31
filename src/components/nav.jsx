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
            ? "fixed top-0 z-50 hidden h-20 w-full flex-row bg-black text-white shadow-md shadow-black transition-all duration-300 ease-in-out md:flex"
            : "fixed top-0 z-50 hidden h-20 w-full flex-row bg-transparent text-white transition-all duration-300 ease-in-out md:flex"
        }
      >
        <div className="ml-5 flex w-[30%] flex-row items-center justify-start text-2xl">
          <a href="#arinji">Arinji</a>
        </div>
        <div className="mr-5  flex w-[70%] flex-row items-center justify-end  gap-5 text-xl">
          <ul className="inline">
            <li className="link link-underline link-underline-black inline border-r-2 border-white pr-2 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer">
              <a href="#about">About</a>
            </li>{" "}
            <li className="link link-underline link-underline-black inline border-r-2 border-white pr-2 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer">
              <a href="#lang">Languages</a>
            </li>{" "}
            <li className="link link-underline link-underline-black inline border-r-2 border-white pr-2 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer">
              <a href="#projects">Projects</a>
            </li>{" "}
            <li className="link link-underline link-underline-black inline border-r-2 border-white pr-2 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer">
              <a href="#price">Commissions</a>
            </li>{" "}
            <li className="link link-underline link-underline-black inline pr-2 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer ">
              <a href="#socials">Socials</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          scroll > 50 && nav !== true
            ? "fixed top-0 z-50 flex h-20 w-full flex-row bg-black text-white shadow-md shadow-black transition-all duration-300 ease-in-out md:hidden"
            : "fixed top-0 z-50 flex h-20 w-full flex-row bg-transparent text-white transition-all duration-300 ease-in-out md:hidden"
        }
      >
        <div className="z-10 flex w-full flex-row items-center justify-center text-2xl">
          <h1 className="w-full text-center">
            <a href="#arinji">Arinji</a>
          </h1>

          <FontAwesomeIcon
            icon={faBars}
            className="absolute left-10"
            onClick={() => {
              setNav(true);
            }}
          />
        </div>

        <div
          className={
            nav
              ? "absolute z-20 h-screen w-[90%] bg-black transition-all duration-300 ease-in-out"
              : "absolute  z-20 w-[0%] bg-black transition-all duration-300 ease-in-out"
          }
        >
          <div className="flex flex-row items-start justify-between">
            <div
              className={
                nav
                  ? "flex h-screen w-[70%] flex-col items-center justify-start "
                  : "invisible"
              }
            >
              <ul className="">
                <li className=" link link-underline link-underline-black mt-20 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer ">
                  <a href="#about">About</a>
                </li>{" "}
                <li className=" link link-underline link-underline-black mt-20 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer ">
                  <a href="#lang">Languages</a>
                </li>{" "}
                <li className=" link link-underline link-underline-black mt-20 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer ">
                  <a href="#projects">Projects</a>
                </li>{" "}
                <li className=" link link-underline link-underline-black mt-20 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer ">
                  <a href="#price">Commissions</a>
                </li>{" "}
                <li className=" link link-underline link-underline-black mt-20 pb-2 transition-all duration-300 ease-in-out hover:cursor-pointer ">
                  <a href="#socials">Socials</a>
                </li>
              </ul>
            </div>
            <div
              className={
                nav
                  ? "mr-10 mt-10 flex h-screen w-[30%] flex-col items-end justify-start text-2xl "
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
