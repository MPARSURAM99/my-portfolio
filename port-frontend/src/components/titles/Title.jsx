import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-lightText text-sm mdl:text-xl font-bold">{title}</h1>
    </div>
  );
};

export default Title;
