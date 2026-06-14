"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Akzeptieren Sie Krankenkassen?",
    a: "Ja, wir rechnen mit den gesetzlichen und privaten Krankenkassen ab. Bitte kontaktieren Sie unser Team, um zu prüfen, ob Ihre Kasse abgedeckt ist."
  },
  {
    q: "Wie buche oder verschiebe ich einen Termin?",
    a: "Sie können Termine direkt über unsere Plattform buchen oder verschieben, indem Sie sich in Ihr Konto einloggen, zu „Meine Termine“ navigieren und Ihre bevorzugte Zeit auswählen."
  },
  {
    q: "Kann ich einen Arzt online konsultieren?",
    a: "Selbstverständlich. Wir bieten sichere, hochwertige Telemedizin-Sprechstunden mit unseren Fachärzten – bequem von zu Hause aus."
  },
  {
    q: "Stellen Ihre Ärzte Rezepte aus?",
    a: "Ja, unsere Ärzte können bei medizinischer Notwendigkeit Rezepte online ausstellen und direkt an Ihre bevorzugte Apotheke senden."
  },
  {
    q: "Wie wähle ich den richtigen Facharzt?",
    a: "Über unsere Plattform können Sie Ärzte nach Fachgebiet filtern, Patientenbewertungen lesen und ihre Erfahrung einsehen, um eine fundierte Wahl zu treffen."
  },
  {
    q: "Werden meine medizinischen Daten vertraulich behandelt?",
    a: "Ja, Ihr Datenschutz hat oberste Priorität. Unsere Plattform ist vollständig DSGVO-konform und verwendet moderne Verschlüsselung zum Schutz Ihrer Daten."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 mb-6"
            >
              <span className="text-sm font-medium text-dark">Häufige Fragen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6"
            >
              Alles, was Sie heute wissen müssen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-muted text-lg mb-10"
            >
              Finden Sie Antworten auf die häufigsten Fragen zu unserer Plattform und unseren Leistungen.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#doctors"
                className="px-8 py-3.5 text-center rounded-pill text-white font-semibold hover:opacity-90 transition-opacity shadow-md"
                style={{ backgroundImage: "linear-gradient(90deg, #2db9c9 0%, #1a5fff 100%)" }}
              >
                Ärzte ansehen
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3.5 text-center rounded-pill bg-white border border-gray-200 text-dark font-semibold hover:bg-gray-50 transition-colors"
              >
                Kontakt
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <div>
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full text-left py-6 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-heading font-semibold text-lg md:text-xl text-dark">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? 'bg-primary text-white' : 'bg-gray-100 text-dark'}`}>
                      {openIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12 text-muted leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-card p-7 flex items-center gap-4 text-white"
              style={{ backgroundImage: "linear-gradient(120deg, #2a8fa8 0%, #1d6fae 55%, #144f9e 100%)" }}
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white mb-1">Noch Fragen offen?</h3>
                <p className="text-white/75 text-[15px] leading-relaxed">
                  Buchen Sie ein Gespräch mit unserem freundlichen Team und erfahren Sie, wie Praxis am Park Ihren Gesundheitsweg vereinfacht.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
