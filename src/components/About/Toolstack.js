import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAnsible,
  SiLinux,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
    </Row>
  );
}

export default Toolstack;
