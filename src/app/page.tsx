import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import FeaturesAndFAQ from '@/components/FeaturesAndFAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <FeaturesAndFAQ />
      </main>
      <Footer />
    </div>
  );
}
