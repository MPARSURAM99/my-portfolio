import React from "react";
import projectOne from "../../assets/projectOne.jpg";

const EducationCard = ({
  instituationName,
  city,
  district,
  state,
  pinNo,
  courseName,
  admissionDate,
  passoutDate,
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-center group">
      {/* Left Style div */}
      <div className="w-10 h-[10px] bg-opacity-30 bg-black flex items-center justify-center relative">
        <span className="absolute flex justify-center items-center h-[20px] w-[20px] -left-[15px] rounded-full bg-black bg-opacity-60 border-[1px] border-black">
          <span
            className={`w-[60%] h-[60%] rounded-full ${
              passoutDate ? "bg-highlightText" : "bg-transparent"
            }`}
          ></span>
        </span>
      </div>

      {/* Right Content div */}
      <div className="w-full h-auto py-10 px-10 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne rounded-lg border-[1px] border-transparent flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center w-1/4 h-[150px] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={projectOne}
            alt="src"
          />
        </div>
        <div className="flex flex-col gap-1 w-full pl-10 justify-start items-start">
          <h1 className="text-highlightText text-xl">{instituationName}</h1>
          <p className="italic">
            <span>{city}</span>
            {", "}
            <span>{district}</span>
            {", "}
            <span>{state}</span>, <span>{pinNo}</span>
          </p>
          <p className="text-lightText">{courseName}</p>
          <p>
            <span>{admissionDate}</span>
            {passoutDate ? " - " : " - Continuing......"}
            <span>{passoutDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
