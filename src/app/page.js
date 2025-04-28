'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import SkillSection from '../components/skills';
import ExperienceSection from '../components/Experience';
import MyActivities from '../components/tabs';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let scrollInstance;

    const loadScroll = async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        scrollInstance = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smartphone: { smooth: true }, // Enable for smartphones
            tablet: { smooth: true }, // Enable for tablets
        });

        setTimeout(() => {
            setIsLoading(false); // Ensure preloader finishes
            document.body.style.cursor = 'auto'; // Reset cursor
        }, 2000);
    };

    loadScroll();

    return () => {
        if (scrollInstance) scrollInstance.destroy(); // Clean up LocomotiveScroll
    };
}, []);


  return (
    <main className={styles.main} data-scroll-container>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <MyActivities />
      <ExperienceSection />
      <SkillSection />
      <SlidingImages />
      <Contact />
    </main>
  );
}
