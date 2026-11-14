
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  PenLine,
  Lightbulb,
  BookOpen,
  Search,
  Mail,
  Sparkles,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "PRODUCT COPYWRITING",
    title: "Beyond the specifications",
    description:
      "A product-copy concept showing how everyday smartphone features can be presented through practical customer benefits.",
    type: "Personal concept",
    tags: ["Product positioning", "Benefits", "Persuasive writing"],
  },
  {
    number: "02",
    category: "SOCIAL MEDIA CONTENT",
    title: "Ideas for the digital generation",
    description:
      "A collection of professional social content exploring technology, learning, creativity and everyday digital experiences.",
    type: "Personal writing",
    tags: ["LinkedIn", "Captions", "Digital communication"],
  },
  {
    number: "03",
    category: "BRAND & TAGLINE WRITING",
    title: "Make every word count",
    description:
      "A creative exercise in developing memorable headlines and short brand messages around a central idea.",
    type: "Creative exercise",
    tags: ["Headlines", "Taglines", "Brand voice"],
  },
  {
    number: "04",
    category: "WEBSITE CONTENT",
    title: "A clearer digital experience",
    description:
      "An exploration of website messaging, page structure and content that helps visitors understand a product or service.",
    type: "Personal project",
    tags: ["Web content", "UX writing", "Clarity"],
  },
];

const approach = [
  {
    number: "01",
    title: "Understand the objective",
    description:
      "Every writing task has a purpose. I first identify what the message needs to achieve and what the reader should take away.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Explore the subject",
    description:
      "I research the topic, examine useful details and look for the information that makes the subject worth communicating.",
    icon: Search,
  },
  {
    number: "03",
    title: "Find the right angle",
    description:
      "I identify the strongest idea and decide how to present it in a way that suits the audience and the format.",
    icon: PenLine,
  },
  {
    number: "04",
    title: "Write and refine",
    description:
      "I shape the draft, improve the flow, remove unnecessary wording and review the final message for clarity.",
    icon: BookOpen,
  },
];

const interests = [
  "Advertising and brand communication",
  "Consumer behaviour and product positioning",
  "Digital marketing and SEO",
  "Technology and business storytelling",
  "Research-based content",
];

const accordionItems = [
  {
    question: "What does studying Data Science bring to my writing?",
    answer:
      "It encourages me to examine information carefully, recognise patterns and think logically. I enjoy combining this analytical perspective with creative ideas, especially when writing about technology, products and business.",
  },
  {
    question: "Why am I interested in advertising and branding?",
    answer:
      "I'm interested in how businesses communicate their identity and make people understand what makes their products different. I enjoy exploring headlines, brand messages and the small details that influence how a message is received.",
  },
  {
    question: "How do I use AI in my creative process?",
    answer:
      "I use tools such as ChatGPT and Claude to brainstorm possibilities, explore unfamiliar subjects and organise early ideas. Grammarly also helps me review my drafts. I still make the final decisions about the message, wording and direction.",
  },
  {
    question: "What topics do I enjoy exploring?",
    answer:
      "Technology, digital products, consumer behaviour, education, business communication and digital marketing are among the subjects that interest me. Learning about unfamiliar topics gives me new perspectives and ideas to write about.",
  },
  {
    question: "What am I working towards?",
    answer:
      "I'm developing my writing skills, building original portfolio samples and looking for opportunities to gain practical experience. My goal is to grow into a thoughtful creative professional who can contribute to content, copywriting and brand communication projects.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          V<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#approach" onClick={closeMenu}>My approach</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <img
            className="hero-background"
            src="/hero-image.png"
            alt=""
          />
          <div className="hero-overlay"></div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">
              INDEPENDENT WRITING & CREATIVE WORK
            </span>

            <h1>
              Words with <em>purpose.</em>
              <br />
              Ideas with meaning.
            </h1>

            <p>
              I explore ideas, understand what makes them interesting
              and turn them into content people can actually use,
              remember and relate to.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button-text" href="#about">
                Get to know me <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <a className="scroll-indicator" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>

          <span className="hero-index">01 / 06</span>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-label">
            <span>01</span> THE PERSON BEHIND THE WORDS
          </div>

          <div className="about-grid">
            <motion.div
              className="about-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>
                Curious by nature.
                <br />
                <em>A writer by choice.</em>
              </h2>
            </motion.div>

            <div className="about-copy">
              <p className="about-lead">
                I'm Vignesh Raju Odayappan, an aspiring content writer
                and copywriter currently pursuing a BS in Data Science
                at IIT Madras.
              </p>

              <p>
                My interest in writing comes from curiosity. I enjoy
                observing how people think, why certain messages attract
                attention and how the right explanation can make even a
                complicated idea easier to understand.
              </p>

              <p>
                Outside my academic studies, I've developed my writing
                through personal projects, LinkedIn content and website
                creation. These experiences have helped me experiment
                with language, formats and different ways of presenting
                an idea.
              </p>

              <p className="about-note">
                I believe good writing starts long before the first
                sentence is written.
              </p>

              <a
                className="underlined-link"
                href="https://linkedin.com/in/vignesh-raju-odayappan/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* WORK - ROTATING CARD DECK */}
<section className="section work-section" id="work">
  <div className="section-label">
    <span>02</span> SELECTED WORK & CREATIVE EXPLORATIONS
  </div>

  <div className="section-heading-row">
    <div>
      <h2>
        Different formats.
        <br />
        <em>Different purposes.</em>
      </h2>
    </div>

    <p>
      Every format has a different job. Explore the kinds of
      writing I enjoy developing, from product messages to
      digital content and brand ideas.
    </p>
  </div>

  <div className="project-deck-area">
    <div className="project-deck">
      {projects.slice(0, 3).map((_, position) => {
        const project =
          projects[(activeProject + position) % projects.length];

        return (
          <motion.article
            key={project.number}
            className={`deck-card deck-card-${position}`}
            initial={false}
            animate={{
              x: position === 0 ? 0 : position === 1 ? 35 : -35,
              y: position === 0 ? 0 : position === 1 ? 15 : 25,
              rotate: position === 0 ? 0 : position === 1 ? 5 : -5,
              scale: position === 0 ? 1 : position === 1 ? 0.94 : 0.88,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
            }}
          >
            <div className="deck-card-inner">
              <div className="project-top">
                <span>{project.number} / 04</span>
                <PenLine size={19} />
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-type">{project.type}</span>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="deck-card-footer">
                <span>WRITING EXPLORATION</span>
                <span>V.</span>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>

    <div className="deck-controls">
      <div className="deck-counter">
        <span>0{activeProject + 1}</span>
        <span className="deck-counter-line"></span>
        <span>0{projects.length}</span>
      </div>

      <button
        className="deck-next-button"
        onClick={() =>
          setActiveProject((current) => (current + 1) % projects.length)
        }
      >
        Next project <ArrowRight size={17} />
      </button>
    </div>
  </div>

  <p className="work-disclaimer">
    These are personal concepts and writing directions, not paid
    client projects. Full writing samples will be added as they
    are developed.
  </p>
</section>

        {/* APPROACH */}
        <section className="section approach-section" id="approach">
          <div className="section-label">
            <span>03</span> THE THINKING BEHIND THE WRITING
          </div>

          <div className="section-heading-row">
            <div>
              <h2>Before I write,<br /><em>I ask questions.</em></h2>
            </div>
            <p>
              A thoughtful writing process helps turn an initial idea
              into a message with direction and purpose.
            </p>
          </div>

          <div className="approach-list">
            {approach.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="approach-item"
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="approach-number">{item.number}</span>
                  <div className="approach-icon">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                  <div className="approach-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ArrowUpRight className="approach-arrow" size={19} />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BEYOND WRITING - ACCORDION */}
<section className="section beyond-section" id="beyond">
  <div className="section-label">
    <span>04</span> BEYOND THE WRITING DESK
  </div>

  <div className="beyond-grid">
    <div className="beyond-intro">
      <h2>
        Different interests.
        <br />
        <em>A broader perspective.</em>
      </h2>

      <p>
        My interests extend beyond writing. The subjects I study,
        the technology I explore and the questions I ask all
        influence how I approach new ideas.
      </p>

      <div className="beyond-small-note">
        <Sparkles size={18} />
        <span>A LITTLE MORE ABOUT MY PERSPECTIVE</span>
      </div>
    </div>

    <div className="accordion">
      {accordionItems.map((item, index) => {
        const isOpen = openAccordion === index;

        return (
          <div
            className={`accordion-item ${isOpen ? "active" : ""}`}
            key={item.question}
          >
            <button
              className="accordion-question"
              onClick={() =>
                setOpenAccordion(isOpen ? -1 : index)
              }
              aria-expanded={isOpen}
            >
              <span className="accordion-number">
                0{index + 1}
              </span>

              <span className="accordion-title">
                {item.question}
              </span>

              <span className="accordion-icon">
                {isOpen ? <X size={17} /> : <ArrowDown size={17} />}
              </span>
            </button>

            <motion.div
              className="accordion-answer-wrapper"
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p className="accordion-answer">
                {item.answer}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="section-label">
              <span>05</span> LET'S CONNECT
            </div>

            <h2>
              Have an idea
              <br />
              <em>worth communicating?</em>
            </h2>

            <p>
              I'm interested in opportunities to learn, collaborate
              and contribute to creative projects. Let's start a
              conversation.
            </p>

            <a
              className="contact-button"
              href="mailto:vigneshrajuodayappan@gmail.com"
            >
              Get in touch <ArrowUpRight size={18} />
            </a>

            <div className="contact-details">
              <a href="mailto:vigneshrajuodayappan@gmail.com">
                <Mail size={16} />
                vigneshrajuodayappan@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/vignesh-raju-odayappan/"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight size={16} />
                LinkedIn profile
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="footer-brand" href="#home">V<span>.</span></a>
        <p>Independent writing & creative work.</p>
        <span>© {new Date().getFullYear()} Vignesh Raju Odayappan</span>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
