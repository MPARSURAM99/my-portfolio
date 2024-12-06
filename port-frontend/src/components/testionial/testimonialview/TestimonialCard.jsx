// npm install react-rating-stars-component --save
import React from "react";
import ReactStars from "react-rating-stars-component";
import maleUser from "../../../assets/maleUser.png";
import femaleUser from "../../../assets/femaleUser.png";
import quote from "../../../assets/quote.png";

const TestimonialCard = ({
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

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95%] flex items-stretch justify-between gap-8 p-4">
        <div className="w-[45%] bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne p-5 rounded-xl flex flex-col gap-1 items-center justify-start">
          <div
            className={`w-full h-full flex flex-col items-center rounded-xl ${
              !src ? "bg-black bg-opacity-15" : " "
            }`}
          >
            <img
              className={`h-72 rounded-lg object-cover `}
              src={image}
              alt="testimonialOne"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center pt-2">
            <p className="text-sm text-highlightText">{service}</p>
            <h1 className="text-lightText text-lg">
              <span>{salutation} </span>
              {name}
            </h1>
            <p className="italic text-sm">{occupation}</p>
          </div>
        </div>

        {/* Right div */}
        <div className="w-full flex flex-col justify-between">
          {/* demo (takes half height) */}
          <div className="h-[40%] flex flex-col items-start rounded-xl">
            <img src={quote} alt="Quote Images" className="h-36" />
          </div>
          {/* Rating (takes half height) */}
          <div className="h-full flex flex-col gap-4 items-center justify-center bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne p-5 rounded-xl group">
            <div className="h-[40%] w-full flex flex-col items-center justify-center border-b-[1px] border-highlightText">
              <ReactStars
                count={10}
                value={ratingValue}
                size={30}
                activeColor="rgb(103 232 249)"
                edit={false}
                isHalf={true}
              />
            </div>
            <div className="h-32 w-full flex flex-col overflow-y-hidden scrollbar-thin group-hover:overflow-y-auto relative">
              <p className="text-left">{description}</p>
              <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-bodyColor to-transparent pointer-events-none group-hover:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
