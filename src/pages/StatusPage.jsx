import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // <-- Import
import { useLocation } from 'react-router-dom';
import styles from './StatusPage.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '../components/Button';

const StatusPage = () => {
  const location = useLocation();
  // Ambil nama file dari state yang kita kirim lewat router
  const fileName = location.state?.fileName || 'Kuesioner_Anda.pdf';

  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Memulai proses...');
  const [isFinished, setIsFinished] = useState(false);

  // Ini adalah logika simulasi prosesnya
  useEffect(() => {
    // Setelah 1 detik, set progress ke 25%.
    setTimeout(() => {
      setProgress(25);
      setStatusMessage('Menganalisis struktur file...');
    }, 1000);

    // Setelah 3 detik (total), set progress ke 60%.
    setTimeout(() => {
      setProgress(60);
      setStatusMessage('Bot kami sedang mengisi jawaban...');
    }, 3000);

    // Setelah 5 detik (total), set progress ke 90%.
    setTimeout(() => {
      setProgress(90);
      setStatusMessage('Hampir selesai, melakukan verifikasi akhir...');
    }, 5000);

    // Setelah 6 detik (total), set progress ke 100% dan selesai.
    setTimeout(() => {
      setProgress(100);
      setStatusMessage('Proses simulasi telah berhasil diselesaikan!');
      setIsFinished(true);
    }, 6000);
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat halaman dimuat

  const handleDownload = () => {
    const content = `File hasil simulasi untuk ${fileName}.\n\nProses selesai pada: ${new Date().toLocaleString('id-ID')}\n\nTerima kasih telah menggunakan Bot Joki Kuesioner.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HASIL_${fileName.replace(/\.[^/.]+$/, "")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

 return (
    <>
      <Helmet>
        <title>Processing... - Bot Joki Kuesioner</title>
        <meta name="description" content="Melihat status proses simulasi pengisian kuesioner Anda secara real-time." />
      </Helmet>

    <div className={styles.statusContainer}>
      <div className={styles.statusBox}>
        {isFinished ? (
          <>
            <FaCheckCircle className={styles.successIcon} />
            <h2 className={styles.title}>Proses Selesai!</h2>
            <p>Simulasi pengisian untuk file <strong>{fileName}</strong> telah berhasil.</p>
            <Button onClick={handleDownload} style={{marginTop: '20px'}}>
              Unduh Hasil
            </Button>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Processing...</h2>
            <p className={styles.fileName}>File: <strong>{fileName}</strong></p>
            <div className={styles.progressBarContainer}>
              <div 
                className={styles.progressBar} 
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
            <p className={styles.statusMessage}>{statusMessage}</p>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default StatusPage;