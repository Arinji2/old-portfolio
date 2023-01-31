import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import TailwindPic from "../assets/tailwindcss.svg";

function Language() {
  return (
    <div>
      <div
        className="relative z-40 flex h-screen w-full flex-col items-center justify-center bg-black"
        id="lang"
      >
        <h1 className="z-30 text-center text-4xl text-white">
          A list of Frameworks and Libraries Used by Me
        </h1>
      </div>
      <div className="flex h-[120vh] w-full flex-col items-center justify-start gap-14 bg-blue-800 text-white md:h-[80vh]">
        <h1 className="z-20 mt-10 text-4xl text-white">React</h1>

        <p className="z-20 text-center">
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces.
        </p>
        <div className="z-20 flex w-full flex-col items-center justify-evenly gap-5 md:flex-row">
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-blue-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Lines Written</h1>
            <p>3000+</p>
          </div>
          <FontAwesomeIcon icon={faReact} className="text-8xl" />
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-blue-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Projects Made</h1>
            <p>10+</p>
          </div>
        </div>
      </div>
      <div className="flex h-[120vh] w-full flex-col items-center justify-start gap-14 bg-cyan-700 text-white md:h-[80vh]">
        <h1 className="z-20 mt-10 text-4xl text-white">Tailwind CSS</h1>

        <p className="z-20 text-center">
          Tailwind CSS is a utility-based CSS framework designed to make it easy
          to build web applications with a consistent and customizable look and
          feel.
        </p>
        <div className="z-20 flex w-full flex-col items-center justify-evenly gap-5 md:flex-row">
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-cyan-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Lines Written</h1>
            <p>2000+</p>
          </div>
          <img src={TailwindPic} className="text-9xl" />
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-cyan-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Projects Made</h1>
            <p>7+</p>
          </div>
        </div>
      </div>
      <div className="flex h-[120vh] w-full flex-col items-center justify-start gap-14 bg-orange-700 text-white md:h-[80vh]">
        <h1 className="z-20 mt-10 text-4xl text-white">Javascript</h1>

        <p className="z-20 text-center">
          JavaScript is a cross-platform, object-oriented scripting language
          used to make webpages interactive.
        </p>
        <div className="z-20 flex w-full flex-col items-center justify-evenly gap-5 md:flex-row">
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-orange-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Lines Written</h1>
            <p>1500+</p>
          </div>
          <FontAwesomeIcon icon={faJs} className="text-8xl" />
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-orange-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Projects Made</h1>
            <p>3+</p>
          </div>
        </div>
      </div>
      <div className="flex h-[120vh] w-full flex-col items-center justify-start gap-14 bg-yellow-700 text-white md:h-[80vh]">
        <h1 className="z-20 mt-10 text-4xl text-white">Java</h1>

        <p className="z-20 text-center">
          Java is a class-based object-oriented simple programming language.
        </p>
        <div className="z-20 flex w-full flex-col items-center justify-evenly gap-5 md:flex-row">
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-yellow-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Lines Written</h1>
            <p>800+</p>
          </div>
          <FontAwesomeIcon icon={faJava} className="text-8xl" />
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-yellow-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Projects Made</h1>
            <p>1+</p>
          </div>
        </div>
      </div>
      <div className="flex h-[120vh] w-full flex-col items-center justify-start gap-14 bg-green-700 text-white md:h-[80vh]">
        <h1 className="z-20 mt-10 text-4xl text-white">HTML</h1>

        <p className="z-20 text-center">
          HTML is a markup language used by the browser to manipulate text,
          images, and other content, in order to display it in the required
          format.
        </p>
        <div className="z-20 flex w-full flex-col items-center justify-evenly gap-5 md:flex-row">
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-green-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Lines Written</h1>
            <p>500+</p>
          </div>
          <FontAwesomeIcon icon={faHtml5} className="text-8xl" />
          <div className="flex h-[30vh] w-[30vh] scale-90 flex-col items-center justify-center gap-5 rounded-lg bg-green-900 text-white shadow-md shadow-black transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer">
            <h1 className="text-xl">Projects Made</h1>
            <p>1+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
