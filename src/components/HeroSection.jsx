// src/components/HeroSection.jsx (Ganti semua isinya dengan ini)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const HeroSection = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const handleStart = () => {
    if (!url) {
      alert("Silakan masukkan URL kuesioner terlebih dahulu.");
      return;
    }
    navigate('/status', { state: { fileName: url } });
  };
  return (
    <section className={styles.hero}>
      <div className={styles.stars}>
        <span className={styles.star}></span><span className={styles.star}></span>
        <span className={styles.star}></span><span className={styles.star}></span>
        <span className={styles.star}></span>
      </div>
      <div className={styles.container}>
        <h1>Bebaskan Waktu Anda, Biarkan Bot Mengerjakan Kuesioner.</h1>
        <p>Cukup tempelkan link kuesioner Anda, dan dapatkan hasilnya dalam hitungan menit. Cepat, aman, dan akurat.</p>
        <div className={styles.inputWrapper}>
          <input type="url" placeholder="Tempelkan link Google Form, dsb..." value={url} onChange={(e) => setUrl(e.target.value)} />
          <button onClick={handleStart} aria-label="Mulai Proses"><FaPaperPlane /></button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;