"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, Clock, Building2, CalendarDays, ArrowUpRight } from "lucide-react";

const doctorsData = [
  {
    name: "Dr. James Carter",
    role: "Kardiologe",
    specialty: "Kardiologe",
    experience: "12+ Jahre",
    hospital: "Herzklinik",
    availability: "Mo – Fr",
    image: "/images/doctor-james.webp",
    about: "Erfahren in der Behandlung komplexer Herzerkrankungen mit einem einfühlsamen, patientenorientierten Ansatz.",
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Dermatologin",
    specialty: "Dermatologin",
    experience: "08+ Jahre",
    hospital: "Hautzentrum",
    availability: "Mo – Sa",
    image: "/images/doctor-sarah.webp",
    about: "Spezialisiert auf moderne Hautpflege, kosmetische Behandlungen und medizinische Lösungen für alle Hauttypen.",
  },
  {
    name: "Dr. Robert Ellison",
    role: "Allgemeinarzt",
    specialty: "Allgemeinarzt",
    experience: "15+ Jahre",
    hospital: "Praxis am Park",
    availability: "Mo – Fr",
    image: "/images/doctor-robert.webp",
    about: "Engagiert für die alltägliche Versorgung, Vorsorgeuntersuchungen und kontinuierliche Betreuung in jedem Alter.",
  },
  {
    name: "Dr. Emily Rhodes",
    role: "Neurologin",
    specialty: "Neurologin",
    experience: "10+ Jahre",
    hospital: "Neuro-Institut",
    availability: "Di – Sa",
    image: "/images/doctor-emily.webp",
    about: "Fokussiert auf neurologische Erkrankungen und Gehirngesundheit mit präzisen, evidenzbasierten Behandlungsplänen.",
  },
];

export default function DoctorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 880;
      const { scrollLeft } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - amount : scrollLeft + amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="doctors" className="py-24 bg-[var(--color-background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200/70 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-dark)]">Unsere Fachärzte</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-[var(--color-dark)] leading-[1.05] tracking-tight"
            >
              Engagierte Ärzte,<br className="hidden md:block" /> die sich Ihrer Gesundheit widmen
            </motion.h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[var(--color-dark)] hover:bg-gray-50 transition-colors active:scale-95"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next"
              className="w-12 h-12 rounded-full bg-[var(--color-dark)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-white hover:bg-black transition-colors active:scale-95"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Wide horizontal cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {doctorsData.map((doc, idx) => (
              <div
                key={idx}
                className="flex-none w-[88vw] sm:w-[640px] lg:w-[840px] snap-start bg-white rounded-[24px] p-4 border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row gap-5"
              >
                {/* Photo left */}
                <div className="relative w-full sm:w-[280px] shrink-0 h-[320px] sm:h-auto rounded-[18px] overflow-hidden">
                  <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-white rounded-[100px] p-1.5 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
                        <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-bold text-[var(--color-dark)] leading-tight truncate">{doc.name}</p>
                        <p className="text-[11px] font-semibold text-gray-500 truncate">{doc.role}</p>
                      </div>
                    </div>
                    <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-dark)] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity">
                      <ArrowUpRight size={18} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Details right */}
                <div className="flex flex-col flex-1 min-w-0 py-1 pr-1">
                  <div className="mb-5">
                    <p className="text-[15px] font-bold text-[var(--color-dark)] mb-1.5">Über {doc.name.split(" ")[1]}:</p>
                    <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{doc.about}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <InfoCard icon={Stethoscope} label="Fachgebiet" value={doc.specialty} />
                    <InfoCard icon={Clock} label="Erfahrung" value={doc.experience} />
                    <InfoCard icon={Building2} label="Klinik" value={doc.hospital} />
                    <InfoCard icon={CalendarDays} label="Verfügbarkeit" value={doc.availability} />
                  </div>

                  <a
                    href="#"
                    className="mt-auto flex items-center justify-center w-full py-3.5 rounded-[100px] text-white font-semibold text-[15px] transition-opacity hover:opacity-90 shadow-md"
                    style={{ backgroundImage: "linear-gradient(90deg, #2db9c9 0%, #1a5fff 100%)" }}
                  >
                    Termin vereinbaren
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const InfoCard = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-center gap-3 border border-gray-100 rounded-[12px] p-3 bg-[#fafafa]">
    <div className="w-[34px] h-[34px] rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0">
      <Icon size={16} strokeWidth={2.2} className="text-[var(--color-dark)]" />
    </div>
    <div className="overflow-hidden flex flex-col justify-center">
      <p className="text-[11px] text-gray-400 font-semibold mb-[2px]">{label}</p>
      <p className="text-[13px] font-bold text-[var(--color-dark)] truncate">{value}</p>
    </div>
  </div>
);
