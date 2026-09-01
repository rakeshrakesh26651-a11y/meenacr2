"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Nav from "../components/Nav";
import { Reveal } from "../components/Reveal";
import { Parallax } from "../components/Parallax";
import HeroSection from "../components/HeroSection";

// Exact same existing images from Crafthouse Studio
const IMG = {
  coffee: "https://framerusercontent.com/images/IAubOWZxmhZ5e1za7pq65WEPw08.png?width=1500&height=1991",
  redModel: "https://framerusercontent.com/images/ITpGZlLAdXGOZVKWnm75N6wVjfc.jpg?width=1024&height=1281",
  fashion: "https://framerusercontent.com/images/ti6wSvdjNu7Uubo58agom7HGbg.jpeg?width=1500&height=1996",
  blue: "https://framerusercontent.com/images/YGz5w7M5R4dK7MaHgJvvfwh42H4.jpg?width=600&height=1000",
  burger: "https://framerusercontent.com/images/2FM00bqWEGK3mmtwiRs1vglog.jpg?width=1022&height=1240",
  tennis: "https://framerusercontent.com/images/wZCUYE5tshEGLKtt2TFPutSNYFA.jpg?width=1024&height=1280",
  portrait: "https://framerusercontent.com/images/AthWw4Ai05n7k4YgVKKunrvjrk.jpg?width=800&height=1000",
  movement: "https://framerusercontent.com/images/E2r82XFiMafn8nGrWgnuC5ZBys.jpg?width=800&height=1062",
  face: "https://framerusercontent.com/images/rdrJqECa20kUrojJQ32Y3nh9vUE.jpg?width=666&height=1005",
  orange: "https://framerusercontent.com/images/DTzWM9SRMIIkew5kNETfW94louY.png?width=150&height=190",
  drink: "https://framerusercontent.com/images/mgNGaneXFQYNBTcEJBasbuonA.png?width=150&height=190",
};

// Section 1: About 3 Cards
const aboutCards = [
  { label1: "Unique", label2: "Designs", img: IMG.coffee },
  { label1: "Made With", label2: "Care", img: IMG.portrait },
  { label1: "Personalized", label2: "Creations", img: IMG.redModel },
];

// Section 2: What We Create (Grid 3x2)
const craftCollection = [
  {
    title: "Handmade Décor",
    desc: "Beautiful handcrafted décor for homes, offices",
    badge: "01 / DÉCOR",
    img: IMG.coffee,
  },
  {
    title: "Personalized Gifts",
    desc: "For birthdays, weddings, anniversaries",
    badge: "02 / GIFTS",
    img: IMG.fashion,
  },
  {
    title: "Art & Paintings",
    desc: "Add color, character, personality",
    badge: "03 / ART",
    img: IMG.portrait,
  },
  {
    title: "Handmade Accessories",
    desc: "Unique accessories with detail",
    badge: "04 / STYLE",
    img: IMG.blue,
  },
  {
    title: "Festival Crafts",
    desc: "Decorations for festivals, celebrations",
    badge: "05 / FESTIVAL",
    img: IMG.redModel,
  },
  {
    title: "DIY Craft Kits",
    desc: "Easy and enjoyable to create yourself",
    badge: "06 / DIY",
    img: IMG.movement,
  },
];

// Section 3: Why Craft House (4 Points)
const whyPoints = [
  {
    num: "01",
    title: "100% Handmade",
    desc: "Every creation is shaped, assembled, and finished by hand with soulful dedication.",
  },
  {
    num: "02",
    title: "Unique & Original",
    desc: "Distinctive handcrafted pieces ensuring no two items are ever identical.",
  },
  {
    num: "03",
    title: "Custom Made",
    desc: "Bespoke creations personalized to your special occasions and memories.",
  },
  {
    num: "04",
    title: "Quality Materials",
    desc: "Carefully selected premium, durable, and sustainable craft materials.",
  },
];

// Section 4: Featured Creations (4 Cards using SAME existing images)
const projects = [
  { title: "Floral Dreams", meta: "Handmade Décor · Custom Series · Bengaluru", img: IMG.orange },
  { title: "Rustic Stories", meta: "Artisan Craft · Keepsake Edition · Bengaluru", img: IMG.burger },
  { title: "Celebration Collection", meta: "Festival Crafts · Bespoke Gifts · Bengaluru", img: IMG.portrait },
  { title: "Little Wonders", meta: "Personalized Gifts · Miniature Crafts · Bengaluru", img: IMG.drink },
];

// Section 5: Our Process (5 Steps)
const processSteps = [
  ["01", "Imagine", "We begin with an idea"],
  ["02", "Design", "Turn idea into concept"],
  ["03", "Create", "Bring design to life by hand"],
  ["04", "Perfect", "Every detail checked"],
  ["05", "Deliver", "Carefully packed"],
];

// Section 6: Customer Stories Testimonials
const reviews = [
  {
    quote: "Beautifully made and even better than I expected.",
    author: "Ananya",
    city: "Bengaluru",
  },
  {
    quote: "I ordered a personalized gift and absolutely loved it.",
    author: "Priya",
    city: "Mumbai",
  },
  {
    quote: "Craft House has such creative designs.",
    author: "Rohan",
    city: "Delhi",
  },
  {
    quote: "Beautifully made and even better than I expected.",
    author: "Sneha",
    city: "Bengaluru",
  },
  {
    quote: "I ordered a personalized gift and absolutely loved it.",
    author: "Karan",
    city: "Hyderabad",
  },
  {
    quote: "Craft House has such creative designs.",
    author: "Pooja",
    city: "Chennai",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Nav />

      {/* CONTINUOUS SCROLL-LINKED HERO SECTION */}
      <HeroSection />

      {/* CAMPAIGN STRIP - ASYMMETRICAL MULTI-COLUMN PARALLAX */}
      <section className="campaign-strip">
        <Reveal y={20}>
          <div className="section-kicker">Handcrafted Collections</div>
        </Reveal>
        <div className="campaign-grid">
          <Reveal delay={0.04} y={30}>
            <Parallax framerSpeed={92} className="campaign-img-wrap">
              <Image src={IMG.coffee} alt="Craft collection item" width={480} height={640} className="campaign-img" />
            </Parallax>
          </Reveal>
          <Reveal delay={0.1} y={30}>
            <Parallax framerSpeed={106} className="campaign-img-wrap">
              <Image src={IMG.redModel} alt="Handcrafted visual" width={480} height={600} className="campaign-img" />
            </Parallax>
          </Reveal>
          <Reveal delay={0.16} y={30}>
            <Parallax framerSpeed={94} className="campaign-img-wrap">
              <Image src={IMG.fashion} alt="Artisan creation" width={480} height={640} className="campaign-img" />
            </Parallax>
          </Reveal>
          <Reveal delay={0.22} y={30}>
            <Parallax framerSpeed={108} className="campaign-img-wrap">
              <Image src={IMG.blue} alt="Craft art creation" width={360} height={600} className="campaign-img" />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: ABOUT CRAFT HOUSE
          ========================================================================= */}
      <section className="about-section" id="about">
        <div className="about-header">
          <div>
            <Reveal y={20}>
              <p className="about-kicker">About Craft House</p>
            </Reveal>
            <Reveal delay={0.08} y={30}>
              <h2>
                Creativity<br />
                <i>Made by Hand</i>
              </h2>
            </Reveal>
          </div>
          <div className="about-copy">
            <Reveal delay={0.14} y={25}>
              <p>
                At Craft House, we believe every handmade creation has a story. From carefully selected materials to the final finishing touch, every product is created with patience, creativity, and attention to detail.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3 Cards: Unique Designs | Made With Care | Personalized Creations */}
        <div className="about-cards-grid">
          {aboutCards.map((card, i) => (
            <Reveal key={card.label2} delay={i * 0.1} y={35}>
              <article className="about-card">
                <div className="about-card-image">
                  <Parallax framerSpeed={95} className="feature-image-parallax">
                    <Image src={card.img} alt={`${card.label1} ${card.label2}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </Parallax>
                </div>
                <div className="about-card-content">
                  <div>
                    <span className="about-card-num">0{i + 1} / CRAFT</span>
                    <h3>{card.label1} {card.label2}</h3>
                  </div>
                  <p>Handmade with detail, patience, and authentic creativity.</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE CREATE (GRID 3X2) - OUR CRAFT COLLECTION
          ========================================================================= */}
      <section className="craft-collection-section" id="collection">
        <div className="collection-head">
          <div>
            <Reveal y={20}>
              <p className="section-kicker">02 / WHAT WE CREATE</p>
            </Reveal>
            <Reveal delay={0.08} y={30}>
              <h2>
                Our Craft<br />
                <i>Collection</i>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} y={20}>
            <p>
              Explore our handmade collections created for homes, celebrations, and gifts.
            </p>
          </Reveal>
        </div>

        {/* 3x2 Grid of 6 Cards */}
        <div className="craft-grid-3x2">
          {craftCollection.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} y={30}>
              <article className="craft-item-card">
                <div className="craft-item-image">
                  <span className="craft-item-badge">{item.badge}</span>
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="craft-item-body">
                  <h3>
                    <span>{item.title}</span>
                    <span className="craft-item-arrow" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY CRAFT HOUSE (DARK SECTION) - MADE DIFFERENTLY
          ========================================================================= */}
      <section className="dark-section" id="why">
        <div className="split-heading">
          <Reveal y={20}>
            <p className="micro spaced text-white">03 / WHY CRAFT HOUSE</p>
          </Reveal>
          <Reveal delay={0.08} y={30}>
            <h2>
              Made<br />
              <i>Differently</i>
            </h2>
          </Reveal>
        </div>

        <div className="why-copy">
          <Reveal delay={0.1} y={25}>
            <p className="lead">
              We don&apos;t believe in ordinary. Every creation is personal, creative, unique.
            </p>
          </Reveal>
          <Reveal delay={0.16} y={25}>
            <p>
              Every single piece is made with intention, care, and attention to detail from the first spark of inspiration to the finishing touch.
            </p>
          </Reveal>
        </div>

        {/* 4 Points: 100% Handmade, Unique & Original, Custom Made, Quality Materials */}
        <div className="why-points-grid">
          {whyPoints.map((pt, i) => (
            <Reveal key={pt.title} delay={i * 0.08} y={30}>
              <div className="why-point-card">
                <span className="why-point-num">{pt.num}</span>
                <strong>{pt.title}</strong>
                <p>{pt.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED CREATIONS (OUR RECENT WORK)
          ========================================================================= */}
      <section className="featured-section" id="projects">
        <div className="featured-head">
          <div>
            <Reveal y={20}>
              <p className="section-kicker">04 / FEATURED CREATIONS</p>
            </Reveal>
            <Reveal delay={0.08} y={30}>
              <h2>
                Our Recent<br />
                <i>Work</i>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} y={20}>
            <p className="section-kicker">Featured Craft Showcase</p>
          </Reveal>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => {
            const isRightCol = i % 2 === 1;
            return (
              <Reveal key={p.title} delay={i * 0.08} y={35}>
                <Parallax framerSpeed={isRightCol ? 104 : 95}>
                  <article className="project-card">
                    <div className="project-image">
                      <Image src={p.img} alt={p.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
                      <span className="project-arrow" aria-hidden="true">
                        <ArrowUpRight size={22} className="project-arrow-icon" />
                      </span>
                    </div>
                    <div className="project-info">
                      <h3>{p.title}</h3>
                      <p>{p.meta}</p>
                    </div>
                  </article>
                </Parallax>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR PROCESS (5 STEPS HORIZONTAL)
          ========================================================================= */}
      <section className="process-section" id="process">
        <div className="process-head">
          <div>
            <Reveal y={20}>
              <p className="section-kicker">05 / OUR PROCESS</p>
            </Reveal>
            <Reveal delay={0.08} y={30}>
              <h2>
                From Idea<br />
                <i>to Creation</i>
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.12} y={20}>
              <p>A simple and transparent 5-step handcrafted process.</p>
            </Reveal>
          </div>
        </div>

        {/* 5 Steps: 01 Imagine | 02 Design | 03 Create | 04 Perfect | 05 Deliver */}
        <div className="process-5-steps">
          {processSteps.map(([num, name, desc], i) => (
            <Reveal key={num} delay={i * 0.06} y={25}>
              <div className="process-step-row">
                <span className="step-num">{num}</span>
                <span className="step-title">{name}</span>
                <p className="step-desc">{desc}</p>
                <span className="step-dot" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CUSTOMER STORIES (TESTIMONIALS MARQUEE)
          ========================================================================= */}
      <section className="testimonials-section" id="reviews">
        <div className="testimonials-head">
          <div>
            <Reveal y={20}>
              <p className="micro spaced text-white">06 / CUSTOMER STORIES</p>
            </Reveal>
            <Reveal delay={0.08} y={30}>
              <h2>
                Customer<br />
                <i>Stories</i>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} y={20}>
            <p className="micro text-white">TESTIMONIALS</p>
          </Reveal>
        </div>

        {/* Testimonials Marquee */}
        <div className="testimonial-marquee-wrap">
          <div className="testimonial-marquee-track">
            {reviews.map((r, i) => (
              <div key={`rev1-${i}`} className="testimonial-quote-card">
                <div className="quote-stars">★★★★★</div>
                <p className="quote-text">&ldquo;{r.quote}&rdquo;</p>
                <div className="quote-author">
                  <strong>{r.author}</strong>
                  <span>{r.city}</span>
                </div>
              </div>
            ))}
            {/* Duplicated track for seamless infinite marquee loop */}
            {reviews.map((r, i) => (
              <div key={`rev2-${i}`} className="testimonial-quote-card">
                <div className="quote-stars">★★★★★</div>
                <p className="quote-text">&ldquo;{r.quote}&rdquo;</p>
                <div className="quote-author">
                  <strong>{r.author}</strong>
                  <span>{r.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CTA SECTION (HAVE AN IDEA? / LET'S CREATE SOMETHING BEAUTIFUL)
          ========================================================================= */}
      <section className="cta-section" id="contact">
        <div className="cta-top">
          <Reveal y={15}>
            <p className="micro">07 / GET IN TOUCH</p>
          </Reveal>
          <Reveal delay={0.06} y={15}>
            <p>Since 2026</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={40}>
          <h2>
            Have an Idea?<br />
            <i>Let&apos;s Create Something Beautiful</i>
          </h2>
        </Reveal>
        <Reveal delay={0.16} y={25}>
          <a className="cta-button" href="mailto:hello@crafthouse.com">
            <span>Start Your Project</span>
            <ArrowUpRight size={20} className="cta-btn-arrow" />
          </a>
        </Reveal>

        {/* Contact Images Strip with same existing images */}
        <Parallax framerSpeed={92} className="cta-images-parallax">
          <div className="cta-images-strip">
            {[IMG.face, IMG.coffee, IMG.portrait, IMG.movement, IMG.blue, IMG.fashion].map((src, i) => (
              <div key={i} className="cta-img-box">
                <Image src={src} alt="Craft House portfolio preview" fill sizes="16vw" />
              </div>
            ))}
          </div>
        </Parallax>
      </section>

      {/* =========================================================================
          SECTION 8: FOOTER CONTACT
          ========================================================================= */}
      <footer id="blog">
        <Reveal y={30}>
          <div className="footer-brand">
            MEENA <strong>CRAFT HOUSE</strong>
          </div>
        </Reveal>

        <div className="footer-cols">
          {/* Contact Details */}
          <Reveal delay={0.05} y={20}>
            <div>
              <span className="footer-label">Contact</span>
              <a href="mailto:hello@crafthouse.com" className="footer-link">
                hello@crafthouse.com
              </a>
              <p className="footer-text">Phone: +91 XXXXX XXXXX</p>
              <p className="footer-text">Location: Bengaluru, Karnataka, India</p>
              <p className="footer-text">Available: Monday – Saturday</p>
            </div>
          </Reveal>

          {/* Navigation Links */}
          <Reveal delay={0.1} y={20}>
            <div>
              <span className="footer-label">Navigation</span>
              <a href="#top" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#collection" className="footer-link">Our Crafts</a>
              <a href="#projects" className="footer-link">Gallery</a>
              <a href="#process" className="footer-link">Process</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={0.15} y={20}>
            <div>
              <span className="footer-label">Elsewhere</span>
              <a href="#" className="footer-link">Instagram ↗</a>
              <a href="#" className="footer-link">Pinterest ↗</a>
              <a href="#" className="footer-link">WhatsApp ↗</a>
            </div>
          </Reveal>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Craft House. All Rights Reserved.</span>
          <span>Bengaluru, Karnataka, India</span>
          <span>Terms · Privacy</span>
        </div>
      </footer>
    </main>
  );
}