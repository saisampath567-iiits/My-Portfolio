'use client';
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export default function SkillSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        {
            category: "Programming Languages",
            tools: ["Java", "Python", "C++", "C#", "JavaScript", "Node.js", "Bash/Shell", "TypeScript"],
            description: "Proficient in multiple programming languages, used for software development, scripting, and backend applications."
        },
        {
            category: "Technologies",
            tools: ["React.js", "Spring Boot", "Next.js","GraphQL","Express.js", "Docker", "Kubernetes", "Terraform", "Ansible"],
            description: "Hands-on experience with modern frameworks and technologies for scalable, containerized, and automated deployments."
        },
        {
            category: "Databases",
            tools: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "DynamoDB"],
            description: "Expertise in SQL, NoSQL, and in-memory databases for managing and optimizing data storage and retrieval."
        },
        {
            category: "Testing & Automation Tools",
            tools: ["JUnit", "Selenium", "Git", "Jenkins", "GitLab CI", "Postman"],
            description: "Proficient in testing frameworks, CI/CD pipelines, and tools for ensuring software quality and automation."
        },
        {
            category: "Cloud & Monitoring",
            tools: ["AWS", "Azure", "Google Cloud Platform (GCP)", "Prometheus", "Grafana", "CloudWatch"],
            description: "Experience in deploying and managing cloud infrastructures and monitoring systems to ensure uptime and scalability."
        },
        {
            category: "Libraries & Frameworks",
            tools: ["Bootstrap", "Tailwind CSS", "Material UI", "Redux", "jQuery", "Next.js"],
            description: "Frontend libraries and frameworks used for building responsive and interactive user interfaces."
        },
        {
            category: "Networking & Security",
            tools: ["Apache", "Firewall Configuration", "SSL/TLS", "IAM", "Load Balancing"],
            description: "Knowledge of networking protocols, security best practices, and load balancing for web applications."
        },
        {
            category: "Operating Systems & Tools",
            tools: ["Linux", "Unix", "Windows Server", "Bash/Shell Scripting", "PowerShell"],
            description: "Proficient in working with various operating systems and scripting tools to manage servers and automate tasks."
        }
    ];
    
    const generateScatterPosition = () => {
        const minDistance = 200; // Minimum distance from the central box
        const maxDistance = 300; // Maximum distance from the central box
        let angle = Math.random() * 2 * Math.PI; // Random angle in radians
        let distance = Math.random() * (maxDistance - minDistance) + minDistance; // Random distance between min and max
        let x = Math.cos(angle) * distance; // X position based on angle and distance
        let y = Math.sin(angle) * distance; // Y position based on angle and distance
        return { x, y };
    };

    return (
        <section className={styles.skillsSection}>

            
            {/* Initial Box */}
            <motion.div
                className={styles.initialBox}
                onClick={() => setIsHovered(!isHovered)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Tap Here to Unbox My Skills!</h2>
            </motion.div>

            {/* Skill Bubbles */}
            {isHovered && (
                <div className={styles.bubbleContainer}>
                    {skills.map((skill, index) => {
                        const position = generateScatterPosition();
                        return (
                            <motion.div
                                key={skill.category}
                                className={styles.skillBubble}
                                initial={position}
                                animate={{
                                    x: [position.x, position.x + Math.random() * 100 - 50, position.x - Math.random() * 150],
                                    y: [position.y, position.y + Math.random() * 100 - 50, position.y - Math.random() * 150],
                                }}
                                transition={{
                                    duration: Math.random() * 4 + 3, // Random duration between 3s and 7s
                                    repeat: Infinity, // Infinite loop
                                    repeatType: "reverse", // Reverse the motion direction
                                    ease: "easeInOut",
                                }}
                                onClick={() => setActiveSkill(skill)}
                            >
                                {skill.category}
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* Detailed Skill Information */}
            {activeSkill && (
                <motion.div
                    className={styles.skillDetail}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{activeSkill.category}</h3>
                    <p>{activeSkill.description}</p>
                    <div className={styles.toolsList}>
                        {activeSkill.tools.map((tool, idx) => (
                            <span key={idx} className={styles.toolItem}>{tool}</span>
                        ))}
                    </div>
                    <button
                        onClick={() => setActiveSkill(null)}
                        className={styles.closeButton}
                    >
                        Close
                    </button>
                </motion.div>
            )}
        </section>
    );
}


