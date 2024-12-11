import React from "react";
import TitleDesc from "../titles/Title-Desc";
import TestimonialContent from "./TestimonialContent";
import { useState } from "react";
import RenderTestimonial from "./testimonialview/RenderTestimonial";
import FeedbackForm from "./feedback/FeedbackForm";

const Testimonial = () => {
  const [active, setActive] = useState("testimonial");

  const renderTestimonial = () => {
    switch (active) {
      case "testimonial":
        return <RenderTestimonial />;
      case "feedback":
        return <FeedbackForm />;
      default:
        return <RenderTestimonial />;
    }
  };
  return (
    <section
      id="testimonial"
      className="w-full h-auto py-14 px-5 xl:px-10 flex flex-col gap-6 border-b-[1px] border-b-black"
    >
      <div>
        <TitleDesc title={"Testimonial"} description={"What My Clients Say?"} />
      </div>
      <div>
        <TestimonialContent active={active} setActive={setActive} />
      </div>

      <div>{renderTestimonial()}</div>
    </section>
  );
};

export default Testimonial;
