import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Card = ({ title, description, icon }) => {
  return (
    <div className="w-full p-5 h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-all duration-500 group hover:-translate-y-5 border-[1px] border-transparent hover:border-highlightText">
      <div className="h-full w-full p-5 flex flex-col gap-4 overflow-y-hidden">
        <div className="text-3xl text-highlightText">
          {icon ? (
            <span>{icon}</span>
          ) : (
            <>
              <span>
                <GiHamburgerMenu />
              </span>
            </>
          )}
        </div>
        <h2 className="text-sm mdl:text-lg text-lightText border-b-[1px] border-b-highlightText">
          {title}
        </h2>
        <div className="h-52 text-left overflow-y-hidden scrollbar-thin group-hover:overflow-y-auto relative">
          <p>{description}</p>
          <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-bodyColor to-transparent pointer-events-none group-hover:hidden"></div>
        </div>
        <div className="text-highlightText text-3xl translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
          <HiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
