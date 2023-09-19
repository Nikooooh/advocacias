// ConfirmationPage.js
import React from "react";

function ConfirmationPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl space-y-4">
        <div className="flex justify-center mb-5">
          <span className="text-6xl text-green-500">✅</span>
        </div>
        <h2 className="text-3xl mb-2 font-semibold text-blue-800 text-center">
          Cadastro Enviado!
        </h2>
        <p className="text-gray-700 text-center">
          Seu cadastro foi enviado com sucesso e será analisado. Em até 3 dias
          úteis estará disponível na página principal.
        </p>
      </div>
    </div>
  );
}

export default ConfirmationPage;
