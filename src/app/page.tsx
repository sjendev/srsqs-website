import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Consultancy from "@/components/Consultancy";
import Stats from "@/components/Stats";
import WhatOthersMiss from "@/components/WhatOthersMiss";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Strategy from "@/components/Strategy";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Partners />
      <Consultancy />
      <Stats />
      <WhatOthersMiss />
      <Services />
      <Strategy />
      <Cases />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
