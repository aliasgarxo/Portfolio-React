import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import dock3tier from "../../Assets/Projects/dock3tier.png";
import terraarch from "../../Assets/Projects/terraarch.png";
import jendoc from "../../Assets/Projects/jendoc.png";
import terraansible from "../../Assets/Projects/terraansible.png";
import jenkube from "../../Assets/Projects/jenkube.png";
import cloudnativebb from "../../Assets/Projects/Cloud-Native-BB.png"
import azurefunction from "../../Assets/Projects/azurefunction.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="project-subheading">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudnativebb}
              title="Cloud-Native Application Deployment on Azure Kubernetes Service"
              description="Designed and deployed a scalable BestBuy application on AKS using microservices. Leveraged Azure OpenAI (GPT-4, DALL-E) for dynamic product content and GitHub Actions for CI/CD automation."
              ghLink="https://github.com/aliasgarxo/bestbuy-cloud-native"
              date="2024"
              status="deployed"
              tags={["Azure", "AKS", "Kubernetes", "Azure OpenAI", "GPT-4", "GitHub Actions", "CI/CD"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={azurefunction}
              title="Contact Form with Azure Function and SendGrid Integration"
              description="Serverless backend using Azure Functions to process contact form submissions and route them via SendGrid email delivery — no server management required."
              ghLink="https://github.com/aliasgarxo/contact-form-func"
              date="2024"
              status="deployed"
              tags={["Azure Functions", "SendGrid", "Serverless", "REST API", "Node.js"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jendoc}
              title="Jenkins-Docker CI/CD"
              description="A Jenkins pipeline automates building a Java app, packaging it in a Docker container, and deploying it to Tomcat for streamlined development and deployment."
              ghLink="https://github.com/aliasgarxo/JenkinsDocker_pipeline"
              date="2023"
              status="archived"
              tags={["Jenkins", "Docker", "Java", "Tomcat", "CI/CD", "Pipeline"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkube}
              title="Kubernetes Deployment CI/CD"
              description="A Jenkins pipeline automates the creation of a Kubeflow architecture on a Kubernetes cluster, simplifying the deployment and management of complex ML workflows."
              ghLink="https://github.com/aliasgarxo/KubeFlow"
              date="2023"
              status="archived"
              tags={["Jenkins", "Kubernetes", "Kubeflow", "CI/CD", "MLOps"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraarch}
              title="3-tier Application Architecture Using Terraform"
              description="Provisioned a production-ready 3-tier AWS architecture using Terraform — VPC, EC2 auto-scaling groups, RDS, and load balancers defined entirely as code."
              ghLink="https://github.com/aliasgarxo/Terraform-Arch"
              date="2023"
              status="archived"
              tags={["Terraform", "AWS", "EC2", "VPC", "RDS", "IaC"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dock3tier}
              title="Docker 3-tier Application Deployment"
              description="3-tier containerised infrastructure hosting a Java application across Docker containers — Application tier, Database tier (MySQL), and Web server (Nginx)."
              ghLink="https://github.com/aliasgarxo/Docker-3-tier"
              date="2023"
              status="archived"
              tags={["Docker", "Java", "Nginx", "MySQL", "Docker Compose"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraansible}
              title="Terraform-Ansible Creation and Deployment"
              description="Combined Terraform and Ansible to automate a scalable 3-tier web app on AWS with load balancers, auto-scaling, and idempotent configuration management."
              ghLink="https://github.com/aliasgarxo/Terraform-Ansible-Deployment"
              date="2023"
              status="archived"
              tags={["Terraform", "Ansible", "AWS", "Auto Scaling", "Load Balancer", "IaC"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
