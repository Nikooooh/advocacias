import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-054d2a py-4 mt-22 ">
      <div className="container mx-auto text-center">
        {/* Links do rodapé */}
        <div className="mb-2">
          <Link
            to="/sobre"
            className="text-dfb76e hover:text-green-800 transition-colors text-lg mx-2"
          >
            Sobre
          </Link>
          <Link
            to="/artigos"
            className="text-dfb76e hover:text-green-800 transition-colors text-lg mx-2"
          >
            Artigos
          </Link>
          <Link
            to="/contato"
            className="text-dfb76e hover:text-green-800 transition-colors text-lg mx-2"
          >
            Contato
          </Link>
        </div>

        {/* Direitos autorais */}
        <div className="text-dfb76e text-md">
          © 2023 Advocacias.com.br - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
