import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

export default function ContactSection() {
    const container = useRef(null);
    const [showIcons, setShowIcons] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

    const handleGetInTouch = () => {
        setShowIcons(!showIcons);
    };

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.splineWrapper}>
                <Spline scene="https://prod.spline.design/gYY65yzlav6VUO6n/scene.splinecode" />
            </div>
            <div className={styles.watermarkCover}></div>

            <div className={styles.body}>
                {/* "Let's Innovate" Text */}
                <div className={styles.leftText}>
                    <h2>Let&apos;s Innovate!</h2>
                </div>

                {/* Social Icons */}
                <div className={styles.rightIcons}>
                    <a href="mailto:saisampathboddu@gmail.com">
                        <FiMail />
                    </a>
                    <a href="https://github.com/saisampath567-iiits" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
