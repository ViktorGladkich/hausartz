"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Anna Schmidt",
    role: "Lehrerin",
    quote: "Die Terminvereinbarung ging unglaublich schnell. Das gesamte Praxisteam ist freundlich und der Arzt hat sich viel Zeit für mich genommen.",
    image: "/images/patient_anna.png",
  },
  {
    name: "Michael Weber",
    role: "Ingenieur",
    quote: "Ich bin seit Jahren Patient in der Praxis am Park. Die Kombination aus moderner Ausstattung und persönlicher Betreuung ist wirklich herausragend.",
    image: "/images/patient_michael.png",
    featured: true,
  },
  {
    name: "Laura Fischer",
    role: "Studentin",
    quote: "Endlich eine Hausarztpraxis, bei der man sich verstanden fühlt. Keine langen Wartezeiten und eine sehr ausführliche, kompetente Beratung.",
    image: "/images/patient_laura.png",
  },
  {
    name: "Julia Becker",
    role: "Apothekerin",
    quote: "Als Apothekerin weiß ich, wie wichtig gute Diagnostik ist. Ich vertraue den Ärzten hier voll und ganz und empfehle die Praxis regelmäßig weiter.",
    image: "/images/patient_julia.png",
  },
  {
    name: "Sophie Wagner",
    role: "Zweifache Mutter",
    quote: "Ob für mich oder meine Familie – wir fühlen uns hier immer bestens aufgehoben. Ein tolles, einfühlsames Team, das sich wirklich kümmert!",
    image: "/images/patient_sophie.png",
  },
  {
    name: "Markus Hoffmann",
    role: "Unternehmer",
    quote: "Gerade als Selbstständiger habe ich wenig Zeit. Die Online-Terminbuchung und die kurzen Wartezeiten vor Ort sind für mich absolutes Gold wert.",
    image: "/images/patient_markus.png",
    featured: true,
  },
];

const Stars = ({ light = false }: { light?: boolean }) => (
  <div className="flex gap-1 mb-5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`w-[18px] h-[18px] ${light ? "fill-white" : "fill-[#FF8F00]"}`}>
        <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold text-dark">Erfahrungsberichte</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-[52px] font-bold text-dark leading-[1.05] tracking-tight"
          >
            Vertraut von tausenden<br className="hidden md:block" /> zufriedenen Patienten.
          </motion.h2>
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: (idx + 1) * 0.2 }}
              className="break-inside-avoid mb-6"
            >
              {t.featured ? (
                <div className="relative rounded-card overflow-hidden min-h-[420px] flex flex-col justify-end p-8 shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-[50%_20%]" />
                  {/* Framer-style Blur Mask Overlay */}
                  <div 
                    className="absolute inset-x-0 bottom-0 h-2/3 z-0 pointer-events-none"
                    style={{
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"
                    }}
                  />
                  <div className="relative z-10">
                    <Stars light />
                    <p className="text-white text-[15px] sm:text-[16px] font-medium leading-[1.6] mb-8">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-white text-[15px]">{t.name}</h4>
                        <p className="text-white/80 text-[13px]">{t.role}</p>
                      </div>
                      <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-100 rounded-card p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
                  <Stars />
                  <p className="text-[#787878] text-[15px] sm:text-[16px] font-medium leading-[1.6] mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden shrink-0 bg-gray-100">
                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-black text-[15px]">{t.name}</h4>
                        <p className="text-[#787878] text-[13px]">{t.role}</p>
                      </div>
                    </div>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all shrink-0 group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-dark transition-colors">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
