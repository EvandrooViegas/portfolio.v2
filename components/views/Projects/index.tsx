"use client";
import element from "@/public/elements/2.webp";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projects from "./data";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import SectionSubtitle from "@/components/SectionSubtitle";
export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Container className="gap-28 flex flex-col relative overflow-hidden">
      <Image
        alt="Element"
        className="absolute left-0 top-0 rotate-90 -translate-y-1/2 z-[-1]"
        width={800}
        src={element}
      />
        <SectionTitle  background className="w-full md:w-fit text-8xl font-black text-center">
          BEST OF MY PROJECTS
        </SectionTitle>
      <div>
        <AnimatedElement className="md:grid md:grid-cols-3 flex flex-col justify-between gap-12">
          {projects.map((project) => (
            <div className=" space-y-2 group p-5 border border-secondary/30" key={project.name}>
              <a href={project.website_url} target="_blank">
              <img
                alt="Project Image"
                src={`/projects/${project.image}`}
                className="aspect-video mb-4 object-cover transition-all cursor-pointer grayscale group-hover:grayscale-0 p-0 group-hover:p-1 border border-transparent group-hover:border-secondary/30"
              />
              </a>
              <span className="font-semibold text-3xl">{project.name}</span>
              <p className="text-zinc-500 text-lg ">{project.description}</p>
              <div className="flex items-center gap-2 opacity-25 group-hover:opacity-90">
                <a
                  href={project.website_url}
                  className="cursor-pointer"
                  target="_blank"
                >
                  <FaLink />
                </a>
                <a
                  href={project.github_url}
                  className="cursor-pointer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </AnimatedElement>
      </div>
    </Container>
  );
}
