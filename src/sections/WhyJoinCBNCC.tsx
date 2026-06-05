import { useState } from "react";
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
