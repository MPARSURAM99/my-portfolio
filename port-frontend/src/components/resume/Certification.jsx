import React from "react";
import CertificationCard from "./CertificationCard";
import projectOne from "../../assets/projectOne.jpg";
import ResumeTitle from "./ResumeTitle";

const Certification = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div>
        <ResumeTitle title={"My Certification"} />
      </div>

      <div className="grid grid-cols-3 gap-20">
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
    </div>
  );
};

export default Certification;
