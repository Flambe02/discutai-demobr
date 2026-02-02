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

A landing page inclui 5 temas pré-configurados:

1. **Cabeleireiro** - Salão Beleza Pura
2. **Restaurante** - Restaurante Sabor & Arte
3. **Imobiliária** - Imóveis Prime
4. **Dentista** - Clínica OdontoVida
5. **Genérico** - Empresa Modelo

### Como usar os temas

#### Via URL (Query Parameter)

Adicione `?theme=` na URL seguido do ID do tema:

```
http://localhost:3000/?theme=cabeleireiro
http://localhost:3000/?theme=restaurante
http://localhost:3000/?theme=imobiliaria
http://localhost:3000/?theme=dentista
http://localhost:3000/?theme=generico
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

Desenvolvido com ❤️ para demonstrações da Discutai
