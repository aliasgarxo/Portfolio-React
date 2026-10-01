import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AliasgarHusain_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  PROFILE,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  CERTIFICATIONS,
} from "./resumeData";
import "./resume.css";

function DownloadButton() {
  return (
    <Button
      variant="primary"
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="resume-download-btn"
    >
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  );
}

function EntryList({ entries }) {
  return (
    <>
      {entries.map((e) => (
        <article className="resume-entry" key={`${e.role}-${e.period}`}>
          <header className="resume-entry-head">
            <h3 className="resume-entry-role">{e.role}</h3>
            <span className="resume-entry-period">{e.period}</span>
          </header>
          {(e.org || e.place) && (
            <p className="resume-entry-org">
              {[e.org, e.place].filter(Boolean).join(" · ")}
            </p>
          )}
          <ul className="resume-points">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="resume-section-block">
      <h2 className="resume-section-title">{title}</h2>
      {children}
    </section>
  );
}

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <div className="resume-doc">
        <header className="resume-header">
          <h1 className="resume-name">{PROFILE.name}</h1>
          <p className="resume-title">{PROFILE.title}</p>
          <p className="resume-contact">
            {PROFILE.location}
            {" · "}
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {" · "}
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
          <DownloadButton />
        </header>

        <Section title="Technical Skills">
          <dl className="resume-skills">
            {SKILLS.map((s) => (
              <div className="resume-skill-row" key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  {s.items.map((i) => (
                    <span className="resume-chip" key={i}>
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Experience">
          <EntryList entries={EXPERIENCE} />
        </Section>

        <Section title="Education">
          <EntryList entries={EDUCATION} />
        </Section>

        <Section title="Personal Projects">
          <EntryList entries={PROJECTS} />
        </Section>

        <Section title="Certifications & Training">
          <EntryList entries={CERTIFICATIONS} />
        </Section>

        <footer className="resume-footer">
          <DownloadButton />
        </footer>
      </div>
    </Container>
  );
}

export default ResumeNew;
