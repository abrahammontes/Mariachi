'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Music, Disc, Star } from 'lucide-react';

const albums = [
  {
    title: 'Yo Soy de Tecalitlán',
    year: '2025',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c7/1f/0b/c71f0b50-4a78-5f58-59ab-5175ee09d7b4/0.jpg/486x486bb.png',
    songs: 10,
  },
  {
    title: 'La Mujer Más Especial',
    year: '2021',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/64/ce/05/64ce05e9-ffaa-107b-e2b4-69393d4ef16b/7500682162957.png/486x486bb.png',
    songs: 12,
  },
  {
    title: 'México de Mis Amores',
    year: '2020',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e8/bf/f7/e8bff7c9-e190-9523-3b91-ce8e54481f39/600093083425.png/486x486bb.png',
    songs: 10,
  },
  {
    title: 'Serenata Mexicana',
    year: '2019',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7d/a0/2e/7da02eff-e1a6-9e65-23ec-eaf3d9e25ed3/7450001718702.png/486x486bb.png',
    songs: 15,
  },
];

const tracks = [
  { title: 'A la Mujer', plays: '239K', duration: '3:45' },
  { title: 'El Nuevo Huapango', plays: '73K', duration: '4:12' },
  { title: 'Sones de Veracruz', plays: '62K', duration: '3:58' },
  { title: 'Fantasía Loca', plays: '61K', duration: '3:22' },
  { title: 'Cielito Lindo', plays: '—', duration: '2:55' },
  { title: 'La Martina', plays: '—', duration: '4:30' },
];

export default function Musica() {
  return (
    <section id="musica" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.4em] mb-4 font-cormorant">DISCOGRAFÍA</span>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient">Nuestra Música</span>
          </h2>
          <p className="font-cormorant text-xl text-white/70 max-w-2xl mx-auto">
            Más de 60 producciones discográficas. Canciones que han pasado de generación en generación, manteniendo viva la tradición del mariachi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-2xl tracking-wider text-gold mb-8 flex items-center gap-3">
              <Disc className="w-6 h-6" />
              ÁLBUMES DESTACADOS
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {albums.map((album, index) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative aspect-square rounded overflow-hidden mb-3">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-playfair text-lg text-white">{album.title}</p>
                      <p className="font-cormorant text-sm text-gold">{album.year} • {album.songs} canciones</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-2xl tracking-wider text-gold mb-8 flex items-center gap-3">
              <Music className="w-6 h-6" />
              TEMAS POPULARES
            </h3>
            <div className="space-y-3">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-black-light/50 rounded-lg border border-transparent hover:border-gold/30 transition-all duration-300"
                >
                  <span className="font-bebas text-2xl text-gold w-8">{index + 1}</span>
                  <div className="flex-1">
                    <p className="font-playfair text-lg text-white">
                      {track.title}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-cormorant text-white/50">{track.plays} reproducciones</span>
                      {track.plays !== '—' && (
                        <span className="flex items-center gap-1 text-gold">
                          <Star className="w-3 h-3 fill-current" />
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-cormorant text-white/50">{track.duration}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <p className="font-cormorant text-white/60 text-center mb-6">Escúchanos en</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-black-lighter rounded-lg border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <span className="font-bebas text-lg">Apple Music</span>
                  <ExternalLink className="w-4 h-4 text-gold" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-black-lighter rounded-lg border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <span className="font-bebas text-lg">Spotify</span>
                  <ExternalLink className="w-4 h-4 text-gold" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-black-lighter rounded-lg border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <span className="font-bebas text-lg">YouTube</span>
                  <ExternalLink className="w-4 h-4 text-gold" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="font-bebas text-2xl tracking-wider text-gold mb-6 text-center">
                ESCUCHAR EN DEEZER
              </h3>
              <div className="w-full rounded-lg overflow-hidden">
                <iframe
                  title="Deezer"
                  src="https://www.deezer.com/es/artist/304363?embed=1"
                  width="100%"
                  height="400"
                  style={{ borderRadius: '12px', border: 'none' }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
