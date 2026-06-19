import { Reveal } from "./Reveal";
import { Globe, Clock } from "lucide-react";
import { stages } from "../data";

export const Stages = () => (
  <section id="stages" className="py-24 lg:py-32 bg-surface/60">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="font-accent text-clay text-3xl">как я работаю</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-light text-ink mt-2">
          Этапы сотрудничества
        </h2>
        <p className="text-stone text-lg font-light mt-5">
          Из чего складывается стоимость картины: материалы, моё время и создание
          цифрового эскиза, который я показываю вам ещё до начала работы.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-border rounded-full px-5 py-2.5 text-ink text-sm" data-testid="worldwide-shipping-badge">
            <Globe size={18} strokeWidth={1.5} className="text-clay" />
            Доставка по всему миру
          </div>
          <div className="inline-flex items-center gap-2 bg-white/70 border border-border rounded-full px-5 py-2.5 text-ink text-sm" data-testid="timeline-badge">
            <Clock size={18} strokeWidth={1.5} className="text-clay" />
            Изготовление 2–4 недели
          </div>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {stages.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="h-full bg-white/70 backdrop-blur-md border border-white/50 rounded-[32px] p-8 hover:-translate-y-1 transition-transform duration-500">
              <span className="font-heading text-5xl text-clay/40">{s.n}</span>
              <h3 className="font-heading text-2xl text-ink mt-4">{s.title}</h3>
              <p className="text-stone text-sm font-light leading-relaxed mt-3">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
