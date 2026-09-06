import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <CallToAction />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}
