import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

interface Resume {
  name: string;
  title: string;
  about: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
  education: string[];
  awards: string[];
  experience: {
    role: string;
    org: string;
    dates: string;
    bullets: string[];
  }[];
  hobbies: string[];
  quote: string;
  quote_author: string;
}

function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/api/resume')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch resume data');
        return res.json();
      })
      .then(data => setResume(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return (
    <div className="error-container">
      <h2>Something went wrong</h2>
      <p>{error}</p>
    </div>
  );

  if (!resume) return (
    <div className="loading-container">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="loading-spinner"
      />
    </div>
  );

  return (
    <div className="app">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>{resume.contact.phone}</span>
          <span>{resume.contact.location}</span>
        </motion.div>
      </motion.header>

      <motion.section
        className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>{resume.about}</p>
      </motion.section>

      <motion.section
        className="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Experience</h2>
        <div className="experience-grid">
          {resume.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3>{exp.role}</h3>
              <h4>{exp.org} | {exp.dates}</h4>
              <ul>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="education-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Education</h2>
        <ul className="education-list">
          {resume.education.map((edu, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {edu}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="awards-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2>Awards & Achievements</h2>
        <ul className="awards-list">
          {resume.awards.map((award, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {award}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="quote-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <blockquote>
          {resume.quote}
          <footer>— {resume.quote_author}</footer>
        </blockquote>
      </motion.section>

      <motion.section
        className="hobbies-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h2>Interests</h2>
        <div className="hobbies-list">
          {resume.hobbies.map((hobby, index) => (
            <motion.span
              key={index}
              className="hobby-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {hobby}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default App;
