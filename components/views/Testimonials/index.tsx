import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import testimonials from "./data";
import { MdArrowOutward } from "react-icons/md";
import element from "@/public/elements/2.webp"
import Image from "next/image";
export default function Testimonials() {
  return (
    <Container className="relative bg-secondary z-[1] text-white  flex flex-col gap-12 overflow-hidden">

      <Image src={element} alt="element" className="absolute left-0 top-0 rotate-90 -translate-y-1/2 z-[-1]" width={600} />
      <Image src={element} alt="element" className="absolute right-0 bottom-0 -rotate-90 translate-y-1/2 z-[-1]" width={600} />
      <SectionTitle shadow={false} className="md:text-left md:w-full ">TESTIMONIALS:</SectionTitle>
      <div className="md:grid md:grid-cols-3 md:gap-12  gap-16 flex flex-col items-center ">
        {testimonials.map((t) => (
          <div className=" md:text-3xl text-2xl text-center " key={t.text}>
            <p className="italic mb-12 font-lato text-center">{t.text}</p>
            <button className="bg-white text-black rounded-full px-10 py-2 text-[27px]">
            <a
              href={t.website}
              className="flex items-center gap-3"
              target="_blank"
            >
              <span>SEE WEBSITE</span>
              <span >
                <MdArrowOutward />
              </span>
            </a>
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
}
