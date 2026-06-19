import { Reveal } from "./Reveal";
import { reviews } from "../data";
import { Quote, MapPin } from "lucide-react";

export const Reviews = () => (
  <section id="reviews" className="py-24 lg:py-32">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="font-accent text-clay text-3xl">отзывы</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-light text-ink mt-2">
          Что говорят мои клиенты
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6 mt-14">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={(i % 2) * 0.1}>
            <div className="h-full bg-blush/60 backdrop-blur-sm border border-white/50 rounded-[32px] p-8 hover:-translate-y-1 transition-transform duration-500">
              <Quote className="text-clay" size={30} strokeWidth={1.4} />
              <p className="text-ink/80 text-lg font-light leading-relaxed mt-4 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-11 h-11 rounded-full bg-clay text-white flex items-center justify-center font-heading text-xl">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-ink font-medium">{r.name}</p>
                  <p className="text-stone text-xs flex items-center gap-1">
                    <MapPin size={12} /> {r.city}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
