import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { prices, extras } from "./data";
import element from "@/public/elements/1.webp";
import Image from "next/image";
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
      <SectionTitle black className="">
        PRICES
      </SectionTitle>
     <div className="flex flex-col gap-24">
     <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-16 h-full grow">
        {prices.map((price, idx) => (
          <div key={price.title} className="flex items-center gap-6">
            <div className="text-3xl space-y-6">
              <span className="font-semibold underline">{price.title}</span>
              <p className="font-lato text-lg text-justify">
                {price.description}
              </p>
              <p className="  font-semibold">{price.price}</p>
            </div>
          </div>
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
