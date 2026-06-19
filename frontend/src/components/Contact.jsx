import { useState } from "react";
import { Reveal } from "./Reveal";
import { prices, INSTAGRAM_URL } from "../data";
import { Instagram, Send, Check } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", contact: "", size: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) {
      toast.error("Пожалуйста, укажите имя и контакт");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSent(true);
      toast.success("Спасибо! Я свяжусь с вами в ближайшее время 💛");
      setForm({ name: "", contact: "", size: "", message: "" });
    } catch (err) {
      toast.error("Что-то пошло не так. Напишите мне в Instagram.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-[40px] p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <span className="font-accent text-clay text-3xl">контакты</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-ink mt-2">
              Давайте создадим вашу картину
            </h2>
            <p className="text-stone text-lg font-light mt-5">
              Оставьте заявку — укажите телефон или почту, и я напишу вам, чтобы обсудить
              сюжет, размер и сроки. Или сразу пишите мне в Instagram.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-instagram-btn"
              className="inline-flex items-center gap-2 mt-8 bg-clay text-white rounded-full px-7 py-3.5 hover:bg-clay/90 transition-all duration-300"
            >
              <Instagram size={18} strokeWidth={1.6} /> @marmar_arte
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div data-testid="contact-success" className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-sage/50 flex items-center justify-center">
                  <Check className="text-clay" size={30} />
                </div>
                <h3 className="font-heading text-3xl text-ink mt-5">Заявка отправлена!</h3>
                <p className="text-stone mt-3">Я свяжусь с вами совсем скоро 💛</p>
                <button onClick={() => setSent(false)} data-testid="contact-reset-btn" className="text-clay text-sm mt-6 underline">
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4" data-testid="contact-form">
                <div>
                  <label className="block text-sm text-ink mb-2 ml-1">Ваше имя</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    data-testid="contact-name-input"
                    placeholder="Как вас зовут?"
                    className="w-full bg-white/60 border border-border rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-clay/30 focus:border-clay/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink mb-2 ml-1">Телефон или e-mail</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                    data-testid="contact-contact-input"
                    placeholder="+48 ... или email@example.com"
                    className="w-full bg-white/60 border border-border rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-clay/30 focus:border-clay/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink mb-2 ml-1">Размер картины</label>
                  <select
                    name="size"
                    value={form.size}
                    onChange={onChange}
                    data-testid="contact-size-select"
                    className="w-full bg-white/60 border border-border rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-clay/30 focus:border-clay/50 outline-none transition-all text-ink"
                  >
                    <option value="">Выберите (необязательно)</option>
                    {prices.map((p) => (
                      <option key={p.size} value={p.size}>{p.size} — {p.pln} zł</option>
                    ))}
                    <option value="Другой размер">Другой размер</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-ink mb-2 ml-1">Ваши пожелания</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={3}
                    data-testid="contact-message-input"
                    placeholder="Опишите сюжет, цвета, настроение..."
                    className="w-full bg-white/60 border border-border rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-clay/30 focus:border-clay/50 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 bg-clay text-white rounded-full px-8 py-4 text-lg hover:bg-clay/90 transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? "Отправляю..." : <>Отправить заявку <Send size={18} /></>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
