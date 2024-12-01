import React from "react";

const ResumeTitle = ({ title }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-lightText text-xl font-bold">{title}</h1>
    </div>
  );
};

export default ResumeTitle;
