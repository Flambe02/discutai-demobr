# Discutai Demo BR - Landing Page de Demonstração

Landing page de demonstração para integração de chatbot em sites de clientes. Permite alternar entre 5 temas diferentes (Cabeleireiro, Restaurante, Imobiliária, Dentista, Genérico) com conteúdo personalizado em português brasileiro.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React**

## 📦 Instalação

### 1. Clonar ou baixar o projeto

```bash
cd Demo_Site_DiscutaiBR
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente (opcional)

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` e configure as variáveis conforme necessário:

```env
# Modo de embed do bot: "placeholder" | "iframe" | "script"
NEXT_PUBLIC_BOT_EMBED_MODE=placeholder

# Se usar modo "iframe", defina a URL do iframe
NEXT_PUBLIC_BOT_IFRAME_URL=

# Se usar modo "script", defina a URL do script
NEXT_PUBLIC_BOT_SCRIPT_SRC=
```

### 4. Executar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### 5. Build para produção

```bash
npm run build
npm start
```

## 🎨 Temas Disponíveis

A landing page inclui 6 temas pré-configurados:

1. **Cabeleireiro** - Barbaria do Rei (inspirado em [César Reis Barbeiro](https://www.facebook.com/cesarreis.barbeiro/) / [Instagram](https://www.instagram.com/p/DQpqigpicwA/))
2. **Restaurante** - La Bouchon Brasserie (inspirado em [Le Jazz](https://www.lejazz.com.br/))
3. **Imobiliária** - NovaChave Imóveis (inspirado em [Seisa](https://seisa.com.br/))
4. **Dentista** - Clínica Sorriso Prime (inspirado em [Benatti Odontologia](https://benattiodontologia.com.br/))
5. **Genérico** - Empresa Modelo
6. **Lucy** - LUCY — Marketing Inteligente para vender mais (réplique de [mylucy.ai](https://mylucy.ai/site/mylucy/), avec autorisation)

### Como usar os temas

#### Via URL (Query Parameter)

Adicione `?theme=` na URL seguido do ID do tema:

```
http://localhost:3000/?theme=cabeleireiro
http://localhost:3000/?theme=restaurante
http://localhost:3000/?theme=imobiliaria
http://localhost:3000/?theme=dentista
http://localhost:3000/?theme=generico
http://localhost:3000/?theme=lucy
```

#### Via Footer

Clique em um dos botões no footer para alternar entre os temas. O tema selecionado será:
- Destacado visualmente
- Salvo no `localStorage`
- Refletido na URL

#### Via LocalStorage

O tema selecionado é automaticamente salvo no navegador e restaurado na próxima visita.

## 🤖 Integração do Bot

### Modos de Operação

#### 1. Modo Placeholder (Padrão)

Exibe uma área de placeholder com instruções para integração:

```env
NEXT_PUBLIC_BOT_EMBED_MODE=placeholder
```

#### 2. Modo Iframe

Embute o chatbot via iframe:

```env
NEXT_PUBLIC_BOT_EMBED_MODE=iframe
NEXT_PUBLIC_BOT_IFRAME_URL=https://seu-chatbot.com/embed
```

#### 3. Modo Script

Carrega o chatbot via script externo:

```env
NEXT_PUBLIC_BOT_EMBED_MODE=script
NEXT_PUBLIC_BOT_SCRIPT_SRC=https://seu-chatbot.com/widget.js
```

### Modo Demo vs Modo Live

O widget do bot inclui um toggle para alternar entre:

- **Modo Demo** 📱: Respostas simuladas (para demonstração)
- **Modo Live** 🔴: Bot real integrado (requer configuração)

## 📁 Estrutura do Projeto

```
Demo_Site_DiscutaiBR/
├── app/
│   ├── layout.tsx          # Layout principal com metadata
│   ├── page.tsx            # Página principal com toda a UI
│   └── globals.css         # Estilos globais e Tailwind
├── components/
│   ├── Hero.tsx            # Componente Hero section
│   ├── BotWidget.tsx       # Widget do chatbot
│   └── FooterThemeSwitcher.tsx  # Seletor de temas no footer
├── lib/
│   ├── themes.ts           # Definição de todos os temas
│   └── themeUtils.ts       # Utilitários para gerenciar temas
├── .env.example            # Exemplo de variáveis de ambiente
├── tailwind.config.ts      # Configuração do Tailwind
├── postcss.config.mjs      # Configuração do PostCSS
└── README.md               # Este arquivo
```

## 🎯 Funcionalidades

### Header Sticky
- Logo dinâmico com primeira letra do nome
- Nome e tagline do negócio
- Badges: endereço, horários, avaliações
- CTA principal adaptado ao tema

### Hero Section
- Título e subtítulo personalizados
- KPIs em formato de chips
- Imagem com gradiente dinâmico
- Badges flutuantes com avaliação

### Cards de Conteúdo
- **Serviços**: Lista de serviços oferecidos
- **Informações Úteis**: Detalhes operacionais
- **Por que escolher**: Texto descritivo
- **Peça ao Bot**: Exemplos de perguntas
- **Contato**: Telefone, WhatsApp, email, endereço

### Footer com Seletor de Temas
- Botões para alternar entre temas
- Destaque do tema ativo
- Botão "Copiar link" para compartilhar demo
- Fixed no bottom da página

### Bot Widget
- Botão flutuante com ícone
- Expansível em modal
- Header com gradiente do tema
- Toggle Demo/Live
- Suporta múltiplos modos de integração

## 🚢 Deploy

### Vercel (Recomendado)

1. Crie uma conta em [Vercel](https://vercel.com)
2. Conecte seu repositório
3. Configure as variáveis de ambiente
4. Deploy automático!

### Netlify

1. Crie uma conta em [Netlify](https://netlify.com)
2. Conecte seu repositório
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Configure as variáveis de ambiente

### GitHub Pages

Para GitHub Pages, você precisará usar `next export` (modo estático):

1. Adicione no `package.json`:
```json
"scripts": {
  "export": "next build && next export"
}
```

2. Configure `next.config.js`:
```js
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

3. Execute:
```bash
npm run export
```

## 🎨 Personalização

### Adicionar novos temas

Edite o arquivo `lib/themes.ts` e adicione um novo tema ao objeto `themes`:

```typescript
export const themes: Record<ThemeId, Theme> = {
  // ... temas existentes
  novoTema: {
    id: 'novoTema',
    brandName: 'Nome do Negócio',
    tagline: 'Slogan',
    accentColor: '#FF5733',
    gradientSecondary: '#C70039',
    // ... demais campos
  }
};
```

Não esqueça de adicionar o ID na lista `themeIds` e no `themeLabels`.

### Modificar estilos

Os estilos são baseados em Tailwind CSS. Para customizações globais, edite:
- `tailwind.config.ts` - Configuração do Tailwind
- `app/globals.css` - Estilos globais

### Alterar transições

As transições de tema são definidas em `app/globals.css`. Ajuste a duração em:

```css
* {
  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;
}
```

## 📝 Licença

Este projeto é um template de demonstração e pode ser usado livremente.

## 🤝 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

## 📖 Journal de Développement (Dev Log)

### [Session] Page Lucy – Réplique MyLucy (mylucy.ai)

#### 🎯 Objectif
Remplacer la page du thème **Lucy Marketing** par une réplique de la page principale de [MyLucy](https://mylucy.ai/site/mylucy/) (« Marketing Inteligente para vender mais »), avec autorisation de Lucy. Utiliser les images du dossier `Lucy/` et les liens officiels (login, WhatsApp, política, termos, redes sociais).

#### ✅ Modifications effectuées

**1. Thème `lucy` (`lib/themes.ts`)**
- **Marque** : LUCY — tagline « Marketing Inteligente para vender mais »
- **Hero** : « Marketing que cabe no seu bolso, no seu dia a dia e no seu negócio. » + texte Lucy braço/cabeça/ombro
- **CTA** : « Chama a Lucy! »
- **Nouveau champ** `lucyLanding` : `loginUrl`, `whatsappUrl`, `challenges` (6 cartes avec titre, description, preço, CTA, image), `moreVisibilityText`/`moreVisibilityCta`, `missionTitle`/`missionText`, `pillarsTitle`/`pillars` (4 piliers), `policyUrl`, `termsUrl`, `social` (WhatsApp, Facebook, Instagram, LinkedIn). Liens officiels : login.mylucy.ai, api.whatsapp.com/send/?phone=5511995899176, mylucy.ai/site/mylucy-antigo/politica-de-privacidade/, termos-de-uso, facebook.com/mylucy.co, instagram.com/mylucy.ai, linkedin.com/company/mylucy.

**2. Composant `components/LucyLanding.tsx`**
- Header : logo LUCY (SVG), « Fazer login », « Fale com Especialistas » (WhatsApp)
- Hero : titre, sous-titre, bouton « Chama a Lucy! » (ouvre le widget DiscutAI)
- Section « Qual o seu desafio hoje? » : 6 cartes (image, titre, description, preço, CTA « Comece Agora! » ou « Chama a Lucy! »)
- Section « /MAIS VISIBILIDADE. /MAIS CLIENTES… » + CTA « Comece Agora! » (lien login)
- Section « Nossa Missão É Transformadora » + texte + CTA
- Section « Tem um desafio aí? » : 4 piliers (Criação, Planejamento, Performance, Comunicação Integrada)
- Footer : Institucional (Home, Política de Privacidade, Termos de Uso), Siga a Lucy (redes), copyright Lucy ©

**3. Page (`app/page.tsx`)**
- Si `currentThemeId === 'lucy'` et `theme.lucyLanding` → rendu de `<LucyLanding theme={theme} openBot={openBot} />` + `<FooterThemeSwitcher />` à la place du layout générique.

**4. Images**
- `public/lucy/` : logo `lucy-logo-header.svg`, images iStock (avif, jpg) copiées depuis le dossier `Lucy/` pour les 6 défis et la galerie.

#### 📁 Fichiers modifiés / créés

| Fichier | Description |
|---------|-------------|
| `lib/themes.ts` | Thème `lucy` + type `lucyLanding` avec contenu MyLucy et liens officiels |
| `components/LucyLanding.tsx` | Nouveau – page type MyLucy |
| `app/page.tsx` | Import LucyLanding, rendu conditionnel pour thème lucy |
| `public/lucy/` | Logo SVG + images (avif, jpg) depuis Lucy/ |
| `README.md` | Liste des thèmes + entrée dev log |

---

### [Session] Widget DiscutAI persistant sur la page Generico / Lucy

#### 🎯 Objectif
Corriger la disparition du widget DiscutAI sur la page Generico (et Lucy) : au retour sur cette page après avoir changé de thème, le widget doit toujours être présent.

#### ✅ Modifications effectuées

**Fichier `components/DiscutAIWidget.tsx`** :

1. **Cache-busting du script au montage**
   - Avant : `script.src = 'https://v2.discutai.com/widget/loader.js'`
   - Après : `script.src = \`https://v2.discutai.com/widget/loader.js?v=${Date.now()}\`` (cache-bust)
   - À chaque montage (y compris au retour sur generico/lucy), le script est rechargé avec une URL différente, ce qui force le navigateur à l’exécuter à nouveau (au lieu de servir une version en cache sans exécution).

2. **Dépendance du `useEffect` sur `theme.id`**
   - `useEffect(..., [])` → `useEffect(..., [theme.id])`
   - Au changement generico ↔ lucy, l’effet se relance (cleanup puis ré-init avec la bonne config).
   - Au retour depuis un autre thème, le composant remonte, l’effet s’exécute et injecte le script avec cache-bust → le widget réapparaît.

Le cleanup existant (suppression du script par `id="discutai-widget-loader"` et des nœuds DOM du widget) reste inchangé, donc le widget ne s’affiche que sur les thèmes generico et lucy.

#### 📁 Fichiers modifiés

| Fichier | Description |
|---------|-------------|
| `components/DiscutAIWidget.tsx` | Cache-busting `loader.js?v=${Date.now()}`, deps `[theme.id]` |
| `README.md` | Journal de développement mis à jour, problème "widget ne réapparaît pas" marqué résolu |

#### 📝 Mémoire pour la suite

- **Pourquoi le cache-busting ici ne fait pas apparaître le widget partout** : le cleanup retire toujours le script par son `id` fixe et tous les éléments discutai ; seuls les thèmes generico/lucy rendent `<DiscutAIWidget />`, donc le script n’est présent que sur ces pages.
- **Pourquoi il faut recharger le script** : après suppression du nœud `<script>`, le ré-injecter avec la même `src` peut être servi depuis le cache sans ré-exécution (comportement navigateur). Un `?v=timestamp` force un nouveau chargement et une nouvelle exécution.

---

### [Session] Thème Restaurante – Inspiration Le Jazz Brasserie

#### 🎯 Objectif
Rendre la page du thème **restaurante** plus réaliste en s’inspirant du site [Le Jazz](https://www.lejazz.com.br/) : ton brasserie parisienne, jazz, horaires et services typiques.

#### ✅ Modifications effectuées

**Fichier `lib/themes.ts` – thème `restaurante`** :

| Élément | Avant | Après |
|--------|--------|--------|
| **Marque** | Bistrô Vila Nova | **La Bouchon Brasserie** |
| **Slogan** | Sabor, clima e boa mesa | Clima aconchegante. Bistrô parisiense em São Paulo. |
| **Monogramme** | BV | LB |
| **Adresse** | Av. Paulista… | Rua dos Pinheiros, 254 - Pinheiros |
| **Horaires** | Seg-Dom 11h30-23h… | Dom-Qui: 12h às 24h \| Sex-Sáb: 12h à 1h |
| **Téléphone / WhatsApp** | (11) 3234-5678 | (11) 2359-8141 / +55 11 95311-5884 |
| **Hero** | Uma experiência gastronômica… | Pratos clássicos, simples e saborosos + inspiração bistrô parisiense, jazz |
| **Services** | Almoço executivo, jantar… | Brunch (sáb/dom 8h-11h30), Buffet almoço (seg-sex 12h-15h), Eventos, Delivery, Cocktails e petit plats |
| **Bot** | Bistrô Vila Nova | Assistente La Bouchon, reservas/cardápios/delivery |

Référence : [Le Jazz – nossa história, endereços, horários, cardápios](https://www.lejazz.com.br/).

---

### [Session] Thème Cabeleireiro – Personnalisation César Reis Barbearia

#### 🎯 Objectif
Personnaliser la page du thème **cabeleireiro** en s’inspirant du contenu des pages [César Reis Barbeiro (Facebook)](https://www.facebook.com/cesarreis.barbeiro/) et [Instagram](https://www.instagram.com/p/DQpqigpicwA/) pour un rendu type barbearia (barbier) plutôt que salão de beleza.

#### ✅ Modifications effectuées

**Fichier `lib/themes.ts` – thème `cabeleireiro`** :

| Élément | Avant | Après |
|--------|--------|--------|
| **Marque** | Studio BelaForma | **Barbaria do Rei** |
| **Slogan** | Cortes, cor e cuidado premium | Corte, barba e estilo. Atendimento exclusivo. |
| **Monogramme** | SB | CR |
| **Couleurs** | Rose/violet (#EC4899, #8B5CF6) | Tons marron/âmbar (#B45309, #78350F) |
| **Hero** | Transforme seu visual… | Barba e cabelo no lugar. Você em destaque. |
| **Services** | Corte feminino/masculino, escova, coloração… | Corte masculino, barba com navalha e toalha quente, degradê, combo corte+barba… |
| **Bot** | Assistente do Studio BelaForma | Assistente Barbaria do Rei, ton plus direct (« Fala! ») |
| **Images** | Salão de beleza (Unsplash) | Barbearia (cadeira, navalha, corte masculino) |

**Contenu inspiré des pages barbeiro** : focus corte + barba, agendamento pelo WhatsApp, atendimento exclusivo, horários tipo “Ter–Sáb” / “sob agendamento”, frases curtas et professionnelles.

#### 📁 Fichiers modifiés

| Fichier | Description |
|---------|-------------|
| `lib/themes.ts` | Thème `cabeleireiro` remplacé par Barbaria do Rei (texte, services, couleurs, images) |
| `README.md` | Liste des thèmes mise à jour + entrée dev log |

---

### 2026-02-02 - Intégration Widget DiscutAI et Corrections

#### 🎯 Objectif
Intégrer le widget DiscutAI officiel sur le thème "generico" et corriger les problèmes de visibilité/persistance.

#### ✅ Problèmes Résolus

**1. Visibilité du texte dans le widget DiscutAI**
- **Symptôme**: Texte saisi en gris très clair, presque invisible
- **Cause**: Styles CSS par défaut du widget
- **Solution**: Création de `app/discutai-widget-fix.css` avec règles `!important` pour forcer le texte en noir
- **Fichiers**: `app/discutai-widget-fix.css`, `app/layout.tsx`
- **Commit**: "fix: Improve DiscutAI widget text visibility with aggressive CSS overrides"

**2. Footer - Mise à jour du disclaimer**
- **Modification**: `"Marca e imagens ilustrativas (demo)"` → `"Para TPRC (2026) Demo site - DiscutaiBR"`
- **Fichier**: `components/FooterThemeSwitcher.tsx` (ligne 90)
- **Commit**: "fix: Update footer disclaimer text"

**3. Ordre de définition des fonctions**
- **Erreur**: "Application error: a client-side exception has occurred"
- **Cause**: `openBot` référencée dans `useEffect` avant sa définition
- **Solution**: Déplacement de la définition avant le `useEffect`
- **Fichier**: `app/page.tsx`

**4. Widget apparaissant sur toutes les pages**
- **Symptôme**: Widget DiscutAI visible sur tous les thèmes au lieu de seulement "generico"
- **Cause**: Script restait en DOM après changement de thème
- **Solution**: Cleanup complet du script et des éléments DOM dans le `return` du `useEffect`
- **Fichier**: `components/DiscutAIWidget.tsx`

**5. Widget DiscutAI ne réapparaissait pas au retour sur "generico" / "lucy"** ✅ (résolu plus bas)

**Cause du bug "widget ne réapparaît pas"**:
- Au retour sur generico/lucy, le composant remonte et réinjecte le script avec la même `src`.
- Le navigateur peut servir le script depuis le cache **sans le ré-exécuter**, donc le widget ne se réaffiche pas.

**Solution appliquée** (voir entrée dev log ci-dessous "Widget DiscutAI persistant") :
- Cache-busting sur la `src` du script : `loader.js?v=${Date.now()}` à chaque montage, pour forcer un nouveau chargement et une nouvelle exécution.
- Le cleanup supprime toujours le script par `id="discutai-widget-loader"`, donc le widget n’apparaît que sur generico/lucy.
- Dépendance `[theme.id]` dans le `useEffect` pour mettre à jour la config quand on alterne generico ↔ lucy.

**Configuration Widget**:
```typescript
assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096"
assistantName: "TRPC Test"
apiKey: "discutai_5a75e24f7d924e1b8ec34414e6cbb0be"
baseUrl: "https://v2.discutai.com"
```

**Logs de diagnostic**:
- 🔧 Initialisation DiscutAI Widget
- 📦 Chargement du script DiscutAI / ℹ️ Script déjà présent
- ✅ Script DiscutAI chargé / ❌ Erreur de chargement
- 🧹 Cleanup DiscutAI Widget
- ✓ Script supprimé / ✓ Config nettoyée

#### 📁 Fichiers Modifiés (Session 2026-02-02)

| Fichier | Type | Description |
|---------|------|-------------|
| `app/discutai-widget-fix.css` | Nouveau | Surcharges CSS pour visibilité texte |
| `components/DiscutAIWidget.tsx` | Modifié | Composant wrapper pour script tiers + délai init |
| `components/FooterThemeSwitcher.tsx` | Modifié | Mise à jour disclaimer |
| `app/page.tsx` | Modifié | Correction ordre définition fonctions |
| `app/layout.tsx` | Modifié | Import du CSS fix |

#### 🧠 Leçons Apprises

**Pattern pour Scripts Tiers en React**:
```typescript
useEffect(() => {
  // 1. Configuration globale
  window.ThirdPartyWidget = { config };

  // 2. Timeout optionnel pour éviter race conditions
  const timer = setTimeout(() => {
    // 3. Création et injection du script
    const script = document.createElement('script');
    script.id = 'unique-id';
    script.src = 'url';
    document.body.appendChild(script);
  }, 100);

  // 4. CLEANUP OBLIGATOIRE
  return () => {
    clearTimeout(timer);
    document.getElementById('unique-id')?.remove();
    // Supprimer TOUS les éléments DOM injectés
    delete window.ThirdPartyWidget;
  };
}, []); // Dépendances vides = mount/unmount only
```

**Pièges à éviter**:
- ❌ Oublier le cleanup → Widget apparaît partout
- ❌ Cleanup incomplet → Éléments orphelins dans le DOM
- ❌ Dépendances dans useEffect → Boucles infinies
- ❌ Cache-busting agressif → Rechargements inutiles

#### 🔮 Prochaines Étapes

1. **Optimisation**: Considérer React.StrictMode impact en dev vs prod
2. Tests de non-régression sur les thèmes generico / lucy (changement de thème et retour)

#### 🛠️ Stack Technique (Mise à jour)

- **Next.js**: 16.1.6 (App Router + Turbopack)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.17
- **Deployment**: Vercel (2 remotes: origin, vercel)

---

### 2026-02-02 (Suite) - Ajout du Thème Lucy Marketing

#### 🎯 Objectif
Créer un nouveau thème inspiré de MyLucy.ai pour représenter une agence de marketing digital.

#### ✅ Implémentation

**Nouveau Thème "Lucy Marketing"**
- **Secteur**: Agence de marketing digital
- **Couleur**: #FF6B9D (Rose professionnel)
- **Services**:
  - Création de contenu (posts, stories)
  - Gestion de réseaux sociaux
  - Publicité payante (Facebook, Instagram, Google)
  - Stratégie de contenu et calendrier éditorial
  - Design graphique et copywriting
  - Analyse de performance

**Configuration**:
- Widget: DiscutAIWidget (comme generico)
- Images: Stock professionnel d'Unsplash (équipes marketing, analytics, collaboration)
- Palette inspirée de MyLucy.ai tout en restant original
- Intégration complète avec le système de thèmes existant

**Note importante**: Pour respecter les droits d'auteur, ce thème est **inspiré** de MyLucy.ai mais utilise du contenu original et des images de stock libres. Si vous avez l'autorisation d'utiliser les images exactes de MyLucy.ai, vous pouvez les remplacer dans `lib/themes.ts`.

#### 📁 Fichiers Modifiés

| Fichier | Modifications |
|---------|--------------|
| `lib/themes.ts` | Ajout du thème 'lucy' avec configuration complète |
| `components/DiscutAIWidget.tsx` | Ajout config widget pour Lucy |
| `app/page.tsx` | Mise à jour logique widget pour inclure Lucy |
| `README.md` | Documentation du nouveau thème |

#### 🔗 Accès au Thème

URL: `?theme=lucy`
- Exemple: `https://votre-site.vercel.app/?theme=lucy`

**Commit**: `feat: Add Lucy Marketing theme inspired by mylucy.ai`

---

Développé avec ❤️ pour démonstrations Discutai
#   d i s c u t a i - d e m o b r 
 
 