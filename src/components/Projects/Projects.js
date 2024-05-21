import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dock3tier from "../../Assets/Projects/dock3tier.png";
import emotion from "../../Assets/Projects/emotion.png";
import terraarch from "../../Assets/Projects/terraarch.png";
import jendoc from "../../Assets/Projects/jendoc.png";
import terraansible from "../../Assets/Projects/terraansible.png";
import jenkube from "../../Assets/Projects/jenkube.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jendoc}
              isBlog={false}
              title="Jenkins-Docker CI/CD"
              description="A Jenkins pipeline automates building a Java app, packaging it in a Docker container, and deploying it to an application server (Tomcat) for streamlined development and deployment."
              ghLink="https://github.com/aliasgarxo/JenkinsDocker_pipeline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkube}
              isBlog={false}
              title="Kubernetes Deployment CI/CD"
              description="A Jenkins pipeline automates the creation of a Kubeflow architecture on a Kubernetes cluster, simplifying the deployment and management of complex Kubernetes workflows."
              ghLink="https://github.com/aliasgarxo/KubeFlow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraarch}
              isBlog={false}
              title="3-tier Application Architecture Using Terraform"
              description="creating an AWS architecture for an Production Application on terraform and deploying it."
              ghLink="https://github.com/aliasgarxo/Terraform-Arch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dock3tier}
              isBlog={false}
              title="Docker 3-tier Application Deployment"
              description="Creating a 3-tier infrastructure to host a java application on multiple docker containers. The architecture consisting of Application tier, Database tier and Web server."
              ghLink="https://github.com/aliasgarxo/Docker-3-tier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraansible}
              isBlog={false}
              title="Terraform-Ansible Creation and Deployment"
              description="This project leverages Terraform and Ansible to automate the creation of a scalable 3-tier web application on AWS, featuring load balancers and auto-scaling for high availability and flexibility."
              ghLink="https://github.com/aliasgarxo/Terraform-Ansible-Deployment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AWS CodePipeline CI/CD Project"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
