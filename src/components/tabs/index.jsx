import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { FiGithub, FiCloud, FiBookOpen, FiCode } from 'react-icons/fi';

export default function MyActivities() {
  const [activeTab, setActiveTab] = useState('Certifications');

  const tabs = [
    { name: 'Certifications', icon: <FiBookOpen /> },
    { name: 'Research Papers', icon: <FiBookOpen /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Research Papers':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiBookOpen size={40} color='black'/>
              <h3>Agile Data Science and Its Relevance – Published in the International Research Journal of Modernization in Engineering, Technology and Science (Impact Factor: 6.752)</h3>
              <p></p>
              <a href="https://www.irjmets.com/uploadedfiles/paper/volume_3/issue_12_december_2021/17461/final/fin_irjmets1638636058.pdf" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </motion.div>
          </div>
        );
        case 'Certifications':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiBookOpen size={40} color='black'/>
              <h3>Certifications in:</h3>
              <ul className={styles.certificationList}>
                <li>
                  <a href="https://www.credly.com/badges/b381476f-aaf0-4223-8c3a-e400b87085cf/public_url" target="_blank" rel="noopener noreferrer">
                  AWS Academy Graduate - AWS Academy Cloud Security Foundations
                  </a>
                </li>
                <li>
                  <a href="https://www.udemy.com/certificate/UC-1c26e421-c2ea-43f6-9e49-71050fd3b1b3/" target="_blank" rel="noopener noreferrer">
                  R Programming A-Z™: R For Data Science With Real Exercises!
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1eD0YNHZuLAZSIXRIXKvmhL-KX_LdyBjc/view?pli=1" target="_blank" rel="noopener noreferrer">
                  Tableau 2020 A-Z: Hands-On Tableau Training for Data Science
                  </a>
                </li>
                
              </ul>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.myActivities}>
      <h2 className={styles.sectionTitle}>WHAT I&apos;M UP TO</h2>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`${styles.tab} ${activeTab === tab.name ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <motion.div
        className={styles.tabContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}
