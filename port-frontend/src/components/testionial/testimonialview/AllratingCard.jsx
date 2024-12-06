// npm install --save react-card-flip
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactCardFlip from "react-card-flip";
import { FaArrowsRotate } from "react-icons/fa6";
import maleUser from "../../../assets/maleUser.png";
import femaleUser from "../../../assets/femaleUser.png";

const AllratingCard = ({
  src,
  service,
  salutation,
  name,
  occupation,
  ratingValue,
  description,
}) => {
  const image = !src
    ? salutation === "Mr."
      ? maleUser
      : salutation === "Mrs."
      ? femaleUser
      : ""
    : src;

  // State to manage flip
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle click to toggle flip
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front Side */}
        <div className="w-full h-[375px] flex flex-col items-center justify-between p-5 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne rounded-xl group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-auto flex flex-col gap-4 items-center justify-start">
            <div
              className={`w-[150px] h-[150px] rounded-full overflow-hidden flex flex-col items-center justify-center shadow-shadowOne group-hover:scale-110 duration-300 cursor-pointe ${
                !src ? "bg-black bg-opacity-15" : " "
              }`}
            >
              <img
                src={image}
                alt=""
                className="w-[80%] h-[80%] object-cover"
              />
            </div>

            <div className="w-full flex flex-col items-center justify-center border-b-[1px] border-highlightText">
              <p className="text-lightText">
                <span>{salutation} </span>
                {name}
              </p>
              <p className="italic">{occupation}</p>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <ReactStars
                count={10}
                value={ratingValue}
                size={30}
                activeColor="rgb(103 232 249)"
                edit={false}
                isHalf={true}
              />
            </div>
          </div>
          <button
            onClick={handleClick}
            className="p-5 rounded-full bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne flex items-center justify-center text-xl hover:text-highlightText"
          >
            <FaArrowsRotate />
          </button>
        </div>

        {/* Back Side */}
        <div className="w-full h-[350px] flex flex-col items-center justify-between p-5 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne rounded-xl group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
            <p className="text-highlightText italic">{service}</p>
            <div className="h-52 text-left overflow-y-hidden scrollbar-thin group-hover:overflow-y-auto relative">
              <p className="text-base">{description}</p>
              <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-bodyColor to-transparent pointer-events-none group-hover:hidden"></div>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="p-5 rounded-full bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne flex items-center justify-center text-xl hover:text-highlightText"
          >
            <FaArrowsRotate />
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default AllratingCard;
