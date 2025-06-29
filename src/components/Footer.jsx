// src/components/Footer.jsx (Versi Perbaikan)

import styles from './Footer.module.css';
import { Link } from 'react-router-dom'; // <-- INI PERBAIKANNYA, kita import 'Link'
import { FaCoffee } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Kolom 1: About */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <img src={logo} alt="BotJokiKuesioner Logo" />
              <h3>BotJokiKuesioner</h3>
            </div>
            <p>Solusi joki kuesioner cerdas berbasis AI untuk mempercepat riset dan tugas Anda.</p>
          </div>

          {/* Kolom 2: Layanan / Fitur */}
          <div className={styles.column}>
            <h4>Layanan</h4>
            <ul>
              <li><Link to="/features">Fitur Utama</Link></li>
              <li><Link to="/pricing">Paket Harga</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Jelajahi */}
          <div className={styles.column}>
            <h4>Jelajahi</h4>
            <ul>
              <li><Link to="/terms">Syarat & Ketentuan</Link></li>
              <li><Link to="/privacy">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Dukung Kami */}
          <div className={styles.column}>
            <h4>Dukung Kami</h4>
            <ul>
              <li className={styles.supportLink}> 
                <a href="https://saweria.co/placeholder" target="_blank" rel="noopener noreferrer">
                  <FaCoffee /> Traktir Secangkir Kopi
                </a>
              </li>
              <li>
                {/* Menggunakan <Link> langsung, bukan RouterLink */}
                <Link to="/contact">Hubungi Pengembang</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>BotJokiKuesioner {new Date().getFullYear()} &copy; All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;