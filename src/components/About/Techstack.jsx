import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiPulumi,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPulumi />
      </Col>
    </Row>
  );
}

export default Techstack;
