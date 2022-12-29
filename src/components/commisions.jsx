import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
function Commissions() {
  return (
    <div className=" h-screen w-full  bg-black flex flex-col items-center justify-start text-white gap-10 relative mt-[80vh] md:mt-0 text-center">
      <h1 className="text-6xl" id="price">
        Want to Hire Me?
      </h1>
      <p>Feel free to Mail me.</p>
      <a
        className="border-2 border-yellow-700 bg-yellow-700 p-2 rounded-lg scale-90 hover:scale-100 transition-all ease-in-out duration-300"
        href="mailTo:arinjaydhar205@gmail.com"
      >
        Click to Mail
      </a>
      <h1 className="text-6xl" id="socials">
        Check out my Socials
      </h1>

      <div className="flex flex-row flex-wrap items-center justify-evenly text-3xl w-screen">
        <a href="https://github.com/Arinji2/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/34arinji/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://discordapp.com/users/890486507872342027">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href="mailTo:arinjaydhar205@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="bg-blue-800  h-32 absolute bottom-0 w-full flex flex-row items-center justify-center text-center">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> Copyright Arinji. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Commissions;
