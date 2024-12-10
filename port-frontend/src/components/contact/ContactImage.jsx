import React from "react";
import contactImage from "../../assets/contact.webp";
import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitterx.svg";

const ContactImage = () => {
  return (
    <div className="w-full h-full flex-1 flex-col items-center justify-start p-10 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne rounded-xl">
      <div className="w-full mb-4">
        <img
          src={contactImage}
          alt=""
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>
      <div className="w-full flex flex-col gap-6 items-start justify-start">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl text-lightText">Mr. Parsuram Maharana</h1>
          <p className="text-highlightText italic">
            Professional Software Engineer
          </p>
        </div>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat
          totam quo, laborum a porro eius magnam, commodi rerum consequuntur
          expedita consectetur consequatur et odit saepe sapiente. Eveniet,
          delectus? Delectus!
        </p>
        <p className="text-left">
          Address: Lalitagiri, Cuttack, Odisha, India, 754205
        </p>
        <div className="text-left">
          <p>Phone : +91 7326899101</p>
          <p>Email : mparsuram99@gmail.com</p>
        </div>
        <div className="flex gap-5">
          <span className="bannerIcon">
            <img src={linkedIn} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={github} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={gmail} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={instagram} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={facebook} alt="" />
          </span>
          <span className="bannerIcon">
            <img src={twitter} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactImage;
