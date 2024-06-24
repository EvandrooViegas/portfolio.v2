import Image from "next/image";
import React from "react";
import me from "@/public/me/2.png";
import element from "@/public/elements/1.webp";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
export default function Home() {
  return (
    <div className="flex  flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-5 h-screen overflow-hidden max-h-screen">
   
      <div className="md:col-span-3">
        <Container center={false} full={false}  className="flex flex-col justify-between h-full">
          <div className="hidden md:block" />
          <div className="text-center md:text-left">
            <SectionTitle shadow={false} black >
             <span>HELLO{","}</span><br className="md:hidden inline" />
             <span className="underline"> I{"'"}M EVANDRO</span>
            </SectionTitle>
            <p className="md:text-3xl ">
              I am a professional full-stack web developer, I specialize in
              creating all kind of websites: from simple and modern to complex
              and optimized websites, having more than 6 years of exprience
            </p>
          </div>
          <Button className="w-full mt-3 md:w-fit md:mt-0">CONTACT ME</Button>
        </Container>
      </div>
      <div className="col-span-2 bg-secondary  h-full">
        <div className="h-full  flex flex-col justify-end">
          <div className="relative h-full">
          
            <Image
              src={me}
              fill
              alt="Evandro Viegas"
              className="md:object-contain object-contain  object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
