import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HonorableMention from '@/components/HonorableMention';
import Historia from '@/components/Historia';
import Galeria from '@/components/Galeria';
import Musica from '@/components/Musica';
import Contratar from '@/components/Contratar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HonorableMention />
      <Historia />
      <Galeria />
      <Musica />
      <Contratar />
      <Footer />
    </main>
  );
}
