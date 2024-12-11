import React from "react";
import TitleDesc from "../titles/Title-Desc";
import ProjectsCard from "./ProjectsCard";
import projectOne from "../../assets/projectOne.jpg";
import projectTwo from "../../assets/projectTwo.jpg";
import projectThree from "../../assets/projectThree.jpeg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-auto py-14 px-5 xl:px-10 flex flex-col gap-6 border-b-[1px] border-b-black"
    >
      <div>
        <TitleDesc
          title={"PROJECTS"}
          description={"Passion Projects That Showcase My Expertise"}
        />
      </div>
      <div className="grid mdl:grid-cols-2 xl:grid-cols-3 gap-20 mdl:gap-10">
        <ProjectsCard
          title={"Full stack website e-Commerse app"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          src={projectOne}
        />

        <ProjectsCard
          title={"Full stack website"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          src={projectTwo}
        />

        <ProjectsCard
          title={"Full stack website"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          src={projectThree}
        />

        <ProjectsCard
          title={"Full stack website"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          src={projectOne}
        />

        <ProjectsCard
          title={"Full stack website"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          src={projectTwo}
        />

        <ProjectsCard
          title={"Full stack website"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          src={projectThree}
        />

        <ProjectsCard
          title={"Full stack website"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
