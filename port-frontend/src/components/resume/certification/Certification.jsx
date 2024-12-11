import React from "react";
import CertificationCard from "../certification/CertificationCard";
import projectOne from "../../../assets/projectOne.jpg";
import Title from "../../titles/Title";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-6"
    >
      <div>
        <Title title={"My Certification"} />
      </div>

      <div className="grid mdl:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-10">
        <CertificationCard
          title={"MERN Stack Completion"}
          description={
            "This is the certificate of mern stack course completion from udemyk"
          }
          src={projectOne}
        />

        <CertificationCard
          title={"MERN Stack Completion"}
          description={
            "This is the certificate of mern stack course completion from udemyk"
          }
          src={projectOne}
        />

        <CertificationCard
          title={"MERN Stack Completion"}
          description={
            "This is the certificate of mern stack course completion from udemyk"
          }
          src={projectOne}
        />

        <CertificationCard
          title={"MERN Stack Completion"}
          description={
            "This is the certificate of mern stack course completion from udemyk"
          }
          src={projectOne}
        />

        <CertificationCard
          title={"MERN Stack Completion"}
          description={
            "This is the certificate of mern stack course completion from udemyk"
          }
          src={projectOne}
        />
      </div>
    </motion.div>
  );
};

export default Certification;
