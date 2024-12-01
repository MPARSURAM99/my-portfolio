import React from "react";
import ResumeTitle from "./ResumeTitle";
import ExprienceCard from "./Edu-ExpCard";

const Exprience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div>
        <ResumeTitle title={"My Exprience"} />
      </div>

      <div className="flex flex-col gap-10 w-full border-l-[10px] border-l-black border-opacity-3">
        <ExprienceCard
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
    </div>
  );
};

export default Exprience;
