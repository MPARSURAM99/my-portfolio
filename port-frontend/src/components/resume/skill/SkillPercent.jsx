import React from "react";
import SkillBar from "./SkillBar";

const SkillPercent = () => {
  return (
    <div className="flex flex-col lgl:flex-row w-full gap-20 items-start justify-center">
      {/* Main Skill */}
      <div className="w-full lgl:w-1/2 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-lightText">Main Skil</h1>
        <div className="w-full flex flex-col gap-4">
          <SkillBar skillName={"HTMl"} skillPercent={90} />
          <SkillBar skillName={"HTMl"} skillPercent={70} />
          <SkillBar skillName={"HTMl"} skillPercent={56} />
          <SkillBar skillName={"HTMl"} skillPercent={30} />
          <SkillBar skillName={"HTMl"} skillPercent={99} />
        </div>
      </div>

      {/* Soft Skill */}
      <div className="w-full lgl:w-1/2 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-lightText">Soft Skill</h1>
        <div className="w-full flex flex-col gap-4">
          <SkillBar skillName={"MS xl"} skillPercent={75} />
          <SkillBar skillName={"HTMl"} skillPercent={56} />
        </div>
      </div>
    </div>
  );
};

export default SkillPercent;
