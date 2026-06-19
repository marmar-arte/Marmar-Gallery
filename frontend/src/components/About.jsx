import { Reveal } from "./Reveal";
import { Heart, Palette, Sparkles } from "lucide-react";

export const About = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
      <Reveal delay={0.1}>
        <span className="font-accent text-clay text-3xl">кто я</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-light text-ink mt-2">
          Привет! Я — Мария,<br />художница marmar_arte
        </h2>
        <p className="text-stone text-lg font-light leading-relaxed mt-6">
          Я пишу картины акрилом на холсте и больше всего на свете люблю превращать
          чувства и истории в цвет. В моих работах живут тихие пейзажи, мифические
          сюжеты, нежные цветы и тёплые портреты.
        </p>
        <p className="text-stone text-lg font-light leading-relaxed mt-4">
          Каждый заказ для меня — это маленькое путешествие вдвоём. Мы вместе придумываем
          сюжет, я показываю цифровой эскиз, а затем вручную создаю картину, которая будет
          радовать вас каждый день.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-9 max-w-xl mx-auto">
          {[
            { icon: Palette, t: "Акрил на холсте" },
            { icon: Sparkles, t: "Эскиз заранее" },
            { icon: Heart, t: "С душой и заботой" },
          ].map((f, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-5 text-center">
              <f.icon className="mx-auto text-clay" size={26} strokeWidth={1.4} />
              <p className="text-sm text-ink mt-3">{f.t}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
