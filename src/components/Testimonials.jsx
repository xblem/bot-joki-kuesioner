import styles from './Testimonials.module.css';
// Import gambar avatar yang sudah Anda siapkan
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "Awalnya ragu, tapi ternyata bot ini sangat membantu mempercepat pekerjaan riset saya. Simulasi hasilnya sangat akurat dan menghemat waktu berjam-jam!",
      name: "Andi Hermawan",
      title: "Mahasiswa Tingkat Akhir",
      avatar: avatar1
    },
    {
      quote: "Sebagai freelancer, waktu adalah uang. Alat ini adalah game-changer. Tampilannya profesional dan sangat mudah digunakan. Highly recommended!",
      name: "Siti Amelia",
      title: "Digital Marketer",
      avatar: avatar2
    },
    {
      quote: "Prosesnya cepat dan hasilnya memuaskan. Fitur unggah berbagai format file sangat berguna. Tidak perlu lagi copy-paste manual.",
      name: "Budi Santoso",
      title: "Peneliti Pasar",
      avatar: avatar3
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Apa Kata Mereka?</h2>
        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                <div>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.authorTitle}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;