import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Sponsorship from '@/components/Sponsorship';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { ToastContainer } from '@/components/Toast';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sponsorship />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
      <ToastContainer />
    </div>
  );
}

export default App;
