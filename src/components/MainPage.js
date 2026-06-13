import React, { Suspense, lazy } from "react";
import Home from "./Home/Home";
import Footer from "./Footer";
import Particle from "./Particle";

const About = lazy(() => import("./About/About"));
const Projects = lazy(() => import("./Projects/Projects"));
const Contact = lazy(() => import("./contact/contact"));

function MainPage() {
  return (
    <>
      <Particle />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <Suspense fallback={<div />}>
          <About />
        </Suspense>
      </div>

      <div id="projects">
        <Suspense fallback={<div />}>
          <Projects />
        </Suspense>
      </div>

      <div id="contact">
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
