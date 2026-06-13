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
        <h1 style={{ fontSize: "2.1em", paddingTop: "40px", paddingBottom: "10px", textAlign: "center" }}>
          My <strong className="purple">Journey</strong>
        </h1>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "10px" }}>
          A timeline of experience &amp; education
        </p>

        <Timeline />

        <h1 className="project-heading">
          Cloud & <strong className="purple">DevOps </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          AI Agents &{" "}
          <strong className="purple">Intelligence</strong>
        </h1>
        <AIstack />

        <h1 className="project-heading">
          <strong className="purple">Dev Tools</strong> & Monitoring
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
