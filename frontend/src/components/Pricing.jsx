import { Reveal } from "./Reveal";
import { prices, eur, categories } from "../data";
import { Check, ArrowRight } from "lucide-react";

export const Pricing = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="font-accent text-clay text-3xl">цены</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-light text-ink mt-2">
            Стоимость картин
          </h2>
          <p className="text-stone text-lg font-light mt-5">
            Цены указаны в злотых (zł) и евро (€) за акрил на холсте. Это базовая
            стоимость — финальная цена зависит от сложности сюжета и детализации.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-3 mt-9">
          {categories.filter((c) => c.id !== "all").map((c) => (
            <span key={c.id} className="bg-blush text-ink text-sm rounded-full px-5 py-2 border border-border">
              {c.label}
            </span>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {prices.map((p, i) => (
            <Reveal key={p.size} delay={(i % 3) * 0.06}>
              <div
                data-testid={`price-card-${i}`}
                className={`relative h-full rounded-[28px] p-7 border transition-all duration-500 hover:-translate-y-1 ${
                  p.featured
                    ? "bg-clay text-white border-clay shadow-[0_16px_40px_rgba(212,163,150,0.3)]"
                    : "bg-white/70 backdrop-blur-md border-white/60 text-ink"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-5 right-5 bg-white/25 text-white text-xs rounded-full px-3 py-1">
                    хит
                  </span>
                )}
                <p className={`text-sm ${p.featured ? "text-white/80" : "text-stone"}`}>{p.note}</p>
                <h3 className="font-heading text-3xl mt-2">{p.size}</h3>
                <div className="flex items-end gap-2 mt-4">
                  <span className="font-heading text-4xl">{p.pln} zł</span>
                  <span className={`text-base mb-1 ${p.featured ? "text-white/80" : "text-stone"}`}>
                    ≈ {eur(p.pln)} €
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 bg-sage/25 rounded-[32px] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl text-ink">Нужен другой размер или формат?</h3>
            <ul className="mt-4 space-y-2">
              {["Индивидуальные размеры и сюжеты — по договорённости", "В стоимость входит цифровой эскиз и качественные материалы", "Не стесняйтесь спрашивать — я всегда рада обсудить вашу идею"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-stone text-sm">
                  <Check size={18} className="text-clay shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => go("contact")}
            data-testid="pricing-cta-btn"
            className="group shrink-0 flex items-center gap-2 bg-clay text-white rounded-full px-8 py-4 hover:bg-clay/90 transition-all duration-300"
          >
            Обсудить заказ
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};
