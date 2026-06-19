import { Instagram, Heart } from "lucide-react";
import { INSTAGRAM_URL } from "../data";

export const Footer = () => (
  <footer className="bg-ink text-cream/80 py-14">
    <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-heading text-2xl text-cream">marmar<span className="text-clay">_arte</span></p>
        <p className="text-sm text-cream/60 mt-2">Картины на заказ · акрил на холсте</p>
      </div>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="footer-instagram-btn"
        className="flex items-center gap-2 bg-cream/10 hover:bg-cream/20 rounded-full px-6 py-3 transition-colors duration-300"
      >
        <Instagram size={18} strokeWidth={1.6} /> @marmar_arte
      </a>
    </div>
    <p className="text-center text-cream/40 text-xs mt-10 flex items-center justify-center gap-1.5">
      Сделано с <Heart size={12} className="text-clay" fill="#D4A396" /> · © 2026 marmar_arte
    </p>
  </footer>
);
