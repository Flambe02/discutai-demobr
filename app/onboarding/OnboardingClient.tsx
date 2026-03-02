'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, FileText, Upload, Mic, Square, Download,
  RotateCcw, CheckCircle, ExternalLink, ChevronRight, Clock,
  FolderOpen, Sparkles,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type RecorderState = 'idle' | 'recording' | 'stopped';

const WETRANSFER_URL = 'https://wetransfer.com/';
const CONTACT_EMAIL = 'florent.lambert@pimentaorouge.com';

function formatDuration(s: number) {
  const m = Math.floor(s / 60);
  return `${m}:${(s % 60).toString().padStart(2, '0')}`;
}

export default function OnboardingClient() {
  const [recorderState, setRecorderState] = useState<RecorderState>('idle');
  const [audioUrl, setAudioUrl]           = useState<string | null>(null);
  const [duration, setDuration]           = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef        = useRef<Blob[]>([]);
  const timerRef         = useRef<ReturnType<typeof setInterval> | null>(null);

  const startRecording = async () => {
    try {
      const stream   = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };

      recorder.start();
      setRecorderState('recording');
      setDuration(0);
      timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
    } catch {
      alert('Não foi possível acessar o microfone. Verifique as permissões do navegador.');
    }
  };

  const stopRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    mediaRecorderRef.current?.stop();
    setRecorderState('stopped');
  };

  const resetRecording = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setRecorderState('idle');
    setDuration(0);
  };

  const downloadAudio = () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `briefing-discutai-${Date.now()}.webm`;
    a.click();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased overflow-x-hidden">

      {/* Ambient gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent" />
      </div>

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/?theme=tprc" className="flex items-center gap-3 group">
            <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            <img src="/images/pimentao-rouge-logo.png" alt="TPRC" className="h-8 w-auto" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors hidden sm:block">
              The Pimentão Rouge Company
            </span>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs text-blue-300 font-medium">Onboarding</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-24 relative z-10">

        {/* ===== HERO ===== */}
        <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>DiscutAI — Funcionário Virtual</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Lance seu Assistente
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                Virtual em 3 etapas
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Nosso processo de onboarding captura tudo o que seu assistente precisa saber sobre sua empresa —
              de forma rápida, completa e sem complicações técnicas.
            </motion.p>
          </motion.div>
        </section>

        {/* ===== OVERVIEW CARDS ===== */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              {
                n: '01', Icon: FileText, grad: 'from-blue-500 to-blue-600',
                accent: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10',
                title: 'Formulário', tag: '~15 min',
                desc: 'Perfil da empresa, objetivos, tom de voz e fluxos de conversa.',
              },
              {
                n: '02', Icon: FolderOpen, grad: 'from-purple-500 to-purple-600',
                accent: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10',
                title: 'Documentos', tag: 'Via WeTransfer ou e-mail',
                desc: 'FAQ, catálogo, scripts, políticas e qualquer conteúdo de referência.',
              },
              {
                n: '03', Icon: Mic, grad: 'from-rose-500 to-rose-600',
                accent: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10',
                title: 'Áudio', tag: 'Opcional · recomendado',
                desc: 'Grave sua visão em voz própria — nuances que o texto não captura.',
              },
            ].map(({ n, Icon, grad, accent, border, bg, title, tag, desc }) => (
              <motion.div key={n} variants={fadeInUp} className={`p-6 rounded-2xl border ${border} ${bg}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${grad}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-3xl font-black ${accent} opacity-25`}>{n}</span>
                </div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{desc}</p>
                <span className={`text-xs ${accent} font-medium`}>{tag}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ===== STEP 1: FORMULÁRIO ===== */}
        <section className="max-w-4xl mx-auto px-6 mb-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">1</div>
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-widest mb-0.5">Etapa 1</p>
                <h2 className="text-2xl font-bold">Formulário de Onboarding</h2>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  Este formulário guia o processo de criação do seu assistente virtual. Preencha com o máximo de detalhes — quanto mais contexto, mais preciso e eficaz será o resultado.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Informações da empresa e setor',
                    'Público-alvo e principais casos de uso',
                    'Tom de voz e personalidade do assistente',
                    'Fluxos de conversa e FAQs prioritárias',
                    'Integrações e canais desejados',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Tempo estimado: 15–20 minutos</span>
                </div>
                <a
                  href="/form/DiscutAI_Onboarding_Wizard.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors group"
                >
                  <FileText className="w-5 h-5" />
                  Abrir o Formulário
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-xs text-gray-500 text-center">
                  Abre em nova aba. Você pode salvar e continuar mais tarde.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== STEP 2: DOCUMENTOS ===== */}
        <section className="max-w-4xl mx-auto px-6 mb-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">2</div>
              <div>
                <p className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-0.5">Etapa 2</p>
                <h2 className="text-2xl font-bold">Envio de Documentos</h2>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  Compartilhe os documentos que vão alimentar a base de conhecimento do seu assistente.
                  Quanto mais material de referência, mais preciso e completo ele será.
                </p>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-3">Exemplos de documentos úteis :</p>
                  <div className="space-y-2">
                    {[
                      { label: 'FAQ',       desc: 'Perguntas e respostas frequentes' },
                      { label: 'Catálogo',  desc: 'Produtos, serviços e preços' },
                      { label: 'Scripts',   desc: 'Roteiros de atendimento' },
                      { label: 'Políticas', desc: 'Trocas, devoluções, garantias' },
                      { label: 'Outros',    desc: 'Qualquer conteúdo relevante' },
                    ].map(({ label, desc }) => (
                      <div key={label} className="flex items-center gap-3 text-sm">
                        <ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="text-white font-medium w-16 shrink-0">{label}</span>
                        <span className="text-gray-500">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 space-y-4">
                <p className="text-sm text-gray-400">Formatos aceitos: PDF, DOCX, TXT, XLSX, CSV, imagens</p>
                <a
                  href={WETRANSFER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors group"
                >
                  <Upload className="w-5 h-5" />
                  Enviar via WeTransfer
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="border-t border-white/5 pt-3 space-y-2">
                  <p className="text-xs text-gray-500 text-center">Ou por e-mail:</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Documentos%20Onboarding%20DiscutAI`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== STEP 3: ÁUDIO ===== */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-sm shrink-0">3</div>
              <div>
                <p className="text-xs text-rose-400 font-semibold uppercase tracking-widest mb-0.5">Etapa 3 · Opcional</p>
                <h2 className="text-2xl font-bold">Briefing em Áudio</h2>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  A voz transmite nuances que o texto nem sempre captura. Grave uma mensagem
                  para explicar, com suas próprias palavras, como você imagina o seu assistente virtual.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Tom e personalidade ideal do assistente',
                    'Situações que ele deve saber gerenciar',
                    'O que ele nunca deve dizer ou fazer',
                    'Detalhes que o formulário não cobriu',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Audio Recorder ── */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">

                {recorderState === 'idle' && (
                  <div className="text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto">
                      <Mic className="w-7 h-7 text-rose-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-medium">Pronto para gravar seu briefing?</p>
                      <p className="text-xs text-gray-600 mt-1">O microfone será solicitado ao clicar</p>
                    </div>
                    <button
                      onClick={startRecording}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors"
                    >
                      <Mic className="w-5 h-5" />
                      Iniciar Gravação
                    </button>
                  </div>
                )}

                {recorderState === 'recording' && (
                  <div className="text-center space-y-5">
                    <div className="relative w-16 h-16 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-rose-500/20 animate-ping" />
                      <div className="relative w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-rose-500 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <p className="text-rose-400 font-semibold text-sm">Gravando…</p>
                      <p className="text-3xl font-mono text-white mt-1">{formatDuration(duration)}</p>
                    </div>
                    <button
                      onClick={stopRecording}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition-colors"
                    >
                      <Square className="w-4 h-4 fill-current" />
                      Parar Gravação
                    </button>
                  </div>
                )}

                {recorderState === 'stopped' && audioUrl && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Gravação concluída · {formatDuration(duration)}</span>
                    </div>
                    <audio controls src={audioUrl} className="w-full rounded-lg" />
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={downloadAudio}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Baixar
                      </button>
                      <button
                        onClick={resetRecording}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:border-white/25 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Regravar
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Baixe e envie para{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-rose-400 hover:underline">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-3">Dúvidas? Fale com a gente.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Nossa equipe está disponível para guiar você em cada etapa do processo.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Onboarding%20DiscutAI`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors"
            >
              Falar com TPRC
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/5 py-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>DiscutAI Onboarding © 2026 — TPRC</p>
          <Link href="/?theme=tprc" className="flex items-center gap-2 hover:text-white transition-colors">
            <img src="/images/pimentao-rouge-logo.png" alt="TPRC" className="h-5 w-auto" />
            <span>The Pimentão Rouge Company</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
