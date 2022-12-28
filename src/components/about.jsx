import React from "react";
import aboutPic from "../assets/about.png";
function About() {
  return (
    <div>
      <div className=" h-screen w-full z-30 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white z-30 text-center">About Me</h1>
      </div>
      <div className="bg-black h-[100vh] w-full flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-50% h-full">
          <img src={aboutPic} className="w-full h-full md:ml-5" />
        </div>

        <div
          className="md:w-[50%] h-full flex flex-col items-center justify-center gap-10 text-white text-xl md:text-2xl text-center"
          id="about"
        >
          <p>
            Name:<span className="text-yellow-500"> Arinjay Dhar</span>
          </p>
          <p>
            Age:<span className="text-yellow-500"> 15</span>
          </p>
          <p>
            Nationality:<span className="text-yellow-500"> American</span>
          </p>
          <p>
            Aim:<span className="text-yellow-500"> Work in Google</span>
          </p>
          <p>
            Work:<span className="text-yellow-500"> FrontEnd Developer</span>
          </p>
          <p>
            Mains:
            <span className="text-yellow-500"> React JS with Tailwind CSS</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
