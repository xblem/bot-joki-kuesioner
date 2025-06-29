// src/pages/ContactPage.jsx

import styles from './LegalPage.module.css'; // Pakai ulang style yang ada

const ContactPage = () => {
  return (
    <div className={styles.legalContainer}>
      <h1>Hubungi Kami</h1>
      <p>Punya pertanyaan, masukan, atau penawaran kerja sama? Kami akan senang mendengar dari Anda.</p>
      <p>Untuk saat ini, Anda dapat menghubungi kami melalui email di: <strong>kontak@botjokikuesioner.com</strong> (email ini hanya contoh).</p>
    </div>
  );
};

export default ContactPage;