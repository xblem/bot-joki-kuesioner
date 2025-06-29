import styles from './LegalPage.module.css';

const PrivacyPage = () => {
  return (
    <div className={styles.legalContainer}>
      <h1>Kebijakan Privasi</h1>

      <h2>1. Informasi yang Kami Kumpulkan</h2>
      <p>Bot Joki Kuisioner **TIDAK** mengumpulkan Informasi Identitas Pribadi (PII) apa pun dari penggunanya, seperti nama, alamat email, atau nomor telepon.</p>

      <h2>2. Data Lokal (LocalStorage)</h2>
      <p>Kami menggunakan `localStorage` browser Anda hanya untuk menyimpan preferensi tema (mode terang/gelap) pada kunjungan berikutnya. Data ini tidak pernah dikirim ke server kami.</p>

      <h2>3. Iklan Pihak Ketiga</h2>
      <p>Kami mungkin menggunakan layanan iklan dari pihak ketiga untuk mendukung operasional website ini. Layanan ini mungkin menggunakan cookie untuk menampilkan iklan yang relevan. Silakan tinjau kebijakan privasi masing-masing penyedia iklan untuk informasi lebih lanjut.</p>
    </div>
  );
};

export default PrivacyPage;