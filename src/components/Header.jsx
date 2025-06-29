// src/components/Header.jsx (Versi FINAL dengan Efek Scroll)

import { useState, useEffect } from 'react'; // <-- Tambahkan useEffect
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // <-- State baru untuk deteksi scroll

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  // Logika untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollProps = {
    spy: true, smooth: true, offset: -70, duration: 500
  };

  // Tambahkan class 'scrolled' jika isScrolled true
  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        <RouterLink to="/" className={styles.logo} onClick={closeMobileMenu}>
          <img src={logo} alt="BotJokiKuesioner Logo" />
          <span>BotJokiKuesioner</span>
        </RouterLink>

        <nav className={styles.navDesktop}>
          <RouterLink to="/features">Fitur</RouterLink>
          <ScrollLink to="pricing" {...scrollProps}>Harga</ScrollLink>
          <RouterLink to="/contact">Kontak</RouterLink>
        </nav>

        <div className={styles.btnDesktop}> <Button>Mulai Sekarang</Button> </div>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`${styles.navMobile} ${isMenuOpen ? styles.navMobileOpen : ''}`}>
         <RouterLink to="/features" onClick={closeMobileMenu}>Fitur</RouterLink>
         <ScrollLink to="pricing" {...scrollProps} onClick={closeMobileMenu}>Harga</ScrollLink>
         <RouterLink to="/contact" onClick={closeMobileMenu}>Kontak</RouterLink>
         <Button style={{width: '90%', marginTop: '20px'}}>Mulai Sekarang</Button>
      </div>
    </header>
  );
};

export default Header;