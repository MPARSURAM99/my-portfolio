import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { IoIosArrowDropupCircle } from "react-icons/io";

import Title from "../titles/Title";
import Summery from "./Summery";
import Content from "./Content";
import Education from "./Education";
import Skill from "./Skill";
import Exprience from "./Exprience";
import Certification from "./Certification";

const Resume = () => {
  const [active, setActive] = useState("education");

  const renderResumeComponent = () => {
    switch (active) {
      case "education":
        return <Education />;
      case "skill":
        return <Skill />;
      case "exprience":
        return <Exprience />;
      case "certification":
        return <Certification />;
      default:
        return <Education />;
    }
  };
  return (
    <section
      id="resume"
      className="w-full h-auto py-14 px-10 flex flex-col gap-6 border-b-[1px] border-b-black"
    >
      <div>
        <Title
          title={"My Resume"}
          description={"Highlights of My Professional Evolution"}
        />
      </div>
      <div>
        <Summery />
      </div>

      <div>
        <Content active={active} setActive={setActive} />
      </div>

      <div>{renderResumeComponent()}</div>

      <div className=" flex items-center justify-center pt-5">
        <Link
          to={"resume"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          <IoIosArrowDropupCircle className="text-6xl text-lightText cursor-pointer hover:text-highlightText" />
        </Link>
      </div>
    </section>
  );
};

export default Resume;
