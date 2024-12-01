import React from "react";

// npm i react-simple-typewriter
import { useTypewriter, Cursor } from "react-simple-typewriter";

import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitterx.svg";

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
    <div className="flex flex-col gap-5 items-start">
      <h1 className="text-6xl font-bold text-lightText font-titleFont">
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
      <p className="text-base leading-6 tracking-wide text-justify text-grayText">
        Thank you for visiting! Here, you’ll find insights into my journey,
        projects I’ve worked on, and the skills I bring to the table. Feel free
        to explore, and don’t hesitate to reach out—I’d love to connect with
        you!"
      </p>

      <div className="flex flex-col gap-2">
        <h2 className="text-base font-bodyFont text-highlightText leading-6 tracking-wide text-left">
          Connect with me
        </h2>

        <div className="flex gap-5">
          <span className="bannerIcon">
            <img src={linkedIn} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={github} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={gmail} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={instagram} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={facebook} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={twitter} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
