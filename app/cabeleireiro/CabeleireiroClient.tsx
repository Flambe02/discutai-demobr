'use client';

import { motion } from 'framer-motion';
import { Scissors, Clock, MapPin, Phone, Star, ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Le chargement du widget Jessica est géré dans page.tsx via next/script (server component)
// → pas de useEffect, pas d'interférence React Strict Mode
export default function CabeleireiroClient() {

  const services = [
    { name: 'Corte masculino', price: 'R$ 45' },
    { name: 'Barba com navalha', price: 'R$ 35' },
    { name: 'Combo corte + barba', price: 'R$ 70' },
    { name: 'Degradê e desenho', price: 'R$ 55' },
    { name: 'Sobrancelha', price: 'R$ 20' },
    { name: 'Hidratação de barba', price: 'R$ 30' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      {/* Background subtle pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3100]/5 via-transparent to-transparent" />
      </div>

      {/* ===== NAV ===== */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/?theme=tprc" className="flex items-center gap-3 group">
            <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            <img
              src="/images/pimentao-rouge-logo.png"
              alt="TPRC"
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-yellow-400" />
              <span className="text-sm font-semibold">4,8</span>
              <span className="text-xs text-gray-400">(312 avaliações)</span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left - Content */}
            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff3100]/10 border border-[#ff3100]/20 text-sm text-[#ff6b4a]"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Demo DiscutAI — Barbearia</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-extrabold leading-tight"
              >
                <span className="text-white">Barbaria do Rei</span>
                <br />
                <span className="text-[#ff3100]">Barba. Corte. Estilo.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
                Atendimento exclusivo com técnica e cuidado. Agende pelo chat com{' '}
                <span className="text-white font-medium">Jessica</span>, nossa assistente virtual,
                ou pelo WhatsApp.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff3100] shrink-0" />
                  <span>Rua das Flores, 123 – Centro, São Paulo – SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ff3100] shrink-0" />
                  <span>Ter–Sáb: 9h às 19h | Dom e Seg: sob agendamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ff3100] shrink-0" />
                  <a href="tel:+551134567890" className="hover:text-white transition-colors">
                    (11) 3456-7890
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <a
                  href="https://wa.me/5511987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff3100] hover:bg-[#e02b00] text-white font-semibold transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar horário
                </a>
                <span className="text-gray-500 text-sm">ou fale com a Jessica →</span>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-[#ff3100]/20 blur-3xl rounded-full scale-75 opacity-40" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                  alt="Barbaria do Rei"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3">
          {[
            { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', alt: 'Barba com navalha' },
            { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', alt: 'Corte masculino' },
            { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80', alt: 'Ambiente da barbearia' },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-white/5 aspect-square"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl font-bold">
                Nossos <span className="text-[#ff3100]">Serviços</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3100]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Scissors className="w-4 h-4 text-[#ff3100] shrink-0" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                  <span className="text-[#ff3100] font-semibold text-sm">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Pronto para um novo visual?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            Fale com <span className="text-white font-medium">Jessica</span> agora mesmo — ela agenda, informa preços e tira todas as dúvidas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#ff3100] hover:bg-[#e02b00] text-white font-bold transition-colors"
            >
              Agendar via WhatsApp
            </a>
            <Link
              href="/?theme=tprc"
              className="px-6 py-4 text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← Ver outros demos TPRC
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Barbaria do Rei © 2026 — Demo DiscutAI by TPRC</p>
          <Link href="/?theme=tprc" className="flex items-center gap-2 hover:text-white transition-colors">
            <img src="/images/pimentao-rouge-logo.png" alt="TPRC" className="h-5 w-auto" />
            <span>Powered by TPRC</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
