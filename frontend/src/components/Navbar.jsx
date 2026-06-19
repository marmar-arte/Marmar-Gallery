import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "../data";

const links = [
  { id: "about", label: "Обо мне" },
  { id: "stages", label: "Как заказать" },
  { id: "pricing", label: "Цены" },
  { id: "gallery", label: "Галерея" },
  { id: "reviews", label: "Отзывы" },
  { id: "contact", label: "Контакты" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(212,163,150,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button onClick={() => go("hero")} data-testid="logo" className="font-heading text-2xl tracking-wide text-ink">
          marmar<span className="text-clay">_arte</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-${l.id}`}
              className="text-sm text-stone hover:text-clay transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-instagram"
            className="flex items-center gap-2 bg-clay text-white rounded-full px-5 py-2.5 text-sm hover:bg-clay/90 transition-all duration-300"
          >
            <Instagram size={16} strokeWidth={1.6} /> Instagram
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} data-testid="mobile-menu-btn" className="lg:hidden text-ink">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} data-testid={`mobile-nav-${l.id}`} className="text-left text-ink">
              {l.label}
            </button>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-clay">
            <Instagram size={18} /> Instagram
          </a>
        </div>
      )}
    </header>
  );
};
