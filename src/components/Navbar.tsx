"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Leistungen", href: "#services" },
  { name: "Ärzte", href: "#doctors" },
  { name: "Über uns", href: "#about-us" },
  { name: "Ablauf", href: "#how-it-works" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6"
      >
        <div 
          className={`w-full max-w-6xl flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 rounded-[32px] transition-all duration-300 backdrop-blur-xl ${
            scrolled 
              ? "bg-white/90 border border-gray-200 shadow-md" 
              : "bg-white/10 border border-white/20 shadow-sm"
          }`}
        >
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 pl-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm overflow-hidden relative">
              <Image src="/logo.png" alt="Praxis am Park Logo" fill className="object-cover" />
            </div>
            <span className={`font-heading font-bold text-xl sm:text-2xl tracking-tight ${scrolled ? 'text-dark' : 'text-white'}`}>
              Praxis am Park
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 pr-2">
            <div className="flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-[15px] transition-colors ${
                    scrolled 
                      ? 'text-muted hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-semibold transition-colors ${
                scrolled 
                  ? 'bg-primary text-white hover:opacity-90' 
                  : 'bg-white text-dark hover:bg-gray-50'
              }`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark shadow-sm transition-transform active:scale-95"
            >
              {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-28 px-6 flex flex-col">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark shadow-sm transition-transform active:scale-95"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-dark font-heading font-semibold text-2xl"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg text-center hover:opacity-90 transition-opacity mt-6 inline-block"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
