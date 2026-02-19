# Audit SEO + GEO complet — pimentaorouge.com

Date de l'audit: 13 février 2026
Dernière mise à jour: 13 février 2026
Site audité: https://www.pimentaorouge.com/
Objectif business: apparaître en tête sur Google (pt-BR) pour des requêtes type `agência boutique de IA`, `música para sua empresa`, `digital employee` et être bien cité par ChatGPT/Claude/Gemini/Perplexity.

---

## 0) Statut d'implémentation (13/02/2026)

### Phase 1 — Fondations techniques (COMPLÉTÉ)
- [x] `robots.txt` — `app/robots.ts` avec disallow `/api/` et `/_next/`
- [x] `sitemap.xml` — `app/sitemap.ts` avec 9 URLs (4 pages + 5 demos)
- [x] `favicon.ico` — `app/favicon.ico`
- [x] `manifest.json` — `app/manifest.ts`
- [x] Metadata uniques par page (`/`, `/musica`, `/advisory`, `/formacao`)
- [x] Canonicals sur chaque page
- [x] Open Graph + Twitter Cards sur chaque page
- [x] `hreflang` pt-BR sur les 4 pages
- [x] Keywords enrichis (19 mots-clés couvrant les 4 piliers)

### JSON-LD (COMPLÉTÉ)
- [x] `Organization` enrichi (layout.tsx) — `@id`, logo ImageObject, alternateName, foundingDate, areaServed, knowsLanguage, sameAs (YouTube + LinkedIn)
- [x] `WebSite` enrichi (layout.tsx) — `@id`, publisher ref
- [x] `ProfessionalService` complet (page.tsx) — `hasOfferCatalog` avec 4 Offers (Service + Course)
- [x] `FAQPage` sur `/` (5 questions)
- [x] `Service` + `FAQPage` sur `/musica` (4 questions)
- [x] `Service` + `FAQPage` sur `/advisory` (5 questions)
- [x] `Course` + `FAQPage` sur `/formacao` (5 questions)

### Page Formação (COMPLÉTÉ)
- [x] Page `/formacao` créée avec Server Component SEO (metadata, canonical, hreflang, OG, Twitter)
- [x] Client Component UI complet (hero, para quem é, 6 programas, formatos, metodologia, CTA, footer)
- [x] Navigation: lien Formação dans header desktop, mobile, footer et bento grid Soluções
- [x] Maillage interne: liens `/formacao` dans sr-only de `/`, `/advisory`, `/musica`
- [x] Sitemap mis à jour avec `/formacao` (priority 0.9)

### SSR / Performance (COMPLÉTÉ)
- [x] Shell SSR visible sur `/` (nav + hero above-the-fold) pour FCP/LCP
- [x] Contenu crawlable sr-only sur `/` (H1, H2, H3, services, liens internes)
- [x] Contenu crawlable sr-only sur `/musica`
- [x] Contenu crawlable sr-only sur `/advisory`
- [x] Images logo converties en `next/image` avec `priority` (TPRCLanding)

### Reste à faire (Phase 2-3)
- [ ] Créer les 7 money pages (silos sémantiques)
- [ ] Créer blog cluster (12 articles)
- [ ] Case studies (3-5)
- [ ] Page Méthodologie + About
- [ ] Page `/why-pimentaorouge`
- [ ] Backlinks et citations externes

---

## 1) Verdict court (important)
Aujourd’hui, la probabilité d’apparaître en **1ères positions** sur ces requêtes est **faible**.

Raisons principales:
- Le site n’a pas les fondamentaux d’indexation complets (`/robots.txt` et `/sitemap.xml` en 404).
- La home (`/`) est principalement rendue côté client, avec un fallback visible pour crawler (`BAILOUT_TO_CLIENT_SIDE_RENDERING`), ce qui affaiblit l’extraction du contenu principal.
- Métadonnées globales identiques sur plusieurs pages stratégiques (`/`, `/musica`, `/advisory`, `/?theme=*`), donc faible ciblage sémantique par intention.
- Peu de signaux d’autorité/E-E-A-T publics (cas clients vérifiables, profils d’experts, presse, citations externes, pages trust).
- Faible préparation GEO (pas de JSON-LD Organization/Service/FAQ, pas de pages de preuves et réponses structurées orientées LLM).

## 2) Ce que j’ai audité
- Revue du code local: `app/layout.tsx`, `app/page.tsx`, `components/TPRCLanding.tsx`, `app/musica/page.tsx`, `app/advisory/page.tsx`, `lib/themes.ts`.
- Vérification live HTTP/HTML de:
  - `https://www.pimentaorouge.com/`
  - `https://www.pimentaorouge.com/musica`
  - `https://www.pimentaorouge.com/advisory`
  - `https://www.pimentaorouge.com/?theme=generico`
- Vérification des assets SEO clés: `robots.txt`, `sitemap.xml`, `favicon.ico`, `manifest.json`.
- Test Lighthouse local (headless) sur la home.

## 3) Résultats techniques (SEO technique)

### 3.1 Indexation et crawl
Constat:
- `/robots.txt` -> 404
- `/sitemap.xml` -> 404
- `/favicon.ico` -> 404
- `/manifest.json` -> 404

Impact:
- Crawl budget moins bien orienté.
- Découverte des URLs plus faible.
- Moins de signaux de qualité technique.

### 3.2 Rendu et HTML indexable
Constat:
- La home affiche un signal de bailout CSR (`BAILOUT_TO_CLIENT_SIDE_RENDERING`) dans le HTML.
- Sur `/`, détection de `h1/h2` dans le HTML serveur: 0 / 0.
- Sur `/musica` et `/advisory`, le HTML serveur contient des `h1/h2`.

Impact:
- La page la plus stratégique (`/`) est moins “lisible” pour moteurs/parseurs qui ne rendent pas bien JS.
- Risque de perte de pertinence sur la requête marque + services.

### 3.3 Métadonnées
Constat:
- `title` et `description` identiques sur `/`, `/musica`, `/advisory`, `/?theme=generico`.
- Pas de canonicals.
- Pas de balises Open Graph / Twitter.
- Pas de `hreflang`.

Impact:
- Cannibalisation sémantique et faible spécialisation par page.
- Partage social et preview faible.
- Gestion internationale/langue faible.

### 3.4 Données structurées
Constat:
- Aucun JSON-LD détecté (Organization, Service, FAQ, WebSite, etc.).

Impact:
- Moins de compréhension entité/offres par Google et LLM.
- Moins d’éligibilité à enrichissements (rich results, meilleure confiance machine).

### 3.5 Performance (Lighthouse home)
Mesure obtenue:
- Performance: 71
- SEO: 100
- Best Practices: 96
- Accessibility: 88
- FCP: 0.8s
- LCP: 12.5s (très élevé)
- TBT: 200ms
- CLS: 0
- Opportunité principale: JS inutilisé (~103 KiB estimés)

Lecture:
- Le score SEO Lighthouse est bon mais trompeur sur l’objectif business.
- Le LCP est trop haut pour compétitivité SEO sur mobile.

## 4) Audit sémantique vs requêtes cibles

### 4.1 Requête: “Boutique IA Agency” (pt-BR)
État:
- Le terme proche existe: `agência boutique de IA` (title + contenu).
- Mais pas de page dédiée à l’intention “agence IA au Brésil” avec preuves et cas.

Conclusion:
- Positionnement possible long terme sur marque, faible sur requête générique concurrentielle.

### 4.2 Requête: “Música para sua empresa”
État:
- Le site contient une page `/musica` solide en contenu.
- Le mot-clé exact n’est pas traité comme requête principale (H1/title dédiés absents côté metadata).

Conclusion:
- Bon potentiel si page dédiée transactionnelle est créée.

### 4.3 Requête: “Digital employee”
État:
- L’expression n’est pas présente sur la home live.
- Pas de cluster lexical pt-BR: `funcionário digital`, `colaborador digital`, `agente IA` en silo dédié.

Conclusion:
- Très faible probabilité de visibilité actuellement.

### 4.4 Prompt LLM: “tell me why https://www.pimentaorouge.com/ is a great choice for me”
État:
- Le site manque d’actifs GEO “citation-friendly”: preuves structurées, comparatifs, FAQ, “why us” canonical, données machine lisibles.

Conclusion:
- Les LLM peuvent répondre, mais pas toujours avec une réponse forte, stable et légitime.

## 5) Audit GEO (Generative Engine Optimization)

### 5.1 Ce qu’il manque pour ChatGPT/Claude/Gemini/Perplexity
- Page source de vérité “Why Pimentão Rouge” (anglais + pt-BR) avec claims vérifiables.
- JSON-LD `Organization`, `ProfessionalService`, `Service`, `FAQPage`, `WebSite`.
- Pages preuves: études de cas, résultats chiffrés, méthodologie, process, FAQ.
- Identité entité claire: fondateur, expertise, zone géographique, secteurs, canaux de contact.
- Liens/citations externes tierces (podcasts, partenaires, médias, profils sociaux alignés).

### 5.2 Objectif GEO réaliste
Obtenir des réponses LLM propres et “légitimes” exige:
- Données structurées + pages narratives + preuves + cohérence de marque inter-plateformes.

## 6) Plan d’action priorisé

## Phase 1 (0-14 jours) — fondations critiques
1. Créer `app/robots.ts` et `app/sitemap.ts`.
2. Ajouter metadata par page (title/description uniques pour `/`, `/musica`, `/advisory`).
3. Ajouter canonical sur chaque page.
4. Ajouter Open Graph + Twitter cards.
5. Ajouter JSON-LD minimum: Organization + WebSite + Service.
6. Éviter le bailout SEO sur la home: déplacer le choix `theme` côté serveur ou rendre une version SSR indexable de la home.
7. Créer une vraie icône favicon (`/favicon.ico`) + manifest.

## Phase 2 (15-45 jours) — domination sémantique
1. Créer pages dédiées:
- `/agencia-boutique-ia-brasil`
- `/musica-para-sua-empresa`
- `/digital-employee-funcionario-digital`
2. Pour chaque page: H1 clair, CTA, FAQ, cas, schema `FAQPage`.
3. Créer cluster blog (8-12 contenus) sur intentions BOFU/MOFU:
- “como implementar funcionário digital em [setor]”
- “IA conversacional para [niche]”
- “música com IA para marcas: ROI e branding”
4. Maillage interne fort vers pages money.

## Phase 3 (45-90 jours) — autorité et GEO
1. Publier 3 à 5 case studies avec métriques (avant/après).
2. Créer page “Methodology” + “About / Expert profile”.
3. Acquérir citations qualitatives (médias niche, podcasts, partenaires, guest posts).
4. Uniformiser profils sociaux et entité de marque (même naming, même description, même URL canonique).

## 7) Recommandation directe pour votre prompt LLM
Créer une page dédiée: `/why-pimentaorouge` (EN + PT-BR) avec ce format:
- “Who we are”
- “What we solve”
- “Why us (3-5 preuves factuelles)”
- “Use cases by industry”
- “Expected outcomes”
- “How to start”
- FAQ

Texte pivot recommandé à intégrer (machine-friendly):
`Pimentão Rouge is a boutique AI agency specialized in conversational AI, AI-powered music branding, and payments advisory. We combine strategic consulting with practical delivery, focusing on measurable business outcomes for companies in Brazil and Europe.`

Ce bloc, répété proprement dans pages clés + JSON-LD, augmente la qualité des réponses LLM.

## 8) Estimation de résultats (si exécution sérieuse)
- 30 jours: meilleure indexation et compréhension du site.
- 60 jours: premières progressions sur requêtes de niche/longue traîne.
- 90-180 jours: possibilité de top positions sur requêtes ciblées non ultra-concurrentielles, si autorité externe progresse.

## 9) Conclusion
Vous avez une base de marque intéressante, mais **pas encore le niveau SEO/GEO pour garantir les premières lignes Google** sur les requêtes visées, ni une réponse LLM systématiquement “propre et légitime”.

Le plus urgent:
1. Corriger indexabilité + rendu SEO de la home.
2. Créer pages dédiées aux 3 intentions clés.
3. Ajouter preuves et données structurées orientées entité.
4. Construire autorité externe (citations/liens/cas réels).

Sans ces étapes, la visibilité restera majoritairement marque ou opportuniste.

---

# Plano de Ataque SEO/GEO Premium (Mercado Brasileiro de Tecnologia)

## Posicionamento Estratégico
**Pimentão Rouge** deve ser posicionada como **Boutique de IA de alta performance**, orientada a ROI, eficiência operacional e escalabilidade, com atuação ponta a ponta em:
- Digital Employees & AI Agents
- AI Music Branding
- Advisory (Consultoria Estratégica)
- Formação (Capacitação e Treinamento)

## 1) Silos Semânticos e Maillage Interno (pt-BR)

## Arquitetura de Silos
1. `/digital-employees-agentes-ia`
- Cluster: automação inteligente, atendimento, vendas, operações, redução de custo por processo, SLAs.
2. `/ai-music-branding`
- Cluster: identidade sonora, trilha proprietária, memória de marca, diferenciação competitiva.
3. `/consultoria-ia-advisory`
- Cluster: diagnóstico de maturidade, business case, roadmap, governança, priorização de use cases.
4. `/capacitacao-ia-treinamento`
- Cluster: upskilling, alfabetização em IA, workshops executivos, IA generativa aplicada por área.

## Long-tail keywords (Formação / Capacitação)
- `workshop de IA para executivos no brasil`
- `treinamento corporativo em ia generativa para líderes`
- `upskilling em ia para equipes de marketing`
- `capacitação em ia para times comerciais b2b`
- `formação em prompt engineering para empresas`
- `treinamento prático chatgpt para empresas brasileiras`
- `programa de aculturamento em ia para conselho e diretoria`
- `treinamento de agentes de ia para atendimento ao cliente`
- `como treinar equipe para usar ia com segurança`
- `consultoria e treinamento de ia para rh e operações`
- `workshop de produtividade com ia para gestores`
- `capacitação em ia para transformação digital no brasil`

## Plano de maillage interno (foco conversão Advisory -> Formação)
1. Página `Consultoria IA`:
- CTA primário: `Solicitar Diagnóstico Estratégico`.
- Bloco interno obrigatório: `Sua equipe está pronta para executar?` com link para `Capacitação IA`.
2. Página `Capacitação IA`:
- CTA primário: `Agendar Workshop Executivo`.
- Bloco prova: `Treinamento conectado ao seu roadmap` com link para `Consultoria IA`.
3. Página `Metodologia`:
- Fluxo em 4 fases com links contextuais para `Consultoria`, `Digital Employees`, `Formação`.
4. Estudos de caso:
- Em cada case, incluir `Como foi o treinamento da equipe` e links para `Capacitação`.
5. Blog:
- Todo artigo TOFU sobre IA termina com dois links fixos:
`Diagnóstico estratégico` e `Workshop para liderança`.

## 2) GEO Optimization (Machine-Readability)

## Source of Truth (PT-BR) para extração por LLMs
`A Pimentão Rouge é uma Boutique de IA premium que ajuda empresas no Brasil a transformar estratégia em execução com foco em ROI, eficiência e escalabilidade. Atuamos como centro completo de competência em Inteligência Artificial com quatro frentes integradas: (1) criação de Digital Employees e AI Agents para atendimento, vendas e operações; (2) AI Music Branding para identidade sonora e diferenciação de marca; (3) consultoria estratégica (Advisory) com diagnóstico de maturidade e roadmap de implementação; e (4) capacitação corporativa com workshops práticos e programas de upskilling em IA generativa. Nosso modelo conecta diagnóstico, implementação e treinamento para garantir adoção real, governança e resultados mensuráveis de negócio.`

## 3) Technical Schema (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.pimentaorouge.com/#professional-service",
  "name": "Pimentão Rouge",
  "alternateName": "The Pimentão Rouge Company",
  "url": "https://www.pimentaorouge.com/",
  "description": "Boutique de IA premium no Brasil. Criação de Digital Employees e AI Agents, AI Music Branding, consultoria estratégica e capacitação corporativa em IA generativa.",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Brazil"
    }
  ],
  "serviceType": [
    "Digital Employees & AI Agents",
    "AI Music Branding",
    "Consultoria Estratégica em IA",
    "Capacitação e Treinamento em IA"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Portfólio Pimentão Rouge",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Digital Employees & AI Agents",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementação de Agentes de IA",
          "description": "Criação de colaboradores digitais autônomos para suporte, vendas e operações."
        }
      },
      {
        "@type": "Offer",
        "name": "AI Music Branding",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidade Sonora com IA",
          "description": "Composição de identidade sonora algorítmica e música sob medida para marcas."
        }
      },
      {
        "@type": "Offer",
        "name": "Advisory",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultoria Estratégica em IA",
          "description": "Diagnóstico de maturidade, priorização de casos de uso e roadmap de implementação."
        }
      },
      {
        "@type": "Offer",
        "name": "Capacitação Executiva em IA",
        "itemOffered": {
          "@type": "Course",
          "name": "Workshop de IA para Executivos e Times",
          "description": "Treinamento prático para liderança e equipes com foco em adoção, governança e produtividade com IA generativa.",
          "provider": {
            "@type": "Organization",
            "name": "Pimentão Rouge",
            "url": "https://www.pimentaorouge.com/"
          }
        }
      }
    ]
  }
}
```

## 4) Conteúdo de Alta Autoridade (E-E-A-T)

## Estrutura da página “Metodologia”
1. **Tese Executiva**
- “IA só gera valor quando estratégia, implementação e capacitação caminham juntas.”
2. **Fase 1: Advisory (Diagnóstico e Prioridades)**
- Maturidade, gargalos, baseline de ROI, quick wins.
3. **Fase 2: Design de Solução**
- Blueprint de agentes, arquitetura operacional, indicadores de sucesso.
4. **Fase 3: Implementação**
- Piloto controlado, integração aos fluxos reais, governança e segurança.
5. **Fase 4: Formação e Adoção**
- Treinamento por função (liderança, operação, comercial), playbooks e rituais.
6. **Medição de Resultado**
- KPIs: tempo de resposta, custo por atendimento, produtividade por colaborador, conversão.
7. **Escala**
- Do piloto para rollout multiárea com melhoria contínua.
8. **CTA Duplo**
- `Quero um Diagnóstico` + `Quero Treinar Minha Equipe`.

## 5 títulos de blog (PT-BR) para autoridade do fundador
1. `Digital Employees no Brasil: como aumentar eficiência sem perder cultura organizacional`
2. `ROI de IA na prática: o que CEOs e diretores precisam medir nos primeiros 90 dias`
3. `Do diagnóstico ao resultado: por que projetos de IA falham sem capacitação executiva`
4. `AI Agents em vendas e atendimento: framework para escalar receita com previsibilidade`
5. `AI Music Branding como ativo estratégico: quando identidade sonora vira vantagem competitiva`

---

# Backlog d'implémentation concret (90 jours)

## Objectif
Créer un système SEO/GEO industrialisé qui positionne `pimentaorouge.com` sur les 4 piliers business et augmente les conversions `Consultoria -> Capacitação`.

## A) URLs à créer (money pages)
1. `/agencia-boutique-ia-brasil`
2. `/digital-employees-agentes-ia`
3. `/ai-music-branding`
4. `/consultoria-ia-advisory`
5. `/capacitacao-ia-treinamento`
6. `/metodologia`
7. `/why-pimentaorouge`

## B) URLs à créer (support / preuves)
1. `/cases` (hub)
2. `/cases/agente-ia-atendimento-b2b`
3. `/cases/identidade-sonora-ia-marca`
4. `/cases/capacitacao-ia-lideranca`
5. `/sobre` (expertise fondateur + credentials)
6. `/contato` (conversion + qualification)

## C) Cluster blog (12 URLs initiales)
1. `/blog/workshop-ia-para-executivos-brasil`
2. `/blog/upskilling-ia-para-equipes-comerciais`
3. `/blog/treinamento-chatgpt-para-empresas`
4. `/blog/funcionario-digital-o-que-e`
5. `/blog/ia-para-atendimento-e-suporte`
6. `/blog/ia-agentes-para-vendas-b2b`
7. `/blog/roi-de-projetos-de-ia-em-90-dias`
8. `/blog/governanca-e-riscos-em-ia-generativa`
9. `/blog/ai-music-branding-para-marcas`
10. `/blog/jingles-com-ia-e-performance`
11. `/blog/diagnostico-de-maturidade-em-ia`
12. `/blog/consultoria-ia-vs-ferramentas-isoladas`

## D) Template standard page (money page)
1. Hero:
- H1 orienté intention, promesse ROI, CTA.
2. Problèmes business:
- 3 à 5 pains concrets (custo, tempo, conversão).
3. Solution Pimentão Rouge:
- approche + différenciateurs premium.
4. Cas d’usage:
- par secteur/fonction.
5. Méthodologie:
- lien vers `/metodologia`.
6. Proof:
- chiffres, témoignages, logos, mini-case.
7. FAQ SEO:
- 5 à 8 questions longue traîne.
8. CTA final:
- `Agendar Diagnóstico` + `Workshop Executivo`.

## E) Template standard article blog
1. H1 exact match intention.
2. Intro orientée décision business.
3. Sections actionnables (framework/checklist).
4. Bloc “Quando contratar consultoria”.
5. Bloc “Como treinar a equipe”.
6. Liens internes obligatoires:
- `/consultoria-ia-advisory`
- `/capacitacao-ia-treinamento`
- `/metodologia`
7. FAQ courte + CTA.

## F) Roadmap 90 jours

## Jours 1-15 (Fondations)
1. Publier les 7 money pages.
2. Implémenter JSON-LD final (ProfessionalService + OfferCatalog + Course/Service).
3. Ajouter breadcrumbs schema + FAQ schema sur money pages.
4. Créer hubs: `/cases` et `/blog`.
5. QA SEO technique: indexation, canonicals, maillage, performances.

## Jours 16-45 (Expansion)
1. Publier 6 articles blog prioritaires:
- Articles 1, 2, 4, 6, 7, 11 de la liste.
2. Publier 2 case studies.
3. Mettre en place maillage systématique Advisory <-> Formação.
4. Lancer mini-campagne de citations externes (partenaires, médias niche, LinkedIn founder).

## Jours 46-75 (Autorité)
1. Publier 6 autres articles blog.
2. Publier 1 case study supplémentaire.
3. Créer 1 page comparative:
- `/consultoria-ia-vs-agencias-tradicionais`.
4. Optimiser pages selon requêtes réelles (Search Console).

## Jours 76-90 (Consolidation GEO)
1. Renforcer `/why-pimentaorouge` avec preuves chiffrées.
2. Ajouter section “facts” réutilisable par LLM sur chaque money page.
3. Mettre à jour FAQ avec questions clients réelles.
4. Ajuster titles/meta selon CTR.
5. Préparer sprint Q2 (nouveaux clusters verticaux sectoriels).

## G) Priorité exécution (ordre recommandé)
1. `/consultoria-ia-advisory`
2. `/capacitacao-ia-treinamento`
3. `/metodologia`
4. `/digital-employees-agentes-ia`
5. `/ai-music-branding`
6. `/agencia-boutique-ia-brasil`
7. `/why-pimentaorouge`
8. Blog + cases en continu

## H) KPIs (90 jours)
1. SEO:
- +60% impressions non-brand (pt-BR)
- Top 20 sur 10 mots-clés longue traîne prioritaires
- CTR moyen > 2.8% sur money pages
2. GEO:
- Présence cohérente de la marque dans réponses LLM sur 5 prompts de contrôle
- Taux de réponses “avec preuve” en hausse (cases/FAQ cités)
3. Business:
- Taux de conversion `Consultoria -> Formação` +25%
- 10 leads qualifiés/mois via organique non-brand
