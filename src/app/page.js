import Header from '../components/Header';
import Hero from '../components/Hero';
import TopAstrologers from '../components/TopAstrologers';
import HowItWorks from '../components/HowItWorks';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import { getNotebookAstrologersCards } from '@/lib/notebookAstrologers';

export default function Home() {
  const topAstrologers = getNotebookAstrologersCards();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TopAstrologers astrologers={topAstrologers} />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
}