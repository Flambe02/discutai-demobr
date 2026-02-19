'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Briefcase,
  Crown,
  Brain,
  MessageSquareCode,
  Bot,
  BarChart3,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Monitor,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

const baseUrl = 'https://www.pimentaorouge.com';

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': `${baseUrl}/formacao#course`,
  name: 'Capacitação Corporativa em IA Generativa',
  alternateName: 'Workshop de IA para Executivos e Times',
  description:
    'Programas de capacitação corporativa em IA generativa: workshops para executivos, upskilling de equipes, prompt engineering, treinamento de agentes de IA e programas de aculturamento para liderança.',
  provider: { '@id': `${baseUrl}/#organization` },
  educationalLevel: 'Executive',
  inLanguage: 'pt-BR',
  hasCourseInstance: [
    { '@type': 'CourseInstance', name: 'Workshop de IA para Executivos', courseMode: 'onsite', description: 'Workshop presencial e intensivo para liderança e C-Level sobre adoção estratégica de IA generativa.' },
    { '@type': 'CourseInstance', name: 'Programa de Upskilling em IA', courseMode: 'mixed', description: 'Programa contínuo de capacitação em IA para equipes de marketing, vendas, operações e RH.' },
    { '@type': 'CourseInstance', name: 'Formação em Prompt Engineering', courseMode: 'online', description: 'Treinamento prático em técnicas de prompt engineering para uso profissional de IA generativa.' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O que é a capacitação em IA da TPRC?', acceptedAnswer: { '@type': 'Answer', text: 'São programas de treinamento corporativo em IA generativa que incluem workshops para executivos, upskilling de equipes, prompt engineering e programas de aculturamento. O foco é adoção real, governança e produtividade.' } },
    { '@type': 'Question', name: 'Para quem são os workshops de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Os workshops atendem três públicos: liderança e C-Level (decisão estratégica), equipes operacionais (marketing, RH, operações) e times comerciais B2B (produtividade com IA em vendas).' } },
    { '@type': 'Question', name: 'Quais programas de treinamento em IA estão disponíveis?', acceptedAnswer: { '@type': 'Answer', text: 'Oferecemos: Workshop de IA para Executivos, Upskilling em IA para equipes, Capacitação para times comerciais B2B, Formação em Prompt Engineering, Programa de aculturamento para diretoria e Treinamento de agentes de IA para atendimento.' } },
    { '@type': 'Question', name: 'Quais são os formatos de treinamento disponíveis?', acceptedAnswer: { '@type': 'Answer', text: 'Oferecemos três formatos: Workshop Presencial (1-2 dias, intensivo e hands-on), Programa Online (4-8 semanas com acompanhamento) e Programa Sob Medida (desenhado para as necessidades específicas da sua empresa).' } },
    { '@type': 'Question', name: 'Qual a relação entre a consultoria e a capacitação?', acceptedAnswer: { '@type': 'Answer', text: 'A capacitação complementa a consultoria estratégica (Advisory). Após o diagnóstico de maturidade em IA, o treinamento prepara as equipes para executar o roadmap com autonomia, garantindo adoção real e resultados mensuráveis.' } },
  ],
};

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

export default function FormacaoClient() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-[var(--font-geist-sans)] antialiased overflow-x-hidden">
      <Script
        id="formacao-course-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Script
        id="formacao-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SEO content for crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h1>Capacitação e Treinamento em IA Generativa | TPRC Pimentão Rouge</h1>
        <p>Programas de capacitação corporativa em IA generativa. Workshops práticos para liderança e equipes com foco em adoção, governança e produtividade.</p>
        <h2>Para quem é</h2>
        <h3>Liderança e C-Level</h3>
        <p>Workshops executivos para tomada de decisão estratégica sobre IA.</p>
        <h3>Equipes Operacionais</h3>
        <p>Upskilling em IA para times de marketing, RH, operações e atendimento.</p>
        <h3>Times Comerciais B2B</h3>
        <p>Capacitação em IA para equipes de vendas e prospecção.</p>
        <h2>Programas</h2>
        <ul>
          <li>Workshop de IA para Executivos no Brasil</li>
          <li>Upskilling em IA para equipes de marketing</li>
          <li>Capacitação em IA para times comerciais B2B</li>
          <li>Formação em Prompt Engineering para empresas</li>
          <li>Programa de aculturamento em IA para conselho e diretoria</li>
          <li>Treinamento de agentes de IA para atendimento ao cliente</li>
        </ul>
        <nav aria-label="Navegação">
          <a href="/">Página principal TPRC</a>
          <a href="/advisory">Consultoria Estratégica em IA</a>
          <a href="/musica">Música para empresas com IA</a>
        </nav>
      </div>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-orange-950/10 via-transparent to-transparent" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
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
          <Link href="/?theme=tprc" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <img
              src="/images/pimentao-rouge-logo.png"
              alt="The Pimentão Rouge Company"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-bold tracking-tight hidden sm:block">TPRC</span>
          </Link>

          <a
            href="#contato"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full" />
            <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-full" />
            <span className="relative z-10">Agendar Workshop</span>
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
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Capacitação em IA</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Sua equipe pronta
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                para a era da IA.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Workshops práticos e programas de{' '}
              <span className="text-white font-medium">capacitação corporativa em IA generativa</span>{' '}
              para liderança e equipes. Do diagnóstico à execução com{' '}
              <span className="text-white font-medium">adoção real, governança e resultados mensuráveis</span>.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full" />
                <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full group-hover:bg-transparent transition-colors duration-300" />
                <span className="relative z-10">Agendar Workshop Executivo</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>

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
              className="w-1 h-2 rounded-full bg-orange-400/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Para <span className="text-orange-400">quem é</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Programas desenhados para diferentes perfis e níveis de maturidade em IA.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={scaleIn} className="group relative rounded-3xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-transparent to-amber-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center">
                    <Crown className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Liderança e C-Level</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Visão estratégica sobre IA para{' '}
                      <span className="text-orange-400 font-medium">tomada de decisão</span>,
                      governança, riscos e oportunidades de negócio.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-400" />Visão de negócio e ROI</li>
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-400" />Governança e ética</li>
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-400" />Roadmap de adoção</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="group relative rounded-3xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/50 via-transparent to-yellow-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 flex items-center justify-center">
                    <Users className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Equipes Operacionais</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Upskilling em IA para times de{' '}
                      <span className="text-amber-400 font-medium">marketing, RH, operações</span>{' '}
                      e atendimento com aplicações práticas.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-amber-400" />Ferramentas no dia a dia</li>
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-amber-400" />Automação de processos</li>
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-amber-400" />Produtividade com IA</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="group relative rounded-3xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/50 via-transparent to-orange-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl bg-[#0a0a0a] p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Times Comerciais B2B</h3>
                    <p className="text-gray-400 leading-relaxed">
                      IA aplicada a{' '}
                      <span className="text-yellow-400 font-medium">vendas e prospecção</span>.
                      Automação inteligente para escalar receita com previsibilidade.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-yellow-400" />Prospecção com IA</li>
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-yellow-400" />Personalização em escala</li>
                    <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-yellow-400" />Pipeline inteligente</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROGRAMAS ===== */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Nossos <span className="text-orange-400">Programas</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Treinamentos práticos desenhados para gerar impacto real na sua organização.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Workshop de IA para Executivos</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Imersão intensiva para C-Level e diretoria. Visão estratégica, cases reais, governança e roadmap de adoção de IA.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">1-2 dias</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">Presencial</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">C-Level</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Upskilling em IA para Marketing</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">IA generativa aplicada a criação de conteúdo, campanhas, análise de dados e automação de marketing.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300">4-6 semanas</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300">Online</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300">Marketing</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-yellow-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Capacitação para Times B2B</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">IA para vendas: prospecção inteligente, personalização em escala, automação de pipeline e previsibilidade de receita.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300">4 semanas</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300">Misto</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300">Vendas</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <MessageSquareCode className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Formação em Prompt Engineering</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Técnicas avançadas de prompt para ChatGPT, Claude e ferramentas de IA. Do básico ao avançado, com exercícios práticos.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">2-4 semanas</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">Online</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">Todos</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Aculturamento em IA para Diretoria</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Programa para conselho e diretoria: desmistificar IA, alinhar visão e criar cultura de inovação responsável.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300">1 dia</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300">Presencial</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300">Board</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-yellow-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Treinamento de Agentes de IA</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Capacitação para equipes que operam e supervisionam agentes de IA em atendimento ao cliente, vendas e suporte.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300">4 semanas</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300">Misto</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300">Operação</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FORMATOS ===== */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Formatos de <span className="text-orange-400">Engajamento</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Workshop Presencial</h4>
                    <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">1-2 dias</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Imersão intensiva e hands-on. Ideal para liderança e kick-off de projetos de IA. Exercícios práticos com ferramentas reais.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Programa Online</h4>
                    <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">4-8 semanas</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Módulos semanais com acompanhamento ao vivo. Exercícios entre sessões, feedback personalizado e certificado.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Programa Sob Medida</h4>
                    <span className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded-full">Personalizado</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Desenhado para as necessidades da sua empresa. Conectado ao roadmap estratégico da consultoria para adoção real.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== METODOLOGIA ===== */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-orange-400" />
                <h2 className="text-2xl font-bold">Treinamento conectado à estratégia</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                IA só gera valor quando <span className="text-white font-medium">estratégia, implementação e capacitação caminham juntas</span>.
                Nosso treinamento está conectado ao diagnóstico estratégico da{' '}
                <Link href="/advisory" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
                  Consultoria em Payments &amp; IA
                </Link>
                , garantindo que sua equipe execute o roadmap com autonomia e governança.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/advisory" className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-400">Diagnóstico Estratégico</p>
                    <p className="text-xs text-gray-500">Advisory &amp; Consultoria</p>
                  </div>
                </Link>
                <a href="#contato" className="flex items-center gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-400">Agendar Workshop</p>
                    <p className="text-xs text-gray-500">Capacitação &amp; Treinamento</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="contato" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                capacitar sua equipe?
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Agende um workshop ou solicite um programa sob medida para sua empresa.
              Vamos transformar sua equipe em protagonista da era da IA.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5511976458933&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20workshop%20de%20IA."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
                <div className="absolute inset-[2px] rounded-full bg-[#050505]" />
                <span className="relative z-10">Falar no WhatsApp</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:florent.lambert@pimentaorouge.com?subject=Workshop%20de%20IA%20-%20Solicita%C3%A7%C3%A3o"
                className="inline-flex items-center gap-2 px-6 py-4 text-gray-400 hover:text-white transition-colors"
              >
                <span>florent.lambert@pimentaorouge.com</span>
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8">
              <Link href="/?theme=tprc" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
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
            <Link href="/?theme=tprc" className="flex items-center gap-3">
              <img src="/images/pimentao-rouge-logo.png" alt="The Pimentão Rouge Company" className="h-8 w-auto" />
              <span className="font-semibold hidden sm:block">The Pimentão Rouge Company</span>
              <span className="font-semibold sm:hidden">TPRC</span>
              <span className="text-gray-500 text-sm">&copy; 2026</span>
            </Link>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/?theme=tprc" className="hover:text-white transition-colors">Home</Link>
              <Link href="/musica" className="hover:text-white transition-colors">Música</Link>
              <Link href="/advisory" className="hover:text-white transition-colors">Advisory</Link>
              <a href="mailto:florent.lambert@pimentaorouge.com" className="hover:text-white transition-colors">Contato</a>
            </div>

            <p className="text-gray-500 text-sm">Capacitação em IA que gera resultados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
