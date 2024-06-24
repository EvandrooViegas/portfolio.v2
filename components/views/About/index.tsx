import Container from "@/components/Container";
import React from "react";
import me from "@/public/me/1.jpeg";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import AnimatedElement from "@/components/AnimatedElement";
const about = [
  "BIRTHDAY: 22 JUNE 2006",
  "EMAIL: EVANDROPKVIEGAS@GMAIL.COM",
  "PHONE: +351967842074",
  "FROM: ANGOLA",
  "RESIDING IN: PORTUGAL",
  "EXPERIENCE: +7 YEARS",
];
export default function About() {
  return (
    <Container
      center={false}
      full
      className=" bg-secondary text-white items-center justify-center flex flex-col-reverse gap-12 md:grid md:grid-cols-2"
    >
      <div className="space-y-12">
        <AnimatedElement >
          <SectionTitle
            shadow={false}
            className="mb-16 md:text-7xl text-5xl underline md:no-underline"
          >
            About Me:{" "}
          </SectionTitle>
        </AnimatedElement>
        <ul className="flex flex-col gap-5 md:text-3xl text-2xl">
          {about.map((a, idx) => (
             <AnimatedElement element="li" animate={{ x: [-100 * idx * 0.1, 0], opacity: [0, 1] }}  key={a}>
              
               {a}
             </AnimatedElement>
          ))}
        </ul>
      </div>
      <div className="relative  md:w-[500px] md:h-[500px] h-[300px] w-[300px] ">
      <AnimatedElement animate={{  opacity: [0, 1] }}  >

        <Image
          fill
          alt="Evandro"
          className=" object-contain max-w-[500px] max-h-[500px] mx-auto my-auto"
          src={me}
        />
      </AnimatedElement>
      </div>
    </Container>
  );
}
