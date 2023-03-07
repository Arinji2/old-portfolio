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
    <div className=" relative mt-[80vh]  flex h-screen w-full flex-col items-center justify-start gap-10 bg-black text-center text-white md:mt-0">
      <h1 className="text-6xl" id="price">
        Want to Hire Me?
      </h1>
      <p>Feel free to Mail me.</p>
      <a
        className="scale-90 rounded-lg border-2 border-yellow-700 bg-yellow-700 p-2 transition-all duration-300 ease-in-out hover:scale-100"
        href="mailTo:arinjaydhar205@gmail.com"
      >
        Click to Mail
      </a>
      <h1 className="text-6xl" id="socials">
        Check out my Socials
      </h1>

      <div className="flex w-full flex-row flex-wrap items-center justify-evenly text-3xl">
        <a href="https://github.com/Arinji2/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/arinjii/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://discordapp.com/users/890486507872342027">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href="mailTo:arinjaydhar205@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="absolute  bottom-0 flex h-32 w-full flex-row items-center justify-center bg-blue-800 text-center">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> Copyright Arinji. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Commissions;
