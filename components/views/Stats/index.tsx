"use client"
import AnimatedElement from "@/components/AnimatedElement";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CountUp from 'react-countup';
const stats = [
    { name: "HAPPY CLIENTS", value: 47, description: "CLIENTES THAT APPROVED MY WORK" },
    { name: "TRUSTED BY", value: 6, description: "COMPANIES" },
    { name: "EXPRIENCE", value: 7, description: "WITH MORE THAN 7 YEARS OF EXPRIENCE" },
    { name: "DEVELOPED PROJECTS", value: 79, description: "MORE THAN 79 DEVELOPED PROJECTS" },
]

export default function Stats() {
  return (
    <Container
      center={true}
      full={false}
       className="relative bg-white z-[1] text-black  flex flex-col gap-12 overflow-hidden text-center  "
    >
        <AnimatedElement animate={{ x: [-40, 0], opacity: [0, 1] }}>
        <SectionTitle shadow={false} className=" w-full underline text-center " black>
          MY CURRENT STATS:
        </SectionTitle>
      </AnimatedElement>
      <div className="md:grid md:grid-cols-4 md:gap-12  gap-16 flex flex-col  ">
        {stats.map((s, idx) => (
          <AnimatedElement
            element="div"
            animate={{
              opacity: [0, 1],
              y: [-200 * (idx + 2) * 0.1, 0],
              transition: { duration: 1 },
            }}
            key={s.name}
          >
            <div className="flex flex-col gap-2 group text-center">
                <CountUp end={s.value} enableScrollSpy prefix="+" className="text-8xl font-extrabold"  />
                  <span className="font-semibold text-4xl">{s.name}</span>
                  <p className="text-zinc-500 text-xl">{s.description}</p>
                </div>
          </AnimatedElement>
        ))}
      </div>
    </Container>
  );
}
