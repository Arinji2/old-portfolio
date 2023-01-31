import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/hero.png";

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
    <React.Fragment>
      <div
        className="absolute z-10 h-screen w-full bg-black opacity-50"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      <div
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        className="-z-0"
      >
        <img
          src={hero}
          alt={"hero"}
          className="absolute -z-20 h-[100vh] w-full object-cover"
        />
      </div>

      <div className="w-100% flex  h-screen flex-col items-center justify-center gap-10 text-center">
        <h1
          className="z-10 text-5xl font-bold text-white  md:text-6xl"
          id="arinji"
        >
          I am Arinji
        </h1>
        <span className="z-10 text-2xl text-white md:text-3xl">
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
              className="bg-green w-20 text-green-400"
              deletionSpeed={20}
              cursor={false}
            />
          </span>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Hero;
