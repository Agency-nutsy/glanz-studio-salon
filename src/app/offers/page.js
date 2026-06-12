import Offers from '@/components/Offers';

export const metadata = {
  title: 'Offers & Memberships | Glanz Studio – Amar Colony, Delhi',
  description: 'Exclusive salon offers, discounts, and memberships at Glanz Studio in Amar Colony, Delhi.',
};

export default function OffersPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Offers />
    </>
  );
}
