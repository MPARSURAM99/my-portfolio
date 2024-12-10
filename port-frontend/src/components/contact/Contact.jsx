import React from "react";
import ContactImage from "./ContactImage";
import ContactForm from "./ContactForm";
import TitleDesc from "../titles/Title-Desc";

const contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-auto py-14 px-10 flex flex-col gap-6 border-b-[1px] border-b-highlightText"
    >
      <div>
        <TitleDesc title={"Contact Me"} description={"You can contact me"} />
      </div>
      <div className="w-full h-full flex items-start justify-between gap-10">
        <div className="w-2/3 h-full flex-1 flex-col items-center justify-center">
          <ContactImage />
        </div>
        <div className="w-full h-full flex-1 flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default contact;
