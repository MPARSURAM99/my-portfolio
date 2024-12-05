import React from "react";
import Title from "../../titles/Title";
import EducationCard from "../shared/Edu-ExpCard";
import { motion } from "framer-motion";
import projectOne from "../../../assets/projectOne.jpg";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-6"
    >
      <div>
        <Title title={"My Education"} />
      </div>

      <div className="flex flex-col gap-10 w-full border-l-[10px] border-l-black border-opacity-30">
        <EducationCard
          src={projectOne}
          instituationName={"Saraswati Sishu Vidya Mandir"}
          city={"Balichandrapur"}
          district={"Jajpur"}
          state={"Odisha"}
          pinNo={"754205"}
          courseName={"Schooling"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />
        <EducationCard
          src={projectOne}
          instituationName={"Tetra Hedron Junior Science College"}
          city={"Tangi"}
          district={"Cuttack"}
          state={"Odisha"}
          courseName={"ISc"}
          pinNo={"754205"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />
        <EducationCard
          src={projectOne}
          instituationName={"SCB Medical College & Hospital"}
          city={"Cuttack"}
          district={"Cuttack"}
          state={"Odisha"}
          courseName={"DMLT"}
          pinNo={"754205"}
          admissionDate={"15-03-2001"}
          passoutDate={"15-03-2024"}
        />
        <EducationCard
          src={projectOne}
          instituationName={"Centurion University of Technology & Management"}
          city={"Bhubaneswar"}
          district={"Khurdha"}
          state={"Odisha"}
          courseName={"B.tech CSE"}
          pinNo={"754205"}
          admissionDate={"15-03-2001"}
          passoutDate={""}
        />
      </div>
    </motion.div>
  );
};

export default Education;
