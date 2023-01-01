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
        className="bg-black h-screen w-full z-40 flex flex-col items-center justify-center relative"
        id="lang"
      >
        <h1 className="text-4xl text-white z-30 text-center">
          A list of Frameworks and Libraries Used by Me
        </h1>
      </div>
      <div className="bg-blue-800 h-[120vh] md:h-[80vh] w-full flex flex-col items-center justify-start text-white gap-14">
        <h1 className="text-4xl text-white mt-10 z-20">React</h1>

        <p className="z-20 text-center">
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces.
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-5 z-20">
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-blue-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Lines Written</h1>
            <p>3000+</p>
          </div>
          <FontAwesomeIcon icon={faReact} className="text-8xl" />
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-blue-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Projects Made</h1>
            <p>10+</p>
          </div>
        </div>
      </div>
      <div className="bg-cyan-700 h-[120vh] md:h-[80vh] w-full flex flex-col items-center justify-start text-white gap-14">
        <h1 className="text-4xl text-white mt-10 z-20">Tailwind CSS</h1>

        <p className="z-20 text-center">
          Tailwind CSS is a utility-based CSS framework designed to make it easy
          to build web applications with a consistent and customizable look and
          feel.
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-5 z-20">
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-cyan-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Lines Written</h1>
            <p>2000+</p>
          </div>
          <img src={TailwindPic} className="text-9xl" />
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-cyan-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Projects Made</h1>
            <p>7+</p>
          </div>
        </div>
      </div>
      <div className="bg-orange-700 h-[120vh] md:h-[80vh] w-full flex flex-col items-center justify-start text-white gap-14">
        <h1 className="text-4xl text-white mt-10 z-20">Javascript</h1>

        <p className="z-20 text-center">
          JavaScript is a cross-platform, object-oriented scripting language
          used to make webpages interactive.
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-5 z-20">
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-orange-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Lines Written</h1>
            <p>1500+</p>
          </div>
          <FontAwesomeIcon icon={faJs} className="text-8xl" />
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-orange-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Projects Made</h1>
            <p>3+</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-700 h-[120vh] md:h-[80vh] w-full flex flex-col items-center justify-start text-white gap-14">
        <h1 className="text-4xl text-white mt-10 z-20">Java</h1>

        <p className="z-20 text-center">
          Java is a class-based object-oriented simple programming language.
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-5 z-20">
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-yellow-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Lines Written</h1>
            <p>800+</p>
          </div>
          <FontAwesomeIcon icon={faJava} className="text-8xl" />
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-yellow-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Projects Made</h1>
            <p>1+</p>
          </div>
        </div>
      </div>
      <div className="bg-green-700 h-[120vh] md:h-[80vh] w-full flex flex-col items-center justify-start text-white gap-14">
        <h1 className="text-4xl text-white mt-10 z-20">HTML</h1>

        <p className="z-20 text-center">
          HTML is a markup language used by the browser to manipulate text,
          images, and other content, in order to display it in the required
          format.
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-5 z-20">
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-green-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Lines Written</h1>
            <p>500+</p>
          </div>
          <FontAwesomeIcon icon={faHtml5} className="text-8xl" />
          <div className="w-[30vh] h-[30vh] shadow-md shadow-black bg-green-900 rounded-lg flex flex-col items-center justify-center text-white gap-5 scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-500">
            <h1 className="text-xl">Projects Made</h1>
            <p>1+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
