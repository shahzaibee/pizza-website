import About from "@/app/about/page";
import Card from "@/components/card";
import Contact from "@/app/contact/page";
import Footer from "@/app/footer/page";
import Hero from "@/components/hero";
import HomeMenu from "@/app/menu/page";
import SectionProps from "@/components/sectionProps";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      {/* About section */}
      <About />
      {/* contact section */}
      <Contact />
      {/* footer section */}
    
    </>
  );
}
