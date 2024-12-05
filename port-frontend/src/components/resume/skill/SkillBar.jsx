import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ skillName, skillPercent }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-row items-center justify-between italic">
        <p className="text-lightText">{skillName}</p>
        <p className="text-highlightText">
          {skillPercent}
          {"%"}
        </p>
      </div>
      <div className="w-full h-2 rounded-lg bgOpacity relative overflow-x-hidden shadow-xl">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute h-full left-0 rounded-lg bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
          style={{ width: `${skillPercent}%` }}
        ></motion.span>
      </div>
    </div>
  );
};

export default SkillBar;
