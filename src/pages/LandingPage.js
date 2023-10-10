import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import NavigationBar from '../components/NavigationBar';
import Testimonials from '../components/Testimonials';

function LandingPage() {
  return (
    <>
    <NavigationBar/>
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
