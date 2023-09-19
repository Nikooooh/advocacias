import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Logo from "../../imagens/LogoAdvog.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 bg-054d2a relative shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <Link to="/" className="bg-dfb76e rounded p-2 mb-4 md:mb-0">
          <img
            src={Logo}
            alt="AdvogaNet Logo"
            width={300}
            height={200}
            className="h-32 md:h-36 lg:h-40 w-auto"
          />
        </Link>

        <div className="flex items-center justify-center w-full md:w-auto ml-0 md:ml-8">
          <div className="md:hidden flex flex-col items-center relative">
            <button
              className="mb-4 text-dfb76e hover:text-white transition-colors"
              alt="Menu com opções de navegação"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XIcon className="h-8 w-8 md:h-10 md:w-10" />
              ) : (
                <MenuIcon className="h-8 w-8 md:h-10 md:w-10" />
              )}
            </button>

            {menuOpen && (
              <nav className="flex flex-col items-center w-full py-4 px-4 bg-054d2a rounded-b-md shadow-lg transition-transform duration-300 transform">
                <Link
                  to="/sobre"
                  className="text-dfb76e hover:text-green-800 transition-colors text-xl mb-2 md:mb-0"
                >
                  Sobre
                </Link>
                <Link
                  to="/artigos"
                  className="text-dfb76e hover:text-green-800 transition-colors text-xl mb-2 md:mb-0"
                >
                  Artigos
                </Link>
                <Link
                  to="/contato"
                  className="text-dfb76e hover:text-green-800 transition-colors text-xl mb-2 md:mb-0"
                >
                  Contato
                </Link>
                <Link
                  to="/cadastro"
                  className="bg-green-700 text-white px-4 py-1.5 rounded hover:bg-054d2a hover:text-dfb76e transition-colors text-lg mb-2 md:mb-0"
                >
                  Cadastre seu escritório
                </Link>
              </nav>
            )}
          </div>

          <nav className="hidden md:flex space-x-2 md:space-x-8 items-center">
            <Link
              to="/sobre"
              className="text-dfb76e hover:text-green-800 transition-colors text-xl mb-2 md:mb-0"
            >
              Sobre
            </Link>
            <Link
              to="/artigos"
              className="text-dfb76e hover:text-green-800 transition-colors text-xl mb-2 md:mb-0"
            >
              Artigos
            </Link>
            <Link
              to="/contato"
              className="text-dfb76e hover:text-green-800 transition-colors text-xl mb-2 md:mb-0"
            >
              Contato
            </Link>
            <Link
              to="/cadastro"
              className="bg-green-700 text-white px-4 py-1.5 rounded hover:bg-054d2a hover:text-dfb76e transition-colors text-lg mb-2 md:mb-0"
            >
              Cadastre seu escritório
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
