import React from "react";
import { useState } from "react";
import AllratingCard from "./AllratingCard";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import testimonialOne from "../../../assets/testimonialOne.png";

const Allrating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDiv = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col w-full gap-6 mt-10">
      <button onClick={toggleDiv} className="resumeLi">
        View All Ratings
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex flex-col items-center justify-center`}
      >
        <div
          className={` w-full h-auto grid grid-cols-3 gap-20 items-center justify-center`}
        >
          <div>
            <AllratingCard
              src={""}
              salutation={"Mrs."}
              name={"Rojalin Shaw"}
              occupation={"Junior Engineer"}
              service={"Health care app"}
              ratingValue={9.5}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!"
              }
            />
          </div>
          <div>
            <AllratingCard
              src={""}
              salutation={"Mr."}
              name={"Rashmiranjan Prusty"}
              occupation={"Team Leader"}
              service={"Portfolio website"}
              ratingValue={9}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!"
              }
            />
          </div>
          <div>
            <AllratingCard
              src={testimonialOne}
              salutation={"Mrs."}
              name={"Abhipsa Thakur"}
              occupation={"Engineer"}
              service={"Database management"}
              ratingValue={101}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!"
              }
            />
          </div>
          <div>
            <AllratingCard
              src={testimonialOne}
              salutation={"Mr."}
              name={"Parsuram Maharana"}
              occupation={"Senior Manager"}
              service={"Android app"}
              ratingValue={9}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!"
              }
            />
          </div>
        </div>
        <div className=" flex items-center justify-center pt-5">
          <Link
            to={"testimonial"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <MdKeyboardDoubleArrowUp className="text-xl text-lightText cursor-pointer hover:text-highlightText" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Allrating;
