export type ThemeId = 'tprc' | 'cabeleireiro' | 'restaurante' | 'imobiliaria' | 'dentista' | 'generico';

export interface Theme {
  id: ThemeId;
  brandName: string;
  tagline: string;
  branding: {
    monogram: string;
    logoAlt: string;
  };
  accentColor: string;
  gradientSecondary: string;
  address: string;
  hours: string;
  phone: string;
  whatsapp: string;
  email: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimaryLabel: string;
  kpis: string[];
  services: string[];
  infos: string[];
  whyText: string;
  botExamples: string[];
  botTitle: string;
  botSubtitle: string;
  botGreeting: string;
  images: {
    hero: { src: string; alt: string };
    gallery: { src: string; alt: string }[];
  };
  /** Section Événements / Réservation de salle (ex: thème restaurante) */
  eventsSection?: {
    title: string;
    subtitle: string;
    items: string[];
    ctaLabel: string;
  };
}

export const themes: Record<ThemeId, Theme> = {
  // TPRC - Homepage Agência (page spéciale, données minimales)
  tprc: {
    id: 'tprc',
    brandName: 'The Pimentão Rouge Company',
    tagline: 'Inteligência Artificial que gera resultados reais.',
    branding: {
      monogram: 'P',
      logoAlt: 'Logo The Pimentão Rouge Company',
    },
    accentColor: '#3B82F6',
    gradientSecondary: '#8B5CF6',
    address: 'São Paulo, SP',
    hours: 'Seg-Sex: 9h às 18h',
    phone: '(11) 99999-9999',
    whatsapp: '(11) 99999-9999',
    email: 'florent.lambert@pimentaorouge.com',
    heroTitle: 'Inteligência Artificial que gera resultados reais.',
    heroSubtitle: 'TPRC: agência boutique de IA. Inteligência conversacional, criatividade musical e precisão financeira para escalar negócios.',
    ctaPrimaryLabel: 'Agendar Diagnóstico',
    kpis: ['IA Conversacional', 'Creative Tech', 'Payments'],
    services: ['Agentes IA', 'Chatbots', 'Automação', 'Música', 'Payments'],
    infos: ['Diagnóstico gratuito', 'Suporte dedicado'],
    whyText: 'Combinamos IA, criatividade e estratégia para transformar negócios.',
    botExamples: ['Como funciona?', 'Quero agendar um diagnóstico'],
    botTitle: 'Assistente Pimentão Rouge',
    botSubtitle: 'Tire suas dúvidas sobre nossos serviços.',
    botGreeting: 'Olá! Sou o assistente da Pimentão Rouge Company. Como posso ajudar?',
    images: {
      hero: { src: '/images/pimentao-rouge-logo.png', alt: 'The Pimentão Rouge Company' },
      gallery: [],
    },
  },
  cabeleireiro: {
    id: 'cabeleireiro',
    brandName: 'Barbaria do Rei',
    tagline: 'Corte, barba e estilo. Atendimento exclusivo.',
    branding: {
      monogram: 'CR',
      logoAlt: 'Logo Barbaria do Rei',
    },
    accentColor: '#B45309',
    gradientSecondary: '#78350F',
    address: 'Rua das Flores, 123 - Centro, São Paulo - SP',
    hours: 'Ter-Sáb: 9h às 19h | Seg e Dom: sob agendamento',
    phone: '(11) 3456-7890',
    whatsapp: '(11) 98765-4321',
    email: 'contato@barbariadorei.com.br',
    heroTitle: 'Barba e cabelo no lugar. Você em destaque.',
    heroSubtitle: 'Corte masculino, barba com navalha e toalha quente, degradê e desenhos. Agende pelo WhatsApp ou pelo assistente virtual — atendimento personalizado.',
    ctaPrimaryLabel: 'Agendar horário',
    kpis: [
      'Agendamento pelo WhatsApp',
      'Corte e barba com precisão',
      'Produtos premium',
      'Atendimento exclusivo'
    ],
    services: [
      'Corte masculino (máquina e tesoura)',
      'Barba com navalha e toalha quente',
      'Degradê e desenhos',
      'Sobrancelha e bigode',
      'Combo corte + barba',
      'Hidratação de barba'
    ],
    infos: [
      'Pix e cartão',
      'Ambiente climatizado',
      'Produtos de qualidade profissional',
      'Horário sob agendamento',
      'Atendimento individual'
    ],
    whyText: 'Na Barbaria do Rei o foco é você: corte e barba feitos com cuidado e técnica. Uso de navalha, toalha quente e produtos que valorizam seu visual. Agende pelo chat ou WhatsApp e garanta seu horário.',
    botExamples: [
      'Quero agendar um corte para esta semana',
      'Quanto custa corte e barba?',
      'Tem horário disponível no sábado?',
      'Fazem degradê e desenho?',
      'Preciso remarcar meu horário',
      'Qual o endereço e horário de funcionamento?'
    ],
    botTitle: 'Assistente Barbaria do Rei',
    botSubtitle: 'Agende seu horário ou tire dúvidas',
    botGreeting: 'Fala! Sou o assistente da Barbaria do Rei. Posso agendar seu corte ou barba, informar preços e horários. Como posso te ajudar?',
    images: {
      hero: {
        src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80',
        alt: 'Barbearia com cadeira de barbeiro e espelho'
      },
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
          alt: 'Barbeiro fazendo barba com navalha'
        },
        {
          src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
          alt: 'Corte masculino na barbearia'
        },
        {
          src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
          alt: 'Ambiente da Barbaria do Rei'
        }
      ]
    }
  },
  restaurante: {
    id: 'restaurante',
    brandName: 'La Bouchon Brasserie',
    tagline: 'Clima aconchegante. Bistrô parisiense em São Paulo.',
    branding: {
      monogram: 'LB',
      logoAlt: 'Logo La Bouchon Brasserie',
    },
    accentColor: '#C9A227',
    gradientSecondary: '#8B6914',
    address: 'Rua dos Pinheiros, 254 - Pinheiros, São Paulo - SP',
    hours: 'Dom-Qui: 12h às 24h | Sex-Sáb: 12h à 1h',
    phone: '(11) 2359-8141',
    whatsapp: '+5511953115884',
    email: 'reservas@labouchon.com.br',
    heroTitle: 'Pratos clássicos, simples e saborosos',
    heroSubtitle: 'Inspirado nos verdadeiros bistrôs parisienses, com jazz na alma. Reserve sua mesa, consulte o cardápio ou peça delivery pelo assistente virtual.',
    ctaPrimaryLabel: 'Reservar mesa',
    kpis: [
      'Reservas pelo chat ou telefone',
      'Cardápios e delivery',
      'Brunch sábados e domingos',
      'Buffet de almoço seg-sex'
    ],
    services: [
      'Almoço e jantar à la carte',
      'Brunch (sáb, dom e feriados, 8h às 11h30)',
      'Buffet de almoço (seg-sex 12h às 15h)',
      'Eventos e encomendas',
      'Delivery e take-away',
      'Cocktails e petit plats no bar'
    ],
    infos: [
      'Múltiplas unidades: Pinheiros, Jardins, Iguatemi, Pátio Higienópolis',
      'Horários por unidade no site',
      'Entre em contato para reservas',
      'Delivery disponível'
    ],
    whyText: 'De clima aconchegante e com inspiração nos bistrôs parisienses, servimos pratos clássicos e saborosos. O jazz é parte da nossa identidade. Use o assistente para reservas, cardápios, horários de funcionamento ou delivery.',
    botExamples: [
      'Quero reservar mesa para 4 pessoas',
      'Gostaria de reservar a sala para um evento',
      'Qual o horário de funcionamento?',
      'Vocês têm brunch? Quando é?',
      'O buffet de almoço é em qual horário?',
      'Fazem delivery em Pinheiros?',
      'Preciso de informações para evento privado'
    ],
    botTitle: 'Assistente La Bouchon',
    botSubtitle: 'Reservas, cardápios e delivery',
    botGreeting: 'Bem-vindo à La Bouchon Brasserie! Posso ajudar com reservas, cardápios, horários de funcionamento, brunch, buffet ou delivery. Como posso ajudar?',
    images: {
      hero: {
        src: '/images/themes/restaurante/hero.webp',
        alt: 'Interior da La Bouchon Brasserie, ambiente de bistrô'
      },
      gallery: [
        {
          src: '/images/themes/restaurante/gallery-01.webp',
          alt: 'Prato clássico do cardápio'
        },
        {
          src: '/images/themes/restaurante/gallery-02.webp',
          alt: 'Ambiente do restaurante durante o serviço'
        },
        {
          src: '/images/themes/restaurante/gallery-03.webp',
          alt: 'Cozinha e preparação dos pratos'
        }
      ]
    },
    eventsSection: {
      title: 'Eventos e reserva de salão',
      subtitle: 'Celebre conosco: aniversários, jantares de negócios, confraternizações e eventos privados. Ambiente acolhedor e cardápio sob medida.',
      items: [
        'Sala privativa para grupos (até 30 pessoas)',
        'Menu degustação e bebidas para eventos',
        'Brunch ou jantar sob encomenda',
        'Reserva de espaço para reuniões e confraternizações'
      ],
      ctaLabel: 'Solicitar reserva de salão'
    }
  },
  imobiliaria: {
    id: 'imobiliaria',
    brandName: 'NovaChave Imóveis',
    tagline: 'Qualidade para toda vida',
    branding: {
      monogram: 'NI',
      logoAlt: 'Logo NovaChave Imóveis',
    },
    accentColor: '#1E3A5F',
    gradientSecondary: '#2E5A8F',
    address: 'Av. São Gabriel, 477 - 17º andar - Itaim Bibi, São Paulo - SP',
    hours: 'Seg-Sex: 9h às 18h | Sáb: sob agendamento',
    phone: '(11) 3165-3165',
    whatsapp: '(11) 95046-5569',
    email: 'contato@novachave.com.br',
    heroTitle: 'Lançamentos, prontos e locação',
    heroSubtitle: 'Empreendimentos de alto padrão em São Paulo. Agende sua visita ao decorado, consulte lançamentos e imóveis prontos para morar. Fale pelo chat, WhatsApp ou telefone.',
    ctaPrimaryLabel: 'Agendar visita',
    kpis: [
      'Visite o decorado',
      'Lançamentos e prontos',
      'Agende sua visita',
      'Atendimento por WhatsApp'
    ],
    services: [
      'Lançamentos (novos empreendimentos)',
      'Prontos para morar',
      'Imóveis entregues',
      'Locação residencial e comercial',
      'Em obras – acompanhamento',
      'Compramos seu terreno'
    ],
    infos: [
      'Financiamento facilitado',
      'Visitas agendadas ao decorado',
      'Área do corretor',
      'Consultores especializados',
      'Itaim Bibi e regiões nobres'
    ],
    whyText: 'A NovaChave Imóveis atua com empreendimentos de qualidade em São Paulo. Agende sua visita, conheça lançamentos e imóveis prontos para morar. Nossa equipe e o assistente virtual estão à disposição por telefone, WhatsApp ou chat.',
    botExamples: [
      'Quero agendar visita ao decorado',
      'Quais lançamentos vocês têm?',
      'Tem imóveis prontos para morar no Jardins?',
      'Como agendar uma visita?',
      'Preciso de informações sobre financiamento',
      'Compram terrenos?',
      'Quero ver apartamentos para locação'
    ],
    botTitle: 'Assistente NovaChave',
    botSubtitle: 'Agende sua visita, lançamentos e locação',
    botGreeting: 'Olá! Sou o assistente da NovaChave Imóveis. Posso ajudar a agendar sua visita ao decorado, informar sobre lançamentos, imóveis prontos para morar ou locação. Como prefere ser atendido: WhatsApp, e-mail ou ligação? Como posso ajudar?',
    images: {
      hero: {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        alt: 'Empreendimento NovaChave Imóveis - qualidade para toda vida'
      },
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
          alt: 'Interior decorado - visite o decorado'
        },
        {
          src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
          alt: 'Cozinha e área de convivência'
        },
        {
          src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
          alt: 'Fachada de empreendimento - prontos para morar'
        }
      ]
    }
  },
  dentista: {
    id: 'dentista',
    brandName: 'Clínica Sorriso Prime',
    tagline: 'Um novo padrão de excelência na odontologia',
    branding: {
      monogram: 'SP',
      logoAlt: 'Logo Clínica Sorriso Prime',
    },
    accentColor: '#0D9488',
    gradientSecondary: '#0F766E',
    address: 'Av. Paulista, 925 - 13º andar - Bela Vista, São Paulo - SP',
    hours: 'Seg a Sex: 8h às 18h',
    phone: '(11) 97632-4570',
    whatsapp: '(11) 97632-4570',
    email: 'contato@sorrisoprime.com.br',
    heroTitle: 'Dentistas especialistas',
    heroSubtitle: 'Ambiente sofisticado e acolhedor, excelência técnica e inovação constante. Oferecemos uma experiência exclusiva: resultados clínicos impecáveis com atendimento verdadeiramente humano. Agende sua consulta.',
    ctaPrimaryLabel: 'Agendar consulta',
    kpis: [
      '+25 anos de experiência',
      'Agendar consulta online',
      'Especialistas de referência',
      'Ambiente acolhedor na Paulista'
    ],
    services: [
      'Odontologia estética (clareamento, facetas, lentes de contato)',
      'Odontologia restauradora e implantes',
      'Odontologia preventiva',
      'Odontologia digital',
      'Tratamento de canal e de gengiva',
      'Dente do siso e cirurgias'
    ],
    infos: [
      'Convênios e parcelamento',
      'Equipamentos e tecnologias de ponta',
      'Avaliação e planejamento personalizado',
      'Antes e depois – acompanhamento',
      'Localização: Av. Paulista'
    ],
    whyText: 'A Clínica Sorriso Prime reúne especialistas de referência, tecnologias de ponta e compromisso com o paciente. Acreditamos que um sorriso expressa confiança e bem-estar. Agende uma consulta, receba uma avaliação e viva uma nova experiência. Entre em contato pelo chat, WhatsApp ou telefone.',
    botExamples: [
      'Quero agendar uma consulta',
      'Quanto custa clareamento dental?',
      'Fazem facetas de porcelana e lentes de contato?',
      'Preciso de avaliação para implante',
      'Vocês aceitam convênio?',
      'Qual horário tem disponível esta semana?',
      'Tratamento de canal e de gengiva'
    ],
    botTitle: 'Assistente Sorriso Prime',
    botSubtitle: 'Agende sua consulta e tire dúvidas',
    botGreeting: 'Olá! Sou o assistente da Clínica Sorriso Prime. Posso agendar sua consulta, informar sobre tratamentos (estética, implantes, canal, clareamento), convênios e valores. Como posso ajudar com seu sorriso hoje?',
    images: {
      hero: {
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
        alt: 'Clínica Sorriso Prime - ambiente sofisticado e acolhedor'
      },
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
          alt: 'Atendimento odontológico com excelência técnica'
        },
        {
          src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
          alt: 'Equipamentos modernos e odontologia digital'
        },
        {
          src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
          alt: 'Recepção e ambiente acolhedor - Av. Paulista'
        }
      ]
    }
  },
  generico: {
    id: 'generico',
    brandName: 'Nexa Soluções',
    tagline: 'Atendimento rápido. Resultado real.',
    branding: {
      monogram: 'NS',
      logoAlt: 'Logo Nexa Soluções',
    },
    accentColor: '#6366F1',
    gradientSecondary: '#8B5CF6',
    address: 'Rua Exemplo, 789 - Centro, São Paulo - SP',
    hours: 'Seg-Sex: 8h às 18h',
    phone: '(11) 3123-4567',
    whatsapp: '+5511973953946',
    email: 'contato@empresamodelo.com.br',
    heroTitle: 'Transforme seu negócio com nossas soluções',
    heroSubtitle: 'Atendimento personalizado e soluções sob medida para sua empresa. Fale com nosso assistente virtual.',
    ctaPrimaryLabel: 'Solicitar orçamento',
    kpis: [
      'Atendimento 24/7',
      'Resposta imediata',
      'Orçamento gratuito',
      'Suporte especializado'
    ],
    services: [
      'Consultoria empresarial',
      'Soluções personalizadas',
      'Suporte técnico',
      'Treinamento e capacitação',
      'Projetos sob demanda'
    ],
    infos: [
      'Atendimento nacional',
      'Parcelamento facilitado',
      'Garantia de qualidade',
      'Equipe especializada',
      'Cases de sucesso'
    ],
    whyText: 'Somos referência no mercado com soluções inovadoras e atendimento diferenciado. Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução. Converse com nosso assistente virtual e descubra como podemos ajudar.',
    botExamples: [
      'Gostaria de solicitar um orçamento',
      'Quais serviços vocês oferecem?',
      'Preciso falar com um especialista',
      'Como funciona o processo de contratação?',
      'Vocês atendem em todo Brasil?',
      'Qual o prazo de entrega?'
    ],
    botTitle: 'Assistente Virtual',
    botSubtitle: 'Tire suas dúvidas e solicite orçamentos',
    botGreeting: 'Olá! Bem-vindo à Nexa Soluções. Posso ajudar com informações sobre nossos serviços, orçamentos ou conectar você com nossa equipe. Como posso te ajudar?',
    images: {
      hero: {
        src: '/images/themes/generico/hero.webp',
        alt: 'Proprietário de pequeno negócio usando smartphone na loja'
      },
      gallery: [
        {
          src: '/images/themes/generico/gallery-01.webp',
          alt: 'Cliente sendo atendido em pequeno comércio'
        },
        {
          src: '/images/themes/generico/gallery-02.webp',
          alt: 'Espaço de trabalho moderno com laptop e smartphone'
        },
        {
          src: '/images/themes/generico/gallery-03.webp',
          alt: 'Terminal de pagamento em uso'
        }
      ]
    }
  }
};

export const themeIds: ThemeId[] = ['tprc', 'cabeleireiro', 'restaurante', 'imobiliaria', 'dentista', 'generico'];

export const themeLabels: Record<ThemeId, string> = {
  tprc: 'TPRC Home',
  cabeleireiro: 'Cabeleireiro',
  restaurante: 'Restaurante',
  imobiliaria: 'Imobiliária',
  dentista: 'Dentista',
  generico: 'Genérico'
};

