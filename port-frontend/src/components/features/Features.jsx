import React from "react";
import Title from "../titles/Title";
import Card from "./FeaturesCard";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-auto py-14 px-10 flex flex-col gap-6 border-b-[1px] border-b-black"
    >
      <Title title={"Features"} description={"What I Do?"} />

      <div className="grid grid-cols-3 gap-20">
        <Card
          title={"Full stack Spring Boot application"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          title={"MERN stack application"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <Card
          title={"Android app development"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          title={"SEO"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          title={"Web hosting with AWS"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          title={"Web & App mentainance"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />

        <Card
          title={"SEO"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />

        <Card
          title={"SEO"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
      </div>
    </section>
  );
};

export default Features;
