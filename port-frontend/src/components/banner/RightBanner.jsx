import React from "react";
import bannerImage from "../../assets/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-full flex items-center justify-center lgl:justify-end relative">
      <img src={bannerImage} alt="Images" className="w-[70%] h-[80%] z-10" />

      <div className="absolute bottom-0 w-[80%] h-[65%] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center shadow-shadowOne border-[1px] border-b-transparent border-highlightText"></div>
    </div>
  );
};

export default RightBanner;
