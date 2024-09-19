import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/perfill.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="home-about-description-container">
        <Row>
          <Row md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm on a mission to secure the digital skies, one cloud at a time. Who needs a cape when you have the cloud?
              <br />
              <br />
              <br />
              I bring a robust DevOps skillset to the table, including proficiency in &nbsp;
              <i>
                <b className="purple">AWS, Jenkins, Docker, Kubernetes, Terraform, and  Ansible. </b>
                <br />
                <br />
                My expertise primarily lies in{" "}
                <b className="purple">
                  AWS,
                </b> though I occasionally explore{" "}<b className="purple">
                  AZURE
                </b> landscapes.
              </i>
              <br />
              <br />
              I am deeply invested in the realms of <b className="purple"> Infrastructure and Cloud Security</b>, 
              always eager to tackle complex cloud infrastructure or deployment challenges. 
              <br />
              <br />
              <b className="purple">DevOps</b> is not just my profession; its my calling. 
              <br />
              I am on a relentless pursuit to perfect <b className="purple">CI/CD</b> processes and emerge as a vanguard in this ever-evolving field.
              
            </p>
          </Row>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aliasgarxo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/aliasgarxo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aliasgar-husain-7a3510158/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/imaliasgar0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
