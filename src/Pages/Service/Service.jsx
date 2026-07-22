import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { 
  FiCalendar, 
  FiSend, 
  FiCode, 
  FiStar, 
  FiBarChart2, 
  FiTrendingUp 
} from "react-icons/fi";
import "./Service.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Service() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: "none",
    }, 0);

    tl.to(glowRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true, // Automatically points the arrow along the curve of the path!
      },
      ease: "none",
    }, 0);

    const cards = gsap.utils.toArray(".process-card");
    cards.forEach((card, i) => {
      const direction = i % 2 === 0 ? -60 : 60;
      gsap.fromTo(
        card,
        { opacity: 0, x: direction, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
            onEnter: () => card.classList.add("star-active-glow"),
            onLeaveBack: () => card.classList.remove("star-active-glow"),
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="process-container">
      <svg
        className="process-svg"
        viewBox="0 0 1200 1900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 300,150 Q 600,200 750,350 T 350,750 Q 900,1100 800,1100 Q 400,1150 400,1350 Q 1100,1300 350,2120"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Glowing Arrow Head / Pointer */}
        <g ref={glowRef} className="path-arrow-group">
          <circle r="16" fill="url(#arrowGlow)" />
          {/* Arrow shape pointing forward */}
          <polygon points="-8,-8 10,0 -8,8 -2,0" fill="#ffffff" />
        </g>

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="20%" stopColor="#3b82f6" />
            <stop offset="40%" stopColor="#f97316" />
            <stop offset="60%" stopColor="#10b981" />
            <stop offset="80%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <radialGradient id="arrowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#9333ea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div className="headingservice">
        <h1>Services That Help <span>Your Business Grow</span></h1>
        <p>From simple business websites to custom web applications, I create fast, modern, and responsive digital experiences tailored to your goals.</p>
      </div>
      <div className="process-steps-wrapper">
        <div className="process-card-row left">
          <div className="process-card card-one">
            <div className="process-card-icon" style={{ color: "#a855f7" }}>
              <FiCalendar />
            </div>
            <h3>Business Website</h3>
            <p>Build a professional online presence that helps your business attract customers and establish credibility.</p>
            <ul>
              <li>Responsive Design</li>
              <li>Contact Form</li>
              <li>Google Maps</li>
              <li>WhatsApp Integration</li>
            </ul>
          </div>
        </div>

        <div className="process-card-row right">
          <div className="process-card card-two">
            <div className="process-card-icon" style={{ color: "#3b82f6" }}>
              <FiSend />
            </div>
            <h3>Landing Pages</h3>
            <p>High-converting landing pages designed for marketing campaigns, events, and product launches.</p>
            <ul>
              <li>Fast Loading</li>
              <li>CTA Sections</li>
              <li>SEO Friendly</li>
            </ul>
          </div>
        </div>

        <div className="process-card-row left">
          <div className="process-card card-three">
            <div className="process-card-icon" style={{ color: "#f97316" }}>
              <FiCode />
            </div>
            <h3>Portfolio Website</h3>
            <p>Showcase your work with a clean and modern portfolio that leaves a lasting impression.</p>
            <ul>
              <li>Students</li>
              <li>Freelancers</li>
              <li>Creators</li>
            </ul>
          </div>
        </div>

        <div className="process-card-row right">
          <div className="process-card card-four">
            <div className="process-card-icon" style={{ color: "#10b981" }}>
              <FiStar />
            </div>
            <h3>E-Commerce</h3>
            <p>Sell products online with a secure and user-friendly shopping experience.</p>
            <ul>
              <li>Product Listings</li>
              <li>Shopping Cart</li>
              <li>Checkout</li>
              <li>Admin Dashboard</li>
              <li>Payment</li>
            </ul>
          </div>
        </div>

        <div className="process-card-row left">
          <div className="process-card card-five">
            <div className="process-card-icon" style={{ color: "#06b6d4" }}>
              <FiBarChart2 />
            </div>
            <h3>Web Applications</h3>
            <p>Custom-built web applications tailored to your business processes and workflow.</p>
            <ul>
              <li>Gym Management</li>
              <li>Booking Systems</li>
              <li>Dashboards</li>
              <li>CRM</li>
              <li>ERP</li>
            </ul>
          </div>
        </div>

        <div className="process-card-row right">
          <div className="process-card card-six">
            <div className="process-card-icon" style={{ color: "#ec4899" }}>
              <FiTrendingUp />
            </div>
            <h3>Maintenance & Support</h3>
            <p>Keep your website secure, updated, and running smoothly with ongoing maintenance and technical support.</p>
          </div>
        </div>
      </div>

      <div className="process-cta-wrapper">
        <button className="process-cta-button">
          Let's Build Together <span>↗</span>
        </button>
      </div>
    </div>
  );
}