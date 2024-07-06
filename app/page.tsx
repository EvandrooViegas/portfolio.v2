import About from "@/components/views/About";
import Contact from "@/components/views/Contact";
import HomeView from "@/components/views/Home/index"
import Prices from "@/components/views/Prices";
import Projects from "@/components/views/Projects";
import Skills from "@/components/views/Skills";
import Stats from "@/components/views/Stats";
import Testimonials from "@/components/views/Testimonials";
export default function Home() {
  return (
    <main>
      <HomeView />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Testimonials />
      <Prices />
      <Contact />
    </main>
  );
}
