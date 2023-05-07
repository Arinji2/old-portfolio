import React, { useState, useEffect, useRef } from "react";
import projectPic from "../assets/projects.png";
import InfoBot from "../assets/InfoBot.jpg";
import Artist from "../assets/Artist.jpg";
import Fusion from "../assets/FusionMania.png";

function Projects() {
  const [scrollY, setScrollY] = useState(window.pageYOffset - 2000);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const { top, left } = element.getBoundingClientRect();
    console.log(`Element position: (${left}, ${top})`);
    console.log(window.pageYOffset);
  }, []);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.pageYOffset - 2000);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-transparent">
      <div className="relative z-20 flex h-screen w-full flex-col items-center gap-20">
        <div className="z-0">
          <img
            src={projectPic}
            alt={"hero"}
            className="absolute left-0 z-0 h-[180vh] w-full object-cover md:h-full"
            /*style={{ transform: `translateY(${scrollY * 0.5}px)` }} */
            ref={elementRef}
          />
        </div>
        <h1 className="z-20 mt-10 text-4xl text-white" id="projects">
          My Projects
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
          <Card
            img={Artist}
            name="Artist Diaries"
            disc="Art Showcasing Reimagined"
            link="https://artist.arinji.me/"
            git="Art Showcasing Reimagined"
          />

          <Card
            img={Fusion}
            name="Fusion Mania"
            disc="RNG Game with Unique Avatars"
            link="https://fusion-mania.pages.dev/"
            git="https://github.com/Arinji2/Fusion-Mania"
          />
          <Card
            img={InfoBot}
            name="InfoBot"
            disc="One stop shop for all your Java Needs"
            link="https://infobot.tech/"
            git="https://github.com/Arinji2/LandingPage-InfoBot"
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
      className="h-[300px] w-[300px] scale-90 rounded-lg shadow-md shadow-black transition-all duration-300 ease-out hover:scale-100 hover:shadow-lg hover:shadow-black"
      style={{ overflow: "hidden" }}
    >
      <img
        className="absolute h-full w-full object-cover"
        src={img}
        style={{
          transform: `scale(${zoom})`,
          transition: "all ease-in-out 300ms",
        }}
      />
      <div className="absolute z-10 h-full w-full bg-black opacity-50 " />
      <div
        className="relative z-20 flex h-full w-full flex-col items-center justify-start gap-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="mt-10 text-center text-2xl text-yellow-400">{name}</h1>
        <p className="mt-10 text-center text-lg text-white">{disc}</p>
        <p
          className="absolute bottom-16 scale-90 rounded-lg border-2 border-yellow-900 bg-yellow-900 p-2 text-sm text-white transition-all duration-300 ease-in-out hover:scale-100 hover:cursor-pointer"
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          Click to Open
        </p>
        <p
          className="absolute bottom-5 scale-90 rounded-lg border-2 border-yellow-900 bg-yellow-900 p-2 text-sm text-white transition-all duration-300 ease-in-out hover:scale-100 hover:cursor-pointer"
          onClick={() => {
            window.open(git, "_blank");
          }}
        >
          Click to See Code
        </p>
      </div>
    </div>
  );
}

export default Projects;
