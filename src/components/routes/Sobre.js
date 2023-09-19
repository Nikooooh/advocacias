import React from "react";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-100">
      <div className="flex-grow flex flex-col items-center">
        <div className="max-w-3xl w-full bg-white rounded shadow-lg p-8 flex-grow mt-12">
          <h1 className="text-3xl font-semibold mb-6 text-center text-green-950">
            Sobre Nós
          </h1>

          <blockquote className="text-gray-600 italic mb-6 border-l-4 border-orange-500 pl-4 text-center">
            "Proporcionar uma plataforma robusta e confiável para a divulgação
            dos profissionais de direito no Brasil."
          </blockquote>

          <div className="mb-6 w-full flex justify-center">
            <iframe
              title="Video do YouTube de apresentação do site"
              alt="Video do YouTube de apresentação do site"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fmvBgdBDpvQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/cadastro"
              className="inline-block mt-4 bg-green-800 text-lg text-white rounded-md px-8 py-3 hover:bg-green-700 transition duration-200"
            >
              Cadastre seu escritório!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
