'use client';
import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'; // Right arrow icon

const projects = [
    {
        title: "Inventory-Management-System",
        src: "inventory-managment.jpg", 
        description: "Cloud-based system to manage inventory, purchase orders, and point-of-sale processes.",
        tools: "Java, Spring Boot, Hibernate, Azure",
        github: "https://github.com/saisampath567-iiits/Inventory-Management-System"
    },
    {
        title: "Social-Media-Platform",
        src: "socialmediaplatform.jpg", 
        description: "A social media platform to enable users to interact and share content.",
        tools: "JavaScript, Node.js, MongoDB",
        github: "https://github.com/saisampath567-iiits/Social-Media-Platform"
    },
    {
        title: "Geospatial-Crime-Mapping-and-Analysis-Platform",
        src: "Geospatial.jpg", 
        description: "Platform for mapping and analyzing crime data using geospatial analysis.",
        tools: "Python, Jupyter Notebook, GIS Tools",
        github: "https://github.com/saisampath567-iiits/Geospatial-Crime-Mapping-and-Analysis-Platform"
    },
    {
        title: "University-Blogging-Platform",
        src: "University-bloggin-platform.jpg", 
        description: "Platform to streamline communication within a university, promoting knowledge sharing.",
        tools: "JavaScript, React, Node.js",
        github: "https://github.com/saisampath567-iiits/University-Blogging-Platform"
    },
    {
        title: "FitCheck-AI-Powered-Fitness-and-Dining-Recommendations",
        src: "c2.png",
        description: "AI-powered app that provides personalized fitness and dining recommendations.",
        tools: "JavaScript, Python, TensorFlow, React",
        github: "https://github.com/saisampath567-iiits/FitCheck-AI-Powered-Fitness-and-Dining-Recommendations-main"
    },
    {
        title: "AI-Powered-Customer-Support-Chatbot-with-Real-Time-Feedback",
        src: "ai-powered-customer-support.jpg",
        description: "An AI-powered chatbot providing real-time feedback for customer support.",
        tools: "TypeScript, Node.js, Express.js",
        github: "https://github.com/saisampath567-iiits/AI-Powered-Customer-Support-Chatbot-with-Real-Time-Feedback"
    },
];


export default function SlidingImages() {
    const container = useRef(null);
    const sliderRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });   

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    const handleScrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    

    return (
        <div ref={container} className={styles.slidingImages}>
            <div className={styles.title}>
            <h2 className={styles.title}>PROJECTS SLIDESHOW</h2>
            </div>
            <motion.div ref={sliderRef} style={{ x: x1 }} className={styles.slider}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className={styles.imageContainer}>
                            <Image fill={true} alt={project.title} src={`/images/${project.src}`} />
                            <div className={styles.projectTitle}>{project.title}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {/* Left arrow button for scrolling */}
            <button className={styles.scrollButtonLeft} onClick={handleScrollLeft}>
                <FiArrowLeft />
            </button>
            {/* Right arrow button for scrolling */}
            <button className={styles.scrollButton} onClick={handleScrollRight}>
                <FiArrowRight />
            </button>

            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>

            {selectedProject && (
                <div className={styles.modal} onClick={() => setSelectedProject(null)}>
                    <div className={styles.modalContent}>
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <p><strong>Tools Used:</strong> {selectedProject.tools}</p>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                </div>
            )}
        </div>
    );
}