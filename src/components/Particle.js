import React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

function Particle() {
  const { theme } = useTheme();

  const particleColor = theme === "light"
    ? ["#1e1b4b", "#312e81", "#3730a3", "#4338ca"]
    : ["#ffffff", "#e2e8f0", "#c7d2fe"];

  const bgColor = theme === "light" ? "#f5f2ee" : "#0d1117";

  return (
    <Particles
      key={theme}
      id="tsparticles"
      params={{
        background: {
          color: {
            value: bgColor,
          },
          opacity: 1,
        },
        particles: {
          number: {
            value: 160,
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
