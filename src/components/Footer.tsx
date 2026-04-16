'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo.png"
                  alt="Mariachi Nuevo Tecalitlán"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="font-cormorant text-lg text-cream/70 leading-relaxed mb-6 max-w-md">
              El Mariachi que representa a México con dignidad, orgullo y profunda entrega artística. 
              Seis décadas preservando la esencia de la música mexicana.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/mariachinuevotecalitlan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-lg tracking-wider text-gold mb-6">ENLACES</h4>
            <ul className="space-y-3">
              {['Historia', 'Galería', 'Música', 'Contratar'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-cormorant text-cream/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-lg tracking-wider text-gold mb-6">CONTACTO</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-cormorant">Guadalajara, Jalisco</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-cormorant">+52 33 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail className="w-4 h-4 text-gold" />
                <span className="font-cormorant">contacto@nuevotecalitlan.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="py-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-cormorant text-cream/50 text-sm">
            © 2025 Mariachi Nuevo Tecalitlán. Todos los derechos reservados.
          </p>
          <p className="font-cormorant text-cream/30 text-sm">
            1965 — 2025 • 60 años de tradición y excelencia
          </p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </footer>
  );
}
