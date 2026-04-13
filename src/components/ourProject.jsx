import React from "react";
import './Partners.css'

const projects = [
  { id: 1, image: "/baba-scaled.webp", title: "Baba Sahib Consultancy" },
  { id: 2, image: "/rrindustries.webp", title: "RR Industries" },
  { id: 3, image: "/mokshit.webp", title: "Mokshit & Tomar company" },
  { id: 4, image: "/thakur.webp", title: "Thakur Sahab" },
  { id: 5, image: "/project.png", title: "HR Photographic" },
  { id: 6, image: "/bright sine bharat.png", title: " Bright Shine Bharat " },
 
];

export default function Projects() {
  return (
    <section className="services">
      <div className="container">
      {/* HEADER */}
      <header className="partners-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Our Projects</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Creative Work</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            We deliver high-quality digital solutions through innovative design,
        modern technology, and a commitment to excellence in every project.
          </p>
        </header>

      {/* GRID */}
      <div className="projects-grid">
        {projects.map((item) => (
          <div className="project-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
</div>
    </section>
  );
}