'use client';
import styles from './Contact.module.css';

const hours = [
  { day: 'Monday', time: '10:00 AM – 9:00 PM' },
  { day: 'Tuesday', time: '10:00 AM – 9:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 9:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 9:00 PM' },
  { day: 'Friday', time: '10:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.grid}`}>
        {/* Left — Info */}
        <div className={styles.info} data-aos="fade-right">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Find Us in <span className="gold-text">Lajpat Nagar</span></h2>

          <div className={styles.addressCard}>
            <div className={styles.addressRow}>
              <span>📍</span>
              <div>
                <strong>Address</strong>
                <p>G-13, part 2, Lajpat Nagar II, New Delhi 110024</p>
              </div>
            </div>
            <div className={styles.addressRow}>
              <span>🕐</span>
              <div>
                <strong>Open Hours</strong>
                <p>10:00 AM – 9:00 PM, All Days</p>
              </div>
            </div>
            <div className={styles.addressRow}>
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+917669071755">+91 76690 71755</a>
              </div>
            </div>

            <div className={styles.btns}>
              <a href="https://wa.me/917669071755?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                💬 WhatsApp Us
              </a>
              <a href="tel:+917669071755" className="btn-outline">
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Hours Table */}
          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>Hours of Operation</h3>
            {hours.map((h, i) => (
              <div className={`${styles.hourRow} ${i % 2 === 0 ? styles.hourRowAlt : ''}`} key={i}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={styles.socials}>
            <a href="https://www.instagram.com/glanzstudio/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
              📷 @glanzstudio
            </a>
            <a href="https://wa.me/917669071755" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
              💬 WhatsApp
            </a>
            <a href="https://maps.app.goo.gl/D518NHYhTGEq6Q1W6" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
              📍 Google Maps
            </a>
          </div>
        </div>

        {/* Right — Map */}
        <div className={styles.mapWrap} data-aos="fade-left">
          <iframe
            src="https://maps.google.com/maps?q=Glanz+Studio+Unisex+Salon,+Lajpat+Nagar,+Delhi&z=15&output=embed"
            width="100%"
            height="500"
            style={{
              border: 0,
              borderRadius: 'var(--radius-lg)',
              filter: 'grayscale(30%) contrast(90%)',
            }}
            allowFullScreen
            loading="lazy"
            title="Glanz Studio Salon Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
