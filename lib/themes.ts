import { logos } from './logos';

export type ThemeId = 'cabeleireiro' | 'restaurante' | 'imobiliaria' | 'dentista' | 'generico';

export interface Theme {
  id: ThemeId;
  brandName: string;
  tagline: string;
  branding: {
    monogram: string;
    logoMarkSvg: string;
    logoMonoSvg: string;
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
}

export const themes: Record<ThemeId, Theme> = {
  cabeleireiro: {
    id: 'cabeleireiro',
    brandName: 'Studio BelaForma',
    tagline: 'Cortes, cor e cuidado premium',
    branding: {
      monogram: 'SB',
      logoMarkSvg: logos.cabeleireiro.mark,
      logoMonoSvg: logos.cabeleireiro.mono,
      logoAlt: 'Logo Studio BelaForma',
    },
    accentColor: '#EC4899',
    gradientSecondary: '#8B5CF6',
    address: 'Rua das Flores, 123 - Centro, São Paulo - SP',
    hours: 'Seg-Sáb: 9h às 20h | Dom: 10h às 18h',
    phone: '(11) 3456-7890',
    whatsapp: '(11) 98765-4321',
    email: 'contato@belezapura.com.br',
    heroTitle: 'Transforme seu visual com especialistas',
    heroSubtitle: 'Corte, coloração, tratamentos capilares e muito mais. Agende seu horário de forma rápida e fácil com nosso assistente virtual.',
    ctaPrimaryLabel: 'Agendar horário',
    kpis: [
      'Atendimento 24/7',
      'Agendamento instantâneo',
      'Confirmação automática',
      'Profissionais certificados'
    ],
    services: [
      'Corte feminino e masculino',
      'Escova e finalização',
      'Coloração e mechas',
      'Hidratação e tratamentos',
      'Penteados para eventos'
    ],
    infos: [
      'Aceitamos cartão e Pix',
      'Produtos profissionais',
      'Ambiente climatizado',
      'Café e Wi-Fi grátis',
      'Estacionamento conveniado'
    ],
    whyText: 'Com mais de 15 anos de experiência, nosso studio oferece serviços de alta qualidade com profissionais especializados. Utilizamos apenas produtos premium e garantimos sua satisfação. Nosso assistente virtual está disponível 24h para agendamentos e dúvidas.',
    botExamples: [
      'Quero agendar um corte para amanhã',
      'Quanto custa uma coloração completa?',
      'Vocês trabalham com que marcas?',
      'Qual horário tem disponível na sexta?',
      'Preciso remarcar meu horário',
      'Fazem escova progressiva?'
    ],
    botTitle: 'Assistente Virtual',
    botSubtitle: 'Agende seu horário ou tire suas dúvidas',
    botGreeting: 'Olá! Sou o assistente do Studio BelaForma. Posso ajudar a agendar seu horário, informar preços ou esclarecer qualquer dúvida. Como posso te ajudar hoje?',
    images: {
      hero: {
        src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
        alt: 'Interior moderno de salão de beleza com cadeiras e espelhos'
      },
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
          alt: 'Profissional realizando corte de cabelo'
        },
        {
          src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
          alt: 'Produtos profissionais de cabeleireiro'
        },
        {
          src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80',
          alt: 'Ambiente aconchegante do salão'
        }
      ]
    }
  },
  restaurante: {
    id: 'restaurante',
    brandName: 'Bistrô Vila Nova',
    tagline: 'Sabor, clima e boa mesa',
    branding: {
      monogram: 'BV',
      logoMarkSvg: logos.restaurante.mark,
      logoMonoSvg: logos.restaurante.mono,
      logoAlt: 'Logo Bistrô Vila Nova',
    },
    accentColor: '#F59E0B',
    gradientSecondary: '#EF4444',
    address: 'Av. Paulista, 1500 - Bela Vista, São Paulo - SP',
    hours: 'Seg-Dom: 11h30 às 23h | Sex-Sáb: até 01h',
    phone: '(11) 3234-5678',
    whatsapp: '+5511973953946',
    email: 'reservas@saborarte.com.br',
    heroTitle: 'Uma experiência gastronômica inesquecível',
    heroSubtitle: 'Pratos autorais, ambiente aconchegante e atendimento impecável. Reserve sua mesa com nosso assistente virtual.',
    ctaPrimaryLabel: 'Reservar mesa',
    kpis: [
      'Reservas instantâneas',
      'Cardápio completo no chat',
      'Delivery disponível',
      'Chef premiado'
    ],
    services: [
      'Almoço executivo',
      'Jantar à la carte',
      'Menu degustação',
      'Eventos e celebrações',
      'Delivery e take-away'
    ],
    infos: [
      'Opções vegetarianas e veganas',
      'Cardápio sem glúten',
      'Sommelier disponível',
      'Área kids aos domingos',
      'Estacionamento com manobrista'
    ],
    whyText: 'Premiado pela crítica especializada, nosso bistrô combina técnica, ingredientes frescos e criatividade. Nossa equipe está pronta para proporcionar uma experiência única. Use nosso assistente para reservas, consultar o menu ou pedir delivery.',
    botExamples: [
      'Quero reservar mesa para 4 pessoas hoje à noite',
      'Qual o prato do dia?',
      'Vocês têm opções veganas?',
      'Quanto custa o menu degustação?',
      'Fazem delivery na região da Vila Madalena?',
      'Preciso de informações sobre alergênicos'
    ],
    botTitle: 'Assistente de Reservas',
    botSubtitle: 'Reservas, cardápio e delivery',
    botGreeting: 'Bem-vindo ao Bistrô Vila Nova! Posso ajudar com reservas, informações sobre nosso cardápio, opções de delivery ou qualquer dúvida. O que você gostaria de saber?',
    images: {
      hero: {
        src: '/images/themes/restaurante/hero.webp',
        alt: 'Interior acolhedor de restaurante com mesas preparadas'
      },
      gallery: [
        {
          src: '/images/themes/restaurante/gallery-01.webp',
          alt: 'Hambúrguer gourmet servido com batatas'
        },
        {
          src: '/images/themes/restaurante/gallery-02.webp',
          alt: 'Ambiente interno do restaurante durante serviço'
        },
        {
          src: '/images/themes/restaurante/gallery-03.webp',
          alt: 'Chef preparando pratos na cozinha'
        }
      ]
    }
  },
  imobiliaria: {
    id: 'imobiliaria',
    brandName: 'NovaChave Imóveis',
    tagline: 'Encontre seu lugar ideal',
    branding: {
      monogram: 'NI',
      logoMarkSvg: logos.imobiliaria.mark,
      logoMonoSvg: logos.imobiliaria.mono,
      logoAlt: 'Logo NovaChave Imóveis',
    },
    accentColor: '#3B82F6',
    gradientSecondary: '#06B6D4',
    address: 'Rua dos Empresários, 456 - Itaim Bibi, São Paulo - SP',
    hours: 'Seg-Sex: 9h às 19h | Sáb: 9h às 14h',
    phone: '(11) 3345-6789',
    whatsapp: '(11) 98888-7777',
    email: 'atendimento@imoveisprime.com.br',
    heroTitle: 'Encontre o imóvel perfeito para você',
    heroSubtitle: 'Compra, venda ou aluguel de imóveis com segurança e agilidade. Nosso assistente virtual está pronto para te ajudar.',
    ctaPrimaryLabel: 'Buscar imóveis',
    kpis: [
      'Atendimento 24/7',
      'Visitas agendadas online',
      'Simulação de financiamento',
      '+1.500 imóveis disponíveis'
    ],
    services: [
      'Compra e venda de imóveis',
      'Locação residencial e comercial',
      'Consultoria imobiliária',
      'Avaliação de imóveis',
      'Documentação completa'
    ],
    infos: [
      'Financiamento facilitado',
      'Visitas virtuais disponíveis',
      'Assessoria jurídica',
      'Parcerias com bancos',
      'Corretores especializados'
    ],
    whyText: 'Com mais de 20 anos no mercado, somos referência em negócios imobiliários. Nossa equipe de corretores qualificados e nosso assistente virtual estão prontos para encontrar o imóvel ideal para você, seja para comprar, vender ou alugar.',
    botExamples: [
      'Procuro apartamento de 2 quartos na Zona Sul',
      'Quanto custa alugar um imóvel comercial?',
      'Quero agendar visita para um apartamento',
      'Como funciona o financiamento?',
      'Preciso vender meu apartamento',
      'Quais documentos preciso para alugar?'
    ],
    botTitle: 'Assistente Imobiliário',
    botSubtitle: 'Encontre seu imóvel ideal',
    botGreeting: 'Olá! Sou o assistente da NovaChave Imóveis. Posso ajudar você a encontrar imóveis para compra ou locação, agendar visitas, simular financiamento e muito mais. O que você procura?',
    images: {
      hero: {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        alt: 'Casa moderna com arquitetura contemporânea'
      },
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
          alt: 'Interior moderno de sala de estar'
        },
        {
          src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
          alt: 'Cozinha moderna e equipada'
        },
        {
          src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
          alt: 'Vista externa de propriedade premium'
        }
      ]
    }
  },
  dentista: {
    id: 'dentista',
    brandName: 'Clínica Sorriso Prime',
    tagline: 'Odontologia moderna e acolhedora',
    branding: {
      monogram: 'SP',
      logoMarkSvg: logos.dentista.mark,
      logoMonoSvg: logos.dentista.mono,
      logoAlt: 'Logo Clínica Sorriso Prime',
    },
    accentColor: '#10B981',
    gradientSecondary: '#06B6D4',
    address: 'Av. Brigadeiro Faria Lima, 2000 - Pinheiros, São Paulo - SP',
    hours: 'Seg-Sex: 8h às 19h | Sáb: 8h às 13h',
    phone: '(11) 3567-8901',
    whatsapp: '(11) 97777-6666',
    email: 'contato@odontovida.com.br',
    heroTitle: 'Cuidando do seu sorriso com excelência',
    heroSubtitle: 'Tratamentos odontológicos completos com tecnologia de ponta e profissionais especializados. Agende sua consulta agora.',
    ctaPrimaryLabel: 'Marcar consulta',
    kpis: [
      'Urgências atendidas',
      'Agendamento online',
      'Convênios aceitos',
      'Dentistas especializados'
    ],
    services: [
      'Limpeza e prevenção',
      'Clareamento dental',
      'Implantes e próteses',
      'Ortodontia e aparelhos',
      'Tratamento de canal'
    ],
    infos: [
      'Convênios médicos e odontológicos',
      'Parcelamento sem juros',
      'Equipamentos modernos',
      'Sala de raio-X digital',
      'Atendimento infantil especializado'
    ],
    whyText: 'Há mais de 25 anos cuidando da saúde bucal de famílias inteiras. Nossa clínica conta com dentistas especializados em todas as áreas e equipamentos de última geração. Agende sua avaliação através do nosso assistente virtual disponível 24h.',
    botExamples: [
      'Preciso agendar uma consulta de urgência',
      'Quanto custa um clareamento dental?',
      'Vocês aceitam convênio Unimed?',
      'Qual dentista faz implante?',
      'Quero fazer uma avaliação ortodôntica',
      'Posso parcelar o tratamento?'
    ],
    botTitle: 'Assistente Sorriso Prime',
    botSubtitle: 'Agendamentos e informações',
    botGreeting: 'Olá! Sou o assistente da Clínica Sorriso Prime. Posso agendar consultas, informar sobre tratamentos, convênios e valores. Como posso ajudar com seu sorriso hoje?',
    images: {
      hero: {
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
        alt: 'Consultório odontológico moderno e equipado'
      },
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
          alt: 'Dentista realizando consulta'
        },
        {
          src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
          alt: 'Equipamentos odontológicos modernos'
        },
        {
          src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
          alt: 'Recepção da clínica odontológica'
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
      logoMarkSvg: logos.generico.mark,
      logoMonoSvg: logos.generico.mono,
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

export const themeIds: ThemeId[] = ['cabeleireiro', 'restaurante', 'imobiliaria', 'dentista', 'generico'];

export const themeLabels: Record<ThemeId, string> = {
  cabeleireiro: 'Cabeleireiro',
  restaurante: 'Restaurante',
  imobiliaria: 'Imobiliária',
  dentista: 'Dentista',
  generico: 'Genérico'
};
