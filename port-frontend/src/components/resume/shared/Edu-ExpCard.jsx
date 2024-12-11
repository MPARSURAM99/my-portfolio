import React from "react";

const EducationCard = ({
  src,
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
      {/* Left/Top Style div */}
      <div className="w-10 h-[10px] bg-opacity-30 bg-black flex items-center justify-center relative">
        <span className="absolute flex justify-center items-center h-[20px] w-[20px] -left-[15px] rounded-full bg-black bg-opacity-60 border-[1px] border-black">
          <span
            className={`w-[60%] h-[60%] rounded-full transition-all duration-500 ${
              passoutDate ? "bg-highlightText" : "bg-highlightText animate-grow"
            }`}
          ></span>
        </span>
      </div>

      {/* Right/Lower Content div */}
      <div className="w-full h-auto py-10 px-10 flex flex-col gap-4 justify-between lg:flex-row lg:gap-0 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne rounded-lg border-[1px] border-transparent">
        <div className="flex flex-col items-center justify-center w-full sml:w[70%] md:w[40%] xl:w-[30%] h-[150px] sml:h-[200px] xl:h-[150px] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt="src"
          />
        </div>
        <div className="flex flex-col gap-1 w-full lg:pl-10 justify-start items-start">
          <h1 className="text-highlightText xl:text-xl text-left">
            {instituationName}
          </h1>
          <p className="italic text-left">
            <span>{city}</span>
            {", "}
            <span>{district}</span>
            {", "}
            <span>{state}</span>, <span>{pinNo}</span>
          </p>
          <p className="text-lightText text-left">{courseName}</p>
          <p className="text-left">
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
