'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#historia', label: 'Historia' },
  { href: '#galeria', label: 'Galería' },
  { href: '#musica', label: 'Música' },
  { href: '#contratar', label: 'Contratar' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg shadow-gold/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-36 h-36">
                <Image
                  src="/images/logo.png"
                  alt="Mariachi Nuevo Tecalitlán"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-cormorant text-lg text-white/80 hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="https://facebook.com/mariachinuevotecalitlan" target="_blank" rel="noopener noreferrer" 
                 className="text-white/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-white/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-white/60 hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <Link
                href="#contratar"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-gold-dark to-gold text-black font-bebas tracking-wider text-sm hover:from-gold hover:to-gold-light transition-all duration-300 rounded"
              >
                RESERVAR
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-playfair text-3xl text-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a href="https://facebook.com/mariachinuevotecalitlan" className="text-white/60 hover:text-gold">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" className="text-white/60 hover:text-gold">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://youtube.com" className="text-white/60 hover:text-gold">
                  <Youtube className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
