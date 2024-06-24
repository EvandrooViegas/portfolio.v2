import Image from "next/image";
import React from "react";
import me from "@/public/me/2.png";
import element from "@/public/elements/1.webp";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import AnimatedElement from "@/components/AnimatedElement";
import { MdOutlineMail } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex  flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-5 h-screen overflow-hidden max-h-screen ">
      <Image
        src={element}
        fill
        alt="Evandro Viegas"
        className="z-[-1] hidden md:inline absolute top-0  left-0 -translate-y-1/2 -translate-x-1/2 "
      />
      <div className="md:col-span-3">
        <Container
          center={false}
          full={false}
          className="flex flex-col justify-between h-full"
        >
          <div className="hidden md:block" />
          <div className="text-center md:text-left">
            <AnimatedElement animateOnView>
              <SectionTitle shadow={false} black>
                <span>HELLO{","}</span>
                <br className="md:hidden inline" />
                <span className="underline"> I{"'"}M EVANDRO</span>
              </SectionTitle>
            </AnimatedElement>
            <AnimatedElement
              element="p"
              animate={{ opacity: [0, 1], transition: { delay: 0.3 } }}
              className="md:text-3xl "
            >
              I am a professional full-stack web developer, I specialize in
              creating all kind of websites: from simple and modern to complex
              and optimized websites, having more than 6 years of exprience
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
            <Button className="w-full mt-3  md:w-fit md:mt-0 bg-black flex items-center gap-3">
                <span>CONTACT ME</span>
                <span>
                  <MdOutlineMail />
                </span>
            </Button>
              </a>
          </AnimatedElement>
        </Container>
      </div>
      <div className="col-span-2 bg-secondary  h-full">
        <div className="h-full  flex flex-col justify-end">
          <div className="relative h-full">
            <AnimatedElement animateOnce>
              <Image
                src={me}
                fill
                alt="Evandro Viegas"
                className="md:object-contain object-contain  object-bottom"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
}
