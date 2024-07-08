import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { prices } from "./data";
import AnimatedElement from "@/components/AnimatedElement";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import { formLink } from "@/app/layout";
export default function Prices() {
  return (
    <Container
      full={false}
      className="flex flex-col  gap-28 relative overflow-hidden"
    >
  
      <AnimatedElement className="">
        <SectionTitle  background >
          PRICES & COSTS
        </SectionTitle>
      </AnimatedElement>
      <div className="flex flex-col gap-24 w-full">
        <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-16 h-full grow">
          {prices.map((price, idx) => (
            <AnimatedElement
              animate={{
                opacity: [0, 1],
                y: [-200 * (idx + 2) * 0.1, 0],
                x: [-100 * (idx + 2) * 0.1, 0],
                transition: { duration: 0.2 },
              }}
              key={price.title}
              className="flex flex-col gap-3  w-full mb-auto p-12 border border-secondary/20 text-black"
            >
              <p className="text-8xl   font-bold text-neutral-800">{price.price}</p>
              <span  className=" text-8xl   font-semibold">{price.title}</span>
              <ul className="space-y-2 w-full">
                {price.features.map((f) => (
                  <li
                    className="flex items-center gap-2  border-b border-b-secondary/20 text-2xl "
                    key={f}
                  >
                    <span className="p-4 text-black">
                      <IoCheckmarkSharp />
                    </span>
                    <span className="p-4">{f}</span>
                  </li>
                ))}
              </ul>

            <a href={formLink} target="_blank" className="w-full">
            <Button
            variant="color"
                className="w-full mt-3 group  md:mt-0 flex items-center gap-4 py-5 font-white text-3xl"
              >
                <span>CHOOSE THIS PLAN</span>
                <span className="transition-all -rotate-45 group-hover:rotate-0"><IoMdArrowForward /></span>
              </Button>
            </a>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </Container>
  );
}
