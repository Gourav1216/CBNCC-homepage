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

type Benefit = {
  title: string;
  lines: string[];
  description: string;
  Icon: LucideIcon;
  accent: string;
};

const benefits: Benefit[] = [
  {
    title: "Learn by Building",
    lines: ["Learn by", "Building"],
    description:
      "Create real-world projects, experiment with emerging technologies, and gain practical experience that extends beyond traditional learning.",
    Icon: Rocket,
    accent: "cyan"
  },
  {
    title: "Grow Together",
    lines: ["Grow", "Together"],
    description:
      "Join a vibrant community of developers, designers, innovators, and technology enthusiasts who support and inspire each other.",
    Icon: Handshake,
    accent: "green"
  },
  {
    title: "Push Your Limits",
    lines: ["Push your", "Limits"],
    description:
      "Participate in hackathons, workshops, coding challenges, and technical events that accelerate your growth and problem-solving abilities.",
    Icon: Bolt,
    accent: "amber"
  },
  {
    title: "Create Impact",
    lines: ["Create", "Impact"],
    description:
      "Lead initiatives, organize events, contribute to meaningful projects, and leave a lasting impact on the community.",
    Icon: Sparkles,
    accent: "violet"
  },
  {
    title: "Industry Connect",
    lines: ["Industry", "Connect"],
    description:
      "Engage with professionals, mentors, alumni, and industry leaders while gaining exposure to the latest technology trends.",
    Icon: Globe2,
    accent: "blue"
  },
  {
    title: "Showcase Excellence",
    lines: ["Showcase", "Excellence"],
    description:
      "Build a strong portfolio, demonstrate your skills through projects and competitions, and stand out as a future-ready innovator.",
    Icon: Trophy,
    accent: "rose"
  }
];

const stats = [
  { value: "25+", label: "live builds", Icon: Braces },
  { value: "12+", label: "tech events", Icon: CalendarClock },
  { value: "500+", label: "community reach", Icon: UsersRound }
];

export function WhyJoinCBNCC() {
  return (
    <section className="why-join" aria-labelledby="why-join-title">
        <div className="why-join__hero">
          {/* Creative Tech Border Frame for First Page */}
          <div className="why-join__border-frame" aria-hidden="true">
            <span className="why-join__frame-corner why-join__frame-corner--tl"></span>
            <span className="why-join__frame-corner why-join__frame-corner--tr"></span>
            <span className="why-join__frame-corner why-join__frame-corner--bl"></span>
            <span className="why-join__frame-corner why-join__frame-corner--br"></span>
            <div className="why-join__frame-meta why-join__frame-meta--left">CBNCC // SYSTEM ACTIVE</div>
            <div className="why-join__frame-meta why-join__frame-meta--right">BUILD. INSPIRE. IMPACT.</div>
          </div>

          <div className="why-join__hero-grid">
            {/* Left Column: Robot Character (Closeup) */}
            <div className="why-join__hero-left">
              <div className="why-join__image-wrapper">
                <img
                  src="/cyborg_character_upscaled_upscaled.png"
                  alt="Cyborg Character"
                  className="why-join__character why-join__character--closeup"
                />
              </div>
            </div>

            {/* Right Column: Text & Stats */}
            <div className="why-join__hero-right">
              {/* Top Header */}
              <div className="why-join__hero-header">
                <div className="why-join__eyebrow">
                  <Sparkles size={16} aria-hidden="true" />
                  Student tech community
                </div>
                <h1 id="why-join-title" className="why-join__hero-title">
                  WHY JOIN <br /> <span>CBNCC?</span>
                </h1>
              </div>
              {/* Stats Row */}
              <div className="why-join__hero-stats-row">
                <div className="why-join__stat">
                  <Braces size={19} aria-hidden="true" />
                  <strong>25+</strong>
                  <span>live builds</span>
                </div>
                <div className="why-join__stat">
                  <CalendarClock size={19} aria-hidden="true" />
                  <strong>12+</strong>
                  <span>tech events</span>
                </div>
                <div className="why-join__stat">
                  <UsersRound size={19} aria-hidden="true" />
                  <strong>500+</strong>
                  <span>community reach</span>
                </div>
              </div>

              {/* Cards Row */}
              <div className="why-join__intro-cards-row">
                <div className="why-join__intro-card">
                  <p>
                    At CBNCC, learning goes beyond standard classrooms. We focus on active learning, building real-world projects, and fostering an environment of technical experimentation.
                  </p>
                </div>
                <div className="why-join__intro-card">
                  <p>
                    Collaborate with highly ambitious innovators and technology enthusiasts. Push your limits in coding challenges, hackathons, and shape the future of tech together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-join__grid-container">
          {/* Creative Tech Border Frame for Cards */}
          <div className="why-join__border-frame" aria-hidden="true">
            <span className="why-join__frame-corner why-join__frame-corner--tl"></span>
            <span className="why-join__frame-corner why-join__frame-corner--tr"></span>
            <span className="why-join__frame-corner why-join__frame-corner--bl"></span>
            <span className="why-join__frame-corner why-join__frame-corner--br"></span>
            <div className="why-join__frame-meta why-join__frame-meta--left">CBNCC // MEMBER BENEFITS</div>
            <div className="why-join__frame-meta why-join__frame-meta--right">GROW. SHARE. LEAD.</div>
          </div>

          <div className="why-join__grid" aria-label="CBNCC member benefits">
            {benefits.map(({ title, lines, description, Icon, accent }, index) => (
              <article
                className="benefit-card"
                data-accent={accent}
                key={title}
                tabIndex={0}
              >
                <span className="benefit-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="benefit-card__topline">
                  <span className="benefit-card__icon" aria-hidden="true">
                    <Icon size={34} strokeWidth={2.05} />
                  </span>
                  <ArrowUpRight className="benefit-card__arrow" aria-hidden="true" size={22} />
                </div>
                <h2>
                  {lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
}
