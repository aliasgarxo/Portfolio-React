import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { FaRobot } from "react-icons/fa";
import {
  SiOpenai,
  SiGooglecloud,
  SiTensorflow,
  SiLangchain,
} from "react-icons/si";

function AIstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
      </Col>
    </Row>
  );
}

export default AIstack;
