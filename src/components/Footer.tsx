import Link from "next/link";
import Image from "next/image";
import { FileText, Shield, Scale, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Start", href: "#hero" },
  { name: "Über uns", href: "#about-us" },
  { name: "Warum wir", href: "#why-choose-us" },
  { name: "Leistungen", href: "#services" },
  { name: "Ärzte", href: "#doctors" },
  { name: "Ablauf", href: "#how-it-works" },
];

const importantLinks = [
  { name: "Impressum", href: "#", icon: FileText },
  { name: "Datenschutz", href: "#", icon: Shield },
  { name: "Rechtliches", href: "#", icon: Scale },
  { name: "Notdienste", href: "#", icon: PhoneCall },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] px-4 sm:px-6 lg:px-8 pb-8">
      <div
        className="max-w-7xl mx-auto rounded-[32px] px-6 sm:px-12 py-14 text-white relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(135deg, #2a8fa8 0%, #1d6fae 45%, #0f3f6f 100%)" }}
      >
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand + newsletter */}
          <div>
            <Link href="#hero" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[var(--color-primary)] overflow-hidden relative">
                <Image src="/logo.png" alt="Praxis am Park Logo" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-2xl text-white">Praxis am Park</span>
            </Link>
            <p className="text-white/70 max-w-sm mb-7 text-[15px] leading-relaxed">
              Moderne Hausarztpraxis für eine vertrauensvolle und persönliche Versorgung.
            </p>
            <form className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] p-1.5 max-w-sm">
              <input
                type="email"
                placeholder="E-Mail eingeben"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-[100px] bg-white text-[var(--color-dark)] text-sm font-semibold hover:bg-gray-100 transition-colors shrink-0"
              >
                Senden
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white/90 mb-5 text-[15px]">Navigation</h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/65 hover:text-white transition-colors text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-5 text-[15px]">Wichtige Links</h4>
            <ul className="space-y-3.5">
              {importantLinks.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors text-[15px] group">
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <s.icon size={14} />
                    </span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-white/55">
          <p>Copyright@2026 Praxis am Park · Alle Rechte vorbehalten</p>
          <p>
            Mit ♥ für bessere Gesundheit сделанно{" "}
            <a 
              href="https://invertadigital.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white text-white/80 underline underline-offset-2 transition-colors font-medium"
            >
              INVERTA DIGITAL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
