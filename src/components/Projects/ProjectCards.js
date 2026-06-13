import React from "react";
import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

function repoSlug(url) {
  return url.replace(/^https?:\/\/(www\.)?github\.com\//, "");
}

function ProjectCards({ imgPath, title, description, ghLink, demoLink, tags, date, status }) {
  return (
    <div className="p6-card">
      <div className="p6-header">
        <span className="p6-header-kind">
          [<span className="p6-accent">project</span>]
        </span>
        <span className="p6-header-date">{date}</span>
      </div>

      <div className="p6-thumb">
        <img src={imgPath} alt={title} className="p6-thumb-img" />
        <div className="p6-thumb-overlay" />
      </div>

      <div className="p6-body">
        <h3 className="p6-title">{title}</h3>

        <div className="p6-meta">
          <div className="p6-row">
            <span className="p6-row-key">status</span>
            <span className={`p6-row-val ${status === "deployed" ? "p6-deployed" : "p6-archived"}`}>
              {status}
            </span>
          </div>
          <div className="p6-row">
            <span className="p6-row-key">repo</span>
            <span className="p6-row-val p6-accent p6-repo-val">
              {repoSlug(ghLink)}
            </span>
          </div>
        </div>

        <p className="p6-desc">{description}</p>

        <div className="p6-stack-row">
          <span className="p6-stack-label">{"// stack"}</span>
          <div className="p6-tags">
            {tags.map((t) => (
              <span key={t} className="p6-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="p6-footer">
        <span className="p6-footer-arrow">↳</span>
        <div className="p6-footer-links">
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="p6-link">
              <BsGithub size={12} /> github
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p6-link">
              <HiExternalLink size={12} /> live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  status: PropTypes.oneOf(["deployed", "archived"]),
};

ProjectCards.defaultProps = {
  demoLink: null,
  tags: [],
  date: "2024",
  status: "archived",
};

export default ProjectCards;
