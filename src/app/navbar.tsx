"use client"; // Adicione esta linha no topo do arquivo

import Link from "next/link";
import { useState } from "react"; // Correção aqui

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="shadow-md py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/butterfly.svg" alt="Logo" className="w-30" />
        </div>

        {/* Botões de Navegação */}
        <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="text-purple-500 text-lg hover:text-purple-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 p-2 font-bold">
            INÍCIO
          </Link>
          <Link href="/" className="text-purple-500 text-lg hover:text-purple-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 p-2 font-bold">
            CONTATO
          </Link>
          <Link href="/" className="text-purple-500 text-lg hover:text-purple-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 p-2 font-bold">
            PROJETOS
          </Link>
        </nav>

        {/* Menu para telas menores */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
