import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery | Glanz Studio – Amar Colony, Delhi',
  description: 'View stunning transformations, salon interior, and bridal work at Glanz Studio in Amar Colony, Delhi.',
};

export default function GalleryPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Gallery />
    </>
  );
}
