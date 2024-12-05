import React from "react";

const Content = ({ active, setActive }) => {
  return (
    <div>
      <ul className="w-full grid grid-cols-4 text-lightText ">
        <li
          className={`resumeLi ${active === "education" ? "activeResume" : ""}`}
          onClick={() => setActive("education")}
        >
          Educationn
        </li>
        <li
          className={`resumeLi ${active === "skill" ? "activeResume" : ""}`}
          onClick={() => setActive("skill")}
        >
          Professional Skill
        </li>
        <li
          className={`resumeLi ${active === "exprience" ? "activeResume" : ""}`}
          onClick={() => setActive("exprience")}
        >
          Exprience
        </li>
        <li
          className={`resumeLi ${
            active === "certification" ? "activeResume" : ""
          }`}
          onClick={() => setActive("certification")}
        >
          Certification
        </li>
      </ul>
    </div>
  );
};

export default Content;
