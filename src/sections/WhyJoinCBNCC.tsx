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
  UsersRound,
  Waves
} from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import FadeContent from "@/components/FadeContent";
import GlareHover from "@/components/GlareHover";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";

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

type CardStyle = CSSProperties & {
  "--reveal-delay": string;
  "--cursor-x"?: string;
  "--cursor-y"?: string;
};

export function WhyJoinCBNCC() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const updatePointerGlow = (event: PointerEvent<HTMLElement>) => {
    if (!event.currentTarget.matches(":hover")) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - bounds.top}px`);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealItems = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-join" ref={sectionRef} aria-labelledby="why-join-title">
      <div className="why-join__aurora" aria-hidden="true" />
      <div className="why-join__orb why-join__orb--cyan" aria-hidden="true" />
      <div className="why-join__orb why-join__orb--lime" aria-hidden="true" />
      <div className="why-join__shell">
        <div className="why-join__header" data-reveal>
          <p className="why-join__eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            <ShinyText
              text="Student tech community"
              speed={3.2}
              color="#283044"
              shineColor="#00a7d8"
              spread={105}
              yoyo
              className="why-join__eyebrow-shine"
            />
          </p>
          <FadeContent blur duration={900} threshold={0.25} className="why-join__headline-reveal">
            <h1 id="why-join-title" className="why-join__title-hover">
              <SplitText
                text="Why Join"
                tag="span"
                splitType="chars"
                delay={85}
                duration={0.95}
                threshold={0.2}
                rootMargin="0px"
                className="why-join__split-title"
              />{" "}
              <ShinyText
                text="CBNCC?"
                speed={4.2}
                color="#eaf6ff"
                shineColor="#ffffff"
                spread={100}
                yoyo
                className="why-join__title-shine"
              />
            </h1>
          </FadeContent>
          <p className="why-join__intro">
            At CBNCC, learning goes beyond classrooms. Build real projects, collaborate with ambitious innovators,
            and become part of a community shaping the future of technology.
          </p>
          <div className="why-join__stats" aria-label="CBNCC highlights">
            {stats.map(({ value, label, Icon }, index) => (
              <div
                className="why-join__stat"
                data-reveal
                key={label}
                style={{ "--reveal-delay": `${220 + index * 90}ms` } as CardStyle}
              >
                <Icon size={19} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="why-join__grid" aria-label="CBNCC member benefits">
          {benefits.map(({ title, lines, description, Icon, accent }, index) => (
            <GlareHover
              width="auto"
              height="auto"
              background="transparent"
              borderRadius="0"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.22}
              glareAngle={-28}
              glareSize={220}
              transitionDuration={760}
              className="benefit-card"
              data-accent={accent}
              data-reveal
              key={title}
              onPointerMove={updatePointerGlow}
              style={{ "--reveal-delay": `${120 + index * 80}ms` } as CardStyle}
              tabIndex={0}
            >
              <div className="benefit-card__shine" aria-hidden="true" />
              <Waves className="benefit-card__signal" aria-hidden="true" size={132} strokeWidth={1.1} />
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
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
}
