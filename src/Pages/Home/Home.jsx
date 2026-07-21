import React, { useEffect } from 'react';
import './Home.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  useEffect(() => {
  gsap.fromTo(
    ".arrow-path",
    {
      strokeDasharray: 300,
      strokeDashoffset: 300
    },
    {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    }
  );
  const buttons=document.querySelectorAll(".cta-button");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

gsap.to(btn,{

x:x*.25,

y:y*.25,

duration:.3

})

})

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{

x:0,

y:0,

duration:.4

})

})

})
}, []);
  return (
    <div className="hero">
      <div className="left">
        <div className="heading">
        
          <h1>
  <span className="highlight">Dream website?</span>
  <br />

  You can find it{" "}
  <span className="atus">
    atus.
    <svg
      className="arrow-svg"
      viewBox="0 0 300 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="arrow-path"
        d="M10 35 Q120 5 260 35"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#arrowHead)"
      />

      <defs>
        <marker
          id="arrowHead"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
        >
          <path
            d="M0 0 L10 5 L0 10"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
    </svg>
  </span>
</h1>
        </div>

        

        <p className="description">
          Whether you need a <span className='forbold'>business website, portfolio, landing page, or custom web application</span>, We are here to turn your ideas into reality.
        </p>

        <button className="cta-button">Contact us ↗</button>
      </div>

      <div className="right">
        <div className="animation-wrapper">
          <DotLottieReact
            src="/Programming Computer.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Home;