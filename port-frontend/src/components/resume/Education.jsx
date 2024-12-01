import React from "react";
import ResumeTitle from "./ResumeTitle";
import EducationCard from "./Edu-ExpCard";

const Education = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div>
        <ResumeTitle title={"My Education"} />
      </div>

      <div className="flex flex-col gap-10 w-full border-l-[10px] border-l-black border-opacity-30">
        <EducationCard
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
    </div>
  );
};

export default Education;
