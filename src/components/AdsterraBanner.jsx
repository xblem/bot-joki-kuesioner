// src/components/AdsterraBanner.jsx
import React, { useEffect } from 'react';

// Komponen ini menerima seluruh blok kode iklan sebagai 'prop'
const AdsterraBanner = ({ code }) => {
  useEffect(() => {
    const script = document.createRange().createContextualFragment(code);
    const adContainer = document.getElementById(script.firstChild.id);

    // Jika container sudah ada, jangan tambahkan lagi untuk menghindari duplikasi
    if (!adContainer) {
      document.body.appendChild(script);
    }

    // Cleanup function untuk menghapus script saat komponen hilang (penting untuk SPA)
    return () => {
      if (adContainer) {
        // Ini adalah cara sederhana, mungkin perlu disesuaikan tergantung cara Adsterra inject
        // Untuk sekarang, kita tidak hapus agar tidak error, tapi ini praktik yang baik
      }
    };
  }, [code]); // Jalankan efek ini setiap kali 'code' berubah

  // Mengekstrak ID dari div di dalam kode iklan
  const containerIdMatch = code.match(/id="([^"]+)"/);
  const containerId = containerIdMatch ? containerIdMatch[1] : '';

  // Render div kosong yang akan diisi oleh script Adsterra
  return <div id={containerId} style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}></div>;
};

export default AdsterraBanner;