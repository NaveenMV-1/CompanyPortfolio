import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaJava, FaDatabase, FaFire } from 'react-icons/fa';
import { SiSpringboot, SiBootstrap, SiGreensock } from 'react-icons/si';
import img2 from '../../assets/Project/erp.png';
import './Project.css';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.project-card-row');

    cards.forEach((card) => {
      const content = card.querySelector('.project-content-side');
      const image = card.querySelector('.project-image-side');

      gsap.fromTo(
        content,
        { x: card.classList.contains('reverse') ? -60 : 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(
        image,
        { x: card.classList.contains('reverse') ? 60 : -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div className="portfolio-main-container" ref={containerRef}>
      <h2 className="main-heading">Featured Pet Platforms</h2>

      <div className="cards-grid">
        {/* Project 1: Image Left | Content Right */}
        <div className="project-card-row">
          <div className="project-image-side">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80" alt="Project 1" className="project-img" />
              <div className="image-overlay"></div>
              <button className="view-project-btn">View Project <span>→</span></button>
            </div>
          </div>
          <div className="project-content-side">
            <span className="project-category">E-Commerce Website</span>
            <h3 className="project-title">Pet Sale Website</h3>
            <p className="project-description">Modern UI for browsing pets, filtering categories, and managing adoption information seamlessly.</p>
            <div className="tech-section">
              <span className="tech-label">Technologies Used</span>
              <div className="tech-badges">
                <span className="badge react-bg"><FaReact color="#61DAFB" /> React</span>
                <span className="badge spring-bg"><SiSpringboot color="#6DB33F" /> Spring Boot</span>
                <span className="badge java-bg"><FaJava color="#007396" /> Java</span>
                <span className="badge mysql-bg"><FaDatabase color="#4479A1" /> MySQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Content Left | Image Right */}
        <div className="project-card-row reverse">
          <div className="project-image-side">
            <div className="image-wrapper">
              <img src={img2} alt="Project 2" className="project-img" />
              <div className="image-overlay"></div>
              <button className="view-project-btn">View Project <span>→</span></button>
            </div>
          </div>
          <div className="project-content-side">
            <span className="project-category">Full Stack Web Application</span>
            <h3 className="project-title">ERP Management System</h3>
            <p className="project-description">Campus Sync is a full-stack ERP platform that streamlines attendance, course management, assignments, announcements, and academic administration through dedicated dashboards for students, faculty, and administrators.</p>
            <div className="tech-section">
              <span className="tech-label">Technologies Used</span>
              <div className="tech-badges">
                <span className="badge gsap-bg"><SiGreensock color="#88CE02" /> REST API</span>
                <span className="badge bootstrap-bg"><SiBootstrap color="#7952B3" /> Bootstrap/CSS</span>
                <span className="badge firebase-bg"><FaFire color="#FFCA28" /> Spring Boot</span>
                <span className="badge react-bg"><FaReact color="#61DAFB" /> React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Image Left | Content Right */}
        <div className="project-card-row">
          <div className="project-image-side">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80" alt="Project 3" className="project-img" />
              <div className="image-overlay"></div>
              <button className="view-project-btn">View Project <span>→</span></button>
            </div>
          </div>
          <div className="project-content-side">
            <span className="project-category">PET SALE WEBSITE</span>
            <h3 className="project-title">Purrfect Match Hub</h3>
            <p className="project-description">Comprehensive dashboard for breeders and buyers with integrated search filters and secured checkout.</p>
            <div className="tech-section">
              <span className="tech-label">Technologies Used</span>
              <div className="tech-badges">
                <span className="badge java-bg"><FaJava color="#007396" /> Java</span>
                <span className="badge spring-bg"><SiSpringboot color="#6DB33F" /> Spring Boot</span>
                <span className="badge mysql-bg"><FaDatabase color="#4479A1" /> MySQL</span>
                <span className="badge react-bg"><FaReact color="#61DAFB" /> React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Content Left | Image Right */}
        <div className="project-card-row reverse">
          <div className="project-image-side">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=1000&q=80" alt="Project 4" className="project-img" />
              <div className="image-overlay"></div>
              <button className="view-project-btn">View Project <span>→</span></button>
            </div>
          </div>
          <div className="project-content-side">
            <span className="project-category">PET SALE WEBSITE</span>
            <h3 className="project-title">Exotic Pets Connect</h3>
            <p className="project-description">Specialized networking space for uncommon pet breeds, complete with care guideline modules and logs.</p>
            <div className="tech-section">
              <span className="tech-label">Technologies Used</span>
              <div className="tech-badges">
                <span className="badge firebase-bg"><FaFire color="#FFCA28" /> Firebase</span>
                <span className="badge gsap-bg"><SiGreensock color="#88CE02" /> GSAP</span>
                <span className="badge bootstrap-bg"><SiBootstrap color="#7952B3" /> Bootstrap</span>
                <span className="badge react-bg"><FaReact color="#61DAFB" /> React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="center-btn-wrapper">
        <button className="view-all-btn">
          View All Projects →
        </button>
      </div>
    </div>
  );
}