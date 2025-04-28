import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideInFromLeft, slideInFromRight } from './animation';
import Image from 'next/image';

export default function About() {
    const phrase = `Hey there! I’m Sai Sampath Boddu, a tech enthusiast passionate about crafting seamless, scalable systems that empower creators and drive innovation. With strong expertise in full stack development, I specialize in building high-quality, end-to-end features using TypeScript, Next.js, Nest.js, and GraphQL. I’m experienced in translating Figma designs into fully functional React components, optimizing performance with PostgreSQL and SQL, and managing deployments through GitHub, AWS, and CI/CD pipelines. Thriving in fast-paced environments, I love collaborating, brainstorming new solutions, and delivering work that makes ideas come alive. Let’s build the future of the creator economy together!`;
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <h2 className={styles.title}>ABOUT ME</h2>
            <div className={styles.body}>
                <motion.div
                    className={styles.textContent}
                    variants={slideInFromLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Render the entire phrase directly */}
                    <p>{phrase}</p>
                </motion.div>
                <motion.div
                    className={styles.imageGrid}
                    variants={slideInFromRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className={styles.imageWrapper}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/images/myphoto.jpeg"
                            alt="About Image"
                            className={styles.aboutImage}
                            width={400}
                            height={300}
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
