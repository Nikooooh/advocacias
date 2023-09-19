import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetalhesAdvogado() {
  const [advogado, setAdvogado] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchAdvogado = async () => {
      try {
        const response = await axios.get(
          `https://advocacias-api-production.up.railway.app/api/offices/${id}`
        );
        console.log("Resposta da API:", response.data);
        setAdvogado(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do advogado:", error);
      }
    };

    fetchAdvogado();
  }, [id]);

  if (!advogado)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Carregando...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 pt-12 pb-20 flex justify-center">
      <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md mx-4 md:mx-0">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0 md:w-2/5 relative h-56 md:h-auto">
            <img
              src={advogado.image}
              alt={advogado.name}
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-grow space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              {advogado.name}
            </h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Telefone: </strong>
                {advogado.phone}
              </p>
              <p className="text-gray-600">
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
              <p className="text-gray-600">
                <strong>Email: </strong>
                {advogado.email}
              </p>
              <p className="text-gray-600">
                <strong>Cidade: </strong>
                {advogado.city || "Não informado"}
              </p>
              <p className="text-gray-600">
                <strong>OAB: </strong>
                {advogado.oab || "Não informado"}
              </p>
              <p className="text-gray-600">
                <strong>Estado: </strong>
                {advogado.state || "Não informado"}
              </p>
            </div>
            <div className="mt-4 border-t pt-4">
              <h3 className="text-xl mb-4 font-medium text-gray-700">Sobre</h3>
              <p className="text-gray-600">{advogado.about}</p>
            </div>
            <a
              href={`https://wa.me/${advogado.phone.replace(
                /\D/g,
                ""
              )}?text=Olá,%20gostaria%20de%20marcar%20uma%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto mt-4 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold text-center rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center justify-center"
            >
              Clique aqui para entrar em contato com {advogado.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesAdvogado;
