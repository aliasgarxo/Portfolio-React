import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import AIstack from "./AIstack";
import Timeline from "./Timeline";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h2 style={{ fontSize: "2.1em", paddingTop: "40px", paddingBottom: "10px", textAlign: "center" }}>
          My <strong className="purple">Journey</strong>
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "10px" }}>
          A timeline of experience &amp; education
        </p>

        <Timeline />

        <h2 className="project-heading">
          Cloud & <strong className="purple">DevOps </strong>
        </h2>
        <Techstack />

        <h2 className="project-heading">
          AI Agents &{" "}
          <strong className="purple">Intelligence</strong>
        </h2>
        <AIstack />

        <h2 className="project-heading">
          <strong className="purple">Dev Tools</strong> & Monitoring
        </h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
