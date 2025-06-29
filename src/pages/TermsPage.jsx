import { Helmet } from 'react-helmet-async';
import styles from './LegalPage.module.css';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Ketentuan Layanan - Bot Joki Kuesioner</title>
        <meta name="description" content="Baca syarat dan ketentuan layanan penggunaan website Bot Joki Kuesioner." />
      </Helmet>
    <div className={styles.legalContainer}>
      <h1>Ketentuan Layanan</h1>

      <h2>1. Penerimaan Ketentuan</h2>
      <p>Dengan mengakses dan menggunakan website Bot Joki Kuisioner ("Layanan"), Anda setuju untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak diizinkan untuk menggunakan Layanan.</p>

      <h2>2. Deskripsi Layanan</h2>
      <p>Bot Joki Kuisioner adalah sebuah alat simulasi yang dirancang untuk tujuan hiburan dan demonstrasi teknologi. Layanan ini **TIDAK** mengisi, mengirim, atau berinteraksi dengan kuisioner sungguhan. Semua proses murni simulasi visual di browser Anda.</p>

      <h2>3. Batasan Tanggung Jawab</h2>
      <p>Layanan ini disediakan "sebagaimana adanya". Kami tidak memberikan jaminan apa pun bahwa Layanan akan bebas dari kesalahan atau gangguan. Kami tidak bertanggung jawab atas segala kerusakan yang mungkin timbul dari penggunaan Layanan ini.</p>
    </div>
    </>
  );
};

export default TermsPage;