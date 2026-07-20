import React from 'react'
import './About.css';
import img from "../../assets/About/about2.jpg.jpeg"
import { MapPin, Sparkles, TrendingUp } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function About() {

  useGSAP(() => {

    gsap.from(".left-card", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
      }
    });

    gsap.from(".left-card img", {
      scale: 1.3,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
      }
    });

    gsap.from(".aboutheading", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".Aboutpage",
        start: "top 70%"
      }
    });

    gsap.from(".aboutdes", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: .3,
      scrollTrigger: {
        trigger: ".Aboutpage",
        start: "top 70%"
      }
    });

    gsap.from(".orange", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    }
  });

  gsap.from(".purple", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    }
  });
  gsap.to(".left-card", {
  y: -15,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut"
});

  gsap.to(".left-card img", {
  scale: 1.15,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});

  gsap.from(".green", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    }
  });
  const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (0.5 - y / rect.height) * 20;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      transformOrigin: "center",
      duration: 0.4
    });

  });

  card.addEventListener("mouseleave", () => {

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5
    });

  });

});
  

  });

  return (

    <div className="Aboutpage">

      <div className="aboutheading">
        <h1>
          Built with <span className="highlight">heart</span><br />
          for your business
        </h1>
      </div>

      <div className="aboutdes">
        <p>Our commitment to quality has earned trust with every project we deliver.</p>
      </div>

      <section className="about-section">

        <div className="left-card">
          <img src={img} alt="" />
        </div>

        <div className="right-side">

          <div className="top-cards">

            <div className="feature-card orange">

              <div className="icon">
                <MapPin size={24} />
              </div>

              <h2>
                Local <span>& personal</span>
              </h2>

              <p>
                A direct line to your developer.<br />
                Built for businesses that value
                personal service.
              </p>

            </div>

            <div className="feature-card purple">

              <div className="icon">
                <Sparkles size={24} />
              </div>

              <h2>
                More <span>than just pretty</span>
              </h2>

              <p>
                Beautiful interfaces designed<br />
                to convert visitors into customers.
              </p>

            </div>

          </div>

          <div className="feature-card green">

            <div className="icon">
              <TrendingUp size={24} />
            </div>

            <div>

              <h2>
                For businesses that want to <span>grow</span>
              </h2>

              <p>
                Perfect for local businesses, startups,
                online shops and service providers.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  )
}

export default About;