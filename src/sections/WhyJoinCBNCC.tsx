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
      <div className="why-join__shell">
        <div className="why-join__header">
          <p className="why-join__eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Student tech community
          </p>
          <h1 id="why-join-title">
            Why Join <span>CBNCC?</span>
          </h1>
          <p className="why-join__intro">
            At CBNCC, learning goes beyond classrooms. Build real projects, collaborate with ambitious innovators,
            and become part of a community shaping the future of technology.
          </p>
          <div className="why-join__stats" aria-label="CBNCC highlights">
            {stats.map(({ value, label, Icon }) => (
              <div className="why-join__stat" key={label}>
                <Icon size={19} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
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
