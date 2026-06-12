import Contact from '@/components/Contact';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Contact Us | Glanz Studio – Amar Colony, Delhi',
  description: 'Book an appointment at Glanz Studio salon in Amar Colony, Delhi. Call +91 76690 71755 or WhatsApp us.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <BookingForm />
      <Contact />
      <FAQ />
    </>
  );
}
