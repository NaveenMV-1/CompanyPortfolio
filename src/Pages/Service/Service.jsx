import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Service.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Free intro call",
    desc: "In 30 minutes we talk through your goals. Prefer email or a phone call? That works too.",
    icon: "📅",
    color: "#a855f7",
  },
  {
    title: "Free draft",
    desc: "Within 7 days you get your design draft. We walk through it together and refine it.",
    icon: "🚀",
    color: "#3b82f6",
  },
  {
    title: "We build your website",
    desc: "Once the draft is right, we make it happen. You get regular updates on the progress.",
    icon: "💻",
    color: "#f97316",
  },
  {
    title: "Launch & handover",
    desc: "Even later you can make changes yourself or use our maintenance service.",
    icon: "✨",
    color: "#10b981",
  },
  {
    title: "Review & optimization",
    desc: "We analyze performance metrics, fix bugs, and ensure everything runs lightning fast.",
    icon: "⚡",
    color: "#06b6d4",
  },
  {
    title: "Growth & scaling",
    desc: "Ongoing support, marketing integrations, and scaling your platform to new heights.",
    icon: "📈",
    color: "#ec4899",
  },
];

export default function Service() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.6,
      },
    });

    const cards = gsap.utils.toArray(".process-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="process-container">
      {/* Increased viewBox height to accommodate 6 cards */}
      <svg
        className="process-svg"
        viewBox="0 0 1200 2400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          /* Extended path loops down through all 6 cards to finish at the center button (X: 600, Y: 2275) */
          d="M 300,250 Q 600,100 850,350 T 350,900 Q 700,1100 800,1350 Q 600,1650 400,1650 Q 1000,1800 700,2775"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="20%" stopColor="#3b82f6" />
            <stop offset="40%" stopColor="#f97316" />
            <stop offset="60%" stopColor="#10b981" />
            <stop offset="80%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      <div className="process-steps-wrapper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`process-card-row ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="process-card">
              <div className="process-card-icon" style={{ color: step.color }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="process-cta-wrapper">
        <button className="process-cta-button">
          Get a free draft <span>↗</span>
        </button>
      </div>
    </div>
  );
}