import React, { useState, useEffect } from "react";
import projectPic from "../assets/projects.png";
import InfoBot from "../assets/InfoBot.jpg";
import Library from "../assets/Library.jpg";
import ToDo from "../assets/ToDo.jpg";

function Projects() {
  const [scrollY, setScrollY] = useState(window.pageYOffset - 9000);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.pageYOffset - 9000); // Subtract the height of the other parallax element from the current scroll position
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white  w-full">
      <img
        src={projectPic}
        className="w-full md:h-[400vh] h-[200vh] object-cover object-center absolute -z-10"
        id="pic"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="bg-black opacity-50 w-full md:h-[400vh] h-[200vh] absolute z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div className="w-full h-screen flex flex-col items-center z-20 absolute gap-20">
        <h1 className="text-white text-4xl mt-10" id="projects">
          My Projects
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
          <Card
            img={InfoBot}
            name="InfoBot"
            disc="One stop shop for all your Java Needs"
            link="https://infobot.tech/"
            git="https://github.com/Arinji2/LandingPage-InfoBot"
          />
          <Card
            img={Library}
            name="Library"
            disc="A highly advanced Library tool"
            link=""
          />
          <Card
            img={ToDo}
            name="To Do List"
            disc="Modern take on To Do Lists"
            link=""
          />
        </div>
      </div>
    </div>
  );
}

function Card({ img, name, disc, link, git }) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState("50% 50%");

  const handleMouseEnter = () => {
    setZoom(1.5);
    setPosition("30% 30%");
  };

  const handleMouseLeave = () => {
    setZoom(1);
    setPosition("50% 50%");
  };
  return (
    <div
      className="h-[300px] w-[300px] shadow-md shadow-black scale-90 hover:scale-100 hover:shadow-lg hover:shadow-black transition-all ease-out duration-300 rounded-lg"
      style={{ overflow: "hidden" }}
    >
      <img
        className="w-full h-full object-cover absolute"
        src={img}
        style={{
          transform: `scale(${zoom})`,
          transition: "all ease-in-out 300ms",
        }}
      />
      <div className="bg-black w-full h-full opacity-50 z-10 absolute " />
      <div
        className="w-full h-full z-20 relative flex flex-col items-center justify-start gap-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-yellow-400 text-2xl mt-10 text-center">{name}</h1>
        <p className="text-white text-lg mt-10 text-center">{disc}</p>
        <p
          className="border-2 border-yellow-900 bg-yellow-900 text-white p-2 rounded-lg absolute bottom-16 scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer text-sm"
          onClick={() => {
            window.location.href = link;
          }}
        >
          Click to Open
        </p>
        <p
          className="border-2 border-yellow-900 bg-yellow-900 text-white p-2 rounded-lg absolute bottom-5 scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer text-sm"
          onClick={() => {
            window.location.href = git;
          }}
        >
          Click to See Code
        </p>
      </div>
    </div>
  );
}

export default Projects;
