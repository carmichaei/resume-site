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

  useEffect(() => {
    fetch('http://localhost:5000/api/resume')
      .then(res => res.json())
      .then(data => setResume(data));
  }, []);

  if (!resume) return <div>Loading...</div>;

  return (
    <div className="app">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
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
        {resume.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
      </motion.section>

      {/* Add similar sections for education, awards, etc. */}
    </div>
  );
}

export default App;
