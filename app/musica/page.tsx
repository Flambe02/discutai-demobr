'use client';

import { motion } from 'framer-motion';
import {
  Volume2,
  Mic,
  PartyPopper,
  Headphones,
  ArrowRight,
  ExternalLink,
  Play,
  Music,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function MusicaPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-[var(--font-geist-sans)] antialiased overflow-x-hidden">
      {/* Background with subtle musical wave pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-950/10 via-transparent to-transparent" />
        {/* Subtle sound wave pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="soundwave" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M0 60 Q 25 40, 50 60 T 100 60"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
              />
              <path
                d="M0 40 Q 25 60, 50 40 T 100 40"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#soundwave)" />
        </svg>
      </div>

      {/* ===== NAVIGATION ===== */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Back to Home */}
          <Link href="/?theme=tprc" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <img
              src="/images/pimentao-rouge-logo.png"
              alt="The Pimentão Rouge Company"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-bold tracking-tight hidden sm:block">TPRC</span>
          </Link>

          {/* CTA */}
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
            <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-full" />
            <span className="relative z-10">Solicitar Orçamento</span>
          </a>
        </div>
      </motion.nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300"
            >
              <Music className="w-4 h-4" />
              <span>Creative Tech & Música</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                A trilha sonora
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                da sua inovação.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Na TPRC, transformamos conceitos em som. Unimos{' '}
              <span className="text-white font-medium">Inteligência Artificial Generativa</span> e{' '}
              <span className="text-white font-medium">expertise musical</span> para criar identidades
              sonoras únicas que engajam e convertem.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Descobrir nossos projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-purple-400/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== PORTFOLIO DE IMPACTO ===== */}
      <section id="portfolio" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-20"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Portfólio de <span className="text-purple-400">Impacto</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Projetos que demonstram nossa capacidade de unir tecnologia e arte para criar
                experiências sonoras memoráveis.
              </p>
            </motion.div>

            {/* A Música da Segunda */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-3xl p-[1px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-blue-500/50 opacity-60" />
              <div className="relative rounded-3xl bg-[#0a0a0a] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-300">
                      <Sparkles className="w-4 h-4" />
                      <span>Projeto Viral</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Agilidade e Viralidade:{' '}
                      <span className="text-pink-400">A Música da Segunda</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Toda semana, uma nova música baseada nos fatos que movem o Brasil.
                    </p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-300">
                        <span className="text-pink-400 font-semibold">Destaque:</span> Mostra nossa
                        capacidade de produção rápida e engajamento cultural usando IA para capturar
                        o &quot;zeitgeist&quot; do momento.
                      </p>
                    </div>
                    <a
                      href="https://www.amusicadasegunda.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
                      <span className="relative z-10">Ver Projetos Virais</span>
                      <ExternalLink className="relative z-10 w-4 h-4" />
                    </a>
                  </div>

                  {/* Visual */}
                  <div className="relative flex justify-center">
                    <div className="relative w-full max-w-sm">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl scale-150 opacity-50" />
                      {/* Mockup */}
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">A Música da Segunda</p>
                            <p className="text-sm text-gray-400">Edição Semanal</p>
                          </div>
                        </div>
                        {/* Waveform visualization */}
                        <div className="flex items-end justify-center gap-1 h-20">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                              animate={{
                                height: [
                                  `${Math.random() * 60 + 20}%`,
                                  `${Math.random() * 60 + 20}%`,
                                  `${Math.random() * 60 + 20}%`,
                                ],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.05,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pimentão Rouge */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300">
                  <Volume2 className="w-4 h-4" />
                  <span>Música Infantil</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Educação e Qualidade:{' '}
                  <a
                    href="https://www.pimentao.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Pimentão Rouge (pimentao.fr)
                  </a>
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A música infantil que une tradição e inovação tecnológica.
                </p>
              </div>

              {/* Albums Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Album 1 */}
                <motion.div
                  variants={scaleIn}
                  className="group rounded-2xl overflow-hidden bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src="/images/pimentao-album-1.png"
                      alt="11 contos musicais"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x400/1a1a2e/ffffff?text=Album+1';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="font-bold text-gray-900 mb-2">11 contos musicais</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Histórias encantadas em forma de música para crianças.
                    </p>
                    <a
                      href="https://www.pimentao.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
                    >
                      <span>Descobrir</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Album 2 */}
                <motion.div
                  variants={scaleIn}
                  className="group rounded-2xl overflow-hidden bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src="/images/pimentao-album-2.png"
                      alt="Canções do mundo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x400/2d1b4e/ffffff?text=Album+2';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="font-bold text-gray-900 mb-2">Canções do mundo</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Uma viagem musical pelos continentes para pequenos exploradores.
                    </p>
                    <a
                      href="https://www.pimentao.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
                    >
                      <span>Descobrir</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Album 3 */}
                <motion.div
                  variants={scaleIn}
                  className="group rounded-2xl overflow-hidden bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src="/images/pimentao-album-3.jpg"
                      alt="Ritmos e brincadeiras"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x400/4a1942/ffffff?text=Album+3';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="font-bold text-gray-900 mb-2">Ritmos e brincadeiras</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Músicas interativas para dançar e aprender brincando.
                    </p>
                    <a
                      href="https://www.pimentao.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
                    >
                      <span>Descobrir</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative py-24 px-6">
        {/* Top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Sua empresa tem uma voz.
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Nós damos a música.
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Descubra como a TPRC pode transformar a estratégia sonora da sua marca.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 - Identidade Sonora */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-2xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-2xl bg-[#0a0a0a] p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Identidade Sonora & Branding</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Criamos o &quot;logo sonoro&quot; e o tema oficial da sua marca para que ela seja
                    reconhecida de olhos fechados.
                  </p>
                </div>
              </motion.div>

              {/* Service 2 - Jingles */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-2xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-transparent to-purple-500/30 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-2xl bg-[#0a0a0a] p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 flex items-center justify-center">
                    <Mic className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Jingles & Slogans IA</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Produção em escala de músicas publicitárias otimizadas para redes sociais
                    (TikTok/Reels).
                  </p>
                </div>
              </motion.div>

              {/* Service 3 - Eventos */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-2xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-2xl bg-[#0a0a0a] p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <PartyPopper className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Trilhas para Eventos</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Música personalizada para convenções, lançamentos de produtos e experiências
                    imersivas.
                  </p>
                </div>
              </motion.div>

              {/* Service 4 - Podcasts */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-2xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-blue-500/30 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-2xl bg-[#0a0a0a] p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Podcasts & Voiceover</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Criação de vinhetas e tratamento de voz profissional com tecnologia de ponta.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="contato" className="relative py-32 px-6">
        {/* Top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Pronto para criar a{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                trilha sonora do sucesso
              </span>
              ?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar a identidade sonora da sua
              marca com tecnologia de ponta.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:florent.lambert@pimentaorouge.com?subject=Orçamento%20Personalizado%20-%20Creative%20Tech%20%26%20Música"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold overflow-hidden"
              >
                {/* Animated gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x" />
                <span className="relative z-10">Solicitar Orçamento Personalizado</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8">
              <Link
                href="/?theme=tprc"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para a página principal</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/pimentao-rouge-logo.png"
                alt="The Pimentão Rouge Company"
                className="h-8 w-auto"
              />
              <span className="font-semibold hidden sm:block">The Pimentão Rouge Company</span>
              <span className="font-semibold sm:hidden">TPRC</span>
              <span className="text-gray-500 text-sm">© 2026</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/?theme=tprc" className="hover:text-white transition-colors">
                Home
              </Link>
              <a href="#portfolio" className="hover:text-white transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm">A trilha sonora da sua inovação.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
