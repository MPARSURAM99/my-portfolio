import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-auto py-14 px-10 flex items-start justify-center gap-6 bg-navColor border-b-[1px] border-b-grayText">
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <h1 className="text-lightText">Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d239117.7497839624!2d85.90542302812496!3d20.538388784126514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDM1JzU5LjciTiA4NsKwMTUnMTQuMiJF!5e0!3m2!1sen!2sin!4v1733741002541!5m2!1sen!2sin"
          className="w-[60%] h-full rounded-xl" // Corrected style to an object
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map" // Added title for accessibility
        ></iframe>
      </div>
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <h1 className="text-lightText">Quick Links</h1>
        <ul className="flex flex-col items-start">
          <li>Home</li>
          <li>Features</li>
          <li>Resume</li>
          <li>Project</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <h1 className="text-lightText">Resources</h1>
        <ul className="flex flex-col items-start">
          <li>Download Resume</li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <h1 className="text-lightText">Supports</h1>
        <ul className="flex flex-col items-start">
          <li>Write Feedback</li>
          <li>View all feedback</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
