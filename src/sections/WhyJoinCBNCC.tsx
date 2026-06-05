import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Bolt,
  Braces,
  CalendarClock,
  Globe2,
  Handshake,
  Rocket,
  Sparkles,
  Trophy,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ShinyText from "../components/ShinyText";

type Benefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
};



const benefits: Benefit[] = [
  {
    title: "Learn by Building",
    description:
      "Create real-world projects, experiment with emerging technologies, and gain practical experience that extends beyond traditional learning.",
    Icon: Rocket,
    accent: "cyan"
  },
  {
    title: "Grow Together",
    description:
      "Join a vibrant community of developers, designers, innovators, and technology enthusiasts who support and inspire each other.",
    Icon: Handshake,
    accent: "green"
  },
  {
    title: "Push Your Limits",
    description:
      "Participate in hackathons, workshops, coding challenges, and technical events that accelerate your growth and problem-solving abilities.",
    Icon: Bolt,
    accent: "amber"
  },
  {
    title: "Create Impact",
    description:
      "Lead initiatives, organize events, contribute to meaningful projects, and leave a lasting impact on the community.",
    Icon: Sparkles,
    accent: "violet"
  },
  {
    title: "Industry Connect",
    description:
      "Engage with professionals, mentors, alumni, and industry leaders while gaining exposure to the latest technology trends.",
    Icon: Globe2,
    accent: "blue"
  },
  {
    title: "Showcase Excellence",
    description:
      "Build a strong portfolio, demonstrate your skills through projects and competitions, and stand out as a future-ready innovator.",
    Icon: Trophy,
    accent: "rose"
  }
];

export function WhyJoinCBNCC() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const steps = stepsRef.current;
    const N = steps.length;
    if (N === 0) return;

    const SPACING = 360 / N;

    const getRadius = () => {
      return window.innerHeight * 0.4;
    };

    const paint = (progress: number) => {
      const offset = progress * (N - 1) * SPACING;
      const r = getRadius();

      for (let i = 0; i < N; i++) {
        const el = steps[i];
        if (!el) continue;

        let a = i * SPACING - offset;
        while (a > 180) a -= 360;
        while (a <= -180) a += 360;
        const d = Math.abs(a);

        // closeness: 1 when active (a = 0), drops to 0 at SPACING/2 distance
        const closeness = Math.max(0, 1 - d / (SPACING / 2));

        const rad = (a * Math.PI) / 180;
        const x = r * Math.cos(rad);
        const y = r * Math.sin(rad);

        const tilt = -a * (1 - closeness);

        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${tilt.toFixed(2)}deg)`;
        el.style.opacity = Math.max(0, 1 - d / 110).toFixed(3);
        el.style.setProperty("--c", closeness.toFixed(3));
      }
    };

    const getProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const range = section.offsetHeight - window.innerHeight;
      if (range <= 0) return 0;
      return Math.max(0, Math.min(1, scrolled / range));
    };

    let pending = false;
    const tick = () => {
      if (window.innerWidth <= 1024) return;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        paint(getProgress());
        pending = false;
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("touchmove", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });

    // Initial paint
    paint(0);

    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("touchmove", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <section className="why-join" aria-labelledby="why-join-title">
      {/* Background Ambient Glow Orbs */}
      <div className="why-join__glow-orb why-join__glow-orb--1" aria-hidden="true" />
      <div className="why-join__glow-orb why-join__glow-orb--2" aria-hidden="true" />
      <div className="why-join__glow-orb why-join__glow-orb--3" aria-hidden="true" />

      <div className="why-join__hero">
        {/* Wireframe Cross Background */}
        <div className="why-join__hero-bg" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="4 4" strokeWidth="1" />
          </svg>
        </div>

        <div className="why-join__hero-content">
          <div className="why-join__eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <ShinyText
              text="Student tech community"
              speed={2}
              className="why-join__eyebrow-text"
              color="#ffffff"
              shineColor="#a1a1aa"
            />
          </div>
          <h1 id="why-join-title" className="why-join__hero-title">
            WHY JOIN <br /> CBNCC?
          </h1>
          <p className="why-join__hero-description">
            At CBNCC, learning goes beyond classrooms. Build real projects,
            collaborate with ambitious innovators, and become part of a community
            shaping the future of technology.
          </p>

          <div className="why-join__hero-stats-row">
            <div className="why-join__stat">
              <span className="why-join__stat-top">
                <Braces size={16} aria-hidden="true" />
                <strong>25+</strong>
              </span>
              <span className="why-join__stat-label">live builds</span>
            </div>
            <div className="why-join__stat">
              <span className="why-join__stat-top">
                <CalendarClock size={16} aria-hidden="true" />
                <strong>12+</strong>
              </span>
              <span className="why-join__stat-label">tech events</span>
            </div>
            <div className="why-join__stat">
              <span className="why-join__stat-top">
                <UsersRound size={16} aria-hidden="true" />
                <strong>500+</strong>
              </span>
              <span className="why-join__stat-label">community reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* PC View: Scroll-Linked Arc Timeline */}
      <div className="why-join__timeline-container" ref={containerRef}>
        <div className="why-join__timeline-pin">
          <div className="why-join__timeline-brand">CBNCC</div>
          <div className="why-join__timeline-eyebrow">Our Benefits</div>
          <div className="why-join__timeline-arc"></div>

          {benefits.map(({ title, description }, index) => (
            <div
              key={title}
              className="why-join__timeline-step"
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
            >
              <div className="why-join__timeline-step-content">
                <div className="why-join__timeline-step-dot"></div>
                <span className="why-join__timeline-step-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="why-join__timeline-step-info">
                  <h4 className="why-join__timeline-step-title">{title}</h4>
                  <p className="why-join__timeline-step-desc">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-join__grid-container">
        <div className="why-join__grid" aria-label="CBNCC member benefits">
          {benefits.map(({ title, description, Icon, accent }, index) => (
            <article
              key={title}
              className={`benefit-card ${expandedIndex === index ? "is-expanded" : ""}`}
              data-accent={accent}
              tabIndex={0}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpandedIndex(expandedIndex === index ? null : index);
                }
              }}
            >
              <div className="benefit-card__header">
                <span className="benefit-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="benefit-card__arrow" aria-hidden="true" size={18} />
              </div>
              <div className="benefit-card__icon-wrapper">
                <span className="benefit-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2} />
                </span>
              </div>
              <h2>
                {title}
              </h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
