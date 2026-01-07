import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { TechnicalStandards } from "./components/TechnicalStandards";
import { Benefits } from "./components/Benefits";
import { FhirExplanation } from "./components/FhirExplanation";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechnicalStandards />
        <About />
        <Benefits />
        <FhirExplanation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}