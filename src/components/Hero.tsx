'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-144 h-144 mx-auto mb-6">
            <Image
              src="/images/logo.png"
              alt="Mariachi Nuevo Tecalitlán"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
        >
          <span className="gold-gradient">MARIACHI</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] text-white mb-8"
        >
          NUEVO TECALITLÁN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-white/80 italic max-w-2xl">
            "El mariachi que representa a México con dignidad, orgullo y profunda entrega artística"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="#historia"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-black font-bebas tracking-wider text-lg rounded hover:from-gold hover:to-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
          >
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            DESCUBRE NUESTRA HISTORIA
          </Link>
          <Link
            href="#contratar"
            className="flex items-center gap-3 px-8 py-4 border-2 border-gold text-gold font-bebas tracking-wider text-lg rounded hover:bg-gold hover:text-black transition-all duration-300"
          >
            CONTRATAR AHORA
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-sm tracking-widest">1965 — 2025</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-gold" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gold/30 hover:border-gold transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-gold" />
          ) : (
            <Volume2 className="w-5 h-5 text-gold" />
          )}
        </button>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-1 z-30">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>
    </section>
  );
}
