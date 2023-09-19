import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

function Principal() {
  const [advogados, setAdvogados] = useState([]);
  const [search, setSearch] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const especialidades = [
    // Lista das especialidades
    "Direito Administrativo",
    "Direito Ambiental",
    "Direito Civil",
    "Direito Constitucional",
    "Direito do Consumidor",
    "Direito Empresarial",
    "Direito Família e Sucessões",
    "Direito Penal",
    "Direito Trabalhista",
    "Direito Tributário",
    "Direitos Humanos",
    "Direito Agrário",
    "Direito Previdenciário",
    "Direito Internacional",
    "Direito Eleitoral",
    "Direito Militar",
    "Direito Desportivo",
    "Direito Digital",
    "Direito de Trânsito",
    "Direito Imobiliário",
    "Direito de Propriedade Intelectual",
    "Direito do Idoso",
    "Direito da Infância e Juventude",
    "Direito Marítimo",
    "Direitos de Família e das Sucessões",
  ];

  const fetchAdvogados = async (city = "", especialidade = "", page = 1) => {
    try {
      const params = {
        approved: true,
        page: page,
        limit: 9,
      };

      if (city) params.city = city;
      if (especialidade) params.especialidade = especialidade;

      const response = await axios.get(
        "https://advocacias-api-production.up.railway.app/api/offices",
        {
          params,
        }
      );

      setAdvogados(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar escritórios:", error);
    }
  };

  useEffect(() => {
    fetchAdvogados(search, especialidade, currentPage);
  }, [currentPage, search, especialidade]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchAdvogados(search, especialidade, 1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPagination = () => {
    let pages = [];

    if (totalPages === 1) {
      pages.push(1);
    } else if (currentPage === 1) {
      pages.push(1);
      if (totalPages > 1) pages.push(2);
      if (totalPages > 2) pages.push("...");
    } else if (currentPage === totalPages) {
      if (totalPages > 2) pages.push("...");
      if (totalPages > 1) pages.push(totalPages - 1);
      pages.push(totalPages);
    } else {
      pages.push("...");
      pages.push(currentPage);
      if (currentPage + 1 < totalPages) {
        pages.push("...");
      } else {
        pages.push(currentPage + 1);
      }
    }

    return (
      <div className="flex justify-center space-x-2 my-6">
        <button
          onClick={() => {
            if (currentPage > 1) handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded border ${
            currentPage === 1
              ? "bg-orange-500 text-white cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-800"
          }`}
        >
          Anterior
        </button>
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span key={index} className="px-4 py-2">
                ...
              </span>
            );
          }
          return (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded border ${
                currentPage === page
                  ? "bg-green-700 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => {
            if (currentPage < totalPages) handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded border ${
            currentPage === totalPages
              ? "bg-orange-500 text-white cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-800"
          }`}
        >
          Próximo
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="container mx-auto mb-4">
          <div className="text-center py-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
              Descubra o advogado ideal para você!
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Encontre advogados especializados prontos para atendê-lo
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-6 mb-4 space-y-2 md:space-y-0 md:space-x-4">
            <select
              value={especialidade}
              onChange={(e) => {
                setEspecialidade(e.target.value);
                fetchAdvogados(search, e.target.value);
              }}
              className="p-2 w-full border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 transition duration-200 mb-4 md:mb-0"
            >
              <option value="">Todas as Especialidades</option>
              {especialidades.map((espec) => (
                <option key={espec} value={espec}>
                  {espec}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Pesquisar por cidade..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 w-full border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 transition duration-200 mb-4 md:mb-0"
            />

            <button
              onClick={handleSearch}
              className="p-2 w-full md:w-auto bg-green-700 text-white rounded hover:bg-blue-800 transition duration-200"
            >
              Pesquisar
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {" "}
            {advogados.map((advogado) => (
              <div
                key={advogado._id}
                className="border rounded p-4 bg-white shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 mt-7"
              >
                <img
                  src={advogado.image}
                  alt={advogado.name}
                  className="w-full h-56 object-contain rounded mb-4"
                  loading="lazy"
                />
                <h2 className="text-xl mb-2 font-semibold">{advogado.name}</h2>
                <p className="mb-2">
                  <strong className="text-gray-600">Telefone: </strong>{" "}
                  {advogado.phone}
                </p>
                <p className="mb-2">
                  <strong className="text-gray-600">Especialidade: </strong>
                  {advogado.especialidade &&
                    advogado.especialidade.map((especialidade, index) => (
                      <span key={index}>
                        {especialidade}
                        {index < advogado.especialidade.length - 1 && ", "}
                      </span>
                    ))}
                  {!advogado.especialidade ||
                    (advogado.especialidade.length === 0 && "Não informado")}
                </p>
                <p className="mb-2">
                  <strong className="text-gray-600">Email: </strong>{" "}
                  {advogado.email}
                </p>
                <p className="mb-2">
                  <strong className="text-gray-600">OAB: </strong>{" "}
                  {advogado.oab}
                </p>
                <p className="mb-2">
                  <strong className="text-gray-600">Cidade: </strong>
                  {advogado.city || "Não informado"}
                </p>
                <p className="mb-4">
                  <strong className="text-gray-600">Estado: </strong>
                  {advogado.state || "Não informado"}
                </p>
                <Link
                  to={`/advogado/${advogado._id}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Ver mais detalhes
                </Link>
              </div>
            ))}
          </div>
        </div>
        {renderPagination()}
      </main>

      <Footer />
    </div>
  );
}

export default Principal;
