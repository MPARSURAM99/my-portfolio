import React from "react";
import logo from "../../assets/Logo.png";
import { navLinksdata } from "../../constants/constants";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-between items-center bg-transparent shadow-shadowOne top-0 fixed z-50 pointer-events-none">
      <div className="w-full h-20 px-5 py-10 flex justify-between items-center border-b-[1.5px] border-b-highlightText left-0 bg-navColor/80 backdrop-blur-sm shadow-shadowOne pointer-events-auto">
        <div className="pl-4 mx-0">
          <img src={logo} alt="Logo" />
        </div>

        <div></div>

        <div>
          <ul className="hidden lgl:inline-flex items-center gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="text-base font-medium text-lightText tracking-wide cursor-pointer hover:text-highlightText duration-300"
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <ul className="w-[90%] h-auto py-4 mb-5 rounded-3xl bg-navColor/10 backdrop-blur-sm pointer-events-auto lgl:hidden flex items-center justify-evenly">
          {navLinksdata.map(({ _id, icon, link }) => (
            <li
              key={_id}
              className="text-lightText text-xl cursor-pointer hover:text-highlightText duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
