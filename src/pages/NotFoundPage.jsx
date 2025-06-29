import { Link } from 'react-router-dom';
import Button from '../components/Button';
import styles from './StatusPage.module.css'; // Kita bisa pakai ulang style dari status page

const NotFoundPage = () => {
  return(
    <div className={styles.statusContainer}>
      <div className={styles.statusBox}>
        <h1 style={{fontSize: '80px', marginBottom: 0}}>404</h1>
        <h2 className={styles.title}>Halaman Tidak Ditemukan</h2>
        <p>Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
        <Link to="/">
          <Button style={{marginTop: '20px'}}>Kembali ke Beranda</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;