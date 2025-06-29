import styles from './LegalPage.module.css'; // Pakai ulang style yang ada

const PricingPage = () => {
  return (
    <div className={styles.legalContainer}>
      <h1>Struktur Harga</h1>
      <p>Halaman ini sedang dalam pengembangan. Saat ini, layanan simulasi kami tersedia **100% Gratis**.</p>
      <p>Di masa depan, kami berencana untuk meluncurkan paket "Pro" dengan fitur-fitur eksklusif. Terima kasih atas kesabaran Anda.</p>
    </div>
  );
};

export default PricingPage;