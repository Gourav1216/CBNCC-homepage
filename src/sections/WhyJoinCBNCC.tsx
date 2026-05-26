import { ArrowUpRight, Bolt, Globe2, Handshake, Rocket, Sparkles, Trophy, Waves } from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

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
      <div className="why-join__shell">
        <div className="why-join__header" data-reveal>
          <p className="why-join__eyebrow">Student tech community</p>
          <h1 id="why-join-title">Why Join CBNCC?</h1>
          <p className="why-join__intro">
            At CBNCC, learning goes beyond classrooms. Build real projects, collaborate with ambitious innovators,
            and become part of a community shaping the future of technology.
          </p>
        </div>

        <div className="why-join__grid" aria-label="CBNCC member benefits">
          {benefits.map(({ title, description, Icon, accent }, index) => (
            <article
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
              <div className="benefit-card__topline">
                <span className="benefit-card__icon" aria-hidden="true">
                  <Icon size={34} strokeWidth={2.05} />
                </span>
                <ArrowUpRight className="benefit-card__arrow" aria-hidden="true" size={22} />
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
