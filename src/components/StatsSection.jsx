// src/components/StatsSection.jsx (Perbaikan Final)
import styles from './StatsSection.module.css';
import { FaRegSmile, FaSyncAlt, FaStar } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            fill="#F5F0F6"  // <-- Ini adalah warna krem yang benar
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
      <div className={styles.container}>
        <h2>Work with BotJokiKuesioner</h2>
        <div className={styles.grid}>
          <div className={styles.statItem}>
            <div className={styles.iconWrapper}><FaRegSmile /></div>
            <p className={styles.number}>500+</p><p className={styles.label}>Happy Customers</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.iconWrapper}><FaSyncAlt /></div>
            <p className={styles.number}>1,000+</p><p className={styles.label}>Success Processes</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.iconWrapper}><FaStar /></div>
            <p className={styles.number}>1+ Years</p><p className={styles.label}>of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;