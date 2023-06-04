import React from "react";
import aboutPic from "../assets/about.png";
function About() {
  return (
    <div>
      <div className=" relative z-40 flex h-screen w-full flex-col items-center justify-center bg-black">
        <h1 className="z-30 text-center text-4xl text-white">About Me</h1>
      </div>
      <div className="flex h-[140vh] w-full flex-col items-end justify-between bg-black md:h-[100vh] md:flex-row">
        <div className="md:w-50% h-full">
          <img src={aboutPic} className="h-full w-full md:ml-5" />
        </div>

        <div
          className="flex h-full flex-col items-center justify-center gap-10 text-center text-xl text-white md:w-[50%] md:items-start md:text-2xl"
          id="about"
        >
          <p>
            Name:<span className="text-yellow-500"> Arinjay Dhar</span>
          </p>
          <p>
            Age:<span className="text-yellow-500"> 16</span>
          </p>
          <p>
            Nationality:<span className="text-yellow-500"> American</span>
          </p>
          <p>
            Aim:
            <span className="text-yellow-500"> To be a Frontend Developer</span>
          </p>

          <p>
            Tech Stack:
            <span className="text-yellow-500">
              {" "}
              Next JS with Tailwind CSS and Supabase
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
