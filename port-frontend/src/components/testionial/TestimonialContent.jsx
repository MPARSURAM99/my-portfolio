import React from "react";

const TestimonialContent = ({ active, setActive }) => {
  return (
    <div className="w-full items-center">
      <ul className="w-full flex flex-row items-center justify-center gap-5">
        <li
          className={`resumeLi ${
            active === "testimonial" ? "activeResume" : ""
          }`}
          onClick={() => setActive("testimonial")}
        >
          Testimonials
        </li>
        <li
          className={`resumeLi ${active === "feedback" ? "activeResume" : ""}`}
          onClick={() => setActive("feedback")}
        >
          Share your Feedback
        </li>
      </ul>
    </div>
  );
};

export default TestimonialContent;
