import React, { useState } from "react";
import Title from "../../titles/Title";
import Slider from "react-slick";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import TestimonialCard from "./TestimonialCard";
import testimonialOne from "../../../assets/testimonialOne.png";
import Allrating from "./Allrating";

const PrevArrow = (props) => {
  const [clicked, setClicked] = useState(false);
  const { className, style, onClick } = props;

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick();
    setTimeout(() => setClicked(false), 200);
  };

  const arrowStyle = {
    ...style,
    display: "block",
    transition: "color ease",
    color: clicked ? "rgb(103 232 249)" : "gray",
  };

  return (
    <MdArrowBackIos
      className={`${className}`}
      style={arrowStyle}
      onClick={handleClick}
    />
  );
};

const NextArrow = (props) => {
  const [clicked, setClicked] = useState(false);
  const { className, style, onClick } = props;

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick();
    setTimeout(() => setClicked(false), 200);
  };

  const arrowStyle = {
    ...style,
    display: "block",
    transition: "color ease",
    color: clicked ? "rgb(103 232 249)" : "gray",
  };
  return (
    <MdArrowForwardIos
      className={`${className}`}
      style={arrowStyle}
      onClick={() => {
        if (onClick) onClick();
        handleClick();
      }}
    />
  );
};

const RenderTestimonial = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },

    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "5px",
                height: "5px",
                color: "blue",
                background: "rgb(103 232 249)",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "20px",
              }
            : {
                width: "5px",
                height: "5px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "20px",
              }
        }
      ></div>
    ),
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="xs:hidden lgl:block">
        <Title title={"What client say about me"} />
      </div>
      <div className="w-full mx-auto slider-container xs:hidden lgl:block">
        <Slider {...settings}>
          <div>
            <TestimonialCard
              src={testimonialOne}
              salutation={"Mr."}
              name={"Parsuram Maharana"}
              occupation={"Senior Manager"}
              service={"E-Commerse application"}
              ratingValue={9}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!"
              }
            />
          </div>
          <div>
            <TestimonialCard
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
            <TestimonialCard
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
            <TestimonialCard
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
            <TestimonialCard
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
          <div>
            <TestimonialCard
              src={testimonialOne}
              salutation={"Mr."}
              name={"Parsuram Maharana"}
              occupation={"Senior Manager"}
              service={"UI design"}
              ratingValue={9}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam quos excepturi magni, obcaecati tenetur autem illum ipsam quae laudantium sint doloremque? Libero corrupti hic magnam atque porro rem ea!"
              }
            />
          </div>
        </Slider>
      </div>
      <div className="w-full">
        <Allrating />
      </div>
    </div>
  );
};

export default RenderTestimonial;
