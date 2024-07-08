import Container from "@/components/Container";
import React from "react";
import me from "@/public/me/1.jpeg";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import AnimatedElement from "@/components/AnimatedElement";
const about = [
  "EMAIL: EVANDROPKVIEGAS@GMAIL.COM",
 "EXPERIENCE: +7 YEARS",
  "LANGUAGES: ENGLISH, FRENCH, PORTUGUESE",
];
export default function About() {
  return (
    <Container
      center={false}
      full={false}
      className=" bg-secondary text-white  justify-between flex md:flex-row flex-col-reverse gap-12 "
    >
      <div className="space-y-12  full  p-12 border border-white/20">
        <AnimatedElement >
          <SectionTitle
          background
            shadow={false}
            black
          >
            About Me
          </SectionTitle>
        </AnimatedElement>
        <AnimatedElement element="p" className="md:text-5xl text-3xl">
        I am a professional full-stack web developer, I specialize in
              creating all kind of websites: from simple and modern to complex
              and optimized websites, having more than 6 years of exprience
        </AnimatedElement>
        <ul className="flex flex-col gap-2 text-2xl  text-white/65">
          {about.map((a, idx) => (
             <AnimatedElement element="li" className="flex items-center gap-2" animate={{ x: [-100 * idx * 0.1, 0], opacity: [0, 1] }}  key={a}>
              <div className="w-2 h-2 bg-white/65" />
              <span> {a}</span>
             </AnimatedElement>
          ))}
        </ul>
      </div>
      <div className="md:flex md:justify-end  ">
      <AnimatedElement animate={{  opacity: [0, 1] }}  animateOnce className="relative md:w-[500px] md:h-[500px] aspect-square w-full">

        <Image
          fill
          alt="Evandro"
          className=" object-contain max-w-[500px] max-h-[500px] mx-auto my-auto "
          src={me}
        />
      </AnimatedElement>
      </div>
    </Container>
  );
}
