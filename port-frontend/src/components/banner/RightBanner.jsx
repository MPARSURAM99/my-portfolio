import React from "react";
import bannerImage from "../../assets/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-full flex items-center justify-end relative">
      <img
        src={bannerImage}
        alt="Images"
        className="w-[450px] h-[550px] z-10"
      />

      <div className="absolute bottom-0 w-[500px] h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center shadow-shadowOne border-[1px] border-b-transparent border-highlightText"></div>
    </div>
  );
};

export default RightBanner;
