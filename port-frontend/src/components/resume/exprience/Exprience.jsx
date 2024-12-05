import React from "react";
import Title from "../../titles/Title";
import ExprienceCard from "../shared/Edu-ExpCard";
import { motion } from "framer-motion";
import projectOne from "../../../assets/projectOne.jpg";

const Exprience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-6"
    >
      <div>
        <Title title={"My Exprience"} />
      </div>

      <div className="flex flex-col gap-10 w-full border-l-[10px] border-l-black border-opacity-30">
        <ExprienceCard
          src={projectOne}
          instituationName={"Tech Mahindra"}
          city={"Balichandrapur"}
          district={"Jajpur"}
          state={"Odisha"}
          pinNo={"754205"}
          courseName={"Schooling"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />

        <ExprienceCard
          src={projectOne}
          instituationName={"Tech Mahindra"}
          city={"Balichandrapur"}
          district={"Jajpur"}
          state={"Odisha"}
          pinNo={"754205"}
          courseName={"Schooling"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />

        <ExprienceCard
          src={projectOne}
          instituationName={"Tech Mahindra"}
          city={"Balichandrapur"}
          district={"Jajpur"}
          state={"Odisha"}
          pinNo={"754205"}
          courseName={"Schooling"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />

        <ExprienceCard
          src={projectOne}
          instituationName={"Tech Mahindra"}
          city={"Balichandrapur"}
          district={"Jajpur"}
          state={"Odisha"}
          pinNo={"754205"}
          courseName={"Schooling"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />

        <ExprienceCard
          src={projectOne}
          instituationName={"Tech Mahindra"}
          city={"Balichandrapur"}
          district={"Jajpur"}
          state={"Odisha"}
          pinNo={"754205"}
          courseName={"Schooling"}
          admissionDate={"15-03-2001"}
          passoutDate={""}
        />
      </div>
    </motion.div>
  );
};

export default Exprience;
