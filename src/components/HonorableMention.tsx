'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, Globe, Users } from 'lucide-react';

const stats = [
  { icon: Star, value: '60+', label: 'Años de tradición' },
  { icon: Award, value: '70+', label: 'Producciones discográficas' },
  { icon: Globe, value: '30+', label: 'Países visitados' },
  { icon: Users, value: '3', label: 'Generaciones de músicos' },
];

export default function HonorableMention() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gold-gradient">El Mariachi que representa a México</span>
          </h2>
          <p className="font-cormorant text-xl text-white/80 max-w-3xl mx-auto">
            Con dignidad, orgullo y profunda entrega artística. Han compartido escenario con 
            Juan Gabriel, Vicente Fernández, Lila Downs, Alejandro Fernández y muchos más.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/30"
              >
                <stat.icon className="w-7 h-7 text-black" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="font-bebas text-4xl text-gold block"
              >
                {stat.value}
              </motion.span>
              <span className="font-cormorant text-white/70">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-playfair text-xl italic text-white/90">
            "Porque mientras existan mariachis como Nuevo Tecalitlán, el alma de México seguirá cantando al mundo."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
