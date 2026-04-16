'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Send, Calendar, MapPin, Phone, Mail, Check, Heart } from 'lucide-react';

const eventTypes = [
  'Boda',
  'XV Años',
  'Cumpleaños',
  'Aniversario',
  'Eventos Corporativos',
  'Festejos Patrios',
  'Serenata',
  'Otro',
];

export default function Contratar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contratar" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.4em] mb-4 font-cormorant">RESERVACIONES</span>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient">Contrátanos</span>
          </h2>
          <p className="font-cormorant text-xl text-cream/70 max-w-2xl mx-auto">
            Haz de tu evento una celebración inolvidable con la música del Mariachi Nuevo Tecalitlán. 
            60 años de experiencia为您带来最美的墨西哥音乐。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black-light/80 backdrop-blur-sm rounded-2xl p-12 border border-gold/30 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-black" />
                </motion.div>
                <h3 className="font-playfair text-3xl text-cream mb-4">¡Solicitud Enviada!</h3>
                <p className="font-cormorant text-xl text-cream/70 mb-6">
                  Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas 
                  para discutir los detalles de tu evento.
                </p>
                <div className="flex items-center justify-center gap-2 text-gold">
                  <Heart className="w-5 h-5" />
                  <span className="font-cormorant">El Mariachi Nuevo Tecalitlán</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-black-light/60 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-cormorant text-cream/70 mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block font-cormorant text-cream/70 mb-2">Correo electrónico *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-cormorant text-cream/70 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors"
                      placeholder="+52 33 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block font-cormorant text-cream/70 mb-2">Tipo de evento *</label>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona...</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-cormorant text-cream/70 mb-2">Fecha del evento *</label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-cormorant text-cream/70 mb-2">Ubicación</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors"
                      placeholder="Ciudad, Estado"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block font-cormorant text-cream/70 mb-2">Mensaje adicional</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-cream font-cormorant focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos más sobre tu evento, número de invitados, preferencias musicales..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-gold-dark to-gold text-black font-bebas tracking-wider text-lg rounded-lg hover:from-gold hover:to-gold-light transition-all duration-300 shadow-lg shadow-gold/30 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ENVIAR SOLICITUD
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div className="bg-black-light/60 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
                <h3 className="font-bebas text-xl tracking-wider text-gold mb-6">INFORMACIÓN DE CONTACTO</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-cormorant text-cream/50 text-sm">Ubicación</p>
                      <p className="font-cormorant text-cream">Guadalajara, Jalisco, México</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-cormorant text-cream/50 text-sm">Teléfono</p>
                      <p className="font-cormorant text-cream">33 3170 1141</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-cormorant text-cream/50 text-sm">Email</p>
                      <p className="font-cormorant text-cream">mariachi@nuevotecalitlan.com.mx</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black-light/60 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
                <h3 className="font-bebas text-xl tracking-wider text-gold mb-4">¿POR QUÉ ELEGIRNOS?</h3>
                <ul className="space-y-4">
                  {[
                    '60 años de experiencia musical',
                    'Más de 70 producciones discográficas',
                    'Presentaciones internacionales',
                    'Tres generaciones de músicos',
                    'Equipamiento profesional',
                    'Repertorio versátil y personalizado',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <span className="font-cormorant text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
