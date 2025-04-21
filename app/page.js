"use client";
import AboutUni from "@/components/AboutUni";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Program from "@/components/Program";
import Testimonial from "@/components/Testimonial";
import React, { useEffect } from "react";
import Lenis from "lenis";

const Home = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />

      <section className="px-[6%] sm:px-[10%]">
        <Program />
        <AboutUni />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Home;
