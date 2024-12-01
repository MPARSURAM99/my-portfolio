import React from "react";
import UpperBanner from "./UpperBanner";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="banner"
      className="w-full h-auto pt-20 px-10 flex flex-col gap-6 border-b-[1px] border-b-black"
    >
      <div className="w-full">
        <UpperBanner />
      </div>
      <div className="w-full flex items-center ">
        <div className="w-1/2">
          <LeftBanner />
        </div>
        <div className="w-1/2">
          <RightBanner />
        </div>
      </div>
    </section>
  );
};

export default Banner;
