import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Aliasgar Husain</span>, a Cloud &
            DevOps Engineer based in{" "}
            <span className="purple">Ottawa, Canada.</span>
            <br />
            <br />
            I recently graduated from{" "}
            <span className="purple">Algonquin College</span>, where I deepened
            my expertise in cloud infrastructure, DevOps automation, and
            AI-driven solutions.
            <br />
            <br />
            Previously, I worked as a <span className="purple">
              DevOps Engineer
            </span>{" "}
            at QuickInfra Cloud, building and automating production
            infrastructure on AWS and Azure.
            <br />
            <br />
            I hold the{" "}
            <span className="purple">
              AWS Certified Solutions Architect – Associate
            </span>{" "}
            certification. My current focus is on building intelligent{" "}
            <span className="purple">AI Agents</span> and integrating{" "}
            <span className="purple">Google Gemini</span> into real-world cloud
            applications — where infrastructure meets intelligence.
            <br />
            <br />
            <span className="purple">Open to new opportunities</span> — whether
            it's cloud engineering, DevOps, or AI-powered solutions.
            <br />
            <br />
            Outside of tech, a few things I love!
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Playing Video Games
            </li>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Exploring AI & Emerging Tech
            </li>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Cloud is the canvas. Code is the brush. AI is the future."{" "}
          </p>
          <footer className="blockquote-footer">Aliasgar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
