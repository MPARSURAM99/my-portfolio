import React from "react";
import bannerImage from "../../assets/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <img
        src={bannerImage}
        alt="Images"
        className="w-[450px] h-[550px] z-10"
      />

      <div className="absolute bottom-0 w-[500px] h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center border-[1px] border-b-0 border-highlightText"></div>
    </div>
  );
};

export default RightBanner;
