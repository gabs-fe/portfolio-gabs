import type { Metadata } from 'next';
import Navbar from "./navbar"; 
import './globals.css';

export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Projetos e contatos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Outros metadados podem ser adicionados aqui */}
      </head>
      <body className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
