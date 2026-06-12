'use client';
import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "I recently got smoothing and Botox statement here, and the result are fantastic. The staff is incredible professional, polite and Attentive they met, sure, I was comfortable throghout The process highly recommended this Studio for their excellent services and skill teams, thanks, Studio I am so happy with my hair smooth. My hair look like amazing, but what made the experience even better was the team. The staff is verified and helpful. They really listen to what you want.",
    name: 'Divya Rana',
    service: 'Smoothing & Botox',
    stars: 5,
  },
  {
    text: "Highly recommend this studio! I got a Smooth Keratin treatment and a facial here, and the results are fantastic. I’ve been getting so many compliments from everyone around me. It was a very professional experience, and I’m so glad I chose this place for my self-care. I now have a much better understanding of how to look after my skin. A big thank you to the Glanz studio",
    name: 'Mukesh Kumar',
    service: 'Smooth Keratin & Facial',
    stars: 5,
  },
  {
    text: "The ambience is so warm and cozy I absolutely loved the service. All the hairdressers and staff members are incredibly humble and sweet, including the owner. Everyone made me feel completely at home. The consultation was very thorough and professional; every step was explained and done with so much care. I truly loved the entire experience. I got my hair colored here, and honestly, it’s the best color I’ve ever had. Couldn’t be happier! 💖✨",
    name: 'Siyam Ashraf',
    service: 'Hair Coloring',
    stars: 5,
  },
  {
    text: "I had a great experience at this salon. The staff were professional, the place was clean, and they really understood the style I wanted. The haircut and grooming were done perfectly. Worth the price. Highly recommended!",
    name: 'Jo Joseph',
    service: 'Haircut & Grooming',
    stars: 5,
  },
  {
    text: "I had done some few servers haircut beard facial or head massage md sameer was done all services he is very professional they know how to change my look and they done head massage this was very relaxed 😎😌 thanku to get the done all i want to come again with my frnds thanku glanz studio …",
    name: 'Masoom Ansari',
    service: 'Haircut, Beard, Facial, Head Massage',
    stars: 5,
  },
  {
    text: "I recently had the smoothening and hair bottle statement combo glanz studio And I am absolutely thrilled with the result my hair was die and frizzy but now it's incredibles of shiny and so much more manageable they smoothening treatment completely eliminated the face and the buttocks added amazing strength and volume without making it pocker straight the stylish was professional explain it the process for thoroughly and the overall experience was fantastic highly recommended for before everyone looking for a complete hair transformation",
    name: 'Junaid Salmani',
    service: 'Smoothening & Botox Combo',
    stars: 5,
  },
  {
    text: "Amazing experience I have done my sister smoothing here that was amazing love to see the result want to come again good service staff was very polite very professional 🥰 …",
    name: 'Abu Salim',
    service: 'Smoothing',
    stars: 5,
  },
  {
    text: "I recently visited Glanz Unisex Salon for their Men’s Head-to-Toe service, and I must say – it was an absolutely fantastic experience. From the moment I walked in, the ambiance was clean, modern, and welcoming. The staff was professional, attentive, and truly skilled in what they do. Every single service – from hair care to grooming, skincare to massage – was executed with perfection and precision. The attention to detail, use of quality products, and the level of comfort provided made the whole session extremely satisfying. I walked out feeling completely refreshed and recharged. If you’re looking for a complete grooming experience where quality meets care, Glanze is definitely the place to go. Highly recommended! 💯",
    name: 'Radhe Krishna Shaw',
    service: 'Men’s Head-to-Toe',
    stars: 5,
  },
  {
    text: "I love this service I had done my sister smoothing or kerating the result was amazing",
    name: 'Vikas jstar Vikas jstar',
    service: 'Smoothing & Keratin',
    stars: 5,
  },
  {
    text: "I love the service all staffs are good I have done some few service kerating or facial that was amazing",
    name: 'Shadab Khan',
    service: 'Keratin & Facial',
    stars: 5,
  }
];

// Duplicate reviews to create a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section id="reviews" className={`section ${styles.testimonials}`}>
      <div className={styles.grain} aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className={styles.headerRow} data-aos="fade-up">
          <div className={styles.headerLeft}>
            <span className="section-label">WHAT CLIENTS SAY</span>
            <h2 className="section-title">455 Reasons to <span className="gold-text">Trust</span> Us</h2>
          </div>
        </div>

        <div className={styles.carouselWrap} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.track}>
            {duplicatedReviews.map((review, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.stars}>
                  {'★'.repeat(review.stars).split('').map((s, j) => (
                    <span key={j} className={styles.star}>★</span>
                  ))}
                </div>
                <div className={styles.quoteDecor}>&ldquo;</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.footer}>
                  <span className={styles.name}>{review.name}</span>
                  {review.service && <span className={styles.service}>{review.service}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Rating Bar */}
        <div className={styles.googleBar} data-aos="fade-up">
          <div className={styles.googleRating}>
            <span className={styles.googleStar}>⭐</span>
            <span className={styles.googleScore}>4.3 / 5 on Google</span>
            <span className={styles.googleCount}>Based on 455 reviews</span>
          </div>
          <a
            href="https://maps.app.goo.gl/D518NHYhTGEq6Q1W6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
