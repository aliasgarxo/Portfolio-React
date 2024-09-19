import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Aliasgar Husain </span>
            from <span className="purple"> Ottawa, Canada.</span>
            <br />
            I am currently employed as a DevOps Engineer at QuickInfra Cloud.
            <br />
            I have completed my Bachelor's of Engineering in Computer Science at Pune University.
            <br />
            I have obtained the AWS Certified Solutions Architect- Associate certification, issued by Amazon Web Services (AWS).
            <br />
            <br />
            Apart from my intrest in Cloud technology, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Playing Video Games
            </li>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Reading about new Technologies
            </li>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aliasgar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
