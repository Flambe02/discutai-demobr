import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import './discutai-widget-fix.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Discutai Demo BR - Integração de Chatbot',
  description: 'Demonstração de integração de chatbot em sites de clientes - Cabeleireiro, Restaurante, Imobiliária, Dentista',
  keywords: 'chatbot, assistente virtual, agendamento, atendimento automático',
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
      </body>
    </html>
  );
}
