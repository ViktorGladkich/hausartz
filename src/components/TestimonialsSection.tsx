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
    name: "Sarah Jenkins",
    role: "Grafikdesignerin",
    quote: "Die Terminbuchung war völlig mühelos. Die Telemedizin hat mir so viel Zeit gespart und der Arzt war äußerst professionell.",
    image: "/images/doctor-sarah.webp",
  },
  {
    name: "James Wilson",
    role: "Business Analyst",
    quote: "Die Telemedizin ist unglaublich. Ich hatte eine schwere Grippe und konnte eine Beratung und ein Rezept erhalten, ohne mein Bett zu verlassen.",
    image: "/images/doctor-james.webp",
    featured: true,
  },
  {
    name: "Michael Brown",
    role: "Softwareentwickler",
    quote: "Ich habe innerhalb von Minuten einen Facharzt gefunden. Die Plattform ist so intuitiv und ein passender Termin war im Handumdrehen gefunden.",
    image: "/images/doctor-robert.webp",
  },
  {
    name: "Olivia Martinez",
    role: "Pflegefachkraft",
    quote: "Außergewöhnlicher Service und fürsorgliche Ärzte. Selbst als medizinische Fachkraft schätze ich die Einfachheit und Zuverlässigkeit dieser Plattform.",
    image: "/images/doctor-sarah.webp",
  },
  {
    name: "Emily Davis",
    role: "Lehrerin",
    quote: "Praxis am Park hat mich mit einem großartigen Kardiologen verbunden. Die laufende Betreuung und Kommunikation waren hervorragend.",
    image: "/images/doctor-emily.webp",
  },
  {
    name: "Nasir Nawaz",
    role: "Marketing-Manager",
    quote: "Ich war vor meinem ersten Besuch nervös, aber der Arzt war so beruhigend. Der gesamte Ablauf von der Buchung bis zur Beratung war makellos.",
    image: "/images/doctor-robert.webp",
    featured: true,
  },
];

const Stars = ({ light = false }: { light?: boolean }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={15} className={light ? "fill-white text-white" : "fill-[#ffb800] text-[#ffb800]"} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-dark)]">Erfahrungsberichte</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-[52px] font-bold text-[var(--color-dark)] leading-[1.05] tracking-tight"
          >
            Vertraut von tausenden<br className="hidden md:block" /> zufriedenen Patienten.
          </motion.h2>
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid mb-6"
            >
              {t.featured ? (
                <div className="relative rounded-[var(--radius-card)] overflow-hidden min-h-[420px] flex flex-col justify-end p-7">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                  <div className="relative">
                    <Stars light />
                    <p className="text-white text-[15px] font-medium leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                    <div>
                      <h4 className="font-heading font-bold text-white text-[15px]">{t.name}</h4>
                      <p className="text-white/70 text-[13px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[var(--color-background)] border border-gray-100 rounded-[var(--radius-card)] p-7">
                  <Stars />
                  <p className="text-[var(--color-dark)] text-[15px] font-medium leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 relative rounded-full overflow-hidden shrink-0">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[var(--color-dark)] text-[15px]">{t.name}</h4>
                      <p className="text-[var(--color-muted)] text-[13px]">{t.role}</p>
                    </div>
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
