import React from 'react'
import './Header.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Header() {
  useGSAP(()=>{

const buttons=document.querySelectorAll(".btn-draft");

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

});
  return (
    <header class="header">
  <nav class="nav-links">
    <a href="#">HOME</a>
    <a href="#">ABOUT</a>
    <a href="#">SERVICE</a>
    <a href="#">SKILLS</a>
    <a href="#">PROJECTS</a>
    <a href="#">SKILLS</a>
    
  </nav>
  
  <div class="logo">VISION VORTEX</div>
  
  <a href="#" class="btn-draft">CONTACT US ↗</a>
</header>
  )
}

export default Header