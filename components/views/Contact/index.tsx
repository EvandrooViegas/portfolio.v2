import Container from "@/components/Container";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Contact() {
  return (
    <Container className="bg-secondary text-white overflow-hidden" padding={false} >
      <div className="flex flex-col justify-between">
        <div className="grayscale  ">
          <video controls={false} loop autoPlay muted>
            <source src="/coding.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="h-full " id="contact">
          <div className="p-12 md:grid md:grid-cols-4">
            <a href="mailto:evandropkviegas@gmail.com" className="col-span-3 text-8xl animate-pulse underline" target="_blank">CONTACT ME!</a>
            <div className="space-y-4 text-3xl md:text-md">
              <span className="underline">CONTACT</span>
              <ul>
                <li>
                  <a href="mailto:evandropkviegas@gmail.com" className="underline">
                    evandropkviegas@gmail.com
                  </a>
                </li>
              </ul>
              <ul className="flex items-center gap-3 ">
                <a href="https://github.com/EvandrooViegas" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/evandroviegas.dev/" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/evandro-viegas-0a6ba5312/" target="_blank">
                  <FaLinkedin />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
