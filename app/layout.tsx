import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import './discutai-widget-fix.css';
import GTranslateWidget from '@/components/GTranslateWidget';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'TPRC: agência boutique de IA. Inteligência conversacional, criatividade musical e precisão financeira para escalar negócios.',
  description: 'TPRC: agência boutique de IA que combina inteligência conversacional, criatividade musical e precisão financeira para escalar negócios.',
  keywords: 'TPRC, inteligência artificial, chatbot, assistente virtual, música, criatividade, payments, advisory',
  icons: {
    icon: '/images/pimentao-rouge-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        {children}
        {/* Widget GTranslate pour traduction multilingue */}
        <GTranslateWidget />
      </body>
    </html>
  );
}
