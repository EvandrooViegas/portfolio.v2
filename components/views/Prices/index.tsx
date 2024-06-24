import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { prices, extras } from "./data";
import element from "@/public/elements/1.webp";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
export default function Prices() {
  return (
    <Container
      center={false}
      className="flex flex-col justify-between relative overflow-hidden"
    >
      <Image
        alt="Element"
        src={element}
        width={800}
        className="z-[-1] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
      />
      <AnimatedElement>
        <SectionTitle black className="">
          PRICES
        </SectionTitle>
      </AnimatedElement>
      <div className="flex flex-col gap-24">
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
              className="flex items-center gap-6"
            >
              <div className="text-3xl space-y-6">
                <span className="font-semibold underline">{price.title}</span>
                <p className="font-lato text-lg text-justify">
                  {price.description}
                </p>
                <p className="  font-semibold">{price.price}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
        <div className="text-center text-2xl">
          <span className="underline font-bold">EXTRAS:</span>
          <p className="text-justify">{extras}</p>
        </div>
      </div>
    </Container>
  );
}
