import styles from './LegalPage.module.css'; // Kita pakai ulang style yang ada

const FeaturesPage = () => {
  return (
    <div className={styles.legalContainer}>
      <h1>Fitur Unggulan Kami</h1>
      <p>Halaman ini sedang dalam pengembangan. Kami sedang menyiapkan daftar lengkap fitur-fitur canggih yang akan membantu Anda menyelesaikan kuesioner dengan lebih efisien.</p>
      <p>Beberapa fitur yang akan datang termasuk dukungan format file yang lebih luas, analisis data dasar, dan integrasi lanjutan. Nantikan update dari kami!</p>
    </div>
  );
};

export default FeaturesPage;