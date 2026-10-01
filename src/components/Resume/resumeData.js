/**
 * Resume content as data, extracted from AliasgarHusain_CV.pdf.
 *
 * Keeping this as structured data rather than a rendered PDF means the text is
 * crawlable by search engines and parseable by applicant tracking systems,
 * which cannot read a canvas-rendered PDF at all.
 *
 * The phone number from the PDF is deliberately omitted — it stays in the
 * downloadable CV rather than sitting in crawlable HTML for scrapers.
 */

export const PROFILE = {
  name: "Aliasgar Husain",
  title: "Cloud & DevOps Engineer",
  location: "Ottawa, ON, Canada",
  site: "https://aliasgar.cloud",
  linkedin: "https://www.linkedin.com/in/aliasgar-husain-7a3510158/",
  github: "https://github.com/aliasgarxo",
};

export const SKILLS = [
  {
    group: "AI Agents & Gen AI",
    items: [
      "AI Agent Development (LangChain, LangGraph, Langflow)",
      "Generative AI (OpenAI, Azure OpenAI)",
      "Prompt Engineering",
      "RAG",
      "LLM API Integration",
      "Guardrails & Output Validation",
    ],
  },
  { group: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "GCP"] },
  { group: "Infrastructure as Code", items: ["Terraform", "Pulumi", "AWS CloudFormation"] },
  { group: "Containers & Orchestration", items: ["Docker", "Kubernetes"] },
  { group: "CI/CD & Automation", items: ["Jenkins", "Ansible", "GitHub Actions"] },
  {
    group: "Programming & Frameworks",
    items: ["Python", "JavaScript", "Go", "Shell Scripting", "ROS2", "OpenCV"],
  },
  { group: "Monitoring", items: ["Prometheus", "Grafana"] },
  {
    group: "Networking & APIs",
    items: ["REST APIs", "API Integration", "IP/TCP", "OSPF", "BGP"],
  },
  { group: "ML & MLOps", items: ["ML concepts", "Model evaluation", "AI Studio"] },
  {
    group: "Cloud Architecture & Security",
    items: ["High Availability", "Auto Scaling", "Load Balancing", "IAM Roles", "OWASP"],
  },
  {
    group: "Business Analysis",
    items: ["Data Analysis & Interpretation", "Documentation", "EDA", "Power BI"],
  },
];

export const EXPERIENCE = [
  {
    role: "DevOps Engineer",
    org: "QuickInfra Cloud Solutions Pvt. Ltd",
    place: "Pune",
    period: "Jan 2024 – Aug 2024",
    points: [
      "Developed and maintained automation scripts for infrastructure deployment, significantly improving operational efficiency and reducing manual effort.",
      "Provided expert technical support for cloud-based applications, ensuring high availability and performance for clients.",
      "Collaborated with cross-functional teams to implement cloud solutions tailored to client needs, enhancing customer satisfaction.",
    ],
  },
  {
    role: "Software Associate",
    org: "Indiba Business Solutions",
    place: "Pune",
    period: "Jul 2021 – Oct 2021",
    points: [
      "Contributed to the development and customization of ERP software, enhancing user experience and increasing client satisfaction.",
      "Delivered technical support and troubleshooting, achieving a high rate of rapid issue resolution.",
      "Engaged with clients to gather feedback and refine software to meet operational standards and connectivity requirements.",
    ],
  },
];

export const EDUCATION = [
  {
    role: "Artificial Intelligence Software Development",
    org: "Algonquin College",
    place: "Ottawa, ON",
    period: "Sep 2025 – Apr 2026",
    points: [
      "Devised expertise in AI Software Development with emphasis on Python, data analysis, and machine learning model development.",
    ],
  },
  {
    role: "Cloud Development and Operations",
    org: "Algonquin College",
    place: "Ottawa, ON",
    period: "Sep 2024 – Apr 2025",
    points: [
      "Developed expertise in cloud platforms (AWS, Azure), focusing on cloud migration, DevOps methodologies, CI/CD pipelines, and infrastructure automation.",
    ],
  },
  {
    role: "Bachelor of Engineering in Computer Science",
    org: "Pune University",
    place: "Pune",
    period: "Apr 2019 – May 2023",
    points: [
      "Constructed a broad understanding of computer science, covering programming (Python, Java), data structures, AI/ML, and cloud computing fundamentals.",
    ],
  },
];

export const PROJECTS = [
  {
    role: "Cloud-Native Application on Azure Kubernetes Service",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Designed and deployed a scalable, microservices-based application hosted on Azure Kubernetes Service, enhancing modularity and performance.",
      "Integrated AI services (GPT-4 and DALL·E) using Azure OpenAI to deliver dynamic product descriptions and imagery.",
      "Implemented CI/CD pipelines with GitHub Actions for build, test, and deployment automation across six independent microservices.",
    ],
  },
  {
    role: "Streamlined CI/CD with Kubernetes and Jenkins",
    period: "Feb 2023 – May 2024",
    points: [
      "Designed an automated CI/CD pipeline using Kubernetes, Jenkins, and Git, achieving 40% faster deployments and improved application resilience within a Kubeflow environment.",
      "Orchestrated Kubernetes services, streamlining code integration and automating deployment workflows.",
    ],
  },
  {
    role: "Application Deployment using Jenkins and Docker",
    period: "Nov 2022 – Feb 2023",
    points: [
      "Deployed a Java web application on Docker with Jenkins CI/CD, integrating Maven and SonarQube for code checks and streamlined deployment to Docker Hub, reducing deployment time by 35%.",
      "Built and deployed Docker images, automating the entire process from GitHub to Docker Hub.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    role: "Azure Fundamentals",
    org: "Microsoft",
    place: "Ottawa, ON",
    period: "Jan 2024 – Present",
    points: [
      "Experienced in implementing Azure solutions, including virtual networking, IAM, and automation.",
    ],
  },
  {
    role: "AWS Solutions Architect",
    org: "AWS",
    place: "Ottawa, ON",
    period: "May 2023 – Present",
    points: [
      "Developed skills in designing scalable, resilient, and cost-effective AWS infrastructure solutions.",
    ],
  },
];
