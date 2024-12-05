import React from "react";

const TitleDesc = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <h3 className="text-sm uppercase font-light text-highlightText tracking-wide">
        {title}
      </h3>
      <h1 className="text-lightText text-xl font-titleFont font-bold capitalize">
        {description}
      </h1>
    </div>
  );
};

export default TitleDesc;
