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
    <Container  className="gap-4 flex flex-col relative overflow-hidden">
      <Image
        alt="Element"
        className="absolute left-0 top-0 rotate-90 -translate-y-1/2 z-[-1]"
        width={800}
        src={element}
      />
       <AnimatedElement>

      <SectionTitle black>PROJECTS</SectionTitle>
       </AnimatedElement>
      <div>
      <AnimatedElement>

        <Carousel opts={{ loop: true }} setApi={setApi} className="w-full max-w-96 md:max-w-full p-8">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className=" space-y-2 group">
                  <img
                    alt="Project Image"
                    src={`/projects/${project.image}`}
                    className="aspect-video mb-4 object-cover grayscale group-hover:grayscale-0"
                  />
                  <span className="font-semibold text-3xl">{project.name}</span>
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
                  <p className="text-zinc-500 ">{project.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="pb-12 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
        </Carousel>
      </AnimatedElement>
      
      </div>
    </Container>
  );
}
