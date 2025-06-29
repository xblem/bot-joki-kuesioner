// src/components/CallToAction.jsx

import { useState } from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah halaman refresh

    // Validasi email sederhana
    if (email && email.includes('@')) {
      setMessage(`Terima kasih! Kami akan mengabari Anda di ${email}`);
      setEmail(''); // Kosongkan input setelah berhasil
    } else {
      setMessage('Alamat email sepertinya tidak valid. Mohon coba lagi.');
    }

    // Hilangkan pesan setelah beberapa detik
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>Dapatkan Update Terbaru dari Kami</h2>
        <p>Jadilah yang pertama tahu saat kami meluncurkan fitur pro dan penawaran eksklusif. Tanpa spam, kami janji.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Masukkan alamat email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Kirim</button>
        </form>
        {message && <p className={styles.formMessage}>{message}</p>}
      </div>
    </section>
  );
};

export default CallToAction;