import styles from './Features.module.css';
// Import ikon yang relevan
import { FaFileAlt, FaShieldAlt, FaCrosshairs } from 'react-icons/fa';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Dibangun dengan Teknologi Terbaik</h2>
        <div className={styles.featuresGrid}>
          {/* Feature 1 */}
          <div className={styles.featureCard}>
            <FaFileAlt className={styles.icon} />
            <h3>Mendukung Berbagai Format</h3>
            <p>Mulai dari PDF, DOCX, hingga link Google Forms, kami siap memprosesnya.</p>
          </div>

          {/* Feature 2 */}
          <div className={styles.featureCard}>
            <FaShieldAlt className={styles.icon} />
            <h3>Keamanan Terjamin</h3>
            <p>Privasi data Anda adalah prioritas utama. File Anda aman bersama kami.</p>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureCard}>
            <FaCrosshairs className={styles.icon} />
            <h3>Akurasi Tinggi</h3>
            <p>Didukung oleh AI canggih untuk memastikan setiap isian akurat dan relevan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;