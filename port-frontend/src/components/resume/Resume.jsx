import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import TitleDesc from "../titles/Title-Desc";
import Summery from "./shared/Summery";
import Content from "./shared/ResumeContent";
import Education from "./education/Education";
import Skill from "./skill/Skill";
import Exprience from "./exprience/Exprience";
import Certification from "./certification/Certification";

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
        <TitleDesc
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
          <MdKeyboardDoubleArrowUp className="text-xl text-lightText cursor-pointer hover:text-highlightText" />
        </Link>
      </div>
    </section>
  );
};

export default Resume;
