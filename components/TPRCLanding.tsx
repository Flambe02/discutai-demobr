'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  Music,
  CreditCard,
  ArrowRight,
  Sparkles,
  Calendar,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
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

export default function TPRCLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-[var(--font-geist-sans)] antialiased overflow-x-hidden">
      {/* Neural Network Background Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
          {/* Logo */}
          <Link href="/?theme=tprc" className="flex items-center gap-3 group">
            <img
              src="/images/pimentao-rouge-logo.png"
              alt="The Pimentão Rouge Company"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-bold tracking-tight hidden sm:block">The Pimentão Rouge Company</span>
            <span className="text-lg font-bold tracking-tight sm:hidden">TPRC</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#solucoes" className="text-sm text-gray-400 hover:text-white transition-colors">
              Soluções
            </a>
            <a href="/?theme=generico" className="text-sm text-gray-400 hover:text-white transition-colors">
              Demo
            </a>
            <a href="#contato" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contato
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden"
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              <span className="relative z-10">Agendar</span>
              <Calendar className="relative z-10 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#solucoes" className="block text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Soluções
              </a>
              <a href="/?theme=generico" className="block text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Demo
              </a>
              <a href="#contato" className="block text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Agência de Inteligência Artificial</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                que gera resultados reais.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              TPRC: agência boutique de IA.{' '}
              <span className="text-white font-medium">Inteligência conversacional</span>,{' '}
              <span className="text-white font-medium">criatividade musical</span> e{' '}
              <span className="text-white font-medium">precisão financeira</span> para escalar negócios.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Primary CTA - Glassmorphism */}
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                  <div className="absolute inset-[1px] rounded-full bg-[#0a0a0a]" />
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Agendar Diagnóstico</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-4 text-gray-400 hover:text-white transition-colors"
              >
                <span>Ver Demo</span>
                <ExternalLink className="w-4 h-4" />
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
              className="w-1 h-2 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== BENTO GRID - EXPERTISES ===== */}
      <section id="solucoes" className="relative py-32 px-6">
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
                Nossas <span className="text-blue-400">Soluções</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Combinamos expertise em IA, criatividade e finanças para entregar soluções que transformam negócios.
              </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 - IA Conversacional */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-3xl p-[1px] overflow-hidden"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-transparent to-purple-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Bot className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">IA Conversacional</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Automação de agenda e suporte com motor <span className="text-blue-400 font-medium">DiscutAI</span>.
                      Chatbots inteligentes que entendem contexto e entregam resultados.
                    </p>
                  </div>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Ver demonstração</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Card 2 - Creative Tech & Música */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-3xl p-[1px] overflow-hidden"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-transparent to-pink-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Music className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Creative Tech & Música</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Produção de conteúdo sonoro viral e estratégico.
                      <span className="text-purple-400 font-medium"> Jingles, trilhas e sound design</span> que marcam sua marca.
                    </p>
                  </div>
                  <a
                    href="/musica"
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Saber mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Card 3 - Payments & Benefits */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-3xl p-[1px] overflow-hidden"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 via-transparent to-cyan-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Payments & Benefits</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Strategic Advisory: Inteligência de mercado e análise regulatória{' '}
                      <span className="text-emerald-400 font-medium">cross-border (Brasil-Europa)</span>{' '}
                      potencializada por IA para investidores e M&A.
                    </p>
                  </div>
                  <Link
                    href="/advisory"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Saber mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DEMO SECTION ===== */}
      <section id="demo" className="relative py-32 px-6">
        {/* Top border line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left - Text */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm text-blue-400 font-medium tracking-wider uppercase">
                  Demonstração ao vivo
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Sua ponte entre{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    inovação
                  </span>{' '}
                  e{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    lucro
                  </span>
                  .
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Veja na prática como nossos agentes inteligentes transformam a experiência do cliente.
                  Acesse nossa demo interativa e descubra o poder da IA conversacional.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Agendamento automatizado 24/7</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Respostas contextuais inteligentes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Integração com sistemas existentes</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/?theme=cabeleireiro"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <span className="relative z-10">Acessar Demo DiscutAI</span>
                  <ExternalLink className="relative z-10 w-4 h-4" />
                </Link>
                <Link
                  href="/?theme=generico"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/5 transition-colors"
                >
                  <span>Demo Genérico</span>
                </Link>
              </div>
            </motion.div>

            {/* Right - Phone Mockup */}
            <motion.div variants={fadeInUp} className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl scale-150 opacity-50" />

                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[320px] rounded-[3rem] p-3 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl">
                  <div className="rounded-[2.5rem] overflow-hidden bg-black aspect-[9/19.5]">
                    {/* Phone notch */}
                    <div className="relative h-8 bg-black flex items-center justify-center">
                      <div className="w-24 h-6 rounded-full bg-black border-2 border-gray-800" />
                    </div>

                    {/* Screen content */}
                    <div className="p-4 space-y-4">
                      {/* Header */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-sm font-bold">
                          CR
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Barbaria do Rei</div>
                          <div className="text-xs text-gray-400">Online agora</div>
                        </div>
                      </div>

                      {/* Chat messages */}
                      <div className="space-y-3">
                        <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                          <p className="text-sm text-gray-200">Olá! Bem-vindo à Barbaria do Rei. Como posso ajudar?</p>
                        </div>
                        <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
                          <p className="text-sm text-white">Quero agendar um corte para amanhã</p>
                        </div>
                        <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                          <p className="text-sm text-gray-200">Perfeito! Temos horários às 10h, 14h e 16h. Qual prefere?</p>
                        </div>
                      </div>

                      {/* Quick replies */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-gray-800 rounded-full text-xs text-gray-300">10h</span>
                        <span className="px-3 py-1.5 bg-gray-800 rounded-full text-xs text-gray-300">14h</span>
                        <span className="px-3 py-1.5 bg-gray-800 rounded-full text-xs text-gray-300">16h</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-sm font-medium shadow-lg">
                  Powered by DiscutAI
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== AVAILABLE DEMOS SECTION ===== */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h3 className="text-2xl font-bold mb-4">Demos Disponíveis</h3>
              <p className="text-gray-400">Explore diferentes casos de uso do nosso motor de IA</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Barbearia', theme: 'cabeleireiro', color: 'from-amber-500 to-orange-600' },
                { name: 'Restaurante', theme: 'restaurante', color: 'from-red-500 to-rose-600' },
                { name: 'Imobiliária', theme: 'imobiliaria', color: 'from-blue-500 to-indigo-600' },
                { name: 'Dentista', theme: 'dentista', color: 'from-cyan-500 to-teal-600' },
                { name: 'Genérico', theme: 'generico', color: 'from-indigo-500 to-purple-600' },
              ].map((demo) => (
                <Link
                  key={demo.theme}
                  href={`/?theme=${demo.theme}`}
                  className="group relative rounded-2xl p-[1px] overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-30 group-hover:opacity-60 transition-opacity`} />
                  <div className="relative rounded-2xl bg-[#0a0a0a] p-4 text-center">
                    <div className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${demo.color} flex items-center justify-center font-bold text-sm`}>
                      {demo.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{demo.name}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT / CTA SECTION ===== */}
      <section id="contato" className="relative py-32 px-6">
        {/* Top border line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                transformar
              </span>{' '}
              seu negócio?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Agende um diagnóstico gratuito e descubra como a inteligência artificial pode
              otimizar seus processos e aumentar seus resultados.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5511976458933&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                <div className="absolute inset-[2px] rounded-full bg-[#050505]" />
                <span className="relative z-10">Falar no WhatsApp</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:florent.lambert@pimentaorouge.com"
                className="inline-flex items-center gap-2 px-6 py-4 text-gray-400 hover:text-white transition-colors"
              >
                <span>florent.lambert@pimentaorouge.com</span>
              </a>
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
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
              <a href="/?theme=generico" className="hover:text-white transition-colors">Demo</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm">
              Inteligência Artificial que gera resultados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
