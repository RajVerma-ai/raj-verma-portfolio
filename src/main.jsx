import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Mail, Menu, X,
  Download, ExternalLink, Code2, Database, BrainCircuit,
  ChartNoAxesCombined, Terminal, Sparkles, GraduationCap,
  Award, BriefcaseBusiness, MapPin, Send, MessageCircle,
  Sun, Moon, Check, Layers3
} from "lucide-react";
import "./style.css";

const projects = [
  {
    id: "student",
    number: "01",
    title: "AI Student Performance Analysis",
    category: "AI / Machine Learning",
    year: "2026",
    description:
      "A student analytics project designed to explore academic performance, attendance patterns and student-level insights through a visual dashboard.",
    stack: ["Python", "Streamlit", "Pandas", "Machine Learning", "Data Visualization"],
    image: "/assets/student-performance-dashboard.jpg",
    note: "Student performance dashboard",
    github: "https://github.com/RajVerma-ai/AI-Student-Performance-Analysis"
  },
  {
    id: "fraud",
    number: "02",
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    year: "2026",
    description:
      "A machine-learning project focused on identifying suspicious credit-card transactions and understanding patterns associated with fraudulent activity.",
    stack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    visual: "fraud",
    note: "Project preview illustration",
    github: "https://github.com/RajVerma-ai"
  },
  {
    id: "books",
    number: "03",
    title: "Book Selling Website",
    category: "Web Development",
    year: "2026",
    description:
      "An online bookstore with user registration and login, book browsing, shopping cart, checkout flow and an admin dashboard.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/assets/book-selling-website.jpg",
    note: "Book selling website preview",
    github: "https://github.com/RajVerma-ai/NovelNest-Book-Selling-Website"
  },
  {
    id: "upi",
    number: "04",
    title: "UPI Transactions in India — 2021",
    category: "Data Analytics",
    year: "2026",
    description:
      "A Power BI dashboard exploring UPI transaction value and volume across banks, with comparisons and visual summaries of digital payment activity in India.",
    stack: ["Power BI", "Data Analytics", "Data Visualization"],
    image: "/assets/upi-transactions-2021.jpg",
    note: "UPI analytics dashboard",
    github: "https://github.com/RajVerma-ai/upi-transaction-2021"
  }
];

const certificates = [
  ["Introduction to Python", "IBM Developer Skills Network", "/certificates/introduction-to-python.pdf"],
  ["Data Visualization", "IBMCE", "/certificates/data-visualization.pdf"],
  ["Data Analysis with Python", "IBM Developer Skills Network", "/certificates/data-analysis-with-python.pdf"],
  ["Data Science 101", "IBM Developer Skills Network", "/certificates/data-science-101.pdf"],
  ["Artificial Intelligence Analyst", "IBMCE", "/certificates/artificial-intelligence-analyst.pdf"],
  ["Data Science & Artificial Intelligence Learning Path", "IBM Skills Network", "/certificates/data-science-ai-learning-path.pdf"]
];

const skills = [
  { name: "Python", kind: "Programming", icon: Code2, percent: 85, desc: "My favourite language for analysis, automation and machine-learning work." },
  { name: "SQL", kind: "Data", icon: Database, percent: 75, desc: "Querying, filtering and working with structured data." },
  { name: "Data Analytics", kind: "Data", icon: ChartNoAxesCombined, percent: 80, desc: "Exploring datasets and turning them into useful findings." },
  { name: "Data Visualization", kind: "Visualization", icon: Layers3, percent: 85, desc: "Communicating patterns through clear charts and dashboards." },
  { name: "Machine Learning", kind: "AI / ML", icon: BrainCircuit, percent: 70, desc: "Learning predictive modelling and practical ML workflows." },
  { name: "Linux", kind: "Tools", icon: Terminal, percent: 65, desc: "Working with the Linux environment and command line." }
];

function ParticleField() {
  const mountRef = useRef(null);

  useEffect(() => {
    const element = mountRef.current;
    if (!element) return undefined;

    let renderer;
    let animationFrame;
    let geometry;
    let material;
    let points;
    let camera;
    let scene;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        Math.max(element.clientWidth, 1) / Math.max(element.clientHeight, 1),
        0.1,
        100
      );
      camera.position.z = 22;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
      renderer.setSize(element.clientWidth || 1, element.clientHeight || 1);
      element.appendChild(renderer.domElement);

      const count = 450;
      const positions = new Float32Array(count * 3);
      for (let index = 0; index < count; index += 1) {
        positions[index * 3] = (Math.random() - 0.5) * 42;
        positions[index * 3 + 1] = (Math.random() - 0.5) * 25;
        positions[index * 3 + 2] = (Math.random() - 0.5) * 18;
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      material = new THREE.PointsMaterial({
        color: 0x79aaff,
        size: 0.045,
        transparent: true,
        opacity: 0.72
      });
      points = new THREE.Points(geometry, material);
      scene.add(points);

      const resize = () => {
        if (!element.clientWidth || !element.clientHeight) return;
        camera.aspect = element.clientWidth / element.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(element.clientWidth, element.clientHeight);
      };

      const animate = () => {
        animationFrame = window.requestAnimationFrame(animate);
        points.rotation.y += 0.00035;
        points.rotation.x += 0.00012;
        renderer.render(scene, camera);
      };

      window.addEventListener("resize", resize);
      animate();

      return () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", resize);
        geometry?.dispose();
        material?.dispose();
        renderer?.dispose();
        if (renderer?.domElement?.parentNode === element) {
          element.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error("Particle background could not be initialized:", error);
      renderer?.dispose();
      return undefined;
    }
  }, []);

  return <div className="particle-field" ref={mountRef} aria-hidden="true" />;
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatText, setChatText] = useState("");
  const [chatReply, setChatReply] = useState(
    "Hi! I’m Raj’s portfolio assistant. Ask me about his skills, projects, education or certifications."
  );
  const [activePreview, setActivePreview] = useState(null);
  const [toast, setToast] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "All",
    "AI / Machine Learning",
    "Machine Learning",
    "Web Development",
    "Data Analytics"
  ];

  const visibleProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Resume", "resume"],
    ["Projects", "projects"],
    ["Contact", "contact"]
  ];

  const askAssistant = (event) => {
    event.preventDefault();
    const question = chatText.trim().toLowerCase();
    if (!question) return;

    let answer =
      "Thanks for your question! You can contact Raj directly at rajnr80004@gmail.com for more details.";

    if (question.includes("skill")) {
      answer = "Raj works with Python, SQL, Data Analytics, Data Visualization, Machine Learning and Linux.";
    } else if (question.includes("project")) {
      answer = "Raj showcases four projects: AI Student Performance Analysis, Credit Card Fraud Detection, a Book Selling Website, and a Power BI UPI Transactions dashboard.";
    } else if (question.includes("education") || question.includes("college")) {
      answer = "Raj is pursuing BCA in Data Science & AI at Shri Ramswaroop Memorial University, with expected graduation in 2027.";
    } else if (question.includes("certificate")) {
      answer = "Raj has six IBM / IBM Skills Network certificates, including Python, Data Visualization, Data Analysis with Python, Data Science 101, AI Analyst and the DS & AI learning path.";
    } else if (question.includes("contact") || question.includes("email")) {
      answer = "You can reach Raj at rajnr80004@gmail.com or connect through LinkedIn and GitHub.";
    }

    setChatReply(answer);
    setChatText("");
  };

  return (
    <div className={dark ? "app dark" : "app light"}>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">R</span>
          <span>RAJ<span className="brand-dot">.</span></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn theme-btn"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
            type="button"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <ParticleField />
          <div className="hero-grid" />

          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="availability"
            >
              <span className="pulse" />
              OPEN TO LEARNING &amp; OPPORTUNITIES
            </motion.div>

            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Raj Verma<span className="blue-period">.</span>
            </motion.h1>

            <motion.div
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <span className="role-line" />
              Data Science &amp; AI Enthusiast
            </motion.div>

            <motion.p
              className="hero-copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              I explore data, build with Python, and turn curious questions into meaningful insights.
              Currently pursuing BCA in Data Science &amp; Artificial Intelligence.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <a className="btn btn-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a href="https://github.com/RajVerma-ai" target="_blank" rel="noreferrer">
                <Code2 size={17} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rajverma80004/" target="_blank" rel="noreferrer">
                <ExternalLink size={17} /> LinkedIn
              </a>
              <a href="https://x.com/rajnr80004" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i> Twitter
              </a>
              <span className="hero-location">
                <MapPin size={15} /> Lucknow, India
              </span>
            </motion.div>
          </div>

          <motion.div
            className="hero-portrait-wrap"
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <img src="/assets/raj-verma-park-webp.jpeg" alt="Raj Verma" />
            </div>
            <div className="portrait-tag">
              <span className="tag-dot" /> PYTHON • DATA • AI
            </div>
            <div className="floating-chip chip-top"><Code2 size={16} /> Python</div>
            <div className="floating-chip chip-bottom"><BrainCircuit size={16} /> Machine Learning</div>
          </motion.div>

          <a href="#about" className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="about section" id="about">
          <SectionHead
            eyebrow="GET TO KNOW ME"
            title={<>About <span className="gradient-text">Me.</span></>}
            sub="A quick introduction, my professional interests and the tools I am developing skills in."
          />

          <div className="about-profile">
            <div className="about-profile-photo">
              <img src="/assets/raj-verma-formal-webp.jpeg" alt="Raj Verma" />
            </div>
            <div className="profile-details">
              <p><strong>Name:</strong><span>Raj Verma</span></p>
              <p><strong>Job Role:</strong><span>Data Science &amp; Analytics</span></p>
              <p><strong>Experience:</strong><span>1.5 years exploring freelancing and independent practice</span></p>
              <p><strong>Address:</strong><span>Lucknow, India</span></p>
              <p><strong>Phone:</strong><a href="tel:+919305235750">+91 93052 35750</a></p>
            </div>
          </div>

          <div className="skill-bars-wrap">
            <h3 className="bars-heading">My Skills</h3>
            <div className="skill-bars">
              {skills.map((skill) => (
                <div className="skill-bar-item" key={skill.name}>
                  <div className="skill-bar-label"><span>{skill.name}</span><strong>{skill.percent}%</strong></div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-description">
            <h3>About Me</h3>
            <p className="about-copy">
              I’m Raj Verma, a Data Science and AI enthusiast from Lucknow, India, currently pursuing
              a BCA in Data Science &amp; Artificial Intelligence at Shri Ramswaroop Memorial University.
              I enjoy exploring datasets, discovering patterns and presenting insights through clear
              visualizations and practical projects.
            </p>
            <p className="about-copy">
              I have spent around 1.5 years learning about freelancing and developing my skills through
              independent practice and projects. I’m focused on improving my Python, SQL, analytics
              and machine-learning abilities as I work towards a career in Data Science.
            </p>
           <div className="about-details">
  <div className="detail-row">
    <strong>Profile:</strong>
    <span>Data Science & Analytics</span>
  </div>

  <div className="detail-row">
    <strong>Domain:</strong>
    <span>Data Analytics, Retail, Ecommerce & Digital Marketing</span>
  </div>

  <div className="detail-row">
    <strong>Education:</strong>
    <span>BCA – Data Science & AI</span>
  </div>

  <div className="detail-row">
    <strong>Language:</strong>
    <span>English, Hindi</span>
  </div>

  <div className="detail-row">
    <strong>BI Tools:</strong>
    <span>Microsoft Excel, Power BI, IBM Cognos Analytics</span>
  </div>

  <div className="detail-row">
    <strong>Data Skills:</strong>
    <span>Data Cleaning, Data Analysis, Data Visualization</span>
  </div>

  <div className="detail-row">
    <strong>Other Skills:</strong>
    <span>Machine Learning, Git, MS Office, Problem Solving, Cloud, SEO & DBMS</span>
  </div>

  <div className="detail-row">
    <strong>Interests:</strong>
    <span>Reading Books, Learning New Tools, Travelling, Mountains & Free Fire</span>
  </div>
</div>
            <div className="about-facts">
              <div><span className="fact-label">EDUCATION</span><strong>BCA · Data Science &amp; AI</strong></div>
              <div><span className="fact-label">GRADUATION</span><strong>2027</strong></div>
              <div><span className="fact-label">FAVOURITE TOOL</span><strong>EXCEL</strong></div>
            </div>
          </div>
        </section>
        <section className="projects section" id="projects">
          <SectionHead
            eyebrow="SELECTED WORK"
            title={<>Projects with a <span className="gradient-text">purpose.</span></>}
            sub="A selection of academic and personal work across analytics, machine learning and web development."
          />

          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={filter === category ? "filter active" : "filter"}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} project screenshot`} />
                  ) : (
                    <div className="project-visual fraud-visual">
                      <div className="fraud-top">
                        <span>TRANSACTION MONITOR</span>
                        <span className="live-dot" /> LIVE PREVIEW
                      </div>
                      <div className="fraud-number">
                        ₹ 24,850
                        <span> flagged transaction</span>
                      </div>
                      <div className="fraud-bars">
                        <i /><i /><i /><i /><i />
                        <i /><i /><i /><i /><i />
                      </div>
                      <div className="fraud-bottom">
                        <span>RISK SIGNALS</span>
                        <b>ANALYTICS / ML</b>
                      </div>
                    </div>
                  )}
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.year}</span>
                    <span className="preview-note">{project.note}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Code2 size={17} /> GitHub Repository <ArrowUpRight size={14} />
                    </a>
                    {project.image ? (
                      <button
                        type="button"
                        onClick={() => setActivePreview({
                          title: project.title,
                          src: project.image,
                          type: "image"
                        })}
                      >
                        View image <ArrowUpRight size={14} />
                      </button>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="resume">
        <section className="education section" id="education">
          <SectionHead
            eyebrow="THE LEARNING PATH"
            title={<>Building my <span className="gradient-text">foundation.</span></>}
          />
          <div className="timeline">
            <div className="timeline-line" />
            <div className="timeline-item">
              <div className="timeline-dot"><GraduationCap size={18} /></div>
              <div className="timeline-content">
                <span className="timeline-date">CURRENT · EXPECTED 2027</span>
                <h3>Bachelor of Computer Applications</h3>
                <p className="timeline-place">Shri Ramswaroop Memorial University</p>
                <p>Specialization in Data Science &amp; Artificial Intelligence. Currently in the third year.</p>
                <div className="stack">
                  <span>Data Science</span>
                  <span>Artificial Intelligence</span>
                  <span>Computer Applications</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certs section" id="certificates">
          <SectionHead
            eyebrow="CONTINUOUS LEARNING"
            title={<>Learning, one <span className="gradient-text">certificate at a time.</span></>}
            sub="IBM and IBM Skills Network learning achievements. Open a certificate to view the original PDF."
          />
          <div className="cert-grid">
            {certificates.map(([title, issuer, source], index) => (
              <motion.button
                className="cert-card"
                key={title}
                type="button"
                onClick={() => setActivePreview({ title, src: source, type: "pdf" })}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="cert-icon"><Award size={22} /></div>
                <div className="cert-info">
                  <span>{issuer}</span>
                  <h3>{title}</h3>
                  <small>View certificate <ArrowUpRight size={13} /></small>
                </div>
                <span className="cert-index">0{index + 1}</span>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="experience section">
          <SectionHead
            eyebrow="EXPERIENCE & GROWTH"
            title={<>Learning beyond the <span className="gradient-text">classroom.</span></>}
          />
          <div className="experience-card">
            <div className="experience-icon"><BriefcaseBusiness size={23} /></div>
            <div>
              <span className="timeline-date">SELF-DIRECTED LEARNING · 1.5 YEARS</span>
              <h3>Exploring Freelancing &amp; Independent Work</h3>
              <p>
                I have spent time learning how freelancing works and exploring independent-work
                opportunities. I’m currently building my skills and project portfolio; I have not
                yet completed a client project.
              </p>
            </div>
            <span className="experience-status">IN PROGRESS</span>
          </div>
        </section>

        </section>
        <section className="contact section" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <SectionHead
              eyebrow="HAVE A PROJECT OR OPPORTUNITY?"
              title={<>Let’s make something <span className="gradient-text">meaningful.</span></>}
              sub="I’m always open to learning, collaboration and conversations around data, Python and AI."
            />
            <div className="contact-actions">
              <a className="btn btn-primary contact-mail" href="mailto:rajnr80004@gmail.com">
                <Mail size={17} /> Email Raj <ArrowUpRight size={16} />
              </a>
              <a className="btn btn-ghost contact-phone" href="tel:+919305235750">
                <MessageCircle size={17} /> Call Raj
              </a>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/RajVerma-ai" target="_blank" rel="noreferrer">
                <Code2 /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rajverma80004/" target="_blank" rel="noreferrer">
                <ExternalLink /> LinkedIn
              </a>
              <a href="https://leetcode.com/u/RajVerma2007/" target="_blank" rel="noreferrer">
                <Code2 /> LeetCode
              </a>
              <a href="https://www.hackerrank.com/profile/rajnr80004" target="_blank" rel="noreferrer">
                <Terminal /> HackerRank
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-mark">R</span>
          <span>RAJ<span className="brand-dot">.</span></span>
        </a>
        <span>Designed &amp; built with curiosity by Raj Verma.</span>
        <span>© {new Date().getFullYear()} RAJ VERMA</span>
      </footer>

      <button
        className="chat-fab"
        type="button"
        onClick={() => setChatOpen((value) => !value)}
        aria-label="Open portfolio assistant"
      >
        <MessageCircle size={20} />
        <span>Ask</span>
      </button>

      <AnimatePresence>
        {chatOpen ? (
          <motion.div
            className="chat-panel"
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
          >
            <div className="chat-head">
              <div>
                <span className="chat-avatar"><Sparkles size={16} /></span>
                <div><b>Portfolio Assistant</b><small>Ask me about Raj</small></div>
              </div>
              <button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>
            <div className="chat-messages">
              <div className="chat-bubble">{chatReply}</div>
            </div>
            <form className="chat-input" onSubmit={askAssistant}>
              <input
                value={chatText}
                onChange={(event) => setChatText(event.target.value)}
                placeholder="Ask about skills, projects..."
                aria-label="Ask a question"
              />
              <button type="submit" aria-label="Send message"><Send size={17} /></button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activePreview ? (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePreview(null)}
          >
            <motion.div
              className="modal"
              initial={{ y: 20, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-head">
                <b>{activePreview.title}</b>
                <button type="button" onClick={() => setActivePreview(null)} aria-label="Close preview">
                  <X />
                </button>
              </div>
              {activePreview.type === "pdf" ? (
                <iframe src={activePreview.src} title={activePreview.title} />
              ) : (
                <img src={activePreview.src} alt={activePreview.title} />
              )}
              <a className="modal-open" href={activePreview.src} target="_blank" rel="noreferrer">
                Open in new tab <ExternalLink size={15} />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {toast ? (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            <Check size={16} /> {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
