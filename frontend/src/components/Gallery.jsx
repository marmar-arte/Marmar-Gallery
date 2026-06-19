import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { gallery, categories } from "../data";

export const Gallery = () => {
  const [active, setActive] = useState("all");
  const items = active === "all" ? gallery : gallery.filter((g) => g.cat === active);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-surface/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="font-accent text-clay text-3xl">галерея</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-light text-ink mt-2">Мои работы</h2>
          <p className="text-stone text-lg font-light mt-5">
            Несколько примеров по жанрам. Больше работ — в моём Instagram.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-3 mt-9">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              data-testid={`gallery-filter-${c.id}`}
              className={`text-sm rounded-full px-5 py-2 border transition-all duration-300 ${
                active === c.id
                  ? "bg-clay text-white border-clay"
                  : "bg-white/60 text-ink border-border hover:border-clay"
              }`}
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-12 [column-fill:_balance]">
          <AnimatePresence>
            {items.map((g) => (
              <motion.div
                key={g.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[28px] shadow-[0_10px_30px_rgba(212,163,150,0.12)]"
                data-testid={`gallery-item-${g.id}`}
              >
                <img src={g.img} alt={g.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="font-heading text-2xl text-white">{g.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
