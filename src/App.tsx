import About from "./pages/home/components/About";
import ContactSection from "./pages/home/components/ContactSection";
import Fact from "./pages/home/components/fact";
import FAQSection from "./pages/home/components/faq";
import FormationForYou from "./pages/home/components/formationForYou";
import Hero from "./pages/home/components/hero";
import MasterclassPricing from "./pages/home/components/MasterclassPricing";
import Process from "./pages/home/components/process";
import Reviews from "./pages/home/components/Reviews";

const App = () => {
  return (
    <div>
      <Hero />
      <Fact />
      <Process />
      <Reviews />
      <FormationForYou />
      <MasterclassPricing />
      <About />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default App;
