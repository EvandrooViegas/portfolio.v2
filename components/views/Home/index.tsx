import Image from "next/image";
import React from "react";
import me from "@/public/me/2.png";
import element from "@/public/elements/1.webp";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import AnimatedElement from "@/components/AnimatedElement";
import { MdOutlineMail } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
export default function Home() {
  return (
    <div className="flex   md:grid md:grid-rows-1 md:grid-cols-5 h-screen overflow-hidden max-h-screen ">

      <div className="md:col-span-3">
        <Container
          center={false}
          full={false}
          className="flex flex-col md:justify-between justify-center gap-16 md:gap-0 h-full"
        >
          <div className="hidden md:block" />
          <div className="text-center md:text-left space-y-6">
            <AnimatedElement animateOnView>
              <SectionTitle shadow={false} black className="leading-none md:text-8xl">
                DO YOU NEED A <span className="text-secondary">WEBSITE</span> FOR YOURSELF OR FOR YOUR <span className="text-secondary">BUSINESS?</span>
              </SectionTitle>
            </AnimatedElement>
            <AnimatedElement
              element="p"
              animate={{ opacity: [0, 1], transition: { delay: 0.3 } }}
              className="md:text-3xl text-neutral-800 "
            >
              Then you are in the <span className="underline">right place</span>
            </AnimatedElement>
          </div>
          <AnimatedElement
            animate={{
              opacity: [0, 1],
              x: [-100, 0],
              transition: { delay: 0.7 },
            }}
          >
            <a href="#contact">
              <Button
                size={"lg"}
                variant="secondary"
                className="w-full mt-3 group  md:w-fit md:mt-0 flex items-center gap-4"
              >
                <span>ORDER ONE</span>
                <span className="transition-all -rotate-45 group-hover:rotate-0"><IoMdArrowForward /></span>
              </Button>
            </a>
          </AnimatedElement>
        </Container>
      </div>
      <div className="col-span-2  h-full hidden md:inline border-l border-l-secondary/30">
        <div className="h-full  flex flex-col justify-end">
          <div className="relative h-full">
            <AnimatedElement animateOnce>
              <Image
                src={me}
                fill
                alt="Evandro Viegas"
                className="object-contain   object-bottom"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
}
