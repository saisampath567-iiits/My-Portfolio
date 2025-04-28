'use client';
import styles from './style.module.scss';
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function Home() {
  const textRef = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track client rendering
  const [showContact, setShowContact] = useState(false); // Track contact button click
  const [showPrompt, setShowPrompt] = useState(true); // Track whether to show the user prompt

  const roles = ['Full Stack Engineer', 'Frontend Engineer', 'Backend Engineer'];

  // Ensure this code runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Upward animation for the name
      const animation = gsap.fromTo(
        textRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: 'power4.out' }
      );
      return () => {
        animation.kill(); // Kill the animation
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove all ScrollTriggers
      };
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 4000); // 4 seconds per role

      return () => clearInterval(interval);
    }
  }, [roles.length, isClient]);

  // Hide the prompt after 5 seconds
  useEffect(() => {
    if (showPrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(false);
      }, 5000); // Hide the prompt after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showPrompt]);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
      tabIndex="0"
    >
      {/* Conditionally render the Spline component only on the client side */}
      {isClient && (
        <div className={styles.splineWrapper}>
          <Spline scene="https://prod.spline.design/OjtDphKuI-kUZhqm/scene.splinecode" />
        </div>
      )}
      {/* Watermark Cover */}
      <div className={styles.watermarkCover}></div>

      {/* User Prompt Banner */}
      {showPrompt && (
        <div className={styles.promptBanner}>
          Click on the screen for effects
        </div>
      )}

      <div ref={textRef} className={styles.heroText}>
        {/* Empty placeholder for GSAP animation */}
      </div>

      {/* Typing Effect */}
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p key={currentRoleIndex} className={styles.typing}>
            {roles[currentRoleIndex]}
          </p>
        </div>
      </div>
    </motion.main>
  );
}
