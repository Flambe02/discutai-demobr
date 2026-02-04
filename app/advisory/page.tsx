'use client';

import { motion } from 'framer-motion';
import {
  Scale,
  Cpu,
  Users,
  TrendingUp,
  Target,
  FileSearch,
  Building2,
  Landmark,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Shield,
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

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-[var(--font-geist-sans)] antialiased overflow-x-hidden">
      {/* Background with subtle grid pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-emerald-950/10 via-transparent to-transparent" />
        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
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
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full" />
            <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-full" />
            <span className="relative z-10">Falar com o Advisor</span>
          </a>
        </div>
      </motion.nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-6">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300"
            >
              <Shield className="w-4 h-4" />
              <span>Strategic Advisory</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Advisory Estratégico em
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Benefícios e Pagamentos.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Brasil e Europa.{' '}
              <span className="text-white font-medium">Inteligência de mercado</span>,{' '}
              <span className="text-white font-medium">regulação</span> e{' '}
              <span className="text-white font-medium">tecnologia</span> para decisões de investimento, produto e M&A.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full" />
                <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full group-hover:bg-transparent transition-colors duration-300" />
                <span className="relative z-10">Falar com o Advisor</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Vision Block */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 max-w-2xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="text-gray-300 leading-relaxed">
                <span className="text-emerald-400 font-semibold">O mercado está mudando.</span>{' '}
                Pix, tokenização, Open Finance, regulação cross-border. Muita promessa, pouco filtro.
                Ajudamos você a identificar os{' '}
                <span className="text-white font-medium">ganhadores reais</span> e evitar armadilhas.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-gray-700 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-emerald-400/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      <section id="para-quem" className="relative py-24 px-6">
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
                Para <span className="text-emerald-400">quem é</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nosso advisory atende diferentes perfis com necessidades específicas no ecossistema de pagamentos e benefícios.
              </p>
            </motion.div>

            {/* 3 Column Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Investidores */}
              <motion.div
                variants={scaleIn}
                className="group relative rounded-3xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 via-transparent to-cyan-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Landmark className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Investidores e Fundos</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Foco em <span className="text-emerald-400 font-medium">tese de investimento</span>,
                      screening de oportunidades e diligência de risco regulatório no setor de payments e benefits.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Avaliação de portfólio
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Due diligence técnica
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Mapeamento regulatório
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Fintechs */}
              <motion.div
                variants={scaleIn}
                className="group relative rounded-3xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/50 via-transparent to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Fintechs e Operadoras</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Estratégia de <span className="text-cyan-400 font-medium">portfólio de produtos</span>,
                      pricing competitivo e canais de distribuição B2B e B2C.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Estratégia de produto
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Modelo de pricing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Go-to-market
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Empresas */}
              <motion.div
                variants={scaleIn}
                className="group relative rounded-3xl p-[1px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-transparent to-indigo-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Empresas e RH</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Desenho de <span className="text-blue-400 font-medium">pacotes de benefícios</span>
                      {' '}e experiência do colaborador com foco em retenção e engajamento.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Benchmark de mercado
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Otimização fiscal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Employee experience
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DEEP DIVE - 6 COMPETÊNCIAS ===== */}
      <section id="competencias" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
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
                Áreas de <span className="text-emerald-400">Expertise</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cobertura completa do ecossistema de pagamentos e benefícios, do regulatório ao go-to-market.
              </p>
            </motion.div>

            {/* 6 Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Legislativo */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Legislativo e Regulação</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Interoperabilidade Open/Closed loop, impactos de compliance e análise comparativa Brasil-Europa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300">Bacen</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300">PSD2/PSD3</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300">Open Finance</span>
                </div>
              </motion.div>

              {/* Card 2 - Tecnologia */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tecnologia e Infraestrutura</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Expertise técnica em APIs, Pix, tokenização e arquiteturas que reduzem custos ocultos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">APIs</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">Pix</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">Tokenização</span>
                </div>
              </motion.div>

              {/* Card 3 - Comportamento */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Uso e Comportamento</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Análise de churn, adoção mobile-first e especificidades culturais (WhatsApp/Pix BR vs Europa).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300">Churn</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300">Mobile-first</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300">UX</span>
                </div>
              </motion.div>

              {/* Card 4 - Mercado */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mercado e Dinâmica Competitiva</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Cartografia de players (Incumbentes vs Fintechs) e identificação de wedges estratégicos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300">Mapping</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300">Wedges</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300">Moats</span>
                </div>
              </motion.div>

              {/* Card 5 - GTM */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Go-to-market e Distribuição</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Estratégias de venda B2B, modelos de marketing baseados em confiança e onboarding eficiente.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">B2B Sales</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">PLG</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">Onboarding</span>
                </div>
              </motion.div>

              {/* Card 6 - M&A */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-rose-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                  <FileSearch className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">M&A e Diligência</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Checklist rigoroso: Unit Economics, CAC/LTV, riscos ocultos e análise pós-integração.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-300">Due Diligence</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-300">Unit Eco</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-300">PMI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== POR QUE EU ===== */}
      <section id="porque" className="relative py-24 px-6">
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
                Por que <span className="text-emerald-400">eu</span>
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Argumentaire */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">25+ anos de experiência</h4>
                      <p className="text-gray-400 text-sm">
                        Trajetória em payments, benefits e fintech nos dois lados do Atlântico.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expertise bicultural real</h4>
                      <p className="text-gray-400 text-sm">
                        Vivência prática Brasil-Europa, não apenas teórica. Entendo as nuances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Abordagem hands-on</h4>
                      <p className="text-gray-400 text-sm">
                        Não entrego PowerPoints bonitos. Entrego insights acionáveis e trabalho junto.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Formatos */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Formatos de Engajamento</h3>

                {/* Sprint */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Sprint de Inteligência</h4>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">2-4 semanas</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Deep-dive focado em uma questão específica: mercado, regulação ou tecnologia.
                  </p>
                </div>

                {/* Due Diligence */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Diligência e M&A</h4>
                    <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">Sob demanda</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Análise rápida e objetiva para decisões de investimento ou aquisição.
                  </p>
                </div>

                {/* Advisory */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Advisory Mensal</h4>
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">Contínuo</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Suporte estratégico recorrente para acompanhar evolução do mercado.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="contato" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Pronto para uma{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                conversa estratégica?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Vamos discutir seus desafios em pagamentos e benefícios. Sem compromisso, apenas insights.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="mailto:florent.lambert@pimentaorouge.com"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500" />
                <div className="absolute inset-[2px] rounded-full bg-[#050505]" />
                <span className="relative z-10">Quero uma conversa rápida</span>
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
            <Link href="/?theme=tprc" className="flex items-center gap-3">
              <img
                src="/images/pimentao-rouge-logo.png"
                alt="The Pimentão Rouge Company"
                className="h-8 w-auto"
              />
              <span className="font-semibold hidden sm:block">The Pimentão Rouge Company</span>
              <span className="font-semibold sm:hidden">TPRC</span>
              <span className="text-gray-500 text-sm">© 2026</span>
            </Link>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/?theme=tprc" className="hover:text-white transition-colors">Home</Link>
              <Link href="/musica" className="hover:text-white transition-colors">Música</Link>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm">
              Strategic Advisory. Brasil-Europa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
