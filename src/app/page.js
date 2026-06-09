import Header from '../components/Header';
import Hero from '../components/Hero';
import ComplimentaryAstrologyServices from '../components/ComplimentaryAstrologyServices';
import TopAstrologers from '../components/TopAstrologers';
import HowItWorks from '../components/HowItWorks';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import ExpertsAndStore from '../components/ExpertsAndStore';
import AppDownload from '../components/AppDownload';
import PressMedia from '../components/PressMedia';
import BlogJournal from '../components/BlogJournal';
import Footer from '../components/Footer';
import { getNotebookAstrologersCards } from '@/lib/notebookAstrologers';

export default function Home() {
  const topAstrologers = getNotebookAstrologersCards();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ComplimentaryAstrologyServices />
      <TopAstrologers astrologers={topAstrologers} />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <ExpertsAndStore />
      <AppDownload showViewAllLink />
      <PressMedia showViewAllLink limit={6} />
      <BlogJournal limit={4} />
      <FAQs />
      <Footer />
    </div>
  );
}