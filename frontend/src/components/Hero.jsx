import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import { INSTAGRAM_URL } from "../data";

export const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full opacity-50 blur-3xl animate-floaty"
        style={{ background: "radial-gradient(circle, #F1E6E4, transparent 70%)" }}
      />
      <div
        className="absolute top-60 -left-32 w-[26rem] h-[26rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #C5D1C5, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-accent text-clay text-3xl">с любовью, marmar_arte</span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-ink mt-3">
            Картины, которые<br />согревают сердце
          </h1>
          <p className="text-stone text-lg font-light leading-relaxed mt-6 max-w-md">
            Пишу картины на заказ акрилом на холсте — пейзажи, мифические сюжеты,
            цветы и портреты. Каждая работа создаётся вручную специально для вас.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <button
              onClick={() => go("contact")}
              data-testid="hero-order-btn"
              className="group flex items-center gap-2 bg-clay text-white rounded-full px-8 py-4 text-lg hover:bg-clay/90 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Заказать картину
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-instagram-btn"
              className="flex items-center gap-2 bg-white/70 backdrop-blur-sm text-ink rounded-full px-8 py-4 text-lg border border-border hover:bg-white transition-all duration-300"
            >
              <Instagram size={18} strokeWidth={1.6} /> Мой Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-4 bg-blush rounded-[40px] rotate-3" />
          <img
            src="https://customer-assets.emergentagent.com/job_marmar-gallery/artifacts/wre4dgdo_IMG_0426.png"
            alt="Картина «Sex and the big city» — marmar_arte"
            className="relative w-full h-[30rem] object-cover object-top rounded-[40px] shadow-[0_20px_60px_rgba(212,163,150,0.25)]"
          />
          <div className="absolute -bottom-5 -left-5 bg-white rounded-3xl px-6 py-4 shadow-lg">
            <p className="font-heading text-3xl text-clay leading-none">100%</p>
            <p className="text-xs text-stone mt-1">ручная работа<br />акрил на холсте</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
