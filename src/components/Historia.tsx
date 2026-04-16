'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const milestones = [
  {
    year: '1965',
    title: 'El Origen',
    description: 'Fundado en Guadalajara, Jalisco, por el maestro Fernando Martínez Barajas. Catorce jóvenes músicos con un sueño: preservar la esencia del mariachi tradicional.',
    icon: Calendar,
  },
  {
    year: '1970s',
    title: 'Giras Internacionales',
    description: 'Inician giras por Estados Unidos, Colombia y España. Trabajan junto a Lola Beltrán y Vicente Fernández, consolidando su nombre en la escena nacional.',
    icon: MapPin,
  },
  {
    year: '1999',
    title: 'Nueva Generación',
    description: 'Con la pérdida del maestro Fernando, sus hijos Fernando Jr., Ángel y Carlos asumen la dirección. Se incorporan jóvenes talentos y el arpa como instrumento distintivo.',
    icon: Users,
  },
  {
    year: '2011',
    title: 'Orquesta Sinfónica',
    description: '"En vivo con la orquesta sinfónica de Jalisco" - Un disco especial que marca un hito en su carrera, fusionando tradición con sofisticación clásica.',
    icon: Award,
  },
  {
    year: '2015',
    title: '50 Aniversario',
    description: 'Publican libro, CD y DVD commemorating su medio siglo. La tercera generación comienza a prepararse, asegurando la continuidad del legado.',
    icon: Award,
  },
  {
    year: '2025',
    title: '60 Años',
    description: 'Referente internacional de calidad y tradición. Han llevado su música por todo el mundo: Estados Unidos, Europa, Asia y América Latina.',
    icon: Calendar,
  },
];

export default function Historia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="historia" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-gold text-sm tracking-[0.4em] mb-4 font-cormorant">DESDE 1965</span>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Una Historia</span>
          </h2>
          <h3 className="font-bebas text-3xl sm:text-4xl tracking-[0.15em] text-white/80 mb-6">
            DIGNA DE CONTAR
          </h3>
          <p className="font-cormorant text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Hablar del Mariachi Nuevo Tecalitlán es hablar de tradición, excelencia y pasión por la música mexicana. 
            Seis décadas preservando el alma de México en cada nota.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-flex items-center gap-2 mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <span className="font-bebas text-5xl text-gold/30">{milestone.year}</span>
                  </div>
                  <h3 className="font-playfair text-2xl sm:text-3xl text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-cormorant text-lg text-white/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/30 flex-shrink-0">
                  <milestone.icon className="w-7 h-7 text-black" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="font-playfair text-2xl sm:text-3xl italic text-white/90 max-w-4xl mx-auto">
            "Porque mientras existan mariachis como Nuevo Tecalitlán, 
            <span className="text-gold"> el alma de México seguirá cantando al mundo.</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
