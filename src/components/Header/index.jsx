'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

export default function Index() {
  const header = useRef(null);
  const button = useRef(null);
  const [isContactActive, setIsContactActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset contact state when the pathname changes
    setIsContactActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom top',
        onLeave: () => {
          gsap.to(button.current, { opacity: 0.5, duration: 0.25, ease: 'power1.out' });
        },
        onEnterBack: () => {
          gsap.to(button.current, { opacity: 1, duration: 0.25, ease: 'power1.out' });
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        {/* Left Side: "Code by Sai Sampath Boddu" */}
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.sampath}>Sai Sampath Boddu</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={styles.navigationLinks}></div>

        {/* Right Side: GitHub Icon and "Contact Me" Button */}
        <div ref={button} className={styles.contactButtonContainer}>
          <a href="https://github.com/saisampath567-iiits" target="_blank" rel="noopener noreferrer">
            <FiGithub size={30} className={styles.githubIcon} />
          </a>
          <button
            onClick={() => {
              setIsContactActive((prev) => !prev);
            }}
            className={styles.contactButton}
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Contact Options */}
      <AnimatePresence>
        {isContactActive && (
          <motion.div
            className={styles.contactOptions}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="mailto:saisampathboddu@gmail.com">
              <FiMail size={30} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
