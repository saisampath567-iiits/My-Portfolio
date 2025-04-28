'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Full Stack Developer",
    company: "University of Illinois Chicago",
    duration: "Jan 2023 - Present",
    description: "Spearheaded full-stack development initiatives using Next.js, Nest.js, TypeScript, and GraphQL integrated with AWS, boosting system performance, user experience, and platform scalability.",
  },
  {
    role: "Product Management Intern",
    company: "Little Brain Works",
    duration: "Feb 2021 - May 2021",
    description: "Integrated third-party APIs into scalable backend systems with Node.js and GraphQL, optimized cloud-based procurement processes, and facilitated Agile sprint operations.",
  },
  {
    role: "UI/UX Intern",
    company: "Upkey",
    duration: "Jan 2021 - Feb 2021",
    description: "Designed modern Figma-based UI/UX prototypes for React.js development, enhanced user flows, and boosted platform usability through improved navigation and accessibility standards.",
  },
];

const education = [
  {
    role: "MS in Management Information Systems",
    institution: "University of Illinois Chicago (UIC)",
    duration: "May 2024",
    description: "Completed coursework in Data Analytics, Cloud Computing, Full Stack Development, and IT Project Management, focusing on building scalable systems and data-driven solutions.",
  },
  {
    role: "Bachelor of Technology, Computer Science and Engineering",
    institution: "Indian Institute of Information Technology (IIIT), Sri City",
    duration: "June 2022",
    description: "Studied core subjects including Data Structures and Algorithms, Database Management Systems, Web Development, and Software Engineering with a strong emphasis on Agile methodologies.",
  },
];

// ExperienceItem Component
const ExperienceItem = ({ role, company, duration, description }) => (
  <div className={styles.experienceItem}>
    <div className={styles.timelineMarker}></div>
    <div className={styles.timelineContent}>
      <h2>{role}</h2>
      <h3>{company}</h3>
      <p className={styles.duration}>{duration}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('Experience');
  const timelineContainer = useRef(null);

  useEffect(() => {
    // GSAP animation for timeline appearance
    gsap.fromTo(
      timelineContainer.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP animation for experience items
    const items = activeTab === 'Experience' ? experiences : education;
    items.forEach((_, i) => {
      gsap.fromTo(
        `.timelineItem_${i}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.timelineItem_${i}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [activeTab]);

  const tabs = [
    { name: 'Experience' },
    { name: 'Education' },
  ];

  const itemsToRender = activeTab === 'Experience' ? experiences : education;

  return (
    <div className={styles.experienceEducationSection}>
      <h2 className={styles.sectionTitle}>MY JOURNEY SO FAR</h2>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`${styles.tab} ${activeTab === tab.name ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <motion.div ref={timelineContainer} className={styles.timeline}>
        {itemsToRender.map((item, index) => (
          <motion.div key={index} className={`${styles.timelineItemWrapper} timelineItem_${index}`}>
            <ExperienceItem
              role={item.role}
              company={item.company || item.institution}
              duration={item.duration}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
