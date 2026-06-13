import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../Assets/home_img-Without_background.png";
import { useTheme } from "../../context/ThemeContext";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const BLOB_PATH = "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z";

const STACK = ["aws", "azure", "kubernetes", "terraform", "ansible", "docker", "jenkins", "python"];

const IDENTITY = [
  ["name", '"aliasgar"'],
  ["role", '"Cloud_devops"'],
  ["loc",  '"Ottawa, ON, Canada"'],
  ["tz",   '"UTC-05:00"'],
];

function Home() {
  const { theme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

  const preventContextMenu = (e) => e.preventDefault();

  return (
    <section>
      <div className="home-section home-tel-outer" id="home">
        <div className="home-tel-inner">

          {/* ── Status bar ── */}
          <div className="home-tel-statusbar">
            <div className="home-tel-sb-left">
              <span className="home-tel-live-dot" />
              <span className="home-tel-brand">aliasgar.cloud</span>
              <span className="home-tel-muted">/ portfolio.v3</span>
            </div>
            <div className="home-tel-sb-right">
              <span className="home-tel-accent-text">●</span>
              <span className="home-tel-muted"> live · {ts} UTC</span>
            </div>
          </div>

          {/* ── 3-column grid ── */}
          <div className="home-tel-grid">

            {/* LEFT: identity / stack / status */}
            <aside className="home-tel-left">
              <div className="home-tel-block">
                <div className="home-tel-block-label">{"// IDENTITY"}</div>
                {IDENTITY.map(([k, v]) => (
                  <div key={k} className="home-tel-kv">
                    <span className="home-tel-key">{k}</span>
                    <span className="home-tel-eq"> = </span>
                    <span className="home-tel-val">{v}</span>
                  </div>
                ))}
              </div>

              <div className="home-tel-block">
                <div className="home-tel-block-label">{"// STACK"}</div>
                <div className="home-tel-tags">
                  {STACK.map((s) => (
                    <span key={s} className="home-tel-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="home-tel-block">
                <div className="home-tel-block-label">{"// STATUS"}</div>
                <div className="home-tel-status-item home-tel-status-active">◆ open to work</div>
                <div className="home-tel-status-item">◇ Cloud · DevOps · AI</div>
                <div className="home-tel-status-item">◇ Ottawa, Canada</div>
              </div>
            </aside>

            {/* CENTER: hero */}
            <main className="home-tel-center">
              <div className="home-tel-top">
                <div className="home-tel-whoami">
                  <span className="home-tel-prompt">$</span>
                  <span className="home-tel-cmd"> whoami</span>
                  <span className="home-tel-cursor" />
                </div>

                <div className="home-tel-name-row">
                  <h1 className="home-tel-name">
                    Aliasgar<br />
                    <span className="home-tel-name-muted">Husain.</span>
                  </h1>
                  <svg
                    viewBox="0 0 479 467"
                    xmlns="http://www.w3.org/2000/svg"
                    className="home-tel-blob"
                    onContextMenu={preventContextMenu}
                  >
                    <defs>
                      <clipPath id="profile-blob-clip">
                        <path d={BLOB_PATH} />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#profile-blob-clip)">
                      <path
                        d={BLOB_PATH}
                        fill={theme === "light" ? "#818cf8" : "#0d1117"}
                        style={{ transition: "fill 0.4s ease" }}
                      />
                      <image href={profileImg} x="-50" y="0" width="479" height="467" />
                    </g>
                  </svg>
                </div>

                <p className="home-tel-tagline">
                  Cloud &amp; DevOps Engineer. Building{" "}
                  <span className="home-tel-highlight">scalable infrastructure</span>,{" "}
                  <span className="home-tel-highlight">automated pipelines</span>, and shipping to{" "}
                  <span className="home-tel-accent-text">production</span>.
                </p>
              </div>

              <div className="home-tel-bottom">
                <div className="home-tel-cta">
                  <Link to="/project" className="home-tel-btn-primary">↗ view_projects()</Link>
                  <Link to="/resume" className="home-tel-btn-secondary">resume.pdf</Link>
                </div>
                <div className="home-tel-social">
                  <a href="https://github.com/aliasgarxo" target="_blank" rel="noopener noreferrer" className="home-tel-social-link" aria-label="GitHub"><AiFillGithub /></a>
                  <a href="https://www.linkedin.com/in/aliasgar-husain-7a3510158/" target="_blank" rel="noopener noreferrer" className="home-tel-social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  <a href="https://www.instagram.com/imaliasgar0" target="_blank" rel="noopener noreferrer" className="home-tel-social-link" aria-label="Instagram"><AiFillInstagram /></a>
                  <a href="https://twitter.com/aliasgarxo" target="_blank" rel="noopener noreferrer" className="home-tel-social-link" aria-label="Twitter"><AiOutlineTwitter /></a>
                </div>
              </div>
            </main>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
