import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { Progress } from "@/components/ui/progress";
import skills from "./data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import AnimatedElement from "@/components/AnimatedElement";

export default function Skills() {
  return (
    <Container className="bg-secondary text-white flex flex-col gap-12 border-t border-t-white/10">
      <AnimatedElement>
        <SectionTitle shadow={false}>SKILLS</SectionTitle>
      </AnimatedElement>
      <div className="w-full flex flex-col gap-12">
        <ul className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-6 gap-3 w-full text-3xl">
          {skills.main.map((skill, idx) => (
            <AnimatedElement
              key={skill.skill}
              animate={{ y: [-100 * idx * 0.1, 0], opacity: [0, 1] }}
            >
              <li className="flex items-center gap-4">
                <span>{skill.skill}</span>
                <Progress value={skill.value} />
              </li>
            </AnimatedElement>
          ))}
        </ul>
        <div className="flex flex-col items-center w-full gap-10">
          <span className="text-2xl underline">OTHER SKILLS:</span>
          <AnimatedElement
            animate={{ y: [30, 0], opacity: [0, 1] }}
            element="ul"
            className="flex flex-wrap md:items-center justify-center gap-6 md:gap-12"
          >
            {skills.extras.map((s) => (
              <HoverCard key={s.skill}>
                <HoverCardTrigger>
                  <li className="cursor-pointer text-2xl md:text-md">
                    <span>{s.skill}</span>
                    <span className="inline md:hidden text-neutral-400">{` - ${s.value}/100`}</span>
                  </li>
                </HoverCardTrigger>
                <HoverCardContent>
                  <Progress value={s.value} />
                </HoverCardContent>
              </HoverCard>
            ))}
          </AnimatedElement>
        </div>
      </div>
    </Container>
  );
}
