import React from "react";
import logo from "../../assets/Logo.png";
import { navLinksdata } from "../../constants/constants";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <section className="w-full h-20 px-5 py-10 flex justify-between items-center border-b-[1.5px] border-b-highlightText left-0 bg-navColor z-50 shadow-shadowOne sticky top-0">
      <div className="pl-4 mx-0">
        <img src={logo} alt="Logo" />
      </div>

      <div className="pr-4">
        <ul className="flex items-center gap-10">
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
    </section>
  );
};

export default Navbar;
