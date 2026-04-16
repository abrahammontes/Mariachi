'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/mariachi (1).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
  {
    src: '/images/mariachi (2).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
  {
    src: '/images/mariachi (3).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
  {
    src: '/images/mariachi (4).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
  {
    src: '/images/mariachi (5).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
  {
    src: '/images/mariachi (6).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
  {
    src: '/images/mariachi (7).png',
    alt: 'Mariachi Nuevo Tecalitlán',
    category: 'Presentaciones',
  },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="galeria" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.4em] mb-4 font-cormorant">MOMENTOS</span>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient">Galería</span>
          </h2>
          <p className="font-cormorant text-xl text-cream/70 max-w-2xl mx-auto">
            Instantáneas de seis décadas de pasión, elegancia y música mexicana en su máxima expresión.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer overflow-hidden rounded ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-cormorant text-sm text-gold">{image.category}</span>
                <p className="font-playfair text-cream">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-3 text-cream/60 hover:text-cream transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            className="absolute left-4 md:left-8 p-3 text-cream/60 hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-playfair text-xl text-cream">{galleryImages[selectedImage].alt}</p>
              <p className="font-cormorant text-gold">{galleryImages[selectedImage].category}</p>
            </div>
          </motion.div>
          
          <button
            className="absolute right-4 md:right-8 p-3 text-cream/60 hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-6 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedImage ? 'bg-gold' : 'bg-cream/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
