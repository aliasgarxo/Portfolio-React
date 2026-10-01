import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

// Matches the breakpoint the rest of the layout uses for phones.
const MOBILE_QUERY = "(max-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function Particle() {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);

  // Honour the OS "reduce motion" setting: render the flat background colour
  // instead of an animation loop.
  if (prefersReducedMotion) {
    return (
      <div
        id="tsparticles"
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundColor: theme === "light" ? "#f5f2ee" : "#0d1117",
        }}
      />
    );
  }

  const particleColor = theme === "light"
    ? ["#1e1b4b", "#312e81", "#3730a3", "#4338ca"]
    : ["#ffffff", "#e2e8f0", "#c7d2fe"];

  const bgColor = theme === "light" ? "#f5f2ee" : "#0d1117";

  return (
    <Particles
      key={`${theme}-${isMobile}`}
      id="tsparticles"
      params={{
        background: {
          color: {
            value: bgColor,
          },
          opacity: 1,
        },
        // Capping the frame rate roughly halves CPU on a 120Hz display for
        // an animation this slow, with no visible difference.
        fpsLimit: 30,
        particles: {
          number: {
            // 160 particles was a measurable battery drain on phones.
            value: isMobile ? 50 : 110,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: particleColor,
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: theme === "light" ? 1.8 : 1,
          },
          opacity: {
            value: theme === "light" ? 1.0 : 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
