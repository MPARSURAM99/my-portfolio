import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { BsProjectorFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";
export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    icon: <FaHome />,
    link: "banner",
  },
  {
    _id: 1002,
    title: "Features",
    icon: <MdFeaturedPlayList />,
    link: "features",
  },

  {
    _id: 1004,
    title: "Resume",
    icon: <TbFileCv />,
    link: "resume",
  },
  {
    _id: 1003,
    title: "Projects",
    icon: <BsProjectorFill />,
    link: "projects",
  },
  {
    _id: 1005,
    title: "Testimonial",
    icon: <VscFeedback />,
    link: "testimonial",
  },
  {
    _id: 1006,
    title: "Contact",
    icon: <RiContactsFill />,
    link: "contact",
  },
];
