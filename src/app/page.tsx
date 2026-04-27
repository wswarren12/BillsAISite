import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import Ticker from "@/components/layout/Ticker";
import SignalStrip from "@/components/layout/SignalStrip";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <SideNav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <SignalStrip />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
