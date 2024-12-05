import React from "react";
import Title from "../../titles/Title";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import testimonialOne from "../../../assets/testimonialOne.png";

const RenderTestimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div>
        <Title title={"What client say about me"} />
      </div>
      <div className="w-full mx-auto">
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
    </div>
  );
};

export default RenderTestimonial;
