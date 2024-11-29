import React from "react";

// npm i react-simple-typewriter
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "am a Full-Stack Web Developer.",
      "Build Scalable Web Applications.",
      "Design User-Friendly Interfaces.",
      "Develop RESTful APIs.",
      "Solve Real-World Problems.",
      "Transform Ideas Into Reality.",
      "Build Mobile-Responsive Websites.",
      "am a Curious Learner in Tech.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col gap-5 items-start px-10">
      <h1 className="text-6xl font-bold text-lightText">
        Hi, I'm <span className="text-highlightText">M.Parsuram</span>
      </h1>
      <h2 className="text-3xl font-medium">
        <span className="text-highlightText text-6xl font-bold">I</span>{" "}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 text-transparent bg-clip-text">
          {text}
        </span>
        <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor="rgb(219 39 119)"
        />
      </h2>
      <p className="text-base leading-6 tracking-wide text-left text-grayText">
        Thank you for visiting! Here, you’ll find insights into my journey,
        projects I’ve worked on, and the skills I bring to the table. Feel free
        to explore, and don’t hesitate to reach out—I’d love to connect with
        you!"
      </p>

      <h2 className="text-base font-bodyFont leading-6 tracking-wide text-left">
        Find me in
      </h2>

      <div className="flex gap-4">
        <span className="bannerIcon">
          <SiLinkedin />
        </span>
        <span className="bannerIcon">
          <FaGithub />
        </span>
        <span className="bannerIcon">
          <MdOutlineAttachEmail />
        </span>
        <span className="bannerIcon">
          <FiInstagram />
        </span>
        <span className="bannerIcon">
          <ImFacebook2 />
        </span>
        <span className="bannerIcon">
          <FaSquareXTwitter />
        </span>
      </div>
    </div>
  );
};

export default LeftBanner;
