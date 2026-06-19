import "@/App.css";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stages } from "./components/Stages";
import { Pricing } from "./components/Pricing";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App bg-cream min-h-screen font-body text-ink overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stages />
        <Pricing />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
