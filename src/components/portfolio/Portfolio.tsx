"use client";

import React, { useRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

export default function Portfolio() {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (mainRef.current) {
      mainRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (mainRef.current) {
      mainRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      ref={mainRef}
      className="flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory w-screen h-screen scroll-smooth"
    >
      <Intro onNext={handleScrollRight} />
      <About onPrev={handleScrollLeft} onNext={handleScrollRight} />
      <Stack onPrev={handleScrollLeft} onNext={handleScrollRight} />
      <Projects onPrev={handleScrollLeft} onNext={handleScrollRight} />
      <Experience onPrev={handleScrollLeft} onNext={handleScrollRight} />
      <Education onPrev={handleScrollLeft} onNext={handleScrollRight} />
      <Contact onPrev={handleScrollLeft} />
    </main>
  );
}
