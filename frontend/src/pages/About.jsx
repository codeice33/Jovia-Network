import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import AboutSection from '../components/aboutus';
import PageHero from '@/components/PageHero';

export default function About() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      {/* Main Container with top padding matching header height */}
      <main className="pt-[80px] sm:pt-[90px]">
        <PageHero
          title="About Us"
          subtitle="Discover Jovia Network's vision, activities, and the ways members can connect and participate."
          category="About Us Jovia"
        />
        {/* Rest of the page content */}
      </main>

      <AboutSection />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
