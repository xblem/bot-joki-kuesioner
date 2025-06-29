import styles from './PricingSection.module.css';
import Button from './Button';

const PricingSection = () => {
  const pricingData = [
    {
      title: "Starter Joki",
      price: "50.000",
      features: ["Simulasi hingga 5 halaman", "Dukungan format link", "Hasil format .txt"]
    },
    {
      title: "Business Joki",
      price: "100.000",
      features: ["Simulasi hingga 10 halaman", "Dukungan format file (PDF/DOCX)", "Analisis Jawaban (Segera Hadir)"]
    },
    {
      title: "Premium Joki",
      price: "150.000",
      features: ["Halaman tidak terbatas", "Dukungan Prioritas 24/7", "Laporan Hasil Lengkap"]
    }
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <h2>Pricing Joki</h2>
        <p className={styles.subtitle}>The Best Solution For Our Clients</p>
        <div className={styles.grid}>
          {pricingData.map((plan, index) => (
            <div key={index} className={styles.card}>
              <h3>{plan.title}</h3>
              <p className={styles.price}>Rp<span>{plan.price}</span></p>
              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button>Book Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;