'use client';

import { Theme } from '@/lib/themes';

interface LucyLandingProps {
  theme: Theme;
  openBot: () => void;
}

export default function LucyLanding({ theme, openBot }: LucyLandingProps) {
  const L = theme.lucyLanding!;

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-poppins)]">
      {/* ===== HEADER (fond blanc) ===== */}
      <header className="sticky top-0 z-50 bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo LUCY */}
          <a href="/?theme=lucy">
            <img
              src="/lucy/lucy-logo-header.svg"
              alt="LUCY"
              className="h-[77px] w-auto"
            />
          </a>
          {/* Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={L.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white bg-[#7CB342] rounded-full px-6 py-3 hover:bg-[#689F38] transition-colors"
            >
              Fale com Especialistas
            </a>
            <a
              href={L.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#7CB342] border-2 border-[#7CB342] rounded-full px-6 py-3 hover:bg-[#7CB342] hover:text-white transition-colors"
            >
              Fazer login
            </a>
          </div>
          {/* Menu Mobile */}
          <button className="md:hidden text-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative py-20 md:py-32 px-4"
        style={{
          backgroundImage: 'url(/lucy/iStock-1480053259.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-lg">
            <h1
              className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6"
              style={{ color: '#9ACD32' }}
            >
              Marketing que cabe no seu bolso, no seu dia a dia e no seu negócio.
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              A Lucy é a solução que nasceu para ser seu braço – cabeça e ombro – de comunicação e marketing, de um jeito simples, acessível, estratégico e sem enrolação.
            </p>
            <button
              onClick={openBot}
              className="text-base font-semibold text-white bg-[#ED1C24] rounded-full px-8 py-4 hover:bg-[#c91820] transition-colors"
            >
              Chama a Lucy!
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Qual o seu desafio hoje? - Primeira linha (3 cards) ===== */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          {/* Titre */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ color: '#9ACD32' }}
          >
            Qual o seu<br />desafio hoje?
          </h2>

          {/* Grid 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-black">
              <div className="rounded-[2rem] overflow-hidden mb-6">
                <img
                  src="/lucy/iStock-2222205938-rchf9si8frns2baetmd5f77st4ujg4rb86ju7vpcts.jpg"
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                &quot;Não tenho tempo e muita grana para fazer meus posts.&quot;
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Dentro da nossa <strong className="text-white">plataforma</strong>,{' '}
                <strong className="text-white">você mesmo cria</strong> seus posts para Facebook, Instagram e WhatsApp,{' '}
                <strong className="text-white">agenda tudo e até publica direto pela ferramenta!</strong> Dá pra fazer Cardápio Digital e Promocional, Site para divulgar seu negócio e até Anúncios do Google.
              </p>
              <div className="bg-[#9ACD32] text-black font-bold text-base px-4 py-2 rounded-lg inline-block mb-4">
                A partir de <span className="text-[#ED1C24]">R$ 99/mês</span>
              </div>
              <div>
                <a
                  href={L.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-bold text-black bg-[#9ACD32] rounded-full px-6 py-3 hover:bg-[#8BC34A] transition-colors"
                >
                  Comece Agora!
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black">
              <div className="rounded-[2rem] overflow-hidden mb-6">
                <img
                  src="/lucy/iStock-2188524624-rchfbr04occa92g0dyu647fdd172hfj6hvh97mstv4.jpg"
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                &quot;Poxa, eu preciso criar meus posts, mas não sei fazer sozinho.&quot;
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Não sabe mexer na plataforma ou não tempo? <strong className="text-white">Chama a Lucy!</strong> A nossa equipe cria{' '}
                <strong className="text-white">até 10 posts por mês + Cardápio Digital</strong> para seu negócio e entrega prontinho pra você.
              </p>
              <div className="bg-[#9ACD32] text-black font-bold text-base px-4 py-2 rounded-lg inline-block mb-4">
                A partir de <span className="text-[#ED1C24]">R$ 199/mês</span>
              </div>
              <div>
                <button
                  onClick={openBot}
                  className="inline-block text-sm font-bold text-white bg-[#ED1C24] rounded-full px-6 py-3 hover:bg-[#c91820] transition-colors"
                >
                  Chama a Lucy!
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black">
              <div className="rounded-[2rem] overflow-hidden mb-6">
                <img
                  src="/lucy/iStock-2230066494-rchfbo6m3u8fa8k3ufmaeq4zkvkyuc7zhhisrsx0ds.jpg"
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                &quot;Preciso de um Instagram mais atualizado e um site simples.&quot;
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Contrate a partir de <strong className="text-white">16 posts por mês - 8 formatos estáticos de feed + 8 desdobramento para stories</strong> - com direção criativa e de arte e texto de apoio, para publicação nos canais sociais da sua marca{' '}
                <strong className="text-white">+ onepage para seu negócio.</strong>
              </p>
              <div className="bg-[#9ACD32] text-black font-bold text-base px-4 py-2 rounded-lg inline-block mb-4">
                A partir de <span className="text-[#ED1C24]">R$ 1.499/mês</span>
              </div>
              <div>
                <button
                  onClick={openBot}
                  className="inline-block text-sm font-bold text-white bg-[#ED1C24] rounded-full px-6 py-3 hover:bg-[#c91820] transition-colors"
                >
                  Chama a Lucy!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Deuxième ligne (3 cards) ===== */}
      <section className="py-8 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 4 */}
            <div className="bg-black">
              <div className="rounded-[2rem] overflow-hidden mb-6">
                <img
                  src="/lucy/iStock-2168015374-rchfcm0sxviqw76ycu8uwhlkyqy6jfybm50a1riu5s.jpg"
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                &quot;Já tenho redes sociais e site e quero vender mais&quot;.
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Conte com a gente para operações que <strong className="text-white">precisam atrair e converter leads,</strong> com mídia paga e funis de vendas, incluindo tráfego pago, landing page e automação de atendimento.
              </p>
              <div className="bg-[#9ACD32] text-black font-bold text-base px-4 py-2 rounded-lg inline-block mb-4">
                A partir de <span className="text-[#ED1C24]">R$ 3.499/mês</span>
              </div>
              <div>
                <button
                  onClick={openBot}
                  className="inline-block text-sm font-bold text-white bg-[#ED1C24] rounded-full px-6 py-3 hover:bg-[#c91820] transition-colors"
                >
                  Chama a Lucy!
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-black">
              <div className="rounded-[2rem] overflow-hidden mb-6">
                <img
                  src="/lucy/iStock-2188524624-rchfbr04occa92g0dyu647fdd172hfj6hvh97mstv4.jpg"
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                &quot;Quero deixar tudo de marketing com a Lucy.&quot;
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Chama a Lucy para <strong className="text-white">gestão completa de marketing</strong>, digital ou off-line, incluindo redes sociais, comunicação interna, influenciadores, investimento em mídia e funis completos para campanhas, com{' '}
                <strong className="text-white">apoio estratégico dedicado.</strong>
              </p>
              <div className="bg-[#9ACD32] text-black font-bold text-base px-4 py-2 rounded-lg inline-block mb-4">
                A partir de <span className="text-[#ED1C24]">1 briefing</span>
              </div>
              <div>
                <button
                  onClick={openBot}
                  className="inline-block text-sm font-bold text-white bg-[#ED1C24] rounded-full px-6 py-3 hover:bg-[#c91820] transition-colors"
                >
                  Chama a Lucy!
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-black">
              <div className="rounded-[2rem] overflow-hidden mb-6">
                <img
                  src="/lucy/iStock-2230066494-rchfbo6m3u8fa8k3ufmaeq4zkvkyuc7zhhisrsx0ds.jpg"
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                &quot;Tenho um outro desafio. Como faço?&quot;
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Tem um desafio aí e quer conversar com a gente? <strong className="text-white">Chama a Lucy!</strong>
              </p>
              <div className="bg-[#9ACD32] text-black font-bold text-base px-4 py-2 rounded-lg inline-block mb-4">
                A partir de <span className="text-[#ED1C24]">1 café</span>
              </div>
              <div>
                <button
                  onClick={openBot}
                  className="inline-block text-sm font-bold text-white bg-[#ED1C24] rounded-full px-6 py-3 hover:bg-[#c91820] transition-colors"
                >
                  Chama a Lucy!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: /MAIS VISIBILIDADE (fond rouge) ===== */}
      <section className="py-16 px-4 bg-[#ED1C24]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                /MAIS VISIBILIDADE.<br />
                /MAIS CLIENTES.<br />
                /MAIS REPUTAÇÃO.<br />
                /MAIS FATURAMENTO<br />
                PARA O SEU NEGÓCIO.
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                <strong>Crie você mesmo</strong> seus materiais de marketing <strong>em minutos</strong>, quantas vezes quiser, usando ferramenta com inteligência artificial, a partir de <strong>R$ 99 por mês!</strong>
              </p>
              <a
                href={L.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base font-bold text-black bg-[#9ACD32] rounded-full px-8 py-4 hover:bg-[#8BC34A] transition-colors"
              >
                Comece Agora!
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="/lucy/Screenshot-2025-09-07-at-2.30.20-PM.avif"
                alt="Plataforma Lucy"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Nossa Missão É Transformadora ===== */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte (à gauche sur desktop) */}
            <div>
              <h2
                className="text-2xl md:text-4xl font-bold mb-6"
                style={{ color: '#9ACD32' }}
              >
                Nossa Missão<br />É Transformadora
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Com um <strong className="text-white">modelo de negócios inclusivo</strong>, democrático e com propósito, a Lucy vem para oferecer{' '}
                <strong className="text-white">estratégias de qualidade e soluções criativas</strong> por meio de uma plataforma que coloca a{' '}
                <strong className="text-white">tecnologia e a Inteligência Artificial</strong> a serviço dos pequenos e médios negócios.
              </p>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                Queremos tornar o <strong className="text-white">marketing acessível</strong> para que pessoas e negócios prosperem e conquistem sua{' '}
                <strong className="text-white">liberdade financeira</strong>.
              </p>
              <button
                onClick={openBot}
                className="inline-block text-base font-semibold text-white bg-[#ED1C24] rounded-full px-8 py-4 hover:bg-[#c91820] transition-colors"
              >
                Chama a Lucy!
              </button>
            </div>

            {/* Image mosaïque (à droite sur desktop) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/lucy/imagem-lucy-mosaico.avif"
                alt="Lucy Mosaico"
                className="w-full max-w-[400px] md:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Tem um desafio aí? (4 pilares) ===== */}
      <section className="py-16 px-4 bg-black" id="next">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: '#9ACD32' }}
          >
            Tem um desafio aí?
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Conte com um time de especialistas para alavancar seu negócio <strong className="text-white">– P, M, G -</strong> com criação, gestão e estratégia de conteúdo, redes sociais e mídia.
          </p>

          {/* Grid 4 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Criação */}
            <div className="bg-black">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/lucy/iStock-2201443946-1024x683.avif"
                  alt="Criação"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Criação</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lucy é sua parceira criativa: transforma ideias em posts, campanhas e conteúdos inteligentes, com agilidade e estratégia — sem complicação.
              </p>
            </div>

            {/* Planejamento */}
            <div className="bg-black">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/lucy/iStock-2199563535-2048x1365.avif"
                  alt="Planejamento"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Planejamento</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lucy é seu braço de planejamento: organiza calendários, encontra oportunidades e conecta estratégias para o seu marketing render mais.
              </p>
            </div>

            {/* Performance */}
            <div className="bg-black">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/lucy/iStock-2201908243.avif"
                  alt="Performance"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lucy é sua aliada em performance: acompanha resultados, ajusta campanhas e transforma dados em crescimento real.
              </p>
            </div>

            {/* Comunicação Integrada */}
            <div className="bg-black">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/lucy/iStock-2227645804-2048x1365.avif"
                  alt="Comunicação Integrada"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Comunicação Integrada</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lucy é sua parceira de comunicação integrada: conecta canais, mensagens e estratégias para sua marca falar com consistência e impacto.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={openBot}
              className="inline-block text-base font-semibold text-white bg-[#ED1C24] rounded-full px-8 py-4 hover:bg-[#c91820] transition-colors"
            >
              Chama a Lucy!
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo + Tagline */}
            <div>
              <img
                src="/lucy/lucy-logo-header.svg"
                alt="LUCY"
                className="h-[77px] w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Marketing que cabe no seu bolso, no seu dia a dia e no seu negócio.
              </p>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="text-white font-semibold mb-4">Institucional</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/?theme=lucy" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href={L.policyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href={L.termsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-white font-semibold mb-4">Siga a Lucy!</h4>
              <div className="flex gap-4">
                {L.social.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ED1C24] hover:text-white transition-colors"
                    title={s.name}
                  >
                    {s.name === 'WhatsApp' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    )}
                    {s.name === 'Facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    )}
                    {s.name === 'Instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    )}
                    {s.name === 'LinkedIn' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              Lucy ©{new Date().getFullYear()} – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
