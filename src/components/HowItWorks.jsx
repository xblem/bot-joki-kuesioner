import styles from './HowItWorks.module.css';
// Kita import ikon dari library Font Awesome melalui react-icons
import { FaUpload, FaRobot, FaDownload } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bagaimana Cara Kerjanya?</h2>
        <div className={styles.stepsGrid}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FaUpload />
            </div>
            <h3>1. Unggah</h3>
            <p>Unggah file kuesioner Anda atau cukup tempelkan tautan dari platform online.</p>
          </div>

          {/* Step 2 */}
          <div className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FaRobot />
            </div>
            <h3>2. Proses</h3>
            <p>Bot cerdas kami akan menganalisis dan mengisi setiap pertanyaan secara otomatis.</p>
          </div>

          {/* Step 3 */}
          <div className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FaDownload />
            </div>
            <h3>3. Unduh</h3>
            <p>Dapatkan hasil kuesioner yang telah terisi penuh dalam sekejap mata.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;