// src/pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}
