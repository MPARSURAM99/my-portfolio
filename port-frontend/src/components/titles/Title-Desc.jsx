import React from "react";

const TitleDesc = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <h5 className="text-left text-xs mdl:text-sm uppercase text-highlightText tracking-wide">
        {title}
      </h5>
      <h1 className="text-left text-lg mdl:text-3xl text-lightText font-titleFont font-bold">
        {description}
      </h1>
    </div>
  );
};

export default TitleDesc;
