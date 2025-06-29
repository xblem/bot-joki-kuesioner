// src/components/WaveDivider.jsx
import styles from './WaveDivider.module.css';

const WaveDivider = () => {
  return (
    <div className={styles.waveContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        {/* Perhatikan: fill sekarang menggunakan warna krem/card-bg */}
        <path fill="var(--color-card-bg)" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default WaveDivider;