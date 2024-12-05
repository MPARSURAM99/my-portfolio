import React from "react";
import Title from "../../titles/Title";
import SkillPercent from "./SkillPercent";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-6"
    >
      <div>
        <Title title={"My Skills"} />
      </div>

      <div className="w-full">
        <SkillPercent />
      </div>
    </motion.div>
  );
};

export default Skill;
