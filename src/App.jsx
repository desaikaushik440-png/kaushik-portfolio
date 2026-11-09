
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,   Mail, Menu, X,
  Shield, Terminal, Code2, Globe, ExternalLink,
  Download, ChevronDown
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    name: "VulnScanner",
    type: "CYBERSECURITY / FULL STACK",
    description:
      "A vulnerability assessment platform featuring Nmap scanning, CVE detection, CVSS scoring, risk analysis and scan reports.",
    stack: ["React", "Node.js", "PostgreSQL", "Nmap"],
    icon: Shield,
    link: "https://github.com/"
  },
  {
    number: "02",
    name: "Ubuntu Carnival",
    type: "WEB DEVELOPMENT / EVENT",
    description:
      "A cinematic college festival website featuring animated carnival visuals, event information and registration integration.",
    stack: ["React", "Vite", "CSS", "Vercel"],
    icon: Globe,
    link: "https://ubuntu-carnival.vercel.app/"
  },
  {
    number: "03",
    name: "Cybersecurity Labs",
    type: "SECURITY RESEARCH / LEARNING",
    description:
      "Practical cybersecurity learning through vulnerability analysis, web security labs and penetration testing exercises.",
    stack: ["Burp Suite", "Kali Linux", "Nmap"],
    icon: Terminal,
    link: "https://tryhackme.com/"
  }
];

const skills = [
  ["01", "Ethical Hacking", "Vulnerability assessment, penetration testing"],
  ["02", "Network Security", "Nmap, Wireshark, network analysis"],
  ["03", "Web Security", "Burp Suite, SQLi, XSS, CSRF"],
  ["04", "Security Operations", "Splunk, Microsoft Sentinel, Elastic"],
  ["05", "Development", "React, JavaScript, Node.js, Python"],
  ["06", "Infrastructure", "Linux, Docker, PostgreSQL"]
];

const experience = [
  {
    date: "122 HOURS",
    title: "Cybersecurity Internship – I",
    description:
      "Completed a 122-hour cybersecurity internship involving practical security learning, vulnerability identification, research and technical documentation."
  },
  {
    date: "122 HOURS",
    title: "Cybersecurity Internship – II",
    description:
      "Completed a second 122-hour internship, working on vulnerability reporting, security research, vulnerability assessment and cybersecurity lab development."
  },
  {
    date: "LEADERSHIP",
    title: "President – Ubuntu",
    description:
      "Leading student teams, event planning, marketing, coordination and execution of college festival activities at Patkar-Varde College."
  },
  {
    date: "EDUCATION",
    title: "B.Sc. Computer Science",
    description:
      "Third-year Computer Science student at Patkar-Varde College, Goregaon, developing technical and analytical skills."
  }
];


function CyberTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "KAUSHIK OS v2.0 — Interactive portfolio terminal." },
    { type: "system", text: "Session established. Welcome, visitor." },
    { type: "success", text: "Select a command below to explore Kaushik's world." }
  ]);

  const commands = ["whoami", "skills", "projects", "experience", "contact"];

  const responses = {
    help: "Available commands: whoami, skills, projects, experience, contact, clear",
    whoami: "KAUSHIK DESAI | B.Sc. Computer Science | Cybersecurity Enthusiast | Developer",
    skills: "SECURITY: Ethical Hacking, VAPT, Nmap, Burp Suite, Wireshark | DEVELOPMENT: React, JavaScript, Node.js, Python | OPERATIONS: Linux, SIEM",
    projects: "01 — VulnScanner: Vulnerability assessment platform | 02 — Ubuntu Carnival: Event website | 03 — Cybersecurity Labs: Practical security learning",
    experience: "CYBERSECURITY: Two 122-hour internships | LEADERSHIP: President, Ubuntu at Patkar-Varde College | EDUCATION: Third-year B.Sc. Computer Science",
    contact: "EMAIL: desaikaushik441@gmail.com | LINKEDIN: linkedin.com/in/kaushik28/",
  };

  const executeCommand = (value) => {
    const raw = value.trim();
    const cmd = raw.toLowerCase();
    if (!raw) return;

    if (cmd === "clear") {
      setHistory([
        { type: "system", text: "Terminal cleared. Session active." }
      ]);
      setCommand("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", text: `kaushik@portfolio:~$ ${raw}` },
      {
        type: responses[cmd] ? "output" : "error",
        text: responses[cmd] || `Command not found: ${raw}. Type 'help' to see available commands.`
      }
    ]);
    setCommand("");
  };

  const runCommand = (e) => {
    e.preventDefault();
    executeCommand(command);
  };

  return (
    <section className="section-wrap section terminal-section" id="terminal">
      <div className="section-heading">
        <span>04 / INTERACTIVE EXPERIENCE</span>
        <h2>Enter my <span>world.</span></h2>
        <p className="terminal-intro">
          A little command line. A lot about me. Explore my skills, projects and journey.
        </p>
      </div>

      <div className="terminal-window">
        <div className="terminal-topbar">
          <div className="terminal-dots"><i /><i /><i /></div>
          <span>KAUSHIK_TERMINAL — zsh</span>
          <span className="terminal-live">● SYSTEM ONLINE</span>
        </div>

        <div className="terminal-body" aria-live="polite">
          <div className="terminal-welcome">
            <span className="terminal-ascii">K<span>D</span>.</span>
            <div>
              <strong>Welcome to Kaushik's interactive portfolio.</strong>
              <p>Choose a command to explore. No terminal experience required.</p>
            </div>
          </div>

          <div className="terminal-history">
            {history.map((item, index) => (
              <div className={`terminal-line ${item.type}`} key={index}>
                {item.text}
              </div>
            ))}
          </div>

          <div className="terminal-guide">
            <div className="terminal-guide-heading">
              <span>EXPLORE COMMANDS</span>
              <span className="terminal-guide-hint">CLICK TO RUN</span>
            </div>
            <div className="terminal-command-chips">
              {commands.map((cmd) => (
                <button
                  type="button"
                  className="terminal-command-chip"
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                >
                  <span>›</span> {cmd}
                </button>
              ))}
            </div>
          </div>

          <form className="terminal-input-row" onSubmit={runCommand}>
            <span>kaushik@portfolio:~$</span>
            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder='Try "skills", "projects" or "contact"...'
              aria-label="Enter a portfolio command"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit">EXECUTE ↵</button>
          </form>
        </div>

        <div className="terminal-footer">
          <span>LOCAL PORTFOLIO ENVIRONMENT</span>
          <button type="button" onClick={() => executeCommand("clear")}>CLEAR SESSION</button>
          <span>DEMO MODE · NO SYSTEM ACCESS</span>
        </div>
      </div>
    </section>
  );
}
function VulnScannerCaseStudy() {
  const architecture = [
    ["01", "Frontend", "React + Vite", "User dashboard and scan controls"],
    ["02", "Backend API", "Node.js + Express", "Authentication and scan orchestration"],
    ["03", "Scanner", "Nmap", "Network discovery and service detection"],
    ["04", "Intelligence", "CVE + CVSS", "Vulnerability mapping and risk assessment"],
    ["05", "Database", "PostgreSQL", "Scan history and assessment records"]
  ];

  const features = [
    ["Network Discovery", "Identify reachable hosts and exposed services."],
    ["Vulnerability Detection", "Map discovered services to relevant vulnerability information."],
    ["Risk Assessment", "Present CVSS-based severity and risk information."],
    ["Scan History", "Keep records of previous security assessments."],
    ["Security Reports", "Generate reports for assessment findings."],
    ["Admin Dashboard", "Provide an overview of scans and platform activity."]
  ];

  return (
    <section className="section-wrap section case-study" id="case-study">
      <div className="section-heading">
        <span>04 / FEATURED CASE STUDY</span>
        <h2>Inside <span>VulnScanner.</span></h2>
      </div>

      <div className="case-intro">
        <div>
          <span className="case-label">CYBERSECURITY PLATFORM</span>
          <h3>Turning network visibility into security insights.</h3>
        </div>
        <p>
          VulnScanner is a vulnerability assessment platform concept
          designed to combine network scanning, vulnerability intelligence
          and risk reporting in one interface.
        </p>
      </div>

      <div className="case-meta">
        <div><span>DOMAIN</span><strong>Vulnerability Assessment</strong></div>
        <div><span>SCANNING</span><strong>Nmap</strong></div>
        <div><span>BACKEND</span><strong>Node.js</strong></div>
        <div><span>DATABASE</span><strong>PostgreSQL</strong></div>
      </div>

      <div className="architecture">
        <div className="architecture-heading">
          <span>01 / SYSTEM ARCHITECTURE</span>
          <span className="architecture-status">PLATFORM OVERVIEW</span>
        </div>

        <div className="architecture-flow">
          {architecture.map((item, index) => (
            <div className="architecture-item" key={item[0]}>
              <span>{item[0]}</span>
              <div>
                <h4>{item[1]}</h4>
                <strong>{item[2]}</strong>
                <p>{item[3]}</p>
              </div>
              {index < architecture.length - 1 && (
                <div className="architecture-connector">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="case-features">
        <div className="architecture-heading">
          <span>02 / KEY CAPABILITIES</span>
        </div>
        <div className="case-feature-grid">
          {features.map((feature, index) => (
            <article className="case-feature" key={feature[0]}>
              <span>0{index + 1}</span>
              <h4>{feature[0]}</h4>
              <p>{feature[1]}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="case-disclaimer">
        <span>PROJECT NOTE</span>
        <p>
          Architecture and capabilities shown here describe the project
          design. Only verified, implemented features should be presented
          as completed functionality.
        </p>
      </div>
    </section>
  );
}


function LearningSection() {
  const featured = [
    {
      title: "Ethical Hacking",
      issuer: "Boston Institute of Analytics",
      date: "December 2025",
      image: "/certificates/bia-ethical-hacking.png"
    },
    {
      title: "Cyber Security",
      issuer: "Boston Institute of Analytics",
      date: "December 2025",
      image: "/certificates/bia-cyber-security.png"
    }
  ];

  const certificates = [
    ["Introduction to Bug Bounty", "introduction-to-bug-bounty.pdf"],
    ["Foundations of Log Analysis for Cyber Defense", "foundations-of-log-analysis.pdf"],
    ["Fundamentals of Game Hacking Development", "fundamentals-of-game-hacking-development.pdf"],
    ["Introduction to Generative AI Studio", "google-cloud-generative-ai-studio.pdf"],
    ["Data Visualisation", "forage-data-visualisation.pdf"],
    ["GenAI Job Simulation", "forage-genai-job-simulation.pdf"],
    ["Cyber Security Internship Certificate", "dcyber-internship-certificate.pdf"],
    ["Internship Completion Letter", "dcyber-internship-letter.pdf"]
  ];

  const learning = [
    {
      title: "TryHackMe",
      description: "Practical cybersecurity rooms, Linux and networking exercises.",
      url: "https://tryhackme.com/"
    },
    {
      title: "PortSwigger Web Security Academy",
      description: "Web security practice including SQL injection, XSS, CSRF and authentication vulnerabilities.",
      url: "https://portswigger.net/web-security"
    }
  ];

  return (
    <section className="section-wrap section learning" id="learning">
      <div className="section-heading">
        <span>05 / CERTIFICATIONS & ACHIEVEMENTS</span>
        <h2>Credentials that <span>build trust.</span></h2>
      </div>

      <p className="learning-intro">
        Professional training, cybersecurity achievements and practical learning
        from my technology journey.
      </p>

      <div className="featured-cert-grid">
        {featured.map((cert, index) => (
          <article className="featured-cert-card" key={cert.title}>
            <a className="featured-cert-image" href={cert.image} target="_blank" rel="noreferrer">
              <img src={cert.image} alt={`${cert.title} certificate`} />
              <span className="featured-cert-number">0{index + 1} / FEATURED</span>
            </a>
            <div className="featured-cert-info">
              <span>{cert.issuer}</span>
              <h3>{cert.title}</h3>
              <p>{cert.date}</p>
              <a href={cert.image} target="_blank" rel="noreferrer">
                View Certificate <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="cert-list-heading">
        <span>ADDITIONAL CERTIFICATES</span>
        <span>08 CREDENTIALS</span>
      </div>

      <div className="certificates-grid">
        {certificates.map(([title, file], index) => (
          <article className="certificate-card" key={file}>
            <div className="certificate-card-top">
              <span>0{index + 1}</span>
              <span className="certificate-mark"><Shield size={19} /></span>
            </div>
            <span className="learning-category">CERTIFICATE / ACHIEVEMENT</span>
            <h3>{title}</h3>
            <a href={`/certificates/${file}`} target="_blank" rel="noreferrer">
              View Certificate <ArrowUpRight size={15} />
            </a>
          </article>
        ))}
      </div>

      <div className="cert-list-heading learning-platform-heading">
        <span>CONTINUOUS LEARNING</span>
        <span>HANDS-ON PLATFORMS</span>
      </div>

      <div className="learning-grid">
        {learning.map((item, index) => (
          <article className="learning-card" key={item.title}>
            <div className="learning-card-top">
              <span>0{index + 1}</span>
              <a href={item.url} target="_blank" rel="noreferrer">↗</a>
            </div>
            <span className="learning-category">HANDS-ON LEARNING</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
function FreelanceSection() {
  const services = [
    {
      number: "01",
      title: "College Projects",
      description: "Custom academic project development, mini projects, final-year project support and technical implementation.",
      tags: ["BSc CS", "Final Year", "Project Support"]
    },
    {
      number: "02",
      title: "Website Development",
      description: "Modern, responsive websites, personal portfolios, business websites and landing pages.",
      tags: ["React", "HTML/CSS", "JavaScript"]
    },
    {
      number: "03",
      title: "Full-Stack Development",
      description: "Web applications with frontend, backend APIs, databases, authentication and deployment.",
      tags: ["Node.js", "Express", "PostgreSQL"]
    },
    {
      number: "04",
      title: "Android Applications",
      description: "Application development, UI implementation, API integration and debugging.",
      tags: ["Android", "Java", "API Integration"]
    },
    {
      number: "05",
      title: "Database & Backend",
      description: "Database design, SQL queries, backend development and application integration.",
      tags: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      number: "06",
      title: "Technical Support",
      description: "Debugging, project documentation, deployment assistance and technical guidance.",
      tags: ["Debugging", "Documentation", "Deployment"]
    }
  ];

  return (
    <section className="section-wrap section freelance-section" id="freelance">
      <div className="section-heading">
        <span>06 / FREELANCE & SERVICES</span>
        <h2>Ideas into <span>reality.</span></h2>
      </div>

      <div className="freelance-intro">
        <div>
          <span className="freelance-availability">
            <i /> AVAILABLE FOR FREELANCE PROJECTS
          </span>
          <h3>Need something<br />built? Let's create it.</h3>
        </div>
        <p>
          Alongside my Computer Science studies and cybersecurity journey,
          I work on freelance development projects. I help students,
          individuals and organisations turn ideas into functional
          digital solutions.
        </p>
      </div>

      <div className="freelance-grid">
        {services.map(service => (
          <article className="freelance-card" key={service.number}>
            <div className="freelance-card-number">{service.number}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="freelance-tags">
              {service.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="freelance-cta">
        <div>
          <span>HAVE A PROJECT IN MIND?</span>
          <h3>Let's work together.</h3>
          <p>Have an idea, project or website requirement? Let's discuss it.</p>
        </div>
        <a href="#contact" className="freelance-contact-btn">
          Discuss a Project ↗
        </a>
      </div>
    </section>
  );
}


function MouseFX() {
  const cursor = useRef(null);
  const ring = useRef(null);
  const glow = useRef(null);
  const trails = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = -100, y = -100;
    let ringX = x, ringY = y;
    let glowX = x, glowY = y;
    const dots = Array.from({ length: 6 }, () => ({ x, y }));
    let frame;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const down = () => {
      cursor.current?.classList.add("mouse-click");
      ring.current?.classList.add("mouse-ring-click");
    };

    const up = () => {
      cursor.current?.classList.remove("mouse-click");
      ring.current?.classList.remove("mouse-ring-click");
    };

    const over = (e) => {
      if (e.target.closest("a, button, input, textarea, .project-card, .skill-card, .certificate-card, .featured-cert-card")) {
        cursor.current?.classList.add("mouse-hover");
        ring.current?.classList.add("mouse-ring-hover");
      }
    };

    const out = () => {
      cursor.current?.classList.remove("mouse-hover");
      ring.current?.classList.remove("mouse-ring-hover");
    };

    const animate = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      glowX += (x - glowX) * 0.07;
      glowY += (y - glowY) * 0.07;

      if (cursor.current) cursor.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`;
      if (glow.current) glow.current.style.transform = `translate3d(${glowX}px,${glowY}px,0) translate(-50%,-50%)`;

      dots.forEach((dot, i) => {
        dot.x += (x - dot.x) * (0.22 - i * 0.025);
        dot.y += (y - dot.y) * (0.22 - i * 0.025);
        const el = trails.current[i];
        if (el) {
          el.style.transform = `translate3d(${dot.x}px,${dot.y}px,0) translate(-50%,-50%)`;
          el.style.opacity = String(0.65 - i * 0.09);
        }
      });

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  }, []);

  return (
    <div className="mouse-fx" aria-hidden="true">
      <div className="mouse-spotlight" ref={glow} />
      {Array.from({ length: 6 }, (_, i) => (
        <span className="mouse-trail" key={i} ref={el => trails.current[i] = el} />
      ))}
      <div className="mouse-orbit" ref={ring}>
        <span />
      </div>
      <div className="mouse-core" ref={cursor} />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Case Study", "#case-study"],
    ["Learning", "#learning"],
    ["Journey", "#journey"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <div className="noise" />
      <MouseFX />
      <header className="navbar">
        <a className="logo" href="#home">
          <img src="/kaushik-logo-cropped.png" alt="Kaushik Desai Logo" />
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([name, href]) => (
            <a key={name} href={href} onClick={closeMenu}>
              {name}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="status-dot" />
              CYBERSECURITY • DEVELOPMENT • INNOVATION
            </motion.div>

            <motion.p
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              KAUSHIK
              <br />
              <span>DESAI.</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Securing the digital world.
              <br />
              <span>Building what comes next.</span>
            </motion.h2>

            <p className="hero-description">
              Computer Science student and cybersecurity enthusiast
              exploring ethical hacking, vulnerability assessment and
              modern web technologies.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button-outline" href="#contact">
                Get in touch
              </a>
              <a className="button-outline resume-button"
                 href="/resume.pdf"
                 download="Kaushik_Desai_Resume.pdf">
                <Download size={17} /> Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/kaushik28/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Code2 />
              </a>
              <a href="https://github.com/desaikaushik440-png" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Code2 />
              </a>
              <a href="mailto:desaikaushik441@gmail.com" aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-frame">
              <img
                src="/images/profile-cutout.png"
                alt="Kaushik Desai"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
              <div className="portrait-overlay" />
              <div className="portrait-caption">
                <span>KAUSHIK DESAI</span>
                <small>CYBERSECURITY ENTHUSIAST</small>
              </div>
            </div>
            <div className="floating-card card-top">
              <Shield size={19} />
              <span>Think Secure.</span>
            </div>
            <div className="floating-card card-bottom">
              <Code2 size={19} />
              <span>Build Different.</span>
            </div>
            <span className="visual-index">01 / PORTFOLIO</span>
          </motion.div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE <ChevronDown size={16} />
          </a>
        </section>

        <section className="intro-strip">
          <div>ETHICAL HACKING</div>
          <span>✳</span>
          <div>WEB DEVELOPMENT</div>
          <span>✳</span>
          <div>NETWORK SECURITY</div>
          <span>✳</span>
          <div>CREATIVE THINKING</div>
        </section>

        <section className="section-wrap about section" id="about">
          <div className="section-heading">
            <span>01 / ABOUT ME</span>
            <h2>Curious mind.<br /><span>Security mindset.</span></h2>
          </div>

          <div className="about-content">
            <p className="large-copy">
              I'm Kaushik, a Computer Science student with a strong
              interest in cybersecurity and technology.
            </p>
            <p>
              My journey revolves around understanding how systems work,
              identifying security weaknesses and building meaningful
              digital experiences. I enjoy hands-on security labs,
              problem-solving and developing projects that combine
              creativity with technology.
            </p>
            <p>
              Beyond technology, I enjoy leadership, event management
              and collaborating with people to turn ideas into reality.
            </p>
            <div className="about-tags">
              <span>Always Learning</span>
              <span>Problem Solver</span>
              <span>Team Leader</span>
            </div>
          </div>
        </section>

        <section className="section-wrap section skills" id="skills">
          <div className="section-heading">
            <span>02 / WHAT I DO</span>
            <h2>My technical <span>toolkit.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map(([number, name, description], index) => (
              <motion.div
                className="skill-card"
                key={number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <span className="skill-number">{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <ArrowUpRight className="skill-arrow" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap section projects" id="projects">
          <div className="section-heading">
            <span>03 / SELECTED WORK</span>
            <h2>Ideas into <span>reality.</span></h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 8, scale: 1.008 }}
                >
                  <span className="project-number">{project.number}</span>
                  <div className="project-icon"><Icon size={28} /></div>
                  <div className="project-info">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.stack.map(item => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>
                    <ExternalLink />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <VulnScannerCaseStudy />

        <LearningSection />

        <section className="section-wrap section journey" id="journey">
          <div className="section-heading">
            <span>04 / MY JOURNEY</span>
            <h2>Learning. Leading. <span>Growing.</span></h2>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-dot" />
                <span className="timeline-date">{item.date}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CyberTerminal />

        <FreelanceSection />

      <section className="contact section-wrap" id="contact">
          <span className="contact-label">05 / LET'S CONNECT</span>
          <h2>Have an idea?<br /><span>Let's make it happen.</span></h2>
          <p>
            Open to opportunities, collaborations and conversations
            around cybersecurity and technology.
          </p>
          <div className="final-contact-actions">
            <a
              className="button-primary"
              href="https://www.linkedin.com/in/kaushik28/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-icon-text">in</span>
              Connect on LinkedIn
              <ArrowUpRight size={17} />
            </a>

            <a
              className="button-outline"
              href="mailto:desaikaushik441@gmail.com"
            >
              <Mail size={17} />
              Email Me
            </a>
          </div>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/kaushik28/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
            <a href="https://github.com/desaikaushik440-png" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
            <a href="mailto:desaikaushik441@gmail.com">Email <ArrowUpRight size={14} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home"><img src="/kaushik-logo-cropped.png" alt="Kaushik Desai Logo" /></a>
        <p>© {new Date().getFullYear()} Kaushik Desai. Built with curiosity.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default App;
