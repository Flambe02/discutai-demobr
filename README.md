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

1. **Cabeleireiro** - Salão Beleza Pura
2. **Restaurante** - Restaurante Sabor & Arte
3. **Imobiliária** - Imóveis Prime
4. **Dentista** - Clínica OdontoVida
5. **Genérico** - Empresa Modelo
6. **Lucy Marketing** - Agência de Marketing Digital

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

#### 🔄 Problème En Cours de Résolution

**Widget DiscutAI ne réapparaît pas au retour sur "generico"**

**Contexte technique**:
- Les widgets React natifs (BotWidget, WhatsAppWidget) fonctionnent parfaitement
- DiscutAIWidget charge un script tiers qui injecte du DOM dynamiquement
- React démonte le composant lors du changement de thème (comportement normal)

**Approches testées**:

1. **Cache-busting avec timestamp** ❌
   ```typescript
   script.src = `https://v2.discutai.com/widget/loader.js?v=${Date.now()}`;
   ```
   Résultat: Widget apparaissait partout

2. **Cleanup complet + rechargement** ⚠️
   ```typescript
   return () => {
     document.getElementById('discutai-widget-loader')?.remove();
     // Suppression de tous les éléments injectés
   };
   ```
   Résultat: Widget correctement isolé mais ne se réinitialise pas

3. **Délai d'initialisation (EN TEST)** 🔄
   ```typescript
   const initTimer = setTimeout(() => {
     window.DiscutAIWidget = { config };
     // Chargement du script...
   }, 100);
   ```
   Status: Déployé, en attente de tests utilisateur avec logs console

**Configuration Widget**:
```typescript
assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096"
assistantName: "TRPC Test"
apiKey: "discutai_5a75e24f7d924e1b8ec34414e6cbb0be"
baseUrl: "https://v2.discutai.com"
```

**Logs de diagnostic ajoutés**:
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

1. **Test utilisateur** avec logs console pour diagnostiquer le problème de réapparition
2. **Solutions alternatives** si le délai ne fonctionne pas:
   - Garder le script en DOM mais réinitialiser uniquement la config
   - Ajouter un flag global pour forcer rechargement complet
   - Contacter l'équipe DiscutAI pour méthode officielle de réinitialisation
3. **Optimisation**: Considérer React.StrictMode impact en dev vs prod

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
#   d i s c u t a i - d e m o b r  
 