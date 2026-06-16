import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductCategories } from "@/components/ProductCategories";
import { ProductionProcess } from "@/components/ProductionProcess";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Services />
      <ProductionProcess />
      <ProductCategories />
      <Values />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
