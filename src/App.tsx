import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import DetailedServices from './components/DetailedServices';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-dark-gray">
      <Header />
      {/* Theme wrapper - forces all sections to use light theme */}
      <div className="
        [&_section]:!bg-white 
        [&_section]:!text-dark-gray
        [&_.card]:!bg-soft-gray
        [&_.card-bg]:!bg-soft-gray
        [&_.bg-gray-900]:!bg-soft-gray
        [&_.bg-gray-800]:!bg-soft-gray
        [&_.bg-gray-700]:!bg-soft-gray
        [&_.text-gray-100]:!text-dark-gray
        [&_.text-gray-200]:!text-dark-gray
        [&_.text-gray-300]:!text-dark-gray
        [&_.text-gray-400]:!text-medium-gray
        [&_.text-amber-400]:!text-deep-blue
        [&_.glow-amber]:!text-deep-blue
        [&_.glow-amber]:!shadow-none
      ">
        <Hero />
        <Services />
        <DetailedServices />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
