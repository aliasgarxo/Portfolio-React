import React, { useState } from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { FaAws } from "react-icons/fa";

const EXPERIENCE = [
  {
    year: "May 2026 – Present",
    title: "AI Prompt Engineer",
    company: "Ribbon Communication",
    location: "Ottawa, Canada",
    description:
      "Provided cloud infrastructure support and assisted in automating deployment workflows using Ansible and Bash scripting. Gained hands-on experience with Linux systems and AWS services.",
    tags: ["AWS", "Ansible", "Linux", "Bash", "Cloud Support"],
  },
  {
    year: "Jan 2024 – Aug 2024",
    title: "DevOps Engineer",
    company: "QuickInfra Cloud Solutions",
    location: "Pune, India",
    description:
      "Built and automated production infrastructure on AWS and Azure. Designed and maintained CI/CD pipelines using Jenkins, containerized workloads with Docker, and orchestrated deployments with Kubernetes.",
    tags: ["AWS", "Azure", "Kubernetes", "Jenkins", "Docker", "Terraform"],
  },
];

const EDUCATION = [
  {
    year: "Sep 2025 – Apr 2026",
    title: "Artificial Intelligence and Software Development",
    company: "Algonquin College",
    location: "Ottawa, Canada",
    description:
      "Specialized in AI-driven solutions and software development. Deepened expertise in machine learning workflows, LLM integration, and deploying intelligent systems into cloud environments.",
    tags: ["AI & ML", "LLMs", "Python", "Cloud", "Software Dev"],
  },
  {
    year: "Sep 2024 – Apr 2025",
    title: "Cloud Development and Operations",
    company: "Algonquin College",
    location: "Ottawa, Canada",
    description:
      "Focused on cloud infrastructure design, DevOps automation, and CI/CD pipeline management. Worked extensively with AWS services, Terraform, and containerized application deployments.",
    tags: ["Cloud Computing", "DevOps", "Terraform", "AWS", "Networking"],
  },
  {
    year: "2019 – 2023",
    title: "Bachelor of Engineering — Computer Engineering",
    company: "Pune University",
    location: "Pune, India",
    description:
      "Completed a four-year undergraduate degree in Computer Engineering with a focus on systems programming, networking, and foundational computer science principles.",
    tags: ["Computer Science", "Networking", "Systems", "Algorithms"],
  },
  {
    year: "2023",
    title: "AWS Certified Solutions Architect – Associate",
    company: "Amazon Web Services",
    location: "Certification",
    description:
      "Achieved industry-recognized certification validating expertise in designing scalable, resilient, and cost-efficient distributed systems on AWS cloud.",
    tags: ["AWS", "Cloud Architecture", "Solutions Design", "IAM"],
    icon: <FaAws />,
  },
];

function TimelineCard({ item, kind }) {
  const KindIcon = kind === "experience" ? BsBriefcaseFill : HiAcademicCap;
  const kindLabel = kind === "experience" ? "EXP" : "EDU";

  return (
    <div className="tl-card-v5">
      <span className="tl-v5-kind">
        <KindIcon style={{ fontSize: "0.8em" }} />
        {kindLabel}
      </span>

      <div className="tl-v5-date">{item.year}</div>
      <h3 className="tl-v5-title">{item.title}</h3>

      <div className="tl-v5-org">
        <span className="tl-v5-org-name">{item.company}</span>
        <span className="tl-v5-org-dot" />
        <span className="tl-v5-org-loc">{item.location}</span>
      </div>

      <p className="tl-v5-desc">{item.description}</p>

      <div className="tl-v5-tags-section">
        <div className="tl-v5-tags-label">Skills applied</div>
        <div className="tl-v5-tags">
          {item.tags.map((t, i) => (
            <span key={t} className="tl-v5-tag">
              {t}
              {i < item.tags.length - 1 && (
                <span className="tl-v5-tag-sep">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const [activeTab, setActiveTab] = useState("experience");
  const items = activeTab === "experience" ? EXPERIENCE : EDUCATION;

  return (
    <div className="timeline-wrapper">
      <div className="timeline-tabs">
        <button
          type="button"
          className={`tl-tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          <BsBriefcaseFill style={{ marginRight: "7px" }} />
          Experience
        </button>
        <button
          type="button"
          className={`tl-tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <HiAcademicCap style={{ marginRight: "7px", fontSize: "1.1em" }} />
          Education
        </button>
      </div>

      <div className="tl-container">
        {items.map((item, i) => (
          <div
            key={i}
            className={`tl-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`}
          >
            <div className="tl-dot">
              {activeTab === "experience" ? (
                <BsBriefcaseFill style={{ fontSize: "0.9em" }} />
              ) : (
                <HiAcademicCap style={{ fontSize: "1em" }} />
              )}
            </div>
            <TimelineCard item={item} kind={activeTab} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
